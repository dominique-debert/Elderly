import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  userPreferences: {
    create: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn(() => mockPrisma),
}));

import {
  createUserPreferences,
  getUserPreferences,
  updateUserPreferences,
  deleteUserPreferences,
} from "@/controllers/userPreferences.controller";
import { IUserPreferences } from "@/types";

describe("UserPreferences Controller", () => {
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

  describe("createUserPreferences", () => {
    it("should create user preferences and return 201", async () => {
      const mockPreferences = {
        id: "1",
        userId: "user123",
        theme: "dark",
        language: "en",
      };

      mockRequest.body = { userId: "user123", theme: "dark", language: "en" };
      mockPrisma.userPreferences.create.mockResolvedValue(mockPreferences);

      await createUserPreferences(
        mockRequest as Request<{ userId: string }, {}, IUserPreferences>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userPreferences.create).toHaveBeenCalledWith({
        data: mockRequest.body,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockPreferences);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when creation fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { userId: "user123" };
      mockPrisma.userPreferences.create.mockRejectedValue(mockError);

      await createUserPreferences(
        mockRequest as Request<{ userId: string }, {}, IUserPreferences>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getUserPreferences", () => {
    it("should get user preferences and return 200", async () => {
      const mockPreferences = {
        id: "1",
        userId: "user123",
        theme: "dark",
        language: "en",
      };

      mockRequest.params = { userId: "user123" };
      mockPrisma.userPreferences.findFirst.mockResolvedValue(mockPreferences);

      await getUserPreferences(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userPreferences.findFirst).toHaveBeenCalledWith({
        where: { userId: "user123" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockPreferences);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when preferences not found", async () => {
      mockRequest.params = { userId: "user123" };
      mockPrisma.userPreferences.findFirst.mockResolvedValue(null);

      await getUserPreferences(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Préférences utilisateur non trouvées",
        })
      );
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { userId: "user123" };
      mockPrisma.userPreferences.findFirst.mockRejectedValue(mockError);

      await getUserPreferences(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("updateUserPreferences", () => {
    it("should update user preferences and return 200", async () => {
      const existingPreferences = {
        id: "1",
        userId: "user123",
        theme: "light",
      };
      const updatedPreferences = {
        id: "1",
        userId: "user123",
        theme: "dark",
        updatedAt: new Date(),
      };

      mockRequest.params = { userId: "user123" };
      mockRequest.body = { theme: "dark" };
      mockPrisma.userPreferences.findFirst.mockResolvedValue(
        existingPreferences
      );
      mockPrisma.userPreferences.update.mockResolvedValue(updatedPreferences);

      await updateUserPreferences(
        mockRequest as Request<{ userId: string }, {}, IUserPreferences>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userPreferences.findFirst).toHaveBeenCalledWith({
        where: { userId: "user123" },
      });
      expect(mockPrisma.userPreferences.update).toHaveBeenCalledWith({
        data: {
          theme: "dark",
          updatedAt: expect.any(Date),
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedPreferences);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when preferences not found", async () => {
      mockRequest.params = { userId: "user123" };
      mockRequest.body = { theme: "dark" };
      mockPrisma.userPreferences.findFirst.mockResolvedValue(null);

      await updateUserPreferences(
        mockRequest as Request<{ userId: string }, {}, IUserPreferences>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Préférences utilisateur non trouvées",
        })
      );
      expect(mockPrisma.userPreferences.update).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when update fails", async () => {
      const mockError = new Error("Database error");
      const existingPreferences = { id: "1", userId: "user123" };

      mockRequest.params = { userId: "user123" };
      mockRequest.body = { theme: "dark" };
      mockPrisma.userPreferences.findFirst.mockResolvedValue(
        existingPreferences
      );
      mockPrisma.userPreferences.update.mockRejectedValue(mockError);

      await updateUserPreferences(
        mockRequest as Request<{ userId: string }, {}, IUserPreferences>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("deleteUserPreferences", () => {
    it("should delete user preferences and return 200", async () => {
      const existingPreferences = {
        id: "1",
        userId: "user123",
      };

      mockRequest.params = { userId: "user123" };
      mockPrisma.userPreferences.findFirst.mockResolvedValue(
        existingPreferences
      );
      mockPrisma.userPreferences.delete.mockResolvedValue(existingPreferences);

      await deleteUserPreferences(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userPreferences.findFirst).toHaveBeenCalledWith({
        where: { userId: "user123" },
      });
      expect(mockPrisma.userPreferences.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Préférences utilisateur supprimées avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when preferences not found", async () => {
      mockRequest.params = { userId: "user123" };
      mockPrisma.userPreferences.findFirst.mockResolvedValue(null);

      await deleteUserPreferences(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Préférences utilisateur non trouvées",
        })
      );
      expect(mockPrisma.userPreferences.delete).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when delete fails", async () => {
      const mockError = new Error("Database error");
      const existingPreferences = { id: "1", userId: "user123" };

      mockRequest.params = { userId: "user123" };
      mockPrisma.userPreferences.findFirst.mockResolvedValue(
        existingPreferences
      );
      mockPrisma.userPreferences.delete.mockRejectedValue(mockError);

      await deleteUserPreferences(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
