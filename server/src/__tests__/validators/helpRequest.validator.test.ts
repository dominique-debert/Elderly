import { helpRequestSchema } from "@/validators/helpRequest.validator";

describe("helpRequestSchema", () => {
  const validRequest = {
    title: "Besoin d'aide pour déménager",
    description: "Aide pour porter des cartons",
    neededDate: "2024-10-30",
    estimatedDuration: 120,
    location: "Paris",
    gpsCoordinates: "48.8566,2.3522",
    recurring: true,
    frequency: "hebdomadaire",
    status: "en attente",
    pointsOffered: 50,
    creatorId: "user123",
    categoryId: "cat456",
  };

  it("should validate a correct help request", () => {
    const { error } = helpRequestSchema.validate(validRequest);
    expect(error).toBeUndefined();
  });

  it("should fail if title is missing", () => {
    const { error } = helpRequestSchema.validate({
      ...validRequest,
      title: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le titre est requis");
  });

  it("should fail if neededDate is missing", () => {
    const { error } = helpRequestSchema.validate({
      ...validRequest,
      neededDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date requise est obligatoire."
    );
  });

  it("should fail if neededDate is not a valid date", () => {
    const { error } = helpRequestSchema.validate({
      ...validRequest,
      neededDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date requise doit être une date valide."
    );
  });

  it("should fail if estimatedDuration is negative", () => {
    const { error } = helpRequestSchema.validate({
      ...validRequest,
      estimatedDuration: -10,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La durée estimée ne peut pas être inférieure à 0."
    );
  });

  it("should default estimatedDuration, pointsOffered, and recurring if not provided", () => {
    const { error, value } = helpRequestSchema.validate({
      title: "Aide",
      neededDate: "2024-10-30",
      creatorId: "user123",
      categoryId: "cat456",
    });
    expect(error).toBeUndefined();
    expect(value.estimatedDuration).toBe(0);
    expect(value.pointsOffered).toBe(0);
    expect(value.recurring).toBe(false);
  });

  it("should allow empty or null description, location, gpsCoordinates, frequency, and status", () => {
    const { error: error1 } = helpRequestSchema.validate({
      ...validRequest,
      description: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = helpRequestSchema.validate({
      ...validRequest,
      location: null,
    });
    expect(error2).toBeUndefined();
    const { error: error3 } = helpRequestSchema.validate({
      ...validRequest,
      gpsCoordinates: "",
    });
    expect(error3).toBeUndefined();
    const { error: error4 } = helpRequestSchema.validate({
      ...validRequest,
      frequency: null,
    });
    expect(error4).toBeUndefined();
    const { error: error5 } = helpRequestSchema.validate({
      ...validRequest,
      status: "",
    });
    expect(error5).toBeUndefined();
  });

  it("should fail if creatorId is missing", () => {
    const { error } = helpRequestSchema.validate({
      ...validRequest,
      creatorId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID du créateur est requis");
  });

  it("should fail if categoryId is missing", () => {
    const { error } = helpRequestSchema.validate({
      ...validRequest,
      categoryId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie est requis"
    );
  });

  it("should fail if pointsOffered is not a number", () => {
    const { error } = helpRequestSchema.validate({
      ...validRequest,
      pointsOffered: "fifty",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Les points offerts doivent être un nombre."
    );
  });
});
