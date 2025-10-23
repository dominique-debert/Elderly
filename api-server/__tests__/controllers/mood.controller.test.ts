import { Request, Response, NextFunction } from "express";
import { IMood } from "@/types";

// Mock Prisma Client avant les imports
const mockMoodCreate = jest.fn();
const mockMoodFindMany = jest.fn();
const mockMoodFindUnique = jest.fn();
const mockMoodUpdate = jest.fn();
const mockMoodDelete = jest.fn();

jest.mock("@/prisma", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    mood: {
      create: mockMoodCreate,
      findMany: mockMoodFindMany,
      findUnique: mockMoodFindUnique,
      update: mockMoodUpdate,
      delete: mockMoodDelete,
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
  createMood,
  getAllMoods,
  getMoodById,
  updateMood,
  deleteMood,
} from "@/controllers/mood.controller";

// Enum local pour les tests (basé sur le schéma Prisma)
enum EValence {
  positive = "positive",
  negative = "negative",
  neutre = "neutre",
}

describe("Mood Controller", () => {
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

  describe("createMood", () => {
    it("should create a mood and return 201", async () => {
      const moodData = {
        id: 1,
        name: "Heureux",
        description: "Sentiment de joie",
        valence: "positive" as any,
        intensity: 4,
        color: "#FFD700",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.body = {
        name: "Heureux",
        description: "Sentiment de joie",
        valence: "positive",
        intensity: 4,
        color: "#FFD700",
      };

      mockMoodCreate.mockResolvedValue(moodData);

      await createMood(
        mockRequest as Request<{}, {}, IMood>,
        mockResponse as Response,
        mockNext
      );

      expect(mockMoodCreate).toHaveBeenCalledWith({
        data: {
          name: "Heureux",
          description: "Sentiment de joie",
          valence: "positive",
          intensity: 4,
          color: "#FFD700",
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(moodData);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if creation fails", async () => {
      const error = new Error("Database error");
      mockRequest.body = {
        name: "Heureux",
        description: "Sentiment de joie",
        valence: "positive",
        intensity: 4,
        color: "#FFD700",
      };

      mockMoodCreate.mockRejectedValue(error);

      await createMood(
        mockRequest as Request<{}, {}, IMood>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllMoods", () => {
    it("should return all moods", async () => {
      const moods = [
        {
          id: 1,
          name: "Heureux",
          description: "Sentiment de joie",
          valence: "positive" as any,
          intensity: 4,
          color: "#FFD700",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Triste",
          description: "Sentiment de tristesse",
          valence: "negative" as any,
          intensity: 3,
          color: "#4169E1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Calme",
          description: "Sentiment de neutralité",
          valence: "neutre" as any,
          intensity: 2,
          color: "#808080",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockMoodFindMany.mockResolvedValue(moods);

      await getAllMoods(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockMoodFindMany).toHaveBeenCalledWith({
        orderBy: {
          name: "asc",
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ moods });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");

      mockMoodFindMany.mockRejectedValue(error);

      await getAllMoods(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("getMoodById", () => {
    it("should return a specific mood", async () => {
      const mood = {
        id: 1,
        name: "Heureux",
        description: "Sentiment de joie",
        valence: "positive" as any,
        intensity: 4,
        color: "#FFD700",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockMoodFindUnique.mockResolvedValue(mood);

      await getMoodById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockMoodFindUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mood);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if mood not found", async () => {
      mockRequest.params = { id: "999" };
      mockMoodFindUnique.mockResolvedValue(null);

      await getMoodById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Mood non trouvé");
    });

    it("should call next with error if query fails", async () => {
      const error = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockMoodFindUnique.mockRejectedValue(error);

      await getMoodById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("updateMood", () => {
    it("should update a mood and return 200", async () => {
      const existingMood = {
        id: 1,
        name: "Heureux",
        description: "Sentiment de joie",
        valence: "positive" as any,
        intensity: 4,
        color: "#FFD700",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updatedMood = {
        ...existingMood,
        name: "Très heureux",
        intensity: 5,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = {
        name: "Très heureux",
        intensity: 5,
      };

      mockMoodFindUnique.mockResolvedValue(existingMood);
      mockMoodUpdate.mockResolvedValue(updatedMood);

      await updateMood(
        mockRequest as Request<{ id: string }, {}, IMood>,
        mockResponse as Response,
        mockNext
      );

      expect(mockMoodFindUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockMoodUpdate).toHaveBeenCalledWith({
        where: { id: 1 },
        data: expect.objectContaining({
          name: "Très heureux",
          intensity: 5,
          updatedAt: expect.any(Date),
        }),
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedMood);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if mood not found", async () => {
      mockRequest.params = { id: "999" };
      mockRequest.body = {
        name: "Très heureux",
        intensity: 5,
      };

      mockMoodFindUnique.mockResolvedValue(null);

      await updateMood(
        mockRequest as Request<{ id: string }, {}, IMood>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Mood non trouvé");
      expect(mockMoodUpdate).not.toHaveBeenCalled();
    });

    it("should call next with error if update fails", async () => {
      const error = new Error("Database error");
      const existingMood = {
        id: 1,
        name: "Heureux",
        description: "Sentiment de joie",
        valence: "positive" as any,
        intensity: 4,
        color: "#FFD700",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = {
        name: "Très heureux",
        intensity: 5,
      };

      mockMoodFindUnique.mockResolvedValue(existingMood);
      mockMoodUpdate.mockRejectedValue(error);

      await updateMood(
        mockRequest as Request<{ id: string }, {}, IMood>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe("deleteMood", () => {
    it("should delete a mood and return 200", async () => {
      const mood = {
        id: 1,
        name: "Heureux",
        description: "Sentiment de joie",
        valence: "positive" as any,
        intensity: 4,
        color: "#FFD700",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockMoodFindUnique.mockResolvedValue(mood);
      mockMoodDelete.mockResolvedValue(mood);

      await deleteMood(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockMoodFindUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockMoodDelete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Humeur supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return 404 if mood not found", async () => {
      mockRequest.params = { id: "999" };
      mockMoodFindUnique.mockResolvedValue(null);

      await deleteMood(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalled();
      const error = (mockNext as jest.Mock).mock.calls[0][0];
      expect(error.status).toBe(404);
      expect(error.message).toBe("Humeur non trouvée");
      expect(mockMoodDelete).not.toHaveBeenCalled();
    });

    it("should call next with error if deletion fails", async () => {
      const error = new Error("Database error");
      const mood = {
        id: 1,
        name: "Heureux",
        description: "Sentiment de joie",
        valence: "positive" as any,
        intensity: 4,
        color: "#FFD700",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockMoodFindUnique.mockResolvedValue(mood);
      mockMoodDelete.mockRejectedValue(error);

      await deleteMood(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
