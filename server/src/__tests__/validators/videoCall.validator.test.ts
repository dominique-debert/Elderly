import { videoCallSchema } from "@/validators/videoCall.validator";

describe("videoCallSchema", () => {
  const validCall = {
    conversationId: "conv123",
    initiatorId: "user456",
    startDate: "2024-11-01T10:00:00.000Z",
    endDate: "2024-11-01T10:30:00.000Z",
    status: "completed",
  };

  it("should validate a correct video call", () => {
    const { error } = videoCallSchema.validate(validCall);
    expect(error).toBeUndefined();
  });

  it("should fail if conversationId is missing", () => {
    const { error } = videoCallSchema.validate({
      ...validCall,
      conversationId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la conversation est requis"
    );
  });

  it("should fail if conversationId is not a string", () => {
    const { error } = videoCallSchema.validate({
      ...validCall,
      conversationId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de la conversation doit être une chaîne de caractères."
    );
  });

  it("should fail if initiatorId is missing", () => {
    const { error } = videoCallSchema.validate({
      ...validCall,
      initiatorId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'initiateur est requis"
    );
  });

  it("should fail if initiatorId is not a string", () => {
    const { error } = videoCallSchema.validate({
      ...validCall,
      initiatorId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'initiateur doit être une chaîne de caractères."
    );
  });

  it("should fail if startDate is missing", () => {
    const { error } = videoCallSchema.validate({
      ...validCall,
      startDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de début est obligatoire."
    );
  });

  it("should fail if startDate is not a valid date", () => {
    const { error } = videoCallSchema.validate({
      ...validCall,
      startDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de début doit être une date valide."
    );
  });

  it("should fail if endDate is missing", () => {
    const { error } = videoCallSchema.validate({
      ...validCall,
      endDate: undefined,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de fin est obligatoire."
    );
  });

  it("should fail if endDate is not a valid date", () => {
    const { error } = videoCallSchema.validate({
      ...validCall,
      endDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de fin doit être une date valide."
    );
  });

  it("should fail if status is missing", () => {
    const { error } = videoCallSchema.validate({ ...validCall, status: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le statut est requis");
  });

  it("should fail if status is not a string", () => {
    const { error } = videoCallSchema.validate({ ...validCall, status: 123 });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le statut doit être une chaîne de caractères."
    );
  });
});
