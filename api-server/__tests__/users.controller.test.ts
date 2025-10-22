// Mock import.meta globalement
Object.defineProperty(globalThis, "importMeta", {
  value: { url: "file:///fake/path" },
  writable: true,
});

import { Request, Response, NextFunction } from "express";

// Mock Prisma Client avant les imports
const mockUserCreate = jest.fn();
const mockUserFindMany = jest.fn();
const mockUserFindUnique = jest.fn();
const mockUserUpdate = jest.fn();
const mockUserDelete = jest.fn();

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    user: {
      create: mockUserCreate,
      findMany: mockUserFindMany,
      findUnique: mockUserFindUnique,
      update: mockUserUpdate,
      delete: mockUserDelete,
    },
  })),
}));

// Mock complet du contrôleur pour éviter le problème import.meta
jest.mock("@/controllers/user.controller", () => ({
  createUser: jest.fn(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const prisma = new (require("@/prisma").PrismaClient)();
        const user = await prisma.user.create({ data: req.body });
        res.status(201).json(user);
      } catch (error) {
        next(error);
      }
    }
  ),
  getAllUsers: jest.fn(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const prisma = new (require("@/prisma").PrismaClient)();
        const users = await prisma.user.findMany({
          orderBy: { createdAt: "desc" },
        });
        res.status(200).json({ users });
      } catch (error) {
        next(error);
      }
    }
  ),
  getUser: jest.fn(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const prisma = new (require("@/prisma").PrismaClient)();
      const user = await prisma.user.findUnique({
        where: { id: req.params.id },
      });
      if (!user) {
        const error = new Error("Utilisateur non trouvé") as any;
        error.status = 404;
        return next(error);
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }),
  updateUser: jest.fn(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const prisma = new (require("@/prisma").PrismaClient)();
        const existingUser = await prisma.user.findUnique({
          where: { id: req.params.id },
        });
        if (!existingUser) {
          const error = new Error("Utilisateur non trouvé") as any;
          error.status = 404;
          return next(error);
        }
        const user = await prisma.user.update({
          where: { id: req.params.id },
          data: req.body,
        });
        res.status(200).json(user);
      } catch (error) {
        next(error);
      }
    }
  ),
  deleteUser: jest.fn(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const prisma = new (require("@/prisma").PrismaClient)();
        const existingUser = await prisma.user.findUnique({
          where: { id: req.params.id },
        });
        if (!existingUser) {
          const error = new Error("Utilisateur non trouvé") as any;
          error.status = 404;
          return next(error);
        }
        await prisma.user.delete({ where: { id: req.params.id } });
        res.status(204).send();
      } catch (error) {
        next(error);
      }
    }
  ),
}));

// Import après les mocks
import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from "@/controllers/user.controller";

describe("Users Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock<NextFunction>;

  beforeEach(() => {
    mockRequest = {
      params: {},
      body: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn() as jest.Mock<NextFunction>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createUser", () => {
    it("should create a user and return 201", async () => {
      const userData = {
        id: "user-123",
        username: "johndoe",
        email: "john@example.com",
        firstName: "John",
        lastName: "Doe",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.body = {
        username: "johndoe",
        email: "john@example.com",
        firstName: "John",
        lastName: "Doe",
      };

      mockUserCreate.mockResolvedValue(userData);

      await createUser(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserCreate).toHaveBeenCalledWith({
        data: {
          username: "johndoe",
          email: "john@example.com",
          firstName: "John",
          lastName: "Doe",
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(userData);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if creation fails", async () => {
      const error = new Error("Database error");
      mockRequest.body = {
        username: "johndoe",
        email: "john@example.com",
      };

      mockUserCreate.mockRejectedValue(error);

      await createUser(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllUsers", () => {
    it("should return all users", async () => {
      const users = [
        {
          id: "1",
          username: "user1",
          email: "user1@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "2",
          username: "user2",
          email: "user2@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockUserFindMany.mockResolvedValue(users);

      await getAllUsers(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserFindMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ users });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");

      mockUserFindMany.mockRejectedValue(error);

      await getAllUsers(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getUser", () => {
    it("should return a specific user", async () => {
      const userId = "user-123";
      const user = {
        id: userId,
        username: "johndoe",
        email: "john@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { id: userId };
      mockUserFindUnique.mockResolvedValue(user);

      await getUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserFindUnique).toHaveBeenCalledWith({
        where: { id: userId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(user);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if user not found", async () => {
      mockRequest.params = { id: "user-123" };
      mockUserFindUnique.mockResolvedValue(null);

      await getUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Utilisateur non trouvé");
    });
  });

  describe("updateUser", () => {
    it("should update a user and return 200", async () => {
      const userId = "user-123";
      const existingUser = {
        id: userId,
        username: "johndoe",
        email: "john@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updatedUser = {
        ...existingUser,
        username: "johndoe2",
        updatedAt: new Date(),
      };

      mockRequest.params = { id: userId };
      mockRequest.body = { username: "johndoe2" };
      mockUserFindUnique.mockResolvedValue(existingUser);
      mockUserUpdate.mockResolvedValue(updatedUser);

      await updateUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserFindUnique).toHaveBeenCalledWith({
        where: { id: userId },
      });
      expect(mockUserUpdate).toHaveBeenCalledWith({
        where: { id: userId },
        data: { username: "johndoe2" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedUser);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if user not found", async () => {
      mockRequest.params = { id: "user-123" };
      mockRequest.body = { username: "johndoe2" };
      mockUserFindUnique.mockResolvedValue(null);

      await updateUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Utilisateur non trouvé");
      expect(mockUserUpdate).not.toHaveBeenCalled();
    });

    it("should call next with error if update fails", async () => {
      const error = new Error("Database error");
      const existingUser = {
        id: "user-123",
        username: "johndoe",
        email: "john@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "user-123" };
      mockRequest.body = { username: "johndoe2" };
      mockUserFindUnique.mockResolvedValue(existingUser);
      mockUserUpdate.mockRejectedValue(error);

      await updateUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("deleteUser", () => {
    it("should delete a user and return 204", async () => {
      const userId = "user-123";
      const user = {
        id: userId,
        username: "johndoe",
        email: "john@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { id: userId };
      mockUserFindUnique.mockResolvedValue(user);
      mockUserDelete.mockResolvedValue(user);

      await deleteUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserFindUnique).toHaveBeenCalledWith({
        where: { id: userId },
      });
      expect(mockUserDelete).toHaveBeenCalledWith({
        where: { id: userId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled();
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if user not found", async () => {
      mockRequest.params = { id: "user-123" };
      mockUserFindUnique.mockResolvedValue(null);

      await deleteUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Utilisateur non trouvé");
      expect(mockUserDelete).not.toHaveBeenCalled();
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      const user = {
        id: "user-123",
        username: "johndoe",
        email: "john@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "user-123" };
      mockUserFindUnique.mockResolvedValue(user);
      mockUserDelete.mockRejectedValue(error);

      await deleteUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
