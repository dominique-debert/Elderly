import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateNutritionalAdvice = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllNutritionalAdvices = jest.fn((req, res) =>
  res.json({ advices: [] })
);
const mockGetNutritionalAdviceById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateNutritionalAdvice = jest.fn((req, res) =>
  res.json({ updated: true })
);
const mockDeleteNutritionalAdvice = jest.fn((req, res) =>
  res.status(204).end()
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  nutritionalAdviceSchema: {},
}));
jest.mock("@/controllers/index", () => ({
  createNutritionalAdvice: mockCreateNutritionalAdvice,
  getAllNutritionalAdvices: mockGetAllNutritionalAdvices,
  getNutritionalAdviceById: mockGetNutritionalAdviceById,
  updateNutritionalAdvice: mockUpdateNutritionalAdvice,
  deleteNutritionalAdvice: mockDeleteNutritionalAdvice,
}));

import nutritionalAdviceRouter from "@/routes/nutritionalAdvice.routes";

const app = express();
app.use(express.json());
app.use("/", nutritionalAdviceRouter);

describe("nutritionalAdvice.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /nutrition-advices should call validate and createNutritionalAdvice", async () => {
    const res = await request(app)
      .post("/nutrition-advices")
      .send({ title: "Eat more veggies" });
    expect(mockCreateNutritionalAdvice).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /nutrition-advices should call getAllNutritionalAdvices", async () => {
    const res = await request(app).get("/nutrition-advices");
    expect(mockGetAllNutritionalAdvices).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ advices: [] });
  });

  it("GET /nutrition-advices/:id should call getNutritionalAdviceById", async () => {
    const res = await request(app).get("/nutrition-advices/abc123");
    expect(mockGetNutritionalAdviceById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /nutrition-advices/:id should call updateNutritionalAdvice", async () => {
    const res = await request(app)
      .put("/nutrition-advices/abc123")
      .send({ title: "Updated advice" });
    expect(mockUpdateNutritionalAdvice).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /nutrition-advices/:id should call deleteNutritionalAdvice", async () => {
    const res = await request(app).delete("/nutrition-advices/abc123");
    expect(mockDeleteNutritionalAdvice).toHaveBeenCalled();
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});
