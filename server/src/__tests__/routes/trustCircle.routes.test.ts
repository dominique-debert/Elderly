import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateTrustCircle = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllTrustCircle = jest.fn((req, res) =>
  res.json({ trustCircle: [] })
);
const mockGetTrustCircleById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateTrustCircle = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteTrustCircle = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  trustCircleSchema: {},
}));
jest.mock("@/controllers", () => ({
  createTrustCircle: mockCreateTrustCircle,
  getAllTrustCircle: mockGetAllTrustCircle,
  getTrustCircleById: mockGetTrustCircleById,
  updateTrustCircle: mockUpdateTrustCircle,
  deleteTrustCircle: mockDeleteTrustCircle,
}));

import trustCircleRouter from "@/routes/trustCircle.routes";

const app = express();
app.use(express.json());
app.use("/api/trust-circle", trustCircleRouter);

describe("trustCircle.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/trust-circle should call validate and createTrustCircle", async () => {
    const res = await request(app)
      .post("/api/trust-circle")
      .send({ name: "Circle 1", members: [] });
    expect(mockCreateTrustCircle).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/trust-circle should call getAllTrustCircle", async () => {
    const res = await request(app).get("/api/trust-circle");
    expect(mockGetAllTrustCircle).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ trustCircle: [] });
  });

  it("GET /api/trust-circle/:id should call getTrustCircleById", async () => {
    const res = await request(app).get("/api/trust-circle/abc123");
    expect(mockGetTrustCircleById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/trust-circle/:id should call updateTrustCircle", async () => {
    const res = await request(app)
      .put("/api/trust-circle/abc123")
      .send({ name: "Updated Circle" });
    expect(mockUpdateTrustCircle).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/trust-circle/:id should call deleteTrustCircle", async () => {
    const res = await request(app).delete("/api/trust-circle/abc123");
    expect(mockDeleteTrustCircle).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
