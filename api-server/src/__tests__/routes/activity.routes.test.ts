import express from "express";
import request from "supertest";

// Mock controllers and middleware
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateActivity = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllActivities = jest.fn((req, res) =>
  res.json({ activities: [] })
);
const mockGetActivityById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateActivity = jest.fn((req, res) => res.json({ updated: true }));
const mockDeleteActivity = jest.fn((req, res) => res.json({ deleted: true }));

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/controllers", () => ({
  createActivity: mockCreateActivity,
  getAllActivities: mockGetAllActivities,
  getActivityById: mockGetActivityById,
  updateActivity: mockUpdateActivity,
  deleteActivity: mockDeleteActivity,
}));
jest.mock("@/validators", () => ({
  activitySchema: {},
}));

import activityRouter from "@/routes/activity.routes";

const app = express();
app.use(express.json());
app.use("/api/activities", activityRouter);

describe("activity.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/activities should call createActivity", async () => {
    const res = await request(app)
      .post("/api/activities")
      .send({ name: "Yoga" });
    expect(mockCreateActivity).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/activities should call getAllActivities", async () => {
    const res = await request(app).get("/api/activities");
    expect(mockGetAllActivities).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ activities: [] });
  });

  it("GET /api/activities/:id should call getActivityById", async () => {
    const res = await request(app).get("/api/activities/abc123");
    expect(mockGetActivityById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/activities/:id should call updateActivity", async () => {
    const res = await request(app)
      .put("/api/activities/abc123")
      .send({ name: "Pilates" });
    expect(mockUpdateActivity).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/activities/:id should call deleteActivity", async () => {
    const res = await request(app).delete("/api/activities/abc123");
    expect(mockDeleteActivity).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
