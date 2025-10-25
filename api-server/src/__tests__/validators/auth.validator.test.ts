import { signUpSchema, signInSchema } from "@/validators/auth.validator";

describe("auth.validator signUpSchema", () => {
  const validSignUp = {
    email: "test@example.com",
    password: "secret123",
    firstName: "Jean",
    lastName: "Dupont",
    birthDate: "1990-01-01",
    avatar: "",
    avatarFilename: "",
    address: "1 rue de Paris",
    city: "Paris",
    description: "Utilisateur test",
    longitude: "2.3522",
    latitude: "48.8566",
    phone: "0600000000",
    isAdmin: true,
  };

  it("should validate a correct sign up payload", () => {
    const { error, value } = signUpSchema.validate(validSignUp);
    expect(error).toBeUndefined();
    expect(value.isAdmin).toBe(true);
  });

  it("should fail if email is missing", () => {
    const { error } = signUpSchema.validate({ ...validSignUp, email: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'email est requis");
  });

  it("should fail if email is invalid", () => {
    const { error } = signUpSchema.validate({
      ...validSignUp,
      email: "not-an-email",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'email doit être une adresse email valide"
    );
  });

  it("should fail if password is too short", () => {
    const { error } = signUpSchema.validate({
      ...validSignUp,
      password: "123",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le mot de passe doit contenir au moins 6 caractères"
    );
  });

  it("should fail if firstName is missing", () => {
    const { error } = signUpSchema.validate({ ...validSignUp, firstName: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le prénom est requis");
  });

  it("should fail if lastName is missing", () => {
    const { error } = signUpSchema.validate({ ...validSignUp, lastName: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le nom est requis");
  });

  it("should fail if birthDate is missing", () => {
    const { error } = signUpSchema.validate({
      ...validSignUp,
      birthDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de naissance est obligatoire"
    );
  });

  it("should fail if birthDate is not ISO format", () => {
    const { error } = signUpSchema.validate({
      ...validSignUp,
      birthDate: "01/01/1990",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de naissance doit être au format ISO"
    );
  });

  it("should default isAdmin to false if not provided", () => {
    const { error, value } = signUpSchema.validate({
      ...validSignUp,
      isAdmin: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.isAdmin).toBe(false);
  });

  it("should fail if avatar is not a valid uri", () => {
    const { error } = signUpSchema.validate({
      ...validSignUp,
      avatar: "not-a-url",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'URL de l'avatar doit être une URL valide"
    );
  });

  it("should fail if isAdmin is not a boolean", () => {
    const { error } = signUpSchema.validate({ ...validSignUp, isAdmin: "yes" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'isAdmin' doit être un booléen"
    );
  });
});

describe("auth.validator signInSchema", () => {
  const validSignIn = {
    email: "test@example.com",
    password: "secret123",
  };

  it("should validate a correct sign in payload", () => {
    const { error } = signInSchema.validate(validSignIn);
    expect(error).toBeUndefined();
  });

  it("should fail if email is missing", () => {
    const { error } = signInSchema.validate({ ...validSignIn, email: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'email est requis");
  });

  it("should fail if email is invalid", () => {
    const { error } = signInSchema.validate({
      ...validSignIn,
      email: "not-an-email",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'email doit être une adresse email valide"
    );
  });

  it("should fail if password is missing", () => {
    const { error } = signInSchema.validate({ ...validSignIn, password: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le mot de passe est requis");
  });

  it("should fail if password is too short", () => {
    const { error } = signInSchema.validate({
      ...validSignIn,
      password: "123",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le mot de passe doit contenir au moins 6 caractères"
    );
  });
});
