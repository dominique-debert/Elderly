import { trustCircleSchema } from "@/validators/trustCircle.validator";

describe("trustCircleSchema", () => {
  const validCircle = {
    dateAdded: "2024-10-25",
    accessLevel: "privé",
    userId: "user123",
    contactId: "contact456",
  };

  it("should validate a correct trust circle", () => {
    const { error } = trustCircleSchema.validate(validCircle);
    expect(error).toBeUndefined();
  });

  it("should fail if dateAdded is missing", () => {
    const { error } = trustCircleSchema.validate({
      ...validCircle,
      dateAdded: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'ajout est obligatoire."
    );
  });

  it("should fail if dateAdded is not a valid date", () => {
    const { error } = trustCircleSchema.validate({
      ...validCircle,
      dateAdded: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'ajout doit être une date valide."
    );
  });

  it("should fail if accessLevel is missing", () => {
    const { error } = trustCircleSchema.validate({
      ...validCircle,
      accessLevel: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le niveau d'accès est requis");
  });

  it("should fail if accessLevel is not a string", () => {
    const { error } = trustCircleSchema.validate({
      ...validCircle,
      accessLevel: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le niveau d'accès doit être une chaîne de caractères."
    );
  });

  it("should fail if userId is missing", () => {
    const { error } = trustCircleSchema.validate({
      ...validCircle,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = trustCircleSchema.validate({
      ...validCircle,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });

  it("should fail if contactId is missing", () => {
    const { error } = trustCircleSchema.validate({
      ...validCircle,
      contactId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID du contact est requis");
  });

  it("should fail if contactId is not a string", () => {
    const { error } = trustCircleSchema.validate({
      ...validCircle,
      contactId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID du contact doit être une chaîne de caractères."
    );
  });
});
