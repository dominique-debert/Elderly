import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  exerciseProgram: {
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
  createExerciseProgram,
  getAllExercisePrograms,
  getExerciseProgramById,
  updateExerciseProgram,
  deleteExerciseProgram,
} from "@/controllers";
import { IExerciseProgram } from "@/types";

describe("ExerciseProgram Controller", () => {
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

  describe("createExerciseProgram", () => {
    it("should create exercise program and return 201", async () => {
      const mockProgram = {
        id: "1",
        name: "Morning Stretches",
        description: "Daily stretching routine",
        duration: 30,
        createdAt: new Date(),
      };

      mockRequest.body = {
        name: "Morning Stretches",
        description: "Daily stretching routine",
        duration: 30,
      };
      mockPrisma.exerciseProgram.create.mockResolvedValue(mockProgram);

      await createExerciseProgram(
        mockRequest as Request<{}, {}, IExerciseProgram>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.exerciseProgram.create).toHaveBeenCalledWith({
        data: mockRequest.body,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockProgram);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when creation fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { name: "Morning Stretches" };
      mockPrisma.exerciseProgram.create.mockRejectedValue(mockError);

      await createExerciseProgram(
        mockRequest as Request<{}, {}, IExerciseProgram>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllExercisePrograms", () => {
    it("should get all exercise programs ordered by name and return 200", async () => {
      const mockPrograms = [
        {
          id: "1",
          name: "Program A",
          description: "First program",
          duration: 30,
        },
        {
          id: "2",
          name: "Program B",
          description: "Second program",
          duration: 45,
        },
      ];

      mockPrisma.exerciseProgram.findMany.mockResolvedValue(mockPrograms);

      await getAllExercisePrograms(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.exerciseProgram.findMany).toHaveBeenCalledWith({
        orderBy: { name: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        programs: mockPrograms,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return empty array when no programs exist", async () => {
      mockPrisma.exerciseProgram.findMany.mockResolvedValue([]);

      await getAllExercisePrograms(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ programs: [] });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockPrisma.exerciseProgram.findMany.mockRejectedValue(mockError);

      await getAllExercisePrograms(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getExerciseProgramById", () => {
    it("should get exercise program by id and return 200", async () => {
      const mockProgram = {
        id: "1",
        name: "Morning Stretches",
        description: "Daily stretching routine",
        duration: 30,
      };

      mockRequest.params = { id: "1" };
      mockPrisma.exerciseProgram.findUnique.mockResolvedValue(mockProgram);

      await getExerciseProgramById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.exerciseProgram.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockProgram);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when program not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.exerciseProgram.findUnique.mockResolvedValue(null);

      await getExerciseProgramById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Programme d'exercices non trouvé",
        })
      );
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.exerciseProgram.findUnique.mockRejectedValue(mockError);

      await getExerciseProgramById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("updateExerciseProgram", () => {
    it("should update exercise program and return 200", async () => {
      const existingProgram = {
        id: "1",
        name: "Old Name",
        description: "Old Description",
        duration: 30,
      };
      const updatedProgram = {
        id: "1",
        name: "New Name",
        description: "Old Description",
        duration: 30,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = { name: "New Name" };
      mockPrisma.exerciseProgram.findUnique.mockResolvedValue(existingProgram);
      mockPrisma.exerciseProgram.update.mockResolvedValue(updatedProgram);

      await updateExerciseProgram(
        mockRequest as Request<{ id: string }, {}, IExerciseProgram>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.exerciseProgram.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.exerciseProgram.update).toHaveBeenCalledWith({
        data: {
          name: "New Name",
          updatedAt: expect.any(Date),
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedProgram);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when program not found", async () => {
      mockRequest.params = { id: "999" };
      mockRequest.body = { name: "New Name" };
      mockPrisma.exerciseProgram.findUnique.mockResolvedValue(null);

      await updateExerciseProgram(
        mockRequest as Request<{ id: string }, {}, IExerciseProgram>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Programme d'exercices non trouvé",
        })
      );
      expect(mockPrisma.exerciseProgram.update).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when update fails", async () => {
      const mockError = new Error("Database error");
      const existingProgram = { id: "1", name: "Old Name" };

      mockRequest.params = { id: "1" };
      mockRequest.body = { name: "New Name" };
      mockPrisma.exerciseProgram.findUnique.mockResolvedValue(existingProgram);
      mockPrisma.exerciseProgram.update.mockRejectedValue(mockError);

      await updateExerciseProgram(
        mockRequest as Request<{ id: string }, {}, IExerciseProgram>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("deleteExerciseProgram", () => {
    it("should delete exercise program and return 200", async () => {
      const existingProgram = {
        id: "1",
        name: "Morning Stretches",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.exerciseProgram.findUnique.mockResolvedValue(existingProgram);
      mockPrisma.exerciseProgram.delete.mockResolvedValue(existingProgram);

      await deleteExerciseProgram(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.exerciseProgram.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.exerciseProgram.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Programme supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when program not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.exerciseProgram.findUnique.mockResolvedValue(null);

      await deleteExerciseProgram(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Programme non trouvé",
        })
      );
      expect(mockPrisma.exerciseProgram.delete).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when delete fails", async () => {
      const mockError = new Error("Database error");
      const existingProgram = { id: "1", name: "Morning Stretches" };

      mockRequest.params = { id: "1" };
      mockPrisma.exerciseProgram.findUnique.mockResolvedValue(existingProgram);
      mockPrisma.exerciseProgram.delete.mockRejectedValue(mockError);

      await deleteExerciseProgram(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
