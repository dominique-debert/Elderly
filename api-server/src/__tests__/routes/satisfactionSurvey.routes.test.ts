import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateSatisfactionSurvey = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllSatisfactionSurveys = jest.fn((req, res) =>
  res.json({ satisfactionSurveys: [] })
);
const mockGetSatisfactionSurveyById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateSatisfactionSurvey = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteSatisfactionSurvey = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  satisfactionSurveySchema: {},
}));
jest.mock("@/controllers", () => ({
  createSatisfactionSurvey: mockCreateSatisfactionSurvey,
  getAllSatisfactionSurveys: mockGetAllSatisfactionSurveys,
  getSatisfactionSurveyById: mockGetSatisfactionSurveyById,
  updateSatisfactionSurvey: mockUpdateSatisfactionSurvey,
  deleteSatisfactionSurvey: mockDeleteSatisfactionSurvey,
}));

import satisfactionSurveyRouter from "@/routes/satisfactionSurvey.routes";

const app = express();
app.use(express.json());
app.use("/api/satisfaction-surveys", satisfactionSurveyRouter);

describe("satisfactionSurvey.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/satisfaction-surveys should call validate and createSatisfactionSurvey", async () => {
    const res = await request(app)
      .post("/api/satisfaction-surveys")
      .send({ title: "Survey 1", questions: [] });
    expect(mockCreateSatisfactionSurvey).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/satisfaction-surveys should call getAllSatisfactionSurveys", async () => {
    const res = await request(app).get("/api/satisfaction-surveys");
    expect(mockGetAllSatisfactionSurveys).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ satisfactionSurveys: [] });
  });

  it("GET /api/satisfaction-surveys/:id should call getSatisfactionSurveyById", async () => {
    const res = await request(app).get("/api/satisfaction-surveys/abc123");
    expect(mockGetSatisfactionSurveyById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/satisfaction-surveys/:id should call updateSatisfactionSurvey", async () => {
    const res = await request(app)
      .put("/api/satisfaction-surveys/abc123")
      .send({ title: "Updated Survey" });
    expect(mockUpdateSatisfactionSurvey).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/satisfaction-surveys/:id should call deleteSatisfactionSurvey", async () => {
    const res = await request(app).delete("/api/satisfaction-surveys/abc123");
    expect(mockDeleteSatisfactionSurvey).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
