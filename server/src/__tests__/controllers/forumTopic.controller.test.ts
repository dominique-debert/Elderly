import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  forumTopic: {
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
  createForumTopic,
  getAllForumTopics,
  getForumTopicById,
  updateForumTopic,
  deleteForumTopic,
} from "@/controllers/forumTopic.controller";

describe("ForumTopic Controller", () => {
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

  describe("createForumTopic", () => {
    it("should create a forum topic and return 201", async () => {
      const mockTopicData = {
        title: "Test topic",
        author_id: "user1",
        category_id: 1,
        pinned: false,
        status: "open",
        views: 0,
      };
      const mockCreatedTopic = {
        id: "topic1",
        title: "Test topic",
        pinned: false,
        status: "open",
        views: 0,
        author_id: "user1",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockRequest.body = mockTopicData;
      mockPrisma.forumTopic.create.mockResolvedValue(mockCreatedTopic);

      await createForumTopic(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.forumTopic.create).toHaveBeenCalledWith({
        data: {
          title: mockTopicData.title,
          pinned: mockTopicData.pinned,
          status: mockTopicData.status,
          views: mockTopicData.views,
          user: {
            connect: { id: mockTopicData.author_id },
          },
          category: {
            connect: { id: mockTopicData.category_id },
          },
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedTopic);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = {
        title: "Test topic",
        author_id: "user1",
        category_id: 1,
      };
      mockPrisma.forumTopic.create.mockRejectedValue(mockError);

      await createForumTopic(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllForumTopics", () => {
    it("should return all forum topics with 200", async () => {
      const mockTopics = [
        {
          id: "topic1",
          title: "Topic 1",
          pinned: false,
          status: "open",
          views: 10,
          createdAt: new Date(),
        },
        {
          id: "topic2",
          title: "Topic 2",
          pinned: true,
          status: "open",
          views: 25,
          createdAt: new Date(),
        },
      ];

      mockPrisma.forumTopic.findMany.mockResolvedValue(mockTopics);

      await getAllForumTopics(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.forumTopic.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        forumTopics: mockTopics,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.forumTopic.findMany.mockRejectedValue(mockError);

      await getAllForumTopics(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getForumTopicById", () => {
    it("should return a forum topic by id with 200", async () => {
      const mockTopic = {
        id: "topic1",
        title: "Test topic",
        pinned: false,
        status: "open",
        views: 15,
        createdAt: new Date(),
      };
      mockRequest.params = { id: "topic1" };
      mockPrisma.forumTopic.findUnique.mockResolvedValue(mockTopic);

      await getForumTopicById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.forumTopic.findUnique).toHaveBeenCalledWith({
        where: { id: "topic1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockTopic);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if topic not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.forumTopic.findUnique.mockResolvedValue(null);

      await getForumTopicById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Message non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "topic1" };
      mockPrisma.forumTopic.findUnique.mockRejectedValue(mockError);

      await getForumTopicById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateForumTopic", () => {
    it("should update a forum topic and return 200", async () => {
      const mockExistingTopic = {
        id: "topic1",
        title: "Old title",
        pinned: false,
        status: "open",
      };
      const mockUpdateData = {
        title: "Updated title",
        pinned: true,
        status: "closed",
      };
      const mockUpdatedTopic = {
        id: "topic1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "topic1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.forumTopic.findUnique.mockResolvedValue(mockExistingTopic);
      mockPrisma.forumTopic.update.mockResolvedValue(mockUpdatedTopic);

      await updateForumTopic(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.forumTopic.findUnique).toHaveBeenCalledWith({
        where: { id: "topic1" },
      });
      expect(mockPrisma.forumTopic.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "topic1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedTopic);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if topic not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { title: "Updated" };
      mockPrisma.forumTopic.findUnique.mockResolvedValue(null);

      await updateForumTopic(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Message non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "topic1" };
      mockRequest.body = { title: "Updated" };
      mockPrisma.forumTopic.findUnique.mockRejectedValue(mockError);

      await updateForumTopic(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteForumTopic", () => {
    it("should delete a forum topic and return 200", async () => {
      const mockTopic = { id: "topic1", title: "Test topic" };
      mockRequest.params = { id: "topic1" };
      mockPrisma.forumTopic.findUnique.mockResolvedValue(mockTopic);
      mockPrisma.forumTopic.delete.mockResolvedValue(mockTopic);

      await deleteForumTopic(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.forumTopic.findUnique).toHaveBeenCalledWith({
        where: { id: "topic1" },
      });
      expect(mockPrisma.forumTopic.delete).toHaveBeenCalledWith({
        where: { id: "topic1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Message supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if topic not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.forumTopic.findUnique.mockResolvedValue(null);

      await deleteForumTopic(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Message non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "topic1" };
      mockPrisma.forumTopic.findUnique.mockRejectedValue(mockError);

      await deleteForumTopic(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
