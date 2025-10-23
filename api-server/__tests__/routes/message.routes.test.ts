import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateMessage = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllMessages = jest.fn((req, res) => res.json({ messages: [] }));
const mockGetMessageById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateMessage = jest.fn((req, res) => res.json({ updated: true }));
const mockDeleteMessage = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  messageSchema: {},
}));
jest.mock("@/controllers", () => ({
  createMessage: mockCreateMessage,
  getAllMessages: mockGetAllMessages,
  getMessageById: mockGetMessageById,
  updateMessage: mockUpdateMessage,
  deleteMessage: mockDeleteMessage,
}));

import messageRouter from "@/routes/message.routes";

const app = express();
app.use(express.json());
app.use("/api/messages", messageRouter);

describe("message.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/messages should call validate and createMessage", async () => {
    const res = await request(app)
      .post("/api/messages")
      .send({ content: "Hello world!" });
    expect(mockCreateMessage).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/messages should call getAllMessages", async () => {
    const res = await request(app).get("/api/messages");
    expect(mockGetAllMessages).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ messages: [] });
  });

  it("GET /api/messages/:id should call getMessageById", async () => {
    const res = await request(app).get("/api/messages/abc123");
    expect(mockGetMessageById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/messages/:id should call updateMessage", async () => {
    const res = await request(app)
      .put("/api/messages/abc123")
      .send({ content: "Updated message" });
    expect(mockUpdateMessage).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/messages/:id should call deleteMessage", async () => {
    const res = await request(app).delete("/api/messages/abc123");
    expect(mockDeleteMessage).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
