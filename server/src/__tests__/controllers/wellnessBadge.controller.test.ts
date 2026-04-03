import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  wellnessBadge: {
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
  createWellnessBadge,
  getAllWellnessBadges,
  getWellnessBadgeById,
  updateWellnessBadge,
  deleteWellnessBadge,
} from "@/controllers/wellnessBadge.controller";

describe("WellnessBadge Controller", () => {
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

  describe("createWellnessBadge", () => {
    it("should create a wellness badge and return 201", async () => {
      const mockBadgeData = {
        name: "Zen Master",
        description: "Completed 30 days of meditation",
        icon: "🧘",
        category: "Meditation",
        criteria: "Complete 30 consecutive meditation sessions",
        points: 100,
        tier: "Gold",
      };
      const mockCreatedBadge = {
        id: "1",
        ...mockBadgeData,
        createdAt: new Date(),
      };

      mockRequest.body = mockBadgeData;
      mockPrisma.wellnessBadge.create.mockResolvedValue(mockCreatedBadge);

      await createWellnessBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessBadge.create).toHaveBeenCalledWith({
        data: mockBadgeData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedBadge);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { name: "Test Badge" };
      mockPrisma.wellnessBadge.create.mockRejectedValue(mockError);

      await createWellnessBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllWellnessBadges", () => {
    it("should return all wellness badges ordered by name ascending with 200", async () => {
      const mockBadges = [
        {
          id: "1",
          name: "Active Explorer",
          category: "Activity",
          points: 50,
        },
        {
          id: "2",
          name: "Zen Master",
          category: "Meditation",
          points: 100,
        },
      ];

      mockPrisma.wellnessBadge.findMany.mockResolvedValue(mockBadges);

      await getAllWellnessBadges(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessBadge.findMany).toHaveBeenCalledWith({
        orderBy: { name: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        wellnessBadges: mockBadges,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.wellnessBadge.findMany.mockRejectedValue(mockError);

      await getAllWellnessBadges(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getWellnessBadgeById", () => {
    it("should return a wellness badge by id with 200", async () => {
      const mockBadge = {
        id: "1",
        name: "Zen Master",
        description: "Completed 30 days of meditation",
        icon: "🧘",
        category: "Meditation",
        criteria: "Complete 30 consecutive meditation sessions",
        points: 100,
        tier: "Gold",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessBadge.findUnique.mockResolvedValue(mockBadge);

      await getWellnessBadgeById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessBadge.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockBadge);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if badge not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.wellnessBadge.findUnique.mockResolvedValue(null);

      await getWellnessBadgeById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Badge bien-être non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessBadge.findUnique.mockRejectedValue(mockError);

      await getWellnessBadgeById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateWellnessBadge", () => {
    it("should update a wellness badge and return 200", async () => {
      const mockExistingBadge = {
        id: "1",
        name: "Zen Master",
        points: 100,
      };
      const mockUpdateData = {
        name: "Zen Master Pro",
        description: "Completed 60 days of meditation",
        points: 150,
        tier: "Platinum",
      };
      const mockUpdatedBadge = {
        id: "1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.wellnessBadge.findUnique.mockResolvedValue(mockExistingBadge);
      mockPrisma.wellnessBadge.update.mockResolvedValue(mockUpdatedBadge);

      await updateWellnessBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessBadge.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.wellnessBadge.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedBadge);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if badge not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { name: "Updated Badge" };
      mockPrisma.wellnessBadge.findUnique.mockResolvedValue(null);

      await updateWellnessBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Badge bien-être non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { name: "Updated Badge" };
      mockPrisma.wellnessBadge.findUnique.mockRejectedValue(mockError);

      await updateWellnessBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteWellnessBadge", () => {
    it("should delete a wellness badge and return 200", async () => {
      const mockBadge = {
        id: "1",
        name: "Zen Master",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessBadge.findUnique.mockResolvedValue(mockBadge);
      mockPrisma.wellnessBadge.delete.mockResolvedValue(mockBadge);

      await deleteWellnessBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.wellnessBadge.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.wellnessBadge.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Badge bien-être supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if badge not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.wellnessBadge.findUnique.mockResolvedValue(null);

      await deleteWellnessBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Badge bien-être non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.wellnessBadge.findUnique.mockRejectedValue(mockError);

      await deleteWellnessBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
