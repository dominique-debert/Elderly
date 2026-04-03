import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  municipalEvent: {
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
  createMunicipalEvent,
  getAllMunicipalEvents,
  getMunicipalEventById,
  updateMunicipalEvent,
  deleteMunicipalEvent,
} from "@/controllers/municipalEvent.controller";

describe("MunicipalEvent Controller", () => {
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

  describe("createMunicipalEvent", () => {
    it("should create a municipal event and return 201", async () => {
      const mockEventData = {
        title: "Fête de la musique",
        description: "Concert en plein air",
        location: "Place de la mairie",
        startDate: new Date("2025-06-21"),
        endDate: new Date("2025-06-21"),
      };
      const mockCreatedEvent = {
        id: "1",
        ...mockEventData,
        createdAt: new Date(),
      };

      mockRequest.body = mockEventData;
      mockPrisma.municipalEvent.create.mockResolvedValue(mockCreatedEvent);

      await createMunicipalEvent(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.municipalEvent.create).toHaveBeenCalledWith({
        data: mockEventData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedEvent);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { title: "Test" };
      mockPrisma.municipalEvent.create.mockRejectedValue(mockError);

      await createMunicipalEvent(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllMunicipalEvents", () => {
    it("should return all municipal events with 200", async () => {
      const mockEvents = [
        {
          id: "1",
          title: "Fête de la musique",
          startDate: new Date("2025-06-21"),
        },
        {
          id: "2",
          title: "Marché de Noël",
          startDate: new Date("2025-12-15"),
        },
      ];

      mockPrisma.municipalEvent.findMany.mockResolvedValue(mockEvents);

      await getAllMunicipalEvents(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.municipalEvent.findMany).toHaveBeenCalledWith({
        orderBy: { startDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        municipalEvents: mockEvents,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.municipalEvent.findMany.mockRejectedValue(mockError);

      await getAllMunicipalEvents(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getMunicipalEventById", () => {
    it("should return a municipal event by id with 200", async () => {
      const mockEvent = {
        id: "1",
        title: "Fête de la musique",
        description: "Concert en plein air",
        location: "Place de la mairie",
        startDate: new Date("2025-06-21"),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.municipalEvent.findUnique.mockResolvedValue(mockEvent);

      await getMunicipalEventById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.municipalEvent.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockEvent);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if event not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.municipalEvent.findUnique.mockResolvedValue(null);

      await getMunicipalEventById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Evénement municipal non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.municipalEvent.findUnique.mockRejectedValue(mockError);

      await getMunicipalEventById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateMunicipalEvent", () => {
    it("should update a municipal event and return 200", async () => {
      const mockExistingEvent = {
        id: "1",
        title: "Fête de la musique",
        description: "Old description",
      };
      const mockUpdateData = {
        description: "Description mise à jour",
        location: "Nouveau lieu",
      };
      const mockUpdatedEvent = {
        id: "1",
        title: "Fête de la musique",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.municipalEvent.findUnique.mockResolvedValue(mockExistingEvent);
      mockPrisma.municipalEvent.update.mockResolvedValue(mockUpdatedEvent);

      await updateMunicipalEvent(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.municipalEvent.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.municipalEvent.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedEvent);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if event not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { description: "Updated" };
      mockPrisma.municipalEvent.findUnique.mockResolvedValue(null);

      await updateMunicipalEvent(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Evénement municipal non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { description: "Updated" };
      mockPrisma.municipalEvent.findUnique.mockRejectedValue(mockError);

      await updateMunicipalEvent(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteMunicipalEvent", () => {
    it("should delete a municipal event and return 200", async () => {
      const mockEvent = {
        id: "1",
        title: "Fête de la musique",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.municipalEvent.findUnique.mockResolvedValue(mockEvent);
      mockPrisma.municipalEvent.delete.mockResolvedValue(mockEvent);

      await deleteMunicipalEvent(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.municipalEvent.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.municipalEvent.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Evénement municipal supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if event not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.municipalEvent.findUnique.mockResolvedValue(null);

      await deleteMunicipalEvent(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Evénement municipal non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.municipalEvent.findUnique.mockRejectedValue(mockError);

      await deleteMunicipalEvent(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
