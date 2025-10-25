import request from "supertest";
import express, { Express } from "express";

// Mock des contrôleurs
const mockGetAllUserBlockedContacts = jest.fn();
const mockGetUserBlockedContact = jest.fn();
const mockCreateUserBlockedContact = jest.fn();
const mockDeleteUserBlockedContact = jest.fn();
const mockDeleteAllUserBlockedContacts = jest.fn();

jest.mock("@/controllers", () => ({
  getAllUserBlockedContacts: (req: any, res: any, next: any) =>
    mockGetAllUserBlockedContacts(req, res, next),
  getUserBlockedContact: (req: any, res: any, next: any) =>
    mockGetUserBlockedContact(req, res, next),
  createUserBlockedContact: (req: any, res: any, next: any) =>
    mockCreateUserBlockedContact(req, res, next),
  deleteUserBlockedContact: (req: any, res: any, next: any) =>
    mockDeleteUserBlockedContact(req, res, next),
  deleteAllUserBlockedContacts: (req: any, res: any, next: any) =>
    mockDeleteAllUserBlockedContacts(req, res, next),
}));

// Mock du middleware de validation
const mockValidateMiddleware = jest.fn((req: any, res: any, next: any) =>
  next()
);
jest.mock("@/middlewares", () => ({
  validate: jest.fn(() => mockValidateMiddleware),
}));

// Mock du schéma de validation
jest.mock("@/validators", () => ({
  userContactSchema: {
    validate: jest.fn(),
  },
}));

// Import après les mocks
import blockedContactsRoutes from "@/routes/blockedContacts.routes";

