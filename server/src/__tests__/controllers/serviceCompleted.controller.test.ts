import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  serviceCompleted: {
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
  createServiceCompleted,
  getAllServiceCompleted,
  getServiceCompletedById,
  updateServiceCompleted,
  deleteServiceCompleted,
} from "@/controllers/serviceCompleted.controller";

describe("ServiceCompleted Controller", () => {
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

  describe("createServiceCompleted", () => {
    it("should create a service completed and return 201", async () => {
      const mockServiceData = {
        serviceId: "service1",
        userId: "user1",
        completionDate: new Date("2025-10-20"),
        rating: 5,
        feedback: "Service excellent",
      };
      const mockCreatedService = {
        id: "1",
        ...mockServiceData,
        createdAt: new Date(),
      };

      mockRequest.body = mockServiceData;
      mockPrisma.serviceCompleted.create.mockResolvedValue(mockCreatedService);

      await createServiceCompleted(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.serviceCompleted.create).toHaveBeenCalledWith({
        data: {
          ...mockServiceData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedService);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { serviceId: "service1" };
      mockPrisma.serviceCompleted.create.mockRejectedValue(mockError);

      await createServiceCompleted(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllServiceCompleted", () => {
    it("should return all service completed with 200", async () => {
      const mockServices = [
        {
          id: "1",
          serviceId: "service1",
          completionDate: new Date("2025-10-22"),
          rating: 5,
        },
        {
          id: "2",
          serviceId: "service2",
          completionDate: new Date("2025-10-20"),
          rating: 4,
        },
      ];

      mockPrisma.serviceCompleted.findMany.mockResolvedValue(mockServices);

      await getAllServiceCompleted(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.serviceCompleted.findMany).toHaveBeenCalledWith({
        orderBy: { completionDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        serviceCompleted: mockServices,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.serviceCompleted.findMany.mockRejectedValue(mockError);

      await getAllServiceCompleted(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getServiceCompletedById", () => {
    it("should return a service completed by id with 200", async () => {
      const mockService = {
        id: "1",
        serviceId: "service1",
        userId: "user1",
        completionDate: new Date("2025-10-20"),
        rating: 5,
        feedback: "Service excellent",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.serviceCompleted.findUnique.mockResolvedValue(mockService);

      await getServiceCompletedById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.serviceCompleted.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockService);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if service not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.serviceCompleted.findUnique.mockResolvedValue(null);

      await getServiceCompletedById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Service non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.serviceCompleted.findUnique.mockRejectedValue(mockError);

      await getServiceCompletedById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateServiceCompleted", () => {
    it("should update a service completed and return 200", async () => {
      const mockExistingService = {
        id: "1",
        serviceId: "service1",
        rating: 4,
      };
      const mockUpdateData = {
        rating: 5,
        feedback: "Service amélioré - excellent",
        serviceId: "service1",
      };
      const mockUpdatedService = {
        id: "1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.serviceCompleted.findUnique.mockResolvedValue(
        mockExistingService
      );
      mockPrisma.serviceCompleted.update.mockResolvedValue(mockUpdatedService);

      await updateServiceCompleted(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.serviceCompleted.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.serviceCompleted.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedService);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if service not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { rating: 5 };
      mockPrisma.serviceCompleted.findUnique.mockResolvedValue(null);

      await updateServiceCompleted(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Service non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { rating: 5 };
      mockPrisma.serviceCompleted.findUnique.mockRejectedValue(mockError);

      await updateServiceCompleted(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteServiceCompleted", () => {
    it("should delete a service completed and return 200", async () => {
      const mockService = {
        id: "1",
        serviceId: "service1",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.serviceCompleted.findUnique.mockResolvedValue(mockService);
      mockPrisma.serviceCompleted.delete.mockResolvedValue(mockService);

      await deleteServiceCompleted(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.serviceCompleted.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.serviceCompleted.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Service supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if service not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.serviceCompleted.findUnique.mockResolvedValue(null);

      await deleteServiceCompleted(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Service non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.serviceCompleted.findUnique.mockRejectedValue(mockError);

      await deleteServiceCompleted(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
