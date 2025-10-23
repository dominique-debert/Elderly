import express from "express";
import request from "supertest";

// Mock controllers
const mockCreateActivityRegistration = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllActivityRegistrations = jest.fn((req, res) =>
  res.json({ registrations: [] })
);
const mockGetActivityRegistrationById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateActivityRegistration = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteActivityRegistration = jest.fn((req, res) =>
  res.json({ deleted: true })
);

jest.mock("@/controllers", () => ({
  createActivityRegistration: mockCreateActivityRegistration,
  getAllActivityRegistrations: mockGetAllActivityRegistrations,
  getActivityRegistrationById: mockGetActivityRegistrationById,
  updateActivityRegistration: mockUpdateActivityRegistration,
  deleteActivityRegistration: mockDeleteActivityRegistration,
}));

import activityRegistrationRouter from "@/routes/activityRegistration.routes";

const app = express();
app.use(express.json());
app.use("/api/activity-registrations", activityRegistrationRouter);

describe("activityRegistration.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/activity-registrations should call createActivityRegistration", async () => {
    const res = await request(app)
      .post("/api/activity-registrations")
      .send({
        userId: "clv123abc0001",
        activityId: "cla456xyz0002",
        status: "confirmed",
      });
    expect(mockCreateActivityRegistration).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/activity-registrations should call getAllActivityRegistrations", async () => {
    const res = await request(app).get("/api/activity-registrations");
    expect(mockGetAllActivityRegistrations).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ registrations: [] });
  });

  it("GET /api/activity-registrations/:id should call getActivityRegistrationById", async () => {
    const res = await request(app).get("/api/activity-registrations/abc123");
    expect(mockGetActivityRegistrationById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/activity-registrations/:id should call updateActivityRegistration", async () => {
    const res = await request(app)
      .put("/api/activity-registrations/abc123")
      .send({ status: "cancelled" });
    expect(mockUpdateActivityRegistration).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/activity-registrations/:id should call deleteActivityRegistration", async () => {
    const res = await request(app).delete("/api/activity-registrations/abc123");
    expect(mockDeleteActivityRegistration).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
