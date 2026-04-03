import { municipalEventSchema } from "@/validators/municipalEvent.validator";

describe("municipalEventSchema", () => {
  const validEvent = {
    title: "Fête de la ville",
    description: "Événement annuel pour tous les habitants",
    startDate: "2024-11-01T10:00:00.000Z",
    endDate: "2024-11-01T18:00:00.000Z",
    location: "Place centrale",
    gpsCoordinates: "48.8566,2.3522",
    contact: "mairie@ville.fr",
    officialLink: "https://ville.fr/evenement",
    organizerId: "org123",
  };

  it("should validate a correct municipal event", () => {
    const { error } = municipalEventSchema.validate(validEvent);
    expect(error).toBeUndefined();
  });

  it("should fail if title is missing", () => {
    const { error } = municipalEventSchema.validate({
      ...validEvent,
      title: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le titre est requis");
  });

  it("should fail if title is not a string", () => {
    const { error } = municipalEventSchema.validate({
      ...validEvent,
      title: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le titre doit être une chaîne de caractères."
    );
  });

  it("should fail if startDate is not a valid date", () => {
    const { error } = municipalEventSchema.validate({
      ...validEvent,
      startDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de début doit être une date valide."
    );
  });

  it("should fail if endDate is not a valid date", () => {
    const { error } = municipalEventSchema.validate({
      ...validEvent,
      endDate: "not-a-date",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de fin doit être une date valide."
    );
  });

  it("should allow empty or null description, location, gpsCoordinates, contact, officialLink, organizerId", () => {
    const { error: error1 } = municipalEventSchema.validate({
      ...validEvent,
      description: "",
    });
    expect(error1).toBeUndefined();
    const { error: error2 } = municipalEventSchema.validate({
      ...validEvent,
      location: null,
    });
    expect(error2).toBeUndefined();
    const { error: error3 } = municipalEventSchema.validate({
      ...validEvent,
      gpsCoordinates: "",
    });
    expect(error3).toBeUndefined();
    const { error: error4 } = municipalEventSchema.validate({
      ...validEvent,
      contact: null,
    });
    expect(error4).toBeUndefined();
    const { error: error5 } = municipalEventSchema.validate({
      ...validEvent,
      officialLink: "",
    });
    expect(error5).toBeUndefined();
    const { error: error6 } = municipalEventSchema.validate({
      ...validEvent,
      organizerId: null,
    });
    expect(error6).toBeUndefined();
  });

  it("should fail if description is not a string", () => {
    const { error } = municipalEventSchema.validate({
      ...validEvent,
      description: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La description doit être une chaîne de caractères."
    );
  });

  it("should fail if location is not a string", () => {
    const { error } = municipalEventSchema.validate({
      ...validEvent,
      location: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le lieu doit être une chaîne de caractères."
    );
  });

  it("should fail if gpsCoordinates is not a string", () => {
    const { error } = municipalEventSchema.validate({
      ...validEvent,
      gpsCoordinates: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Les coordonnées GPS doivent être une chaîne de caractères."
    );
  });

  it("should fail if contact is not a string", () => {
    const { error } = municipalEventSchema.validate({
      ...validEvent,
      contact: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le contact doit être une chaîne de caractères."
    );
  });

  it("should fail if officialLink is not a string", () => {
    const { error } = municipalEventSchema.validate({
      ...validEvent,
      officialLink: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le lien officiel doit être une chaîne de caractères."
    );
  });

  it("should fail if organizerId is not a string", () => {
    const { error } = municipalEventSchema.validate({
      ...validEvent,
      organizerId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'organisateur doit être une chaîne de caractères."
    );
  });
});
