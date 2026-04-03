import { resourceSchema } from "@/validators/resource.validator";

describe("resourceSchema", () => {
  const validResource = {
    title: "Guide de la santé",
    content: "Voici un guide complet sur la santé.",
    type: "article",
    categoryId: "cat123",
    authorId: "user456",
    adminValidated: true,
  };

  it("should validate a correct resource", () => {
    const { error, value } = resourceSchema.validate(validResource);
    expect(error).toBeUndefined();
    expect(value.adminValidated).toBe(true);
  });

  it("should default adminValidated to false if not provided", () => {
    const { error, value } = resourceSchema.validate({
      ...validResource,
      adminValidated: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.adminValidated).toBe(false);
  });

  it("should fail if title is missing", () => {
    const { error } = resourceSchema.validate({ ...validResource, title: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le titre est requis");
  });

  it("should fail if title is not a string", () => {
    const { error } = resourceSchema.validate({ ...validResource, title: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le titre doit être une chaîne de caractères."
    );
  });

  it("should allow empty or null content and categoryId", () => {
    const { error: error1 } = resourceSchema.validate({
      ...validResource,
      content: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = resourceSchema.validate({
      ...validResource,
      categoryId: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if type is missing", () => {
    const { error } = resourceSchema.validate({ ...validResource, type: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le type est requis");
  });

  it("should fail if type is not a string", () => {
    const { error } = resourceSchema.validate({ ...validResource, type: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le type doit être une chaîne de caractères."
    );
  });

  it("should fail if authorId is missing", () => {
    const { error } = resourceSchema.validate({
      ...validResource,
      authorId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID de l'auteur est requis");
  });

  it("should fail if authorId is not a string", () => {
    const { error } = resourceSchema.validate({
      ...validResource,
      authorId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'auteur doit être une chaîne de caractères."
    );
  });

  it("should fail if adminValidated is not a boolean", () => {
    const { error } = resourceSchema.validate({
      ...validResource,
      adminValidated: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'adminValidated' doit être un booléen."
    );
  });
});
