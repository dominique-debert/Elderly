import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateConversation = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllConversations = jest.fn((req, res) =>
  res.json({ conversations: [] })
);
const mockGetConversationById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateConversation = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteConversation = jest.fn((req, res) => res.status(204).end());

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  conversationSchema: {},
}));
jest.mock("@/controllers", () => ({
  createConversation: mockCreateConversation,
  getAllConversations: mockGetAllConversations,
  getConversationById: mockGetConversationById,
  updateConversation: mockUpdateConversation,
  deleteConversation: mockDeleteConversation,
}));

import conversationRouter from "@/routes/conversation.routes";

const app = express();
app.use(express.json());
app.use("/api/conversations", conversationRouter);

describe("conversation.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/conversations should call validate and createConversation", async () => {
    const res = await request(app)
      .post("/api/conversations")
      .send({ title: "New Conversation" });
    expect(mockCreateConversation).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/conversations should call getAllConversations", async () => {
    const res = await request(app).get("/api/conversations");
    expect(mockGetAllConversations).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ conversations: [] });
  });

  it("GET /api/conversations/:id should call getConversationById", async () => {
    const res = await request(app).get("/api/conversations/abc123");
    expect(mockGetConversationById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/conversations/:id should call updateConversation", async () => {
    const res = await request(app)
      .put("/api/conversations/abc123")
      .send({ title: "Updated Conversation" });
    expect(mockUpdateConversation).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/conversations/:id should call deleteConversation", async () => {
    const res = await request(app).delete("/api/conversations/abc123");
    expect(mockDeleteConversation).toHaveBeenCalled();
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});
