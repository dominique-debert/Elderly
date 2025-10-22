import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import {
  createUserBlockedContact,
  getAllUserBlockedContacts,
  getUserBlockedContact,
  deleteUserBlockedContact,
  deleteAllUserBlockedContacts,
} from "@/controllers/blockedContacts.controller";
import createHttpError from "http-errors";
import { IUserContact } from "@/types";

// Mock Prisma Client
jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    blockedContact: {
      create: jest.fn(),
      findMany: jest.fn(),
      findFirst: jest.fn(),
      delete: jest.fn(),
      deleteMany: jest.fn(),
    },
    contactRequest: {
      findFirst: jest.fn(),
    },
  })),
}));

describe("Blocked Contacts Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock<NextFunction>;
  let prisma: any;

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
    prisma = new PrismaClient();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createUserBlockedContact", () => {
    it("should create a blocked contact and return 201", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const blockedContactData = {
        userId,
        contactId,
        reason: "spam",
      };

      mockRequest.params = { userId, contactId };
      mockRequest.body = { reason: "spam" };

      prisma.blockedContact.create.mockResolvedValue(blockedContactData);

      await createUserBlockedContact(
        mockRequest as Request<
          { userId: string; contactId: string },
          {},
          IUserContact
        >,
        mockResponse as Response,
        mockNext
      );

      expect(prisma.blockedContact.create).toHaveBeenCalledWith({
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

      prisma.blockedContact.create.mockRejectedValue(error);

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
        { id: "1", userId, contactId: "contact-1", createdAt: new Date() },
        { id: "2", userId, contactId: "contact-2", createdAt: new Date() },
      ];

      mockRequest.params = { userId };
      prisma.blockedContact.findMany.mockResolvedValue(blockedContacts);

      await getAllUserBlockedContacts(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(prisma.blockedContact.findMany).toHaveBeenCalledWith({
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

      prisma.blockedContact.findMany.mockRejectedValue(error);

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
      const blockedContact = { id: "1", userId, contactId };

      mockRequest.params = { userId, contactId };
      prisma.contactRequest.findFirst.mockResolvedValue(blockedContact);

      await getUserBlockedContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(prisma.contactRequest.findFirst).toHaveBeenCalledWith({
        where: { userId, contactId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(blockedContact);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if blocked contact not found", async () => {
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      prisma.contactRequest.findFirst.mockResolvedValue(null);

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
      const blockedContact = { id: "block-1", userId, contactId };

      mockRequest.params = { userId, contactId };
      prisma.blockedContact.findFirst.mockResolvedValue(blockedContact);
      prisma.blockedContact.delete.mockResolvedValue(blockedContact);

      await deleteUserBlockedContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(prisma.blockedContact.findFirst).toHaveBeenCalledWith({
        where: { userId, contactId },
      });
      expect(prisma.blockedContact.delete).toHaveBeenCalledWith({
        where: { id: "block-1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled();
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if blocked contact not found", async () => {
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      prisma.blockedContact.findFirst.mockResolvedValue(null);

      await deleteUserBlockedContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Contact bloqué non trouvé");
      expect(prisma.blockedContact.delete).not.toHaveBeenCalled();
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      const blockedContact = {
        id: "block-1",
        userId: "user-123",
        contactId: "contact-456",
      };

      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      prisma.blockedContact.findFirst.mockResolvedValue(blockedContact);
      prisma.blockedContact.delete.mockRejectedValue(error);

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
      prisma.blockedContact.deleteMany.mockResolvedValue({ count: 3 });

      await deleteAllUserBlockedContacts(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(prisma.blockedContact.deleteMany).toHaveBeenCalledWith({
        where: { userId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled();
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { userId: "user-123" };
      prisma.blockedContact.deleteMany.mockRejectedValue(error);

      await deleteAllUserBlockedContacts(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
