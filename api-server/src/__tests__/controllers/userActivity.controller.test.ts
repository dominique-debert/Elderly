import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  userActivity: {
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
  createUserActivity,
  getAllUserActivities,
  getUserActivityById,
  updateUserActivity,
  deleteUserActivity,
} from "@/controllers/userActivity.controller";

describe("UserActivity Controller", () => {
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

  describe("createUserActivity", () => {
    it("should create a user activity and return 201", async () => {
      const mockActivityData = {
        userId: "user1",
        activityType: "SERVICE_COMPLETED",
        description: "Completed gardening service",
        completionDate: new Date("2025-10-20"),
        points: 50,
        badgeEarned: "Green Thumb",
      };
      const mockCreatedActivity = {
        id: "1",
        ...mockActivityData,
        createdAt: new Date(),
      };

      mockRequest.body = mockActivityData;
      mockPrisma.userActivity.create.mockResolvedValue(mockCreatedActivity);

      await createUserActivity(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userActivity.create).toHaveBeenCalledWith({
        data: {
          ...mockActivityData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedActivity);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { userId: "user1" };
      mockPrisma.userActivity.create.mockRejectedValue(mockError);

      await createUserActivity(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllUserActivities", () => {
    it("should return all user activities with 200", async () => {
      const mockActivities = [
        {
          id: "1",
          userId: "user1",
          activityType: "SERVICE_COMPLETED",
          completionDate: new Date("2025-10-22"),
          points: 50,
        },
        {
          id: "2",
          userId: "user2",
          activityType: "EVENT_ATTENDED",
          completionDate: new Date("2025-10-20"),
          points: 30,
        },
      ];

      mockPrisma.userActivity.findMany.mockResolvedValue(mockActivities);

      await getAllUserActivities(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userActivity.findMany).toHaveBeenCalledWith({
        orderBy: { completionDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        userActivities: mockActivities,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.userActivity.findMany.mockRejectedValue(mockError);

      await getAllUserActivities(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getUserActivityById", () => {
    it("should return a user activity by id with 200", async () => {
      const mockActivity = {
        id: "1",
        userId: "user1",
        activityType: "SERVICE_COMPLETED",
        description: "Completed gardening service",
        completionDate: new Date("2025-10-20"),
        points: 50,
        badgeEarned: "Green Thumb",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.userActivity.findUnique.mockResolvedValue(mockActivity);

      await getUserActivityById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userActivity.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockActivity);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if activity not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.userActivity.findUnique.mockResolvedValue(null);

      await getUserActivityById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Activité utilisateur non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.userActivity.findUnique.mockRejectedValue(mockError);

      await getUserActivityById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateUserActivity", () => {
    it("should update a user activity and return 200", async () => {
      const mockExistingActivity = {
        id: "1",
        userId: "user1",
        activityType: "SERVICE_COMPLETED",
        points: 50,
      };
      const mockUpdateData = {
        points: 75,
        badgeEarned: "Super Helper",
        description: "Completed advanced gardening service",
      };
      const mockUpdatedActivity = {
        id: "1",
        userId: "user1",
        activityType: "SERVICE_COMPLETED",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.userActivity.findUnique.mockResolvedValue(
        mockExistingActivity
      );
      mockPrisma.userActivity.update.mockResolvedValue(mockUpdatedActivity);

      await updateUserActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userActivity.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.userActivity.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedActivity);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if activity not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { points: 100 };
      mockPrisma.userActivity.findUnique.mockResolvedValue(null);

      await updateUserActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Activité utilisateur non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { points: 100 };
      mockPrisma.userActivity.findUnique.mockRejectedValue(mockError);

      await updateUserActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteUserActivity", () => {
    it("should delete a user activity and return 200", async () => {
      const mockActivity = {
        id: "1",
        userId: "user1",
        activityType: "SERVICE_COMPLETED",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.userActivity.findUnique.mockResolvedValue(mockActivity);
      mockPrisma.userActivity.delete.mockResolvedValue(mockActivity);

      await deleteUserActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userActivity.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.userActivity.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Activité utilisateur supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if activity not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.userActivity.findUnique.mockResolvedValue(null);

      await deleteUserActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Activité utilisateur non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.userActivity.findUnique.mockRejectedValue(mockError);

      await deleteUserActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
