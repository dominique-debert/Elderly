import { userStatisticsSchema } from "@/validators/userStatistics.validator";

describe("userStatisticsSchema", () => {
  const validStats = {
    servicesProvided: 5,
    servicesReceived: 3,
    activitiesParticipated: 10,
    activitiesOrganized: 2,
    forumMessages: 15,
    totalHelpPoints: 100,
    networkSize: 8,
    userId: "user123",
  };

  it("should validate correct user statistics", () => {
    const { error, value } = userStatisticsSchema.validate(validStats);
    expect(error).toBeUndefined();
    expect(value.servicesProvided).toBe(5);
    expect(value.servicesReceived).toBe(3);
    expect(value.activitiesParticipated).toBe(10);
    expect(value.activitiesOrganized).toBe(2);
    expect(value.forumMessages).toBe(15);
    expect(value.totalHelpPoints).toBe(100);
    expect(value.networkSize).toBe(8);
    expect(value.userId).toBe("user123");
  });

  it("should default numbers to 0 if not provided", () => {
    const minimalStats = { userId: "user123" };
    const { error, value } = userStatisticsSchema.validate(minimalStats);
    expect(error).toBeUndefined();
    expect(value.servicesProvided).toBe(0);
    expect(value.servicesReceived).toBe(0);
    expect(value.activitiesParticipated).toBe(0);
    expect(value.activitiesOrganized).toBe(0);
    expect(value.forumMessages).toBe(0);
    expect(value.totalHelpPoints).toBe(0);
    expect(value.networkSize).toBe(0);
  });

  it("should fail if any number field is not a number", () => {
    const fields = [
      "servicesProvided",
      "servicesReceived",
      "activitiesParticipated",
      "activitiesOrganized",
      "forumMessages",
      "totalHelpPoints",
      "networkSize",
    ];
    for (const field of fields) {
      const stats = { ...validStats, [field]: "not-a-number" };
      const { error } = userStatisticsSchema.validate(stats);
      expect(error).toBeDefined();
      expect(error?.details[0].message).toMatch(/doit être un nombre/);
    }
  });

  it("should fail if userId is missing", () => {
    const { error } = userStatisticsSchema.validate({
      ...validStats,
      userId: "",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur est requis"
    );
  });

  it("should fail if userId is not a string", () => {
    const { error } = userStatisticsSchema.validate({
      ...validStats,
      userId: 123,
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "L'ID de l'utilisateur doit être une chaîne de caractères."
    );
  });
});
