import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateForumMessage = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllForumMessages = jest.fn((req, res) =>
  res.json({ messages: [] })
);
const mockGetForumMessageById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateForumMessage = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteForumMessage = jest.fn((req, res) => res.status(204).end());

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  forumMessageSchema: {},
}));
jest.mock("@/controllers", () => ({
  createForumMessage: mockCreateForumMessage,
  getAllForumMessages: mockGetAllForumMessages,
  getForumMessageById: mockGetForumMessageById,
  updateForumMessage: mockUpdateForumMessage,
  deleteForumMessage: mockDeleteForumMessage,
}));

import forumMessageRouter from "@/routes/forumMessage.routes";

const app = express();
app.use(express.json());
app.use("/api/forum-messages", forumMessageRouter);

describe("forumMessage.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/forum-messages should call validate and createForumMessage", async () => {
    const res = await request(app)
      .post("/api/forum-messages")
      .send({ content: "Hello forum!" });
    expect(mockCreateForumMessage).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/forum-messages should call getAllForumMessages", async () => {
    const res = await request(app).get("/api/forum-messages");
    expect(mockGetAllForumMessages).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ messages: [] });
  });

  it("GET /api/forum-messages/:id should call getForumMessageById", async () => {
    const res = await request(app).get("/api/forum-messages/abc123");
    expect(mockGetForumMessageById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/forum-messages/:id should call updateForumMessage", async () => {
    const res = await request(app)
      .put("/api/forum-messages/abc123")
      .send({ content: "Updated message" });
    expect(mockUpdateForumMessage).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/forum-messages/:id should call deleteForumMessage", async () => {
    const res = await request(app).delete("/api/forum-messages/abc123");
    expect(mockDeleteForumMessage).toHaveBeenCalled();
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});
