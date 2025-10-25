import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  projectMember: {
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
  createProjectMember,
  getAllProjectMembers,
  getProjectMemberById,
  updateProjectMember,
  deleteProjectMember,
} from "@/controllers/projectMember.controller";

describe("ProjectMember Controller", () => {
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

  describe("createProjectMember", () => {
    it("should create a project member and return 201", async () => {
      const mockMemberData = {
        userId: "user1",
        projectId: "project1",
        role: "Developer",
        joinDate: new Date("2025-10-01"),
      };
      const mockCreatedMember = {
        id: "1",
        ...mockMemberData,
        createdAt: new Date(),
      };

      mockRequest.body = mockMemberData;
      mockPrisma.projectMember.create.mockResolvedValue(mockCreatedMember);

      await createProjectMember(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.projectMember.create).toHaveBeenCalledWith({
        data: mockMemberData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedMember);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { userId: "user1" };
      mockPrisma.projectMember.create.mockRejectedValue(mockError);

      await createProjectMember(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllProjectMembers", () => {
    it("should return all project members with 200", async () => {
      const mockMembers = [
        {
          id: "1",
          userId: "user1",
          projectId: "project1",
          role: "Developer",
          joinDate: new Date("2025-10-20"),
        },
        {
          id: "2",
          userId: "user2",
          projectId: "project1",
          role: "Designer",
          joinDate: new Date("2025-10-15"),
        },
      ];

      mockPrisma.projectMember.findMany.mockResolvedValue(mockMembers);

      await getAllProjectMembers(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.projectMember.findMany).toHaveBeenCalledWith({
        orderBy: { joinDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        projectMembers: mockMembers,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.projectMember.findMany.mockRejectedValue(mockError);

      await getAllProjectMembers(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getProjectMemberById", () => {
    it("should return a project member by id with 200", async () => {
      const mockMember = {
        id: "1",
        userId: "user1",
        projectId: "project1",
        role: "Developer",
        joinDate: new Date(),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.projectMember.findUnique.mockResolvedValue(mockMember);

      await getProjectMemberById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.projectMember.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockMember);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if member not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.projectMember.findUnique.mockResolvedValue(null);

      await getProjectMemberById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Membre de projet non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.projectMember.findUnique.mockRejectedValue(mockError);

      await getProjectMemberById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateProjectMember", () => {
    it("should update a project member and return 200", async () => {
      const mockExistingMember = {
        id: "1",
        userId: "user1",
        projectId: "project1",
        role: "Developer",
      };
      const mockUpdateData = {
        role: "Senior Developer",
        userId: "user1",
        projectId: "project1",
      };
      const mockUpdatedMember = {
        id: "1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.projectMember.findUnique.mockResolvedValue(mockExistingMember);
      mockPrisma.projectMember.update.mockResolvedValue(mockUpdatedMember);

      await updateProjectMember(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.projectMember.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.projectMember.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedMember);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if member not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { role: "Updated" };
      mockPrisma.projectMember.findUnique.mockResolvedValue(null);

      await updateProjectMember(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Membre de projet non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { role: "Updated" };
      mockPrisma.projectMember.findUnique.mockRejectedValue(mockError);

      await updateProjectMember(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteProjectMember", () => {
    it("should delete a project member and return 200", async () => {
      const mockMember = {
        id: "1",
        userId: "user1",
        projectId: "project1",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.projectMember.findUnique.mockResolvedValue(mockMember);
      mockPrisma.projectMember.delete.mockResolvedValue(mockMember);

      await deleteProjectMember(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.projectMember.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.projectMember.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Membre de projet supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if member not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.projectMember.findUnique.mockResolvedValue(null);

      await deleteProjectMember(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Membre de projet non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.projectMember.findUnique.mockRejectedValue(mockError);

      await deleteProjectMember(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
