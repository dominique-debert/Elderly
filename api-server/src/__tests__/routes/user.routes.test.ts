import request from "supertest";
import express, { Express } from "express";

// Mock des contrôleurs
const mockCreateUser = jest.fn();
const mockGetAllUsers = jest.fn();
const mockGetUser = jest.fn();
const mockUpdateUser = jest.fn();
const mockDeleteUser = jest.fn();
const mockChangePassword = jest.fn();
const mockUploadAvatar = jest.fn();

// Mock multer
const mockSingle = jest.fn(() => (req: any, res: any, next: any) => {
  if (req.file) {
    req.file = {
      fieldname: "avatar",
      originalname: req.file.originalname || "avatar.jpg",
      encoding: "7bit",
      mimetype: "image/jpeg",
      destination: "public/images/avatars",
      filename: `${Date.now()}-avatar.jpg`,
      path: `public/images/avatars/${Date.now()}-avatar.jpg`,
      size: 1024,
    };
  }
  next();
});

const mockUpload = {
  single: mockSingle,
};

jest.mock("@/controllers", () => ({
  createUser: (req: any, res: any, next: any) => mockCreateUser(req, res, next),
  getAllUsers: (req: any, res: any, next: any) =>
    mockGetAllUsers(req, res, next),
  getUser: (req: any, res: any, next: any) => mockGetUser(req, res, next),
  updateUser: (req: any, res: any, next: any) => mockUpdateUser(req, res, next),
  deleteUser: (req: any, res: any, next: any) => mockDeleteUser(req, res, next),
  changePassword: (req: any, res: any, next: any) =>
    mockChangePassword(req, res, next),
  uploadAvatar: (req: any, res: any, next: any) =>
    mockUploadAvatar(req, res, next),
  upload: mockUpload,
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
  userSchema: { validate: jest.fn() },
}));

