import { userActivitySchema } from "@/validators/userActivity.validator";

describe("userActivitySchema", () => {
  const validActivity = {
    completionDate: "2024-11-01",
    durationMinutes: 30,
    perceivedDifficultyLevel: 3,
    enjoymentLevel: 4,
    comment: "Bonne séance",
    userId: "user123",
    exerciseProgramId: "prog456",
    cognitiveExerciseId: "cog789",
  };

  it("should validate a correct user activity", () => {
    const { error } = userActivitySchema.validate(validActivity);
    expect(error).toBeUndefined();
  });

  it("should fail if completionDate is missing", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      completionDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de complétion est obligatoire."
    );
  });

  it("should fail if completionDate is not a valid date", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      completionDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de complétion doit être une date valide."
    );
  });

  it("should allow durationMinutes to be 0", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      durationMinutes: 0,
    });
    expect(error).toBeUndefined();
  });

  it("should fail if durationMinutes is negative", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      durationMinutes: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La durée doit être supérieure ou égale à 0."
    );
  });

  it("should fail if durationMinutes is not a number", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      durationMinutes: "thirty",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La durée doit être un nombre."
    );
  });

  it("should fail if perceivedDifficultyLevel is less than 1", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      perceivedDifficultyLevel: 0,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau de difficulté perçu doit être supérieur ou égal à 1."
    );
  });

  it("should fail if perceivedDifficultyLevel is greater than 5", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      perceivedDifficultyLevel: 6,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau de difficulté perçu doit être inférieur ou égal à 5."
    );
  });

  it("should fail if perceivedDifficultyLevel is not a number", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      perceivedDifficultyLevel: "difficile",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau de difficulté perçu doit être un nombre."
    );
  });

  it("should fail if enjoymentLevel is less than 1", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      enjoymentLevel: 0,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau de plaisir doit être supérieur ou égal à 1."
    );
  });

  it("should fail if enjoymentLevel is greater than 5", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      enjoymentLevel: 6,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau de plaisir doit être inférieur ou égal à 5."
    );
  });

  it("should fail if enjoymentLevel is not a number", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      enjoymentLevel: "beaucoup",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau de plaisir doit être un nombre."
    );
  });

  it("should fail if comment is not a string", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      comment: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le commentaire doit être une chaîne de caractères."
    );
  });

  it("should fail if userId is missing", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });

  it("should fail if exerciseProgramId is not a string", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      exerciseProgramId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID du programme d'exercice doit être une chaîne de caractères."
    );
  });

  it("should fail if cognitiveExerciseId is not a string", () => {
    const { error } = userActivitySchema.validate({
      ...validActivity,
      cognitiveExerciseId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'exercice cognitif doit être une chaîne de caractères."
    );
  });
});
