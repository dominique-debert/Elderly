import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateUserActivity = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllUserActivities = jest.fn((req, res) =>
  res.json({ userActivities: [] })
);
const mockGetUserActivityById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateUserActivity = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteUserActivity = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  userActivitySchema: {},
}));
jest.mock("@/controllers", () => ({
  createUserActivity: mockCreateUserActivity,
  getAllUserActivities: mockGetAllUserActivities,
  getUserActivityById: mockGetUserActivityById,
  updateUserActivity: mockUpdateUserActivity,
  deleteUserActivity: mockDeleteUserActivity,
}));

import userActivityRouter from "@/routes/userActivity.routes";

const app = express();
app.use(express.json());
app.use("/api/user-activities", userActivityRouter);

describe("userActivity.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/user-activities should call validate and createUserActivity", async () => {
    const res = await request(app)
      .post("/api/user-activities")
      .send({ type: "login", userId: "user1" });
    expect(mockCreateUserActivity).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/user-activities should call getAllUserActivities", async () => {
    const res = await request(app).get("/api/user-activities");
    expect(mockGetAllUserActivities).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ userActivities: [] });
  });

  it("GET /api/user-activities/:id should call getUserActivityById", async () => {
    const res = await request(app).get("/api/user-activities/abc123");
    expect(mockGetUserActivityById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/user-activities/:id should call updateUserActivity", async () => {
    const res = await request(app)
      .put("/api/user-activities/abc123")
      .send({ type: "logout" });
    expect(mockUpdateUserActivity).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/user-activities/:id should call deleteUserActivity", async () => {
    const res = await request(app).delete("/api/user-activities/abc123");
    expect(mockDeleteUserActivity).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
