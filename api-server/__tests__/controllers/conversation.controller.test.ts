import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  conversation: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

jest.mock("@/prisma/client.js", () => ({
  PrismaClient: jest.fn(() => mockPrisma),
}));

import {
  createConversation,
  getAllConversations,
  getConversationById,
  updateConversation,
  deleteConversation,
} from "@/controllers/conversation.controller";
import { IConversation } from "@/types";

describe("Conversation Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {
      params: {},
      body: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();

    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe("createConversation", () => {
    it("should create conversation and return 201", async () => {
      const mockConversation = {
        id: "1",
        title: "Chat Support",
        participants: ["user1", "user2"],
        createdAt: new Date(),
      };

      mockRequest.body = {
        title: "Chat Support",
        participants: ["user1", "user2"],
      };
      mockPrisma.conversation.create.mockResolvedValue(mockConversation);

      await createConversation(
        mockRequest as Request<{}, {}, IConversation>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.conversation.create).toHaveBeenCalledWith({
        data: mockRequest.body,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockConversation);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when creation fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { title: "Chat Support" };
      mockPrisma.conversation.create.mockRejectedValue(mockError);

      await createConversation(
        mockRequest as Request<{}, {}, IConversation>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllConversations", () => {
    it("should get all conversations ordered by title and return 200", async () => {
      const mockConversations = [
        {
          id: "1",
          title: "Conversation A",
          participants: ["user1", "user2"],
        },
        {
          id: "2",
          title: "Conversation B",
          participants: ["user3", "user4"],
        },
      ];

      mockPrisma.conversation.findMany.mockResolvedValue(mockConversations);

      await getAllConversations(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.conversation.findMany).toHaveBeenCalledWith({
        orderBy: { title: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        conversations: mockConversations,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return empty array when no conversations exist", async () => {
      mockPrisma.conversation.findMany.mockResolvedValue([]);

      await getAllConversations(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ conversations: [] });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockPrisma.conversation.findMany.mockRejectedValue(mockError);

      await getAllConversations(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getConversationById", () => {
    it("should get conversation by id and return 200", async () => {
      const mockConversation = {
        id: "1",
        title: "Chat Support",
        participants: ["user1", "user2"],
      };

      mockRequest.params = { id: "1" };
      mockPrisma.conversation.findUnique.mockResolvedValue(mockConversation);

      await getConversationById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.conversation.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockConversation);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when conversation not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.conversation.findUnique.mockResolvedValue(null);

      await getConversationById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Conversation non trouvée",
        })
      );
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.conversation.findUnique.mockRejectedValue(mockError);

      await getConversationById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("updateConversation", () => {
    it("should update conversation and return 200", async () => {
      const existingConversation = {
        id: "1",
        title: "Old Title",
        participants: ["user1", "user2"],
      };
      const updatedConversation = {
        id: "1",
        title: "New Title",
        participants: ["user1", "user2"],
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = { title: "New Title" };
      mockPrisma.conversation.findUnique.mockResolvedValue(
        existingConversation
      );
      mockPrisma.conversation.update.mockResolvedValue(updatedConversation);

      await updateConversation(
        mockRequest as Request<{ id: string }, IConversation>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.conversation.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.conversation.update).toHaveBeenCalledWith({
        data: {
          title: "New Title",
          updatedAt: expect.any(Date),
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedConversation);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when conversation not found", async () => {
      mockRequest.params = { id: "999" };
      mockRequest.body = { title: "New Title" };
      mockPrisma.conversation.findUnique.mockResolvedValue(null);

      await updateConversation(
        mockRequest as Request<{ id: string }, IConversation>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Conversation non trouvée",
        })
      );
      expect(mockPrisma.conversation.update).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when update fails", async () => {
      const mockError = new Error("Database error");
      const existingConversation = { id: "1", title: "Old Title" };

      mockRequest.params = { id: "1" };
      mockRequest.body = { title: "New Title" };
      mockPrisma.conversation.findUnique.mockResolvedValue(
        existingConversation
      );
      mockPrisma.conversation.update.mockRejectedValue(mockError);

      await updateConversation(
        mockRequest as Request<{ id: string }, IConversation>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("deleteConversation", () => {
    it("should delete conversation and return 200", async () => {
      const existingConversation = {
        id: "1",
        title: "Chat Support",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.conversation.findUnique.mockResolvedValue(
        existingConversation
      );
      mockPrisma.conversation.delete.mockResolvedValue(existingConversation);

      await deleteConversation(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.conversation.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.conversation.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Conversation supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when conversation not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.conversation.findUnique.mockResolvedValue(null);

      await deleteConversation(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Conversation non trouvée",
        })
      );
      expect(mockPrisma.conversation.delete).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when delete fails", async () => {
      const mockError = new Error("Database error");
      const existingConversation = { id: "1", title: "Chat Support" };

      mockRequest.params = { id: "1" };
      mockPrisma.conversation.findUnique.mockResolvedValue(
        existingConversation
      );
      mockPrisma.conversation.delete.mockRejectedValue(mockError);

      await deleteConversation(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
