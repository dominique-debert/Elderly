import { Request, Response, NextFunction } from "express";

// Mock argon2 avant les imports
jest.mock("argon2", () => ({
  hash: jest.fn(),
  verify: jest.fn(),
}));

// Mock fs
const mockExistsSync = jest.fn();
const mockRenameSync = jest.fn();
jest.mock("fs", () => ({
  existsSync: mockExistsSync,
  renameSync: mockRenameSync,
}));

// Mock path
jest.mock("path", () => ({
  ...jest.requireActual("path"),
  join: jest.fn((...args) => args.join("/")),
  basename: jest.fn((path) => path.split("/").pop()),
  extname: jest.fn((path) => {
    const parts = path.split(".");
    return parts.length > 1 ? `.${parts.pop()}` : "";
  }),
}));

// Mock http-errors
jest.mock("http-errors", () => ({
  __esModule: true,
  default: jest.fn((status: number, message: string) => {
    const error = new Error(message) as any;
    error.status = status;
    return error;
  }),
}));

// Mock validators
jest.mock("@/validators", () => ({
  signUpSchema: {
    validate: jest.fn(),
  },
  signInSchema: {
    validate: jest.fn(),
  },
}));

// Mock utils
jest.mock("@/utils", () => ({
  generateToken: jest.fn(),
}));

// Mock Prisma Client
const mockUserFindUnique = jest.fn();
const mockUserCreate = jest.fn();
const mockSessionCreate = jest.fn();
const mockSessionDeleteMany = jest.fn();

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    user: {
      findUnique: mockUserFindUnique,
      create: mockUserCreate,
    },
    session: {
      create: mockSessionCreate,
      deleteMany: mockSessionDeleteMany,
    },
  })),
}));

// Import après les mocks
import { signUp, signIn, logout } from "@/controllers/auth.controller";
import argon2 from "argon2";
import { generateToken } from "@/utils";
import { signUpSchema, signInSchema } from "@/validators";
import fs from "fs";
import path from "path";

