import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  activityRegistration: {
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
  createActivityRegistration,
  getAllActivityRegistrations,
  getActivityRegistrationById,
  updateActivityRegistration,
  deleteActivityRegistration,
} from "@/controllers/activityRegistration.controller";
import { IActivityRegistration } from "@/types";

describe("ActivityRegistration Controller", () => {
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

  describe("createActivityRegistration", () => {
    it("should create activity registration and return 201", async () => {
      const mockRegistration = {
        id: "1",
        userId: "user123",
        activityId: "activity456",
        registrationDate: new Date(),
        createdAt: new Date(),
      };

      mockRequest.body = {
        userId: "user123",
        activityId: "activity456",
        registrationDate: new Date(),
      };
      mockPrisma.activityRegistration.create.mockResolvedValue(
        mockRegistration
      );

      await createActivityRegistration(
        mockRequest as Request<{}, {}, IActivityRegistration>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activityRegistration.create).toHaveBeenCalledWith({
        data: mockRequest.body,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockRegistration);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when creation fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { userId: "user123", activityId: "activity456" };
      mockPrisma.activityRegistration.create.mockRejectedValue(mockError);

      await createActivityRegistration(
        mockRequest as Request<{}, {}, IActivityRegistration>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllActivityRegistrations", () => {
    it("should get all activity registrations ordered by id and return 200", async () => {
      const mockRegistrations = [
        {
          id: "1",
          userId: "user123",
          activityId: "activity1",
          registrationDate: new Date(),
        },
        {
          id: "2",
          userId: "user456",
          activityId: "activity2",
          registrationDate: new Date(),
        },
      ];

      mockPrisma.activityRegistration.findMany.mockResolvedValue(
        mockRegistrations
      );

      await getAllActivityRegistrations(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activityRegistration.findMany).toHaveBeenCalledWith({
        orderBy: { id: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        registrations: mockRegistrations,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return empty array when no registrations exist", async () => {
      mockPrisma.activityRegistration.findMany.mockResolvedValue([]);

      await getAllActivityRegistrations(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ registrations: [] });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockPrisma.activityRegistration.findMany.mockRejectedValue(mockError);

      await getAllActivityRegistrations(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getActivityRegistrationById", () => {
    it("should get activity registration by id and return 200", async () => {
      const mockRegistration = {
        id: "1",
        userId: "user123",
        activityId: "activity456",
        registrationDate: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockPrisma.activityRegistration.findUnique.mockResolvedValue(
        mockRegistration
      );

      await getActivityRegistrationById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activityRegistration.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockRegistration);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when registration not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.activityRegistration.findUnique.mockResolvedValue(null);

      await getActivityRegistrationById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Inscription à l'activité non trouvée",
        })
      );
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.activityRegistration.findUnique.mockRejectedValue(mockError);

      await getActivityRegistrationById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("updateActivityRegistration", () => {
    it("should update activity registration and return 200", async () => {
      const existingRegistration = {
        id: "1",
        userId: "user123",
        activityId: "activity456",
        status: "pending",
      };
      const updatedRegistration = {
        id: "1",
        userId: "user123",
        activityId: "activity456",
        status: "confirmed",
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = { status: "confirmed" };
      mockPrisma.activityRegistration.findUnique.mockResolvedValue(
        existingRegistration
      );
      mockPrisma.activityRegistration.update.mockResolvedValue(
        updatedRegistration
      );

      await updateActivityRegistration(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activityRegistration.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.activityRegistration.update).toHaveBeenCalledWith({
        data: {
          status: "confirmed",
          updatedAt: expect.any(Date),
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedRegistration);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when registration not found", async () => {
      mockRequest.params = { id: "999" };
      mockRequest.body = { status: "confirmed" };
      mockPrisma.activityRegistration.findUnique.mockResolvedValue(null);

      await updateActivityRegistration(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Inscription à l'activité non trouvée",
        })
      );
      expect(mockPrisma.activityRegistration.update).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when update fails", async () => {
      const mockError = new Error("Database error");
      const existingRegistration = { id: "1", status: "pending" };

      mockRequest.params = { id: "1" };
      mockRequest.body = { status: "confirmed" };
      mockPrisma.activityRegistration.findUnique.mockResolvedValue(
        existingRegistration
      );
      mockPrisma.activityRegistration.update.mockRejectedValue(mockError);

      await updateActivityRegistration(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("deleteActivityRegistration", () => {
    it("should delete activity registration and return 200", async () => {
      const existingRegistration = {
        id: "1",
        userId: "user123",
        activityId: "activity456",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.activityRegistration.findUnique.mockResolvedValue(
        existingRegistration
      );
      mockPrisma.activityRegistration.delete.mockResolvedValue(
        existingRegistration
      );

      await deleteActivityRegistration(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.activityRegistration.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.activityRegistration.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Inscription à l'activité supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when registration not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.activityRegistration.findUnique.mockResolvedValue(null);

      await deleteActivityRegistration(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Inscription à l'activité non trouvée",
        })
      );
      expect(mockPrisma.activityRegistration.delete).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when delete fails", async () => {
      const mockError = new Error("Database error");
      const existingRegistration = { id: "1", userId: "user123" };

      mockRequest.params = { id: "1" };
      mockPrisma.activityRegistration.findUnique.mockResolvedValue(
        existingRegistration
      );
      mockPrisma.activityRegistration.delete.mockRejectedValue(mockError);

      await deleteActivityRegistration(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
