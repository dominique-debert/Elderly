import { registrationSchema } from "@/validators/activityRegistration.validator";

describe("registrationSchema", () => {
  const validRegistration = {
    activityId: "activity123",
    userId: "user456",
    registrationDate: "2024-10-25",
    status: "pending",
    attendanceConfirmed: true,
  };

  it("should validate a correct registration", () => {
    const { error, value } = registrationSchema.validate(validRegistration);
    expect(error).toBeUndefined();
    expect(value.attendanceConfirmed).toBe(true);
  });

  it("should allow empty strings and nulls for optional fields", () => {
    const { error, value } = registrationSchema.validate({
      activityId: "",
      userId: null,
      registrationDate: "",
      status: null,
      attendanceConfirmed: false,
    });
    expect(error).toBeUndefined();
    expect(value.attendanceConfirmed).toBe(false);
  });

  it("should default attendanceConfirmed to false if not provided", () => {
    const { error, value } = registrationSchema.validate({
      activityId: "activity123",
      userId: "user456",
      registrationDate: "2024-10-25",
      status: "pending",
    });
    expect(error).toBeUndefined();
    expect(value.attendanceConfirmed).toBe(false);
  });

  it("should fail if activityId is not a string", () => {
    const { error } = registrationSchema.validate({
      ...validRegistration,
      activityId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'activité doit être une chaîne de caractères."
    );
  });

  it("should fail if registrationDate is not a valid date", () => {
    const { error } = registrationSchema.validate({
      ...validRegistration,
      registrationDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'inscription doit être une date valide."
    );
  });

  it("should fail if attendanceConfirmed is not a boolean", () => {
    const { error } = registrationSchema.validate({
      ...validRegistration,
      attendanceConfirmed: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'attendanceConfirmed' doit être un booléen."
    );
  });
});
