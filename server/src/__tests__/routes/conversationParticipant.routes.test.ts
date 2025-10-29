import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateConversationParticipant = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllConversationParticipants = jest.fn((req, res) =>
  res.json({ participants: [] })
);
const mockGetConversationParticipantById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateConversationParticipant = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteConversationParticipant = jest.fn((req, res) =>
  res.status(204).end()
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  conversationParticipantSchema: {},
}));
jest.mock("@/controllers", () => ({
  createConversationParticipant: mockCreateConversationParticipant,
  getAllConversationParticipants: mockGetAllConversationParticipants,
  getConversationParticipantById: mockGetConversationParticipantById,
  updateConversationParticipant: mockUpdateConversationParticipant,
  deleteConversationParticipant: mockDeleteConversationParticipant,
}));

import conversationParticipantRouter from "@/routes/conversationParticipant.routes";

const app = express();
app.use(express.json());
app.use("/api/conversations-participants", conversationParticipantRouter);

describe("conversationParticipant.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/conversations-participants should call validate and createConversationParticipant", async () => {
    const res = await request(app)
      .post("/api/conversations-participants")
      .send({ userId: "user001", conversationId: "conv001" });
    expect(mockCreateConversationParticipant).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/conversations-participants should call getAllConversationParticipants", async () => {
    const res = await request(app).get("/api/conversations-participants");
    expect(mockGetAllConversationParticipants).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ participants: [] });
  });

  it("GET /api/conversations-participants/:id should call getConversationParticipantById", async () => {
    const res = await request(app).get(
      "/api/conversations-participants/abc123"
    );
    expect(mockGetConversationParticipantById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/conversations-participants/:id should call updateConversationParticipant", async () => {
    const res = await request(app)
      .put("/api/conversations-participants/abc123")
      .send({ role: "admin" });
    expect(mockUpdateConversationParticipant).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/conversations-participants/:id should call deleteConversationParticipant", async () => {
    const res = await request(app).delete(
      "/api/conversations-participants/abc123"
    );
    expect(mockDeleteConversationParticipant).toHaveBeenCalled();
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});
