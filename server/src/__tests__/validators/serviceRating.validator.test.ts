import { serviceRatingSchema } from "@/validators/serviceRating.validator";

describe("serviceRatingSchema", () => {
  const validRating = {
    rating: 4,
    comment: "Très bon service.",
    ratingDate: "2024-10-25",
    serviceId: "service123",
    userId: "user456",
  };

  it("should validate a correct service rating", () => {
    const { error } = serviceRatingSchema.validate(validRating);
    expect(error).toBeUndefined();
  });

  it("should fail if rating is missing", () => {
    const { error } = serviceRatingSchema.validate({
      ...validRating,
      rating: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("La note est obligatoire.");
  });

  it("should fail if rating is not a number", () => {
    const { error } = serviceRatingSchema.validate({
      ...validRating,
      rating: "excellent",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("La note doit être un nombre.");
  });

  it("should fail if rating is less than 0", () => {
    const { error } = serviceRatingSchema.validate({
      ...validRating,
      rating: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La note doit être supérieure ou égale à 0."
    );
  });

  it("should fail if rating is greater than 5", () => {
    const { error } = serviceRatingSchema.validate({
      ...validRating,
      rating: 6,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La note doit être inférieure ou égale à 5."
    );
  });

  it("should fail if comment is not a string", () => {
    const { error } = serviceRatingSchema.validate({
      ...validRating,
      comment: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le commentaire doit être une chaîne de caractères."
    );
  });

  it("should fail if ratingDate is not a valid date", () => {
    const { error } = serviceRatingSchema.validate({
      ...validRating,
      ratingDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de la note doit être une date valide."
    );
  });

  it("should fail if serviceId is missing", () => {
    const { error } = serviceRatingSchema.validate({
      ...validRating,
      serviceId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID du service est requis");
  });

  it("should fail if serviceId is not a string", () => {
    const { error } = serviceRatingSchema.validate({
      ...validRating,
      serviceId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID du service doit être une chaîne de caractères."
    );
  });

  it("should fail if userId is missing", () => {
    const { error } = serviceRatingSchema.validate({
      ...validRating,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = serviceRatingSchema.validate({
      ...validRating,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });
});
