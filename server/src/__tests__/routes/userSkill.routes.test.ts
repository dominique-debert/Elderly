import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateUserSkill = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllUserSkills = jest.fn((req, res) =>
  res.json({ userSkills: [] })
);
const mockGetUserSkillById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateUserSkill = jest.fn((req, res) => res.json({ updated: true }));
const mockDeleteUserSkill = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  userSkillSchema: {},
}));
jest.mock("@/controllers", () => ({
  createUserSkill: mockCreateUserSkill,
  getAllUserSkills: mockGetAllUserSkills,
  getUserSkillById: mockGetUserSkillById,
  updateUserSkill: mockUpdateUserSkill,
  deleteUserSkill: mockDeleteUserSkill,
}));

import userSkillRouter from "@/routes/userSkill.routes";

const app = express();
app.use(express.json());
app.use("/api/user-skills", userSkillRouter);

describe("userSkill.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/user-skills should call validate and createUserSkill", async () => {
    const res = await request(app)
      .post("/api/user-skills")
      .send({ name: "Skill 1", level: "expert" });
    expect(mockCreateUserSkill).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/user-skills should call getAllUserSkills", async () => {
    const res = await request(app).get("/api/user-skills");
    expect(mockGetAllUserSkills).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ userSkills: [] });
  });

  it("GET /api/user-skills/:id should call getUserSkillById", async () => {
    const res = await request(app).get("/api/user-skills/abc123");
    expect(mockGetUserSkillById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/user-skills/:id should call updateUserSkill", async () => {
    const res = await request(app)
      .put("/api/user-skills/abc123")
      .send({ level: "beginner" });
    expect(mockUpdateUserSkill).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/user-skills/:id should call deleteUserSkill", async () => {
    const res = await request(app).delete("/api/user-skills/abc123");
    expect(mockDeleteUserSkill).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
