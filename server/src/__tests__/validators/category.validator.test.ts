import { categorySchema } from "@/validators/category.validator";

describe("categorySchema", () => {
  const validCategoryWithName = {
    name: "Sport",
    description: "Catégorie sportive",
    chapterId: 1,
    typeId: 2,
  };

  const validCategoryWithCategoryName = {
    categoryName: "Culture",
    description: "Catégorie culturelle",
    chapterId: 1,
    typeId: 2,
  };

  it("should validate with name", () => {
    const { error } = categorySchema.validate(validCategoryWithName);
    expect(error).toBeUndefined();
  });

  it("should validate with categoryName", () => {
    const { error } = categorySchema.validate(validCategoryWithCategoryName);
    expect(error).toBeUndefined();
  });

  it("should fail if neither name nor categoryName is provided", () => {
    const { error } = categorySchema.validate({
      description: "Catégorie",
      chapterId: 1,
      typeId: 2,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le nom est obligatoire.");
  });

  it("should fail if name is too short", () => {
    const { error } = categorySchema.validate({
      ...validCategoryWithName,
      name: "A",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom doit contenir au moins 2 caractères."
    );
  });

  it("should fail if categoryName is too long", () => {
    const longName = "A".repeat(101);
    const { error } = categorySchema.validate({
      ...validCategoryWithCategoryName,
      categoryName: longName,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom doit contenir au maximum 100 caractères."
    );
  });

  it("should fail if chapterId is missing", () => {
    const { error } = categorySchema.validate({
      ...validCategoryWithName,
      chapterId: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le chapitre est obligatoire.");
  });

  it("should fail if typeId is missing", () => {
    const { error } = categorySchema.validate({
      ...validCategoryWithName,
      typeId: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le type est obligatoire.");
  });

  it("should fail if description is too long", () => {
    const longDesc = "A".repeat(256);
    const { error } = categorySchema.validate({
      ...validCategoryWithName,
      description: longDesc,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La description ne peut pas dépasser 255 caractères."
    );
  });

  it("should fail if chapterId is not a number", () => {
    const { error } = categorySchema.validate({
      ...validCategoryWithName,
      chapterId: "not-a-number",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le chapitre est requis.");
  });

  it("should fail if typeId is not a number", () => {
    const { error } = categorySchema.validate({
      ...validCategoryWithName,
      typeId: "not-a-number",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le type est requis.");
  });
});
