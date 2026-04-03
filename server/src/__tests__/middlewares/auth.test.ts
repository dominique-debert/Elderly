import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authenticate, AuthenticatedRequest } from "@/middlewares/auth";

// Mock jsonwebtoken
jest.mock("jsonwebtoken");

// Mock http-errors
jest.mock("http-errors", () => ({
  __esModule: true,
  default: jest.fn((status: number, message: string) => {
    const error = new Error(message) as any;
    error.status = status;
    return error;
  }),
}));

describe("Auth Middleware", () => {
  let mockRequest: Partial<AuthenticatedRequest>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock<NextFunction>;

  beforeEach(() => {
    mockRequest = {
      headers: {},
    };
    mockResponse = {};
    mockNext = jest.fn() as jest.Mock<NextFunction>;

    // Set JWT_SECRET for tests
    process.env.JWT_SECRET = "test-secret-key";
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("authenticate", () => {
    it("should authenticate valid token and set user on request", () => {
      const token = "valid-token-123";
      const userId = "user-123";
      const decodedPayload = { userId };

      mockRequest.headers = {
        authorization: `Bearer ${token}`,
      };

      (jwt.verify as jest.Mock).mockReturnValue(decodedPayload);

      authenticate(
        mockRequest as AuthenticatedRequest,
        mockResponse as Response,
        mockNext
      );

      expect(jwt.verify).toHaveBeenCalledWith(token, "test-secret-key");
      expect(mockRequest.user).toEqual({ userId });
      expect(mockNext).toHaveBeenCalledWith();
      expect(mockNext).toHaveBeenCalledTimes(1);
    });

    it("should return 401 if authorization header is missing", () => {
      mockRequest.headers = {};

      authenticate(
        mockRequest as AuthenticatedRequest,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 401,
          message: "Authentication token missing or invalid",
        })
      );
      expect(jwt.verify).not.toHaveBeenCalled();
      expect(mockRequest.user).toBeUndefined();
    });

    it("should return 401 if authorization header does not start with Bearer", () => {
      mockRequest.headers = {
        authorization: "Basic some-token",
      };

      authenticate(
        mockRequest as AuthenticatedRequest,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 401,
          message: "Authentication token missing or invalid",
        })
      );
      expect(jwt.verify).not.toHaveBeenCalled();
    });

    it("should return 401 if token is malformed (no space after Bearer)", () => {
      mockRequest.headers = {
        authorization: "Bearer",
      };

      authenticate(
        mockRequest as AuthenticatedRequest,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 401,
          message: "Authentication token missing or invalid",
        })
      );
    });

    it("should call next with error if token verification fails", () => {
      const token = "invalid-token";
      const error = new Error("Invalid token");

      mockRequest.headers = {
        authorization: `Bearer ${token}`,
      };

      (jwt.verify as jest.Mock).mockImplementation(() => {
        throw error;
      });

      authenticate(
        mockRequest as AuthenticatedRequest,
        mockResponse as Response,
        mockNext
      );

      expect(jwt.verify).toHaveBeenCalledWith(token, "test-secret-key");
      expect(mockNext).toHaveBeenCalledWith(error);
      expect(mockRequest.user).toBeUndefined();
    });

    it("should call next with error if token is expired", () => {
      const token = "expired-token";
      const error = new Error("jwt expired");
      (error as any).name = "TokenExpiredError";

      mockRequest.headers = {
        authorization: `Bearer ${token}`,
      };

      (jwt.verify as jest.Mock).mockImplementation(() => {
        throw error;
      });

      authenticate(
        mockRequest as AuthenticatedRequest,
        mockResponse as Response,
        mockNext
      );

      expect(jwt.verify).toHaveBeenCalledWith(token, "test-secret-key");
      expect(mockNext).toHaveBeenCalledWith(error);
      expect(mockRequest.user).toBeUndefined();
    });

    it("should call next with error if JWT_SECRET is not set", () => {
      const token = "some-token";
      delete process.env.JWT_SECRET;

      mockRequest.headers = {
        authorization: `Bearer ${token}`,
      };

      const error = new Error("secretOrPrivateKey must have a value");
      (jwt.verify as jest.Mock).mockImplementation(() => {
        throw error;
      });

      authenticate(
        mockRequest as AuthenticatedRequest,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
      expect(mockRequest.user).toBeUndefined();

      // Restore JWT_SECRET
      process.env.JWT_SECRET = "test-secret-key";
    });

    it("should handle token with extra payload data", () => {
      const token = "valid-token-with-extra-data";
      const decodedPayload = {
        userId: "user-456",
        email: "test@example.com",
        iat: 1234567890,
        exp: 1234567900,
      };

      mockRequest.headers = {
        authorization: `Bearer ${token}`,
      };

      (jwt.verify as jest.Mock).mockReturnValue(decodedPayload);

      authenticate(
        mockRequest as AuthenticatedRequest,
        mockResponse as Response,
        mockNext
      );

      expect(jwt.verify).toHaveBeenCalledWith(token, "test-secret-key");
      expect(mockRequest.user).toEqual({ userId: "user-456" });
      expect(mockNext).toHaveBeenCalledWith();
    });

    it("should handle authorization header with multiple spaces", () => {
      const token = "valid-token";
      const userId = "user-789";
      const decodedPayload = { userId };

      mockRequest.headers = {
        authorization: `Bearer  ${token}`, // Double space
      };

      (jwt.verify as jest.Mock).mockReturnValue(decodedPayload);

      authenticate(
        mockRequest as AuthenticatedRequest,
        mockResponse as Response,
        mockNext
      );

      // Le token extrait sera une string vide "" à cause du split
      expect(jwt.verify).toHaveBeenCalled();
    });

    it("should not modify request if authentication fails", () => {
      const originalRequest = { ...mockRequest };

      mockRequest.headers = {
        authorization: "InvalidFormat",
      };

      authenticate(
        mockRequest as AuthenticatedRequest,
        mockResponse as Response,
        mockNext
      );

      expect(mockRequest.user).toBeUndefined();
      expect(mockNext).toHaveBeenCalled();
    });
  });
});
