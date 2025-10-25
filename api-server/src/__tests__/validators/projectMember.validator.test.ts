import { projectMemberSchema } from "@/validators/projectMember.validator";

describe("projectMemberSchema", () => {
  const validMember = {
    role: "participant",
    joinDate: "2024-10-25",
    projectId: "proj123",
    userId: "user456",
  };

  it("should validate a correct project member", () => {
    const { error } = projectMemberSchema.validate(validMember);
    expect(error).toBeUndefined();
  });

  it("should fail if role is missing", () => {
    const { error } = projectMemberSchema.validate({
      ...validMember,
      role: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le rôle est requis");
  });

  it("should fail if role is not a string", () => {
    const { error } = projectMemberSchema.validate({
      ...validMember,
      role: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le rôle doit être une chaîne de caractères."
    );
  });

  it("should fail if joinDate is missing", () => {
    const { error } = projectMemberSchema.validate({
      ...validMember,
      joinDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'adhésion est obligatoire."
    );
  });

  it("should fail if joinDate is not a valid date", () => {
    const { error } = projectMemberSchema.validate({
      ...validMember,
      joinDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'adhésion doit être une date valide."
    );
  });

  it("should fail if projectId is missing", () => {
    const { error } = projectMemberSchema.validate({
      ...validMember,
      projectId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID du projet est requis");
  });

  it("should fail if projectId is not a string", () => {
    const { error } = projectMemberSchema.validate({
      ...validMember,
      projectId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID du projet doit être une chaîne de caractères."
    );
  });

  it("should fail if userId is missing", () => {
    const { error } = projectMemberSchema.validate({
      ...validMember,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = projectMemberSchema.validate({
      ...validMember,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });
});
