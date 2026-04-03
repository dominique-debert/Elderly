import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  skill: {
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
  createSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
} from "@/controllers/skill.controller";

describe("Skill Controller", () => {
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

  describe("createSkill", () => {
    it("should create a skill and return 201", async () => {
      const mockSkillData = {
        name: "JavaScript",
        description: "Programming language for web development",
        category: "Programming",
        level: "Advanced",
      };
      const mockCreatedSkill = {
        id: "1",
        ...mockSkillData,
        createdAt: new Date(),
      };

      mockRequest.body = mockSkillData;
      mockPrisma.skill.create.mockResolvedValue(mockCreatedSkill);

      await createSkill(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.skill.create).toHaveBeenCalledWith({
        data: mockSkillData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedSkill);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { name: "Test" };
      mockPrisma.skill.create.mockRejectedValue(mockError);

      await createSkill(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllSkills", () => {
    it("should return all skills with 200", async () => {
      const mockSkills = [
        {
          id: "1",
          name: "JavaScript",
          category: "Programming",
        },
        {
          id: "2",
          name: "Python",
          category: "Programming",
        },
      ];

      mockPrisma.skill.findMany.mockResolvedValue(mockSkills);

      await getAllSkills(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.skill.findMany).toHaveBeenCalledWith({
        orderBy: { name: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        skills: mockSkills,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.skill.findMany.mockRejectedValue(mockError);

      await getAllSkills(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getSkillById", () => {
    it("should return a skill by id with 200", async () => {
      const mockSkill = {
        id: "1",
        name: "JavaScript",
        description: "Programming language for web development",
        category: "Programming",
        level: "Advanced",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.skill.findUnique.mockResolvedValue(mockSkill);

      await getSkillById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.skill.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockSkill);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if skill not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.skill.findUnique.mockResolvedValue(null);

      await getSkillById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Compétence non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.skill.findUnique.mockRejectedValue(mockError);

      await getSkillById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateSkill", () => {
    it("should update a skill and return 200", async () => {
      const mockExistingSkill = {
        id: "1",
        name: "JavaScript",
        level: "Intermediate",
      };
      const mockUpdateData = {
        name: "JavaScript",
        description: "Modern JavaScript with ES6+",
        level: "Advanced",
      };
      const mockUpdatedSkill = {
        id: "1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.skill.findUnique.mockResolvedValue(mockExistingSkill);
      mockPrisma.skill.update.mockResolvedValue(mockUpdatedSkill);

      await updateSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.skill.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.skill.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedSkill);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if skill not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { name: "Updated" };
      mockPrisma.skill.findUnique.mockResolvedValue(null);

      await updateSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Compétence non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { name: "Updated" };
      mockPrisma.skill.findUnique.mockRejectedValue(mockError);

      await updateSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteSkill", () => {
    it("should delete a skill and return 200", async () => {
      const mockSkill = {
        id: "1",
        name: "JavaScript",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.skill.findUnique.mockResolvedValue(mockSkill);
      mockPrisma.skill.delete.mockResolvedValue(mockSkill);

      await deleteSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.skill.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.skill.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Compétence supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if skill not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.skill.findUnique.mockResolvedValue(null);

      await deleteSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Compétence non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.skill.findUnique.mockRejectedValue(mockError);

      await deleteSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
