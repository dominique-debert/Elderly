import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateUserContact = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllUserContacts = jest.fn((req, res) =>
  res.json({ userContacts: [] })
);
const mockGetUserContact = jest.fn((req, res) =>
  res.json({ userId: req.params.userId, contactId: req.params.contactId })
);
const mockUpdateUserContact = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteUserContact = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);
const mockDeleteAllUserContacts = jest.fn((req, res) =>
  res.status(200).json({ allDeleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  userContactSchema: {},
}));
jest.mock("@/controllers", () => ({
  createUserContact: mockCreateUserContact,
  getAllUserContacts: mockGetAllUserContacts,
  getUserContact: mockGetUserContact,
  updateUserContact: mockUpdateUserContact,
  deleteUserContact: mockDeleteUserContact,
  deleteAllUserContacts: mockDeleteAllUserContacts,
}));

import userContactsRouter from "@/routes/userContacts.routes";

const app = express();
app.use(express.json());
app.use("/api/user-contacts", userContactsRouter);

describe("userContacts.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/user-contacts/:userId/:contactId should call validate and createUserContact", async () => {
    const res = await request(app)
      .post("/api/user-contacts/u1/c1")
      .send({ name: "Contact 1" });
    expect(mockCreateUserContact).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/user-contacts/:userId should call getAllUserContacts", async () => {
    const res = await request(app).get("/api/user-contacts/u1");
    expect(mockGetAllUserContacts).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ userContacts: [] });
  });

  it("GET /api/user-contacts/:userId/:contactId should call getUserContact", async () => {
    const res = await request(app).get("/api/user-contacts/u1/c1");
    expect(mockGetUserContact).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ userId: "u1", contactId: "c1" });
  });

  it("PUT /api/user-contacts/:userId/:contactId should call updateUserContact", async () => {
    const res = await request(app)
      .put("/api/user-contacts/u1/c1")
      .send({ name: "Updated Contact" });
    expect(mockUpdateUserContact).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/user-contacts/:userId/:contactId should call deleteUserContact", async () => {
    const res = await request(app).delete("/api/user-contacts/u1/c1");
    expect(mockDeleteUserContact).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });

  it("DELETE /api/user-contacts/:userId should call deleteAllUserContacts", async () => {
    const res = await request(app).delete("/api/user-contacts/u1");
    expect(mockDeleteAllUserContacts).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ allDeleted: true });
  });
});
