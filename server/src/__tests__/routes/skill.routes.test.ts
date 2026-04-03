import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateSkill = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllSkills = jest.fn((req, res) => res.json({ skills: [] }));
const mockGetSkillById = jest.fn((req, res) => res.json({ id: req.params.id }));
const mockUpdateSkill = jest.fn((req, res) => res.json({ updated: true }));
const mockDeleteSkill = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  skillSchema: {},
}));
jest.mock("@/controllers", () => ({
  createSkill: mockCreateSkill,
  getAllSkills: mockGetAllSkills,
  getSkillById: mockGetSkillById,
  updateSkill: mockUpdateSkill,
  deleteSkill: mockDeleteSkill,
}));

import skillRouter from "@/routes/skill.routes";

const app = express();
app.use(express.json());
app.use("/api/skills", skillRouter);

describe("skill.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/skills should call validate and createSkill", async () => {
    const res = await request(app)
      .post("/api/skills")
      .send({ name: "Skill 1", description: "Skill description" });
    expect(mockCreateSkill).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/skills should call getAllSkills", async () => {
    const res = await request(app).get("/api/skills");
    expect(mockGetAllSkills).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ skills: [] });
  });

  it("GET /api/skills/:id should call getSkillById", async () => {
    const res = await request(app).get("/api/skills/abc123");
    expect(mockGetSkillById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/skills/:id should call updateSkill", async () => {
    const res = await request(app)
      .put("/api/skills/abc123")
      .send({ name: "Updated Skill" });
    expect(mockUpdateSkill).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/skills/:id should call deleteSkill", async () => {
    const res = await request(app).delete("/api/skills/abc123");
    expect(mockDeleteSkill).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
