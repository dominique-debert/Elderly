import { nutritionalAdviceSchema } from "@/validators/nutritionalAdvice.validator";

describe("nutritionalAdviceSchema", () => {
  const validAdvice = {
    title: "Manger des fruits de saison",
    description: "Les fruits d'été sont riches en vitamines.",
    season: "été",
    image: "fruits.jpg",
    categoryId: 1,
  };

  it("should validate a correct nutritional advice", () => {
    const { error } = nutritionalAdviceSchema.validate(validAdvice);
    expect(error).toBeUndefined();
  });

  it("should fail if title is missing", () => {
    const { error } = nutritionalAdviceSchema.validate({
      ...validAdvice,
      title: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le titre est requis");
  });

  it("should fail if season is missing", () => {
    const { error } = nutritionalAdviceSchema.validate({
      ...validAdvice,
      season: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("La saison est requise");
  });

  it("should fail if categoryId is missing", () => {
    const { error } = nutritionalAdviceSchema.validate({
      ...validAdvice,
      categoryId: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie est obligatoire."
    );
  });

  it("should fail if categoryId is not a number", () => {
    const { error } = nutritionalAdviceSchema.validate({
      ...validAdvice,
      categoryId: "cat",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie doit être un nombre."
    );
  });

  it("should fail if categoryId is not an integer", () => {
    const { error } = nutritionalAdviceSchema.validate({
      ...validAdvice,
      categoryId: 1.5,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie doit être un entier."
    );
  });

  it("should fail if categoryId is not positive", () => {
    const { error } = nutritionalAdviceSchema.validate({
      ...validAdvice,
      categoryId: -1,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie doit être positif."
    );
  });

  it("should allow empty or null description and image", () => {
    const { error: error1 } = nutritionalAdviceSchema.validate({
      ...validAdvice,
      description: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = nutritionalAdviceSchema.validate({
      ...validAdvice,
      image: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if title is not a string", () => {
    const { error } = nutritionalAdviceSchema.validate({
      ...validAdvice,
      title: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le titre doit être une chaîne de caractères."
    );
  });

  it("should fail if season is not a string", () => {
    const { error } = nutritionalAdviceSchema.validate({
      ...validAdvice,
      season: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La saison doit être une chaîne de caractères."
    );
  });

  it("should fail if image is not a string", () => {
    const { error } = nutritionalAdviceSchema.validate({
      ...validAdvice,
      image: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'image doit être une chaîne de caractères."
    );
  });
});
