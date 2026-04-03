import { serviceCompletedSchema } from "@/validators/serviceCompleted.validator";

describe("serviceCompletedSchema", () => {
  const validService = {
    completionDate: "2024-10-25",
    actualDuration: 120,
    creatorComment: "Merci pour l'aide !",
    helperComment: "Ravi d'avoir pu aider.",
    creatorRating: 5,
    helperRating: 4,
    pointsExchanged: 50,
    requestId: "req123",
    helperId: "user456",
  };

  it("should validate a correct service completed", () => {
    const { error } = serviceCompletedSchema.validate(validService);
    expect(error).toBeUndefined();
  });

  it("should fail if requestId is missing", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      requestId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la demande est requis"
    );
  });

  it("should fail if helperId is missing", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      helperId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID de l'aide est requis");
  });

  it("should fail if completionDate is not a valid date", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      completionDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de complétion doit être une date valide."
    );
  });

  it("should fail if actualDuration is negative", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      actualDuration: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La durée réelle doit être supérieure ou égale à 0."
    );
  });

  it("should fail if creatorComment is not a string", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      creatorComment: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le commentaire du créateur doit être une chaîne de caractères."
    );
  });

  it("should fail if helperComment is not a string", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      helperComment: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le commentaire de l'aide doit être une chaîne de caractères."
    );
  });

  it("should fail if creatorRating is not a number", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      creatorRating: "five",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La note du créateur doit être un nombre."
    );
  });

  it("should fail if creatorRating is less than 0", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      creatorRating: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La note du créateur doit être supérieure ou égale à 0."
    );
  });

  it("should fail if creatorRating is greater than 5", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      creatorRating: 6,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La note du créateur doit être inférieure ou égale à 5."
    );
  });

  it("should fail if helperRating is not a number", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      helperRating: "four",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La note de l'aide doit être un nombre."
    );
  });

  it("should fail if helperRating is less than 0", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      helperRating: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La note de l'aide doit être supérieure ou égale à 0."
    );
  });

  it("should fail if helperRating is greater than 5", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      helperRating: 6,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La note de l'aide doit être inférieure ou égale à 5."
    );
  });

  it("should fail if pointsExchanged is not a number", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      pointsExchanged: "fifty",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nombre de points échangés doit être un nombre."
    );
  });

  it("should fail if pointsExchanged is negative", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      pointsExchanged: -10,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nombre de points échangés doit être supérieur ou égal à 0."
    );
  });

  it("should fail if requestId is not a string", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      requestId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la demande doit être une chaîne de caractères."
    );
  });

  it("should fail if helperId is not a string", () => {
    const { error } = serviceCompletedSchema.validate({
      ...validService,
      helperId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'aide doit être une chaîne de caractères."
    );
  });
});
