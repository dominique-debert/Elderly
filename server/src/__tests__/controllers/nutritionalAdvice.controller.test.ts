import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  nutritionalAdvice: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => mockPrisma),
}));

// Import controller after mocking
import {
  createNutritionalAdvice,
  getAllNutritionalAdvices,
  getNutritionalAdviceById,
  updateNutritionalAdvice,
  deleteNutritionalAdvice,
} from "@/controllers/nutritionalAdvice.controller";

describe("NutritionalAdvice Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createNutritionalAdvice", () => {
    it("should create a nutritional advice and return 201", async () => {
      const mockAdviceData = {
        title: "Alimentation équilibrée",
        content: "Mangez 5 fruits et légumes par jour",
        category: "Nutrition",
      };
      const mockCreatedAdvice = {
        id: "1",
        ...mockAdviceData,
        createdAt: new Date(),
      };

      mockRequest.body = mockAdviceData;
      mockPrisma.nutritionalAdvice.create.mockResolvedValue(mockCreatedAdvice);

      await createNutritionalAdvice(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.nutritionalAdvice.create).toHaveBeenCalledWith({
        data: mockAdviceData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedAdvice);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { title: "Test" };
      mockPrisma.nutritionalAdvice.create.mockRejectedValue(mockError);

      await createNutritionalAdvice(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllNutritionalAdvices", () => {
    it("should return all nutritional advices with 200", async () => {
      const mockAdvices = [
        {
          id: "1",
          title: "Alimentation équilibrée",
          content: "Mangez 5 fruits et légumes par jour",
        },
        {
          id: "2",
          title: "Hydratation",
          content: "Buvez 1.5L d'eau par jour",
        },
      ];

      mockPrisma.nutritionalAdvice.findMany.mockResolvedValue(mockAdvices);

      await getAllNutritionalAdvices(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.nutritionalAdvice.findMany).toHaveBeenCalledWith({
        orderBy: { title: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        advices: mockAdvices,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.nutritionalAdvice.findMany.mockRejectedValue(mockError);

      await getAllNutritionalAdvices(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getNutritionalAdviceById", () => {
    it("should return a nutritional advice by id with 200", async () => {
      const mockAdvice = {
        id: "1",
        title: "Alimentation équilibrée",
        content: "Mangez 5 fruits et légumes par jour",
        category: "Nutrition",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.nutritionalAdvice.findUnique.mockResolvedValue(mockAdvice);

      await getNutritionalAdviceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.nutritionalAdvice.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockAdvice);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if advice not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.nutritionalAdvice.findUnique.mockResolvedValue(null);

      await getNutritionalAdviceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Conseil nutritionnel non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.nutritionalAdvice.findUnique.mockRejectedValue(mockError);

      await getNutritionalAdviceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateNutritionalAdvice", () => {
    it("should update a nutritional advice and return 200", async () => {
      const mockExistingAdvice = {
        id: "1",
        title: "Alimentation équilibrée",
        content: "Old content",
      };
      const mockUpdateData = {
        content: "Mangez au moins 5 portions de fruits et légumes par jour",
        category: "Santé",
      };
      const mockUpdatedAdvice = {
        id: "1",
        title: "Alimentation équilibrée",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.nutritionalAdvice.findUnique.mockResolvedValue(
        mockExistingAdvice
      );
      mockPrisma.nutritionalAdvice.update.mockResolvedValue(mockUpdatedAdvice);

      await updateNutritionalAdvice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.nutritionalAdvice.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.nutritionalAdvice.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedAdvice);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if advice not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { content: "Updated" };
      mockPrisma.nutritionalAdvice.findUnique.mockResolvedValue(null);

      await updateNutritionalAdvice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Avis nutritionnel non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { content: "Updated" };
      mockPrisma.nutritionalAdvice.findUnique.mockRejectedValue(mockError);

      await updateNutritionalAdvice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteNutritionalAdvice", () => {
    it("should delete a nutritional advice and return 200", async () => {
      const mockAdvice = {
        id: "1",
        title: "Alimentation équilibrée",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.nutritionalAdvice.findUnique.mockResolvedValue(mockAdvice);
      mockPrisma.nutritionalAdvice.delete.mockResolvedValue(mockAdvice);

      await deleteNutritionalAdvice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.nutritionalAdvice.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.nutritionalAdvice.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Avis nutritionnel supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if advice not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.nutritionalAdvice.findUnique.mockResolvedValue(null);

      await deleteNutritionalAdvice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Avis nutritionnel non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.nutritionalAdvice.findUnique.mockRejectedValue(mockError);

      await deleteNutritionalAdvice(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
