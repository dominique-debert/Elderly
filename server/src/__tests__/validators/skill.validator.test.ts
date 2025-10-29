import { skillSchema } from "@/validators/skill.validator";

describe("skillSchema", () => {
  const validSkill = {
    name: "Programmation",
    description: "Développement d'applications web",
    categoryId: "cat123",
  };

  it("should validate a correct skill", () => {
    const { error } = skillSchema.validate(validSkill);
    expect(error).toBeUndefined();
  });

  it("should fail if name is missing", () => {
    const { error } = skillSchema.validate({ ...validSkill, name: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom de la compétence est requis"
    );
  });

  it("should fail if name is not a string", () => {
    const { error } = skillSchema.validate({ ...validSkill, name: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom de la compétence doit être une chaîne de caractères."
    );
  });

  it("should allow empty or null description", () => {
    const { error: error1 } = skillSchema.validate({
      ...validSkill,
      description: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = skillSchema.validate({
      ...validSkill,
      description: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if description is not a string", () => {
    const { error } = skillSchema.validate({ ...validSkill, description: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La description doit être une chaîne de caractères."
    );
  });

  it("should allow empty or null categoryId", () => {
    const { error: error1 } = skillSchema.validate({
      ...validSkill,
      categoryId: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = skillSchema.validate({
      ...validSkill,
      categoryId: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if categoryId is not a string", () => {
    const { error } = skillSchema.validate({ ...validSkill, categoryId: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie doit être une chaîne de caractères."
    );
  });
});
