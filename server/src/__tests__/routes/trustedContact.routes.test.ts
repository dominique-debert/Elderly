import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateTrustedContact = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllTrustedContacts = jest.fn((req, res) =>
  res.json({ trustedContacts: [] })
);
const mockGetTrustedContactById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateTrustedContact = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteTrustedContact = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  trustedContactSchema: {},
}));
jest.mock("@/controllers", () => ({
  createTrustedContact: mockCreateTrustedContact,
  getAllTrustedContacts: mockGetAllTrustedContacts,
  getTrustedContactById: mockGetTrustedContactById,
  updateTrustedContact: mockUpdateTrustedContact,
  deleteTrustedContact: mockDeleteTrustedContact,
}));

import trustedContactRouter from "@/routes/trustedContact.routes";

const app = express();
app.use(express.json());
app.use("/api/trusted-contacts", trustedContactRouter);

describe("trustedContact.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/trusted-contacts should call validate and createTrustedContact", async () => {
    const res = await request(app)
      .post("/api/trusted-contacts")
      .send({ name: "Contact 1", phone: "1234567890" });
    expect(mockCreateTrustedContact).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/trusted-contacts should call getAllTrustedContacts", async () => {
    const res = await request(app).get("/api/trusted-contacts");
    expect(mockGetAllTrustedContacts).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ trustedContacts: [] });
  });

  it("GET /api/trusted-contacts/:id should call getTrustedContactById", async () => {
    const res = await request(app).get("/api/trusted-contacts/abc123");
    expect(mockGetTrustedContactById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/trusted-contacts/:id should call updateTrustedContact", async () => {
    const res = await request(app)
      .put("/api/trusted-contacts/abc123")
      .send({ name: "Updated Contact" });
    expect(mockUpdateTrustedContact).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/trusted-contacts/:id should call deleteTrustedContact", async () => {
    const res = await request(app).delete("/api/trusted-contacts/abc123");
    expect(mockDeleteTrustedContact).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
