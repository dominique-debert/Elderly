import { projectTaskSchema } from "@/validators/projectTask.validator";

describe("projectTaskSchema", () => {
  const validTask = {
    title: "Préparer le rapport",
    description: "Rédiger le rapport final du projet",
    creationDate: "2024-10-25",
    dueDate: "2024-11-01",
    status: "en cours",
    projectId: "proj123",
    assigneeId: "user456",
  };

  it("should validate a correct project task", () => {
    const { error } = projectTaskSchema.validate(validTask);
    expect(error).toBeUndefined();
  });

  it("should fail if title is missing", () => {
    const { error } = projectTaskSchema.validate({ ...validTask, title: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le titre est requis");
  });

  it("should fail if title is not a string", () => {
    const { error } = projectTaskSchema.validate({ ...validTask, title: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le titre doit être une chaîne de caractères."
    );
  });

  it("should allow empty or null description, status, and assigneeId", () => {
    const { error: error1 } = projectTaskSchema.validate({
      ...validTask,
      description: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = projectTaskSchema.validate({
      ...validTask,
      status: null,
    });
    expect(error2).toBeUndefined();
    const { error: error3 } = projectTaskSchema.validate({
      ...validTask,
      assigneeId: "",
    });
    expect(error3).toBeUndefined();
  });

  it("should fail if creationDate is missing", () => {
    const { error } = projectTaskSchema.validate({
      ...validTask,
      creationDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de création est obligatoire."
    );
  });

  it("should fail if creationDate is not a valid date", () => {
    const { error } = projectTaskSchema.validate({
      ...validTask,
      creationDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de création doit être une date valide."
    );
  });

  it("should fail if dueDate is not a valid date", () => {
    const { error } = projectTaskSchema.validate({
      ...validTask,
      dueDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'échéance doit être une date valide."
    );
  });

  it("should fail if status is not a string", () => {
    const { error } = projectTaskSchema.validate({ ...validTask, status: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le statut doit être une chaîne de caractères."
    );
  });

  it("should fail if projectId is missing", () => {
    const { error } = projectTaskSchema.validate({
      ...validTask,
      projectId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID du projet est requis");
  });

  it("should fail if projectId is not a string", () => {
    const { error } = projectTaskSchema.validate({
      ...validTask,
      projectId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID du projet doit être une chaîne de caractères."
    );
  });

  it("should fail if assigneeId is not a string", () => {
    const { error } = projectTaskSchema.validate({
      ...validTask,
      assigneeId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'assigné doit être une chaîne de caractères."
    );
  });
});
