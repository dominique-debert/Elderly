import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  serviceRating: {
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
  createServiceRating,
  getAllServiceRating,
  getServiceRatingById,
  updateServiceRating,
  deleteServiceRating,
} from "@/controllers/serviceRating.controller";

describe("ServiceRating Controller", () => {
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

  describe("createServiceRating", () => {
    it("should create a service rating and return 201", async () => {
      const mockRatingData = {
        serviceId: "service1",
        userId: "user1",
        rating: 5,
        comment: "Excellent service",
        ratingDate: new Date("2025-10-20"),
      };
      const mockCreatedRating = {
        id: "1",
        ...mockRatingData,
        createdAt: new Date(),
      };

      mockRequest.body = mockRatingData;
      mockPrisma.serviceRating.create.mockResolvedValue(mockCreatedRating);

      await createServiceRating(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.serviceRating.create).toHaveBeenCalledWith({
        data: {
          ...mockRatingData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedRating);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { serviceId: "service1" };
      mockPrisma.serviceRating.create.mockRejectedValue(mockError);

      await createServiceRating(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllServiceRating", () => {
    it("should return all service ratings with 200", async () => {
      const mockRatings = [
        {
          id: "1",
          serviceId: "service1",
          rating: 5,
          ratingDate: new Date("2025-10-22"),
        },
        {
          id: "2",
          serviceId: "service2",
          rating: 4,
          ratingDate: new Date("2025-10-20"),
        },
      ];

      mockPrisma.serviceRating.findMany.mockResolvedValue(mockRatings);

      await getAllServiceRating(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.serviceRating.findMany).toHaveBeenCalledWith({
        orderBy: { ratingDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        serviceRating: mockRatings,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.serviceRating.findMany.mockRejectedValue(mockError);

      await getAllServiceRating(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getServiceRatingById", () => {
    it("should return a service rating by id with 200", async () => {
      const mockRating = {
        id: "1",
        serviceId: "service1",
        userId: "user1",
        rating: 5,
        comment: "Excellent service",
        ratingDate: new Date("2025-10-20"),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.serviceRating.findUnique.mockResolvedValue(mockRating);

      await getServiceRatingById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.serviceRating.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockRating);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if rating not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.serviceRating.findUnique.mockResolvedValue(null);

      await getServiceRatingById(
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
      mockPrisma.serviceRating.findUnique.mockRejectedValue(mockError);

      await getServiceRatingById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateServiceRating", () => {
    it("should update a service rating and return 200", async () => {
      const mockExistingRating = {
        id: "1",
        serviceId: "service1",
        rating: 4,
      };
      const mockUpdateData = {
        rating: 5,
        comment: "Service amélioré - maintenant excellent",
        serviceId: "service1",
      };
      const mockUpdatedRating = {
        id: "1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.serviceRating.findUnique.mockResolvedValue(mockExistingRating);
      mockPrisma.serviceRating.update.mockResolvedValue(mockUpdatedRating);

      await updateServiceRating(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.serviceRating.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.serviceRating.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedRating);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if rating not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { rating: 5 };
      mockPrisma.serviceRating.findUnique.mockResolvedValue(null);

      await updateServiceRating(
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
      mockPrisma.serviceRating.findUnique.mockRejectedValue(mockError);

      await updateServiceRating(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteServiceRating", () => {
    it("should delete a service rating and return 200", async () => {
      const mockRating = {
        id: "1",
        serviceId: "service1",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.serviceRating.findUnique.mockResolvedValue(mockRating);
      mockPrisma.serviceRating.delete.mockResolvedValue(mockRating);

      await deleteServiceRating(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.serviceRating.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.serviceRating.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Service supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if rating not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.serviceRating.findUnique.mockResolvedValue(null);

      await deleteServiceRating(
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
      mockPrisma.serviceRating.findUnique.mockRejectedValue(mockError);

      await deleteServiceRating(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
