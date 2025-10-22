import session from "express-session";

describe("Session Middleware", () => {
  let originalEnv: NodeJS.ProcessEnv;
  let mockSession: jest.Mock;

  beforeAll(() => {
    // Mock express-session
    mockSession = jest.fn(() => jest.fn((req, res, next) => next()));
    jest.mock("express-session", () => mockSession);

    // Mock dotenv
    jest.mock("dotenv", () => ({
      config: jest.fn(),
    }));
  });

  beforeEach(() => {
    // Save original environment
    originalEnv = { ...process.env };
    mockSession.mockClear();
  });

  afterEach(() => {
    // Restore original environment
    process.env = originalEnv;
    // Clear module cache to force re-import
    jest.resetModules();
  });

  describe("currentSession", () => {
    it("should configure session with JWT_SECRET from environment", () => {
      process.env.JWT_SECRET = "test-secret-key-123";

      const session = require("express-session");
      require("@/middlewares/session");

      expect(session).toHaveBeenCalledWith({
        secret: "test-secret-key-123",
        resave: false,
        saveUninitialized: false,
        cookie: {
          secure: false,
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24,
        },
      });
    });

    it("should use default_secret if JWT_SECRET is not defined", () => {
      delete process.env.JWT_SECRET;

      const session = require("express-session");
      require("@/middlewares/session");

      expect(session).toHaveBeenCalledWith({
        secret: "default_secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
          secure: false,
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24,
        },
      });
    });

    it("should configure session with resave: false", () => {
      process.env.JWT_SECRET = "test-secret";

      const session = require("express-session");
      require("@/middlewares/session");

      expect(session).toHaveBeenCalledWith(
        expect.objectContaining({
          resave: false,
        })
      );
    });

    it("should configure session with saveUninitialized: false", () => {
      process.env.JWT_SECRET = "test-secret";

      const session = require("express-session");
      require("@/middlewares/session");

      expect(session).toHaveBeenCalledWith(
        expect.objectContaining({
          saveUninitialized: false,
        })
      );
    });

    it("should configure cookie with secure: false for development", () => {
      process.env.JWT_SECRET = "test-secret";

      const session = require("express-session");
      require("@/middlewares/session");

      expect(session).toHaveBeenCalledWith(
        expect.objectContaining({
          cookie: expect.objectContaining({
            secure: false,
          }),
        })
      );
    });

    it("should configure cookie with httpOnly: true", () => {
      process.env.JWT_SECRET = "test-secret";

      const session = require("express-session");
      require("@/middlewares/session");

      expect(session).toHaveBeenCalledWith(
        expect.objectContaining({
          cookie: expect.objectContaining({
            httpOnly: true,
          }),
        })
      );
    });

    it("should configure cookie with maxAge of 1 day", () => {
      process.env.JWT_SECRET = "test-secret";
      const oneDayInMs = 1000 * 60 * 60 * 24;

      const session = require("express-session");
      require("@/middlewares/session");

      expect(session).toHaveBeenCalledWith(
        expect.objectContaining({
          cookie: expect.objectContaining({
            maxAge: oneDayInMs,
          }),
        })
      );
    });

    it("should call dotenv.config on module load", () => {
      const dotenv = require("dotenv");
      require("@/middlewares/session");

      expect(dotenv.config).toHaveBeenCalled();
    });

    it("should handle empty string JWT_SECRET", () => {
      process.env.JWT_SECRET = "";

      const session = require("express-session");
      require("@/middlewares/session");

      expect(session).toHaveBeenCalledWith(
        expect.objectContaining({
          secret: "default_secret",
        })
      );
    });

    it("should export currentSession as a middleware function", () => {
      process.env.JWT_SECRET = "test-secret";

      const { currentSession } = require("@/middlewares/session");

      expect(typeof currentSession).toBe("function");
    });

    it("should configure all cookie security options correctly", () => {
      process.env.JWT_SECRET = "production-secret";

      const session = require("express-session");
      require("@/middlewares/session");

      expect(session).toHaveBeenCalledWith(
        expect.objectContaining({
          cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 86400000,
          },
        })
      );
    });
  });
});
