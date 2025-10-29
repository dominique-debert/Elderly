import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  badge: {
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
  createBadge,
  getAllBadges,
  getBadgeById,
  updateBadge,
  deleteBadge,
} from "@/controllers/badge.controller";

describe("Badge Controller", () => {
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

  describe("createBadge", () => {
    it("should create badge and return 201", async () => {
      const mockBadge = {
        id: "1",
        name: "Test Badge",
        description: "Test Description",
        icon: "test-icon.png",
        createdAt: new Date(),
      };

      mockRequest.body = {
        name: "Test Badge",
        description: "Test Description",
        icon: "test-icon.png",
      };
      mockPrisma.badge.create.mockResolvedValue(mockBadge);

      await createBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.badge.create).toHaveBeenCalledWith({
        data: mockRequest.body,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockBadge);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when creation fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { name: "Test Badge" };
      mockPrisma.badge.create.mockRejectedValue(mockError);

      await createBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllBadges", () => {
    it("should get all badges ordered by name and return 200", async () => {
      const mockBadges = [
        { id: "1", name: "Badge A", description: "First badge" },
        { id: "2", name: "Badge B", description: "Second badge" },
      ];

      mockPrisma.badge.findMany.mockResolvedValue(mockBadges);

      await getAllBadges(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.badge.findMany).toHaveBeenCalledWith({
        orderBy: { name: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ badges: mockBadges });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return empty array when no badges exist", async () => {
      mockPrisma.badge.findMany.mockResolvedValue([]);

      await getAllBadges(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ badges: [] });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockPrisma.badge.findMany.mockRejectedValue(mockError);

      await getAllBadges(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getBadgeById", () => {
    it("should get badge by id and return 200", async () => {
      const mockBadge = {
        id: "1",
        name: "Test Badge",
        description: "Test Description",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.badge.findUnique.mockResolvedValue(mockBadge);

      await getBadgeById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.badge.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockBadge);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when badge not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.badge.findUnique.mockResolvedValue(null);

      await getBadgeById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Badge non trouvé",
        })
      );
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.badge.findUnique.mockRejectedValue(mockError);

      await getBadgeById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("updateBadge", () => {
    it("should update badge and return 200", async () => {
      const existingBadge = {
        id: "1",
        name: "Old Name",
        description: "Old Description",
      };
      const updatedBadge = {
        id: "1",
        name: "New Name",
        description: "Old Description",
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = { name: "New Name" };
      mockPrisma.badge.findUnique.mockResolvedValue(existingBadge);
      mockPrisma.badge.update.mockResolvedValue(updatedBadge);

      await updateBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.badge.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.badge.update).toHaveBeenCalledWith({
        data: {
          name: "New Name",
          updatedAt: expect.any(Date),
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedBadge);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when badge not found", async () => {
      mockRequest.params = { id: "999" };
      mockRequest.body = { name: "New Name" };
      mockPrisma.badge.findUnique.mockResolvedValue(null);

      await updateBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Badge non trouvé",
        })
      );
      expect(mockPrisma.badge.update).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when update fails", async () => {
      const mockError = new Error("Database error");
      const existingBadge = { id: "1", name: "Old Name" };

      mockRequest.params = { id: "1" };
      mockRequest.body = { name: "New Name" };
      mockPrisma.badge.findUnique.mockResolvedValue(existingBadge);
      mockPrisma.badge.update.mockRejectedValue(mockError);

      await updateBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("deleteBadge", () => {
    it("should delete badge and return 200", async () => {
      const existingBadge = {
        id: "1",
        name: "Test Badge",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.badge.findUnique.mockResolvedValue(existingBadge);
      mockPrisma.badge.delete.mockResolvedValue(existingBadge);

      await deleteBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.badge.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.badge.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Badge supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when badge not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.badge.findUnique.mockResolvedValue(null);

      await deleteBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Badge non trouvé",
        })
      );
      expect(mockPrisma.badge.delete).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when delete fails", async () => {
      const mockError = new Error("Database error");
      const existingBadge = { id: "1", name: "Test Badge" };

      mockRequest.params = { id: "1" };
      mockPrisma.badge.findUnique.mockResolvedValue(existingBadge);
      mockPrisma.badge.delete.mockRejectedValue(mockError);

      await deleteBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
