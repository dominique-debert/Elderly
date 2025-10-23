import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateBadge = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllBadges = jest.fn((req, res) => res.json({ badges: [] }));
const mockGetBadgeById = jest.fn((req, res) => res.json({ id: req.params.id }));
const mockUpdateBadge = jest.fn((req, res) => res.json({ updated: true }));
const mockDeleteBadge = jest.fn((req, res) => res.json({ deleted: true }));

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  badgeSchema: {},
}));
jest.mock("@/controllers", () => ({
  createBadge: mockCreateBadge,
  getAllBadges: mockGetAllBadges,
  getBadgeById: mockGetBadgeById,
  updateBadge: mockUpdateBadge,
  deleteBadge: mockDeleteBadge,
}));

import badgeRouter from "@/routes/badge.routes";

const app = express();
app.use(express.json());
app.use("/api/badges", badgeRouter);

describe("badge.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/badges should call validate and createBadge", async () => {
    const res = await request(app)
      .post("/api/badges")
      .send({
        name: "Super Badge",
        description: "Desc",
        icon: "icon.png",
        category: "Gold",
        level: 1,
      });
    expect(mockCreateBadge).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/badges should call getAllBadges", async () => {
    const res = await request(app).get("/api/badges");
    expect(mockGetAllBadges).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ badges: [] });
  });

  it("GET /api/badges/:id should call getBadgeById", async () => {
    const res = await request(app).get("/api/badges/abc123");
    expect(mockGetBadgeById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/badges/:id should call updateBadge", async () => {
    const res = await request(app)
      .put("/api/badges/abc123")
      .send({ name: "Updated Badge", level: 2 });
    expect(mockUpdateBadge).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/badges/:id should call deleteBadge", async () => {
    const res = await request(app).delete("/api/badges/abc123");
    expect(mockDeleteBadge).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
