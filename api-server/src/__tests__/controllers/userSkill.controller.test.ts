import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  userSkill: {
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
  createUserSkill,
  getAllUserSkills,
  getUserSkillById,
  updateUserSkill,
  deleteUserSkill,
} from "@/controllers/userSkill.controller";

describe("UserSkill Controller", () => {
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

  describe("createUserSkill", () => {
    it("should create a user skill and return 201", async () => {
      const mockSkillData = {
        userId: "user1",
        skillId: "skill1",
        proficiencyLevel: "Advanced",
        yearsOfExperience: 5,
        isVerified: true,
        endorsements: 12,
      };
      const mockCreatedSkill = {
        id: "1",
        ...mockSkillData,
        createdAt: new Date(),
      };

      mockRequest.body = mockSkillData;
      mockPrisma.userSkill.create.mockResolvedValue(mockCreatedSkill);

      await createUserSkill(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userSkill.create).toHaveBeenCalledWith({
        data: {
          ...mockSkillData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedSkill);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { userId: "user1" };
      mockPrisma.userSkill.create.mockRejectedValue(mockError);

      await createUserSkill(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllUserSkills", () => {
    it("should return all user skills with 200", async () => {
      const mockSkills = [
        {
          id: "1",
          userId: "user1",
          skillId: "skill1",
          proficiencyLevel: "Advanced",
          createdAt: new Date("2025-10-22"),
        },
        {
          id: "2",
          userId: "user2",
          skillId: "skill2",
          proficiencyLevel: "Intermediate",
          createdAt: new Date("2025-10-20"),
        },
      ];

      mockPrisma.userSkill.findMany.mockResolvedValue(mockSkills);

      await getAllUserSkills(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userSkill.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        userSkills: mockSkills,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.userSkill.findMany.mockRejectedValue(mockError);

      await getAllUserSkills(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getUserSkillById", () => {
    it("should return a user skill by id with 200", async () => {
      const mockSkill = {
        id: "1",
        userId: "user1",
        skillId: "skill1",
        proficiencyLevel: "Advanced",
        yearsOfExperience: 5,
        isVerified: true,
        endorsements: 12,
      };
      mockRequest.params = { id: "1" };
      mockPrisma.userSkill.findUnique.mockResolvedValue(mockSkill);

      await getUserSkillById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userSkill.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockSkill);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if skill not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.userSkill.findUnique.mockResolvedValue(null);

      await getUserSkillById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Compétence utilisateur non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.userSkill.findUnique.mockRejectedValue(mockError);

      await getUserSkillById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateUserSkill", () => {
    it("should update a user skill and return 200", async () => {
      const mockExistingSkill = {
        id: "1",
        userId: "user1",
        skillId: "skill1",
        proficiencyLevel: "Intermediate",
      };
      const mockUpdateData = {
        proficiencyLevel: "Advanced",
        yearsOfExperience: 7,
        isVerified: true,
        endorsements: 15,
      };
      const mockUpdatedSkill = {
        id: "1",
        userId: "user1",
        skillId: "skill1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.userSkill.findUnique.mockResolvedValue(mockExistingSkill);
      mockPrisma.userSkill.update.mockResolvedValue(mockUpdatedSkill);

      await updateUserSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userSkill.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.userSkill.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedSkill);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if skill not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { proficiencyLevel: "Expert" };
      mockPrisma.userSkill.findUnique.mockResolvedValue(null);

      await updateUserSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Compétence utilisateur non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { proficiencyLevel: "Expert" };
      mockPrisma.userSkill.findUnique.mockRejectedValue(mockError);

      await updateUserSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteUserSkill", () => {
    it("should delete a user skill and return 200", async () => {
      const mockSkill = {
        id: "1",
        userId: "user1",
        skillId: "skill1",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.userSkill.findUnique.mockResolvedValue(mockSkill);
      mockPrisma.userSkill.delete.mockResolvedValue(mockSkill);

      await deleteUserSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.userSkill.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.userSkill.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Compétence utilisateur supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if skill not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.userSkill.findUnique.mockResolvedValue(null);

      await deleteUserSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Compétence utilisateur non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.userSkill.findUnique.mockRejectedValue(mockError);

      await deleteUserSkill(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
