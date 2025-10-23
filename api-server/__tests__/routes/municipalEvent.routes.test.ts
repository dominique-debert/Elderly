import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateMunicipalEvent = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllMunicipalEvents = jest.fn((req, res) =>
  res.json({ municipalEvents: [] })
);
const mockGetMunicipalEventById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateMunicipalEvent = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteMunicipalEvent = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  municipalEventSchema: {},
}));
jest.mock("@/controllers", () => ({
  createMunicipalEvent: mockCreateMunicipalEvent,
  getAllMunicipalEvents: mockGetAllMunicipalEvents,
  getMunicipalEventById: mockGetMunicipalEventById,
  updateMunicipalEvent: mockUpdateMunicipalEvent,
  deleteMunicipalEvent: mockDeleteMunicipalEvent,
}));

import municipalEventRouter from "@/routes/municipalEvent.routes";

const app = express();
app.use(express.json());
app.use("/api/municipal-events", municipalEventRouter);

describe("municipalEvent.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/municipal-events should call validate and createMunicipalEvent", async () => {
    const res = await request(app)
      .post("/api/municipal-events")
      .send({ name: "Event 1", description: "Municipal event" });
    expect(mockCreateMunicipalEvent).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/municipal-events should call getAllMunicipalEvents", async () => {
    const res = await request(app).get("/api/municipal-events");
    expect(mockGetAllMunicipalEvents).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ municipalEvents: [] });
  });

  it("GET /api/municipal-events/:id should call getMunicipalEventById", async () => {
    const res = await request(app).get("/api/municipal-events/abc123");
    expect(mockGetMunicipalEventById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/municipal-events/:id should call updateMunicipalEvent", async () => {
    const res = await request(app)
      .put("/api/municipal-events/abc123")
      .send({ name: "Updated Event" });
    expect(mockUpdateMunicipalEvent).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/municipal-events/:id should call deleteMunicipalEvent", async () => {
    const res = await request(app).delete("/api/municipal-events/abc123");
    expect(mockDeleteMunicipalEvent).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
