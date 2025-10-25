import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  wellnessGoalProgress: {
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

import {
  createWellnessGoalProgress,
  getAllWellnessGoalsProgress,
  getWellnessGoalProgressById,
  updateWellnessGoalProgress,
  deleteWellnessGoalProgress,
} from "@/controllers/wellnessGoalProgress.controller";

describe("WellnessGoalProgress Controller", () => {
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

  describe("createWellnessGoalProgress", () => {
    it("should create a wellness goal progress and return 201", async () => {
      const mockProgressData = {
        wellnessGoalId: "goal1",
        progressValue: 10,
        note: "Great progress!",
        date: new Date("2025-10-23"),
      };
      const mockCreatedProgress = {
        id: "1",
        ...mockProgressData,
        createdAt: new Date(),
      };

      mockRequest.body = mockProgressData;
      mockPrisma.wellnessGoalProgress.create.mockResolvedValue(
        mockCreatedProgress
      );

      await createWellnessGoalProgress(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessGoalProgress.create).toHaveBeenCalledWith({
        data: { ...mockProgressData },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedProgress);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { wellnessGoalId: "goal1" };
      mockPrisma.wellnessGoalProgress.create.mockRejectedValue(mockError);

      await createWellnessGoalProgress(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllWellnessGoalsProgress", () => {
    it("should return all wellness goals progress with 200", async () => {
      const mockProgressList = [
        {
          id: "1",
          wellnessGoalId: "goal1",
          progressValue: 10,
          createdAt: new Date("2025-10-22"),
        },
        {
          id: "2",
          wellnessGoalId: "goal2",
          progressValue: 5,
          createdAt: new Date("2025-10-20"),
        },
      ];

      mockPrisma.wellnessGoalProgress.findMany.mockResolvedValue(
        mockProgressList
      );

      await getAllWellnessGoalsProgress(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessGoalProgress.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        wellnessGoalsProgress: mockProgressList,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.wellnessGoalProgress.findMany.mockRejectedValue(mockError);

      await getAllWellnessGoalsProgress(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getWellnessGoalProgressById", () => {
    it("should return a wellness goal progress by id with 200", async () => {
      const mockProgress = {
        id: "1",
        wellnessGoalId: "goal1",
        progressValue: 10,
        note: "Great progress!",
        date: new Date("2025-10-23"),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessGoalProgress.findUnique.mockResolvedValue(
        mockProgress
      );

      await getWellnessGoalProgressById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessGoalProgress.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockProgress);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if progress not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.wellnessGoalProgress.findUnique.mockResolvedValue(null);

      await getWellnessGoalProgressById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Progrès de l'objectif bien-être non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessGoalProgress.findUnique.mockRejectedValue(mockError);

      await getWellnessGoalProgressById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateWellnessGoalProgress", () => {
    it("should update a wellness goal progress and return 200", async () => {
      const mockExistingProgress = {
        id: "1",
        wellnessGoalId: "goal1",
        progressValue: 10,
      };
      const mockUpdateData = {
        progressValue: 15,
        note: "Updated progress",
      };
      const mockUpdatedProgress = {
        id: "1",
        wellnessGoalId: "goal1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.wellnessGoalProgress.findUnique.mockResolvedValue(
        mockExistingProgress
      );
      mockPrisma.wellnessGoalProgress.update.mockResolvedValue(
        mockUpdatedProgress
      );

      await updateWellnessGoalProgress(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessGoalProgress.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.wellnessGoalProgress.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedProgress);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if progress not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { progressValue: 20 };
      mockPrisma.wellnessGoalProgress.findUnique.mockResolvedValue(null);

      await updateWellnessGoalProgress(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Progrès de l'objectif bien-être non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { progressValue: 20 };
      mockPrisma.wellnessGoalProgress.findUnique.mockRejectedValue(mockError);

      await updateWellnessGoalProgress(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteWellnessGoalProgress", () => {
    it("should delete a wellness goal progress and return 200", async () => {
      const mockProgress = {
        id: "1",
        wellnessGoalId: "goal1",
        progressValue: 10,
      };
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessGoalProgress.findUnique.mockResolvedValue(
        mockProgress
      );
      mockPrisma.wellnessGoalProgress.delete.mockResolvedValue(mockProgress);

      await deleteWellnessGoalProgress(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessGoalProgress.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.wellnessGoalProgress.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Progrès de l'objectif bien-être supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if progress not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.wellnessGoalProgress.findUnique.mockResolvedValue(null);

      await deleteWellnessGoalProgress(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Progrès de l'objectif bien-être non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessGoalProgress.findUnique.mockRejectedValue(mockError);

      await deleteWellnessGoalProgress(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
