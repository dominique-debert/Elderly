import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  videoCall: {
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
  createVideoCall,
  getAllVideoCalls,
  getVideoCallById,
  updateVideoCall,
  deleteVideoCall,
} from "@/controllers/videoCall.controller";

describe("VideoCall Controller", () => {
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

  describe("createVideoCall", () => {
    it("should create a video call and return 201", async () => {
      const mockCallData = {
        callerId: "user1",
        receiverId: "user2",
        callType: "ONE_ON_ONE",
        status: "PENDING",
        startTime: new Date("2025-10-23T14:00:00Z"),
        roomId: "room-abc-123",
        platform: "WebRTC",
      };
      const mockCreatedCall = {
        id: "1",
        ...mockCallData,
        createdAt: new Date(),
      };

      mockRequest.body = mockCallData;
      mockPrisma.videoCall.create.mockResolvedValue(mockCreatedCall);

      await createVideoCall(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.videoCall.create).toHaveBeenCalledWith({
        data: {
          ...mockCallData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedCall);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { callerId: "user1" };
      mockPrisma.videoCall.create.mockRejectedValue(mockError);

      await createVideoCall(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllVideoCalls", () => {
    it("should return all video calls with 200", async () => {
      const mockCalls = [
        {
          id: "1",
          callerId: "user1",
          receiverId: "user2",
          status: "COMPLETED",
          createdAt: new Date("2025-10-22"),
        },
        {
          id: "2",
          callerId: "user3",
          receiverId: "user4",
          status: "ACTIVE",
          createdAt: new Date("2025-10-20"),
        },
      ];

      mockPrisma.videoCall.findMany.mockResolvedValue(mockCalls);

      await getAllVideoCalls(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.videoCall.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        userStatistics: mockCalls,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.videoCall.findMany.mockRejectedValue(mockError);

      await getAllVideoCalls(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getVideoCallById", () => {
    it("should return a video call by id with 200", async () => {
      const mockCall = {
        id: "1",
        callerId: "user1",
        receiverId: "user2",
        callType: "ONE_ON_ONE",
        status: "ACTIVE",
        startTime: new Date("2025-10-23T14:00:00Z"),
        endTime: null,
        roomId: "room-abc-123",
        platform: "WebRTC",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.videoCall.findUnique.mockResolvedValue(mockCall);

      await getVideoCallById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.videoCall.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCall);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if video call not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.videoCall.findUnique.mockResolvedValue(null);

      await getVideoCallById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Appel vidéo non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.videoCall.findUnique.mockRejectedValue(mockError);

      await getVideoCallById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateVideoCall", () => {
    it("should update a video call and return 200", async () => {
      const mockExistingCall = {
        id: "1",
        callerId: "user1",
        receiverId: "user2",
        status: "PENDING",
      };
      const mockUpdateData = {
        status: "ACTIVE",
        startTime: new Date("2025-10-23T14:05:00Z"),
        participants: ["user1", "user2", "user3"],
      };
      const mockUpdatedCall = {
        id: "1",
        callerId: "user1",
        receiverId: "user2",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.videoCall.findUnique.mockResolvedValue(mockExistingCall);
      mockPrisma.videoCall.update.mockResolvedValue(mockUpdatedCall);

      await updateVideoCall(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.videoCall.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.videoCall.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedCall);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if video call not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { status: "COMPLETED" };
      mockPrisma.videoCall.findUnique.mockResolvedValue(null);

      await updateVideoCall(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Appel vidéo non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { status: "COMPLETED" };
      mockPrisma.videoCall.findUnique.mockRejectedValue(mockError);

      await updateVideoCall(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteVideoCall", () => {
    it("should delete a video call and return 200", async () => {
      const mockCall = {
        id: "1",
        callerId: "user1",
        receiverId: "user2",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.videoCall.findUnique.mockResolvedValue(mockCall);
      mockPrisma.videoCall.delete.mockResolvedValue(mockCall);

      await deleteVideoCall(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.videoCall.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.videoCall.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Appel vidéo supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if video call not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.videoCall.findUnique.mockResolvedValue(null);

      await deleteVideoCall(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Appel vidéo non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.videoCall.findUnique.mockRejectedValue(mockError);

      await deleteVideoCall(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
