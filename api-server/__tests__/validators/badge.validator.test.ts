import { badgeSchema } from "@/validators/badge.validator";

describe("badgeSchema", () => {
  const validBadge = {
    name: "Badge Or",
    description: "Badge pour les meilleurs utilisateurs",
    icon: "star.png",
    categoryId: "cat123",
    level: 5,
  };

  it("should validate a correct badge", () => {
    const { error } = badgeSchema.validate(validBadge);
    expect(error).toBeUndefined();
  });

  it("should fail if name is missing", () => {
    const { error } = badgeSchema.validate({ ...validBadge, name: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le nom du badge est requis");
  });

  it("should fail if description is missing", () => {
    const { error } = badgeSchema.validate({ ...validBadge, description: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La description du badge est requise"
    );
  });

  it("should fail if icon is missing", () => {
    const { error } = badgeSchema.validate({ ...validBadge, icon: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'icône du badge est requise");
  });

  it("should fail if categoryId is missing", () => {
    const { error } = badgeSchema.validate({ ...validBadge, categoryId: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie est requis"
    );
  });

  it("should fail if level is not a number", () => {
    const { error } = badgeSchema.validate({ ...validBadge, level: "high" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau doit être un nombre."
    );
  });

  it("should fail if level is not an integer", () => {
    const { error } = badgeSchema.validate({ ...validBadge, level: 5.5 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau doit être un nombre entier."
    );
  });

  it("should fail if level is less than 0", () => {
    const { error } = badgeSchema.validate({ ...validBadge, level: -1 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau doit être supérieur ou égal à 0."
    );
  });

  it("should fail if level is greater than 10", () => {
    const { error } = badgeSchema.validate({ ...validBadge, level: 11 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau doit être inférieur ou égal à 10."
    );
  });
});
