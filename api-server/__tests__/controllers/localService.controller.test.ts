import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  localService: {
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
  createLocalService,
  getAllLocalServices,
  getLocalServiceById,
  updateLocalService,
  deleteLocalService,
} from "@/controllers/localService.controller";

describe("LocalService Controller", () => {
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

  describe("createLocalService", () => {
    it("should create a local service and return 201", async () => {
      const mockServiceData = {
        name: "Pharmacie du Centre",
        category: "Santé",
        address: "123 Rue Principale",
        phone: "0123456789",
      };
      const mockCreatedService = {
        id: "1",
        ...mockServiceData,
        createdAt: new Date(),
      };

      mockRequest.body = mockServiceData;
      mockPrisma.localService.create.mockResolvedValue(mockCreatedService);

      await createLocalService(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.localService.create).toHaveBeenCalledWith({
        data: mockServiceData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedService);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { name: "Test" };
      mockPrisma.localService.create.mockRejectedValue(mockError);

      await createLocalService(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllLocalServices", () => {
    it("should return all local services with 200", async () => {
      const mockServices = [
        {
          id: "1",
          name: "Boulangerie Paul",
          category: "Alimentation",
          address: "10 Rue de la Paix",
        },
        {
          id: "2",
          name: "Pharmacie du Centre",
          category: "Santé",
          address: "123 Rue Principale",
        },
      ];

      mockPrisma.localService.findMany.mockResolvedValue(mockServices);

      await getAllLocalServices(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.localService.findMany).toHaveBeenCalledWith({
        orderBy: { name: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        localServices: mockServices,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.localService.findMany.mockRejectedValue(mockError);

      await getAllLocalServices(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getLocalServiceById", () => {
    it("should return a local service by id with 200", async () => {
      const mockService = {
        id: "1",
        name: "Pharmacie du Centre",
        category: "Santé",
        address: "123 Rue Principale",
        phone: "0123456789",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.localService.findUnique.mockResolvedValue(mockService);

      await getLocalServiceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.localService.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockService);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if service not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.localService.findUnique.mockResolvedValue(null);

      await getLocalServiceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Service local non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.localService.findUnique.mockRejectedValue(mockError);

      await getLocalServiceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateLocalService", () => {
    it("should update a local service and return 200", async () => {
      const mockExistingService = {
        id: "1",
        name: "Pharmacie du Centre",
        phone: "0123456789",
      };
      const mockUpdateData = {
        phone: "0987654321",
        address: "456 Avenue Nouvelle",
      };
      const mockUpdatedService = {
        id: "1",
        name: "Pharmacie du Centre",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.localService.findUnique.mockResolvedValue(mockExistingService);
      mockPrisma.localService.update.mockResolvedValue(mockUpdatedService);

      await updateLocalService(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.localService.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.localService.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedService);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if service not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { phone: "Updated" };
      mockPrisma.localService.findUnique.mockResolvedValue(null);

      await updateLocalService(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Service local non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { phone: "Updated" };
      mockPrisma.localService.findUnique.mockRejectedValue(mockError);

      await updateLocalService(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteLocalService", () => {
    it("should delete a local service and return 200", async () => {
      const mockService = {
        id: "1",
        name: "Pharmacie du Centre",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.localService.findUnique.mockResolvedValue(mockService);
      mockPrisma.localService.delete.mockResolvedValue(mockService);

      await deleteLocalService(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.localService.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.localService.delete).toHaveBeenCalledWith({
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
      mockPrisma.localService.findUnique.mockResolvedValue(null);

      await deleteLocalService(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Service local non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.localService.findUnique.mockRejectedValue(mockError);

      await deleteLocalService(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
