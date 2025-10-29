import { exerciseProgramSchema } from "@/validators/exerciseProgram.validator";

describe("exerciseProgramSchema", () => {
  const validProgram = {
    name: "Programme Cardio",
    difficultyLevel: 2,
    adaptedForReducedMobility: true,
    durationMinutes: 30,
    description: "Programme pour améliorer l'endurance",
    videoLink: "https://video.example.com/cardio",
    image: "cardio.png",
    categoryId: "cat123",
  };

  it("should validate a correct exercise program", () => {
    const { error } = exerciseProgramSchema.validate(validProgram);
    expect(error).toBeUndefined();
  });

  it("should fail if name is missing", () => {
    const { error } = exerciseProgramSchema.validate({
      ...validProgram,
      name: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le nom est requis");
  });

  it("should fail if difficultyLevel is not a number", () => {
    const { error } = exerciseProgramSchema.validate({
      ...validProgram,
      difficultyLevel: "hard",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau de difficulté doit être un nombre."
    );
  });

  it("should default adaptedForReducedMobility to false if not provided", () => {
    const { error, value } = exerciseProgramSchema.validate({
      ...validProgram,
      adaptedForReducedMobility: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.adaptedForReducedMobility).toBe(false);
  });

  it("should fail if durationMinutes is negative", () => {
    const { error } = exerciseProgramSchema.validate({
      ...validProgram,
      durationMinutes: -5,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La durée doit être supérieure ou égale à 0."
    );
  });

  it("should allow empty or null description, videoLink, and image", () => {
    const { error: error1 } = exerciseProgramSchema.validate({
      ...validProgram,
      description: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = exerciseProgramSchema.validate({
      ...validProgram,
      videoLink: null,
    });
    expect(error2).toBeUndefined();
    const { error: error3 } = exerciseProgramSchema.validate({
      ...validProgram,
      image: "",
    });
    expect(error3).toBeUndefined();
  });

  it("should fail if categoryId is missing", () => {
    const { error } = exerciseProgramSchema.validate({
      ...validProgram,
      categoryId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie est requis"
    );
  });

  it("should fail if adaptedForReducedMobility is not a boolean", () => {
    const { error } = exerciseProgramSchema.validate({
      ...validProgram,
      adaptedForReducedMobility: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'adaptedForReducedMobility' doit être un booléen."
    );
  });
});
