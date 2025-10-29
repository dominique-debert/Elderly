import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  message: {
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
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
} from "@/controllers/message.controller";

describe("Message Controller", () => {
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

  describe("createMessage", () => {
    it("should create a message and return 201", async () => {
      const mockMessageData = {
        content: "Bonjour, comment allez-vous?",
        senderId: "user1",
        receiverId: "user2",
        sendDate: new Date(),
      };
      const mockCreatedMessage = {
        id: "1",
        ...mockMessageData,
        createdAt: new Date(),
      };

      mockRequest.body = mockMessageData;
      mockPrisma.message.create.mockResolvedValue(mockCreatedMessage);

      await createMessage(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.message.create).toHaveBeenCalledWith({
        data: mockMessageData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedMessage);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { content: "Test" };
      mockPrisma.message.create.mockRejectedValue(mockError);

      await createMessage(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllMessages", () => {
    it("should return all messages with 200", async () => {
      const mockMessages = [
        {
          id: "1",
          content: "Message récent",
          sendDate: new Date("2025-10-22"),
        },
        {
          id: "2",
          content: "Message ancien",
          sendDate: new Date("2025-10-20"),
        },
      ];

      mockPrisma.message.findMany.mockResolvedValue(mockMessages);

      await getAllMessages(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.message.findMany).toHaveBeenCalledWith({
        orderBy: { sendDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        messages: mockMessages,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.message.findMany.mockRejectedValue(mockError);

      await getAllMessages(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getMessageById", () => {
    it("should return a message by id with 200", async () => {
      const mockMessage = {
        id: "1",
        content: "Bonjour, comment allez-vous?",
        senderId: "user1",
        receiverId: "user2",
        sendDate: new Date(),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.message.findUnique.mockResolvedValue(mockMessage);

      await getMessageById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.message.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockMessage);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if message not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.message.findUnique.mockResolvedValue(null);

      await getMessageById(
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
      mockPrisma.message.findUnique.mockRejectedValue(mockError);

      await getMessageById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateMessage", () => {
    it("should update a message and return 200", async () => {
      const mockExistingMessage = {
        id: "1",
        content: "Old content",
        senderId: "user1",
      };
      const mockUpdateData = {
        content: "Updated content",
        senderId: "user1",
        receiverId: "user2",
      };
      const mockUpdatedMessage = {
        id: "1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.message.findUnique.mockResolvedValue(mockExistingMessage);
      mockPrisma.message.update.mockResolvedValue(mockUpdatedMessage);

      await updateMessage(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.message.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.message.update).toHaveBeenCalledWith({
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
      mockPrisma.message.findUnique.mockResolvedValue(null);

      await updateMessage(
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
      mockPrisma.message.findUnique.mockRejectedValue(mockError);

      await updateMessage(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteMessage", () => {
    it("should delete a message and return 200", async () => {
      const mockMessage = {
        id: "1",
        content: "Message to delete",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.message.findUnique.mockResolvedValue(mockMessage);
      mockPrisma.message.delete.mockResolvedValue(mockMessage);

      await deleteMessage(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.message.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.message.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Conversation supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if message not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.message.findUnique.mockResolvedValue(null);

      await deleteMessage(
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
      mockPrisma.message.findUnique.mockRejectedValue(mockError);

      await deleteMessage(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
