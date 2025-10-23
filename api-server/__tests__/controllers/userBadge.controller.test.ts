import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  userBadge: {
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
  createUserBadge,
  getAllUserBadges,
  getUserBadgeById,
  updateUserBadge,
  deleteUserBadge,
} from "@/controllers/userBadge.controller";

describe("UserBadge Controller", () => {
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

  describe("createUserBadge", () => {
    it("should create a user badge and return 201", async () => {
      const mockBadgeData = {
        userId: "user1",
        badgeId: "badge1",
        achievementDate: new Date("2025-10-20"),
        progress: 100,
        isDisplayed: true,
      };
      const mockCreatedBadge = {
        id: "1",
        ...mockBadgeData,
        createdAt: new Date(),
      };

      mockRequest.body = mockBadgeData;
      mockPrisma.userBadge.create.mockResolvedValue(mockCreatedBadge);

      await createUserBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userBadge.create).toHaveBeenCalledWith({
        data: {
          ...mockBadgeData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedBadge);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { userId: "user1" };
      mockPrisma.userBadge.create.mockRejectedValue(mockError);

      await createUserBadge(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllUserBadges", () => {
    it("should return all user badges with 200", async () => {
      const mockBadges = [
        {
          id: "1",
          userId: "user1",
          badgeId: "badge1",
          achievementDate: new Date("2025-10-22"),
          progress: 100,
        },
        {
          id: "2",
          userId: "user2",
          badgeId: "badge2",
          achievementDate: new Date("2025-10-20"),
          progress: 75,
        },
      ];

      mockPrisma.userBadge.findMany.mockResolvedValue(mockBadges);

      await getAllUserBadges(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userBadge.findMany).toHaveBeenCalledWith({
        orderBy: { achievementDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        userBadges: mockBadges,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.userBadge.findMany.mockRejectedValue(mockError);

      await getAllUserBadges(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getUserBadgeById", () => {
    it("should return a user badge by id with 200", async () => {
      const mockBadge = {
        id: "1",
        userId: "user1",
        badgeId: "badge1",
        achievementDate: new Date("2025-10-20"),
        progress: 100,
        isDisplayed: true,
      };
      mockRequest.params = { id: "1" };
      mockPrisma.userBadge.findUnique.mockResolvedValue(mockBadge);

      await getUserBadgeById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userBadge.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockBadge);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if badge not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.userBadge.findUnique.mockResolvedValue(null);

      await getUserBadgeById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Badge utilisateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.userBadge.findUnique.mockRejectedValue(mockError);

      await getUserBadgeById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateUserBadge", () => {
    it("should update a user badge and return 200", async () => {
      const mockExistingBadge = {
        id: "1",
        userId: "user1",
        badgeId: "badge1",
        progress: 75,
      };
      const mockUpdateData = {
        progress: 100,
        isDisplayed: true,
        achievementDate: new Date("2025-10-22"),
      };
      const mockUpdatedBadge = {
        id: "1",
        userId: "user1",
        badgeId: "badge1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.userBadge.findUnique.mockResolvedValue(mockExistingBadge);
      mockPrisma.userBadge.update.mockResolvedValue(mockUpdatedBadge);

      await updateUserBadge(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userBadge.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.userBadge.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedBadge);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if badge not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { progress: 100 };
      mockPrisma.userBadge.findUnique.mockResolvedValue(null);

      await updateUserBadge(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Badge utilisateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { progress: 100 };
      mockPrisma.userBadge.findUnique.mockRejectedValue(mockError);

      await updateUserBadge(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteUserBadge", () => {
    it("should delete a user badge and return 200", async () => {
      const mockBadge = {
        id: "1",
        userId: "user1",
        badgeId: "badge1",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.userBadge.findUnique.mockResolvedValue(mockBadge);
      mockPrisma.userBadge.delete.mockResolvedValue(mockBadge);

      await deleteUserBadge(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userBadge.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.userBadge.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Badge utilisateur supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if badge not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.userBadge.findUnique.mockResolvedValue(null);

      await deleteUserBadge(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Badge utilisateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.userBadge.findUnique.mockRejectedValue(mockError);

      await deleteUserBadge(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