describe("Blocked Contacts Routes", () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use("/api/blocked-contacts", blockedContactsRoutes);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /api/blocked-contacts/:userId", () => {
    it("should call getAllUserBlockedContacts controller", async () => {
      const userId = "user-123";
      mockGetAllUserBlockedContacts.mockImplementation((req, res) => {
        res.status(200).json({ userContacts: [] });
      });

      const response = await request(app).get(
        `/api/blocked-contacts/${userId}`
      );

      expect(response.status).toBe(200);
      expect(mockGetAllUserBlockedContacts).toHaveBeenCalled();
      expect(response.body).toEqual({ userContacts: [] });
    });

    it("should return blocked contacts for a user", async () => {
      const userId = "user-123";
      const blockedContacts = [
        {
          id: "bc-1",
          userId,
          contactId: "contact-1",
          blockedAt: new Date(),
        },
        {
          id: "bc-2",
          userId,
          contactId: "contact-2",
          blockedAt: new Date(),
        },
      ];

      mockGetAllUserBlockedContacts.mockImplementation((req, res) => {
        res.status(200).json({ userContacts: blockedContacts });
      });

      const response = await request(app).get(
        `/api/blocked-contacts/${userId}`
      );

      expect(response.status).toBe(200);
      expect(response.body.userContacts).toHaveLength(2);
    });
  });

  describe("GET /api/blocked-contacts/:userId/:contactId", () => {
    it("should call getUserBlockedContact controller", async () => {
      const userId = "user-123";
      const contactId = "contact-456";

      mockGetUserBlockedContact.mockImplementation((req, res) => {
        res.status(200).json({
          id: "bc-1",
          userId,
          contactId,
        });
      });

      const response = await request(app).get(
        `/api/blocked-contacts/${userId}/${contactId}`
      );

      expect(response.status).toBe(200);
      expect(mockGetUserBlockedContact).toHaveBeenCalled();
    });

    it("should return 404 if blocked contact not found", async () => {
      const userId = "user-123";
      const contactId = "contact-999";

      mockGetUserBlockedContact.mockImplementation((req, res) => {
        res.status(404).json({ message: "Contact bloqué non trouvé" });
      });

      const response = await request(app).get(
        `/api/blocked-contacts/${userId}/${contactId}`
      );

      expect(response.status).toBe(404);
    });
  });

  describe("POST /api/blocked-contacts/:userId/:contactId", () => {
    it("should call createUserBlockedContact controller with validation middleware", async () => {
      const userId = "user-123";
      const contactId = "contact-456";

      mockCreateUserBlockedContact.mockImplementation((req, res) => {
        res.status(201).json({
          id: "bc-new",
          userId,
          contactId,
          createdAt: new Date(),
        });
      });

      const response = await request(app)
        .post(`/api/blocked-contacts/${userId}/${contactId}`)
        .send({});

      expect(response.status).toBe(201);
      expect(mockValidateMiddleware).toHaveBeenCalled();
      expect(mockCreateUserBlockedContact).toHaveBeenCalled();
    });

    it("should create a blocked contact", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const blockedContact = {
        id: "bc-new",
        userId,
        contactId,
        createdAt: new Date(),
      };

      mockCreateUserBlockedContact.mockImplementation((req, res) => {
        res.status(201).json(blockedContact);
      });

      const response = await request(app)
        .post(`/api/blocked-contacts/${userId}/${contactId}`)
        .send({});

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        id: "bc-new",
        userId,
        contactId,
      });
    });
  });

  describe("DELETE /api/blocked-contacts/:userId/:contactId", () => {
    it("should call deleteUserBlockedContact controller", async () => {
      const userId = "user-123";
      const contactId = "contact-456";

      mockDeleteUserBlockedContact.mockImplementation((req, res) => {
        res
          .status(200)
          .json({ message: "Contact bloqué supprimé avec succès" });
      });

      const response = await request(app).delete(
        `/api/blocked-contacts/${userId}/${contactId}`
      );

      expect(response.status).toBe(200);
      expect(mockDeleteUserBlockedContact).toHaveBeenCalled();
      expect(response.body).toEqual({
        message: "Contact bloqué supprimé avec succès",
      });
    });

    it("should delete a specific blocked contact", async () => {
      const userId = "user-123";
      const contactId = "contact-456";

      mockDeleteUserBlockedContact.mockImplementation((req, res) => {
        res
          .status(200)
          .json({ message: "Contact bloqué supprimé avec succès" });
      });

      const response = await request(app).delete(
        `/api/blocked-contacts/${userId}/${contactId}`
      );

      expect(response.status).toBe(200);
    });
  });

  describe("DELETE /api/blocked-contacts/:userId", () => {
    it("should call deleteAllUserBlockedContacts controller", async () => {
      const userId = "user-123";

      mockDeleteAllUserBlockedContacts.mockImplementation((req, res) => {
        res
          .status(200)
          .json({ message: "Contacts bloqués supprimés avec succès" });
      });

      const response = await request(app).delete(
        `/api/blocked-contacts/${userId}`
      );

      expect(response.status).toBe(200);
      expect(mockDeleteAllUserBlockedContacts).toHaveBeenCalled();
      expect(response.body).toEqual({
        message: "Contacts bloqués supprimés avec succès",
      });
    });

    it("should delete all blocked contacts for a user", async () => {
      const userId = "user-123";

      mockDeleteAllUserBlockedContacts.mockImplementation((req, res) => {
        res.status(200).json({
          message: "Contacts bloqués supprimés avec succès",
          count: 5,
        });
      });

      const response = await request(app).delete(
        `/api/blocked-contacts/${userId}`
      );

      expect(response.status).toBe(200);
      expect(response.body.count).toBe(5);
    });
  });

  describe("Route parameter validation", () => {
    it("should handle valid userId and contactId parameters", async () => {
      const userId = "user-abc-123";
      const contactId = "contact-xyz-456";

      mockGetUserBlockedContact.mockImplementation((req, res) => {
        expect(req.params.userId).toBe(userId);
        expect(req.params.contactId).toBe(contactId);
        res.status(200).json({ userId, contactId });
      });

      const response = await request(app).get(
        `/api/blocked-contacts/${userId}/${contactId}`
      );

      expect(response.status).toBe(200);
    });
  });
});
