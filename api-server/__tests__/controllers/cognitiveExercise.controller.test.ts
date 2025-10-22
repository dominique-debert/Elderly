import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  cognitiveExercise: {
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
  createCognitiveExercise,
  getAllCognitiveExercises,
  getCognitiveExerciseById,
  updateCognitiveExercise,
  deleteCognitiveExercise,
} from "@/controllers/cognitiveExercise.controller";
import { ICognitiveExercise } from "@/types";

describe("CognitiveExercise Controller", () => {
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

  describe("createCognitiveExercise", () => {
    it("should create cognitive exercise and return 201", async () => {
      const mockExercise = {
        id: "1",
        name: "Memory Game",
        description: "Test your memory",
        difficulty: "medium",
        createdAt: new Date(),
      };

      mockRequest.body = {
        name: "Memory Game",
        description: "Test your memory",
        difficulty: "medium",
      };
      mockPrisma.cognitiveExercise.create.mockResolvedValue(mockExercise);

      await createCognitiveExercise(
        mockRequest as Request<{}, {}, ICognitiveExercise>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.cognitiveExercise.create).toHaveBeenCalledWith({
        data: mockRequest.body,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockExercise);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when creation fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { name: "Memory Game" };
      mockPrisma.cognitiveExercise.create.mockRejectedValue(mockError);

      await createCognitiveExercise(
        mockRequest as Request<{}, {}, ICognitiveExercise>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllCognitiveExercises", () => {
    it("should get all cognitive exercises ordered by name and return 200", async () => {
      const mockExercises = [
        {
          id: "1",
          name: "Exercise A",
          description: "First exercise",
          difficulty: "easy",
        },
        {
          id: "2",
          name: "Exercise B",
          description: "Second exercise",
          difficulty: "hard",
        },
      ];

      mockPrisma.cognitiveExercise.findMany.mockResolvedValue(mockExercises);

      await getAllCognitiveExercises(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.cognitiveExercise.findMany).toHaveBeenCalledWith({
        orderBy: { name: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        exercises: mockExercises,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return empty array when no exercises exist", async () => {
      mockPrisma.cognitiveExercise.findMany.mockResolvedValue([]);

      await getAllCognitiveExercises(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ exercises: [] });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockPrisma.cognitiveExercise.findMany.mockRejectedValue(mockError);

      await getAllCognitiveExercises(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getCognitiveExerciseById", () => {
    it("should get cognitive exercise by id and return 200", async () => {
      const mockExercise = {
        id: "1",
        name: "Memory Game",
        description: "Test your memory",
        difficulty: "medium",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.cognitiveExercise.findUnique.mockResolvedValue(mockExercise);

      await getCognitiveExerciseById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.cognitiveExercise.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockExercise);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when exercise not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.cognitiveExercise.findUnique.mockResolvedValue(null);

      await getCognitiveExerciseById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Exercice cognitif non trouvé",
        })
      );
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.cognitiveExercise.findUnique.mockRejectedValue(mockError);

      await getCognitiveExerciseById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("updateCognitiveExercise", () => {
    it("should update cognitive exercise and return 200", async () => {
      const existingExercise = {
        id: "1",
        name: "Old Name",
        description: "Old Description",
        difficulty: "easy",
      };
      const updatedExercise = {
        id: "1",
        name: "New Name",
        description: "Old Description",
        difficulty: "easy",
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = { name: "New Name" };
      mockPrisma.cognitiveExercise.findUnique.mockResolvedValue(
        existingExercise
      );
      mockPrisma.cognitiveExercise.update.mockResolvedValue(updatedExercise);

      await updateCognitiveExercise(
        mockRequest as Request<{ id: string }, ICognitiveExercise>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.cognitiveExercise.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.cognitiveExercise.update).toHaveBeenCalledWith({
        data: {
          name: "New Name",
          updatedAt: expect.any(Date),
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedExercise);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when exercise not found", async () => {
      mockRequest.params = { id: "999" };
      mockRequest.body = { name: "New Name" };
      mockPrisma.cognitiveExercise.findUnique.mockResolvedValue(null);

      await updateCognitiveExercise(
        mockRequest as Request<{ id: string }, ICognitiveExercise>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Exercice cognitif non trouvé",
        })
      );
      expect(mockPrisma.cognitiveExercise.update).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when update fails", async () => {
      const mockError = new Error("Database error");
      const existingExercise = { id: "1", name: "Old Name" };

      mockRequest.params = { id: "1" };
      mockRequest.body = { name: "New Name" };
      mockPrisma.cognitiveExercise.findUnique.mockResolvedValue(
        existingExercise
      );
      mockPrisma.cognitiveExercise.update.mockRejectedValue(mockError);

      await updateCognitiveExercise(
        mockRequest as Request<{ id: string }, ICognitiveExercise>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("deleteCognitiveExercise", () => {
    it("should delete cognitive exercise and return 200", async () => {
      const existingExercise = {
        id: "1",
        name: "Memory Game",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.cognitiveExercise.findUnique.mockResolvedValue(
        existingExercise
      );
      mockPrisma.cognitiveExercise.delete.mockResolvedValue(existingExercise);

      await deleteCognitiveExercise(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.cognitiveExercise.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.cognitiveExercise.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Exercice cognitif supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when exercise not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.cognitiveExercise.findUnique.mockResolvedValue(null);

      await deleteCognitiveExercise(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Exercice cognitif non trouvé",
        })
      );
      expect(mockPrisma.cognitiveExercise.delete).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when delete fails", async () => {
      const mockError = new Error("Database error");
      const existingExercise = { id: "1", name: "Memory Game" };

      mockRequest.params = { id: "1" };
      mockPrisma.cognitiveExercise.findUnique.mockResolvedValue(
        existingExercise
      );
      mockPrisma.cognitiveExercise.delete.mockRejectedValue(mockError);

      await deleteCognitiveExercise(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
