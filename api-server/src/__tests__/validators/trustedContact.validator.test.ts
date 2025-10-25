import { trustedContactSchema } from "@/validators/trustedContact.validator";

describe("trustedContactSchema", () => {
  const validContact = {
    lastName: "Dupont",
    firstName: "Marie",
    email: "marie.dupont@example.com",
    phone: "0601020304",
    relationship: "Sœur",
    shareMedications: true,
    shareHealthIndicators: true,
    shareWellnessActivities: false,
    emergencyAlerts: true,
    userId: "user123",
  };

  it("should validate a correct trusted contact", () => {
    const { error, value } = trustedContactSchema.validate(validContact);
    expect(error).toBeUndefined();
    expect(value.shareMedications).toBe(true);
    expect(value.shareHealthIndicators).toBe(true);
    expect(value.shareWellnessActivities).toBe(false);
    expect(value.emergencyAlerts).toBe(true);
  });

  it("should default booleans to false if not provided", () => {
    const { error, value } = trustedContactSchema.validate({
      ...validContact,
      shareMedications: undefined,
      shareHealthIndicators: undefined,
      shareWellnessActivities: undefined,
      emergencyAlerts: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.shareMedications).toBe(false);
    expect(value.shareHealthIndicators).toBe(false);
    expect(value.shareWellnessActivities).toBe(false);
    expect(value.emergencyAlerts).toBe(false);
  });

  it("should fail if lastName is missing", () => {
    const { error } = trustedContactSchema.validate({
      ...validContact,
      lastName: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le nom est requis");
  });

  it("should fail if firstName is missing", () => {
    const { error } = trustedContactSchema.validate({
      ...validContact,
      firstName: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le prénom est requis");
  });

  it("should fail if email is not a valid email", () => {
    const { error } = trustedContactSchema.validate({
      ...validContact,
      email: "not-an-email",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'email doit être une adresse email valide."
    );
  });

  it("should fail if phone is missing", () => {
    const { error } = trustedContactSchema.validate({
      ...validContact,
      phone: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le téléphone est requis");
  });

  it("should fail if relationship is not a string", () => {
    const { error } = trustedContactSchema.validate({
      ...validContact,
      relationship: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La relation doit être une chaîne de caractères."
    );
  });

  it("should fail if shareMedications is not a boolean", () => {
    const { error } = trustedContactSchema.validate({
      ...validContact,
      shareMedications: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'shareMedications' doit être un booléen."
    );
  });

  it("should fail if shareHealthIndicators is not a boolean", () => {
    const { error } = trustedContactSchema.validate({
      ...validContact,
      shareHealthIndicators: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'shareHealthIndicators' doit être un booléen."
    );
  });

  it("should fail if shareWellnessActivities is not a boolean", () => {
    const { error } = trustedContactSchema.validate({
      ...validContact,
      shareWellnessActivities: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'shareWellnessActivities' doit être un booléen."
    );
  });

  it("should fail if emergencyAlerts is not a boolean", () => {
    const { error } = trustedContactSchema.validate({
      ...validContact,
      emergencyAlerts: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'emergencyAlerts' doit être un booléen."
    );
  });

  it("should fail if userId is missing", () => {
    const { error } = trustedContactSchema.validate({
      ...validContact,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = trustedContactSchema.validate({
      ...validContact,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });
});
