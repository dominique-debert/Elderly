import { collaborativeProjectSchema } from "@/validators/collaborativeProject.validator";

describe("collaborativeProjectSchema", () => {
  const validProject = {
    title: "Projet collaboratif",
    description: "Un projet pour travailler ensemble",
    creationDate: "2024-10-25",
    difficultyLevel: "moyen",
    status: "en cours",
    creatorId: "user123",
    categoryId: "cat456",
  };

  it("should validate a correct collaborative project", () => {
    const { error } = collaborativeProjectSchema.validate(validProject);
    expect(error).toBeUndefined();
  });

  it("should fail if title is missing", () => {
    const { error } = collaborativeProjectSchema.validate({
      ...validProject,
      title: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le titre est requis");
  });

  it("should fail if creationDate is missing", () => {
    const { error } = collaborativeProjectSchema.validate({
      ...validProject,
      creationDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de création est obligatoire."
    );
  });

  it("should fail if creationDate is not a valid date", () => {
    const { error } = collaborativeProjectSchema.validate({
      ...validProject,
      creationDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de création doit être une date valide."
    );
  });

  it("should fail if difficultyLevel is missing", () => {
    const { error } = collaborativeProjectSchema.validate({
      ...validProject,
      difficultyLevel: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau de difficulté est requis"
    );
  });

  it("should fail if creatorId is missing", () => {
    const { error } = collaborativeProjectSchema.validate({
      ...validProject,
      creatorId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID du créateur est requis");
  });

  it("should fail if categoryId is missing", () => {
    const { error } = collaborativeProjectSchema.validate({
      ...validProject,
      categoryId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie est requis"
    );
  });

  it("should allow empty or null description and status", () => {
    const { error: error1 } = collaborativeProjectSchema.validate({
      ...validProject,
      description: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = collaborativeProjectSchema.validate({
      ...validProject,
      status: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if title is not a string", () => {
    const { error } = collaborativeProjectSchema.validate({
      ...validProject,
      title: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le titre doit être une chaîne de caractères."
    );
  });

  it("should fail if difficultyLevel is not a string", () => {
    const { error } = collaborativeProjectSchema.validate({
      ...validProject,
      difficultyLevel: 1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau de difficulté doit être une chaîne de caractères."
    );
  });
});
