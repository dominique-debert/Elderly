import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateMedicationReminder = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllMedicationReminders = jest.fn((req, res) =>
  res.json({ medicationReminders: [] })
);
const mockGetMedicationReminderById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateMedicationReminder = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteMedicationReminder = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  medicationReminderSchema: {},
}));
jest.mock("@/controllers", () => ({
  createMedicationReminder: mockCreateMedicationReminder,
  getAllMedicationReminders: mockGetAllMedicationReminders,
  getMedicationReminderById: mockGetMedicationReminderById,
  updateMedicationReminder: mockUpdateMedicationReminder,
  deleteMedicationReminder: mockDeleteMedicationReminder,
}));

import medicationReminderRouter from "@/routes/medicationReminder.routes";

const app = express();
app.use(express.json());
app.use("/api/medication-reminders", medicationReminderRouter);

describe("medicationReminder.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/medication-reminders should call validate and createMedicationReminder", async () => {
    const res = await request(app)
      .post("/api/medication-reminders")
      .send({ name: "Rappel 1", time: "08:00" });
    expect(mockCreateMedicationReminder).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/medication-reminders should call getAllMedicationReminders", async () => {
    const res = await request(app).get("/api/medication-reminders");
    expect(mockGetAllMedicationReminders).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ medicationReminders: [] });
  });

  it("GET /api/medication-reminders/:id should call getMedicationReminderById", async () => {
    const res = await request(app).get("/api/medication-reminders/abc123");
    expect(mockGetMedicationReminderById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/medication-reminders/:id should call updateMedicationReminder", async () => {
    const res = await request(app)
      .put("/api/medication-reminders/abc123")
      .send({ time: "09:00" });
    expect(mockUpdateMedicationReminder).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/medication-reminders/:id should call deleteMedicationReminder", async () => {
    const res = await request(app).delete("/api/medication-reminders/abc123");
    expect(mockDeleteMedicationReminder).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
