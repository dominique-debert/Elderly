import { userPreferencesSchema } from "@/validators/userPreferences.validator";

describe("userPreferencesSchema", () => {
  const validPreferences = {
    userId: "user123",
    notificationMessages: true,
    notificationForum: false,
    notificationActivities: true,
    emailUpdates: false,
    smsUpdates: true,
    frequencyInstant: true,
    frequencyDaily: false,
    fontSize: "medium",
    highContrast: true,
    statusVisibilityEverybody: false,
    statusVisibilityFriends: true,
    statusVisibilityNoOne: false,
    messagesFromEverybody: true,
    messagesFromFriends: false,
    messagesFromNoOne: false,
    dataSharing: true,
  };

  it("should validate correct user preferences", () => {
    const { error } = userPreferencesSchema.validate(validPreferences);
    expect(error).toBeUndefined();
  });

  it("should fail if userId is missing", () => {
    const { error } = userPreferencesSchema.validate({
      ...validPreferences,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = userPreferencesSchema.validate({
      ...validPreferences,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });

  it("should fail if frequencyInstant is missing", () => {
    const { error } = userPreferencesSchema.validate({
      ...validPreferences,
      frequencyInstant: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "frequencyInstant est obligatoire."
    );
  });

  it("should fail if frequencyInstant is not a boolean", () => {
    const { error } = userPreferencesSchema.validate({
      ...validPreferences,
      frequencyInstant: "yes",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "frequencyInstant doit être un booléen."
    );
  });

  it("should allow optional fields to be missing", () => {
    const minimalPreferences = {
      userId: "user123",
      frequencyInstant: false,
    };
    const { error } = userPreferencesSchema.validate(minimalPreferences);
    expect(error).toBeUndefined();
  });

  it("should fail if any boolean field is not a boolean", () => {
    const fields = [
      "notificationMessages",
      "notificationForum",
      "notificationActivities",
      "emailUpdates",
      "smsUpdates",
      "frequencyDaily",
      "highContrast",
      "statusVisibilityEverybody",
      "statusVisibilityFriends",
      "statusVisibilityNoOne",
      "messagesFromEverybody",
      "messagesFromFriends",
      "messagesFromNoOne",
      "dataSharing",
    ];
    for (const field of fields) {
      const prefs = { ...validPreferences, [field]: "not-boolean" };
      const { error } = userPreferencesSchema.validate(prefs);
      expect(error).toBeDefined();
      expect(error?.details[0].message).toContain(
        `${field} doit être un booléen.`
      );
    }
  });

  it("should fail if fontSize is not a string", () => {
    const { error } = userPreferencesSchema.validate({
      ...validPreferences,
      fontSize: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "fontSize doit être une chaîne de caractères."
    );
  });

  it("should fail if id is not a string", () => {
    const { error } = userPreferencesSchema.validate({
      ...validPreferences,
      id: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID doit être une chaîne de caractères."
    );
  });
});
