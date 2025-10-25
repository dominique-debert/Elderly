import request from "supertest";
import express, { Express } from "express";

// Mock du contrôleur
const mockGetAllMenuItems = jest.fn();

jest.mock("@/controllers", () => ({
  getAllMenuItems: (req: any, res: any, next: any) =>
    mockGetAllMenuItems(req, res, next),
}));

describe("MenuItem Routes", () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());

    // Import routes after mocks are set up
    const menuItemRoutes = require("@/routes/menuItem.routes").default;
    app.use("/api/menu-items", menuItemRoutes);
  });

  afterEach(() => {
    mockGetAllMenuItems.mockClear();
  });

  describe("GET /api/menu-items", () => {
    it("should call getAllMenuItems controller", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({
          menuItems: [
            {
              id: "item-1",
              title: "Dashboard",
              icon: "dashboard",
              path: "/dashboard",
              order: 1,
            },
            {
              id: "item-2",
              title: "Users",
              icon: "users",
              path: "/users",
              order: 2,
            },
          ],
        });
      });

      const response = await request(app).get("/api/menu-items");

      expect(response.status).toBe(200);
      expect(mockGetAllMenuItems).toHaveBeenCalled();
      expect(response.body).toHaveProperty("menuItems");
      expect(Array.isArray(response.body.menuItems)).toBe(true);
    });

    it("should return empty array when no menu items exist", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({
          menuItems: [],
        });
      });

      const response = await request(app).get("/api/menu-items");

      expect(response.status).toBe(200);
      expect(response.body.menuItems).toEqual([]);
    });

    it("should return menu items with correct structure", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({
          menuItems: [
            {
              id: "item-1",
              title: "Dashboard",
              icon: "dashboard",
              path: "/dashboard",
              order: 1,
            },
          ],
        });
      });

      const response = await request(app).get("/api/menu-items");

      expect(response.status).toBe(200);
      expect(response.body.menuItems[0]).toHaveProperty("id");
      expect(response.body.menuItems[0]).toHaveProperty("title");
      expect(response.body.menuItems[0]).toHaveProperty("icon");
      expect(response.body.menuItems[0]).toHaveProperty("path");
      expect(response.body.menuItems[0]).toHaveProperty("order");
    });

    it("should return 500 on server error", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(500).json({
          error: "Internal server error",
        });
      });

      const response = await request(app).get("/api/menu-items");

      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty("error");
    });

    it("should handle multiple menu items", async () => {
      const menuItems = Array.from({ length: 5 }, (_, i) => ({
        id: `item-${i + 1}`,
        title: `Menu Item ${i + 1}`,
        icon: `icon-${i + 1}`,
        path: `/path-${i + 1}`,
        order: i + 1,
      }));

      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({ menuItems });
      });

      const response = await request(app).get("/api/menu-items");

      expect(response.status).toBe(200);
      expect(response.body.menuItems).toHaveLength(5);
    });

    it("should return menu items sorted by order", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({
          menuItems: [
            { id: "item-1", title: "First", order: 1 },
            { id: "item-2", title: "Second", order: 2 },
            { id: "item-3", title: "Third", order: 3 },
          ],
        });
      });

      const response = await request(app).get("/api/menu-items");

      expect(response.status).toBe(200);
      expect(response.body.menuItems[0].order).toBe(1);
      expect(response.body.menuItems[1].order).toBe(2);
      expect(response.body.menuItems[2].order).toBe(3);
    });

    it("should handle menu items with nested children", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({
          menuItems: [
            {
              id: "item-1",
              title: "Settings",
              icon: "settings",
              path: "/settings",
              order: 1,
              children: [
                {
                  id: "item-1-1",
                  title: "Profile",
                  path: "/settings/profile",
                  order: 1,
                },
                {
                  id: "item-1-2",
                  title: "Security",
                  path: "/settings/security",
                  order: 2,
                },
              ],
            },
          ],
        });
      });

      const response = await request(app).get("/api/menu-items");

      expect(response.status).toBe(200);
      expect(response.body.menuItems[0]).toHaveProperty("children");
      expect(Array.isArray(response.body.menuItems[0].children)).toBe(true);
      expect(response.body.menuItems[0].children).toHaveLength(2);
    });

    it("should not require authentication", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({ menuItems: [] });
      });

      const response = await request(app).get("/api/menu-items");

      expect(response.status).not.toBe(401);
      expect(response.status).not.toBe(403);
    });

    it("should accept GET method only", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({ menuItems: [] });
      });

      const getResponse = await request(app).get("/api/menu-items");
      expect(getResponse.status).toBe(200);

      const postResponse = await request(app).post("/api/menu-items");
      expect(postResponse.status).toBe(404);

      const putResponse = await request(app).put("/api/menu-items");
      expect(putResponse.status).toBe(404);

      const deleteResponse = await request(app).delete("/api/menu-items");
      expect(deleteResponse.status).toBe(404);
    });

    it("should call controller exactly once per request", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({ menuItems: [] });
      });

      await request(app).get("/api/menu-items");

      expect(mockGetAllMenuItems).toHaveBeenCalledTimes(1);
    });

    it("should handle controller throwing error", async () => {
      mockGetAllMenuItems.mockImplementation((req, res, next) => {
        next(new Error("Database connection failed"));
      });

      const response = await request(app).get("/api/menu-items");

      expect(mockGetAllMenuItems).toHaveBeenCalled();
    });

    it("should return Content-Type application/json", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({ menuItems: [] });
      });

      const response = await request(app).get("/api/menu-items");

      expect(response.headers["content-type"]).toMatch(/application\/json/);
    });
  });

  describe("Route configuration", () => {
    it("should have GET / route mounted at /api/menu-items", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({ menuItems: [] });
      });

      const response = await request(app).get("/api/menu-items");

      expect(response.status).not.toBe(404);
    });

    it("should match /api/menu-items with or without trailing slash", async () => {
      mockGetAllMenuItems.mockImplementation((req, res) => {
        res.status(200).json({ menuItems: [] });
      });

      const responseWithoutSlash = await request(app).get("/api/menu-items");
      expect(responseWithoutSlash.status).toBe(200);

      const responseWithSlash = await request(app).get("/api/menu-items/");
      expect(responseWithSlash.status).toBe(200);
    });

    it("should not match /api/menu-items/:id", async () => {
      const response = await request(app).get("/api/menu-items/123");

      expect(response.status).toBe(404);
    });
  });
});
