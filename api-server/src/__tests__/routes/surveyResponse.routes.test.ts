import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateSurveyResponse = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllSurveyResponse = jest.fn((req, res) =>
  res.json({ surveyResponse: [] })
);
const mockGetSurveyResponseById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateSurveyResponse = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteSurveyResponse = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  surveyResponseSchema: {},
}));
jest.mock("@/controllers", () => ({
  createSurveyResponse: mockCreateSurveyResponse,
  getAllSurveyResponse: mockGetAllSurveyResponse,
  getSurveyResponseById: mockGetSurveyResponseById,
  updateSurveyResponse: mockUpdateSurveyResponse,
  deleteSurveyResponse: mockDeleteSurveyResponse,
}));

import surveyResponseRouter from "@/routes/surveyResponse.routes";

const app = express();
app.use(express.json());
app.use("/api/survey-response", surveyResponseRouter);

describe("surveyResponse.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/survey-response should call validate and createSurveyResponse", async () => {
    const res = await request(app)
      .post("/api/survey-response")
      .send({ answer: "Yes", questionId: "q1" });
    expect(mockCreateSurveyResponse).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/survey-response should call getAllSurveyResponse", async () => {
    const res = await request(app).get("/api/survey-response");
    expect(mockGetAllSurveyResponse).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ surveyResponse: [] });
  });

  it("GET /api/survey-response/:id should call getSurveyResponseById", async () => {
    const res = await request(app).get("/api/survey-response/abc123");
    expect(mockGetSurveyResponseById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/survey-response/:id should call updateSurveyResponse", async () => {
    const res = await request(app)
      .put("/api/survey-response/abc123")
      .send({ answer: "No" });
    expect(mockUpdateSurveyResponse).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/survey-response/:id should call deleteSurveyResponse", async () => {
    const res = await request(app).delete("/api/survey-response/abc123");
    expect(mockDeleteSurveyResponse).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
