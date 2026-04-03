import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateVideoCall = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllVideoCalls = jest.fn((req, res) =>
  res.json({ videoCalls: [] })
);
const mockGetVideoCallById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateVideoCall = jest.fn((req, res) => res.json({ updated: true }));
const mockDeleteVideoCall = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  videoCallSchema: {},
}));
jest.mock("@/controllers", () => ({
  createVideoCall: mockCreateVideoCall,
  getAllVideoCalls: mockGetAllVideoCalls,
  getVideoCallById: mockGetVideoCallById,
  updateVideoCall: mockUpdateVideoCall,
  deleteVideoCall: mockDeleteVideoCall,
}));

import videoCallRouter from "@/routes/videoCall.routes";

const app = express();
app.use(express.json());
app.use("/api/video-calls", videoCallRouter);

describe("videoCall.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/video-calls should call validate and createVideoCall", async () => {
    const res = await request(app)
      .post("/api/video-calls")
      .send({ caller: "user1", callee: "user2" });
    expect(mockCreateVideoCall).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/video-calls should call getAllVideoCalls", async () => {
    const res = await request(app).get("/api/video-calls");
    expect(mockGetAllVideoCalls).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ videoCalls: [] });
  });

  it("GET /api/video-calls/:id should call getVideoCallById", async () => {
    const res = await request(app).get("/api/video-calls/abc123");
    expect(mockGetVideoCallById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/video-calls/:id should call updateVideoCall", async () => {
    const res = await request(app)
      .put("/api/video-calls/abc123")
      .send({ status: "ended" });
    expect(mockUpdateVideoCall).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/video-calls/:id should call deleteVideoCall", async () => {
    const res = await request(app).delete("/api/video-calls/abc123");
    expect(mockDeleteVideoCall).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
