import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  trustCircle: {
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
  createTrustCircle,
  getAllTrustCircle,
  getTrustCircleById,
  updateTrustCircle,
  deleteTrustCircle,
} from "@/controllers/trustCircle.controller";

describe("TrustCircle Controller", () => {
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

  describe("createTrustCircle", () => {
    it("should create a trust circle and return 201", async () => {
      const mockCircleData = {
        userId: "user1",
        trustedUserId: "user2",
        relationship: "Family",
        dateAdded: new Date("2025-10-20"),
        permissions: ["view_profile", "emergency_contact"],
      };
      const mockCreatedCircle = {
        id: "1",
        ...mockCircleData,
        createdAt: new Date(),
      };

      mockRequest.body = mockCircleData;
      mockPrisma.trustCircle.create.mockResolvedValue(mockCreatedCircle);

      await createTrustCircle(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.trustCircle.create).toHaveBeenCalledWith({
        data: {
          ...mockCircleData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedCircle);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { userId: "user1" };
      mockPrisma.trustCircle.create.mockRejectedValue(mockError);

      await createTrustCircle(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllTrustCircle", () => {
    it("should return all trust circles with 200", async () => {
      const mockCircles = [
        {
          id: "1",
          userId: "user1",
          trustedUserId: "user2",
          relationship: "Family",
          dateAdded: new Date("2025-10-22"),
        },
        {
          id: "2",
          userId: "user1",
          trustedUserId: "user3",
          relationship: "Friend",
          dateAdded: new Date("2025-10-20"),
        },
      ];

      mockPrisma.trustCircle.findMany.mockResolvedValue(mockCircles);

      await getAllTrustCircle(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.trustCircle.findMany).toHaveBeenCalledWith({
        orderBy: { dateAdded: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        trustCircle: mockCircles,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.trustCircle.findMany.mockRejectedValue(mockError);

      await getAllTrustCircle(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getTrustCircleById", () => {
    it("should return a trust circle by id with 200", async () => {
      const mockCircle = {
        id: "1",
        userId: "user1",
        trustedUserId: "user2",
        relationship: "Family",
        dateAdded: new Date("2025-10-20"),
        permissions: ["view_profile", "emergency_contact"],
      };
      mockRequest.params = { id: "1" };
      mockPrisma.trustCircle.findUnique.mockResolvedValue(mockCircle);

      await getTrustCircleById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.trustCircle.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCircle);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if circle not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.trustCircle.findUnique.mockResolvedValue(null);

      await getTrustCircleById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Cercle de confiance non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.trustCircle.findUnique.mockRejectedValue(mockError);

      await getTrustCircleById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateTrustCircle", () => {
    it("should update a trust circle and return 200", async () => {
      const mockExistingCircle = {
        id: "1",
        userId: "user1",
        trustedUserId: "user2",
        relationship: "Friend",
      };
      const mockUpdateData = {
        relationship: "Close Friend",
        permissions: ["view_profile", "emergency_contact", "share_location"],
      };
      const mockUpdatedCircle = {
        id: "1",
        userId: "user1",
        trustedUserId: "user2",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.trustCircle.findUnique.mockResolvedValue(mockExistingCircle);
      mockPrisma.trustCircle.update.mockResolvedValue(mockUpdatedCircle);

      await updateTrustCircle(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.trustCircle.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.trustCircle.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedCircle);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if circle not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { relationship: "Updated" };
      mockPrisma.trustCircle.findUnique.mockResolvedValue(null);

      await updateTrustCircle(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Cercle de confiance non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { relationship: "Updated" };
      mockPrisma.trustCircle.findUnique.mockRejectedValue(mockError);

      await updateTrustCircle(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteTrustCircle", () => {
    it("should delete a trust circle and return 200", async () => {
      const mockCircle = {
        id: "1",
        userId: "user1",
        trustedUserId: "user2",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.trustCircle.findUnique.mockResolvedValue(mockCircle);
      mockPrisma.trustCircle.delete.mockResolvedValue(mockCircle);

      await deleteTrustCircle(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.trustCircle.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.trustCircle.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Cercle de confiance supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if circle not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.trustCircle.findUnique.mockResolvedValue(null);

      await deleteTrustCircle(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Cercle de confiance non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.trustCircle.findUnique.mockRejectedValue(mockError);

      await deleteTrustCircle(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
