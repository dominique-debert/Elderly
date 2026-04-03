import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateUserBadge = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllUserBadges = jest.fn((req, res) =>
  res.json({ userBadges: [] })
);
const mockGetUserBadgeById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateUserBadge = jest.fn((req, res) => res.json({ updated: true }));
const mockDeleteUserBadge = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  userBadgeSchema: {},
}));
jest.mock("@/controllers", () => ({
  createUserBadge: mockCreateUserBadge,
  getAllUserBadges: mockGetAllUserBadges,
  getUserBadgeById: mockGetUserBadgeById,
  updateUserBadge: mockUpdateUserBadge,
  deleteUserBadge: mockDeleteUserBadge,
}));

import userBadgeRouter from "@/routes/userBadge.routes";

const app = express();
app.use(express.json());
app.use("/api/user-badges", userBadgeRouter);

describe("userBadge.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/user-badges should call validate and createUserBadge", async () => {
    const res = await request(app)
      .post("/api/user-badges")
      .send({ name: "Badge 1", description: "User badge" });
    expect(mockCreateUserBadge).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/user-badges should call getAllUserBadges", async () => {
    const res = await request(app).get("/api/user-badges");
    expect(mockGetAllUserBadges).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ userBadges: [] });
  });

  it("GET /api/user-badges/:id should call getUserBadgeById", async () => {
    const res = await request(app).get("/api/user-badges/abc123");
    expect(mockGetUserBadgeById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/user-badges/:id should call updateUserBadge", async () => {
    const res = await request(app)
      .put("/api/user-badges/abc123")
      .send({ name: "Updated Badge" });
    expect(mockUpdateUserBadge).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/user-badges/:id should call deleteUserBadge", async () => {
    const res = await request(app).delete("/api/user-badges/abc123");
    expect(mockDeleteUserBadge).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
