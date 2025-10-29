import { urbanIssueReportSchema } from "@/validators/urbanIssueReport.validator";

describe("urbanIssueReportSchema", () => {
  const validReport = {
    description: "Un lampadaire est cassé.",
    address: "12 rue de Paris",
    gpsCoordinates: "48.8566,2.3522",
    reportDate: "2024-11-01",
    status: "signalé",
    cityReference: "PARIS-001",
    userId: "user123",
    categoryId: "cat456",
  };

  it("should validate a correct urban issue report", () => {
    const { error } = urbanIssueReportSchema.validate(validReport);
    expect(error).toBeUndefined();
  });

  it("should fail if description is missing", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      description: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("La description est requise");
  });

  it("should fail if description is not a string", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      description: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La description doit être une chaîne de caractères."
    );
  });

  it("should fail if address is missing", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      address: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'adresse est requise");
  });

  it("should fail if address is not a string", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      address: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'adresse doit être une chaîne de caractères."
    );
  });

  it("should fail if reportDate is missing", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      reportDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de rapport est obligatoire."
    );
  });

  it("should fail if reportDate is not a valid date", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      reportDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de rapport doit être une date valide."
    );
  });

  it("should fail if userId is missing", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });

  it("should fail if gpsCoordinates is not a string", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      gpsCoordinates: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Les coordonnées GPS doivent être une chaîne de caractères."
    );
  });

  it("should fail if status is not a string", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      status: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le statut doit être une chaîne de caractères."
    );
  });

  it("should fail if cityReference is not a string", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      cityReference: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La référence de la ville doit être une chaîne de caractères."
    );
  });

  it("should fail if categoryId is not a string", () => {
    const { error } = urbanIssueReportSchema.validate({
      ...validReport,
      categoryId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie doit être une chaîne de caractères."
    );
  });
});
