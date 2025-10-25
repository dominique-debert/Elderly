import { conversationParticipantSchema } from "@/validators/conversationParticipant.validator";

describe("conversationParticipantSchema", () => {
  const validParticipant = {
    dateAdded: "2024-10-25",
    administrator: true,
    lastAccess: "2024-10-26",
    conversationId: "conv123",
    userId: "user456",
  };

  it("should validate a correct participant", () => {
    const { error, value } =
      conversationParticipantSchema.validate(validParticipant);
    expect(error).toBeUndefined();
    expect(value.administrator).toBe(true);
  });

  it("should default administrator to false if not provided", () => {
    const { error, value } = conversationParticipantSchema.validate({
      ...validParticipant,
      administrator: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.administrator).toBe(false);
  });

  it("should fail if dateAdded is missing", () => {
    const { error } = conversationParticipantSchema.validate({
      ...validParticipant,
      dateAdded: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'ajout est obligatoire."
    );
  });

  it("should fail if dateAdded is not a valid date", () => {
    const { error } = conversationParticipantSchema.validate({
      ...validParticipant,
      dateAdded: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'ajout doit être une date valide."
    );
  });

  it("should fail if lastAccess is missing", () => {
    const { error } = conversationParticipantSchema.validate({
      ...validParticipant,
      lastAccess: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de dernier accès est obligatoire."
    );
  });

  it("should fail if lastAccess is not a valid date", () => {
    const { error } = conversationParticipantSchema.validate({
      ...validParticipant,
      lastAccess: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de dernier accès doit être une date valide."
    );
  });

  it("should fail if conversationId is missing", () => {
    const { error } = conversationParticipantSchema.validate({
      ...validParticipant,
      conversationId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la conversation est requis"
    );
  });

  it("should fail if userId is missing", () => {
    const { error } = conversationParticipantSchema.validate({
      ...validParticipant,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if administrator is not a boolean", () => {
    const { error } = conversationParticipantSchema.validate({
      ...validParticipant,
      administrator: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'administrator' doit être un booléen."
    );
  });
});
