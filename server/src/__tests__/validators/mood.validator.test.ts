import { moodSchema } from "@/validators/mood.validator";

describe("moodSchema", () => {
  const validMood = {
    name: "Heureux",
    description: "Je me sens très bien aujourd'hui",
    valence: "positive",
    intensity: 5,
    color: "#00FF00",
  };

  it("should validate a correct mood", () => {
    const { error } = moodSchema.validate(validMood);
    expect(error).toBeUndefined();
  });

  it("should fail if name is too short", () => {
    const { error } = moodSchema.validate({ ...validMood, name: "A" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom doit contenir au moins 2 caractères."
    );
  });

  it("should fail if name is missing", () => {
    const { error } = moodSchema.validate({ ...validMood, name: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le nom est requis");
  });

  it("should allow empty or null description", () => {
    const { error: error1 } = moodSchema.validate({
      ...validMood,
      description: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = moodSchema.validate({
      ...validMood,
      description: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if valence is not valid", () => {
    const { error } = moodSchema.validate({ ...validMood, valence: "joyeux" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La valence doit être 'positive', 'negative' ou 'neutre'."
    );
  });

  it("should fail if intensity is not a number", () => {
    const { error } = moodSchema.validate({ ...validMood, intensity: "fort" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'intensité doit être un nombre."
    );
  });

  it("should fail if intensity is not an integer", () => {
    const { error } = moodSchema.validate({ ...validMood, intensity: 2.5 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'intensité doit être un entier."
    );
  });

  it("should fail if intensity is less than 1", () => {
    const { error } = moodSchema.validate({ ...validMood, intensity: 0 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'intensité doit être d'au moins 1."
    );
  });

  it("should fail if intensity is greater than 5", () => {
    const { error } = moodSchema.validate({ ...validMood, intensity: 6 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'intensité ne peut pas dépasser 5."
    );
  });

  it("should fail if color is not a valid hex code", () => {
    const { error } = moodSchema.validate({ ...validMood, color: "vert" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La couleur doit être un code hexadécimal valide."
    );
  });

  it("should fail if color is missing", () => {
    const { error } = moodSchema.validate({ ...validMood, color: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("La couleur est obligatoire.");
  });
});