describe("Auth Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock<NextFunction>;

  beforeEach(() => {
    mockRequest = {
      body: {},
      ip: "127.0.0.1",
      headers: {
        "user-agent": "jest-test",
      },
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn() as jest.Mock<NextFunction>;

    // Reset environment variables
    process.env.JWT_EXPIRES_IN = "15m";
    process.env.REFRESH_TOKEN_EXPIRES_IN = "7d";
    process.env.SERVER_BASE_URL = "http://localhost:3000";

    // Reset console.warn mock
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe("signUp", () => {
    it("should create a new user and return tokens", async () => {
      const userData = {
        email: "test@example.com",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
        birthDate: new Date("1990-01-01"),
        isAdmin: false,
        latitude: 48.8566,
        longitude: 2.3522,
      };

      const hashedPassword = "hashedPassword123";
      const createdUser = {
        id: "user-123",
        email: userData.email,
        passwordHash: hashedPassword,
        firstName: userData.firstName,
        lastName: userData.lastName,
        avatar: null,
        birthDate: userData.birthDate,
        registrationDate: new Date(),
        isAdmin: userData.isAdmin,
        latitude: userData.latitude,
        longitude: userData.longitude,
        profession: null,
        city: null,
        postalCode: null,
        address: null,
        description: null,
        phone: null,
      };

      mockRequest.body = userData;
      (signUpSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockResolvedValue(null);
      (argon2.hash as jest.Mock).mockResolvedValue(hashedPassword);
      mockUserCreate.mockResolvedValue(createdUser);
      (generateToken as jest.Mock)
        .mockReturnValueOnce("access-token-123")
        .mockReturnValueOnce("refresh-token-123");
      mockSessionCreate.mockResolvedValue({
        id: "session-123",
        refreshToken: "refresh-token-123",
        userId: createdUser.id,
      });

      await signUp(mockRequest as Request, mockResponse as Response, mockNext);

      expect(signUpSchema.validate).toHaveBeenCalledWith(userData);
      expect(mockUserFindUnique).toHaveBeenCalledWith({
        where: { email: userData.email },
      });
      expect(argon2.hash).toHaveBeenCalledWith(userData.password);
      expect(mockUserCreate).toHaveBeenCalledWith({
        data: {
          email: userData.email,
          passwordHash: hashedPassword,
          firstName: userData.firstName,
          lastName: userData.lastName,
          avatar: null,
          birthDate: userData.birthDate,
          isAdmin: userData.isAdmin,
          latitude: userData.latitude,
          longitude: userData.longitude,
        },
      });
      expect(generateToken).toHaveBeenCalledWith(
        { userId: createdUser.id },
        "15m"
      );
      expect(generateToken).toHaveBeenCalledWith(
        { userId: createdUser.id },
        "7d"
      );
      expect(mockSessionCreate).toHaveBeenCalledWith({
        data: expect.objectContaining({
          refreshToken: "refresh-token-123",
          userId: createdUser.id,
          ipAddress: "127.0.0.1",
          userAgent: "jest-test",
        }),
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          accessToken: "access-token-123",
          refreshToken: "refresh-token-123",
          id: createdUser.id,
          email: createdUser.email,
        })
      );
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should create a user with uploaded avatar", async () => {
      const userData = {
        email: "test@example.com",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
      };

      const uploadedAvatar = "avatar-123.jpg";
      const createdUser = {
        id: "user-123",
        email: userData.email,
        passwordHash: "hashedPassword",
        firstName: userData.firstName,
        lastName: userData.lastName,
        avatar: uploadedAvatar,
        birthDate: null,
        registrationDate: new Date(),
        isAdmin: false,
        latitude: null,
        longitude: null,
        profession: null,
        city: null,
        postalCode: null,
        address: null,
        description: null,
        phone: null,
      };

      mockRequest.body = userData;
      (mockRequest as any).file = {
        filename: uploadedAvatar,
        path: `/tmp/${uploadedAvatar}`,
      };

      (signUpSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockResolvedValue(null);
      (argon2.hash as jest.Mock).mockResolvedValue("hashedPassword");
      mockUserCreate.mockResolvedValue(createdUser);
      (generateToken as jest.Mock)
        .mockReturnValueOnce("access-token")
        .mockReturnValueOnce("refresh-token");
      mockSessionCreate.mockResolvedValue({
        id: "session-123",
        refreshToken: "refresh-token",
        userId: createdUser.id,
      });

      await signUp(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockUserCreate).toHaveBeenCalledWith({
        data: expect.objectContaining({
          avatar: uploadedAvatar,
        }),
      });
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          avatar: uploadedAvatar,
          avatarUrl: `http://localhost:3000/images/avatars/${uploadedAvatar}`,
        })
      );
    });

    it("should create a user with avatar from body field", async () => {
      const userData = {
        email: "test@example.com",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
        avatar: "avatar-from-body.jpg",
      };

      const createdUser = {
        id: "user-123",
        email: userData.email,
        passwordHash: "hashedPassword",
        firstName: userData.firstName,
        lastName: userData.lastName,
        avatar: userData.avatar,
        birthDate: null,
        registrationDate: new Date(),
        isAdmin: false,
        latitude: null,
        longitude: null,
        profession: null,
        city: null,
        postalCode: null,
        address: null,
        description: null,
        phone: null,
      };

      mockRequest.body = userData;

      (signUpSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockResolvedValue(null);
      (argon2.hash as jest.Mock).mockResolvedValue("hashedPassword");
      mockUserCreate.mockResolvedValue(createdUser);
      (generateToken as jest.Mock)
        .mockReturnValueOnce("access-token")
        .mockReturnValueOnce("refresh-token");
      mockSessionCreate.mockResolvedValue({
        id: "session-123",
        refreshToken: "refresh-token",
        userId: createdUser.id,
      });

      await signUp(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockUserCreate).toHaveBeenCalledWith({
        data: expect.objectContaining({
          avatar: userData.avatar,
        }),
      });
    });

    it("should rename uploaded avatar to desired filename", async () => {
      const userData = {
        email: "test@example.com",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
        avatarFilename: "my-custom-avatar.jpg",
      };

      const uploadedAvatar = "temp-123.jpg";
      const desiredFilename = "my-custom-avatar.jpg";

      mockRequest.body = userData;
      (mockRequest as any).file = {
        filename: uploadedAvatar,
        path: `/tmp/${uploadedAvatar}`,
      };

      mockExistsSync.mockReturnValue(false);
      (path.basename as jest.Mock).mockReturnValue(desiredFilename);
      (path.extname as jest.Mock).mockReturnValue(".jpg");

      const createdUser = {
        id: "user-123",
        email: userData.email,
        passwordHash: "hashedPassword",
        firstName: userData.firstName,
        lastName: userData.lastName,
        avatar: desiredFilename,
        birthDate: null,
        registrationDate: new Date(),
        isAdmin: false,
        latitude: null,
        longitude: null,
        profession: null,
        city: null,
        postalCode: null,
        address: null,
        description: null,
        phone: null,
      };

      (signUpSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockResolvedValue(null);
      (argon2.hash as jest.Mock).mockResolvedValue("hashedPassword");
      mockUserCreate.mockResolvedValue(createdUser);
      (generateToken as jest.Mock)
        .mockReturnValueOnce("access-token")
        .mockReturnValueOnce("refresh-token");
      mockSessionCreate.mockResolvedValue({
        id: "session-123",
        refreshToken: "refresh-token",
        userId: createdUser.id,
      });

      await signUp(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockRenameSync).toHaveBeenCalled();
      expect(mockUserCreate).toHaveBeenCalledWith({
        data: expect.objectContaining({
          avatar: desiredFilename,
        }),
      });
    });

    it("should handle file already exists when renaming avatar", async () => {
      const userData = {
        email: "test@example.com",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
        avatarFilename: "existing-avatar.jpg",
      };

      const uploadedAvatar = "temp-456.jpg";

      mockRequest.body = userData;
      (mockRequest as any).file = {
        filename: uploadedAvatar,
        path: `/tmp/${uploadedAvatar}`,
      };

      mockExistsSync.mockReturnValueOnce(true).mockReturnValueOnce(false);
      (path.basename as jest.Mock).mockReturnValue("existing-avatar.jpg");
      (path.extname as jest.Mock).mockReturnValue(".jpg");

      const createdUser = {
        id: "user-123",
        email: userData.email,
        passwordHash: "hashedPassword",
        firstName: userData.firstName,
        lastName: userData.lastName,
        avatar: "existing-avatar-1.jpg",
        birthDate: null,
        registrationDate: new Date(),
        isAdmin: false,
        latitude: null,
        longitude: null,
        profession: null,
        city: null,
        postalCode: null,
        address: null,
        description: null,
        phone: null,
      };

      (signUpSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockResolvedValue(null);
      (argon2.hash as jest.Mock).mockResolvedValue("hashedPassword");
      mockUserCreate.mockResolvedValue(createdUser);
      (generateToken as jest.Mock)
        .mockReturnValueOnce("access-token")
        .mockReturnValueOnce("refresh-token");
      mockSessionCreate.mockResolvedValue({
        id: "session-123",
        refreshToken: "refresh-token",
        userId: createdUser.id,
      });

      await signUp(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockRenameSync).toHaveBeenCalled();
    });

    it("should handle avatar rename failure gracefully", async () => {
      const userData = {
        email: "test@example.com",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
        avatarFilename: "my-avatar.jpg",
      };

      const uploadedAvatar = "temp-789.jpg";

      mockRequest.body = userData;
      (mockRequest as any).file = {
        filename: uploadedAvatar,
        path: `/tmp/${uploadedAvatar}`,
      };

      mockExistsSync.mockReturnValue(false);
      mockRenameSync.mockImplementation(() => {
        throw new Error("Permission denied");
      });
      (path.basename as jest.Mock).mockReturnValue("my-avatar.jpg");
      (path.extname as jest.Mock).mockReturnValue(".jpg");

      const createdUser = {
        id: "user-123",
        email: userData.email,
        passwordHash: "hashedPassword",
        firstName: userData.firstName,
        lastName: userData.lastName,
        avatar: uploadedAvatar,
        birthDate: null,
        registrationDate: new Date(),
        isAdmin: false,
        latitude: null,
        longitude: null,
        profession: null,
        city: null,
        postalCode: null,
        address: null,
        description: null,
        phone: null,
      };

      (signUpSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockResolvedValue(null);
      (argon2.hash as jest.Mock).mockResolvedValue("hashedPassword");
      mockUserCreate.mockResolvedValue(createdUser);
      (generateToken as jest.Mock)
        .mockReturnValueOnce("access-token")
        .mockReturnValueOnce("refresh-token");
      mockSessionCreate.mockResolvedValue({
        id: "session-123",
        refreshToken: "refresh-token",
        userId: createdUser.id,
      });

      await signUp(mockRequest as Request, mockResponse as Response, mockNext);

      expect(console.warn).toHaveBeenCalledWith(
        "Could not rename uploaded avatar to desired filename:",
        expect.any(Error)
      );
      expect(mockUserCreate).toHaveBeenCalledWith({
        data: expect.objectContaining({
          avatar: uploadedAvatar,
        }),
      });
    });

    it("should return 400 if validation fails", async () => {
      const validationError = {
        details: [{ message: "email is required" }],
      };

      mockRequest.body = { password: "Password123!" };
      (signUpSchema.validate as jest.Mock).mockReturnValue({
        error: validationError,
      });

      await signUp(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(400);
      expect(error.message).toBe("Invalid data");
    });

    it("should return 409 if email already exists", async () => {
      const userData = {
        email: "existing@example.com",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
      };

      mockRequest.body = userData;
      (signUpSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockResolvedValue({
        id: "existing-user-123",
        email: userData.email,
      });

      await signUp(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(409);
      expect(error.message).toBe("Email already in use");
    });

    it("should call next with error if user creation fails", async () => {
      const userData = {
        email: "test@example.com",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
      };

      const dbError = new Error("Database error");

      mockRequest.body = userData;
      (signUpSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockResolvedValue(null);
      (argon2.hash as jest.Mock).mockResolvedValue("hashedPassword");
      mockUserCreate.mockRejectedValue(dbError);

      await signUp(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(dbError);
    });
  });

  describe("signIn", () => {
    it("should sign in user and return tokens", async () => {
      const credentials = {
        email: "test@example.com",
        password: "Password123!",
      };

      const user = {
        id: "user-123",
        email: credentials.email,
        passwordHash: "hashedPassword123",
        firstName: "John",
        lastName: "Doe",
        avatar: null,
        birthDate: new Date("1990-01-01"),
        registrationDate: new Date(),
        isAdmin: false,
        latitude: 48.8566,
        longitude: 2.3522,
        profession: null,
        city: null,
        postalCode: null,
        address: null,
        description: null,
        phone: null,
      };

      mockRequest.body = credentials;
      (signInSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockResolvedValue(user);
      (argon2.verify as jest.Mock).mockResolvedValue(true);
      (generateToken as jest.Mock)
        .mockReturnValueOnce("access-token-123")
        .mockReturnValueOnce("refresh-token-123");
      mockSessionCreate.mockResolvedValue({
        id: "session-123",
        refreshToken: "refresh-token-123",
        userId: user.id,
      });

      await signIn(mockRequest as Request, mockResponse as Response, mockNext);

      expect(signInSchema.validate).toHaveBeenCalledWith(credentials);
      expect(mockUserFindUnique).toHaveBeenCalledWith({
        where: { email: credentials.email },
      });
      expect(argon2.verify).toHaveBeenCalledWith(
        user.passwordHash,
        credentials.password
      );
      expect(generateToken).toHaveBeenCalledWith({ userId: user.id }, "15m");
      expect(generateToken).toHaveBeenCalledWith({ userId: user.id }, "7d");
      expect(mockSessionCreate).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          accessToken: "access-token-123",
          refreshToken: "refresh-token-123",
          id: user.id,
          email: user.email,
        })
      );
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 400 if validation fails", async () => {
      const validationError = {
        details: [{ message: "email is required" }],
      };

      mockRequest.body = { password: "Password123!" };
      (signInSchema.validate as jest.Mock).mockReturnValue({
        error: validationError,
      });

      await signIn(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(400);
    });

    it("should return 401 if user not found", async () => {
      const credentials = {
        email: "notfound@example.com",
        password: "Password123!",
      };

      mockRequest.body = credentials;
      (signInSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockResolvedValue(null);

      await signIn(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(401);
      expect(error.message).toBe("Utilisateur inconnu !");
    });

    it("should return 401 if password is incorrect", async () => {
      const credentials = {
        email: "test@example.com",
        password: "WrongPassword!",
      };

      const user = {
        id: "user-123",
        email: credentials.email,
        passwordHash: "hashedPassword123",
        firstName: "John",
        lastName: "Doe",
      };

      mockRequest.body = credentials;
      (signInSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockResolvedValue(user);
      (argon2.verify as jest.Mock).mockResolvedValue(false);

      await signIn(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(401);
      expect(error.message).toBe("Mot de passe incorrect !");
    });

    it("should call next with error if sign in fails", async () => {
      const credentials = {
        email: "test@example.com",
        password: "Password123!",
      };

      const dbError = new Error("Database error");

      mockRequest.body = credentials;
      (signInSchema.validate as jest.Mock).mockReturnValue({ error: null });
      mockUserFindUnique.mockRejectedValue(dbError);

      await signIn(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(dbError);
    });
  });

  describe("logout", () => {
    it("should delete session and return 204", async () => {
      const refreshToken = "refresh-token-123";

      mockRequest.body = { refreshToken };
      mockSessionDeleteMany.mockResolvedValue({ count: 1 });

      await logout(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockSessionDeleteMany).toHaveBeenCalledWith({
        where: { refreshToken },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled();
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 400 if refresh token is missing", async () => {
      mockRequest.body = {};

      await logout(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(400);
      expect(error.message).toBe("Refresh token required");
    });

    it("should call next with error if logout fails", async () => {
      const dbError = new Error("Database error");
      mockRequest.body = { refreshToken: "refresh-token-123" };
      mockSessionDeleteMany.mockRejectedValue(dbError);

      await logout(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(dbError);
    });
  });
});
