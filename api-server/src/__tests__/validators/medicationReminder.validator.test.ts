import { medicationReminderSchema } from "@/validators/medicationReminder.validator";

describe("medicationReminderSchema", () => {
  const validReminder = {
    medicationName: "Paracétamol",
    dosage: "500mg",
    morningReminderTime: "2024-10-25T08:00:00.000Z",
    noonReminderTime: "2024-10-25T12:00:00.000Z",
    eveningReminderTime: "2024-10-25T18:00:00.000Z",
    nightReminderTime: "2024-10-25T22:00:00.000Z",
    daysOfWeek: "Lundi,Mardi",
    instructions: "Prendre avec un verre d'eau",
    active: true,
    startDate: "2024-10-25",
    endDate: "2024-11-25",
    userId: "user123",
  };

  it("should validate a correct medication reminder", () => {
    const { error } = medicationReminderSchema.validate(validReminder);
    expect(error).toBeUndefined();
  });

  it("should default active to true if not provided", () => {
    const { error, value } = medicationReminderSchema.validate({
      ...validReminder,
      active: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.active).toBe(true);
  });

  it("should fail if medicationName is missing", () => {
    const { error } = medicationReminderSchema.validate({
      ...validReminder,
      medicationName: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom du médicament est requis"
    );
  });

  it("should fail if dosage is missing", () => {
    const { error } = medicationReminderSchema.validate({
      ...validReminder,
      dosage: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le dosage est requis");
  });

  it("should fail if userId is missing", () => {
    const { error } = medicationReminderSchema.validate({
      ...validReminder,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if morningReminderTime is not a valid date", () => {
    const { error } = medicationReminderSchema.validate({
      ...validReminder,
      morningReminderTime: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'heure du rappel du matin doit être une date valide."
    );
  });

  it("should fail if noonReminderTime is not a valid date", () => {
    const { error } = medicationReminderSchema.validate({
      ...validReminder,
      noonReminderTime: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'heure du rappel de midi doit être une date valide."
    );
  });

  it("should fail if eveningReminderTime is not a valid date", () => {
    const { error } = medicationReminderSchema.validate({
      ...validReminder,
      eveningReminderTime: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'heure du rappel du soir doit être une date valide."
    );
  });

  it("should fail if nightReminderTime is not a valid date", () => {
    const { error } = medicationReminderSchema.validate({
      ...validReminder,
      nightReminderTime: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'heure du rappel de nuit doit être une date valide."
    );
  });

  it("should allow empty or null daysOfWeek and instructions", () => {
    const { error: error1 } = medicationReminderSchema.validate({
      ...validReminder,
      daysOfWeek: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = medicationReminderSchema.validate({
      ...validReminder,
      instructions: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if startDate is not a valid date", () => {
    const { error } = medicationReminderSchema.validate({
      ...validReminder,
      startDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de début doit être une date valide."
    );
  });

  it("should fail if endDate is not a valid date", () => {
    const { error } = medicationReminderSchema.validate({
      ...validReminder,
      endDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de fin doit être une date valide."
    );
  });

  it("should fail if active is not a boolean", () => {
    const { error } = medicationReminderSchema.validate({
      ...validReminder,
      active: "yes",
    });
    expect(error).toBeDefined();
  });

  it("should fail if medicationName is not a string", () => {
    const { error } = medicationReminderSchema.validate({
      ...validReminder,
      medicationName: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom du médicament doit être une chaîne de caractères."
    );
  });
});
