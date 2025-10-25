import { forumTopicSchema } from "@/validators/forumTopic.validator";

describe("forumTopicSchema", () => {
  const validTopic = {
    title: "Sujet du forum",
    pinned: true,
    status: "ouvert",
    views: 10,
    categoryId: "cat123",
    authorId: "user456",
  };

  it("should validate a correct forum topic", () => {
    const { error, value } = forumTopicSchema.validate(validTopic);
    expect(error).toBeUndefined();
    expect(value.pinned).toBe(true);
    expect(value.views).toBe(10);
  });

  it("should default pinned to false and views to 0 if not provided", () => {
    const { error, value } = forumTopicSchema.validate({
      ...validTopic,
      pinned: undefined,
      views: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.pinned).toBe(false);
    expect(value.views).toBe(0);
  });

  it("should fail if title is missing", () => {
    const { error } = forumTopicSchema.validate({ ...validTopic, title: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le titre est requis");
  });

  it("should fail if categoryId is missing", () => {
    const { error } = forumTopicSchema.validate({
      ...validTopic,
      categoryId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la catégorie est requis"
    );
  });

  it("should fail if authorId is missing", () => {
    const { error } = forumTopicSchema.validate({
      ...validTopic,
      authorId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID de l'auteur est requis");
  });

  it("should fail if pinned is not a boolean", () => {
    const { error } = forumTopicSchema.validate({
      ...validTopic,
      pinned: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'pinned' doit être un booléen."
    );
  });

  it("should fail if views is negative", () => {
    const { error } = forumTopicSchema.validate({ ...validTopic, views: -1 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nombre de vues doit être supérieur ou égal à 0."
    );
  });

  it("should fail if views is not a number", () => {
    const { error } = forumTopicSchema.validate({
      ...validTopic,
      views: "ten",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le nombre de vues doit être un nombre."
    );
  });

  it("should allow empty or null status", () => {
    const { error: error1 } = forumTopicSchema.validate({
      ...validTopic,
      status: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = forumTopicSchema.validate({
      ...validTopic,
      status: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if title is not a string", () => {
    const { error } = forumTopicSchema.validate({ ...validTopic, title: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le titre doit être une chaîne de caractères."
    );
  });
});
