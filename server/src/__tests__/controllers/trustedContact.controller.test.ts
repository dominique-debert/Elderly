import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  trustedContact: {
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
  createTrustedContact,
  getAllTrustedContacts,
  getTrustedContactById,
  updateTrustedContact,
  deleteTrustedContact,
} from "@/controllers/trustedContact.controller";

describe("TrustedContact Controller", () => {
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

  describe("createTrustedContact", () => {
    it("should create a trusted contact and return 201", async () => {
      const mockContactData = {
        userId: "user1",
        firstName: "Marie",
        lastName: "Dupont",
        relationship: "Soeur",
        phoneNumber: "+33123456789",
        email: "marie.dupont@example.com",
        isPrimary: true,
      };
      const mockCreatedContact = {
        id: "1",
        ...mockContactData,
        createdAt: new Date(),
      };

      mockRequest.body = mockContactData;
      mockPrisma.trustedContact.create.mockResolvedValue(mockCreatedContact);

      await createTrustedContact(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.trustedContact.create).toHaveBeenCalledWith({
        data: {
          ...mockContactData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedContact);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { firstName: "Test" };
      mockPrisma.trustedContact.create.mockRejectedValue(mockError);

      await createTrustedContact(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllTrustedContacts", () => {
    it("should return all trusted contacts with 200", async () => {
      const mockContacts = [
        {
          id: "1",
          firstName: "Marie",
          lastName: "Dupont",
          relationship: "Soeur",
        },
        {
          id: "2",
          firstName: "Jean",
          lastName: "Martin",
          relationship: "Ami",
        },
      ];

      mockPrisma.trustedContact.findMany.mockResolvedValue(mockContacts);

      await getAllTrustedContacts(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.trustedContact.findMany).toHaveBeenCalledWith({
        orderBy: {
          lastName: "desc",
          firstName: "desc",
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        trustedContacts: mockContacts,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.trustedContact.findMany.mockRejectedValue(mockError);

      await getAllTrustedContacts(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getTrustedContactById", () => {
    it("should return a trusted contact by id with 200", async () => {
      const mockContact = {
        id: "1",
        userId: "user1",
        firstName: "Marie",
        lastName: "Dupont",
        relationship: "Soeur",
        phoneNumber: "+33123456789",
        email: "marie.dupont@example.com",
        isPrimary: true,
      };
      mockRequest.params = { id: "1" };
      mockPrisma.trustedContact.findUnique.mockResolvedValue(mockContact);

      await getTrustedContactById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.trustedContact.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockContact);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if contact not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.trustedContact.findUnique.mockResolvedValue(null);

      await getTrustedContactById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Contact de confiance non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.trustedContact.findUnique.mockRejectedValue(mockError);

      await getTrustedContactById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateTrustedContact", () => {
    it("should update a trusted contact and return 200", async () => {
      const mockExistingContact = {
        id: "1",
        firstName: "Marie",
        lastName: "Dupont",
        phoneNumber: "+33123456789",
      };
      const mockUpdateData = {
        firstName: "Marie",
        lastName: "Dupont-Bernard",
        phoneNumber: "+33987654321",
        isPrimary: true,
      };
      const mockUpdatedContact = {
        id: "1",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.trustedContact.findUnique.mockResolvedValue(
        mockExistingContact
      );
      mockPrisma.trustedContact.update.mockResolvedValue(mockUpdatedContact);

      await updateTrustedContact(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.trustedContact.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.trustedContact.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedContact);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if contact not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { firstName: "Updated" };
      mockPrisma.trustedContact.findUnique.mockResolvedValue(null);

      await updateTrustedContact(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Contact de confiance non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { firstName: "Updated" };
      mockPrisma.trustedContact.findUnique.mockRejectedValue(mockError);

      await updateTrustedContact(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteTrustedContact", () => {
    it("should delete a trusted contact and return 200", async () => {
      const mockContact = {
        id: "1",
        firstName: "Marie",
        lastName: "Dupont",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.trustedContact.findUnique.mockResolvedValue(mockContact);
      mockPrisma.trustedContact.delete.mockResolvedValue(mockContact);

      await deleteTrustedContact(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.trustedContact.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.trustedContact.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Contact de confiance supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if contact not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.trustedContact.findUnique.mockResolvedValue(null);

      await deleteTrustedContact(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Contact de confiance non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.trustedContact.findUnique.mockRejectedValue(mockError);

      await deleteTrustedContact(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
