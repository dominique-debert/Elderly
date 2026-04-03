import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateServiceRating = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllServiceRating = jest.fn((req, res) =>
  res.json({ serviceRating: [] })
);
const mockGetServiceRatingById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateServiceRating = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteServiceRating = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  serviceRatingSchema: {},
}));
jest.mock("@/controllers", () => ({
  createServiceRating: mockCreateServiceRating,
  getAllServiceRating: mockGetAllServiceRating,
  getServiceRatingById: mockGetServiceRatingById,
  updateServiceRating: mockUpdateServiceRating,
  deleteServiceRating: mockDeleteServiceRating,
}));

import serviceRatingRouter from "@/routes/serviceRating.routes";

const app = express();
app.use(express.json());
app.use("/api/service-rating", serviceRatingRouter);

describe("serviceRating.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/service-rating should call validate and createServiceRating", async () => {
    const res = await request(app)
      .post("/api/service-rating")
      .send({ rating: 5, comment: "Excellent service" });
    expect(mockCreateServiceRating).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/service-rating should call getAllServiceRating", async () => {
    const res = await request(app).get("/api/service-rating");
    expect(mockGetAllServiceRating).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ serviceRating: [] });
  });

  it("GET /api/service-rating/:id should call getServiceRatingById", async () => {
    const res = await request(app).get("/api/service-rating/abc123");
    expect(mockGetServiceRatingById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/service-rating/:id should call updateServiceRating", async () => {
    const res = await request(app)
      .put("/api/service-rating/abc123")
      .send({ rating: 4 });
    expect(mockUpdateServiceRating).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/service-rating/:id should call deleteServiceRating", async () => {
    const res = await request(app).delete("/api/service-rating/abc123");
    expect(mockDeleteServiceRating).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
