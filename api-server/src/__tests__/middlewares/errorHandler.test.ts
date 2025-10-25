import { Request, Response, NextFunction } from "express";
import { errorHandler } from "@/middlewares/errorHandler";
import { IErrorDetails } from "@/types";

describe("Error Handler Middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock<NextFunction>;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn() as jest.Mock<NextFunction>;

    // Mock console.error pour éviter le bruit dans les logs
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy.mockRestore();
  });

  describe("errorHandler", () => {
    it("should handle error with status and message", () => {
      const error: IErrorDetails = {
        status: 404,
        message: "Resource not found",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(console.error).toHaveBeenCalledWith(error);
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Resource not found",
        details: undefined,
      });
    });

    it("should handle error with status, message, and details", () => {
      const error: IErrorDetails = {
        status: 400,
        message: "Validation failed",
        details: "Email is required and password must be at least 8 characters",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(console.error).toHaveBeenCalledWith(error);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Validation failed",
        details: "Email is required and password must be at least 8 characters",
      });
    });

    it("should default to status 500 if status is not provided", () => {
      const error: IErrorDetails = {
        message: "Something went wrong",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(console.error).toHaveBeenCalledWith(error);
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Something went wrong",
        details: undefined,
      });
    });

    it("should use default message if message is not provided", () => {
      const error: Partial<IErrorDetails> = {
        status: 500,
      };

      errorHandler(
        error as IErrorDetails,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(console.error).toHaveBeenCalledWith(error);
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Une erreur est survenue sur le serveur",
        details: undefined,
      });
    });

    it("should handle error with status 0 (falsy value)", () => {
      const error: IErrorDetails = {
        status: 0,
        message: "Invalid status",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(console.error).toHaveBeenCalledWith(error);
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Invalid status",
        details: undefined,
      });
    });

    it("should handle error with empty message (falsy value)", () => {
      const error: IErrorDetails = {
        status: 400,
        message: "",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(console.error).toHaveBeenCalledWith(error);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Une erreur est survenue sur le serveur",
        details: undefined,
      });
    });

    it("should handle 401 Unauthorized error", () => {
      const error: IErrorDetails = {
        status: 401,
        message: "Unauthorized access",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Unauthorized access",
        details: undefined,
      });
    });

    it("should handle 403 Forbidden error", () => {
      const error: IErrorDetails = {
        status: 403,
        message: "Access forbidden",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Access forbidden",
        details: undefined,
      });
    });

    it("should handle 409 Conflict error with details", () => {
      const error: IErrorDetails = {
        status: 409,
        message: "Resource already exists",
        details: "User with email test@example.com already exists",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(409);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Resource already exists",
        details: "User with email test@example.com already exists",
      });
    });

    it("should handle generic Error object", () => {
      const error = new Error("Generic error") as IErrorDetails;

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(console.error).toHaveBeenCalledWith(error);
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Generic error",
        details: undefined,
      });
    });

    it("should handle error with details as string", () => {
      const error: IErrorDetails = {
        status: 400,
        message: "Bad request",
        details: "Invalid input provided",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Bad request",
        details: "Invalid input provided",
      });
    });

    it("should handle error with empty details string", () => {
      const error: IErrorDetails = {
        status: 500,
        message: "Internal server error",
        details: "",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Internal server error",
        details: undefined,
      });
    });

    it("should log error to console for debugging", () => {
      const error: IErrorDetails = {
        status: 500,
        message: "Internal server error",
        details: "Database connection failed",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(error);
    });

    it("should not call next function", () => {
      const error: IErrorDetails = {
        status: 500,
        message: "Server error",
      };

      errorHandler(
        error,
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).not.toHaveBeenCalled();
    });
  });
});
