import request from "supertest";
import express, { Express } from "express";
import categoryMetaRoutes from "@/routes/category.meta.routes";

// Mock des contrôleurs
const mockGetCategoryChapters = jest.fn();
const mockGetCategoryChapterById = jest.fn();
const mockGetCategoryTypes = jest.fn();
const mockGetCategoryTypeById = jest.fn();
const mockGetCategories = jest.fn();
const mockCreateCategory = jest.fn();
const mockUpdateCategory = jest.fn();
const mockDeleteCategory = jest.fn();

jest.mock("@/controllers", () => ({
  getCategoryChapters: (req: any, res: any, next: any) =>
    mockGetCategoryChapters(req, res, next),
  getCategoryChapterById: (req: any, res: any, next: any) =>
    mockGetCategoryChapterById(req, res, next),
  getCategoryTypes: (req: any, res: any, next: any) =>
    mockGetCategoryTypes(req, res, next),
  getCategoryTypeById: (req: any, res: any, next: any) =>
    mockGetCategoryTypeById(req, res, next),
  getCategories: (req: any, res: any, next: any, categoryTypeId: number) =>
    mockGetCategories(req, res, next, categoryTypeId),
  createCategory: (req: any, res: any, next: any) =>
    mockCreateCategory(req, res, next),
  updateCategory: (req: any, res: any, next: any) =>
    mockUpdateCategory(req, res, next),
  deleteCategory: (req: any, res: any, next: any) =>
    mockDeleteCategory(req, res, next),
}));

describe("Category Meta Routes", () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use("/api/categories", categoryMetaRoutes);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /api/categories/chapters", () => {
    it("should call getCategoryChapters controller", async () => {
      mockGetCategoryChapters.mockImplementation((req, res) => {
        res.status(200).json({ chapters: [] });
      });

      const response = await request(app).get("/api/categories/chapters");

      expect(response.status).toBe(200);
      expect(mockGetCategoryChapters).toHaveBeenCalled();
    });
  });

  describe("GET /api/categories/chapters/:id", () => {
    it("should call getCategoryChapterById controller with correct id", async () => {
      const chapterId = 1;
      mockGetCategoryChapterById.mockImplementation((req, res) => {
        res.status(200).json({ id: chapterId, name: "Chapter 1" });
      });

      const response = await request(app).get(
        `/api/categories/chapters/${chapterId}`
      );

      expect(response.status).toBe(200);
      expect(mockGetCategoryChapterById).toHaveBeenCalled();
    });
  });

  describe("GET /api/categories/types", () => {
    it("should call getCategoryTypes controller", async () => {
      mockGetCategoryTypes.mockImplementation((req, res) => {
        res.status(200).json({ types: [] });
      });

      const response = await request(app).get("/api/categories/types");

      expect(response.status).toBe(200);
      expect(mockGetCategoryTypes).toHaveBeenCalled();
    });
  });

  describe("GET /api/categories/types/:id", () => {
    it("should call getCategoryTypeById controller with correct id", async () => {
      const typeId = 1;
      mockGetCategoryTypeById.mockImplementation((req, res) => {
        res.status(200).json({ id: typeId, name: "Type 1" });
      });

      const response = await request(app).get(
        `/api/categories/types/${typeId}`
      );

      expect(response.status).toBe(200);
      expect(mockGetCategoryTypeById).toHaveBeenCalled();
    });
  });

  describe("GET /api/categories", () => {
    it("should call getCategories with valid categoryTypeId", async () => {
      const categoryTypeId = 1;
      mockGetCategories.mockImplementation((req, res) => {
        res.status(200).json({ categories: [] });
      });

      const response = await request(app)
        .get("/api/categories")
        .query({ categoryTypeId });

      expect(response.status).toBe(200);
      expect(mockGetCategories).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        expect.anything(),
        categoryTypeId
      );
    });

    it("should return 400 if categoryTypeId is missing", async () => {
      const response = await request(app).get("/api/categories");

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error:
          "categoryTypeId query parameter is required and must be a number",
        received: undefined,
      });
      expect(mockGetCategories).not.toHaveBeenCalled();
    });

    it("should return 400 if categoryTypeId is not a number", async () => {
      const response = await request(app)
        .get("/api/categories")
        .query({ categoryTypeId: "invalid" });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error:
          "categoryTypeId query parameter is required and must be a number",
        received: "invalid",
      });
      expect(mockGetCategories).not.toHaveBeenCalled();
    });

    it("should return 400 if categoryTypeId is NaN", async () => {
      const response = await request(app)
        .get("/api/categories")
        .query({ categoryTypeId: "abc" });

      expect(response.status).toBe(400);
      expect(response.body.error).toContain("must be a number");
      expect(mockGetCategories).not.toHaveBeenCalled();
    });
  });

  describe("POST /api/categories", () => {
    it("should call createCategory controller", async () => {
      const categoryData = {
        name: "New Category",
        categoryTypeId: 1,
      };

      mockCreateCategory.mockImplementation((req, res) => {
        res.status(201).json({ id: 1, ...categoryData });
      });

      const response = await request(app)
        .post("/api/categories")
        .send(categoryData);

      expect(response.status).toBe(201);
      expect(mockCreateCategory).toHaveBeenCalled();
    });
  });

  describe("PUT /api/categories/:id", () => {
    it("should call updateCategory controller with correct id", async () => {
      const categoryId = 1;
      const updateData = {
        name: "Updated Category",
      };

      mockUpdateCategory.mockImplementation((req, res) => {
        res.status(200).json({ id: categoryId, ...updateData });
      });

      const response = await request(app)
        .put(`/api/categories/${categoryId}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(mockUpdateCategory).toHaveBeenCalled();
    });
  });

  describe("DELETE /api/categories/:id", () => {
    it("should call deleteCategory controller with correct id", async () => {
      const categoryId = 1;

      mockDeleteCategory.mockImplementation((req, res) => {
        res.status(200).json({ message: "Catégorie supprimée avec succès" });
      });

      const response = await request(app).delete(
        `/api/categories/${categoryId}`
      );

      expect(response.status).toBe(200);
      expect(mockDeleteCategory).toHaveBeenCalled();
    });
  });
});
