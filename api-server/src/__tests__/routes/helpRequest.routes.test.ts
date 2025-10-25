import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateHelpRequest = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllHelpRequests = jest.fn((req, res) =>
  res.json({ helpRequests: [] })
);
const mockGetHelpRequestById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateHelpRequest = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteHelpRequest = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  helpRequestSchema: {},
}));
jest.mock("@/controllers", () => ({
  createHelpRequest: mockCreateHelpRequest,
  getAllHelpRequests: mockGetAllHelpRequests,
  getHelpRequestById: mockGetHelpRequestById,
  updateHelpRequest: mockUpdateHelpRequest,
  deleteHelpRequest: mockDeleteHelpRequest,
}));

import helpRequestRouter from "@/routes/helpRequest.routes";

const app = express();
app.use(express.json());
app.use("/api/help-requests", helpRequestRouter);

describe("helpRequest.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/help-requests should call validate and createHelpRequest", async () => {
    const res = await request(app)
      .post("/api/help-requests")
      .send({ name: "Demande d'aide", description: "Besoin d'aide" });
    expect(mockCreateHelpRequest).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/help-requests should call getAllHelpRequests", async () => {
    const res = await request(app).get("/api/help-requests");
    expect(mockGetAllHelpRequests).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ helpRequests: [] });
  });

  it("GET /api/help-requests/:id should call getHelpRequestById", async () => {
    const res = await request(app).get("/api/help-requests/abc123");
    expect(mockGetHelpRequestById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/help-requests/:id should call updateHelpRequest", async () => {
    const res = await request(app)
      .put("/api/help-requests/abc123")
      .send({ name: "Updated Request" });
    expect(mockUpdateHelpRequest).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/help-requests/:id should call deleteHelpRequest", async () => {
    const res = await request(app).delete("/api/help-requests/abc123");
    expect(mockDeleteHelpRequest).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
