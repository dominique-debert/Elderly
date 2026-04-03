import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateCollaborativeProject = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllCollaborativeProjects = jest.fn((req, res) =>
  res.json({ projects: [] })
);
const mockGetCollaborativeProjectById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateCollaborativeProject = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteCollaborativeProject = jest.fn((req, res) =>
  res.status(204).end()
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  collaborativeProjectSchema: {},
}));
jest.mock("@/controllers", () => ({
  createCollaborativeProject: mockCreateCollaborativeProject,
  getAllCollaborativeProjects: mockGetAllCollaborativeProjects,
  getCollaborativeProjectById: mockGetCollaborativeProjectById,
  updateCollaborativeProject: mockUpdateCollaborativeProject,
  deleteCollaborativeProject: mockDeleteCollaborativeProject,
}));

import collaborativeProjectRouter from "@/routes/collaborativeProject.routes";

const app = express();
app.use(express.json());
app.use("/api/collaborative-projects", collaborativeProjectRouter);

describe("collaborativeProject.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/collaborative-projects should call validate and createCollaborativeProject", async () => {
    const res = await request(app)
      .post("/api/collaborative-projects")
      .send({ name: "Project X", description: "Collab project" });
    expect(mockCreateCollaborativeProject).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/collaborative-projects should call getAllCollaborativeProjects", async () => {
    const res = await request(app).get("/api/collaborative-projects");
    expect(mockGetAllCollaborativeProjects).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ projects: [] });
  });

  it("GET /api/collaborative-projects/:id should call getCollaborativeProjectById", async () => {
    const res = await request(app).get("/api/collaborative-projects/abc123");
    expect(mockGetCollaborativeProjectById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/collaborative-projects/:id should call updateCollaborativeProject", async () => {
    const res = await request(app)
      .put("/api/collaborative-projects/abc123")
      .send({ name: "Updated Project" });
    expect(mockUpdateCollaborativeProject).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/collaborative-projects/:id should call deleteCollaborativeProject", async () => {
    const res = await request(app).delete("/api/collaborative-projects/abc123");
    expect(mockDeleteCollaborativeProject).toHaveBeenCalled();
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});
