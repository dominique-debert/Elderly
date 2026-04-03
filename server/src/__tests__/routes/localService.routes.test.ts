import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateLocalService = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllLocalServices = jest.fn((req, res) =>
  res.json({ services: [] })
);
const mockGetLocalServiceById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateLocalService = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteLocalService = jest.fn((req, res) => res.status(204).end());

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  localServiceSchema: {},
}));
jest.mock("@/controllers", () => ({
  createLocalService: mockCreateLocalService,
  getAllLocalServices: mockGetAllLocalServices,
  getLocalServiceById: mockGetLocalServiceById,
  updateLocalService: mockUpdateLocalService,
  deleteLocalService: mockDeleteLocalService,
}));

import localServiceRouter from "@/routes/localService.routes";

const app = express();
app.use(express.json());
app.use("/api/local-services", localServiceRouter);

describe("localService.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/local-services should call validate and createLocalService", async () => {
    const res = await request(app)
      .post("/api/local-services")
      .send({ name: "Service Local", description: "Description" });
    expect(mockCreateLocalService).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/local-services should call getAllLocalServices", async () => {
    const res = await request(app).get("/api/local-services");
    expect(mockGetAllLocalServices).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ services: [] });
  });

  it("GET /api/local-services/:id should call getLocalServiceById", async () => {
    const res = await request(app).get("/api/local-services/abc123");
    expect(mockGetLocalServiceById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/local-services/:id should call updateLocalService", async () => {
    const res = await request(app)
      .put("/api/local-services/abc123")
      .send({ name: "Updated Service" });
    expect(mockUpdateLocalService).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/local-services/:id should call deleteLocalService", async () => {
    const res = await request(app).delete("/api/local-services/abc123");
    expect(mockDeleteLocalService).toHaveBeenCalled();
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});
