import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  user: {
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

// Mock argon2
jest.mock("argon2", () => ({
  verify: jest.fn(),
  hash: jest.fn(),
}));

// Mock fs and path
jest.mock("fs", () => ({
  existsSync: jest.fn(),
  mkdirSync: jest.fn(),
  statSync: jest.fn(),
  unlinkSync: jest.fn(),
}));
jest.mock("path", () => ({
  join: jest.fn((...args) => args.join("/")),
  extname: jest.fn((filename) => ".jpg"),
}));

import * as argon2 from "argon2";
import * as fs from "fs";
import * as path from "path";
import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  uploadAvatar,
  changePassword,
} from "@/controllers/user.controller";

describe("User Controller", () => {
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
    jest.clearAllMocks();
  });

  describe("createUser", () => {
    it("should create a user and return 201", async () => {
      const mockUser = { id: "1", firstName: "John", lastName: "Doe" };
      mockRequest.body = mockUser;
      mockPrisma.user.create.mockResolvedValue(mockUser);

      await createUser(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.user.create).toHaveBeenCalledWith({ data: mockUser });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUser);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const error = new Error("fail");
      mockPrisma.user.create.mockRejectedValue(error);
      mockRequest.body = {};

      await createUser(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getAllUsers", () => {
    it("should return all users ordered by lastName and firstName", async () => {
      const users = [{ id: "1" }, { id: "2" }];
      mockPrisma.user.findMany.mockResolvedValue(users);

      await getAllUsers(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.user.findMany).toHaveBeenCalledWith({
        orderBy: { lastName: "asc", firstName: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ users });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const error = new Error("fail");
      mockPrisma.user.findMany.mockRejectedValue(error);

      await getAllUsers(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getUser", () => {
    it("should return a user by id", async () => {
      const user = { id: "1", firstName: "John" };
      mockRequest.params = { id: "1" };
      mockPrisma.user.findUnique.mockResolvedValue(user);

      await getUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(user);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 if user not found", async () => {
      mockRequest.params = { id: "1" };
      mockPrisma.user.findUnique.mockResolvedValue(null);

      await getUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Utilisateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const error = new Error("fail");
      mockRequest.params = { id: "1" };
      mockPrisma.user.findUnique.mockRejectedValue(error);

      await getUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("updateUser", () => {
    it("should update a user and return 200", async () => {
      const user = { id: "1", firstName: "John" };
      const updatedUser = { ...user, firstName: "Jane", updatedAt: new Date() };
      mockRequest.params = { id: "1" };
      mockRequest.body = { firstName: "Jane" };
      mockPrisma.user.findUnique.mockResolvedValue(user);
      mockPrisma.user.update.mockResolvedValue(updatedUser);

      await updateUser(
        mockRequest as Request<{ id: string }, {}, any>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.user.update).toHaveBeenCalledWith({
        data: { ...mockRequest.body, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedUser);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 if user not found", async () => {
      mockRequest.params = { id: "1" };
      mockPrisma.user.findUnique.mockResolvedValue(null);

      await updateUser(
        mockRequest as Request<{ id: string }, {}, any>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Utilisateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const error = new Error("fail");
      mockRequest.params = { id: "1" };
      mockPrisma.user.findUnique.mockRejectedValue(error);

      await updateUser(
        mockRequest as Request<{ id: string }, {}, any>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("deleteUser", () => {
    it("should delete a user and return 200", async () => {
      const user = { id: "1" };
      mockRequest.params = { id: "1" };
      mockPrisma.user.findUnique.mockResolvedValue(user);
      mockPrisma.user.delete.mockResolvedValue(user);

      await deleteUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.user.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Utilisateur supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 if user not found", async () => {
      mockRequest.params = { id: "1" };
      mockPrisma.user.findUnique.mockResolvedValue(null);

      await deleteUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Utilisateur non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const error = new Error("fail");
      mockRequest.params = { id: "1" };
      mockPrisma.user.findUnique.mockRejectedValue(error);

      await deleteUser(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("uploadAvatar", () => {
    it("should update avatar and return user without password", async () => {
      const user = { id: "1", avatar: "old.jpg", passwordHash: "hash" };
      const updatedUser = { ...user, avatar: "new.jpg", updatedAt: new Date() };
      mockRequest.params = { id: "1" };
      mockRequest.file = {
        path: "/some/path/new.jpg",
        filename: "new.jpg",
      } as any;
      mockPrisma.user.findUnique.mockResolvedValue(user);
      mockPrisma.user.update.mockResolvedValue(updatedUser);
      (fs.existsSync as jest.Mock).mockReturnValueOnce(true); // uploaded file exists
      (fs.existsSync as jest.Mock).mockReturnValueOnce(true); // old avatar exists

      await uploadAvatar(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.user.update).toHaveBeenCalledWith({
        where: { id: "1" },
        data: { avatar: "new.jpg", updatedAt: expect.any(Date) },
      });
      expect(fs.unlinkSync).toHaveBeenCalledWith(
        expect.stringContaining("old.jpg")
      );
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: "Avatar mis à jour avec succès",
          user: expect.objectContaining({ id: "1", avatar: "new.jpg" }),
          avatarUrl: expect.stringContaining("new.jpg"),
        })
      );
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 if user not found", async () => {
      mockRequest.params = { id: "1" };
      mockRequest.file = {
        path: "/some/path/new.jpg",
        filename: "new.jpg",
      } as any;
      mockPrisma.user.findUnique.mockResolvedValue(null);

      await uploadAvatar(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Utilisateur non trouvé",
        })
      );
    });

    it("should call next with 400 if no file uploaded", async () => {
      mockRequest.params = { id: "1" };
      mockPrisma.user.findUnique.mockResolvedValue({ id: "1" });

      await uploadAvatar(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 400,
          message: "Aucun fichier uploadé",
        })
      );
    });

    it("should clean up file and call next on error", async () => {
      mockRequest.params = { id: "1" };
      mockRequest.file = {
        path: "/some/path/new.jpg",
        filename: "new.jpg",
      } as any;
      mockPrisma.user.findUnique.mockResolvedValue({ id: "1" });
      mockPrisma.user.update.mockRejectedValue(new Error("fail"));
      (fs.existsSync as jest.Mock).mockReturnValue(true);

      await uploadAvatar(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );
      expect(fs.unlinkSync).toHaveBeenCalledWith("/some/path/new.jpg");
      expect(mockNext).toHaveBeenCalledWith(expect.any(Error));
    });
  });

  describe("changePassword", () => {
    it("should change password and return user without password", async () => {
      const user = { id: "1", passwordHash: "oldhash" };
      const updatedUser = {
        id: "1",
        passwordHash: "newhash",
        updatedAt: new Date(),
      };
      mockRequest.params = { id: "1" };
      mockRequest.body = {
        currentPassword: "oldpass",
        newPassword: "newpass123",
      };
      mockPrisma.user.findUnique.mockResolvedValue(user);
      (argon2.verify as jest.Mock).mockResolvedValue(true);
      (argon2.hash as jest.Mock).mockResolvedValue("newhash");
      mockPrisma.user.update.mockResolvedValue(updatedUser);

      await changePassword(
        mockRequest as Request<any, any, any>,
        mockResponse as Response,
        mockNext
      );

      expect(argon2.verify).toHaveBeenCalledWith("oldhash", "oldpass");
      expect(argon2.hash).toHaveBeenCalledWith("newpass123");
      expect(mockPrisma.user.update).toHaveBeenCalledWith({
        data: { passwordHash: "newhash", updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: "Mot de passe mis à jour avec succès",
          user: expect.objectContaining({ id: "1" }),
        })
      );
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 if user not found", async () => {
      mockRequest.params = { id: "1" };
      mockRequest.body = {
        currentPassword: "oldpass",
        newPassword: "newpass123",
      };
      mockPrisma.user.findUnique.mockResolvedValue(null);

      await changePassword(
        mockRequest as Request<any, any, any>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Utilisateur non trouvé",
        })
      );
    });

    it("should call next with 401 if current password is invalid", async () => {
      mockRequest.params = { id: "1" };
      mockRequest.body = {
        currentPassword: "wrong",
        newPassword: "newpass123",
      };
      mockPrisma.user.findUnique.mockResolvedValue({
        id: "1",
        passwordHash: "hash",
      });
      (argon2.verify as jest.Mock).mockResolvedValue(false);

      await changePassword(
        mockRequest as Request<any, any, any>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 401,
          message: "Mot de passe actuel incorrect",
        })
      );
    });

    it("should call next with 400 if new password is too short", async () => {
      mockRequest.params = { id: "1" };
      mockRequest.body = { currentPassword: "oldpass", newPassword: "short" };
      mockPrisma.user.findUnique.mockResolvedValue({
        id: "1",
        passwordHash: "hash",
      });
      (argon2.verify as jest.Mock).mockResolvedValue(true);

      await changePassword(
        mockRequest as Request<any, any, any>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 400,
          message: "Le mot de passe doit contenir au moins 8 caractères",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const error = new Error("fail");
      mockRequest.params = { id: "1" };
      mockRequest.body = {
        currentPassword: "oldpass",
        newPassword: "newpass123",
      };
      mockPrisma.user.findUnique.mockRejectedValue(error);

      await changePassword(
        mockRequest as Request<any, any, any>,
        mockResponse as Response,
        mockNext
      );
      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
