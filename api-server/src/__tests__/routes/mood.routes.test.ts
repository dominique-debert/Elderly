import request from "supertest";
import express, { Express } from "express";

// Mock des contrôleurs
const mockCreateMood = jest.fn();
const mockGetAllMoods = jest.fn();
const mockGetMoodById = jest.fn();
const mockUpdateMood = jest.fn();
const mockDeleteMood = jest.fn();

jest.mock("@/controllers", () => ({
  createMood: (req: any, res: any, next: any) => mockCreateMood(req, res, next),
  getAllMoods: (req: any, res: any, next: any) =>
    mockGetAllMoods(req, res, next),
  getMoodById: (req: any, res: any, next: any) =>
    mockGetMoodById(req, res, next),
  updateMood: (req: any, res: any, next: any) => mockUpdateMood(req, res, next),
  deleteMood: (req: any, res: any, next: any) => mockDeleteMood(req, res, next),
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
  moodSchema: { validate: jest.fn() },
}));

describe("Mood Routes", () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());

    // Import routes after mocks are set up
    const moodRoutes = require("@/routes/mood.routes").default;
    app.use("/api/moods", moodRoutes);
  });

  afterEach(() => {
    mockCreateMood.mockClear();
    mockGetAllMoods.mockClear();
    mockGetMoodById.mockClear();
    mockUpdateMood.mockClear();
    mockDeleteMood.mockClear();
    mockValidateMiddleware.mockClear();
  });

  describe("POST /api/moods", () => {
    it("should call createMood controller", async () => {
      mockCreateMood.mockImplementation((req, res) => {
        res.status(201).json({
          mood: {
            id: "mood-123",
            name: "Happy",
            icon: "😊",
            color: "#FFD700",
          },
        });
      });

      const response = await request(app).post("/api/moods").send({
        name: "Happy",
        icon: "😊",
        color: "#FFD700",
      });

      expect(response.status).toBe(201);
      expect(mockCreateMood).toHaveBeenCalled();
      expect(response.body).toHaveProperty("mood");
    });

    it("should validate mood data before creating", async () => {
      mockCreateMood.mockImplementation((req, res) => {
        res.status(201).json({ mood: {} });
      });

      await request(app).post("/api/moods").send({
        name: "Happy",
        icon: "😊",
      });

      expect(mockValidateMiddleware).toHaveBeenCalled();
    });

    it("should return 500 on server error", async () => {
      mockCreateMood.mockImplementation((req, res) => {
        res.status(500).json({ error: "Internal server error" });
      });

      const response = await request(app).post("/api/moods").send({
        name: "Happy",
      });

      expect(response.status).toBe(500);
    });

    it("should handle missing required fields", async () => {
      mockCreateMood.mockImplementation((req, res) => {
        res.status(400).json({ error: "Name is required" });
      });

      const response = await request(app).post("/api/moods").send({});

      expect(response.status).toBe(400);
    });
  });

  describe("GET /api/moods", () => {
    it("should call getAllMoods controller", async () => {
      mockGetAllMoods.mockImplementation((req, res) => {
        res.status(200).json({
          moods: [
            { id: "mood-1", name: "Happy", icon: "😊" },
            { id: "mood-2", name: "Sad", icon: "😢" },
          ],
        });
      });

      const response = await request(app).get("/api/moods");

      expect(response.status).toBe(200);
      expect(mockGetAllMoods).toHaveBeenCalled();
      expect(response.body).toHaveProperty("moods");
      expect(Array.isArray(response.body.moods)).toBe(true);
    });

    it("should return empty array when no moods exist", async () => {
      mockGetAllMoods.mockImplementation((req, res) => {
        res.status(200).json({ moods: [] });
      });

      const response = await request(app).get("/api/moods");

      expect(response.status).toBe(200);
      expect(response.body.moods).toEqual([]);
    });

    it("should return 500 on server error", async () => {
      mockGetAllMoods.mockImplementation((req, res) => {
        res.status(500).json({ error: "Database error" });
      });

      const response = await request(app).get("/api/moods");

      expect(response.status).toBe(500);
    });
  });

  describe("GET /api/moods/:id", () => {
    it("should call getMoodById controller", async () => {
      mockGetMoodById.mockImplementation((req, res) => {
        res.status(200).json({
          mood: {
            id: "mood-123",
            name: "Happy",
            icon: "😊",
            color: "#FFD700",
          },
        });
      });

      const response = await request(app).get("/api/moods/mood-123");

      expect(response.status).toBe(200);
      expect(mockGetMoodById).toHaveBeenCalled();
      expect(response.body).toHaveProperty("mood");
    });

    it("should return 404 when mood not found", async () => {
      mockGetMoodById.mockImplementation((req, res) => {
        res.status(404).json({ error: "Mood not found" });
      });

      const response = await request(app).get("/api/moods/non-existent-id");

      expect(response.status).toBe(404);
    });

    it("should pass id parameter to controller", async () => {
      mockGetMoodById.mockImplementation((req, res) => {
        res.status(200).json({
          mood: { id: req.params.id, name: "Happy" },
        });
      });

      const response = await request(app).get("/api/moods/mood-123");

      expect(response.body.mood.id).toBe("mood-123");
    });

    it("should return 500 on server error", async () => {
      mockGetMoodById.mockImplementation((req, res) => {
        res.status(500).json({ error: "Database error" });
      });

      const response = await request(app).get("/api/moods/mood-123");

      expect(response.status).toBe(500);
    });
  });

  describe("PUT /api/moods/:id", () => {
    it("should call updateMood controller", async () => {
      mockUpdateMood.mockImplementation((req, res) => {
        res.status(200).json({
          mood: {
            id: "mood-123",
            name: "Very Happy",
            icon: "😄",
            color: "#FFD700",
          },
        });
      });

      const response = await request(app).put("/api/moods/mood-123").send({
        name: "Very Happy",
        icon: "😄",
      });

      expect(response.status).toBe(200);
      expect(mockUpdateMood).toHaveBeenCalled();
      expect(response.body).toHaveProperty("mood");
    });

    it("should return 404 when mood not found", async () => {
      mockUpdateMood.mockImplementation((req, res) => {
        res.status(404).json({ error: "Mood not found" });
      });

      const response = await request(app)
        .put("/api/moods/non-existent-id")
        .send({
          name: "Updated",
        });

      expect(response.status).toBe(404);
    });

    it("should pass id parameter to controller", async () => {
      mockUpdateMood.mockImplementation((req, res) => {
        res.status(200).json({
          mood: { id: req.params.id, name: req.body.name },
        });
      });

      const response = await request(app).put("/api/moods/mood-123").send({
        name: "Updated Mood",
      });

      expect(response.body.mood.id).toBe("mood-123");
      expect(response.body.mood.name).toBe("Updated Mood");
    });

    it("should return 500 on server error", async () => {
      mockUpdateMood.mockImplementation((req, res) => {
        res.status(500).json({ error: "Update failed" });
      });

      const response = await request(app).put("/api/moods/mood-123").send({
        name: "Updated",
      });

      expect(response.status).toBe(500);
    });

    it("should handle partial updates", async () => {
      mockUpdateMood.mockImplementation((req, res) => {
        res.status(200).json({
          mood: { id: "mood-123", icon: "🎉" },
        });
      });

      const response = await request(app).put("/api/moods/mood-123").send({
        icon: "🎉",
      });

      expect(response.status).toBe(200);
      expect(response.body.mood.icon).toBe("🎉");
    });
  });

  describe("DELETE /api/moods/:id", () => {
    it("should call deleteMood controller", async () => {
      mockDeleteMood.mockImplementation((req, res) => {
        res.status(200).json({ message: "Mood deleted successfully" });
      });

      const response = await request(app).delete("/api/moods/mood-123");

      expect(response.status).toBe(200);
      expect(mockDeleteMood).toHaveBeenCalled();
    });

    it("should return 404 when mood not found", async () => {
      mockDeleteMood.mockImplementation((req, res) => {
        res.status(404).json({ error: "Mood not found" });
      });

      const response = await request(app).delete("/api/moods/non-existent-id");

      expect(response.status).toBe(404);
    });

    it("should pass id parameter to controller", async () => {
      mockDeleteMood.mockImplementation((req, res) => {
        res.status(200).json({
          message: `Mood ${req.params.id} deleted`,
        });
      });

      const response = await request(app).delete("/api/moods/mood-123");

      expect(response.body.message).toContain("mood-123");
    });

    it("should return 500 on server error", async () => {
      mockDeleteMood.mockImplementation((req, res) => {
        res.status(500).json({ error: "Delete failed" });
      });

      const response = await request(app).delete("/api/moods/mood-123");

      expect(response.status).toBe(500);
    });
  });

  describe("Route configuration", () => {
    it("should have all CRUD routes configured", async () => {
      mockCreateMood.mockImplementation((req, res) => res.status(201).json({}));
      mockGetAllMoods.mockImplementation((req, res) =>
        res.status(200).json({})
      );
      mockGetMoodById.mockImplementation((req, res) =>
        res.status(200).json({})
      );
      mockUpdateMood.mockImplementation((req, res) => res.status(200).json({}));
      mockDeleteMood.mockImplementation((req, res) => res.status(200).json({}));

      const postResponse = await request(app).post("/api/moods").send({});
      expect(postResponse.status).not.toBe(404);

      const getAllResponse = await request(app).get("/api/moods");
      expect(getAllResponse.status).not.toBe(404);

      const getByIdResponse = await request(app).get("/api/moods/123");
      expect(getByIdResponse.status).not.toBe(404);

      const putResponse = await request(app).put("/api/moods/123").send({});
      expect(putResponse.status).not.toBe(404);

      const deleteResponse = await request(app).delete("/api/moods/123");
      expect(deleteResponse.status).not.toBe(404);
    });

    it("should return Content-Type application/json", async () => {
      mockGetAllMoods.mockImplementation((req, res) => {
        res.status(200).json({ moods: [] });
      });

      const response = await request(app).get("/api/moods");

      expect(response.headers["content-type"]).toMatch(/application\/json/);
    });
  });
});
