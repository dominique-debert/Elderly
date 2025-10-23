import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateServiceCompleted = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllServiceCompleted = jest.fn((req, res) =>
  res.json({ serviceCompleted: [] })
);
const mockGetServiceCompletedById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateServiceCompleted = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteServiceCompleted = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  serviceCompletedSchema: {},
}));
jest.mock("@/controllers", () => ({
  createServiceCompleted: mockCreateServiceCompleted,
  getAllServiceCompleted: mockGetAllServiceCompleted,
  getServiceCompletedById: mockGetServiceCompletedById,
  updateServiceCompleted: mockUpdateServiceCompleted,
  deleteServiceCompleted: mockDeleteServiceCompleted,
}));

import serviceCompletedRouter from "@/routes/serviceCompleted.routes";

const app = express();
app.use(express.json());
app.use("/api/service-completed", serviceCompletedRouter);

describe("serviceCompleted.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/service-completed should call validate and createServiceCompleted", async () => {
    const res = await request(app)
      .post("/api/service-completed")
      .send({ name: "Service 1", completed: true });
    expect(mockCreateServiceCompleted).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/service-completed should call getAllServiceCompleted", async () => {
    const res = await request(app).get("/api/service-completed");
    expect(mockGetAllServiceCompleted).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ serviceCompleted: [] });
  });

  it("GET /api/service-completed/:id should call getServiceCompletedById", async () => {
    const res = await request(app).get("/api/service-completed/abc123");
    expect(mockGetServiceCompletedById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/service-completed/:id should call updateServiceCompleted", async () => {
    const res = await request(app)
      .put("/api/service-completed/abc123")
      .send({ completed: false });
    expect(mockUpdateServiceCompleted).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/service-completed/:id should call deleteServiceCompleted", async () => {
    const res = await request(app).delete("/api/service-completed/abc123");
    expect(mockDeleteServiceCompleted).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
