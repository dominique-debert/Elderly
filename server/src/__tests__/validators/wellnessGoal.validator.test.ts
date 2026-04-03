import { wellnessGoalSchema } from "@/validators/wellnessGoal.validator";

describe("wellnessGoalSchema", () => {
  const validGoal = {
    title: "Marcher 10 000 pas",
    targetValue: 5,
    unit: "pas",
    frequency: "quotidien",
    startDate: "2024-11-01",
    endDate: "2024-12-01",
    active: true,
    userId: "user123",
    categoryId: "cat456",
  };

  it("should validate a correct wellness goal", () => {
    const { error } = wellnessGoalSchema.validate(validGoal);
    expect(error).toBeUndefined();
  });

  it("should fail if title is missing", () => {
    const { error } = wellnessGoalSchema.validate({ ...validGoal, title: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le titre est requis");
  });

  it("should fail if title is not a string", () => {
    const { error } = wellnessGoalSchema.validate({ ...validGoal, title: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le titre doit être une chaîne de caractères."
    );
  });

  it("should fail if targetValue is missing", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      targetValue: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La valeur cible est obligatoire."
    );
  });

  it("should fail if targetValue is not a number", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      targetValue: "high",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La valeur cible doit être un nombre."
    );
  });

  it("should fail if targetValue is negative", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      targetValue: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La valeur cible ne peut pas être négative."
    );
  });

  it("should fail if targetValue is greater than 5", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      targetValue: 6,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La valeur cible ne peut pas dépasser 5."
    );
  });

  it("should fail if unit is missing", () => {
    const { error } = wellnessGoalSchema.validate({ ...validGoal, unit: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'unité est requise");
  });

  it("should fail if unit is not a string", () => {
    const { error } = wellnessGoalSchema.validate({ ...validGoal, unit: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'unité doit être une chaîne de caractères."
    );
  });

  it("should fail if frequency is missing", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      frequency: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("La fréquence est requise");
  });

  it("should fail if frequency is not a string", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      frequency: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La fréquence doit être une chaîne de caractères."
    );
  });

  it("should fail if startDate is missing", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      startDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de début est obligatoire."
    );
  });

  it("should fail if startDate is not a valid date", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      startDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de début doit être une date valide."
    );
  });

  it("should fail if endDate is missing", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      endDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de fin est obligatoire."
    );
  });

  it("should fail if endDate is not a valid date", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      endDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de fin doit être une date valide."
    );
  });

  it("should fail if active is missing", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      active: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'état actif est obligatoire."
    );
  });

  it("should fail if active is not a boolean", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      active: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'état actif doit être un booléen."
    );
  });

  it("should fail if userId is missing", () => {
    const { error } = wellnessGoalSchema.validate({ ...validGoal, userId: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });

  it("should fail if categoryId is missing", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      categoryId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie est requis"
    );
  });

  it("should fail if categoryId is not a string", () => {
    const { error } = wellnessGoalSchema.validate({
      ...validGoal,
      categoryId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie doit être une chaîne de caractères."
    );
  });
});
