import { Request, Response, NextFunction } from "express";
import { INotification } from "@/types";

// Mock Prisma Client avant les imports
const mockNotificationCreate = jest.fn();
const mockNotificationFindMany = jest.fn();
const mockNotificationFindUnique = jest.fn();
const mockNotificationUpdate = jest.fn();
const mockNotificationDelete = jest.fn();

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    notification: {
      create: mockNotificationCreate,
      findMany: mockNotificationFindMany,
      findUnique: mockNotificationFindUnique,
      update: mockNotificationUpdate,
      delete: mockNotificationDelete,
    },
  })),
}));

// Mock http-errors
jest.mock("http-errors", () => ({
  __esModule: true,
  default: jest.fn((status: number, message: string) => {
    const error = new Error(message) as any;
    error.status = status;
    return error;
  }),
}));

// Import après les mocks
import {
  createNotification,
  getAllNotifications,
  getAllNotificationsByUserId,
  getNotificationById,
  updateNotification,
  deleteNotification,
} from "@/controllers/notification.controller";

describe("Notification Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock<NextFunction>;

  beforeEach(() => {
    mockRequest = {
      params: {},
      body: {},
      query: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn() as jest.Mock<NextFunction>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createNotification", () => {
    it("should create a notification and return 201", async () => {
      const notificationData = {
        userId: "user-123",
        type: "info",
        content: "Vous avez un nouveau message",
        read: false,
        actionLink: "/messages/123",
      };

      const createdNotification = {
        id: "notif-123",
        ...notificationData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.body = notificationData;
      mockNotificationCreate.mockResolvedValue(createdNotification);

      await createNotification(
        mockRequest as Request<{}, {}, INotification>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNotificationCreate).toHaveBeenCalledWith({
        data: notificationData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(createdNotification);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if creation fails", async () => {
      const error = new Error("Database error");
      mockRequest.body = {
        userId: "user-123",
        type: "info",
        content: "Test notification",
      };

      mockNotificationCreate.mockRejectedValue(error);

      await createNotification(
        mockRequest as Request<{}, {}, INotification>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllNotifications", () => {
    it("should return all notifications ordered by createdAt desc", async () => {
      const notifications = [
        {
          id: "notif-1",
          userId: "user-1",
          type: "message",
          content: "Nouveau message de Jean",
          read: false,
          actionLink: "/messages/1",
          createdAt: new Date("2025-10-22"),
          updatedAt: new Date("2025-10-22"),
        },
        {
          id: "notif-2",
          userId: "user-2",
          type: "activity",
          content: "Nouvelle activité disponible",
          read: true,
          actionLink: "/activities/2",
          createdAt: new Date("2025-10-21"),
          updatedAt: new Date("2025-10-21"),
        },
      ];

      mockNotificationFindMany.mockResolvedValue(notifications);

      await getAllNotifications(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNotificationFindMany).toHaveBeenCalledWith({
        orderBy: {
          createdAt: "desc",
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ notifications });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");

      mockNotificationFindMany.mockRejectedValue(error);

      await getAllNotifications(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getAllNotificationsByUserId", () => {
    it("should return notifications for a specific user", async () => {
      const userId = "user-123";
      const notifications = [
        {
          id: "notif-1",
          userId,
          type: "message",
          content: "Message 1",
          read: false,
          actionLink: "/messages/1",
          createdAt: new Date("2025-10-21"),
          updatedAt: new Date("2025-10-21"),
        },
        {
          id: "notif-2",
          userId,
          type: "activity",
          content: "Activité 2",
          read: true,
          actionLink: "/activities/2",
          createdAt: new Date("2025-10-22"),
          updatedAt: new Date("2025-10-22"),
        },
      ];

      mockRequest.query = { userId };
      mockNotificationFindMany.mockResolvedValue(notifications);

      await getAllNotificationsByUserId(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNotificationFindMany).toHaveBeenCalledWith({
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ notifications });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should handle missing userId in query", async () => {
      mockRequest.query = {};
      mockNotificationFindMany.mockResolvedValue([]);

      await getAllNotificationsByUserId(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNotificationFindMany).toHaveBeenCalledWith({
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId: undefined,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockRequest.query = { userId: "user-123" };
      mockNotificationFindMany.mockRejectedValue(error);

      await getAllNotificationsByUserId(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getNotificationById", () => {
    it("should return a specific notification", async () => {
      const notification = {
        id: "notif-123",
        userId: "user-123",
        type: "info",
        content: "Test notification",
        read: false,
        actionLink: "/test",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "notif-123" };
      mockNotificationFindUnique.mockResolvedValue(notification);

      await getNotificationById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNotificationFindUnique).toHaveBeenCalledWith({
        where: { id: "notif-123" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(notification);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if notification not found", async () => {
      mockRequest.params = { id: "notif-999" };
      mockNotificationFindUnique.mockResolvedValue(null);

      await getNotificationById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Notification non trouvée");
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { id: "notif-123" };
      mockNotificationFindUnique.mockRejectedValue(error);

      await getNotificationById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("updateNotification", () => {
    it("should update a notification and return 200", async () => {
      const existingNotification = {
        id: "notif-123",
        userId: "user-123",
        type: "info",
        content: "Old content",
        read: false,
        actionLink: "/old",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const updatedNotification = {
        ...existingNotification,
        content: "Updated content",
        read: true,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "notif-123" };
      mockRequest.body = {
        content: "Updated content",
        read: true,
      };

      mockNotificationFindUnique.mockResolvedValue(existingNotification);
      mockNotificationUpdate.mockResolvedValue(updatedNotification);

      await updateNotification(
        mockRequest as Request<{ id: string }, {}, INotification>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNotificationFindUnique).toHaveBeenCalledWith({
        where: { id: "notif-123" },
      });
      expect(mockNotificationUpdate).toHaveBeenCalledWith({
        where: { id: "notif-123" },
        data: expect.objectContaining({
          content: "Updated content",
          read: true,
          updatedAt: expect.any(Date),
        }),
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedNotification);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if notification not found", async () => {
      mockRequest.params = { id: "notif-999" };
      mockRequest.body = { content: "Updated content" };
      mockNotificationFindUnique.mockResolvedValue(null);

      await updateNotification(
        mockRequest as Request<{ id: string }, {}, INotification>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Notification non trouvée");
      expect(mockNotificationUpdate).not.toHaveBeenCalled();
    });

    it("should call next with error if update fails", async () => {
      const error = new Error("Database error");
      const existingNotification = {
        id: "notif-123",
        userId: "user-123",
        type: "info",
        content: "Old content",
        read: false,
      };

      mockRequest.params = { id: "notif-123" };
      mockRequest.body = { content: "Updated content" };
      mockNotificationFindUnique.mockResolvedValue(existingNotification);
      mockNotificationUpdate.mockRejectedValue(error);

      await updateNotification(
        mockRequest as Request<{ id: string }, {}, INotification>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("deleteNotification", () => {
    it("should delete a notification and return 200", async () => {
      const notification = {
        id: "notif-123",
        userId: "user-123",
        type: "info",
        content: "Test content",
        read: false,
        actionLink: "/test",
      };

      mockRequest.params = { id: "notif-123" };
      mockNotificationFindUnique.mockResolvedValue(notification);
      mockNotificationDelete.mockResolvedValue(notification);

      await deleteNotification(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNotificationFindUnique).toHaveBeenCalledWith({
        where: { id: "notif-123" },
      });
      expect(mockNotificationDelete).toHaveBeenCalledWith({
        where: { id: "notif-123" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Notification supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if notification not found", async () => {
      mockRequest.params = { id: "notif-999" };
      mockNotificationFindUnique.mockResolvedValue(null);

      await deleteNotification(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Notification non trouvée");
      expect(mockNotificationDelete).not.toHaveBeenCalled();
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      const notification = {
        id: "notif-123",
        userId: "user-123",
        type: "info",
        content: "Test content",
        read: false,
      };

      mockRequest.params = { id: "notif-123" };
      mockNotificationFindUnique.mockResolvedValue(notification);
      mockNotificationDelete.mockRejectedValue(error);

      await deleteNotification(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
