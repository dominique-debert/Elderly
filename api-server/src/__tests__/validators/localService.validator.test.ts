import { localServiceSchema } from "@/validators/localService.validator";

describe("localServiceSchema", () => {
  const validService = {
    name: "Pharmacie Centrale",
    address: "12 rue de Paris",
    gpsCoordinates: "48.8566,2.3522",
    phone: "0123456789",
    hours: "8h-20h",
    website: "https://pharmacie.example.com",
    seniorFriendly: true,
    categoryId: "cat123",
  };

  it("should validate a correct local service", () => {
    const { error, value } = localServiceSchema.validate(validService);
    expect(error).toBeUndefined();
    expect(value.seniorFriendly).toBe(true);
  });

  it("should default seniorFriendly to false if not provided", () => {
    const { error, value } = localServiceSchema.validate({
      ...validService,
      seniorFriendly: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.seniorFriendly).toBe(false);
  });

  it("should fail if name is missing", () => {
    const { error } = localServiceSchema.validate({
      ...validService,
      name: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le nom est requis");
  });

  it("should fail if address is missing", () => {
    const { error } = localServiceSchema.validate({
      ...validService,
      address: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'adresse est requise");
  });

  it("should allow empty or null gpsCoordinates, phone, hours, website, and categoryId", () => {
    const { error: error1 } = localServiceSchema.validate({
      ...validService,
      gpsCoordinates: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = localServiceSchema.validate({
      ...validService,
      phone: null,
    });
    expect(error2).toBeUndefined();
    const { error: error3 } = localServiceSchema.validate({
      ...validService,
      hours: "",
    });
    expect(error3).toBeUndefined();
    const { error: error4 } = localServiceSchema.validate({
      ...validService,
      website: null,
    });
    expect(error4).toBeUndefined();
    const { error: error5 } = localServiceSchema.validate({
      ...validService,
      categoryId: "",
    });
    expect(error5).toBeUndefined();
  });

  it("should fail if seniorFriendly is not a boolean", () => {
    const { error } = localServiceSchema.validate({
      ...validService,
      seniorFriendly: "yes",
    });
    expect(error).toBeDefined();
  });

  it("should fail if name is not a string", () => {
    const { error } = localServiceSchema.validate({
      ...validService,
      name: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nom doit être une chaîne de caractères."
    );
  });

  it("should fail if address is not a string", () => {
    const { error } = localServiceSchema.validate({
      ...validService,
      address: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'adresse doit être une chaîne de caractères."
    );
  });
});
