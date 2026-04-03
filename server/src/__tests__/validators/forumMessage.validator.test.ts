import { forumMessageSchema } from "@/validators/forumMessage.validator";

describe("forumMessageSchema", () => {
  const validMessage = {
    content: "Ceci est un message sur le forum.",
    solutionMessage: true,
    topicId: "topic123",
    authorId: "user456",
  };

  it("should validate a correct forum message", () => {
    const { error, value } = forumMessageSchema.validate(validMessage);
    expect(error).toBeUndefined();
    expect(value.solutionMessage).toBe(true);
  });

  it("should default solutionMessage to false if not provided", () => {
    const { error, value } = forumMessageSchema.validate({
      ...validMessage,
      solutionMessage: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.solutionMessage).toBe(false);
  });

  it("should fail if content is missing", () => {
    const { error } = forumMessageSchema.validate({
      ...validMessage,
      content: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le contenu est requis");
  });

  it("should fail if topicId is missing", () => {
    const { error } = forumMessageSchema.validate({
      ...validMessage,
      topicId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID du sujet est requis");
  });

  it("should fail if authorId is missing", () => {
    const { error } = forumMessageSchema.validate({
      ...validMessage,
      authorId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("L'ID de l'auteur est requis");
  });

  it("should fail if solutionMessage is not a boolean", () => {
    const { error } = forumMessageSchema.validate({
      ...validMessage,
      solutionMessage: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'solutionMessage' doit être un booléen."
    );
  });

  it("should fail if content is not a string", () => {
    const { error } = forumMessageSchema.validate({
      ...validMessage,
      content: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le contenu doit être une chaîne de caractères."
    );
  });
});
