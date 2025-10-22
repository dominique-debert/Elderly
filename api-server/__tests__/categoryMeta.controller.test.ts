import { Request, Response, NextFunction } from "express";

// Mock Prisma Client avant les imports
const mockCategoryChapterFindMany = jest.fn();
const mockCategoryChapterFindUnique = jest.fn();
const mockCategoryTypeFindMany = jest.fn();
const mockCategoryTypeFindUnique = jest.fn();
const mockCategoryFindMany = jest.fn();
const mockCategoryFindUnique = jest.fn();
const mockCategoryCreate = jest.fn();
const mockCategoryUpdate = jest.fn();
const mockCategoryDelete = jest.fn();

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    categoryChapter: {
      findMany: mockCategoryChapterFindMany,
      findUnique: mockCategoryChapterFindUnique,
    },
    categoryType: {
      findMany: mockCategoryTypeFindMany,
      findUnique: mockCategoryTypeFindUnique,
    },
    category: {
      findMany: mockCategoryFindMany,
      findUnique: mockCategoryFindUnique,
      create: mockCategoryCreate,
      update: mockCategoryUpdate,
      delete: mockCategoryDelete,
    },
  })),
}));

// Import après le mock
import {
  getCategoryChapters,
  getCategoryChapterById,
  getCategoryTypes,
  getCategoryTypeById,
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "@/controllers/categories/category.meta.controller";

describe("Category Meta Controller", () => {
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
    };
    mockNext = jest.fn() as jest.Mock<NextFunction>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getCategoryChapters", () => {
    it("should return all category chapters", async () => {
      const chapters = [
        { chapterId: 1, chapterName: "Chapter 1" },
        { chapterId: 2, chapterName: "Chapter 2" },
      ];

      mockCategoryChapterFindMany.mockResolvedValue(chapters);

      await getCategoryChapters(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockCategoryChapterFindMany).toHaveBeenCalledWith({
        select: {
          chapterId: true,
          chapterName: true,
        },
        orderBy: { chapterName: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(chapters);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return empty array if no chapters found", async () => {
      mockCategoryChapterFindMany.mockResolvedValue(null);

      await getCategoryChapters(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith([]);
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockCategoryChapterFindMany.mockRejectedValue(error);

      await getCategoryChapters(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getCategoryChapterById", () => {
    it("should return a specific chapter", async () => {
      const chapter = { chapterId: 1, chapterName: "Chapter 1" };
      mockRequest.params = { id: "1" };
      mockCategoryChapterFindUnique.mockResolvedValue(chapter);

      await getCategoryChapterById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockCategoryChapterFindUnique).toHaveBeenCalledWith({
        where: { chapterId: 1 },
        select: {
          chapterId: true,
          chapterName: true,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(chapter);
    });

    it("should return null if chapter not found", async () => {
      mockRequest.params = { id: "999" };
      mockCategoryChapterFindUnique.mockResolvedValue(null);

      await getCategoryChapterById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(null);
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockCategoryChapterFindUnique.mockRejectedValue(error);

      await getCategoryChapterById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getCategoryTypes", () => {
    it("should return all category types", async () => {
      const types = [
        { id: 1, name: "Type 1" },
        { id: 2, name: "Type 2" },
      ];

      mockCategoryTypeFindMany.mockResolvedValue(types);

      await getCategoryTypes(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockCategoryTypeFindMany).toHaveBeenCalledWith({
        select: {
          id: true,
          name: true,
        },
        orderBy: { name: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(types);
    });

    it("should return empty array if no types found", async () => {
      mockCategoryTypeFindMany.mockResolvedValue(null);

      await getCategoryTypes(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith([]);
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockCategoryTypeFindMany.mockRejectedValue(error);

      await getCategoryTypes(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getCategoryTypeById", () => {
    it("should return a specific type", async () => {
      const type = { id: 1, name: "Type 1" };
      mockRequest.params = { id: "1" };
      mockCategoryTypeFindUnique.mockResolvedValue(type);

      await getCategoryTypeById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockCategoryTypeFindUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        select: {
          id: true,
          name: true,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(type);
    });

    it("should return null if type not found", async () => {
      mockRequest.params = { id: "999" };
      mockCategoryTypeFindUnique.mockResolvedValue(null);

      await getCategoryTypeById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(null);
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockCategoryTypeFindUnique.mockRejectedValue(error);

      await getCategoryTypeById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getCategories", () => {
    it("should return categories for a specific type", async () => {
      const categories = [
        {
          id: 1,
          categoryName: "Cat 1",
          description: "Desc 1",
          chapterId: 1,
          typeId: 1,
          categoryType: { id: 1, name: "Type 1" },
          categoryChapter: {
            chapterId: 1,
            chapterName: "Chapter 1",
            chapterDescription: "Desc",
          },
        },
      ];

      mockCategoryFindMany.mockResolvedValue(categories);

      await getCategories(
        mockRequest as Request,
        mockResponse as Response,
        mockNext,
        1
      );

      expect(mockCategoryFindMany).toHaveBeenCalledWith({
        where: { typeId: 1 },
        orderBy: { categoryName: "asc" },
        include: {
          categoryType: {
            select: {
              id: true,
              name: true,
            },
          },
          categoryChapter: {
            select: {
              chapterId: true,
              chapterName: true,
              chapterDescription: true,
            },
          },
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(categories);
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockCategoryFindMany.mockRejectedValue(error);

      await getCategories(
        mockRequest as Request,
        mockResponse as Response,
        mockNext,
        1
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getCategoryById", () => {
    it("should return a specific category", async () => {
      const category = {
        id: 1,
        categoryName: "Cat 1",
        description: "Desc 1",
        chapterId: 1,
        typeId: 1,
        categoryType: { id: 1, name: "Type 1" },
        categoryChapter: {
          chapterId: 1,
          chapterName: "Chapter 1",
          chapterDescription: "Desc",
        },
      };

      mockRequest.params = { id: "1" };
      mockCategoryFindUnique.mockResolvedValue(category);

      await getCategoryById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockCategoryFindUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        include: {
          categoryType: {
            select: {
              id: true,
              name: true,
            },
          },
          categoryChapter: {
            select: {
              chapterId: true,
              chapterName: true,
              chapterDescription: true,
            },
          },
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(category);
    });

    it("should return 404 if category not found", async () => {
      mockRequest.params = { id: "999" };
      mockCategoryFindUnique.mockResolvedValue(null);

      await getCategoryById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: "Category not found",
      });
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockCategoryFindUnique.mockRejectedValue(error);

      await getCategoryById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("createCategory", () => {
    it("should create a category and return 201", async () => {
      const categoryData = {
        id: 1,
        categoryName: "New Cat",
        description: "New Desc",
        chapterId: 1,
        typeId: 1,
        categoryType: { id: 1, name: "Type 1" },
        categoryChapter: { chapterId: 1, chapterName: "Chapter 1" },
      };

      mockRequest.body = {
        categoryName: "New Cat",
        description: "New Desc",
        chapterId: 1,
        typeId: 1,
      };

      mockCategoryCreate.mockResolvedValue(categoryData);

      await createCategory(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockCategoryCreate).toHaveBeenCalledWith({
        data: {
          categoryName: "New Cat",
          description: "New Desc",
          chapterId: 1,
          typeId: 1,
        },
        include: {
          categoryType: true,
          categoryChapter: true,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(categoryData);
    });

    it("should call next with error if creation fails", async () => {
      const error = new Error("Database error");
      mockRequest.body = {
        categoryName: "New Cat",
        description: "New Desc",
        chapterId: 1,
        typeId: 1,
      };

      mockCategoryCreate.mockRejectedValue(error);

      await createCategory(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("updateCategory", () => {
    it("should update a category and return 200", async () => {
      const updatedCategory = {
        id: 1,
        categoryName: "Updated Cat",
        description: "Updated Desc",
        chapterId: 1,
        typeId: 1,
        categoryType: { id: 1, name: "Type 1" },
        categoryChapter: { chapterId: 1, chapterName: "Chapter 1" },
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = {
        name: "Updated Cat",
        description: "Updated Desc",
      };

      mockCategoryUpdate.mockResolvedValue(updatedCategory);

      await updateCategory(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockCategoryUpdate).toHaveBeenCalledWith({
        where: { id: 1 },
        data: {
          categoryName: "Updated Cat",
          description: "Updated Desc",
        },
        include: {
          categoryType: true,
          categoryChapter: true,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedCategory);
    });

    it("should call next with error if update fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = {
        name: "Updated Cat",
        description: "Updated Desc",
      };

      mockCategoryUpdate.mockRejectedValue(error);

      await updateCategory(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("deleteCategory", () => {
    it("should delete a category and return 200", async () => {
      const deletedCategory = {
        id: 1,
        categoryName: "Deleted Cat",
        description: "Deleted Desc",
        chapterId: 1,
        typeId: 1,
      };

      mockRequest.params = { id: "1" };
      mockCategoryDelete.mockResolvedValue(deletedCategory);

      await deleteCategory(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockCategoryDelete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(deletedCategory);
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockCategoryDelete.mockRejectedValue(error);

      await deleteCategory(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
