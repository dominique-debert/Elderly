import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateHealthIndicator = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllHealthIndicators = jest.fn((req, res) =>
  res.json({ indicators: [] })
);
const mockGetHealthIndicatorById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateHealthIndicator = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteHealthIndicator = jest.fn((req, res) => res.status(204).end());

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  healthIndicatorSchema: {},
}));
jest.mock("@/controllers", () => ({
  createHealthIndicator: mockCreateHealthIndicator,
  getAllHealthIndicators: mockGetAllHealthIndicators,
  getHealthIndicatorById: mockGetHealthIndicatorById,
  updateHealthIndicator: mockUpdateHealthIndicator,
  deleteHealthIndicator: mockDeleteHealthIndicator,
}));

import healthIndicatorRouter from "@/routes/healthIndicator.routes";

const app = express();
app.use(express.json());
app.use("/api/health-indicators", healthIndicatorRouter);

describe("healthIndicator.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/health-indicators should call validate and createHealthIndicator", async () => {
    const res = await request(app)
      .post("/api/health-indicators")
      .send({ name: "Blood Pressure", value: 120 });
    expect(mockCreateHealthIndicator).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/health-indicators should call getAllHealthIndicators", async () => {
    const res = await request(app).get("/api/health-indicators");
    expect(mockGetAllHealthIndicators).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ indicators: [] });
  });

  it("GET /api/health-indicators/:id should call getHealthIndicatorById", async () => {
    const res = await request(app).get("/api/health-indicators/abc123");
    expect(mockGetHealthIndicatorById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/health-indicators/:id should call updateHealthIndicator", async () => {
    const res = await request(app)
      .put("/api/health-indicators/abc123")
      .send({ value: 130 });
    expect(mockUpdateHealthIndicator).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/health-indicators/:id should call deleteHealthIndicator", async () => {
    const res = await request(app).delete("/api/health-indicators/abc123");
    expect(mockDeleteHealthIndicator).toHaveBeenCalled();
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});
