import request from "supertest";
import express, { Express } from "express";

// Mock des contrôleurs
const mockCreateUserPreferences = jest.fn();
const mockGetUserPreferences = jest.fn();
const mockUpdateUserPreferences = jest.fn();
const mockDeleteUserPreferences = jest.fn();

jest.mock("@/controllers", () => ({
  createUserPreferences: (req: any, res: any, next: any) =>
    mockCreateUserPreferences(req, res, next),
  getUserPreferences: (req: any, res: any, next: any) =>
    mockGetUserPreferences(req, res, next),
  updateUserPreferences: (req: any, res: any, next: any) =>
    mockUpdateUserPreferences(req, res, next),
  deleteUserPreferences: (req: any, res: any, next: any) =>
    mockDeleteUserPreferences(req, res, next),
}));

// Mock du middleware de validation
const mockValidateMiddleware = jest.fn((req: any, res: any, next: any) =>
  next()
);
jest.mock("@/middlewares", () => ({
  validate: jest.fn(() => mockValidateMiddleware),
}));

// Mock du schéma de validation
jest.mock("@/validators", () => ({
  userPreferencesSchema: { validate: jest.fn() },
}));

describe("UserPreferences Routes", () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());

    // Import routes after mocks are set up
    const userPreferencesRoutes =
      require("@/routes/userPreferences.routes").default;
    app.use("/api/user-preferences", userPreferencesRoutes);
  });

  afterEach(() => {
    mockCreateUserPreferences.mockClear();
    mockGetUserPreferences.mockClear();
    mockUpdateUserPreferences.mockClear();
    mockDeleteUserPreferences.mockClear();
    mockValidateMiddleware.mockClear();
  });

  describe("POST /api/user-preferences", () => {
    it("should call createUserPreferences controller", async () => {
      mockCreateUserPreferences.mockImplementation((req, res) => {
        res.status(201).json({
          userPreferences: {
            id: "pref-123",
            userId: "user-123",
            theme: "dark",
            language: "fr",
          },
        });
      });

      const response = await request(app).post("/api/user-preferences").send({
        userId: "user-123",
        theme: "dark",
        language: "fr",
      });

      expect(response.status).toBe(201);
      expect(mockCreateUserPreferences).toHaveBeenCalled();
      expect(response.body).toHaveProperty("userPreferences");
    });

    it("should validate preferences data before creating", async () => {
      mockCreateUserPreferences.mockImplementation((req, res) => {
        res.status(201).json({ userPreferences: {} });
      });

      await request(app).post("/api/user-preferences").send({
        userId: "user-123",
      });

      expect(mockValidateMiddleware).toHaveBeenCalled();
    });

    it("should return 500 on server error", async () => {
      mockCreateUserPreferences.mockImplementation((req, res) => {
        res.status(500).json({ error: "Internal server error" });
      });

      const response = await request(app)
        .post("/api/user-preferences")
        .send({});

      expect(response.status).toBe(500);
    });
  });

  describe("GET /api/user-preferences/:userId", () => {
    it("should call getUserPreferences controller", async () => {
      mockGetUserPreferences.mockImplementation((req, res) => {
        res.status(200).json({
          userPreferences: {
            id: "pref-123",
            userId: "user-123",
            theme: "dark",
            language: "fr",
          },
        });
      });

      const response = await request(app).get("/api/user-preferences/user-123");

      expect(response.status).toBe(200);
      expect(mockGetUserPreferences).toHaveBeenCalled();
      expect(response.body).toHaveProperty("userPreferences");
    });

    it("should return 404 when preferences not found", async () => {
      mockGetUserPreferences.mockImplementation((req, res) => {
        res.status(404).json({ error: "Preferences not found" });
      });

      const response = await request(app).get(
        "/api/user-preferences/non-existent"
      );

      expect(response.status).toBe(404);
    });

    it("should pass userId parameter to controller", async () => {
      mockGetUserPreferences.mockImplementation((req, res) => {
        res.status(200).json({
          userPreferences: { userId: req.params.userId },
        });
      });

      const response = await request(app).get("/api/user-preferences/user-123");

      expect(response.body.userPreferences.userId).toBe("user-123");
    });

    it("should return 500 on server error", async () => {
      mockGetUserPreferences.mockImplementation((req, res) => {
        res.status(500).json({ error: "Database error" });
      });

      const response = await request(app).get("/api/user-preferences/user-123");

      expect(response.status).toBe(500);
    });
  });

  describe("PUT /api/user-preferences/:userId", () => {
    it("should call updateUserPreferences controller", async () => {
      mockUpdateUserPreferences.mockImplementation((req, res) => {
        res.status(200).json({
          userPreferences: {
            id: "pref-123",
            userId: "user-123",
            theme: "light",
            language: "en",
          },
        });
      });

      const response = await request(app)
        .put("/api/user-preferences/user-123")
        .send({
          theme: "light",
          language: "en",
        });

      expect(response.status).toBe(200);
      expect(mockUpdateUserPreferences).toHaveBeenCalled();
      expect(response.body).toHaveProperty("userPreferences");
    });

    it("should return 404 when preferences not found", async () => {
      mockUpdateUserPreferences.mockImplementation((req, res) => {
        res.status(404).json({ error: "Preferences not found" });
      });

      const response = await request(app)
        .put("/api/user-preferences/non-existent")
        .send({ theme: "light" });

      expect(response.status).toBe(404);
    });

    it("should handle partial updates", async () => {
      mockUpdateUserPreferences.mockImplementation((req, res) => {
        res.status(200).json({
          userPreferences: { id: "pref-123", theme: "light" },
        });
      });

      const response = await request(app)
        .put("/api/user-preferences/user-123")
        .send({ theme: "light" });

      expect(response.status).toBe(200);
      expect(response.body.userPreferences.theme).toBe("light");
    });

    it("should return 500 on server error", async () => {
      mockUpdateUserPreferences.mockImplementation((req, res) => {
        res.status(500).json({ error: "Update failed" });
      });

      const response = await request(app)
        .put("/api/user-preferences/user-123")
        .send({ theme: "light" });

      expect(response.status).toBe(500);
    });
  });

  describe("DELETE /api/user-preferences/:userId", () => {
    it("should call deleteUserPreferences controller", async () => {
      mockDeleteUserPreferences.mockImplementation((req, res) => {
        res.status(200).json({ message: "Preferences deleted successfully" });
      });

      const response = await request(app).delete(
        "/api/user-preferences/user-123"
      );

      expect(response.status).toBe(200);
      expect(mockDeleteUserPreferences).toHaveBeenCalled();
    });

    it("should return 404 when preferences not found", async () => {
      mockDeleteUserPreferences.mockImplementation((req, res) => {
        res.status(404).json({ error: "Preferences not found" });
      });

      const response = await request(app).delete(
        "/api/user-preferences/non-existent"
      );

      expect(response.status).toBe(404);
    });

    it("should pass userId parameter to controller", async () => {
      mockDeleteUserPreferences.mockImplementation((req, res) => {
        res.status(200).json({
          message: `Preferences for ${req.params.userId} deleted`,
        });
      });

      const response = await request(app).delete(
        "/api/user-preferences/user-123"
      );

      expect(response.body.message).toContain("user-123");
    });

    it("should return 500 on server error", async () => {
      mockDeleteUserPreferences.mockImplementation((req, res) => {
        res.status(500).json({ error: "Delete failed" });
      });

      const response = await request(app).delete(
        "/api/user-preferences/user-123"
      );

      expect(response.status).toBe(500);
    });
  });

  describe("Route configuration", () => {
    it("should have all CRUD routes configured", async () => {
      mockCreateUserPreferences.mockImplementation((req, res) =>
        res.status(201).json({})
      );
      mockGetUserPreferences.mockImplementation((req, res) =>
        res.status(200).json({})
      );
      mockUpdateUserPreferences.mockImplementation((req, res) =>
        res.status(200).json({})
      );
      mockDeleteUserPreferences.mockImplementation((req, res) =>
        res.status(200).json({})
      );

      const postResponse = await request(app)
        .post("/api/user-preferences")
        .send({});
      expect(postResponse.status).not.toBe(404);

      const getResponse = await request(app).get(
        "/api/user-preferences/user-123"
      );
      expect(getResponse.status).not.toBe(404);

      const putResponse = await request(app)
        .put("/api/user-preferences/user-123")
        .send({});
      expect(putResponse.status).not.toBe(404);

      const deleteResponse = await request(app).delete(
        "/api/user-preferences/user-123"
      );
      expect(deleteResponse.status).not.toBe(404);
    });

    it("should return Content-Type application/json", async () => {
      mockGetUserPreferences.mockImplementation((req, res) => {
        res.status(200).json({ userPreferences: {} });
      });

      const response = await request(app).get("/api/user-preferences/user-123");

      expect(response.headers["content-type"]).toMatch(/application\/json/);
    });
  });
});
