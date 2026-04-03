import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateForumTopic = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllForumTopics = jest.fn((req, res) =>
  res.json({ forumTopics: [] })
);
const mockGetForumTopicById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateForumTopic = jest.fn((req, res) => res.json({ updated: true }));
const mockDeleteForumTopic = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  forumTopicSchema: {},
}));
jest.mock("@/controllers", () => ({
  createForumTopic: mockCreateForumTopic,
  getAllForumTopics: mockGetAllForumTopics,
  getForumTopicById: mockGetForumTopicById,
  updateForumTopic: mockUpdateForumTopic,
  deleteForumTopic: mockDeleteForumTopic,
}));

import forumTopicRouter from "@/routes/forumTopic.routes";

const app = express();
app.use(express.json());
app.use("/api/forum-topics", forumTopicRouter);

describe("forumTopic.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/forum-topics should call validate and createForumTopic", async () => {
    const res = await request(app).post("/api/forum-topics").send({
      title: "New topic",
      author_id: "user1",
      category_id: 1,
    });
    expect(mockCreateForumTopic).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/forum-topics should call getAllForumTopics", async () => {
    const res = await request(app).get("/api/forum-topics");
    expect(mockGetAllForumTopics).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ forumTopics: [] });
  });

  it("GET /api/forum-topics/:id should call getForumTopicById", async () => {
    const res = await request(app).get("/api/forum-topics/topic123");
    expect(mockGetForumTopicById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "topic123" });
  });

  it("PUT /api/forum-topics/:id should call updateForumTopic", async () => {
    const res = await request(app)
      .put("/api/forum-topics/topic123")
      .send({ title: "Updated topic" });
    expect(mockUpdateForumTopic).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/forum-topics/:id should call deleteForumTopic", async () => {
    const res = await request(app).delete("/api/forum-topics/topic123");
    expect(mockDeleteForumTopic).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
