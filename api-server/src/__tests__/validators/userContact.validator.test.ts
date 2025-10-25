import { userContactSchema } from "@/validators/userContact.validator";

describe("userContactSchema", () => {
  const validContact = {
    id: "a3c1e5b2-4f6d-4e2a-9f8e-123456789abc",
    userId: "b2c1e5b2-4f6d-4e2a-9f8e-123456789def",
    status: "pending",
    message: "Invitation envoyée",
    reason: "",
    contactId: "c3c1e5b2-4f6d-4e2a-9f8e-123456789aaa",
    createdAt: "2024-11-01T10:00:00.000Z",
    updatedAt: "2024-11-02T10:00:00.000Z",
  };

  it("should validate a correct user contact", () => {
    const { error } = userContactSchema.validate(validContact);
    expect(error).toBeUndefined();
  });

  it("should fail if id is missing", () => {
    const { error } = userContactSchema.validate({ ...validContact, id: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID est requis");
  });

  it("should fail if id is not a valid uuid", () => {
    const { error } = userContactSchema.validate({
      ...validContact,
      id: "not-a-uuid",
    });
    expect(error).toBeDefined();
  });

  it("should fail if userId is missing", () => {
    const { error } = userContactSchema.validate({
      ...validContact,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a valid uuid", () => {
    const { error } = userContactSchema.validate({
      ...validContact,
      userId: "not-a-uuid",
    });
    expect(error).toBeDefined();
  });

  it("should fail if status is missing", () => {
    const { error } = userContactSchema.validate({
      ...validContact,
      status: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le statut doit être l'une des valeurs suivantes : pending, accepted, rejected, blocked."
    );
  });

  it("should allow empty or null message and reason", () => {
    const { error: error1 } = userContactSchema.validate({
      ...validContact,
      message: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = userContactSchema.validate({
      ...validContact,
      reason: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if contactId is missing", () => {
    const { error } = userContactSchema.validate({
      ...validContact,
      contactId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID du contact est requis");
  });

  it("should fail if contactId is not a valid uuid", () => {
    const { error } = userContactSchema.validate({
      ...validContact,
      contactId: "not-a-uuid",
    });
    expect(error).toBeDefined();
  });

  it("should fail if createdAt is not a valid date", () => {
    const { error } = userContactSchema.validate({
      ...validContact,
      createdAt: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de création doit être une date valide."
    );
  });

  it("should fail if updatedAt is not a valid date", () => {
    const { error } = userContactSchema.validate({
      ...validContact,
      updatedAt: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de mise à jour doit être une date valide."
    );
  });
});
