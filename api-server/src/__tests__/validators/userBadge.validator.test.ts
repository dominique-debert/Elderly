import { userBadgeSchema } from "@/validators/userBadge.validator";

describe("userBadgeSchema", () => {
  const validBadge = {
    userId: "user123",
    badgeId: "badge456",
    achievementDate: "2024-11-01",
  };

  it("should validate a correct user badge", () => {
    const { error } = userBadgeSchema.validate(validBadge);
    expect(error).toBeUndefined();
  });

  it("should fail if userId is missing", () => {
    const { error } = userBadgeSchema.validate({ ...validBadge, userId: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = userBadgeSchema.validate({ ...validBadge, userId: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });

  it("should fail if badgeId is missing", () => {
    const { error } = userBadgeSchema.validate({ ...validBadge, badgeId: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID du badge est requis");
  });

  it("should fail if badgeId is not a string", () => {
    const { error } = userBadgeSchema.validate({ ...validBadge, badgeId: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID du badge doit être une chaîne de caractères."
    );
  });

  it("should fail if achievementDate is missing", () => {
    const { error } = userBadgeSchema.validate({
      ...validBadge,
      achievementDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'acquisition est obligatoire."
    );
  });

  it("should fail if achievementDate is not a valid date", () => {
    const { error } = userBadgeSchema.validate({
      ...validBadge,
      achievementDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'acquisition doit être une date valide."
    );
  });
});
