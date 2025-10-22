import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  collaborativeProject: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

jest.mock("@/prisma/client.js", () => ({
  PrismaClient: jest.fn(() => mockPrisma),
}));

import {
  createCollaborativeProject,
  getAllCollaborativeProjects,
  getCollaborativeProjectById,
  updateCollaborativeProject,
  deleteCollaborativeProject,
} from "@/controllers/collaborativeProject.controller";
import { ICollaborativeProject } from "@/types";

describe("CollaborativeProject Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {
      params: {},
      body: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();

    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe("createCollaborativeProject", () => {
    it("should create collaborative project and return 201", async () => {
      const mockProject = {
        id: "1",
        title: "Community Garden",
        description: "Build a community garden together",
        status: "active",
        createdAt: new Date(),
      };

      mockRequest.body = {
        title: "Community Garden",
        description: "Build a community garden together",
        status: "active",
      };
      mockPrisma.collaborativeProject.create.mockResolvedValue(mockProject);

      await createCollaborativeProject(
        mockRequest as Request<{}, {}, ICollaborativeProject>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.collaborativeProject.create).toHaveBeenCalledWith({
        data: mockRequest.body,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockProject);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when creation fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { title: "Community Garden" };
      mockPrisma.collaborativeProject.create.mockRejectedValue(mockError);

      await createCollaborativeProject(
        mockRequest as Request<{}, {}, ICollaborativeProject>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getAllCollaborativeProjects", () => {
    it("should get all collaborative projects ordered by title and return 200", async () => {
      const mockProjects = [
        {
          id: "1",
          title: "Project A",
          description: "First project",
          status: "active",
        },
        {
          id: "2",
          title: "Project B",
          description: "Second project",
          status: "completed",
        },
      ];

      mockPrisma.collaborativeProject.findMany.mockResolvedValue(mockProjects);

      await getAllCollaborativeProjects(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.collaborativeProject.findMany).toHaveBeenCalledWith({
        orderBy: { title: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        projects: mockProjects,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should return empty array when no projects exist", async () => {
      mockPrisma.collaborativeProject.findMany.mockResolvedValue([]);

      await getAllCollaborativeProjects(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ projects: [] });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockPrisma.collaborativeProject.findMany.mockRejectedValue(mockError);

      await getAllCollaborativeProjects(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("getCollaborativeProjectById", () => {
    it("should get collaborative project by id and return 200", async () => {
      const mockProject = {
        id: "1",
        title: "Community Garden",
        description: "Build a community garden together",
        status: "active",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.collaborativeProject.findUnique.mockResolvedValue(mockProject);

      await getCollaborativeProjectById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.collaborativeProject.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockProject);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when project not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.collaborativeProject.findUnique.mockResolvedValue(null);

      await getCollaborativeProjectById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Projet collaboratif non trouvé",
        })
      );
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when database fails", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.collaborativeProject.findUnique.mockRejectedValue(mockError);

      await getCollaborativeProjectById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("updateCollaborativeProject", () => {
    it("should update collaborative project and return 200", async () => {
      const existingProject = {
        id: "1",
        title: "Old Title",
        description: "Old Description",
        status: "active",
      };
      const updatedProject = {
        id: "1",
        title: "New Title",
        description: "Old Description",
        status: "active",
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = { title: "New Title" };
      mockPrisma.collaborativeProject.findUnique.mockResolvedValue(
        existingProject
      );
      mockPrisma.collaborativeProject.update.mockResolvedValue(updatedProject);

      await updateCollaborativeProject(
        mockRequest as Request<{ id: string }, ICollaborativeProject>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.collaborativeProject.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.collaborativeProject.update).toHaveBeenCalledWith({
        data: {
          title: "New Title",
          updatedAt: expect.any(Date),
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedProject);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when project not found", async () => {
      mockRequest.params = { id: "999" };
      mockRequest.body = { title: "New Title" };
      mockPrisma.collaborativeProject.findUnique.mockResolvedValue(null);

      await updateCollaborativeProject(
        mockRequest as Request<{ id: string }, ICollaborativeProject>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Projet collaboratif non trouvé",
        })
      );
      expect(mockPrisma.collaborativeProject.update).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when update fails", async () => {
      const mockError = new Error("Database error");
      const existingProject = { id: "1", title: "Old Title" };

      mockRequest.params = { id: "1" };
      mockRequest.body = { title: "New Title" };
      mockPrisma.collaborativeProject.findUnique.mockResolvedValue(
        existingProject
      );
      mockPrisma.collaborativeProject.update.mockRejectedValue(mockError);

      await updateCollaborativeProject(
        mockRequest as Request<{ id: string }, ICollaborativeProject>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });

  describe("deleteCollaborativeProject", () => {
    it("should delete collaborative project and return 200", async () => {
      const existingProject = {
        id: "1",
        title: "Community Garden",
      };

      mockRequest.params = { id: "1" };
      mockPrisma.collaborativeProject.findUnique.mockResolvedValue(
        existingProject
      );
      mockPrisma.collaborativeProject.delete.mockResolvedValue(existingProject);

      await deleteCollaborativeProject(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.collaborativeProject.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.collaborativeProject.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Projet collaboratif supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error when project not found", async () => {
      mockRequest.params = { id: "999" };
      mockPrisma.collaborativeProject.findUnique.mockResolvedValue(null);

      await deleteCollaborativeProject(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Projet collaboratif non trouvé",
        })
      );
      expect(mockPrisma.collaborativeProject.delete).not.toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it("should call next with error when delete fails", async () => {
      const mockError = new Error("Database error");
      const existingProject = { id: "1", title: "Community Garden" };

      mockRequest.params = { id: "1" };
      mockPrisma.collaborativeProject.findUnique.mockResolvedValue(
        existingProject
      );
      mockPrisma.collaborativeProject.delete.mockRejectedValue(mockError);

      await deleteCollaborativeProject(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
