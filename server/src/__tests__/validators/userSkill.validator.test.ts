import { userSkillSchema } from "@/validators/userSkill.validator";

describe("userSkillSchema", () => {
  const validUserSkill = {
    level: 5,
    userId: "user123",
    skillId: "skill456",
  };

  it("should validate a correct user skill", () => {
    const { error } = userSkillSchema.validate(validUserSkill);
    expect(error).toBeUndefined();
  });

  it("should fail if level is missing", () => {
    const { error } = userSkillSchema.validate({
      ...validUserSkill,
      level: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le niveau est obligatoire.");
  });

  it("should fail if level is not a number", () => {
    const { error } = userSkillSchema.validate({
      ...validUserSkill,
      level: "high",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau doit être un nombre."
    );
  });

  it("should fail if level is less than 1", () => {
    const { error } = userSkillSchema.validate({ ...validUserSkill, level: 0 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau doit être supérieur ou égal à 1."
    );
  });

  it("should fail if level is greater than 10", () => {
    const { error } = userSkillSchema.validate({
      ...validUserSkill,
      level: 11,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau doit être inférieur ou égal à 10."
    );
  });

  it("should fail if userId is missing", () => {
    const { error } = userSkillSchema.validate({
      ...validUserSkill,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = userSkillSchema.validate({
      ...validUserSkill,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });

  it("should fail if skillId is missing", () => {
    const { error } = userSkillSchema.validate({
      ...validUserSkill,
      skillId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la compétence est requis"
    );
  });

  it("should fail if skillId is not a string", () => {
    const { error } = userSkillSchema.validate({
      ...validUserSkill,
      skillId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la compétence doit être une chaîne de caractères."
    );
  });
});
