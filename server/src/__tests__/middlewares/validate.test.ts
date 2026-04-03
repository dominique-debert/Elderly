import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { validate } from "@/middlewares/validate";

describe("Validate Middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock<NextFunction>;

  beforeEach(() => {
    mockRequest = {
      body: {},
      params: {},
      query: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn() as jest.Mock<NextFunction>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("validate - body", () => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    });

    it("should validate valid body data and call next", () => {
      mockRequest.body = {
        email: "test@example.com",
        password: "Password123!",
      };

      const middleware = validate(schema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith();
      expect(mockResponse.status).not.toHaveBeenCalled();
      expect(mockResponse.json).not.toHaveBeenCalled();
    });

    it("should return 400 if body validation fails", () => {
      mockRequest.body = {
        email: "invalid-email",
        password: "short",
      };

      const middleware = validate(schema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: expect.stringContaining("email"),
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 400 with first validation error message", () => {
      mockRequest.body = {
        email: "",
        password: "",
      };

      const middleware = validate(schema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: expect.any(String),
      });
    });

    it("should assign validated values to request body", () => {
      mockRequest.body = {
        email: "test@example.com",
        password: "Password123!",
      };

      const middleware = validate(schema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockRequest.body).toEqual({
        email: "test@example.com",
        password: "Password123!",
      });
      expect(mockNext).toHaveBeenCalled();
    });

    it("should handle missing required fields", () => {
      mockRequest.body = {};

      const middleware = validate(schema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: expect.stringContaining("required"),
      });
    });

    it("should strip unknown fields if schema is strict", () => {
      const strictSchema = Joi.object({
        email: Joi.string().email().required(),
      }).options({ stripUnknown: true });

      mockRequest.body = {
        email: "test@example.com",
        unknownField: "should be removed",
      };

      const middleware = validate(strictSchema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockRequest.body).toEqual({
        email: "test@example.com",
      });
      expect(mockNext).toHaveBeenCalled();
    });
  });

  describe("validate - params", () => {
    const schema = Joi.object({
      id: Joi.string().uuid().required(),
    });

    it("should validate params when property is 'params'", () => {
      mockRequest.params = {
        id: "123e4567-e89b-12d3-a456-426614174000",
      };

      const middleware = validate(schema, "params");
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should return 400 if params validation fails", () => {
      mockRequest.params = {
        id: "invalid-uuid",
      };

      const middleware = validate(schema, "params");
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: expect.stringContaining("valid GUID"),
      });
    });

    it("should assign validated values to request params", () => {
      const validUuid = "123e4567-e89b-12d3-a456-426614174000";
      mockRequest.params = { id: validUuid };

      const middleware = validate(schema, "params");
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockRequest.params).toEqual({ id: validUuid });
    });
  });

  describe("validate - query", () => {
    const schema = Joi.object({
      page: Joi.number().integer().min(1).default(1),
      limit: Joi.number().integer().min(1).max(100).default(10),
    });

    it("should validate query when property is 'query'", () => {
      mockRequest.query = {
        page: "2",
        limit: "20",
      };

      const middleware = validate(schema, "query");
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith();
    });

    it("should return 400 if query validation fails", () => {
      mockRequest.query = {
        page: "-1",
        limit: "200",
      };

      const middleware = validate(schema, "query");
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: expect.any(String),
      });
    });

    it("should apply default values from schema", () => {
      mockRequest.query = {};

      const middleware = validate(schema, "query");
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockRequest.query).toEqual({
        page: 1,
        limit: 10,
      });
      expect(mockNext).toHaveBeenCalled();
    });

    it("should transform query string values to correct types", () => {
      mockRequest.query = {
        page: "3",
        limit: "25",
      };

      const middleware = validate(schema, "query");
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockRequest.query).toEqual({
        page: 3,
        limit: 25,
      });
    });
  });

  describe("validate - default behavior", () => {
    it("should default to validating body if no property specified", () => {
      const schema = Joi.object({
        name: Joi.string().required(),
      });

      mockRequest.body = { name: "Test" };

      const middleware = validate(schema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
      expect(mockRequest.body).toEqual({ name: "Test" });
    });
  });

  describe("validate - edge cases", () => {
    it("should handle empty schema with unknown keys allowed", () => {
      const emptySchema = Joi.object({}).unknown(true);

      mockRequest.body = { anything: "goes" };

      const middleware = validate(emptySchema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
    });

    it("should handle schema with optional fields", () => {
      const schema = Joi.object({
        required: Joi.string().required(),
        optional: Joi.string().optional(),
      });

      mockRequest.body = { required: "value" };

      const middleware = validate(schema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
    });

    it("should handle complex nested objects", () => {
      const schema = Joi.object({
        user: Joi.object({
          name: Joi.string().required(),
          email: Joi.string().email().required(),
        }).required(),
      });

      mockRequest.body = {
        user: {
          name: "John Doe",
          email: "john@example.com",
        },
      };

      const middleware = validate(schema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
    });

    it("should return only first error when multiple validation errors exist", () => {
      const schema = Joi.object({
        field1: Joi.string().required(),
        field2: Joi.string().required(),
        field3: Joi.string().required(),
      });

      mockRequest.body = {};

      const middleware = validate(schema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.json).toHaveBeenCalledTimes(1);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: expect.any(String),
      });
    });

    it("should not call next after sending error response", () => {
      const schema = Joi.object({
        email: Joi.string().email().required(),
      });

      mockRequest.body = { email: "invalid" };

      const middleware = validate(schema);
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockNext).not.toHaveBeenCalled();
    });
  });
});
