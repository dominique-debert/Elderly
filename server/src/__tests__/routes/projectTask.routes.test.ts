import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateProjectTask = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllProjectTasks = jest.fn((req, res) => res.json({ tasks: [] }));
const mockGetProjectTaskById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateProjectTask = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteProjectTask = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  projectTaskSchema: {},
}));
jest.mock("@/controllers", () => ({
  createProjectTask: mockCreateProjectTask,
  getAllProjectTasks: mockGetAllProjectTasks,
  getProjectTaskById: mockGetProjectTaskById,
  updateProjectTask: mockUpdateProjectTask,
  deleteProjectTask: mockDeleteProjectTask,
}));

import projectTaskRouter from "@/routes/projectTask.routes";

const app = express();
app.use(express.json());
app.use("/api/project-tasks", projectTaskRouter);

describe("projectTask.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/project-tasks should call validate and createProjectTask", async () => {
    const res = await request(app)
      .post("/api/project-tasks")
      .send({ name: "Task 1", description: "Project task" });
    expect(mockCreateProjectTask).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/project-tasks should call getAllProjectTasks", async () => {
    const res = await request(app).get("/api/project-tasks");
    expect(mockGetAllProjectTasks).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ tasks: [] });
  });

  it("GET /api/project-tasks/:id should call getProjectTaskById", async () => {
    const res = await request(app).get("/api/project-tasks/abc123");
    expect(mockGetProjectTaskById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/project-tasks/:id should call updateProjectTask", async () => {
    const res = await request(app)
      .put("/api/project-tasks/abc123")
      .send({ name: "Updated Task" });
    expect(mockUpdateProjectTask).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/project-tasks/:id should call deleteProjectTask", async () => {
    const res = await request(app).delete("/api/project-tasks/abc123");
    expect(mockDeleteProjectTask).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
