import { wellnessGoalProgressSchema } from "@/validators/wellnessGoalProgress.validator";

describe("wellnessGoalProgressSchema", () => {
  const validProgress = {
    recordingDate: "2024-11-01",
    achievedValue: 3,
    goalAchieved: true,
    goalId: "goal123",
  };

  it("should validate a correct wellness goal progress", () => {
    const { error } = wellnessGoalProgressSchema.validate(validProgress);
    expect(error).toBeUndefined();
  });

  it("should fail if recordingDate is missing", () => {
    const { error } = wellnessGoalProgressSchema.validate({
      ...validProgress,
      recordingDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'enregistrement est obligatoire."
    );
  });

  it("should fail if recordingDate is not a valid date", () => {
    const { error } = wellnessGoalProgressSchema.validate({
      ...validProgress,
      recordingDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'enregistrement doit être une date valide."
    );
  });

  it("should fail if achievedValue is missing", () => {
    const { error } = wellnessGoalProgressSchema.validate({
      ...validProgress,
      achievedValue: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La valeur atteinte est obligatoire."
    );
  });

  it("should fail if achievedValue is not a number", () => {
    const { error } = wellnessGoalProgressSchema.validate({
      ...validProgress,
      achievedValue: "high",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La valeur atteinte doit être un nombre."
    );
  });

  it("should allow achievedValue to be 0", () => {
    const { error } = wellnessGoalProgressSchema.validate({
      ...validProgress,
      achievedValue: 0,
    });
    expect(error).toBeUndefined();
  });

  it("should fail if achievedValue is negative", () => {
    const { error } = wellnessGoalProgressSchema.validate({
      ...validProgress,
      achievedValue: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La valeur atteinte ne peut pas être négative."
    );
  });

  it("should fail if achievedValue is greater than 5", () => {
    const { error } = wellnessGoalProgressSchema.validate({
      ...validProgress,
      achievedValue: 6,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La valeur atteinte ne peut pas dépasser 5."
    );
  });

  it("should fail if goalAchieved is missing", () => {
    const { error } = wellnessGoalProgressSchema.validate({
      ...validProgress,
      goalAchieved: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'état d'atteinte de l'objectif est obligatoire."
    );
  });

  it("should fail if goalAchieved is not a boolean", () => {
    const { error } = wellnessGoalProgressSchema.validate({
      ...validProgress,
      goalAchieved: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'état d'atteinte de l'objectif doit être un booléen."
    );
  });

  it("should fail if goalId is missing", () => {
    const { error } = wellnessGoalProgressSchema.validate({
      ...validProgress,
      goalId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'objectif est requis"
    );
  });

  it("should fail if goalId is not a string", () => {
    const { error } = wellnessGoalProgressSchema.validate({
      ...validProgress,
      goalId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'objectif doit être une chaîne de caractères."
    );
  });
});
