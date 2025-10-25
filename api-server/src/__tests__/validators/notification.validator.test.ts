import { notificationSchema } from "@/validators/notification.validator";

describe("notificationSchema", () => {
  const validNotification = {
    type: "info",
    content: "Votre demande a été acceptée.",
    read: true,
    actionLink: "https://example.com/action",
    userId: "user123",
  };

  it("should validate a correct notification", () => {
    const { error, value } = notificationSchema.validate(validNotification);
    expect(error).toBeUndefined();
    expect(value.read).toBe(true);
  });

  it("should default read to false if not provided", () => {
    const { error, value } = notificationSchema.validate({
      ...validNotification,
      read: undefined,
    });
    expect(error).toBeUndefined();
    expect(value.read).toBe(false);
  });

  it("should fail if type is missing", () => {
    const { error } = notificationSchema.validate({
      ...validNotification,
      type: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le type est requis");
  });

  it("should fail if content is missing", () => {
    const { error } = notificationSchema.validate({
      ...validNotification,
      content: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le contenu est requis");
  });

  it("should fail if userId is missing", () => {
    const { error } = notificationSchema.validate({
      ...validNotification,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should allow empty or null actionLink", () => {
    const { error: error1 } = notificationSchema.validate({
      ...validNotification,
      actionLink: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = notificationSchema.validate({
      ...validNotification,
      actionLink: null,
    });
    expect(error2).toBeUndefined();
  });

  it("should fail if read is not a boolean", () => {
    const { error } = notificationSchema.validate({
      ...validNotification,
      read: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le champ 'read' doit être un booléen."
    );
  });

  it("should fail if type is not a string", () => {
    const { error } = notificationSchema.validate({
      ...validNotification,
      type: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le type doit être une chaîne de caractères."
    );
  });

  it("should fail if content is not a string", () => {
    const { error } = notificationSchema.validate({
      ...validNotification,
      content: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le contenu doit être une chaîne de caractères."
    );
  });

  it("should fail if actionLink is not a string", () => {
    const { error } = notificationSchema.validate({
      ...validNotification,
      actionLink: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le lien d'action doit être une chaîne de caractères."
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = notificationSchema.validate({
      ...validNotification,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });
});
