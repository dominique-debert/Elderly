import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateExerciseProgram = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllExercisePrograms = jest.fn((req, res) =>
  res.json({ programs: [] })
);
const mockGetExerciseProgramById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateExerciseProgram = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteExerciseProgram = jest.fn((req, res) => res.status(204).end());

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  exerciseProgramSchema: {},
}));
jest.mock("@/controllers", () => ({
  getAllExercisePrograms: mockGetAllExercisePrograms,
  getExerciseProgramById: mockGetExerciseProgramById,
  createExerciseProgram: mockCreateExerciseProgram,
  updateExerciseProgram: mockUpdateExerciseProgram,
  deleteExerciseProgram: mockDeleteExerciseProgram,
}));

import exerciseProgramRouter from "@/routes/exerciseProgram.routes";

const app = express();
app.use(express.json());
app.use("/api/exercise-programs", exerciseProgramRouter);

describe("exerciseProgram.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/exercise-programs should call validate and createExerciseProgram", async () => {
    const res = await request(app)
      .post("/api/exercise-programs")
      .send({ name: "Cardio Program", description: "Cardio exercises" });
    expect(mockCreateExerciseProgram).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/exercise-programs should call getAllExercisePrograms", async () => {
    const res = await request(app).get("/api/exercise-programs");
    expect(mockGetAllExercisePrograms).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ programs: [] });
  });

  it("GET /api/exercise-programs/:id should call getExerciseProgramById", async () => {
    const res = await request(app).get("/api/exercise-programs/abc123");
    expect(mockGetExerciseProgramById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/exercise-programs/:id should call updateExerciseProgram", async () => {
    const res = await request(app)
      .put("/api/exercise-programs/abc123")
      .send({ name: "Updated Program" });
    expect(mockUpdateExerciseProgram).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/exercise-programs/:id should call deleteExerciseProgram", async () => {
    const res = await request(app).delete("/api/exercise-programs/abc123");
    expect(mockDeleteExerciseProgram).toHaveBeenCalled();
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});
