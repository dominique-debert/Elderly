import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  userStatistics: {
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
  createUserStatistics,
  getAllUserStatistics,
  getUserStatisticsById,
  updateUserStatistics,
  deleteUserStatistics,
} from "@/controllers/userStatistics.controller";

describe("UserStatistics Controller", () => {
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

  describe("createUserStatistics", () => {
    it("should create user statistics and return 201", async () => {
      const mockStatsData = {
        userId: "user1",
        totalPoints: 250,
        servicesCompleted: 15,
        servicesRequested: 8,
        averageRating: 4.7,
        totalHoursVolunteered: 45,
        badgesEarned: 5,
        level: 3,
      };
      const mockCreatedStats = {
        ...mockStatsData,
        createdAt: new Date(),
      };

      mockRequest.body = mockStatsData;
      mockPrisma.userStatistics.create.mockResolvedValue(mockCreatedStats);

      await createUserStatistics(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userStatistics.create).toHaveBeenCalledWith({
        data: {
          ...mockStatsData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedStats);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { userId: "user1" };
      mockPrisma.userStatistics.create.mockRejectedValue(mockError);

      await createUserStatistics(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllUserStatistics", () => {
    it("should return all user statistics with 200", async () => {
      const mockStats = [
        {
          userId: "user1",
          totalPoints: 250,
          servicesCompleted: 15,
          createdAt: new Date("2025-10-22"),
        },
        {
          userId: "user2",
          totalPoints: 180,
          servicesCompleted: 10,
          createdAt: new Date("2025-10-20"),
        },
      ];

      mockPrisma.userStatistics.findMany.mockResolvedValue(mockStats);

      await getAllUserStatistics(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userStatistics.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        userStatistics: mockStats,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.userStatistics.findMany.mockRejectedValue(mockError);

      await getAllUserStatistics(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getUserStatisticsById", () => {
    it("should return user statistics by userId with 200", async () => {
      const mockStats = {
        userId: "user1",
        totalPoints: 250,
        servicesCompleted: 15,
        servicesRequested: 8,
        averageRating: 4.7,
        totalHoursVolunteered: 45,
        badgesEarned: 5,
        level: 3,
      };
      mockRequest.params = { userId: "user1" };
      mockPrisma.userStatistics.findUnique.mockResolvedValue(mockStats);

      await getUserStatisticsById(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userStatistics.findUnique).toHaveBeenCalledWith({
        where: { userId: "user1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockStats);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if statistics not found", async () => {
      mockRequest.params = { userId: "nonexistent" };
      mockPrisma.userStatistics.findUnique.mockResolvedValue(null);

      await getUserStatisticsById(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Statistiques utilisateur non trouvées",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { userId: "user1" };
      mockPrisma.userStatistics.findUnique.mockRejectedValue(mockError);

      await getUserStatisticsById(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateUserStatistics", () => {
    it("should update user statistics and return 200", async () => {
      const mockExistingStats = {
        userId: "user1",
        totalPoints: 250,
        servicesCompleted: 15,
      };
      const mockUpdateData = {
        totalPoints: 300,
        servicesCompleted: 18,
        averageRating: 4.8,
        level: 4,
      };
      const mockUpdatedStats = {
        userId: "user1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { userId: "user1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.userStatistics.findUnique.mockResolvedValue(mockExistingStats);
      mockPrisma.userStatistics.update.mockResolvedValue(mockUpdatedStats);

      await updateUserStatistics(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userStatistics.findUnique).toHaveBeenCalledWith({
        where: { userId: "user1" },
      });
      expect(mockPrisma.userStatistics.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { userId: "user1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedStats);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if statistics not found", async () => {
      mockRequest.params = { userId: "nonexistent" };
      mockRequest.body = { totalPoints: 500 };
      mockPrisma.userStatistics.findUnique.mockResolvedValue(null);

      await updateUserStatistics(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Statistiques utilisateur non trouvées",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { userId: "user1" };
      mockRequest.body = { totalPoints: 500 };
      mockPrisma.userStatistics.findUnique.mockRejectedValue(mockError);

      await updateUserStatistics(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteUserStatistics", () => {
    it("should delete user statistics and return 200", async () => {
      const mockStats = {
        userId: "user1",
        totalPoints: 250,
      };
      mockRequest.params = { userId: "user1" };
      mockPrisma.userStatistics.findUnique.mockResolvedValue(mockStats);
      mockPrisma.userStatistics.delete.mockResolvedValue(mockStats);

      await deleteUserStatistics(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userStatistics.findUnique).toHaveBeenCalledWith({
        where: { userId: "user1" },
      });
      expect(mockPrisma.userStatistics.delete).toHaveBeenCalledWith({
        where: { userId: "user1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Statistiques utilisateur supprimées avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if statistics not found", async () => {
      mockRequest.params = { userId: "nonexistent" };
      mockPrisma.userStatistics.findUnique.mockResolvedValue(null);

      await deleteUserStatistics(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Statistiques utilisateur non trouvées",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { userId: "user1" };
      mockPrisma.userStatistics.findUnique.mockRejectedValue(mockError);

      await deleteUserStatistics(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