describe("User Routes", () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());

    // Import routes after mocks are set up
    const userRoutes = require("@/routes/user.routes").default;
    app.use("/api/users", userRoutes);
  });

  afterEach(() => {
    mockCreateUser.mockClear();
    mockGetAllUsers.mockClear();
    mockGetUser.mockClear();
    mockUpdateUser.mockClear();
    mockDeleteUser.mockClear();
    mockChangePassword.mockClear();
    mockUploadAvatar.mockClear();
    mockValidateMiddleware.mockClear();
  });

  describe("POST /api/users", () => {
    it("should call createUser controller", async () => {
      mockCreateUser.mockImplementation((req, res) => {
        res.status(201).json({
          user: {
            id: "user-123",
            email: "test@example.com",
            firstName: "John",
            lastName: "Doe",
          },
        });
      });

      const response = await request(app).post("/api/users").send({
        email: "test@example.com",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
      });

      expect(response.status).toBe(201);
      expect(mockCreateUser).toHaveBeenCalled();
      expect(response.body).toHaveProperty("user");
    });

    it("should validate user data before creating", async () => {
      mockCreateUser.mockImplementation((req, res) => {
        res.status(201).json({ user: {} });
      });

      await request(app).post("/api/users").send({
        email: "test@example.com",
        password: "Password123!",
      });

      expect(mockValidateMiddleware).toHaveBeenCalled();
    });

    it("should return 400 for invalid data", async () => {
      mockCreateUser.mockImplementation((req, res) => {
        res.status(400).json({ error: "Invalid email format" });
      });

      const response = await request(app).post("/api/users").send({
        email: "invalid-email",
        password: "short",
      });

      expect(response.status).toBe(400);
    });

    it("should return 409 if email already exists", async () => {
      mockCreateUser.mockImplementation((req, res) => {
        res.status(409).json({ error: "Email already in use" });
      });

      const response = await request(app).post("/api/users").send({
        email: "existing@example.com",
        password: "Password123!",
      });

      expect(response.status).toBe(409);
    });
  });

  describe("GET /api/users", () => {
    it("should call getAllUsers controller", async () => {
      mockGetAllUsers.mockImplementation((req, res) => {
        res.status(200).json({
          users: [
            {
              id: "user-1",
              email: "user1@example.com",
              firstName: "John",
              lastName: "Doe",
            },
            {
              id: "user-2",
              email: "user2@example.com",
              firstName: "Jane",
              lastName: "Smith",
            },
          ],
        });
      });

      const response = await request(app).get("/api/users");

      expect(response.status).toBe(200);
      expect(mockGetAllUsers).toHaveBeenCalled();
      expect(response.body).toHaveProperty("users");
      expect(Array.isArray(response.body.users)).toBe(true);
    });

    it("should return empty array when no users exist", async () => {
      mockGetAllUsers.mockImplementation((req, res) => {
        res.status(200).json({ users: [] });
      });

      const response = await request(app).get("/api/users");

      expect(response.status).toBe(200);
      expect(response.body.users).toEqual([]);
    });

    it("should return 500 on server error", async () => {
      mockGetAllUsers.mockImplementation((req, res) => {
        res.status(500).json({ error: "Database error" });
      });

      const response = await request(app).get("/api/users");

      expect(response.status).toBe(500);
    });
  });

  describe("GET /api/users/:id", () => {
    it("should call getUser controller", async () => {
      mockGetUser.mockImplementation((req, res) => {
        res.status(200).json({
          user: {
            id: "user-123",
            email: "test@example.com",
            firstName: "John",
            lastName: "Doe",
          },
        });
      });

      const response = await request(app).get("/api/users/user-123");

      expect(response.status).toBe(200);
      expect(mockGetUser).toHaveBeenCalled();
      expect(response.body).toHaveProperty("user");
    });

    it("should return 404 when user not found", async () => {
      mockGetUser.mockImplementation((req, res) => {
        res.status(404).json({ error: "User not found" });
      });

      const response = await request(app).get("/api/users/non-existent-id");

      expect(response.status).toBe(404);
    });

    it("should pass id parameter to controller", async () => {
      mockGetUser.mockImplementation((req, res) => {
        res.status(200).json({
          user: { id: req.params.id, email: "test@example.com" },
        });
      });

      const response = await request(app).get("/api/users/user-123");

      expect(response.body.user.id).toBe("user-123");
    });

    it("should return 500 on server error", async () => {
      mockGetUser.mockImplementation((req, res) => {
        res.status(500).json({ error: "Database error" });
      });

      const response = await request(app).get("/api/users/user-123");

      expect(response.status).toBe(500);
    });
  });

  describe("PUT /api/users/:id", () => {
    it("should call updateUser controller", async () => {
      mockUpdateUser.mockImplementation((req, res) => {
        res.status(200).json({
          user: {
            id: "user-123",
            email: "updated@example.com",
            firstName: "Jane",
            lastName: "Updated",
          },
        });
      });

      const response = await request(app).put("/api/users/user-123").send({
        email: "updated@example.com",
        firstName: "Jane",
      });

      expect(response.status).toBe(200);
      expect(mockUpdateUser).toHaveBeenCalled();
      expect(response.body).toHaveProperty("user");
    });

    it("should return 404 when user not found", async () => {
      mockUpdateUser.mockImplementation((req, res) => {
        res.status(404).json({ error: "User not found" });
      });

      const response = await request(app)
        .put("/api/users/non-existent-id")
        .send({
          firstName: "Updated",
        });

      expect(response.status).toBe(404);
    });

    it("should handle partial updates", async () => {
      mockUpdateUser.mockImplementation((req, res) => {
        res.status(200).json({
          user: { id: "user-123", firstName: "UpdatedName" },
        });
      });

      const response = await request(app).put("/api/users/user-123").send({
        firstName: "UpdatedName",
      });

      expect(response.status).toBe(200);
      expect(response.body.user.firstName).toBe("UpdatedName");
    });

    it("should return 500 on server error", async () => {
      mockUpdateUser.mockImplementation((req, res) => {
        res.status(500).json({ error: "Update failed" });
      });

      const response = await request(app).put("/api/users/user-123").send({
        firstName: "Updated",
      });

      expect(response.status).toBe(500);
    });
  });

  describe("POST /api/users/:id/avatar", () => {
    it("should call uploadAvatar controller", async () => {
      mockUploadAvatar.mockImplementation((req, res) => {
        res.status(200).json({
          user: {
            id: "user-123",
            avatar: "avatars/user-123-avatar.jpg",
          },
        });
      });

      const response = await request(app)
        .post("/api/users/user-123/avatar")
        .attach("avatar", Buffer.from("fake-image-data"), "avatar.jpg");

      expect(response.status).toBe(200);
      expect(mockUploadAvatar).toHaveBeenCalled();
    });

    it("should handle multer middleware", async () => {
      mockUploadAvatar.mockImplementation((req, res) => {
        res.status(200).json({ message: "Avatar uploaded" });
      });

      await request(app)
        .post("/api/users/user-123/avatar")
        .attach("avatar", Buffer.from("fake-image-data"), "avatar.jpg");

      expect(mockSingle).toHaveBeenCalledWith("avatar");
    });

    it("should return 404 when user not found", async () => {
      mockUploadAvatar.mockImplementation((req, res) => {
        res.status(404).json({ error: "User not found" });
      });

      const response = await request(app)
        .post("/api/users/non-existent-id/avatar")
        .attach("avatar", Buffer.from("fake-image-data"), "avatar.jpg");

      expect(response.status).toBe(404);
    });

    it("should return 400 for invalid file type", async () => {
      mockUploadAvatar.mockImplementation((req, res) => {
        res.status(400).json({ error: "Invalid file type" });
      });

      const response = await request(app)
        .post("/api/users/user-123/avatar")
        .attach("avatar", Buffer.from("fake-file"), "file.txt");

      expect(response.status).toBe(400);
    });
  });

  describe("PUT /api/users/:id/password", () => {
    it("should call changePassword controller", async () => {
      mockChangePassword.mockImplementation((req, res) => {
        res.status(200).json({ message: "Password changed successfully" });
      });

      const response = await request(app)
        .put("/api/users/user-123/password")
        .send({
          currentPassword: "OldPassword123!",
          newPassword: "NewPassword123!",
        });

      expect(response.status).toBe(200);
      expect(mockChangePassword).toHaveBeenCalled();
    });

    it("should return 401 for incorrect current password", async () => {
      mockChangePassword.mockImplementation((req, res) => {
        res.status(401).json({ error: "Current password is incorrect" });
      });

      const response = await request(app)
        .put("/api/users/user-123/password")
        .send({
          currentPassword: "WrongPassword",
          newPassword: "NewPassword123!",
        });

      expect(response.status).toBe(401);
    });

    it("should return 404 when user not found", async () => {
      mockChangePassword.mockImplementation((req, res) => {
        res.status(404).json({ error: "User not found" });
      });

      const response = await request(app)
        .put("/api/users/non-existent-id/password")
        .send({
          currentPassword: "OldPassword123!",
          newPassword: "NewPassword123!",
        });

      expect(response.status).toBe(404);
    });

    it("should return 400 for invalid new password", async () => {
      mockChangePassword.mockImplementation((req, res) => {
        res
          .status(400)
          .json({ error: "New password does not meet requirements" });
      });

      const response = await request(app)
        .put("/api/users/user-123/password")
        .send({
          currentPassword: "OldPassword123!",
          newPassword: "weak",
        });

      expect(response.status).toBe(400);
    });

    it("should validate both passwords are provided", async () => {
      mockChangePassword.mockImplementation((req, res) => {
        res.status(400).json({ error: "Both passwords are required" });
      });

      const response = await request(app)
        .put("/api/users/user-123/password")
        .send({
          currentPassword: "OldPassword123!",
        });

      expect(response.status).toBe(400);
    });
  });

  describe("DELETE /api/users/:id", () => {
    it("should call deleteUser controller", async () => {
      mockDeleteUser.mockImplementation((req, res) => {
        res.status(200).json({ message: "User deleted successfully" });
      });

      const response = await request(app).delete("/api/users/user-123");

      expect(response.status).toBe(200);
      expect(mockDeleteUser).toHaveBeenCalled();
    });

    it("should return 404 when user not found", async () => {
      mockDeleteUser.mockImplementation((req, res) => {
        res.status(404).json({ error: "User not found" });
      });

      const response = await request(app).delete("/api/users/non-existent-id");

      expect(response.status).toBe(404);
    });

    it("should pass id parameter to controller", async () => {
      mockDeleteUser.mockImplementation((req, res) => {
        res.status(200).json({
          message: `User ${req.params.id} deleted`,
        });
      });

      const response = await request(app).delete("/api/users/user-123");

      expect(response.body.message).toContain("user-123");
    });

    it("should return 500 on server error", async () => {
      mockDeleteUser.mockImplementation((req, res) => {
        res.status(500).json({ error: "Delete failed" });
      });

      const response = await request(app).delete("/api/users/user-123");

      expect(response.status).toBe(500);
    });
  });

  describe("Route configuration", () => {
    it("should have all CRUD routes configured", async () => {
      mockCreateUser.mockImplementation((req, res) => res.status(201).json({}));
      mockGetAllUsers.mockImplementation((req, res) =>
        res.status(200).json({})
      );
      mockGetUser.mockImplementation((req, res) => res.status(200).json({}));
      mockUpdateUser.mockImplementation((req, res) => res.status(200).json({}));
      mockDeleteUser.mockImplementation((req, res) => res.status(200).json({}));

      const postResponse = await request(app).post("/api/users").send({});
      expect(postResponse.status).not.toBe(404);

      const getAllResponse = await request(app).get("/api/users");
      expect(getAllResponse.status).not.toBe(404);

      const getByIdResponse = await request(app).get("/api/users/123");
      expect(getByIdResponse.status).not.toBe(404);

      const putResponse = await request(app).put("/api/users/123").send({});
      expect(putResponse.status).not.toBe(404);

      const deleteResponse = await request(app).delete("/api/users/123");
      expect(deleteResponse.status).not.toBe(404);
    });

    it("should have avatar upload route", async () => {
      mockUploadAvatar.mockImplementation((req, res) =>
        res.status(200).json({})
      );

      const response = await request(app)
        .post("/api/users/user-123/avatar")
        .attach("avatar", Buffer.from("fake-image"), "avatar.jpg");

      expect(response.status).not.toBe(404);
    });

    it("should have password change route", async () => {
      mockChangePassword.mockImplementation((req, res) =>
        res.status(200).json({})
      );

      const response = await request(app)
        .put("/api/users/user-123/password")
        .send({});

      expect(response.status).not.toBe(404);
    });

    it("should return Content-Type application/json", async () => {
      mockGetAllUsers.mockImplementation((req, res) => {
        res.status(200).json({ users: [] });
      });

      const response = await request(app).get("/api/users");

      expect(response.headers["content-type"]).toMatch(/application\/json/);
    });
  });
});
