import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  wellnessGoal: {
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
  createWellnessGoal,
  getAllWellnessGoals,
  getWellnessGoalById,
  updateWellnessGoal,
  deleteWellnessGoal,
} from "@/controllers/wellnessGoal.controller";

describe("WellnessGoal Controller", () => {
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

  describe("createWellnessGoal", () => {
    it("should create a wellness goal and return 201", async () => {
      const mockGoalData = {
        userId: "user1",
        title: "Daily Meditation",
        description: "Meditate for 10 minutes every day",
        category: "Mental Health",
        targetValue: 30,
        currentValue: 0,
        unit: "days",
        startDate: new Date("2025-10-01"),
        targetDate: new Date("2025-10-31"),
        status: "ACTIVE",
        frequency: "DAILY",
      };
      const mockCreatedGoal = {
        id: "1",
        ...mockGoalData,
        createdAt: new Date(),
      };

      mockRequest.body = mockGoalData;
      mockPrisma.wellnessGoal.create.mockResolvedValue(mockCreatedGoal);

      await createWellnessGoal(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessGoal.create).toHaveBeenCalledWith({
        data: {
          ...mockGoalData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedGoal);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { userId: "user1" };
      mockPrisma.wellnessGoal.create.mockRejectedValue(mockError);

      await createWellnessGoal(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllWellnessGoals", () => {
    it("should return all wellness goals with 200", async () => {
      const mockGoals = [
        {
          id: "1",
          userId: "user1",
          title: "Daily Meditation",
          status: "ACTIVE",
          createdAt: new Date("2025-10-22"),
        },
        {
          id: "2",
          userId: "user2",
          title: "Weekly Exercise",
          status: "COMPLETED",
          createdAt: new Date("2025-10-20"),
        },
      ];

      mockPrisma.wellnessGoal.findMany.mockResolvedValue(mockGoals);

      await getAllWellnessGoals(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessGoal.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        wellnessGoals: mockGoals,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.wellnessGoal.findMany.mockRejectedValue(mockError);

      await getAllWellnessGoals(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getWellnessGoalById", () => {
    it("should return a wellness goal by id with 200", async () => {
      const mockGoal = {
        id: "1",
        userId: "user1",
        title: "Daily Meditation",
        description: "Meditate for 10 minutes every day",
        category: "Mental Health",
        targetValue: 30,
        currentValue: 15,
        unit: "days",
        startDate: new Date("2025-10-01"),
        targetDate: new Date("2025-10-31"),
        status: "ACTIVE",
        frequency: "DAILY",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessGoal.findUnique.mockResolvedValue(mockGoal);

      await getWellnessGoalById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessGoal.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockGoal);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if goal not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.wellnessGoal.findUnique.mockResolvedValue(null);

      await getWellnessGoalById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Objectif bien-être non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessGoal.findUnique.mockRejectedValue(mockError);

      await getWellnessGoalById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateWellnessGoal", () => {
    it("should update a wellness goal and return 200", async () => {
      const mockExistingGoal = {
        id: "1",
        userId: "user1",
        title: "Daily Meditation",
        currentValue: 15,
      };
      const mockUpdateData = {
        currentValue: 20,
        status: "IN_PROGRESS",
        notes: "Making great progress!",
      };
      const mockUpdatedGoal = {
        id: "1",
        userId: "user1",
        title: "Daily Meditation",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.wellnessGoal.findUnique.mockResolvedValue(mockExistingGoal);
      mockPrisma.wellnessGoal.update.mockResolvedValue(mockUpdatedGoal);

      await updateWellnessGoal(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessGoal.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.wellnessGoal.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedGoal);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if goal not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { currentValue: 25 };
      mockPrisma.wellnessGoal.findUnique.mockResolvedValue(null);

      await updateWellnessGoal(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Objectif bien-être non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { currentValue: 25 };
      mockPrisma.wellnessGoal.findUnique.mockRejectedValue(mockError);

      await updateWellnessGoal(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteWellnessGoal", () => {
    it("should delete a wellness goal and return 200", async () => {
      const mockGoal = {
        id: "1",
        userId: "user1",
        title: "Daily Meditation",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessGoal.findUnique.mockResolvedValue(mockGoal);
      mockPrisma.wellnessGoal.delete.mockResolvedValue(mockGoal);

      await deleteWellnessGoal(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessGoal.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.wellnessGoal.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Objectif bien-être supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if goal not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.wellnessGoal.findUnique.mockResolvedValue(null);

      await deleteWellnessGoal(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Objectif bien-être non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessGoal.findUnique.mockRejectedValue(mockError);

      await deleteWellnessGoal(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
