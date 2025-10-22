import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  healthIndicator: {
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
  createHealthIndicator,
  getAllHealthIndicators,
  getHealthIndicatorById,
  updateHealthIndicator,
  deleteHealthIndicator,
} from "@/controllers/healthIndicator.controller";

describe("HealthIndicator Controller", () => {
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

  describe("createHealthIndicator", () => {
    it("should create a health indicator and return 201", async () => {
      const mockIndicatorData = {
        name: "Blood Pressure",
        value: "120/80",
        userId: "user1",
      };
      const mockCreatedIndicator = {
        id: "1",
        ...mockIndicatorData,
        createdAt: new Date(),
      };

      mockRequest.body = mockIndicatorData;
      mockPrisma.healthIndicator.create.mockResolvedValue(mockCreatedIndicator);

      await createHealthIndicator(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.healthIndicator.create).toHaveBeenCalledWith({
        data: mockIndicatorData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedIndicator);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { name: "Test" };
      mockPrisma.healthIndicator.create.mockRejectedValue(mockError);

      await createHealthIndicator(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllHealthIndicators", () => {
    it("should return all health indicators with 200", async () => {
      const mockIndicators = [
        {
          id: "1",
          name: "Blood Pressure",
          value: "120/80",
          createdAt: new Date(),
        },
        {
          id: "2",
          name: "Heart Rate",
          value: "72 bpm",
          createdAt: new Date(),
        },
      ];

      mockPrisma.healthIndicator.findMany.mockResolvedValue(mockIndicators);

      await getAllHealthIndicators(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.healthIndicator.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        healthIndicators: mockIndicators,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.healthIndicator.findMany.mockRejectedValue(mockError);

      await getAllHealthIndicators(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getHealthIndicatorById", () => {
    it("should return a health indicator by id with 200", async () => {
      const mockIndicator = {
        id: "1",
        name: "Blood Pressure",
        value: "120/80",
        createdAt: new Date(),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.healthIndicator.findUnique.mockResolvedValue(mockIndicator);

      await getHealthIndicatorById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.healthIndicator.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockIndicator);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if indicator not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.healthIndicator.findUnique.mockResolvedValue(null);

      await getHealthIndicatorById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Indicateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.healthIndicator.findUnique.mockRejectedValue(mockError);

      await getHealthIndicatorById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateHealthIndicator", () => {
    it("should update a health indicator and return 200", async () => {
      const mockExistingIndicator = {
        id: "1",
        name: "Blood Pressure",
        value: "120/80",
      };
      const mockUpdateData = { value: "130/85" };
      const mockUpdatedIndicator = {
        id: "1",
        name: "Blood Pressure",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.healthIndicator.findUnique.mockResolvedValue(
        mockExistingIndicator
      );
      mockPrisma.healthIndicator.update.mockResolvedValue(mockUpdatedIndicator);

      await updateHealthIndicator(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.healthIndicator.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.healthIndicator.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedIndicator);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if indicator not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { value: "Updated" };
      mockPrisma.healthIndicator.findUnique.mockResolvedValue(null);

      await updateHealthIndicator(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Indicateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { value: "Updated" };
      mockPrisma.healthIndicator.findUnique.mockRejectedValue(mockError);

      await updateHealthIndicator(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteHealthIndicator", () => {
    it("should delete a health indicator and return 200", async () => {
      const mockIndicator = {
        id: "1",
        name: "Blood Pressure",
        value: "120/80",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.healthIndicator.findUnique.mockResolvedValue(mockIndicator);
      mockPrisma.healthIndicator.delete.mockResolvedValue(mockIndicator);

      await deleteHealthIndicator(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.healthIndicator.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.healthIndicator.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Indicateur supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if indicator not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.healthIndicator.findUnique.mockResolvedValue(null);

      await deleteHealthIndicator(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Indicateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.healthIndicator.findUnique.mockRejectedValue(mockError);

      await deleteHealthIndicator(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
