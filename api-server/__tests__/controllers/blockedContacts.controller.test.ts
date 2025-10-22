import { Request, Response, NextFunction } from "express";
import { IUserContact } from "@/types";

// Mock Prisma Client avant les imports
const mockBlockedContactCreate = jest.fn();
const mockBlockedContactFindMany = jest.fn();
const mockBlockedContactFindFirst = jest.fn();
const mockBlockedContactDelete = jest.fn();
const mockBlockedContactDeleteMany = jest.fn();
const mockContactRequestFindFirst = jest.fn();

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    blockedContact: {
      create: mockBlockedContactCreate,
      findMany: mockBlockedContactFindMany,
      findFirst: mockBlockedContactFindFirst,
      delete: mockBlockedContactDelete,
      deleteMany: mockBlockedContactDeleteMany,
    },
    contactRequest: {
      findFirst: mockContactRequestFindFirst,
    },
  })),
}));

// Import après le mock
import {
  createUserBlockedContact,
  getAllUserBlockedContacts,
  getUserBlockedContact,
  deleteUserBlockedContact,
  deleteAllUserBlockedContacts,
} from "@/controllers/blockedContacts.controller";

describe("Blocked Contacts Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock<NextFunction>;

  beforeEach(() => {
    mockRequest = {
      params: {},
      body: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn() as jest.Mock<NextFunction>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createUserBlockedContact", () => {
    it("should create a blocked contact and return 201", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const blockedContactData = {
        id: "block-1",
        userId,
        contactId,
        reason: "spam",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId, contactId };
      mockRequest.body = { reason: "spam" };

      mockBlockedContactCreate.mockResolvedValue(blockedContactData);

      await createUserBlockedContact(
        mockRequest as Request<
          { userId: string; contactId: string },
          {},
          IUserContact
        >,
        mockResponse as Response,
        mockNext
      );

      expect(mockBlockedContactCreate).toHaveBeenCalledWith({
        data: {
          reason: "spam",
          userId,
          contactId,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(blockedContactData);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if creation fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };

      mockBlockedContactCreate.mockRejectedValue(error);

      await createUserBlockedContact(
        mockRequest as Request<
          { userId: string; contactId: string },
          {},
          IUserContact
        >,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllUserBlockedContacts", () => {
    it("should return all blocked contacts for a user", async () => {
      const userId = "user-123";
      const blockedContacts = [
        {
          id: "1",
          userId,
          contactId: "contact-1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "2",
          userId,
          contactId: "contact-2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockRequest.params = { userId };
      mockBlockedContactFindMany.mockResolvedValue(blockedContacts);

      await getAllUserBlockedContacts(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockBlockedContactFindMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "desc" },
        where: { userId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ blockedContacts });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { userId: "user-123" };

      mockBlockedContactFindMany.mockRejectedValue(error);

      await getAllUserBlockedContacts(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getUserBlockedContact", () => {
    it("should return a specific blocked contact", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const blockedContact = {
        id: "1",
        userId,
        contactId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId, contactId };
      mockContactRequestFindFirst.mockResolvedValue(blockedContact);

      await getUserBlockedContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockContactRequestFindFirst).toHaveBeenCalledWith({
        where: { userId, contactId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(blockedContact);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if blocked contact not found", async () => {
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockContactRequestFindFirst.mockResolvedValue(null);

      await getUserBlockedContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Contact bloqué non trouvé");
    });
  });

  describe("deleteUserBlockedContact", () => {
    it("should delete a blocked contact and return 204", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const blockedContact = {
        id: "block-1",
        userId,
        contactId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId, contactId };
      mockBlockedContactFindFirst.mockResolvedValue(blockedContact);
      mockBlockedContactDelete.mockResolvedValue(blockedContact);

      await deleteUserBlockedContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockBlockedContactFindFirst).toHaveBeenCalledWith({
        where: { userId, contactId },
      });
      expect(mockBlockedContactDelete).toHaveBeenCalledWith({
        where: { id: "block-1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled();
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if blocked contact not found", async () => {
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockBlockedContactFindFirst.mockResolvedValue(null);

      await deleteUserBlockedContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Contact bloqué non trouvé");
      expect(mockBlockedContactDelete).not.toHaveBeenCalled();
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      const blockedContact = {
        id: "block-1",
        userId: "user-123",
        contactId: "contact-456",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockBlockedContactFindFirst.mockResolvedValue(blockedContact);
      mockBlockedContactDelete.mockRejectedValue(error);

      await deleteUserBlockedContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("deleteAllUserBlockedContacts", () => {
    it("should delete all blocked contacts for a user and return 204", async () => {
      const userId = "user-123";
      mockRequest.params = { userId };
      mockBlockedContactDeleteMany.mockResolvedValue({ count: 3 });

      await deleteAllUserBlockedContacts(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockBlockedContactDeleteMany).toHaveBeenCalledWith({
        where: { userId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled();
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { userId: "user-123" };
      mockBlockedContactDeleteMany.mockRejectedValue(error);

      await deleteAllUserBlockedContacts(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
