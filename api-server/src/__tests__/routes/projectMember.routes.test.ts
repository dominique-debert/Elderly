import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateProjectMember = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllProjectMembers = jest.fn((req, res) =>
  res.json({ members: [] })
);
const mockGetProjectMemberById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateProjectMember = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteProjectMember = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  projectMemberSchema: {},
}));
jest.mock("@/controllers", () => ({
  createProjectMember: mockCreateProjectMember,
  getAllProjectMembers: mockGetAllProjectMembers,
  getProjectMemberById: mockGetProjectMemberById,
  updateProjectMember: mockUpdateProjectMember,
  deleteProjectMember: mockDeleteProjectMember,
}));

import projectMemberRouter from "@/routes/projectMember.routes";

const app = express();
app.use(express.json());
app.use("/api/project-members", projectMemberRouter);

describe("projectMember.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/project-members should call validate and createProjectMember", async () => {
    const res = await request(app)
      .post("/api/project-members")
      .send({ name: "John Doe", role: "Developer" });
    expect(mockCreateProjectMember).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/project-members should call getAllProjectMembers", async () => {
    const res = await request(app).get("/api/project-members");
    expect(mockGetAllProjectMembers).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ members: [] });
  });

  it("GET /api/project-members/:id should call getProjectMemberById", async () => {
    const res = await request(app).get("/api/project-members/abc123");
    expect(mockGetProjectMemberById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/project-members/:id should call updateProjectMember", async () => {
    const res = await request(app)
      .put("/api/project-members/abc123")
      .send({ role: "Lead" });
    expect(mockUpdateProjectMember).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/project-members/:id should call deleteProjectMember", async () => {
    const res = await request(app).delete("/api/project-members/abc123");
    expect(mockDeleteProjectMember).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
