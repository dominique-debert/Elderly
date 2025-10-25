import { userSchema } from "@/validators/user.validator";

describe("userSchema", () => {
  const validUser = {
    id: "user123",
    email: "user@example.com",
    passwordHash: "hashedpassword",
    firstName: "Jean",
    lastName: "Dupont",
    birthDate: "1980-01-01",
    profession: "Développeur",
    city: "Paris",
    postalCode: "75000",
    address: "12 rue de Paris",
    description: "Utilisateur actif",
    latitude: "48.8566",
    longitude: "2.3522",
    phone: "0601020304",
    avatar: "avatar.jpg",
    registrationDate: "2024-01-01",
    accountVerified: true,
    helpPoints: 10,
    reducedMobility: true,
    activityLevel: "active",
    status: "active",
    isAdmin: true,
  };

  it("should validate a correct user", () => {
    const { error, value } = userSchema.validate(validUser);
    expect(error).toBeUndefined();
    expect(value.accountVerified).toBe(true);
    expect(value.helpPoints).toBe(10);
    expect(value.reducedMobility).toBe(true);
    expect(value.activityLevel).toBe("active");
    expect(value.status).toBe("active");
    expect(value.isAdmin).toBe(true);
  });

  it("should default booleans and helpPoints if not provided", () => {
    const { error, value } = userSchema.validate({
      ...validUser,
      accountVerified: undefined,
      helpPoints: undefined,
      reducedMobility: undefined,
      isAdmin: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.accountVerified).toBe(false);
    expect(value.helpPoints).toBe(0);
    expect(value.reducedMobility).toBe(false);
    expect(value.isAdmin).toBe(false);
  });

  it("should allow empty or null optional fields", () => {
    const { error } = userSchema.validate({
      ...validUser,
      profession: "",
      city: null,
      postalCode: "",
      address: null,
      description: "",
      latitude: null,
      longitude: "",
      phone: null,
      avatar: "",
      registrationDate: null,
      activityLevel: "",
      status: null,
    });
    expect(error).toBeUndefined();
  });

  it("should fail if id is missing", () => {
    const { error } = userSchema.validate({ ...validUser, id: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID est requis");
  });

  it("should fail if email is missing", () => {
    const { error } = userSchema.validate({ ...validUser, email: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'email est requis");
  });

  it("should fail if passwordHash is missing", () => {
    const { error } = userSchema.validate({ ...validUser, passwordHash: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le mot de passe est requis");
  });

  it("should fail if firstName is missing", () => {
    const { error } = userSchema.validate({ ...validUser, firstName: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le prénom est requis");
  });

  it("should fail if lastName is missing", () => {
    const { error } = userSchema.validate({ ...validUser, lastName: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le nom est requis");
  });

  it("should fail if birthDate is missing", () => {
    const { error } = userSchema.validate({
      ...validUser,
      birthDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de naissance est obligatoire."
    );
  });

  it("should fail if birthDate is not a valid date", () => {
    const { error } = userSchema.validate({
      ...validUser,
      birthDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de naissance doit être une date valide."
    );
  });

  it("should fail if helpPoints is negative", () => {
    const { error } = userSchema.validate({ ...validUser, helpPoints: -1 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'helpPoints' doit être supérieur ou égal à 0."
    );
  });

  it("should fail if accountVerified is not a boolean", () => {
    const { error } = userSchema.validate({
      ...validUser,
      accountVerified: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'accountVerified' doit être un booléen."
    );
  });

  it("should fail if reducedMobility is not a boolean", () => {
    const { error } = userSchema.validate({
      ...validUser,
      reducedMobility: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'reducedMobility' doit être un booléen."
    );
  });

  it("should fail if isAdmin is not a boolean", () => {
    const { error } = userSchema.validate({ ...validUser, isAdmin: "yes" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'isAdmin' doit être un booléen."
    );
  });

  it("should fail if activityLevel is not a string", () => {
    const { error } = userSchema.validate({ ...validUser, activityLevel: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'activityLevel' doit être une chaîne de caractères."
    );
  });

  it("should fail if status is not a string", () => {
    const { error } = userSchema.validate({ ...validUser, status: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'status' doit être une chaîne de caractères."
    );
  });
});
