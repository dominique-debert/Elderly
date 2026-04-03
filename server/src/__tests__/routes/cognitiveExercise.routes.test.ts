import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateCognitiveExercise = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllCognitiveExercises = jest.fn((req, res) =>
  res.json({ exercises: [] })
);
const mockGetCognitiveExerciseById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateCognitiveExercise = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteCognitiveExercise = jest.fn((req, res) =>
  res.status(204).json({})
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  cognitiveExerciseSchema: {},
}));
jest.mock("@/controllers", () => ({
  createCognitiveExercise: mockCreateCognitiveExercise,
  getAllCognitiveExercises: mockGetAllCognitiveExercises,
  getCognitiveExerciseById: mockGetCognitiveExerciseById,
  updateCognitiveExercise: mockUpdateCognitiveExercise,
  deleteCognitiveExercise: mockDeleteCognitiveExercise,
}));

import cognitiveExerciseRouter from "@/routes/cognitiveExercise.routes";

const app = express();
app.use(express.json());
app.use("/api/cognitive-exercises", cognitiveExerciseRouter);

describe("cognitiveExercise.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/cognitive-exercises should call validate and createCognitiveExercise", async () => {
    const res = await request(app)
      .post("/api/cognitive-exercises")
      .send({ name: "Memory Game", description: "Improve memory" });
    expect(mockCreateCognitiveExercise).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/cognitive-exercises should call getAllCognitiveExercises", async () => {
    const res = await request(app).get("/api/cognitive-exercises");
    expect(mockGetAllCognitiveExercises).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ exercises: [] });
  });

  it("GET /api/cognitive-exercises/:id should call getCognitiveExerciseById", async () => {
    const res = await request(app).get("/api/cognitive-exercises/abc123");
    expect(mockGetCognitiveExerciseById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/cognitive-exercises/:id should call updateCognitiveExercise", async () => {
    const res = await request(app)
      .put("/api/cognitive-exercises/abc123")
      .send({ name: "Updated Exercise" });
    expect(mockUpdateCognitiveExercise).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/cognitive-exercises/:id should call deleteCognitiveExercise", async () => {
    const res = await request(app).delete("/api/cognitive-exercises/abc123");
    expect(mockDeleteCognitiveExercise).toHaveBeenCalled();
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});
