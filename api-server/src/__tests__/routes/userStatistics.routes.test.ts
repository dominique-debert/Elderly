import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateUserStatistics = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllUserStatistics = jest.fn((req, res) =>
  res.json({ userStatistics: [] })
);
const mockGetUserStatisticsById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateUserStatistics = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteUserStatistics = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  userStatisticsSchema: {},
}));
jest.mock("@/controllers", () => ({
  createUserStatistics: mockCreateUserStatistics,
  getAllUserStatistics: mockGetAllUserStatistics,
  getUserStatisticsById: mockGetUserStatisticsById,
  updateUserStatistics: mockUpdateUserStatistics,
  deleteUserStatistics: mockDeleteUserStatistics,
}));

import userStatisticsRouter from "@/routes/userStatistics.routes";

const app = express();
app.use(express.json());
app.use("/api/user-statistics", userStatisticsRouter);

describe("userStatistics.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/user-statistics should call validate and createUserStatistics", async () => {
    const res = await request(app)
      .post("/api/user-statistics")
      .send({ stat: "login_count", value: 10 });
    expect(mockCreateUserStatistics).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/user-statistics should call getAllUserStatistics", async () => {
    const res = await request(app).get("/api/user-statistics");
    expect(mockGetAllUserStatistics).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ userStatistics: [] });
  });

  it("GET /api/user-statistics/:id should call getUserStatisticsById", async () => {
    const res = await request(app).get("/api/user-statistics/abc123");
    expect(mockGetUserStatisticsById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/user-statistics/:id should call updateUserStatistics", async () => {
    const res = await request(app)
      .put("/api/user-statistics/abc123")
      .send({ value: 20 });
    expect(mockUpdateUserStatistics).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/user-statistics/:id should call deleteUserStatistics", async () => {
    const res = await request(app).delete("/api/user-statistics/abc123");
    expect(mockDeleteUserStatistics).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
