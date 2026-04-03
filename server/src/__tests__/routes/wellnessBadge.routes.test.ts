import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateWellnessBadge = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllWellnessBadges = jest.fn((req, res) =>
  res.json({ wellnessBadges: [] })
);
const mockGetWellnessBadgeById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateWellnessBadge = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteWellnessBadge = jest.fn((req, res) => res.status(204).send());

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  wellnessBadgeSchema: {},
}));
jest.mock("@/controllers", () => ({
  createWellnessBadge: mockCreateWellnessBadge,
  getAllWellnessBadges: mockGetAllWellnessBadges,
  getWellnessBadgeById: mockGetWellnessBadgeById,
  updateWellnessBadge: mockUpdateWellnessBadge,
  deleteWellnessBadge: mockDeleteWellnessBadge,
}));

import wellnessBadgeRouter from "@/routes/wellnessBadge.routes";

const app = express();
app.use(express.json());
app.use("/api/wellness-badges", wellnessBadgeRouter);

describe("wellnessBadge.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/wellness-badges should call validate and createWellnessBadge", async () => {
    const res = await request(app)
      .post("/api/wellness-badges")
      .send({ name: "Badge 1", description: "Wellness badge" });
    expect(mockCreateWellnessBadge).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/wellness-badges should call getAllWellnessBadges", async () => {
    const res = await request(app).get("/api/wellness-badges");
    expect(mockGetAllWellnessBadges).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ wellnessBadges: [] });
  });

  it("GET /api/wellness-badges/:id should call getWellnessBadgeById", async () => {
    const res = await request(app).get("/api/wellness-badges/abc123");
    expect(mockGetWellnessBadgeById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/wellness-badges/:id should call updateWellnessBadge", async () => {
    const res = await request(app)
      .put("/api/wellness-badges/abc123")
      .send({ name: "Updated Badge" });
    expect(mockUpdateWellnessBadge).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/wellness-badges/:id should call deleteWellnessBadge", async () => {
    const res = await request(app).delete("/api/wellness-badges/abc123");
    expect(mockDeleteWellnessBadge).toHaveBeenCalled();
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});
