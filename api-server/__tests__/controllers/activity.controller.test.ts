import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  activity: {
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
  createActivity,
  getAllActivities,
  getActivityById,
  updateActivity,
  deleteActivity,
} from "@/controllers/activities/activity.controller";
import { IActivity } from "@/types";

describe("Activity Controller", () => {
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

  describe("createActivity", () => {
    it("should create activity and return 201", async () => {
      const mockActivity = {
        id: "1",
        title: "Test Activity",
        description: "Test Description",
        createdAt: new Date(),
      };

      mockRequest.body = {
        title: "Test Activity",
        description: "Test Description",
      };
      mockPrisma.activity.create.mockResolvedValue(mockActivity);

      await createActivity(
        mockRequest as Request<{}, {}, IActivity>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activity.create).toHaveBeenCalledWith({
        data: mockRequest.body,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockActivity);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when creation fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { title: "Test Activity" };
      mockPrisma.activity.create.mockRejectedValue(mockError);

      await createActivity(
        mockRequest as Request<{}, {}, IActivity>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllActivities", () => {
    it("should get all activities ordered by title and return 200", async () => {
      const mockActivities = [
        { id: "1", title: "Activity A", description: "Desc A" },
        { id: "2", title: "Activity B", description: "Desc B" },
      ];

      mockPrisma.activity.findMany.mockResolvedValue(mockActivities);

      await getAllActivities(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activity.findMany).toHaveBeenCalledWith({
        orderBy: { title: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        activities: mockActivities,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return empty array when no activities exist", async () => {
      mockPrisma.activity.findMany.mockResolvedValue([]);

      await getAllActivities(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ activities: [] });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockPrisma.activity.findMany.mockRejectedValue(mockError);

      await getAllActivities(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getActivityById", () => {
    it("should get activity by id and return 200", async () => {
      const mockActivity = {
        id: "1",
        title: "Test Activity",
        description: "Test Description",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.activity.findUnique.mockResolvedValue(mockActivity);

      await getActivityById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activity.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockActivity);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when activity not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.activity.findUnique.mockResolvedValue(null);

      await getActivityById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Activité non trouvée",
        })
      );
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.activity.findUnique.mockRejectedValue(mockError);

      await getActivityById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("updateActivity", () => {
    it("should update activity and return 200", async () => {
      const existingActivity = {
        id: "1",
        title: "Old Title",
        description: "Old Description",
      };
      const updatedActivity = {
        id: "1",
        title: "New Title",
        description: "Old Description",
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = { title: "New Title" };
      mockPrisma.activity.findUnique.mockResolvedValue(existingActivity);
      mockPrisma.activity.update.mockResolvedValue(updatedActivity);

      await updateActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activity.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.activity.update).toHaveBeenCalledWith({
        data: {
          title: "New Title",
          updatedAt: expect.any(Date),
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedActivity);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when activity not found", async () => {
      mockRequest.params = { id: "999" };
      mockRequest.body = { title: "New Title" };
      mockPrisma.activity.findUnique.mockResolvedValue(null);

      await updateActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Activité non trouvée",
        })
      );
      expect(mockPrisma.activity.update).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when update fails", async () => {
      const mockError = new Error("Database error");
      const existingActivity = { id: "1", title: "Old Title" };

      mockRequest.params = { id: "1" };
      mockRequest.body = { title: "New Title" };
      mockPrisma.activity.findUnique.mockResolvedValue(existingActivity);
      mockPrisma.activity.update.mockRejectedValue(mockError);

      await updateActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("deleteActivity", () => {
    it("should delete activity and return 200", async () => {
      const existingActivity = {
        id: "1",
        title: "Test Activity",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.activity.findUnique.mockResolvedValue(existingActivity);
      mockPrisma.activity.delete.mockResolvedValue(existingActivity);

      await deleteActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activity.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.activity.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Activité supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when activity not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.activity.findUnique.mockResolvedValue(null);

      await deleteActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Activité non trouvée",
        })
      );
      expect(mockPrisma.activity.delete).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when delete fails", async () => {
      const mockError = new Error("Database error");
      const existingActivity = { id: "1", title: "Test Activity" };

      mockRequest.params = { id: "1" };
      mockPrisma.activity.findUnique.mockResolvedValue(existingActivity);
      mockPrisma.activity.delete.mockRejectedValue(mockError);

      await deleteActivity(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
