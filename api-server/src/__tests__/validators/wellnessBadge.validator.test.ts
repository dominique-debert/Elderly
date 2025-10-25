import { wellnessBadgeSchema } from "@/validators/wellnessBadge.validator";

describe("wellnessBadgeSchema", () => {
  const validBadge = {
    name: "Santé",
    description: "Badge pour la santé",
    image: "badge.png",
    level: 3,
    categoryId: "cat123",
  };

  it("should validate a correct wellness badge", () => {
    const { error } = wellnessBadgeSchema.validate(validBadge);
    expect(error).toBeUndefined();
  });

  it("should fail if name is missing", () => {
    const { error } = wellnessBadgeSchema.validate({ ...validBadge, name: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le nom est requis");
  });

  it("should fail if name is not a string", () => {
    const { error } = wellnessBadgeSchema.validate({
      ...validBadge,
      name: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom doit être une chaîne de caractères."
    );
  });

  it("should allow empty or null description and image", () => {
    const { error: error1 } = wellnessBadgeSchema.validate({
      ...validBadge,
      description: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = wellnessBadgeSchema.validate({
      ...validBadge,
      image: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if description is not a string", () => {
    const { error } = wellnessBadgeSchema.validate({
      ...validBadge,
      description: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La description doit être une chaîne de caractères."
    );
  });

  it("should fail if image is not a string", () => {
    const { error } = wellnessBadgeSchema.validate({
      ...validBadge,
      image: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'image doit être une chaîne de caractères."
    );
  });

  it("should fail if level is missing", () => {
    const { error } = wellnessBadgeSchema.validate({
      ...validBadge,
      level: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le niveau est obligatoire.");
  });

  it("should fail if level is not a number", () => {
    const { error } = wellnessBadgeSchema.validate({
      ...validBadge,
      level: "high",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau doit être un nombre."
    );
  });

  it("should allow level to be 0", () => {
    const { error } = wellnessBadgeSchema.validate({ ...validBadge, level: 0 });
    expect(error).toBeUndefined();
  });

  it("should fail if level is less than 0", () => {
    const { error } = wellnessBadgeSchema.validate({
      ...validBadge,
      level: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau doit être au moins 0."
    );
  });

  it("should fail if level is greater than 5", () => {
    const { error } = wellnessBadgeSchema.validate({ ...validBadge, level: 6 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau ne peut pas dépasser 5."
    );
  });

  it("should allow empty or null categoryId", () => {
    const { error: error1 } = wellnessBadgeSchema.validate({
      ...validBadge,
      categoryId: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = wellnessBadgeSchema.validate({
      ...validBadge,
      categoryId: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if categoryId is not a string", () => {
    const { error } = wellnessBadgeSchema.validate({
      ...validBadge,
      categoryId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie doit être une chaîne de caractères."
    );
  });
});
