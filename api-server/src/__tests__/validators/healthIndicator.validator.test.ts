import { healthIndicatorSchema } from "@/validators/healthIndicator.validator";

describe("healthIndicatorSchema", () => {
  const validIndicator = {
    recordingDate: "2024-10-25",
    stepCount: 10000,
    sleepDurationMinutes: 480,
    sleepQuality: 8,
    weight: 70.5,
    notes: "Bonne journée",
    userId: "user123",
    moodId: "mood456",
  };

  it("should validate a correct health indicator", () => {
    const { error } = healthIndicatorSchema.validate(validIndicator);
    expect(error).toBeUndefined();
  });

  it("should default stepCount, sleepDurationMinutes, sleepQuality, and weight if not provided", () => {
    const { error, value } = healthIndicatorSchema.validate({
      recordingDate: "2024-10-25",
      userId: "user123",
      moodId: "mood456",
    });
    expect(error).toBeUndefined();
    expect(value.stepCount).toBe(0);
    expect(value.sleepDurationMinutes).toBe(0);
    expect(value.sleepQuality).toBe(0);
    expect(value.weight).toBe(0);
  });

  it("should fail if recordingDate is missing", () => {
    const { error } = healthIndicatorSchema.validate({
      ...validIndicator,
      recordingDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'enregistrement est obligatoire."
    );
  });

  it("should fail if recordingDate is not a valid date", () => {
    const { error } = healthIndicatorSchema.validate({
      ...validIndicator,
      recordingDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'enregistrement doit être une date valide."
    );
  });

  it("should fail if stepCount is negative", () => {
    const { error } = healthIndicatorSchema.validate({
      ...validIndicator,
      stepCount: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nombre de pas doit être supérieur ou égal à 0."
    );
  });

  it("should fail if sleepDurationMinutes is negative", () => {
    const { error } = healthIndicatorSchema.validate({
      ...validIndicator,
      sleepDurationMinutes: -10,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La durée du sommeil doit être supérieure ou égale à 0."
    );
  });

  it("should fail if sleepQuality is negative", () => {
    const { error } = healthIndicatorSchema.validate({
      ...validIndicator,
      sleepQuality: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La qualité du sommeil doit être supérieure ou égale à 0."
    );
  });

  it("should fail if sleepQuality is greater than 10", () => {
    const { error } = healthIndicatorSchema.validate({
      ...validIndicator,
      sleepQuality: 11,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La qualité du sommeil doit être inférieure ou égale à 10."
    );
  });

  it("should fail if weight is not a number", () => {
    const { error } = healthIndicatorSchema.validate({
      ...validIndicator,
      weight: "heavy",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le poids doit être un nombre."
    );
  });

  it("should allow empty or null notes", () => {
    const { error: error1 } = healthIndicatorSchema.validate({
      ...validIndicator,
      notes: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = healthIndicatorSchema.validate({
      ...validIndicator,
      notes: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if userId is missing", () => {
    const { error } = healthIndicatorSchema.validate({
      ...validIndicator,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if moodId is missing", () => {
    const { error } = healthIndicatorSchema.validate({
      ...validIndicator,
      moodId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID de l'humeur est requis");
  });
});
