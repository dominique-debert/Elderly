import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  medicationReminder: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

jest.mock("@/prisma/client.js", () => ({
  PrismaClient: jest.fn().mockImplementation(() => mockPrisma),
}));

// Import controller after mocking
import {
  createMedicationReminder,
  getAllMedicationReminders,
  getMedicationReminderById,
  updateMedicationReminder,
  deleteMedicationReminder,
} from "@/controllers/medicationReminder.controller";

describe("MedicationReminder Controller", () => {
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

  describe("createMedicationReminder", () => {
    it("should create a medication reminder and return 201", async () => {
      const mockReminderData = {
        medicationName: "Aspirine",
        dosage: "500mg",
        frequency: "2 fois par jour",
        userId: "user1",
        reminderTime: new Date("2025-10-22T08:00:00"),
      };
      const mockCreatedReminder = {
        id: "1",
        ...mockReminderData,
        createdAt: new Date(),
      };

      mockRequest.body = mockReminderData;
      mockPrisma.medicationReminder.create.mockResolvedValue(
        mockCreatedReminder
      );

      await createMedicationReminder(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.medicationReminder.create).toHaveBeenCalledWith({
        data: mockReminderData,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedReminder);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { medicationName: "Test" };
      mockPrisma.medicationReminder.create.mockRejectedValue(mockError);

      await createMedicationReminder(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllMedicationReminders", () => {
    it("should return all medication reminders with 200", async () => {
      const mockReminders = [
        {
          id: "1",
          medicationName: "Aspirine",
          dosage: "500mg",
          frequency: "2 fois par jour",
        },
        {
          id: "2",
          medicationName: "Doliprane",
          dosage: "1000mg",
          frequency: "3 fois par jour",
        },
      ];

      mockPrisma.medicationReminder.findMany.mockResolvedValue(mockReminders);

      await getAllMedicationReminders(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.medicationReminder.findMany).toHaveBeenCalledWith({
        orderBy: { medicationName: "asc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        medicationReminders: mockReminders,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.medicationReminder.findMany.mockRejectedValue(mockError);

      await getAllMedicationReminders(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getMedicationReminderById", () => {
    it("should return a medication reminder by id with 200", async () => {
      const mockReminder = {
        id: "1",
        medicationName: "Aspirine",
        dosage: "500mg",
        frequency: "2 fois par jour",
        reminderTime: new Date(),
      };
      mockRequest.params = { id: "1" };
      mockPrisma.medicationReminder.findUnique.mockResolvedValue(mockReminder);

      await getMedicationReminderById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.medicationReminder.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockReminder);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if reminder not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.medicationReminder.findUnique.mockResolvedValue(null);

      await getMedicationReminderById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Rappel de médicament non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.medicationReminder.findUnique.mockRejectedValue(mockError);

      await getMedicationReminderById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateMedicationReminder", () => {
    it("should update a medication reminder and return 200", async () => {
      const mockExistingReminder = {
        id: "1",
        medicationName: "Aspirine",
        dosage: "500mg",
      };
      const mockUpdateData = {
        dosage: "1000mg",
        frequency: "1 fois par jour",
      };
      const mockUpdatedReminder = {
        id: "1",
        medicationName: "Aspirine",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.medicationReminder.findUnique.mockResolvedValue(
        mockExistingReminder
      );
      mockPrisma.medicationReminder.update.mockResolvedValue(
        mockUpdatedReminder
      );

      await updateMedicationReminder(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.medicationReminder.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.medicationReminder.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedReminder);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if reminder not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { dosage: "Updated" };
      mockPrisma.medicationReminder.findUnique.mockResolvedValue(null);

      await updateMedicationReminder(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Rappel de médicament non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { dosage: "Updated" };
      mockPrisma.medicationReminder.findUnique.mockRejectedValue(mockError);

      await updateMedicationReminder(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteMedicationReminder", () => {
    it("should delete a medication reminder and return 200", async () => {
      const mockReminder = {
        id: "1",
        medicationName: "Aspirine",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.medicationReminder.findUnique.mockResolvedValue(mockReminder);
      mockPrisma.medicationReminder.delete.mockResolvedValue(mockReminder);

      await deleteMedicationReminder(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.medicationReminder.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.medicationReminder.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Rappel de médicament supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if reminder not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.medicationReminder.findUnique.mockResolvedValue(null);

      await deleteMedicationReminder(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Rappel de médicament non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.medicationReminder.findUnique.mockRejectedValue(mockError);

      await deleteMedicationReminder(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
