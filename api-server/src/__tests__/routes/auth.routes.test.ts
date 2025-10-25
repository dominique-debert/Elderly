import request from "supertest";
import express, { Express } from "express";

// Mock des contrôleurs
const mockSignUp = jest.fn();
const mockSignIn = jest.fn();
const mockLogout = jest.fn();

jest.mock("@/controllers", () => ({
  signUp: (req: any, res: any, next: any) => mockSignUp(req, res, next),
  signIn: (req: any, res: any, next: any) => mockSignIn(req, res, next),
  logout: (req: any, res: any, next: any) => mockLogout(req, res, next),
}));

// Mock du middleware de validation
const mockValidateMiddleware = jest.fn((req: any, res: any, next: any) =>
  next()
);
jest.mock("@/middlewares", () => ({
  validate: jest.fn(() => mockValidateMiddleware),
}));

// Mock des schémas de validation
jest.mock("@/validators", () => ({
  signUpSchema: { validate: jest.fn() },
  signInSchema: { validate: jest.fn() },
}));

// Mock multer
const mockSingle = jest.fn(() => (req: any, res: any, next: any) => {
  // Simulate file upload
  if (req.file) {
    req.file = {
      fieldname: "avatar",
      originalname: req.file.originalname || "test.jpg",
      encoding: "7bit",
      mimetype: "image/jpeg",
      destination: "public/images/avatars",
      filename: `${Date.now()}-test.jpg`,
      path: `public/images/avatars/${Date.now()}-test.jpg`,
      size: 1024,
    };
  }
  next();
});

const mockDiskStorage = jest.fn(() => ({}));

const multerMock: any = jest.fn(() => ({
  single: mockSingle,
}));

multerMock.diskStorage = mockDiskStorage;

jest.mock("multer", () => multerMock);

// Mock fs - Utiliser une fonction pour le mock
jest.mock("fs", () => ({
  mkdirSync: jest.fn(),
}));

// Mock path
jest.mock("path", () => ({
  ...jest.requireActual("path"),
  join: jest.fn((...args) => args.join("/")),
  extname: jest.fn((filename: string) => {
    const parts = filename.split(".");
    return parts.length > 1 ? `.${parts[parts.length - 1]}` : "";
  }),
}));

