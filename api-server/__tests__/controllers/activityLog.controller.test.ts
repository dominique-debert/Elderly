import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  activityLog: {
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
  createActivityLog,
  getAllActivityLogs,
  getActivityLogById,
  updateActivityLog,
  deleteActivityLog,
} from "@/controllers/activities/activityLog.controller";
import { IActivityLog } from "@/types";

describe("ActivityLog Controller", () => {
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

  describe("createActivityLog", () => {
    it("should create activity log and return 201", async () => {
      const mockLog = {
        id: "1",
        userId: "user123",
        activityId: "activity456",
        duration: 30,
        createdAt: new Date(),
      };

      mockRequest.body = {
        userId: "user123",
        activityId: "activity456",
        duration: 30,
      };
      mockPrisma.activityLog.create.mockResolvedValue(mockLog);

      await createActivityLog(
        mockRequest as Request<{}, {}, IActivityLog>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activityLog.create).toHaveBeenCalledWith({
        data: mockRequest.body,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockLog);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when creation fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { userId: "user123" };
      mockPrisma.activityLog.create.mockRejectedValue(mockError);

      await createActivityLog(
        mockRequest as Request<{}, {}, IActivityLog>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllActivityLogs", () => {
    it("should get all activity logs ordered by userId and return 200", async () => {
      const mockLogs = [
        {
          id: "1",
          userId: "user123",
          activityId: "activity1",
          duration: 30,
        },
        {
          id: "2",
          userId: "user456",
          activityId: "activity2",
          duration: 45,
        },
      ];

      mockPrisma.activityLog.findMany.mockResolvedValue(mockLogs);

      await getAllActivityLogs(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activityLog.findMany).toHaveBeenCalledWith({
        orderBy: { userId: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ logs: mockLogs });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return empty array when no logs exist", async () => {
      mockPrisma.activityLog.findMany.mockResolvedValue([]);

      await getAllActivityLogs(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ logs: [] });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockPrisma.activityLog.findMany.mockRejectedValue(mockError);

      await getAllActivityLogs(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getActivityLogById", () => {
    it("should get activity log by id and return 200", async () => {
      const mockLog = {
        id: "1",
        userId: "user123",
        activityId: "activity456",
        duration: 30,
      };

      mockRequest.params = { id: "1" };
      mockPrisma.activityLog.findUnique.mockResolvedValue(mockLog);

      await getActivityLogById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activityLog.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockLog);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when log not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.activityLog.findUnique.mockResolvedValue(null);

      await getActivityLogById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Log d'activité non trouvé",
        })
      );
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.activityLog.findUnique.mockRejectedValue(mockError);

      await getActivityLogById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("updateActivityLog", () => {
    it("should update activity log and return 200", async () => {
      const existingLog = {
        id: "1",
        userId: "user123",
        activityId: "activity456",
        duration: 30,
      };
      const updatedLog = {
        id: "1",
        userId: "user123",
        activityId: "activity456",
        duration: 45,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = { duration: 45 };
      mockPrisma.activityLog.findUnique.mockResolvedValue(existingLog);
      mockPrisma.activityLog.update.mockResolvedValue(updatedLog);

      await updateActivityLog(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activityLog.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.activityLog.update).toHaveBeenCalledWith({
        data: {
          duration: 45,
          updatedAt: expect.any(Date),
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedLog);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when log not found", async () => {
      mockRequest.params = { id: "999" };
      mockRequest.body = { duration: 45 };
      mockPrisma.activityLog.findUnique.mockResolvedValue(null);

      await updateActivityLog(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Log d'activité non trouvé",
        })
      );
      expect(mockPrisma.activityLog.update).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when update fails", async () => {
      const mockError = new Error("Database error");
      const existingLog = { id: "1", duration: 30 };

      mockRequest.params = { id: "1" };
      mockRequest.body = { duration: 45 };
      mockPrisma.activityLog.findUnique.mockResolvedValue(existingLog);
      mockPrisma.activityLog.update.mockRejectedValue(mockError);

      await updateActivityLog(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("deleteActivityLog", () => {
    it("should delete activity log and return 200", async () => {
      const existingLog = {
        id: "1",
        userId: "user123",
        activityId: "activity456",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.activityLog.findUnique.mockResolvedValue(existingLog);
      mockPrisma.activityLog.delete.mockResolvedValue(existingLog);

      await deleteActivityLog(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activityLog.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.activityLog.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Log d'activité supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when log not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.activityLog.findUnique.mockResolvedValue(null);

      await deleteActivityLog(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Log d'activité non trouvé",
        })
      );
      expect(mockPrisma.activityLog.delete).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when delete fails", async () => {
      const mockError = new Error("Database error");
      const existingLog = { id: "1", userId: "user123" };

      mockRequest.params = { id: "1" };
      mockPrisma.activityLog.findUnique.mockResolvedValue(existingLog);
      mockPrisma.activityLog.delete.mockRejectedValue(mockError);

      await deleteActivityLog(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
