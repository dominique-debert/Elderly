import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  conversationParticipant: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn(() => mockPrisma),
}));

import {
  createConversationParticipant,
  getAllConversationParticipants,
  getConversationParticipantById,
  updateConversationParticipant,
  deleteConversationParticipant,
} from "@/controllers";
import { IConversationParticipant } from "@/types";

describe("ConversationParticipant Controller", () => {
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

  describe("createConversationParticipant", () => {
    it("should create conversation participant and return 201", async () => {
      const mockParticipant = {
        id: "1",
        conversationId: "conv123",
        userId: "user456",
        dateAdded: new Date(),
        createdAt: new Date(),
      };

      mockRequest.body = {
        conversationId: "conv123",
        userId: "user456",
        dateAdded: new Date(),
      };
      mockPrisma.conversationParticipant.create.mockResolvedValue(
        mockParticipant
      );

      await createConversationParticipant(
        mockRequest as Request<{}, {}, IConversationParticipant>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.conversationParticipant.create).toHaveBeenCalledWith({
        data: mockRequest.body,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockParticipant);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when creation fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { conversationId: "conv123", userId: "user456" };
      mockPrisma.conversationParticipant.create.mockRejectedValue(mockError);

      await createConversationParticipant(
        mockRequest as Request<{}, {}, IConversationParticipant>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllConversationParticipants", () => {
    it("should get all conversation participants ordered by dateAdded and return 200", async () => {
      const mockParticipants = [
        {
          id: "1",
          conversationId: "conv123",
          userId: "user1",
          dateAdded: new Date("2023-01-01"),
        },
        {
          id: "2",
          conversationId: "conv456",
          userId: "user2",
          dateAdded: new Date("2023-01-02"),
        },
      ];

      mockPrisma.conversationParticipant.findMany.mockResolvedValue(
        mockParticipants
      );

      await getAllConversationParticipants(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.conversationParticipant.findMany).toHaveBeenCalledWith({
        orderBy: { dateAdded: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        conversationParticipants: mockParticipants,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return empty array when no participants exist", async () => {
      mockPrisma.conversationParticipant.findMany.mockResolvedValue([]);

      await getAllConversationParticipants(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        conversationParticipants: [],
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockPrisma.conversationParticipant.findMany.mockRejectedValue(mockError);

      await getAllConversationParticipants(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getConversationParticipantById", () => {
    it("should get conversation participant by id and return 200", async () => {
      const mockParticipant = {
        id: "1",
        conversationId: "conv123",
        userId: "user456",
        dateAdded: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockPrisma.conversationParticipant.findUnique.mockResolvedValue(
        mockParticipant
      );

      await getConversationParticipantById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(
        mockPrisma.conversationParticipant.findUnique
      ).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockParticipant);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when participant not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.conversationParticipant.findUnique.mockResolvedValue(null);

      await getConversationParticipantById(
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
      mockPrisma.conversationParticipant.findUnique.mockRejectedValue(
        mockError
      );

      await getConversationParticipantById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("updateConversationParticipant", () => {
    it("should update conversation participant and return 200", async () => {
      const existingParticipant = {
        id: "1",
        conversationId: "conv123",
        userId: "user456",
        role: "member",
      };
      const updatedParticipant = {
        id: "1",
        conversationId: "conv123",
        userId: "user456",
        role: "admin",
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = { role: "admin" };
      mockPrisma.conversationParticipant.findUnique.mockResolvedValue(
        existingParticipant
      );
      mockPrisma.conversationParticipant.update.mockResolvedValue(
        updatedParticipant
      );

      await updateConversationParticipant(
        mockRequest as Request<{ id: string }, IConversationParticipant>,
        mockResponse as Response,
        mockNext
      );

      expect(
        mockPrisma.conversationParticipant.findUnique
      ).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.conversationParticipant.update).toHaveBeenCalledWith({
        data: {
          role: "admin",
          updatedAt: expect.any(Date),
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedParticipant);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when participant not found", async () => {
      mockRequest.params = { id: "999" };
      mockRequest.body = { role: "admin" };
      mockPrisma.conversationParticipant.findUnique.mockResolvedValue(null);

      await updateConversationParticipant(
        mockRequest as Request<{ id: string }, IConversationParticipant>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Conversation non trouvée",
        })
      );
      expect(mockPrisma.conversationParticipant.update).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when update fails", async () => {
      const mockError = new Error("Database error");
      const existingParticipant = { id: "1", role: "member" };

      mockRequest.params = { id: "1" };
      mockRequest.body = { role: "admin" };
      mockPrisma.conversationParticipant.findUnique.mockResolvedValue(
        existingParticipant
      );
      mockPrisma.conversationParticipant.update.mockRejectedValue(mockError);

      await updateConversationParticipant(
        mockRequest as Request<{ id: string }, IConversationParticipant>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("deleteConversationParticipant", () => {
    it("should delete conversation participant and return 200", async () => {
      const existingParticipant = {
        id: "1",
        conversationId: "conv123",
        userId: "user456",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.conversationParticipant.findUnique.mockResolvedValue(
        existingParticipant
      );
      mockPrisma.conversationParticipant.delete.mockResolvedValue(
        existingParticipant
      );

      await deleteConversationParticipant(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(
        mockPrisma.conversationParticipant.findUnique
      ).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.conversationParticipant.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Conversation supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when participant not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.conversationParticipant.findUnique.mockResolvedValue(null);

      await deleteConversationParticipant(
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
      expect(mockPrisma.conversationParticipant.delete).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when delete fails", async () => {
      const mockError = new Error("Database error");
      const existingParticipant = {
        id: "1",
        conversationId: "conv123",
        userId: "user456",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.conversationParticipant.findUnique.mockResolvedValue(
        existingParticipant
      );
      mockPrisma.conversationParticipant.delete.mockRejectedValue(mockError);

      await deleteConversationParticipant(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
