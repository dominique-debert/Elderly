import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  surveyResponse: {
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
  createSurveyResponse,
  getAllSurveyResponse,
  getSurveyResponseById,
  updateSurveyResponse,
  deleteSurveyResponse,
} from "@/controllers/surveyResponse.controller";

describe("SurveyResponse Controller", () => {
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

  describe("createSurveyResponse", () => {
    it("should create a survey response with responseDate and return 201", async () => {
      const mockResponseData = {
        surveyId: "survey1",
        userId: "user1",
        answers: { q1: "Yes", q2: "Very satisfied" },
      };
      const mockCreatedResponse = {
        id: "1",
        ...mockResponseData,
        responseDate: new Date(),
        createdAt: new Date(),
      };

      mockRequest.body = mockResponseData;
      mockPrisma.surveyResponse.create.mockResolvedValue(mockCreatedResponse);

      await createSurveyResponse(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.surveyResponse.create).toHaveBeenCalledWith({
        data: {
          ...mockResponseData,
          responseDate: expect.any(Date),
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedResponse);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { surveyId: "survey1" };
      mockPrisma.surveyResponse.create.mockRejectedValue(mockError);

      await createSurveyResponse(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllSurveyResponse", () => {
    it("should return all survey responses with 200", async () => {
      const mockResponses = [
        {
          id: "1",
          surveyId: "survey1",
          userId: "user1",
          responseDate: new Date("2025-10-22"),
        },
        {
          id: "2",
          surveyId: "survey2",
          userId: "user2",
          responseDate: new Date("2025-10-20"),
        },
      ];

      mockPrisma.surveyResponse.findMany.mockResolvedValue(mockResponses);

      await getAllSurveyResponse(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.surveyResponse.findMany).toHaveBeenCalledWith({
        orderBy: { responseDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        surveyResponse: mockResponses,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.surveyResponse.findMany.mockRejectedValue(mockError);

      await getAllSurveyResponse(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getSurveyResponseById", () => {
    it("should return a survey response by id with 200", async () => {
      const mockSurveyResponse = {
        id: "1",
        surveyId: "survey1",
        userId: "user1",
        answers: { q1: "Yes", q2: "Very satisfied" },
        responseDate: new Date("2025-10-20"),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.surveyResponse.findUnique.mockResolvedValue(
        mockSurveyResponse
      );

      await getSurveyResponseById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.surveyResponse.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockSurveyResponse);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if response not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.surveyResponse.findUnique.mockResolvedValue(null);

      await getSurveyResponseById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Réponse à l'enquête non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.surveyResponse.findUnique.mockRejectedValue(mockError);

      await getSurveyResponseById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateSurveyResponse", () => {
    it("should update a survey response with new responseDate and return 200", async () => {
      const mockExistingResponse = {
        id: "1",
        surveyId: "survey1",
        answers: { q1: "Yes" },
      };
      const mockUpdateData = {
        answers: { q1: "No", q2: "Satisfied" },
        surveyId: "survey1",
      };
      const mockUpdatedResponse = {
        id: "1",
        ...mockUpdateData,
        responseDate: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.surveyResponse.findUnique.mockResolvedValue(
        mockExistingResponse
      );
      mockPrisma.surveyResponse.update.mockResolvedValue(mockUpdatedResponse);

      await updateSurveyResponse(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.surveyResponse.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.surveyResponse.update).toHaveBeenCalledWith({
        data: {
          ...mockUpdateData,
          responseDate: expect.any(Date),
          updatedAt: expect.any(Date),
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedResponse);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if response not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { answers: { q1: "Updated" } };
      mockPrisma.surveyResponse.findUnique.mockResolvedValue(null);

      await updateSurveyResponse(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Réponse à l'enquête non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { answers: { q1: "Updated" } };
      mockPrisma.surveyResponse.findUnique.mockRejectedValue(mockError);

      await updateSurveyResponse(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteSurveyResponse", () => {
    it("should delete a survey response and return 200", async () => {
      const mockSurveyResponse = {
        id: "1",
        surveyId: "survey1",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.surveyResponse.findUnique.mockResolvedValue(
        mockSurveyResponse
      );
      mockPrisma.surveyResponse.delete.mockResolvedValue(mockSurveyResponse);

      await deleteSurveyResponse(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.surveyResponse.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.surveyResponse.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Réponse à l'enquête supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if response not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.surveyResponse.findUnique.mockResolvedValue(null);

      await deleteSurveyResponse(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Réponse à l'enquête non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.surveyResponse.findUnique.mockRejectedValue(mockError);

      await deleteSurveyResponse(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
