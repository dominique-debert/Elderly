import { userDeviceSchema } from "@/validators/userDevice.validator";

describe("userDeviceSchema", () => {
  const validDevice = {
    deviceType: "smartphone",
    deviceName: "iPhone 13",
    operatingSystem: "iOS",
    notificationToken: "token123",
    lastConnection: "2024-11-01T10:00:00.000Z",
    userId: "user123",
  };

  it("should validate a correct user device", () => {
    const { error } = userDeviceSchema.validate(validDevice);
    expect(error).toBeUndefined();
  });

  it("should fail if deviceType is missing", () => {
    const { error } = userDeviceSchema.validate({
      ...validDevice,
      deviceType: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le type d'appareil est requis"
    );
  });

  it("should fail if deviceType is not a string", () => {
    const { error } = userDeviceSchema.validate({
      ...validDevice,
      deviceType: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le type d'appareil doit être une chaîne de caractères."
    );
  });

  it("should fail if deviceName is missing", () => {
    const { error } = userDeviceSchema.validate({
      ...validDevice,
      deviceName: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom de l'appareil est requis"
    );
  });

  it("should fail if deviceName is not a string", () => {
    const { error } = userDeviceSchema.validate({
      ...validDevice,
      deviceName: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom de l'appareil doit être une chaîne de caractères."
    );
  });

  it("should fail if operatingSystem is missing", () => {
    const { error } = userDeviceSchema.validate({
      ...validDevice,
      operatingSystem: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le système d'exploitation est requis"
    );
  });

  it("should fail if operatingSystem is not a string", () => {
    const { error } = userDeviceSchema.validate({
      ...validDevice,
      operatingSystem: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le système d'exploitation doit être une chaîne de caractères."
    );
  });

  it("should fail if notificationToken is missing", () => {
    const { error } = userDeviceSchema.validate({
      ...validDevice,
      notificationToken: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le token de notification est requis"
    );
  });

  it("should fail if notificationToken is not a string", () => {
    const { error } = userDeviceSchema.validate({
      ...validDevice,
      notificationToken: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le token de notification doit être une chaîne de caractères."
    );
  });

  it("should fail if lastConnection is missing", () => {
    const { error } = userDeviceSchema.validate({
      ...validDevice,
      lastConnection: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La dernière connexion est obligatoire."
    );
  });

  it("should fail if lastConnection is not a valid date", () => {
    const { error } = userDeviceSchema.validate({
      ...validDevice,
      lastConnection: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La dernière connexion doit être une date valide."
    );
  });

  it("should fail if userId is missing", () => {
    const { error } = userDeviceSchema.validate({ ...validDevice, userId: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = userDeviceSchema.validate({
      ...validDevice,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });
});
