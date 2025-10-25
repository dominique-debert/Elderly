import { messageSchema } from "@/validators/message.validator";

describe("messageSchema", () => {
  const validMessage = {
    content: "Bonjour, comment ça va ?",
    sendDate: "2024-10-25T10:00:00.000Z",
    type: "text",
    fileUrl: "https://example.com/file.pdf",
    read: true,
    conversationId: "conv123",
    senderId: "user456",
  };

  it("should validate a correct message", () => {
    const { error, value } = messageSchema.validate(validMessage);
    expect(error).toBeUndefined();
    expect(value.read).toBe(true);
  });

  it("should default read to false if not provided", () => {
    const { error, value } = messageSchema.validate({
      ...validMessage,
      read: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.read).toBe(false);
  });

  it("should fail if content is missing", () => {
    const { error } = messageSchema.validate({ ...validMessage, content: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le contenu est requis");
  });

  it("should fail if sendDate is missing", () => {
    const { error } = messageSchema.validate({
      ...validMessage,
      sendDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'envoi est obligatoire."
    );
  });

  it("should fail if sendDate is not a valid date", () => {
    const { error } = messageSchema.validate({
      ...validMessage,
      sendDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date d'envoi doit être une date valide."
    );
  });

  it("should allow empty or null type and fileUrl", () => {
    const { error: error1 } = messageSchema.validate({
      ...validMessage,
      type: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = messageSchema.validate({
      ...validMessage,
      fileUrl: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if fileUrl is not a valid uri", () => {
    const { error } = messageSchema.validate({
      ...validMessage,
      fileUrl: "not-a-url",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'URL du fichier doit être une URL valide."
    );
  });

  it("should fail if conversationId is missing", () => {
    const { error } = messageSchema.validate({
      ...validMessage,
      conversationId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la conversation est requis"
    );
  });

  it("should fail if senderId is missing", () => {
    const { error } = messageSchema.validate({ ...validMessage, senderId: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'expéditeur est requis"
    );
  });

  it("should fail if read is not a boolean", () => {
    const { error } = messageSchema.validate({ ...validMessage, read: "yes" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'read' doit être un booléen."
    );
  });

  it("should fail if content is not a string", () => {
    const { error } = messageSchema.validate({ ...validMessage, content: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le contenu doit être une chaîne de caractères."
    );
  });
});
