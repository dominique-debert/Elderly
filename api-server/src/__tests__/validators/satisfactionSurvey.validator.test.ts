import { satisfactionSurveySchema } from "@/validators/satisfactionSurvey.validator";

describe("satisfactionSurveySchema", () => {
  const validSurvey = {
    title: "Enquête de satisfaction",
    description: "Merci de donner votre avis.",
    startDate: "2024-11-01",
    endDate: "2024-11-30",
    active: true,
  };

  it("should validate a correct satisfaction survey", () => {
    const { error, value } = satisfactionSurveySchema.validate(validSurvey);
    expect(error).toBeUndefined();
    expect(value.active).toBe(true);
  });

  it("should default active to false if not provided", () => {
    const { error, value } = satisfactionSurveySchema.validate({
      ...validSurvey,
      active: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.active).toBe(false);
  });

  it("should fail if title is missing", () => {
    const { error } = satisfactionSurveySchema.validate({
      ...validSurvey,
      title: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le titre est requis");
  });

  it("should fail if title is not a string", () => {
    const { error } = satisfactionSurveySchema.validate({
      ...validSurvey,
      title: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le titre doit être une chaîne de caractères."
    );
  });

  it("should allow empty or null description", () => {
    const { error: error1 } = satisfactionSurveySchema.validate({
      ...validSurvey,
      description: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = satisfactionSurveySchema.validate({
      ...validSurvey,
      description: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if startDate is not a valid date", () => {
    const { error } = satisfactionSurveySchema.validate({
      ...validSurvey,
      startDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de début doit être une date valide."
    );
  });

  it("should fail if endDate is not a valid date", () => {
    const { error } = satisfactionSurveySchema.validate({
      ...validSurvey,
      endDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de fin doit être une date valide."
    );
  });

  it("should fail if active is not a boolean", () => {
    const { error } = satisfactionSurveySchema.validate({
      ...validSurvey,
      active: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'active' doit être un booléen."
    );
  });
});
