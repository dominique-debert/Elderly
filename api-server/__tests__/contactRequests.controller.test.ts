import { Request, Response, NextFunction } from "express";
import { IUserContact } from "@/types";

// Mock Prisma Client avant les imports
const mockContactRequestCreate = jest.fn();
const mockContactRequestFindMany = jest.fn();
const mockContactRequestFindFirst = jest.fn();
const mockContactRequestUpdate = jest.fn();
const mockContactRequestDelete = jest.fn();
const mockContactRequestDeleteMany = jest.fn();

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    contactRequest: {
      create: mockContactRequestCreate,
      findMany: mockContactRequestFindMany,
      findFirst: mockContactRequestFindFirst,
      update: mockContactRequestUpdate,
      delete: mockContactRequestDelete,
      deleteMany: mockContactRequestDeleteMany,
    },
  })),
}));

// Import après le mock
import {
  createUserContactRequest,
  getAllUserContactRequests,
  getUserContactRequest,
  updateUserContactRequest,
  deleteUserContactRequest,
  deleteAllUserContactRequests,
} from "@/controllers/contactRequests.controller";

describe("Contact Requests Controller", () => {
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

  describe("createUserContactRequest", () => {
    it("should create a contact request and return 201", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const contactRequestData = {
        id: "request-1",
        userId,
        contactId,
        status: "pending",
        message: "Hello!",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId, contactId };
      mockRequest.body = { message: "Hello!", status: "pending" };

      mockContactRequestCreate.mockResolvedValue(contactRequestData);

      await createUserContactRequest(
        mockRequest as Request<
          { userId: string; contactId: string },
          {},
          IUserContact
        >,
        mockResponse as Response,
        mockNext
      );

      expect(mockContactRequestCreate).toHaveBeenCalledWith({
        data: {
          message: "Hello!",
          status: "pending",
          userId,
          contactId,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(contactRequestData);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if creation fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockRequest.body = { message: "Hello!" };

      mockContactRequestCreate.mockRejectedValue(error);

      await createUserContactRequest(
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

  describe("getAllUserContactRequests", () => {
    it("should return all contact requests for a user", async () => {
      const userId = "user-123";
      const contactRequests = [
        {
          id: "1",
          userId,
          contactId: "contact-1",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "2",
          userId,
          contactId: "contact-2",
          status: "accepted",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockRequest.params = { userId };
      mockContactRequestFindMany.mockResolvedValue(contactRequests);

      await getAllUserContactRequests(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockContactRequestFindMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "desc" },
        where: { userId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ contactRequests });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { userId: "user-123" };

      mockContactRequestFindMany.mockRejectedValue(error);

      await getAllUserContactRequests(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getUserContactRequest", () => {
    it("should return a specific contact request", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const contactRequest = {
        id: "1",
        userId,
        contactId,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId, contactId };
      mockContactRequestFindFirst.mockResolvedValue(contactRequest);

      await getUserContactRequest(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockContactRequestFindFirst).toHaveBeenCalledWith({
        where: { userId, contactId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(contactRequest);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if contact request not found", async () => {
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockContactRequestFindFirst.mockResolvedValue(null);

      await getUserContactRequest(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Demande de contact non trouvée");
    });
  });

  describe("updateUserContactRequest", () => {
    it("should update a contact request and return 200", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const existingRequest = {
        id: "request-1",
        userId,
        contactId,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updatedRequest = {
        ...existingRequest,
        status: "accepted",
        updatedAt: new Date(),
      };

      mockRequest.params = { userId, contactId };
      mockRequest.body = { status: "accepted" };
      mockContactRequestFindFirst.mockResolvedValue(existingRequest);
      mockContactRequestUpdate.mockResolvedValue(updatedRequest);

      await updateUserContactRequest(
        mockRequest as Request<
          { userId: string; contactId: string },
          {},
          IUserContact
        >,
        mockResponse as Response,
        mockNext
      );

      expect(mockContactRequestFindFirst).toHaveBeenCalledWith({
        where: { userId, contactId },
      });
      expect(mockContactRequestUpdate).toHaveBeenCalledWith({
        where: { id: "request-1" },
        data: { status: "accepted" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedRequest);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if contact request not found", async () => {
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockRequest.body = { status: "accepted" };
      mockContactRequestFindFirst.mockResolvedValue(null);

      await updateUserContactRequest(
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
      expect(error.message).toBe("Demande de contact non trouvée");
      expect(mockContactRequestUpdate).not.toHaveBeenCalled();
    });

    it("should call next with error if update fails", async () => {
      const error = new Error("Database error");
      const existingRequest = {
        id: "request-1",
        userId: "user-123",
        contactId: "contact-456",
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockRequest.body = { status: "accepted" };
      mockContactRequestFindFirst.mockResolvedValue(existingRequest);
      mockContactRequestUpdate.mockRejectedValue(error);

      await updateUserContactRequest(
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

  describe("deleteUserContactRequest", () => {
    it("should delete a contact request and return 204", async () => {
      const userId = "user-123";
      const contactId = "contact-456";
      const contactRequest = {
        id: "request-1",
        userId,
        contactId,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId, contactId };
      mockContactRequestFindFirst.mockResolvedValue(contactRequest);
      mockContactRequestDelete.mockResolvedValue(contactRequest);

      await deleteUserContactRequest(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockContactRequestFindFirst).toHaveBeenCalledWith({
        where: { userId, contactId },
      });
      expect(mockContactRequestDelete).toHaveBeenCalledWith({
        where: { id: "request-1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled();
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if contact request not found", async () => {
      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockContactRequestFindFirst.mockResolvedValue(null);

      await deleteUserContactRequest(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Demande de contact non trouvée");
      expect(mockContactRequestDelete).not.toHaveBeenCalled();
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      const contactRequest = {
        id: "request-1",
        userId: "user-123",
        contactId: "contact-456",
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { userId: "user-123", contactId: "contact-456" };
      mockContactRequestFindFirst.mockResolvedValue(contactRequest);
      mockContactRequestDelete.mockRejectedValue(error);

      await deleteUserContactRequest(
        mockRequest as Request<{ userId: string; contactId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("deleteAllUserContactRequests", () => {
    it("should delete all contact requests for a user and return 204", async () => {
      const userId = "user-123";
      mockRequest.params = { userId };
      mockContactRequestDeleteMany.mockResolvedValue({ count: 5 });

      await deleteAllUserContactRequests(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockContactRequestDeleteMany).toHaveBeenCalledWith({
        where: { userId },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled();
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { userId: "user-123" };
      mockContactRequestDeleteMany.mockRejectedValue(error);

      await deleteAllUserContactRequests(
        mockRequest as Request<{ userId: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
