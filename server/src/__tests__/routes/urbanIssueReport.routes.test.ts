import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateUrbanIssueReport = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllUrbanIssueReports = jest.fn((req, res) =>
  res.json({ urbanIssueReports: [] })
);
const mockGetUrbanIssueReportById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateUrbanIssueReport = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteUrbanIssueReport = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  urbanIssueReportSchema: {},
}));
jest.mock("@/controllers", () => ({
  createUrbanIssueReport: mockCreateUrbanIssueReport,
  getAllUrbanIssueReports: mockGetAllUrbanIssueReports,
  getUrbanIssueReportById: mockGetUrbanIssueReportById,
  updateUrbanIssueReport: mockUpdateUrbanIssueReport,
  deleteUrbanIssueReport: mockDeleteUrbanIssueReport,
}));

import urbanIssueReportRouter from "@/routes/urbanIssueReport.routes";

const app = express();
app.use(express.json());
app.use("/api/urban-issue-reports", urbanIssueReportRouter);

describe("urbanIssueReport.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/urban-issue-reports should call validate and createUrbanIssueReport", async () => {
    const res = await request(app)
      .post("/api/urban-issue-reports")
      .send({ title: "Broken streetlight", description: "On Main St." });
    expect(mockCreateUrbanIssueReport).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/urban-issue-reports should call getAllUrbanIssueReports", async () => {
    const res = await request(app).get("/api/urban-issue-reports");
    expect(mockGetAllUrbanIssueReports).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ urbanIssueReports: [] });
  });

  it("GET /api/urban-issue-reports/:id should call getUrbanIssueReportById", async () => {
    const res = await request(app).get("/api/urban-issue-reports/abc123");
    expect(mockGetUrbanIssueReportById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/urban-issue-reports/:id should call updateUrbanIssueReport", async () => {
    const res = await request(app)
      .put("/api/urban-issue-reports/abc123")
      .send({ title: "Updated issue" });
    expect(mockUpdateUrbanIssueReport).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/urban-issue-reports/:id should call deleteUrbanIssueReport", async () => {
    const res = await request(app).delete("/api/urban-issue-reports/abc123");
    expect(mockDeleteUrbanIssueReport).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
