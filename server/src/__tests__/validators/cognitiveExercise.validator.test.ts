import { cognitiveExerciseSchema } from "@/validators/cognitiveExercise.validator";

describe("cognitiveExerciseSchema", () => {
  const validExercise = {
    name: "Exercice mémoire",
    description: "Retenir une liste de mots",
    difficultyLevel: "facile",
    durationMinutes: 10,
    image: "",
    categoryId: "cat123",
  };

  it("should validate a correct cognitive exercise", () => {
    const { error } = cognitiveExerciseSchema.validate(validExercise);
    expect(error).toBeUndefined();
  });

  it("should fail if name is missing", () => {
    const { error } = cognitiveExerciseSchema.validate({
      ...validExercise,
      name: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom de l'exercice est requis"
    );
  });

  it("should fail if difficultyLevel is missing", () => {
    const { error } = cognitiveExerciseSchema.validate({
      ...validExercise,
      difficultyLevel: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau de difficulté est requis"
    );
  });

  it("should fail if durationMinutes is missing", () => {
    const { error } = cognitiveExerciseSchema.validate({
      ...validExercise,
      durationMinutes: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("La durée est obligatoire.");
  });

  it("should fail if durationMinutes is not an integer", () => {
    const { error } = cognitiveExerciseSchema.validate({
      ...validExercise,
      durationMinutes: 5.5,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La durée doit être un nombre entier."
    );
  });

  it("should fail if durationMinutes is negative", () => {
    const { error } = cognitiveExerciseSchema.validate({
      ...validExercise,
      durationMinutes: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La durée ne peut pas être négative."
    );
  });

  it("should fail if categoryId is missing", () => {
    const { error } = cognitiveExerciseSchema.validate({
      ...validExercise,
      categoryId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie est requis"
    );
  });

  it("should allow empty or null description and image", () => {
    const { error: error1 } = cognitiveExerciseSchema.validate({
      ...validExercise,
      description: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = cognitiveExerciseSchema.validate({
      ...validExercise,
      image: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if name is not a string", () => {
    const { error } = cognitiveExerciseSchema.validate({
      ...validExercise,
      name: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom de l'exercice doit être une chaîne de caractères."
    );
  });

  it("should fail if difficultyLevel is not a string", () => {
    const { error } = cognitiveExerciseSchema.validate({
      ...validExercise,
      difficultyLevel: 1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau de difficulté doit être une chaîne de caractères."
    );
  });
});
