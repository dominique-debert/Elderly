import { Request, Response, NextFunction } from "express";

// Mock PrismaClient before importing the controller
const mockPrisma = {
  urbanIssueReport: {
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
  createUrbanIssueReport,
  getAllUrbanIssueReports,
  getUrbanIssueReportById,
  updateUrbanIssueReport,
  deleteUrbanIssueReport,
} from "@/controllers/urbanIssueReport.controller";

describe("UrbanIssueReport Controller", () => {
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

  describe("createUrbanIssueReport", () => {
    it("should create an urban issue report and return 201", async () => {
      const mockReportData = {
        userId: "user1",
        issueType: "Nid de poule",
        description: "Gros nid de poule sur la rue principale",
        location: "123 Rue de la République",
        latitude: 48.8566,
        longitude: 2.3522,
        reportDate: new Date("2025-10-20"),
        status: "PENDING",
        priority: "HIGH",
      };
      const mockCreatedReport = {
        id: "1",
        ...mockReportData,
        createdAt: new Date(),
      };

      mockRequest.body = mockReportData;
      mockPrisma.urbanIssueReport.create.mockResolvedValue(mockCreatedReport);

      await createUrbanIssueReport(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.urbanIssueReport.create).toHaveBeenCalledWith({
        data: {
          ...mockReportData,
        },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCreatedReport);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.body = { issueType: "Test" };
      mockPrisma.urbanIssueReport.create.mockRejectedValue(mockError);

      await createUrbanIssueReport(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getAllUrbanIssueReports", () => {
    it("should return all urban issue reports with 200", async () => {
      const mockReports = [
        {
          id: "1",
          issueType: "Nid de poule",
          status: "PENDING",
          reportDate: new Date("2025-10-22"),
        },
        {
          id: "2",
          issueType: "Graffiti",
          status: "IN_PROGRESS",
          reportDate: new Date("2025-10-20"),
        },
      ];

      mockPrisma.urbanIssueReport.findMany.mockResolvedValue(mockReports);

      await getAllUrbanIssueReports(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.urbanIssueReport.findMany).toHaveBeenCalledWith({
        orderBy: { reportDate: "desc" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        urbanIssueReports: mockReports,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockPrisma.urbanIssueReport.findMany.mockRejectedValue(mockError);

      await getAllUrbanIssueReports(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getUrbanIssueReportById", () => {
    it("should return an urban issue report by id with 200", async () => {
      const mockReport = {
        id: "1",
        userId: "user1",
        issueType: "Nid de poule",
        description: "Gros nid de poule sur la rue principale",
        location: "123 Rue de la République",
        latitude: 48.8566,
        longitude: 2.3522,
        reportDate: new Date("2025-10-20"),
        status: "PENDING",
        priority: "HIGH",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.urbanIssueReport.findUnique.mockResolvedValue(mockReport);

      await getUrbanIssueReportById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.urbanIssueReport.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockReport);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if report not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.urbanIssueReport.findUnique.mockResolvedValue(null);

      await getUrbanIssueReportById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Rapport de problème urbain non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.urbanIssueReport.findUnique.mockRejectedValue(mockError);

      await getUrbanIssueReportById(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("updateUrbanIssueReport", () => {
    it("should update an urban issue report and return 200", async () => {
      const mockExistingReport = {
        id: "1",
        issueType: "Nid de poule",
        status: "PENDING",
      };
      const mockUpdateData = {
        status: "IN_PROGRESS",
        priority: "HIGH",
        assignedTo: "worker1",
      };
      const mockUpdatedReport = {
        id: "1",
        issueType: "Nid de poule",
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      mockRequest.params = { id: "1" };
      mockRequest.body = mockUpdateData;
      mockPrisma.urbanIssueReport.findUnique.mockResolvedValue(
        mockExistingReport
      );
      mockPrisma.urbanIssueReport.update.mockResolvedValue(mockUpdatedReport);

      await updateUrbanIssueReport(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.urbanIssueReport.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.urbanIssueReport.update).toHaveBeenCalledWith({
        data: { ...mockUpdateData, updatedAt: expect.any(Date) },
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUpdatedReport);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if report not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockRequest.body = { status: "RESOLVED" };
      mockPrisma.urbanIssueReport.findUnique.mockResolvedValue(null);

      await updateUrbanIssueReport(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Rapport de problème urbain non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockRequest.body = { status: "RESOLVED" };
      mockPrisma.urbanIssueReport.findUnique.mockRejectedValue(mockError);

      await updateUrbanIssueReport(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteUrbanIssueReport", () => {
    it("should delete an urban issue report and return 200", async () => {
      const mockReport = {
        id: "1",
        issueType: "Nid de poule",
      };
      mockRequest.params = { id: "1" };
      mockPrisma.urbanIssueReport.findUnique.mockResolvedValue(mockReport);
      mockPrisma.urbanIssueReport.delete.mockResolvedValue(mockReport);

      await deleteUrbanIssueReport(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockPrisma.urbanIssueReport.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockPrisma.urbanIssueReport.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Rapport de problème urbain supprimé avec succès",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call next with 404 error if report not found", async () => {
      mockRequest.params = { id: "nonexistent" };
      mockPrisma.urbanIssueReport.findUnique.mockResolvedValue(null);

      await deleteUrbanIssueReport(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 404,
          message: "Rapport de problème urbain non trouvé",
        })
      );
    });

    it("should call next with error on failure", async () => {
      const mockError = new Error("Database error");
      mockRequest.params = { id: "1" };
      mockPrisma.urbanIssueReport.findUnique.mockRejectedValue(mockError);

      await deleteUrbanIssueReport(
        mockRequest as Request<{ id: string }>,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
