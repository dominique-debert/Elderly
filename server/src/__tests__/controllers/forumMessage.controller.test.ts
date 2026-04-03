import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  forumMessage: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => mockPrisma),
}));

// Import controller after mocking
import {
  createForumMessage,
  getAllForumMessages,
  getForumMessageById,
  updateForumMessage,
  deleteForumMessage,
} from "@/controllers/forumMessage.controller";

describe("ForumMessage Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createForumMessage", () => {
    it("should create a forum message and return 201", async () => {
      const mockMessageData = { content: "Test message", userId: "user1" };
      const mockCreatedMessage = {
        id: "1",
        ...mockMessageData,
        createdAt: new Date(),
      };

      mockRequest.body = mockMessageData;
      mockPrisma.forumMessage.create.mockResolvedValue(mockCreatedMessage);

      await createForumMessage(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.forumMessage.create).toHaveBeenCalledWith({
        data: mockMessageData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedMessage);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { content: "Test" };
      mockPrisma.forumMessage.create.mockRejectedValue(mockError);

      await createForumMessage(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllForumMessages", () => {
    it("should return all forum messages with 200", async () => {
      const mockMessages = [
        { id: "1", content: "Message 1", createdAt: new Date() },
        { id: "2", content: "Message 2", createdAt: new Date() },
      ];

      mockPrisma.forumMessage.findMany.mockResolvedValue(mockMessages);

      await getAllForumMessages(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.forumMessage.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        forumMessages: mockMessages,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.forumMessage.findMany.mockRejectedValue(mockError);

      await getAllForumMessages(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getForumMessageById", () => {
    it("should return a forum message by id with 200", async () => {
      const mockMessage = {
        id: "1",
        content: "Test message",
        createdAt: new Date(),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.forumMessage.findUnique.mockResolvedValue(mockMessage);

      await getForumMessageById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.forumMessage.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockMessage);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if message not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.forumMessage.findUnique.mockResolvedValue(null);

      await getForumMessageById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Message non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.forumMessage.findUnique.mockRejectedValue(mockError);

      await getForumMessageById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateForumMessage", () => {
    it("should update a forum message and return 200", async () => {
      const mockExistingMessage = { id: "1", content: "Old content" };
      const mockUpdateData = { content: "Updated content" };
      const mockUpdatedMessage = {
        id: "1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.forumMessage.findUnique.mockResolvedValue(mockExistingMessage);
      mockPrisma.forumMessage.update.mockResolvedValue(mockUpdatedMessage);

      await updateForumMessage(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.forumMessage.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.forumMessage.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedMessage);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if message not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { content: "Updated" };
      mockPrisma.forumMessage.findUnique.mockResolvedValue(null);

      await updateForumMessage(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Message non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { content: "Updated" };
      mockPrisma.forumMessage.findUnique.mockRejectedValue(mockError);

      await updateForumMessage(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteForumMessage", () => {
    it("should delete a forum message and return 200", async () => {
      const mockMessage = { id: "1", content: "Test message" };
      mockRequest.params = { id: "1" };
      mockPrisma.forumMessage.findUnique.mockResolvedValue(mockMessage);
      mockPrisma.forumMessage.delete.mockResolvedValue(mockMessage);

      await deleteForumMessage(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.forumMessage.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.forumMessage.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Message supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if message not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.forumMessage.findUnique.mockResolvedValue(null);

      await deleteForumMessage(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Message non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.forumMessage.findUnique.mockRejectedValue(mockError);

      await deleteForumMessage(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
