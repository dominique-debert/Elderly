import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  helpRequest: {
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
  createHelpRequest,
  getAllHelpRequests,
  getHelpRequestById,
  updateHelpRequest,
  deleteHelpRequest,
} from "@/controllers/helpRequest.controller";

describe("HelpRequest Controller", () => {
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

  describe("createHelpRequest", () => {
    it("should create a help request and return 201", async () => {
      const mockRequestData = {
        title: "Besoin d'aide pour les courses",
        description: "Je ne peux pas sortir faire mes courses",
        requesterId: "user1",
        neededDate: new Date(),
      };
      const mockCreatedRequest = {
        id: "1",
        ...mockRequestData,
        createdAt: new Date(),
      };

      mockRequest.body = mockRequestData;
      mockPrisma.helpRequest.create.mockResolvedValue(mockCreatedRequest);

      await createHelpRequest(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.helpRequest.create).toHaveBeenCalledWith({
        data: mockRequestData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedRequest);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { title: "Test" };
      mockPrisma.helpRequest.create.mockRejectedValue(mockError);

      await createHelpRequest(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllHelpRequests", () => {
    it("should return all help requests with 200", async () => {
      const mockRequests = [
        {
          id: "1",
          title: "Besoin d'aide pour les courses",
          neededDate: new Date("2025-10-25"),
        },
        {
          id: "2",
          title: "Aide pour le ménage",
          neededDate: new Date("2025-10-23"),
        },
      ];

      mockPrisma.helpRequest.findMany.mockResolvedValue(mockRequests);

      await getAllHelpRequests(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.helpRequest.findMany).toHaveBeenCalledWith({
        orderBy: { neededDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        helpRequests: mockRequests,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.helpRequest.findMany.mockRejectedValue(mockError);

      await getAllHelpRequests(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getHelpRequestById", () => {
    it("should return a help request by id with 200", async () => {
      const mockHelpRequest = {
        id: "1",
        title: "Besoin d'aide pour les courses",
        description: "Je ne peux pas sortir",
        neededDate: new Date(),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.helpRequest.findUnique.mockResolvedValue(mockHelpRequest);

      await getHelpRequestById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.helpRequest.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockHelpRequest);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if request not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.helpRequest.findUnique.mockResolvedValue(null);

      await getHelpRequestById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Demande non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.helpRequest.findUnique.mockRejectedValue(mockError);

      await getHelpRequestById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateHelpRequest", () => {
    it("should update a help request and return 200", async () => {
      const mockExistingRequest = {
        id: "1",
        title: "Besoin d'aide pour les courses",
        description: "Old description",
      };
      const mockUpdateData = {
        description: "Description mise à jour",
        neededDate: new Date("2025-10-30"),
      };
      const mockUpdatedRequest = {
        id: "1",
        title: "Besoin d'aide pour les courses",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.helpRequest.findUnique.mockResolvedValue(mockExistingRequest);
      mockPrisma.helpRequest.update.mockResolvedValue(mockUpdatedRequest);

      await updateHelpRequest(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.helpRequest.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.helpRequest.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedRequest);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if request not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { description: "Updated" };
      mockPrisma.helpRequest.findUnique.mockResolvedValue(null);

      await updateHelpRequest(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Demande non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { description: "Updated" };
      mockPrisma.helpRequest.findUnique.mockRejectedValue(mockError);

      await updateHelpRequest(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteHelpRequest", () => {
    it("should delete a help request and return 200", async () => {
      const mockHelpRequest = {
        id: "1",
        title: "Besoin d'aide pour les courses",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.helpRequest.findUnique.mockResolvedValue(mockHelpRequest);
      mockPrisma.helpRequest.delete.mockResolvedValue(mockHelpRequest);

      await deleteHelpRequest(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.helpRequest.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.helpRequest.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Demande supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if request not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.helpRequest.findUnique.mockResolvedValue(null);

      await deleteHelpRequest(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Demande non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.helpRequest.findUnique.mockRejectedValue(mockError);

      await deleteHelpRequest(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
