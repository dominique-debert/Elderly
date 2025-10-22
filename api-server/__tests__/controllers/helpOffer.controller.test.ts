import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  helpOffer: {
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
  createHelpOffer,
  getAllHelpOffers,
  getHelpOfferById,
  updateHelpOffer,
  deleteHelpOffer,
} from "@/controllers/helpOffer.controller";

describe("HelpOffer Controller", () => {
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

  describe("createHelpOffer", () => {
    it("should create a help offer and return 201", async () => {
      const mockOfferData = {
        title: "Gardiennage d'animaux",
        description: "Je peux garder vos animaux",
        offererId: "user1",
        offerDate: new Date(),
      };
      const mockCreatedOffer = {
        id: "1",
        ...mockOfferData,
        createdAt: new Date(),
      };

      mockRequest.body = mockOfferData;
      mockPrisma.helpOffer.create.mockResolvedValue(mockCreatedOffer);

      await createHelpOffer(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.helpOffer.create).toHaveBeenCalledWith({
        data: mockOfferData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedOffer);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { title: "Test" };
      mockPrisma.helpOffer.create.mockRejectedValue(mockError);

      await createHelpOffer(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllHelpOffers", () => {
    it("should return all help offers with 200", async () => {
      const mockOffers = [
        {
          id: "1",
          title: "Gardiennage d'animaux",
          offerDate: new Date("2025-10-20"),
        },
        {
          id: "2",
          title: "Aide aux courses",
          offerDate: new Date("2025-10-21"),
        },
      ];

      mockPrisma.helpOffer.findMany.mockResolvedValue(mockOffers);

      await getAllHelpOffers(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.helpOffer.findMany).toHaveBeenCalledWith({
        orderBy: { offerDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        helpOffers: mockOffers,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.helpOffer.findMany.mockRejectedValue(mockError);

      await getAllHelpOffers(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getHelpOfferById", () => {
    it("should return a help offer by id with 200", async () => {
      const mockOffer = {
        id: "1",
        title: "Gardiennage d'animaux",
        description: "Je peux garder vos animaux",
        offerDate: new Date(),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.helpOffer.findUnique.mockResolvedValue(mockOffer);

      await getHelpOfferById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.helpOffer.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockOffer);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if offer not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.helpOffer.findUnique.mockResolvedValue(null);

      await getHelpOfferById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Offre non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.helpOffer.findUnique.mockRejectedValue(mockError);

      await getHelpOfferById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateHelpOffer", () => {
    it("should update a help offer and return 200", async () => {
      const mockExistingOffer = {
        id: "1",
        title: "Gardiennage d'animaux",
        description: "Old description",
      };
      const mockUpdateData = {
        description: "Description mise à jour",
      };
      const mockUpdatedOffer = {
        id: "1",
        title: "Gardiennage d'animaux",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.helpOffer.findUnique.mockResolvedValue(mockExistingOffer);
      mockPrisma.helpOffer.update.mockResolvedValue(mockUpdatedOffer);

      await updateHelpOffer(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.helpOffer.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.helpOffer.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedOffer);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if offer not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { description: "Updated" };
      mockPrisma.helpOffer.findUnique.mockResolvedValue(null);

      await updateHelpOffer(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Offre non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { description: "Updated" };
      mockPrisma.helpOffer.findUnique.mockRejectedValue(mockError);

      await updateHelpOffer(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteHelpOffer", () => {
    it("should delete a help offer and return 200", async () => {
      const mockOffer = {
        id: "1",
        title: "Gardiennage d'animaux",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.helpOffer.findUnique.mockResolvedValue(mockOffer);
      mockPrisma.helpOffer.delete.mockResolvedValue(mockOffer);

      await deleteHelpOffer(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.helpOffer.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.helpOffer.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Offre supprimée avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if offer not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.helpOffer.findUnique.mockResolvedValue(null);

      await deleteHelpOffer(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Offre non trouvée",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.helpOffer.findUnique.mockRejectedValue(mockError);

      await deleteHelpOffer(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