describe("Auth Routes", () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Import routes after mocks are set up
    const authRoutes = require("@/routes/auth.routes").default;
    app.use("/api/auth", authRoutes);
  });

  afterEach(() => {
    // Only clear controller mocks
    mockSignUp.mockClear();
    mockSignIn.mockClear();
    mockLogout.mockClear();
    mockValidateMiddleware.mockClear();
  });

  describe("POST /api/auth/signup", () => {
    it("should call signUp controller", async () => {
      mockSignUp.mockImplementation((req, res) => {
        res.status(201).json({
          message: "User created successfully",
          user: { id: "user-123", email: "test@example.com" },
        });
      });

      const response = await request(app).post("/api/auth/signup").send({
        email: "test@example.com",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
      });

      expect(response.status).toBe(201);
      expect(mockSignUp).toHaveBeenCalled();
    });

    it("should handle avatar file upload", async () => {
      mockSignUp.mockImplementation((req, res) => {
        res.status(201).json({
          message: "User created with avatar",
          user: { id: "user-123", email: "test@example.com" },
        });
      });

      const response = await request(app)
        .post("/api/auth/signup")
        .field("email", "test@example.com")
        .field("password", "Password123!")
        .attach("avatar", Buffer.from("fake-image-data"), "avatar.jpg");

      expect(response.status).toBe(201);
      expect(mockSignUp).toHaveBeenCalled();
    });

    it("should validate signUp data", async () => {
      mockSignUp.mockImplementation((req, res) => {
        res.status(201).json({ message: "User created" });
      });

      await request(app).post("/api/auth/signup").send({
        email: "test@example.com",
        password: "Password123!",
      });

      expect(mockValidateMiddleware).toHaveBeenCalled();
    });

    it("should return 400 for invalid data", async () => {
      mockSignUp.mockImplementation((req, res) => {
        res.status(400).json({ error: "Invalid email format" });
      });

      const response = await request(app).post("/api/auth/signup").send({
        email: "invalid-email",
        password: "short",
      });

      expect(response.status).toBe(400);
    });

    it("should return 409 if email already exists", async () => {
      mockSignUp.mockImplementation((req, res) => {
        res.status(409).json({ error: "Email already in use" });
      });

      const response = await request(app).post("/api/auth/signup").send({
        email: "existing@example.com",
        password: "Password123!",
      });

      expect(response.status).toBe(409);
    });

    it("should handle signup without optional fields", async () => {
      mockSignUp.mockImplementation((req, res) => {
        res.status(201).json({
          message: "User created",
          user: { id: "user-123", email: "test@example.com" },
        });
      });

      const response = await request(app).post("/api/auth/signup").send({
        email: "test@example.com",
        password: "Password123!",
      });

      expect(response.status).toBe(201);
    });
  });

  describe("POST /api/auth/login", () => {
    it("should call signIn controller", async () => {
      mockSignIn.mockImplementation((req, res) => {
        res.status(200).json({
          message: "Login successful",
          token: "jwt-token-123",
          user: { id: "user-123", email: "test@example.com" },
        });
      });

      const response = await request(app).post("/api/auth/login").send({
        email: "test@example.com",
        password: "Password123!",
      });

      expect(response.status).toBe(200);
      expect(mockSignIn).toHaveBeenCalled();
      expect(response.body).toHaveProperty("token");
    });

    it("should validate signIn data", async () => {
      mockSignIn.mockImplementation((req, res) => {
        res.status(200).json({ token: "jwt-token" });
      });

      await request(app).post("/api/auth/login").send({
        email: "test@example.com",
        password: "Password123!",
      });

      expect(mockValidateMiddleware).toHaveBeenCalled();
    });

    it("should return 400 for invalid credentials format", async () => {
      mockSignIn.mockImplementation((req, res) => {
        res.status(400).json({ error: "Invalid email format" });
      });

      const response = await request(app).post("/api/auth/login").send({
        email: "invalid-email",
        password: "",
      });

      expect(response.status).toBe(400);
    });

    it("should return 401 for incorrect password", async () => {
      mockSignIn.mockImplementation((req, res) => {
        res.status(401).json({ error: "Invalid credentials" });
      });

      const response = await request(app).post("/api/auth/login").send({
        email: "test@example.com",
        password: "WrongPassword",
      });

      expect(response.status).toBe(401);
    });

    it("should return 404 if user not found", async () => {
      mockSignIn.mockImplementation((req, res) => {
        res.status(404).json({ error: "User not found" });
      });

      const response = await request(app).post("/api/auth/login").send({
        email: "nonexistent@example.com",
        password: "Password123!",
      });

      expect(response.status).toBe(404);
    });
  });

  describe("POST /api/auth/logout", () => {
    it("should call logout controller", async () => {
      mockLogout.mockImplementation((req, res) => {
        res.status(200).json({ message: "Logout successful" });
      });

      const response = await request(app).post("/api/auth/logout");

      expect(response.status).toBe(200);
      expect(mockLogout).toHaveBeenCalled();
      expect(response.body).toEqual({ message: "Logout successful" });
    });

    it("should handle logout without authentication token", async () => {
      mockLogout.mockImplementation((req, res) => {
        res.status(200).json({ message: "Logout successful" });
      });

      const response = await request(app).post("/api/auth/logout");

      expect(response.status).toBe(200);
    });

    it("should handle logout with authentication token", async () => {
      mockLogout.mockImplementation((req, res) => {
        res.status(200).json({ message: "Logout successful" });
      });

      const response = await request(app)
        .post("/api/auth/logout")
        .set("Authorization", "Bearer fake-jwt-token");

      expect(response.status).toBe(200);
    });
  });

  describe("Multer configuration", () => {
    it("should create avatars directory on module load", () => {
      const fs = require("fs");
      expect(fs.mkdirSync).toHaveBeenCalled();
    });

    it("should configure diskStorage", () => {
      expect(mockDiskStorage).toHaveBeenCalled();
    });
  });

  describe("Route configuration", () => {
    it("should have POST /signup route", async () => {
      mockSignUp.mockImplementation((req, res) => {
        res.status(201).json({ message: "OK" });
      });

      const response = await request(app).post("/api/auth/signup").send({
        email: "test@example.com",
        password: "Password123!",
      });

      expect(response.status).not.toBe(404);
    });

    it("should have POST /login route", async () => {
      mockSignIn.mockImplementation((req, res) => {
        res.status(200).json({ message: "OK" });
      });

      const response = await request(app).post("/api/auth/login").send({
        email: "test@example.com",
        password: "Password123!",
      });

      expect(response.status).not.toBe(404);
    });

    it("should have POST /logout route", async () => {
      mockLogout.mockImplementation((req, res) => {
        res.status(200).json({ message: "OK" });
      });

      const response = await request(app).post("/api/auth/logout");

      expect(response.status).not.toBe(404);
    });
  });
});
