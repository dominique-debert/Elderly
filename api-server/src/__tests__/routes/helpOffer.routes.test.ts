import express from "express";
import request from "supertest";

// Mock middleware and controllers
const mockValidate = jest.fn(() => (req: any, res: any, next: any) => next());
const mockCreateHelpOffer = jest.fn((req, res) =>
  res.status(201).json({ created: true })
);
const mockGetAllHelpOffers = jest.fn((req, res) =>
  res.json({ helpOffers: [] })
);
const mockGetHelpOfferById = jest.fn((req, res) =>
  res.json({ id: req.params.id })
);
const mockUpdateHelpOffer = jest.fn((req, res) => res.json({ updated: true }));
const mockDeleteHelpOffer = jest.fn((req, res) =>
  res.status(200).json({ deleted: true })
);

jest.mock("@/middlewares", () => ({
  validate: () => mockValidate(),
}));
jest.mock("@/validators", () => ({
  helpOfferSchema: {},
}));
jest.mock("@/controllers", () => ({
  createHelpOffer: mockCreateHelpOffer,
  getAllHelpOffers: mockGetAllHelpOffers,
  getHelpOfferById: mockGetHelpOfferById,
  updateHelpOffer: mockUpdateHelpOffer,
  deleteHelpOffer: mockDeleteHelpOffer,
}));

import helpOfferRouter from "@/routes/helpOffer.routes";

const app = express();
app.use(express.json());
app.use("/api/help-offers", helpOfferRouter);

describe("helpOffer.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/help-offers should call validate and createHelpOffer", async () => {
    const res = await request(app)
      .post("/api/help-offers")
      .send({ name: "Aide à domicile", description: "Service d'aide" });
    expect(mockCreateHelpOffer).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ created: true });
  });

  it("GET /api/help-offers should call getAllHelpOffers", async () => {
    const res = await request(app).get("/api/help-offers");
    expect(mockGetAllHelpOffers).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ helpOffers: [] });
  });

  it("GET /api/help-offers/:id should call getHelpOfferById", async () => {
    const res = await request(app).get("/api/help-offers/abc123");
    expect(mockGetHelpOfferById).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "abc123" });
  });

  it("PUT /api/help-offers/:id should call updateHelpOffer", async () => {
    const res = await request(app)
      .put("/api/help-offers/abc123")
      .send({ name: "Updated Offer", description: "Updated desc" });
    expect(mockUpdateHelpOffer).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ updated: true });
  });

  it("DELETE /api/help-offers/:id should call deleteHelpOffer", async () => {
    const res = await request(app).delete("/api/help-offers/abc123");
    expect(mockDeleteHelpOffer).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ deleted: true });
  });
});
