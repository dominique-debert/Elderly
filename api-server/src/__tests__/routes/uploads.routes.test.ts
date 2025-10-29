import express from "express";
import request from "supertest";
import path from "path";
import fs from "fs";

// Mock uuid to return a predictable value
jest.mock("uuid", () => ({
  v4: () => "test-uuid",
}));

// Ensure uploads directory exists for the test
const uploadsDir = path.join(process.cwd(), "public", "images", "avatars");
beforeAll(() => {
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
});

import uploadsRouter from "@/routes/uploads.routes";

const app = express();
app.use("/", uploadsRouter);

describe("uploads.routes", () => {
  it("should upload a file and return filename and url", async () => {
    const res = await request(app)
      .post("/")
      .attach("file", Buffer.from("test file content"), "avatar.png");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("filename", "test-uuid.png");
    expect(res.body).toHaveProperty("url");
    expect(res.body.url).toMatch(/\/images\/avatars\/test-uuid\.png$/);
  });

  it("should return 400 if no file is uploaded", async () => {
    const res = await request(app).post("/");
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: "No file uploaded" });
  });
});
