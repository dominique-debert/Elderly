import { surveyResponseSchema } from "@/validators/surveyResponse.validator";

describe("surveyResponseSchema", () => {
  const validResponse = {
    responses: { q1: "Oui", q2: "Non" },
    responseDate: "2024-11-01",
    userId: "user123",
    surveyId: "survey456",
  };

  it("should validate a correct survey response", () => {
    const { error } = surveyResponseSchema.validate(validResponse);
    expect(error).toBeUndefined();
  });

  it("should allow empty or null responses and responseDate", () => {
    const { error: error1 } = surveyResponseSchema.validate({
      ...validResponse,
      responses: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = surveyResponseSchema.validate({
      ...validResponse,
      responses: null,
    });
    expect(error2).toBeUndefined();
    const { error: error3 } = surveyResponseSchema.validate({
      ...validResponse,
      responseDate: "",
    });
    expect(error3).toBeUndefined();
    const { error: error4 } = surveyResponseSchema.validate({
      ...validResponse,
      responseDate: null,
    });
    expect(error4).toBeUndefined();
  });

  it("should fail if responses is not an object", () => {
    const { error } = surveyResponseSchema.validate({
      ...validResponse,
      responses: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Les réponses doivent être un objet."
    );
  });

  it("should fail if responseDate is not a valid date", () => {
    const { error } = surveyResponseSchema.validate({
      ...validResponse,
      responseDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de réponse doit être une date valide."
    );
  });

  it("should fail if userId is missing", () => {
    const { error } = surveyResponseSchema.validate({
      ...validResponse,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = surveyResponseSchema.validate({
      ...validResponse,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });

  it("should fail if surveyId is missing", () => {
    const { error } = surveyResponseSchema.validate({
      ...validResponse,
      surveyId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID de l'enquête est requis");
  });

  it("should fail if surveyId is not a string", () => {
    const { error } = surveyResponseSchema.validate({
      ...validResponse,
      surveyId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'enquête doit être une chaîne de caractères."
    );
  });
});
