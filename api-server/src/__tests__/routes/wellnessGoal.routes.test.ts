import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateWellnessGoal = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllWellnessGoals = jest.fn((req, res) =>
  res.json({ wellnessGoals: [] })
);
const mockGetWellnessGoalById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateWellnessGoal = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteWellnessGoal = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  wellnessGoalSchema: {},
}));
jest.mock("@/controllers", () => ({
  createWellnessGoal: mockCreateWellnessGoal,
  getAllWellnessGoals: mockGetAllWellnessGoals,
  getWellnessGoalById: mockGetWellnessGoalById,
  updateWellnessGoal: mockUpdateWellnessGoal,
  deleteWellnessGoal: mockDeleteWellnessGoal,
}));

import wellnessGoalRouter from "@/routes/wellnessGoal.routes";

const app = express();
app.use(express.json());
app.use("/api/wellness-goals", wellnessGoalRouter);

describe("wellnessGoal.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/wellness-goals should call validate and createWellnessGoal", async () => {
    const res = await request(app)
      .post("/api/wellness-goals")
      .send({ name: "Goal 1", description: "Wellness goal" });
    expect(mockCreateWellnessGoal).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/wellness-goals should call getAllWellnessGoals", async () => {
    const res = await request(app).get("/api/wellness-goals");
    expect(mockGetAllWellnessGoals).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ wellnessGoals: [] });
  });

  it("GET /api/wellness-goals/:id should call getWellnessGoalById", async () => {
    const res = await request(app).get("/api/wellness-goals/abc123");
    expect(mockGetWellnessGoalById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/wellness-goals/:id should call updateWellnessGoal", async () => {
    const res = await request(app)
      .put("/api/wellness-goals/abc123")
      .send({ name: "Updated Goal" });
    expect(mockUpdateWellnessGoal).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/wellness-goals/:id should call deleteWellnessGoal", async () => {
    const res = await request(app).delete("/api/wellness-goals/abc123");
    expect(mockDeleteWellnessGoal).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
