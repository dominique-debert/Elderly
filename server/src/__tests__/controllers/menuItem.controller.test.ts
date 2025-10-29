import { Request, Response, NextFunction } from "express";

// Mock Prisma Client avant les imports
const mockMenuItemFindMany = jest.fn();

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    menuItem: {
      findMany: mockMenuItemFindMany,
    },
  })),
}));

// Import après le mock
import { getAllMenuItems } from "@/controllers/menuItem.controller";

describe("MenuItem Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock<NextFunction>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn() as jest.Mock<NextFunction>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAllMenuItems", () => {
    it("should return all menu items ordered by label", async () => {
      const menuItems = [
        { id: "1", label: "Accueil", icon: "home", path: "/", order: 1 },
        { id: "2", label: "Profil", icon: "user", path: "/profile", order: 2 },
        {
          id: "3",
          label: "Settings",
          icon: "settings",
          path: "/settings",
          order: 3,
        },
      ];

      mockMenuItemFindMany.mockResolvedValue(menuItems);

      await getAllMenuItems(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockMenuItemFindMany).toHaveBeenCalledWith({
        orderBy: { label: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ menuItems });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return empty array if no menu items found", async () => {
      mockMenuItemFindMany.mockResolvedValue([]);

      await getAllMenuItems(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockMenuItemFindMany).toHaveBeenCalledWith({
        orderBy: { label: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ menuItems: [] });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");

      mockMenuItemFindMany.mockRejectedValue(error);

      await getAllMenuItems(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
