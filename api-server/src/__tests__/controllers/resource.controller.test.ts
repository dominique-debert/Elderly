import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  resource: {
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
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
} from "@/controllers/resource.controller";

describe("Resource Controller", () => {
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

  describe("createResource", () => {
    it("should create a resource with category connection and return 201", async () => {
      const mockResourceData = {
        title: "Guide de nutrition",
        description: "Un guide complet sur la nutrition",
        type: "PDF",
        url: "https://example.com/guide.pdf",
        category: "1",
      };
      const mockCreatedResource = {
        id: "1",
        title: "Guide de nutrition",
        description: "Un guide complet sur la nutrition",
        type: "PDF",
        url: "https://example.com/guide.pdf",
        categoryId: 1,
        createdAt: new Date(),
      };

      mockRequest.body = mockResourceData;
      mockPrisma.resource.create.mockResolvedValue(mockCreatedResource);

      await createResource(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.resource.create).toHaveBeenCalledWith({
        data: {
          ...mockResourceData,
          category: {
            connect: { id: 1 },
          },
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedResource);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { title: "Test", category: "1" };
      mockPrisma.resource.create.mockRejectedValue(mockError);

      await createResource(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllResources", () => {
    it("should return all resources with 200", async () => {
      const mockResources = [
        {
          id: "1",
          title: "Guide de nutrition",
          type: "PDF",
        },
        {
          id: "2",
          title: "Vidéo d'exercice",
          type: "Video",
        },
      ];

      mockPrisma.resource.findMany.mockResolvedValue(mockResources);

      await getAllResources(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.resource.findMany).toHaveBeenCalledWith({
        orderBy: { title: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        resources: mockResources,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.resource.findMany.mockRejectedValue(mockError);

      await getAllResources(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getResourceById", () => {
    it("should return a resource by id with 200", async () => {
      const mockResource = {
        id: "1",
        title: "Guide de nutrition",
        description: "Un guide complet sur la nutrition",
        type: "PDF",
        url: "https://example.com/guide.pdf",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.resource.findUnique.mockResolvedValue(mockResource);

      await getResourceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.resource.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockResource);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if resource not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.resource.findUnique.mockResolvedValue(null);

      await getResourceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Ressource non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.resource.findUnique.mockRejectedValue(mockError);

      await getResourceById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateResource", () => {
    it("should update a resource with category connection and return 200", async () => {
      const mockExistingResource = {
        id: "1",
        title: "Guide de nutrition",
        categoryId: 1,
      };
      const mockUpdateData = {
        title: "Guide de nutrition - Édition 2025",
        description: "Version mise à jour",
        category: "2",
      };
      const mockUpdatedResource = {
        id: "1",
        title: "Guide de nutrition - Édition 2025",
        description: "Version mise à jour",
        categoryId: 2,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.resource.findUnique.mockResolvedValue(mockExistingResource);
      mockPrisma.resource.update.mockResolvedValue(mockUpdatedResource);

      await updateResource(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.resource.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.resource.update).toHaveBeenCalledWith({
        data: {
          ...mockUpdateData,
          updatedAt: expect.any(Date),
          category: {
            connect: { id: 2 },
          },
        },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedResource);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if resource not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { title: "Updated", category: "1" };
      mockPrisma.resource.findUnique.mockResolvedValue(null);

      await updateResource(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Ressource non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { title: "Updated", category: "1" };
      mockPrisma.resource.findUnique.mockRejectedValue(mockError);

      await updateResource(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteResource", () => {
    it("should delete a resource and return 200", async () => {
      const mockResource = {
        id: "1",
        title: "Guide de nutrition",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.resource.findUnique.mockResolvedValue(mockResource);
      mockPrisma.resource.delete.mockResolvedValue(mockResource);

      await deleteResource(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.resource.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.resource.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Ressource supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if resource not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.resource.findUnique.mockResolvedValue(null);

      await deleteResource(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Ressource non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.resource.findUnique.mockRejectedValue(mockError);

      await deleteResource(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
