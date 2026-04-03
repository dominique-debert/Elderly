import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  projectTask: {
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
  createProjectTask,
  getAllProjectTasks,
  getProjectTaskById,
  updateProjectTask,
  deleteProjectTask,
} from "@/controllers/projectTask.controller";

describe("ProjectTask Controller", () => {
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

  describe("createProjectTask", () => {
    it("should create a project task and return 201", async () => {
      const mockTaskData = {
        title: "Implement authentication",
        description: "Add JWT authentication to the API",
        projectId: "project1",
        assignedTo: "user1",
        status: "TODO",
        dueDate: new Date("2025-11-01"),
      };
      const mockCreatedTask = {
        id: "1",
        ...mockTaskData,
        createdAt: new Date(),
      };

      mockRequest.body = mockTaskData;
      mockPrisma.projectTask.create.mockResolvedValue(mockCreatedTask);

      await createProjectTask(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.projectTask.create).toHaveBeenCalledWith({
        data: mockTaskData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedTask);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { title: "Test" };
      mockPrisma.projectTask.create.mockRejectedValue(mockError);

      await createProjectTask(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllProjectTasks", () => {
    it("should return all project tasks with 200", async () => {
      const mockTasks = [
        {
          id: "1",
          title: "Implement authentication",
          status: "TODO",
          dueDate: new Date("2025-11-01"),
        },
        {
          id: "2",
          title: "Write documentation",
          status: "IN_PROGRESS",
          dueDate: new Date("2025-10-25"),
        },
      ];

      mockPrisma.projectTask.findMany.mockResolvedValue(mockTasks);

      await getAllProjectTasks(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.projectTask.findMany).toHaveBeenCalledWith({
        orderBy: { dueDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        projectTasks: mockTasks,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.projectTask.findMany.mockRejectedValue(mockError);

      await getAllProjectTasks(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getProjectTaskById", () => {
    it("should return a project task by id with 200", async () => {
      const mockTask = {
        id: "1",
        title: "Implement authentication",
        description: "Add JWT authentication to the API",
        projectId: "project1",
        status: "TODO",
        dueDate: new Date(),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.projectTask.findUnique.mockResolvedValue(mockTask);

      await getProjectTaskById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.projectTask.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockTask);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if task not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.projectTask.findUnique.mockResolvedValue(null);

      await getProjectTaskById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Tâche de projet non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.projectTask.findUnique.mockRejectedValue(mockError);

      await getProjectTaskById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateProjectTask", () => {
    it("should update a project task and return 200", async () => {
      const mockExistingTask = {
        id: "1",
        title: "Implement authentication",
        status: "TODO",
      };
      const mockUpdateData = {
        status: "IN_PROGRESS",
        title: "Implement authentication",
        projectId: "project1",
      };
      const mockUpdatedTask = {
        id: "1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.projectTask.findUnique.mockResolvedValue(mockExistingTask);
      mockPrisma.projectTask.update.mockResolvedValue(mockUpdatedTask);

      await updateProjectTask(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.projectTask.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.projectTask.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedTask);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if task not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { status: "DONE" };
      mockPrisma.projectTask.findUnique.mockResolvedValue(null);

      await updateProjectTask(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Tâche de projet non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { status: "DONE" };
      mockPrisma.projectTask.findUnique.mockRejectedValue(mockError);

      await updateProjectTask(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteProjectTask", () => {
    it("should delete a project task and return 200", async () => {
      const mockTask = {
        id: "1",
        title: "Implement authentication",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.projectTask.findUnique.mockResolvedValue(mockTask);
      mockPrisma.projectTask.delete.mockResolvedValue(mockTask);

      await deleteProjectTask(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.projectTask.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.projectTask.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Tâche de projet supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if task not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.projectTask.findUnique.mockResolvedValue(null);

      await deleteProjectTask(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Tâche de projet non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.projectTask.findUnique.mockRejectedValue(mockError);

      await deleteProjectTask(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
