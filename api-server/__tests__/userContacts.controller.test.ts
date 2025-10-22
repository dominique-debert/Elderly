import { Request, Response, NextFunction } from "express";
import { IUserContact } from "@/types";

// Mock Prisma Client avant les imports
const mockUserContactsCreate = jest.fn();
const mockUserContactsFindMany = jest.fn();
const mockUserContactsFindFirst = jest.fn();
const mockUserContactsUpdate = jest.fn();
const mockUserContactsDelete = jest.fn();
const mockUserContactsDeleteMany = jest.fn();

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    userContacts: {
      create: mockUserContactsCreate,
      findMany: mockUserContactsFindMany,
      findFirst: mockUserContactsFindFirst,
      update: mockUserContactsUpdate,
      delete: mockUserContactsDelete,
      deleteMany: mockUserContactsDeleteMany,
    },
  })),
}));

// Import après le mock
import {
  createUserContact,
  getAllUserContacts,
  getUserContact,
  updateUserContact,
  deleteUserContact,
  deleteAllUserContacts,
} from "@/controllers/userContacts.controller";

describe("User Contacts Controller", () => {
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

  describe("createUserContact", () => {
    it("should create a user contact and return 201", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const userContactData = {
        id: "contact-1",
        userId,
        contactId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId, contactId };
      mockRequest.body = {};

      mockUserContactsCreate.mockResolvedValue(userContactData);

      await createUserContact(
        mockRequest as Request<
          { userId: string; contactId: string },
          {},
          IUserContact
        >,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserContactsCreate).toHaveBeenCalledWith({
        data: {
          userId,
          contactId,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(userContactData);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if creation fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockRequest.body = {};

      mockUserContactsCreate.mockRejectedValue(error);

      await createUserContact(
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

  describe("getAllUserContacts", () => {
    it("should return all user contacts", async () => {
      const userId = "user-123";
      const userContacts = [
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
      mockUserContactsFindMany.mockResolvedValue(userContacts);

      await getAllUserContacts(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserContactsFindMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "desc" },
        where: { userId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ userContacts });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { userId: "user-123" };

      mockUserContactsFindMany.mockRejectedValue(error);

      await getAllUserContacts(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getUserContact", () => {
    it("should return a specific user contact", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const userContact = {
        id: "1",
        userId,
        contactId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId, contactId };
      mockUserContactsFindFirst.mockResolvedValue(userContact);

      await getUserContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserContactsFindFirst).toHaveBeenCalledWith({
        where: { userId, contactId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(userContact);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if user contact not found", async () => {
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockUserContactsFindFirst.mockResolvedValue(null);

      await getUserContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Contact utilisateur non trouvé");
    });
  });

  describe("updateUserContact", () => {
    it("should update a user contact and return 200", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const now = new Date();
      const existingContact = {
        id: "contact-1",
        userId,
        contactId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updatedContact = {
        ...existingContact,
        updatedAt: now,
      };

      mockRequest.params = { userId, contactId };
      mockRequest.body = {};
      mockUserContactsFindFirst.mockResolvedValue(existingContact);
      mockUserContactsUpdate.mockResolvedValue(updatedContact);

      await updateUserContact(
        mockRequest as Request<
          { userId: string; contactId: string },
          {},
          IUserContact
        >,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserContactsFindFirst).toHaveBeenCalledWith({
        where: { userId, contactId },
      });
      expect(mockUserContactsUpdate).toHaveBeenCalledWith({
        where: { id: "contact-1" },
        data: expect.objectContaining({
          updatedAt: expect.any(Date),
        }),
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedContact);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if user contact not found", async () => {
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockRequest.body = {};
      mockUserContactsFindFirst.mockResolvedValue(null);

      await updateUserContact(
        mockRequest as Request<
          { userId: string; contactId: string },
          {},
          IUserContact
        >,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Contact utilisateur non trouvé");
      expect(mockUserContactsUpdate).not.toHaveBeenCalled();
    });

    it("should call next with error if update fails", async () => {
      const error = new Error("Database error");
      const existingContact = {
        id: "contact-1",
        userId: "user-123",
        contactId: "contact-456",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockRequest.body = {};
      mockUserContactsFindFirst.mockResolvedValue(existingContact);
      mockUserContactsUpdate.mockRejectedValue(error);

      await updateUserContact(
        mockRequest as Request<
          { userId: string; contactId: string },
          {},
          IUserContact
        >,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("deleteUserContact", () => {
    it("should delete a user contact and return 200", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const userContact = {
        id: "contact-1",
        userId,
        contactId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId, contactId };
      mockUserContactsFindFirst.mockResolvedValue(userContact);
      mockUserContactsDelete.mockResolvedValue(userContact);

      await deleteUserContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserContactsFindFirst).toHaveBeenCalledWith({
        where: { userId, contactId },
      });
      expect(mockUserContactsDelete).toHaveBeenCalledWith({
        where: { id: "contact-1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalled();
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if user contact not found", async () => {
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockUserContactsFindFirst.mockResolvedValue(null);

      await deleteUserContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Contact utilisateur non trouvé");
      expect(mockUserContactsDelete).not.toHaveBeenCalled();
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      const userContact = {
        id: "contact-1",
        userId: "user-123",
        contactId: "contact-456",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockUserContactsFindFirst.mockResolvedValue(userContact);
      mockUserContactsDelete.mockRejectedValue(error);

      await deleteUserContact(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("deleteAllUserContacts", () => {
    it("should delete all user contacts and return 200", async () => {
      const userId = "user-123";
      mockRequest.params = { userId };
      mockUserContactsDeleteMany.mockResolvedValue({ count: 10 });

      await deleteAllUserContacts(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserContactsDeleteMany).toHaveBeenCalledWith({
        where: { userId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalled();
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { userId: "user-123" };
      mockUserContactsDeleteMany.mockRejectedValue(error);

      await deleteAllUserContacts(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
