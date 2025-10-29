import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  satisfactionSurvey: {
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
  createSatisfactionSurvey,
  getAllSatisfactionSurveys,
  getSatisfactionSurveyById,
  updateSatisfactionSurvey,
  deleteSatisfactionSurvey,
} from "@/controllers/satisfactionSurvey.controller";

describe("SatisfactionSurvey Controller", () => {
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

  describe("createSatisfactionSurvey", () => {
    it("should create a satisfaction survey and return 201", async () => {
      const mockSurveyData = {
        title: "Enquête de satisfaction services municipaux",
        description: "Votre avis sur nos services",
        questions: ["Question 1", "Question 2"],
        active: true,
      };
      const mockCreatedSurvey = {
        id: "1",
        ...mockSurveyData,
        createdAt: new Date(),
      };

      mockRequest.body = mockSurveyData;
      mockPrisma.satisfactionSurvey.create.mockResolvedValue(mockCreatedSurvey);

      await createSatisfactionSurvey(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.satisfactionSurvey.create).toHaveBeenCalledWith({
        data: {
          ...mockSurveyData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedSurvey);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { title: "Test" };
      mockPrisma.satisfactionSurvey.create.mockRejectedValue(mockError);

      await createSatisfactionSurvey(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllSatisfactionSurveys", () => {
    it("should return all satisfaction surveys with 200", async () => {
      const mockSurveys = [
        {
          id: "1",
          title: "Enquête services municipaux",
          active: true,
        },
        {
          id: "2",
          title: "Enquête événements",
          active: false,
        },
      ];

      mockPrisma.satisfactionSurvey.findMany.mockResolvedValue(mockSurveys);

      await getAllSatisfactionSurveys(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.satisfactionSurvey.findMany).toHaveBeenCalledWith({
        orderBy: { title: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        satisfactionSurveys: mockSurveys,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.satisfactionSurvey.findMany.mockRejectedValue(mockError);

      await getAllSatisfactionSurveys(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getSatisfactionSurveyById", () => {
    it("should return a satisfaction survey by id with 200", async () => {
      const mockSurvey = {
        id: "1",
        title: "Enquête de satisfaction services municipaux",
        description: "Votre avis sur nos services",
        questions: ["Question 1", "Question 2"],
        active: true,
      };
      mockRequest.params = { id: "1" };
      mockPrisma.satisfactionSurvey.findUnique.mockResolvedValue(mockSurvey);

      await getSatisfactionSurveyById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.satisfactionSurvey.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockSurvey);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if survey not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.satisfactionSurvey.findUnique.mockResolvedValue(null);

      await getSatisfactionSurveyById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Sondage de satisfaction non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.satisfactionSurvey.findUnique.mockRejectedValue(mockError);

      await getSatisfactionSurveyById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateSatisfactionSurvey", () => {
    it("should update a satisfaction survey and return 200", async () => {
      const mockExistingSurvey = {
        id: "1",
        title: "Enquête services municipaux",
        active: true,
      };
      const mockUpdateData = {
        title: "Enquête services municipaux 2025",
        description: "Version mise à jour",
        active: false,
      };
      const mockUpdatedSurvey = {
        id: "1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.satisfactionSurvey.findUnique.mockResolvedValue(
        mockExistingSurvey
      );
      mockPrisma.satisfactionSurvey.update.mockResolvedValue(mockUpdatedSurvey);

      await updateSatisfactionSurvey(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.satisfactionSurvey.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.satisfactionSurvey.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedSurvey);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if survey not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { title: "Updated" };
      mockPrisma.satisfactionSurvey.findUnique.mockResolvedValue(null);

      await updateSatisfactionSurvey(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Sondage de satisfaction non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { title: "Updated" };
      mockPrisma.satisfactionSurvey.findUnique.mockRejectedValue(mockError);

      await updateSatisfactionSurvey(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteSatisfactionSurvey", () => {
    it("should delete a satisfaction survey and return 200", async () => {
      const mockSurvey = {
        id: "1",
        title: "Enquête services municipaux",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.satisfactionSurvey.findUnique.mockResolvedValue(mockSurvey);
      mockPrisma.satisfactionSurvey.delete.mockResolvedValue(mockSurvey);

      await deleteSatisfactionSurvey(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.satisfactionSurvey.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.satisfactionSurvey.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Sondage de satisfaction supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if survey not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.satisfactionSurvey.findUnique.mockResolvedValue(null);

      await deleteSatisfactionSurvey(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Sondage de satisfaction non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.satisfactionSurvey.findUnique.mockRejectedValue(mockError);

      await deleteSatisfactionSurvey(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
