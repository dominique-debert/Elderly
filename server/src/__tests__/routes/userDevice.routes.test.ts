import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateUserDevice = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllUserDevices = jest.fn((req, res) =>
  res.json({ userDevices: [] })
);
const mockGetUserDeviceById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateUserDevice = jest.fn((req, res) => res.json({ updated: true }));
const mockDeleteUserDevice = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  userDeviceSchema: {},
}));
jest.mock("@/controllers", () => ({
  createUserDevice: mockCreateUserDevice,
  getAllUserDevices: mockGetAllUserDevices,
  getUserDeviceById: mockGetUserDeviceById,
  updateUserDevice: mockUpdateUserDevice,
  deleteUserDevice: mockDeleteUserDevice,
}));

import userDeviceRouter from "@/routes/userDevice.routes";

const app = express();
app.use(express.json());
app.use("/api/user-devices", userDeviceRouter);

describe("userDevice.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/user-devices should call validate and createUserDevice", async () => {
    const res = await request(app)
      .post("/api/user-devices")
      .send({ name: "Device 1", type: "mobile" });
    expect(mockCreateUserDevice).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/user-devices should call getAllUserDevices", async () => {
    const res = await request(app).get("/api/user-devices");
    expect(mockGetAllUserDevices).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ userDevices: [] });
  });

  it("GET /api/user-devices/:id should call getUserDeviceById", async () => {
    const res = await request(app).get("/api/user-devices/abc123");
    expect(mockGetUserDeviceById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/user-devices/:id should call updateUserDevice", async () => {
    const res = await request(app)
      .put("/api/user-devices/abc123")
      .send({ name: "Updated Device" });
    expect(mockUpdateUserDevice).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/user-devices/:id should call deleteUserDevice", async () => {
    const res = await request(app).delete("/api/user-devices/abc123");
    expect(mockDeleteUserDevice).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
