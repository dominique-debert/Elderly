import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateUserContactRequest = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllUserContactRequests = jest.fn((req, res) =>
  res.json({ userContacts: [] })
);
const mockGetUserContactRequest = jest.fn((req, res) =>
  res.json({ id: req.params.contactId })
);
const mockUpdateUserContactRequest = jest.fn((req, res) =>
  res.status(200).json({ updated: true })
);
const mockDeleteUserContactRequest = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);
const mockDeleteAllUserContactRequests = jest.fn((req, res) =>
  res.status(200).json({ allDeleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  userContactSchema: {},
}));
jest.mock("@/controllers", () => ({
  createUserContactRequest: mockCreateUserContactRequest,
  getAllUserContactRequests: mockGetAllUserContactRequests,
  getUserContactRequest: mockGetUserContactRequest,
  updateUserContactRequest: mockUpdateUserContactRequest,
  deleteUserContactRequest: mockDeleteUserContactRequest,
  deleteAllUserContactRequests: mockDeleteAllUserContactRequests,
}));

import contactRequestsRouter from "@/routes/contactRequests.routes";

const app = express();
app.use(express.json());
app.use("/api/contact-requests", contactRequestsRouter);

describe("contactRequests.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("GET /api/contact-requests/:userId should call getAllUserContactRequests", async () => {
    const res = await request(app).get("/api/contact-requests/user001");
    expect(mockGetAllUserContactRequests).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ userContacts: [] });
  });

  it("GET /api/contact-requests/:userId/:contactId should call getUserContactRequest", async () => {
    const res = await request(app).get(
      "/api/contact-requests/user001/contact002"
    );
    expect(mockGetUserContactRequest).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "contact002" });
  });

  it("POST /api/contact-requests/:userId/:contactId should call validate and createUserContactRequest", async () => {
    const res = await request(app)
      .post("/api/contact-requests/user001/contact002")
      .send({ status: "pending" });
    expect(mockCreateUserContactRequest).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("PUT /api/contact-requests/:userId/:contactId should call validate and updateUserContactRequest", async () => {
    const res = await request(app)
      .put("/api/contact-requests/user001/contact002")
      .send({ status: "accepted" });
    expect(mockUpdateUserContactRequest).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/contact-requests/:userId/:contactId should call deleteUserContactRequest", async () => {
    const res = await request(app).delete(
      "/api/contact-requests/user001/contact002"
    );
    expect(mockDeleteUserContactRequest).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });

  it("DELETE /api/contact-requests/:userId should call deleteAllUserContactRequests", async () => {
    const res = await request(app).delete("/api/contact-requests/user001");
    expect(mockDeleteAllUserContactRequests).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ allDeleted: true });
  });
});
