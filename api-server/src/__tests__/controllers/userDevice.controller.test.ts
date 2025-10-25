import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  userDevice: {
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
  createUserDevice,
  getAllUserDevices,
  getUserDeviceById,
  updateUserDevice,
  deleteUserDevice,
} from "@/controllers/userDevice.controller";

describe("UserDevice Controller", () => {
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

  describe("createUserDevice", () => {
    it("should create a user device and return 201", async () => {
      const mockDeviceData = {
        userId: "user1",
        deviceType: "smartphone",
        deviceModel: "iPhone 14 Pro",
        osVersion: "iOS 17.1",
        appVersion: "2.5.0",
        pushToken: "expo-push-token-abc123",
        lastConnection: new Date("2025-10-20T14:30:00Z"),
        isActive: true,
      };
      const mockCreatedDevice = {
        id: "1",
        ...mockDeviceData,
        createdAt: new Date(),
      };

      mockRequest.body = mockDeviceData;
      mockPrisma.userDevice.create.mockResolvedValue(mockCreatedDevice);

      await createUserDevice(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userDevice.create).toHaveBeenCalledWith({
        data: {
          ...mockDeviceData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedDevice);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { userId: "user1" };
      mockPrisma.userDevice.create.mockRejectedValue(mockError);

      await createUserDevice(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllUserDevices", () => {
    it("should return all user devices with 200", async () => {
      const mockDevices = [
        {
          id: "1",
          userId: "user1",
          deviceType: "smartphone",
          deviceModel: "iPhone 14 Pro",
          lastConnection: new Date("2025-10-22T14:30:00Z"),
        },
        {
          id: "2",
          userId: "user2",
          deviceType: "tablet",
          deviceModel: "iPad Air",
          lastConnection: new Date("2025-10-20T10:15:00Z"),
        },
      ];

      mockPrisma.userDevice.findMany.mockResolvedValue(mockDevices);

      await getAllUserDevices(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userDevice.findMany).toHaveBeenCalledWith({
        orderBy: { lastConnection: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        userDevices: mockDevices,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.userDevice.findMany.mockRejectedValue(mockError);

      await getAllUserDevices(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getUserDeviceById", () => {
    it("should return a user device by id with 200", async () => {
      const mockDevice = {
        id: "1",
        userId: "user1",
        deviceType: "smartphone",
        deviceModel: "iPhone 14 Pro",
        osVersion: "iOS 17.1",
        appVersion: "2.5.0",
        pushToken: "expo-push-token-abc123",
        lastConnection: new Date("2025-10-20T14:30:00Z"),
        isActive: true,
      };
      mockRequest.params = { id: "1" };
      mockPrisma.userDevice.findUnique.mockResolvedValue(mockDevice);

      await getUserDeviceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userDevice.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockDevice);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if device not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.userDevice.findUnique.mockResolvedValue(null);

      await getUserDeviceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Appareil utilisateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.userDevice.findUnique.mockRejectedValue(mockError);

      await getUserDeviceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateUserDevice", () => {
    it("should update a user device and return 200", async () => {
      const mockExistingDevice = {
        id: "1",
        userId: "user1",
        deviceType: "smartphone",
        appVersion: "2.4.0",
      };
      const mockUpdateData = {
        appVersion: "2.5.0",
        osVersion: "iOS 17.1",
        lastConnection: new Date("2025-10-23T10:00:00Z"),
        isActive: true,
      };
      const mockUpdatedDevice = {
        id: "1",
        userId: "user1",
        deviceType: "smartphone",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.userDevice.findUnique.mockResolvedValue(mockExistingDevice);
      mockPrisma.userDevice.update.mockResolvedValue(mockUpdatedDevice);

      await updateUserDevice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userDevice.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.userDevice.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedDevice);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if device not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { isActive: false };
      mockPrisma.userDevice.findUnique.mockResolvedValue(null);

      await updateUserDevice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Appareil utilisateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { isActive: false };
      mockPrisma.userDevice.findUnique.mockRejectedValue(mockError);

      await updateUserDevice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteUserDevice", () => {
    it("should delete a user device and return 200", async () => {
      const mockDevice = {
        id: "1",
        userId: "user1",
        deviceType: "smartphone",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.userDevice.findUnique.mockResolvedValue(mockDevice);
      mockPrisma.userDevice.delete.mockResolvedValue(mockDevice);

      await deleteUserDevice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userDevice.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.userDevice.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Appareil utilisateur supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if device not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.userDevice.findUnique.mockResolvedValue(null);

      await deleteUserDevice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Appareil utilisateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.userDevice.findUnique.mockRejectedValue(mockError);

      await deleteUserDevice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
