import express from "express";
import request from "supertest";

// Mock controllers
const mockCreateActivityLog = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllActivityLogs = jest.fn((req, res) =>
  res.json({ activityLogs: [] })
);
const mockGetActivityLogById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateActivityLog = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteActivityLog = jest.fn((req, res) =>
  res.json({ deleted: true })
);

jest.mock("@/controllers", () => ({
  createActivityLog: mockCreateActivityLog,
  getAllActivityLogs: mockGetAllActivityLogs,
  getActivityLogById: mockGetActivityLogById,
  updateActivityLog: mockUpdateActivityLog,
  deleteActivityLog: mockDeleteActivityLog,
}));

import activityLogRouter from "@/routes/activityLog.routes";

const app = express();
app.use(express.json());
app.use("/api/activity-logs", activityLogRouter);

describe("activityLog.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/activity-logs should call createActivityLog", async () => {
    const res = await request(app)
      .post("/api/activity-logs")
      .send({ userId: "user001", activityId: "activity001" });
    expect(mockCreateActivityLog).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/activity-logs should call getAllActivityLogs", async () => {
    const res = await request(app).get("/api/activity-logs");
    expect(mockGetAllActivityLogs).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ activityLogs: [] });
  });

  it("GET /api/activity-logs/:id should call getActivityLogById", async () => {
    const res = await request(app).get("/api/activity-logs/clv2abc123456xyz");
    expect(mockGetActivityLogById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "clv2abc123456xyz" });
  });

  it("PUT /api/activity-logs/:id should call updateActivityLog", async () => {
    const res = await request(app)
      .put("/api/activity-logs/clv2abc123456xyz")
      .send({ notes: "Updated notes" });
    expect(mockUpdateActivityLog).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/activity-logs/:id should call deleteActivityLog", async () => {
    const res = await request(app).delete(
      "/api/activity-logs/clv2abc123456xyz"
    );
    expect(mockDeleteActivityLog).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
