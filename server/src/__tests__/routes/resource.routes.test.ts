import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateResource = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllResources = jest.fn((req, res) => res.json({ resources: [] }));
const mockGetResourceById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateResource = jest.fn((req, res) => res.json({ updated: true }));
const mockDeleteResource = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  resourceSchema: {},
}));
jest.mock("@/controllers", () => ({
  createResource: mockCreateResource,
  getAllResources: mockGetAllResources,
  getResourceById: mockGetResourceById,
  updateResource: mockUpdateResource,
  deleteResource: mockDeleteResource,
}));

import resourceRouter from "@/routes/resource.routes";

const app = express();
app.use(express.json());
app.use("/api/resources", resourceRouter);

describe("resource.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/resources should call validate and createResource", async () => {
    const res = await request(app)
      .post("/api/resources")
      .send({ name: "Resource 1", description: "Resource description" });
    expect(mockCreateResource).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/resources should call getAllResources", async () => {
    const res = await request(app).get("/api/resources");
    expect(mockGetAllResources).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ resources: [] });
  });

  it("GET /api/resources/:id should call getResourceById", async () => {
    const res = await request(app).get("/api/resources/abc123");
    expect(mockGetResourceById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/resources/:id should call updateResource", async () => {
    const res = await request(app)
      .put("/api/resources/abc123")
      .send({ name: "Updated Resource" });
    expect(mockUpdateResource).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/resources/:id should call deleteResource", async () => {
    const res = await request(app).delete("/api/resources/abc123");
    expect(mockDeleteResource).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
