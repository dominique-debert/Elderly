import { helpOfferSchema } from "@/validators/helpOffer.validator";

describe("helpOfferSchema", () => {
  const validOffer = {
    offerDate: "2024-10-25",
    message: "Je peux aider avec les courses.",
    status: "en attente",
    requestId: "req123",
    helperId: "user456",
  };

  it("should validate a correct help offer", () => {
    const { error } = helpOfferSchema.validate(validOffer);
    expect(error).toBeUndefined();
  });

  it("should fail if offerDate is missing", () => {
    const { error } = helpOfferSchema.validate({
      ...validOffer,
      offerDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de l'offre est obligatoire."
    );
  });

  it("should fail if offerDate is not a valid date", () => {
    const { error } = helpOfferSchema.validate({
      ...validOffer,
      offerDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de l'offre doit être une date valide."
    );
  });

  it("should allow empty or null message and status", () => {
    const { error: error1 } = helpOfferSchema.validate({
      ...validOffer,
      message: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = helpOfferSchema.validate({
      ...validOffer,
      status: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if requestId is missing", () => {
    const { error } = helpOfferSchema.validate({
      ...validOffer,
      requestId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la demande est requis"
    );
  });

  it("should fail if helperId is missing", () => {
    const { error } = helpOfferSchema.validate({ ...validOffer, helperId: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID de l'aide est requis");
  });

  it("should fail if message is not a string", () => {
    const { error } = helpOfferSchema.validate({ ...validOffer, message: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le message doit être une chaîne de caractères."
    );
  });

  it("should fail if status is not a string", () => {
    const { error } = helpOfferSchema.validate({ ...validOffer, status: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le statut doit être une chaîne de caractères."
    );
  });
});
