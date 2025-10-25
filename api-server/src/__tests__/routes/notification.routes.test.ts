import request from "supertest";
import express, { Express } from "express";

// Mock des contrôleurs
const mockCreateNotification = jest.fn();
const mockGetAllNotifications = jest.fn();
const mockGetAllNotificationsByUserId = jest.fn();
const mockGetNotificationById = jest.fn();
const mockUpdateNotification = jest.fn();
const mockDeleteNotification = jest.fn();

jest.mock("@/controllers", () => ({
  createNotification: (req: any, res: any, next: any) =>
    mockCreateNotification(req, res, next),
  getAllNotifications: (req: any, res: any, next: any) =>
    mockGetAllNotifications(req, res, next),
  getAllNotificationsByUserId: (req: any, res: any, next: any) =>
    mockGetAllNotificationsByUserId(req, res, next),
  getNotificationById: (req: any, res: any, next: any) =>
    mockGetNotificationById(req, res, next),
  updateNotification: (req: any, res: any, next: any) =>
    mockUpdateNotification(req, res, next),
  deleteNotification: (req: any, res: any, next: any) =>
    mockDeleteNotification(req, res, next),
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
  notificationSchema: { validate: jest.fn() },
}));

describe("Notification Routes", () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());

    // Import routes after mocks are set up
    const notificationRoutes = require("@/routes/notification.routes").default;
    app.use("/api/notifications", notificationRoutes);
  });

  afterEach(() => {
    mockCreateNotification.mockClear();
    mockGetAllNotifications.mockClear();
    mockGetAllNotificationsByUserId.mockClear();
    mockGetNotificationById.mockClear();
    mockUpdateNotification.mockClear();
    mockDeleteNotification.mockClear();
    mockValidateMiddleware.mockClear();
  });

  describe("POST /api/notifications", () => {
    it("should call createNotification controller", async () => {
      mockCreateNotification.mockImplementation((req, res) => {
        res.status(201).json({
          notification: {
            id: "notif-123",
            userId: "user-123",
            title: "New Message",
            message: "You have a new message",
            type: "info",
            isRead: false,
          },
        });
      });

      const response = await request(app).post("/api/notifications").send({
        userId: "user-123",
        title: "New Message",
        message: "You have a new message",
        type: "info",
      });

      expect(response.status).toBe(201);
      expect(mockCreateNotification).toHaveBeenCalled();
      expect(response.body).toHaveProperty("notification");
    });

    it("should validate notification data before creating", async () => {
      mockCreateNotification.mockImplementation((req, res) => {
        res.status(201).json({ notification: {} });
      });

      await request(app).post("/api/notifications").send({
        userId: "user-123",
        title: "Test",
      });

      expect(mockValidateMiddleware).toHaveBeenCalled();
    });

    it("should return 500 on server error", async () => {
      mockCreateNotification.mockImplementation((req, res) => {
        res.status(500).json({ error: "Internal server error" });
      });

      const response = await request(app).post("/api/notifications").send({
        userId: "user-123",
      });

      expect(response.status).toBe(500);
    });
  });

  describe("GET /api/notifications", () => {
    it("should call getAllNotifications controller", async () => {
      mockGetAllNotifications.mockImplementation((req, res) => {
        res.status(200).json({
          notifications: [
            {
              id: "notif-1",
              userId: "user-123",
              title: "Welcome",
              isRead: false,
            },
            {
              id: "notif-2",
              userId: "user-456",
              title: "Update",
              isRead: true,
            },
          ],
        });
      });

      const response = await request(app).get("/api/notifications");

      expect(response.status).toBe(200);
      expect(mockGetAllNotifications).toHaveBeenCalled();
      expect(response.body).toHaveProperty("notifications");
      expect(Array.isArray(response.body.notifications)).toBe(true);
    });

    it("should return empty array when no notifications exist", async () => {
      mockGetAllNotifications.mockImplementation((req, res) => {
        res.status(200).json({ notifications: [] });
      });

      const response = await request(app).get("/api/notifications");

      expect(response.status).toBe(200);
      expect(response.body.notifications).toEqual([]);
    });

    it("should return 500 on server error", async () => {
      mockGetAllNotifications.mockImplementation((req, res) => {
        res.status(500).json({ error: "Database error" });
      });

      const response = await request(app).get("/api/notifications");

      expect(response.status).toBe(500);
    });
  });

  describe("GET /api/notifications/:userId", () => {
    it("should call getAllNotificationsByUserId controller", async () => {
      mockGetAllNotificationsByUserId.mockImplementation((req, res) => {
        res.status(200).json({
          notifications: [
            {
              id: "notif-1",
              userId: "user-123",
              title: "Welcome",
              isRead: false,
            },
            {
              id: "notif-2",
              userId: "user-123",
              title: "Update",
              isRead: true,
            },
          ],
        });
      });

      const response = await request(app).get("/api/notifications/user-123");

      expect(response.status).toBe(200);
      expect(mockGetAllNotificationsByUserId).toHaveBeenCalled();
      expect(response.body).toHaveProperty("notifications");
    });

    it("should return empty array when user has no notifications", async () => {
      mockGetAllNotificationsByUserId.mockImplementation((req, res) => {
        res.status(200).json({ notifications: [] });
      });

      const response = await request(app).get("/api/notifications/user-999");

      expect(response.status).toBe(200);
      expect(response.body.notifications).toEqual([]);
    });

    it("should pass userId parameter to controller", async () => {
      mockGetAllNotificationsByUserId.mockImplementation((req, res) => {
        res.status(200).json({
          notifications: [],
          userId: req.params.userId,
        });
      });

      const response = await request(app).get("/api/notifications/user-123");

      expect(response.body.userId).toBe("user-123");
    });

    it("should return 500 on server error", async () => {
      mockGetAllNotificationsByUserId.mockImplementation((req, res) => {
        res.status(500).json({ error: "Database error" });
      });

      const response = await request(app).get("/api/notifications/user-123");

      expect(response.status).toBe(500);
    });
  });

  describe("GET /api/notifications/:param (route behavior)", () => {
    it("should match getAllNotificationsByUserId for any :param", async () => {
      // Note: Since getNotificationById route is commented out,
      // ALL GET /:param requests will be handled by getAllNotificationsByUserId
      mockGetAllNotificationsByUserId.mockImplementation((req, res) => {
        res.status(200).json({
          notifications: [],
          matchedRoute: "getAllNotificationsByUserId",
          param: req.params.userId,
        });
      });

      const response = await request(app).get("/api/notifications/any-id-123");

      expect(response.status).toBe(200);
      expect(mockGetAllNotificationsByUserId).toHaveBeenCalled();
      expect(mockGetNotificationById).not.toHaveBeenCalled();
    });

    it("should handle 404 when userId has no notifications", async () => {
      mockGetAllNotificationsByUserId.mockImplementation((req, res) => {
        res.status(404).json({ error: "No notifications found" });
      });

      const response = await request(app).get("/api/notifications/notif-123");

      expect(response.status).toBe(404);
      expect(mockGetAllNotificationsByUserId).toHaveBeenCalled();
    });

    it("should handle server errors", async () => {
      mockGetAllNotificationsByUserId.mockImplementation((req, res) => {
        res.status(500).json({ error: "Database error" });
      });

      const response = await request(app).get("/api/notifications/any-id");

      expect(response.status).toBe(500);
    });
  });

  describe("PUT /api/notifications/:id", () => {
    it("should call updateNotification controller", async () => {
      mockUpdateNotification.mockImplementation((req, res) => {
        res.status(200).json({
          notification: {
            id: "notif-123",
            userId: "user-123",
            title: "Updated Title",
            isRead: true,
          },
        });
      });

      const response = await request(app)
        .put("/api/notifications/notif-123")
        .send({
          title: "Updated Title",
          isRead: true,
        });

      expect(response.status).toBe(200);
      expect(mockUpdateNotification).toHaveBeenCalled();
      expect(response.body).toHaveProperty("notification");
    });

    it("should return 404 when notification not found", async () => {
      mockUpdateNotification.mockImplementation((req, res) => {
        res.status(404).json({ error: "Notification not found" });
      });

      const response = await request(app)
        .put("/api/notifications/non-existent-id")
        .send({
          isRead: true,
        });

      expect(response.status).toBe(404);
    });

    it("should handle marking notification as read", async () => {
      mockUpdateNotification.mockImplementation((req, res) => {
        res.status(200).json({
          notification: { id: "notif-123", isRead: true },
        });
      });

      const response = await request(app)
        .put("/api/notifications/notif-123")
        .send({
          isRead: true,
        });

      expect(response.status).toBe(200);
      expect(response.body.notification.isRead).toBe(true);
    });

    it("should return 500 on server error", async () => {
      mockUpdateNotification.mockImplementation((req, res) => {
        res.status(500).json({ error: "Update failed" });
      });

      const response = await request(app)
        .put("/api/notifications/notif-123")
        .send({
          isRead: true,
        });

      expect(response.status).toBe(500);
    });
  });

  describe("DELETE /api/notifications/:id", () => {
    it("should call deleteNotification controller", async () => {
      mockDeleteNotification.mockImplementation((req, res) => {
        res.status(200).json({ message: "Notification deleted successfully" });
      });

      const response = await request(app).delete(
        "/api/notifications/notif-123"
      );

      expect(response.status).toBe(200);
      expect(mockDeleteNotification).toHaveBeenCalled();
    });

    it("should return 404 when notification not found", async () => {
      mockDeleteNotification.mockImplementation((req, res) => {
        res.status(404).json({ error: "Notification not found" });
      });

      const response = await request(app).delete(
        "/api/notifications/non-existent-id"
      );

      expect(response.status).toBe(404);
    });

    it("should pass id parameter to controller", async () => {
      mockDeleteNotification.mockImplementation((req, res) => {
        res.status(200).json({
          message: `Notification ${req.params.id} deleted`,
        });
      });

      const response = await request(app).delete(
        "/api/notifications/notif-123"
      );

      expect(response.body.message).toContain("notif-123");
    });

    it("should return 500 on server error", async () => {
      mockDeleteNotification.mockImplementation((req, res) => {
        res.status(500).json({ error: "Delete failed" });
      });

      const response = await request(app).delete(
        "/api/notifications/notif-123"
      );

      expect(response.status).toBe(500);
    });
  });

  describe("Route configuration", () => {
    it("should have all active routes configured", async () => {
      mockCreateNotification.mockImplementation((req, res) =>
        res.status(201).json({})
      );
      mockGetAllNotifications.mockImplementation((req, res) =>
        res.status(200).json({})
      );
      mockGetAllNotificationsByUserId.mockImplementation((req, res) =>
        res.status(200).json({})
      );
      mockUpdateNotification.mockImplementation((req, res) =>
        res.status(200).json({})
      );
      mockDeleteNotification.mockImplementation((req, res) =>
        res.status(200).json({})
      );

      const postResponse = await request(app)
        .post("/api/notifications")
        .send({});
      expect(postResponse.status).not.toBe(404);

      const getAllResponse = await request(app).get("/api/notifications");
      expect(getAllResponse.status).not.toBe(404);

      const getByParamResponse = await request(app).get(
        "/api/notifications/test-123"
      );
      expect(getByParamResponse.status).not.toBe(404);

      const putResponse = await request(app)
        .put("/api/notifications/notif-123")
        .send({});
      expect(putResponse.status).not.toBe(404);

      const deleteResponse = await request(app).delete(
        "/api/notifications/notif-123"
      );
      expect(deleteResponse.status).not.toBe(404);
    });

    it("should return Content-Type application/json", async () => {
      mockGetAllNotifications.mockImplementation((req, res) => {
        res.status(200).json({ notifications: [] });
      });

      const response = await request(app).get("/api/notifications");

      expect(response.headers["content-type"]).toMatch(/application\/json/);
    });

    it("should note that getNotificationById route is commented out", () => {
      // Documentation: The route router.get("/:id", getNotificationById) is commented out
      // This means all GET /:param requests are handled by getAllNotificationsByUserId
      // If you need to get a single notification by ID, consider:
      // 1. Using a different route pattern (e.g., /notification/:id)
      // 2. Or moving user notifications to /user/:userId/notifications
      expect(true).toBe(true);
    });
  });
});
