import { activitySchema } from "@/validators/activity.validator";

describe("activitySchema", () => {
  const validActivity = {
    title: "Randonnée",
    description: "Balade en montagne",
    startDate: "2024-10-25",
    endDate: "2024-10-26",
    location: "Alpes",
    reducedMobilityAccess: true,
    difficultyLevel: 3,
    cost: 10.5,
    status: "published",
    weatherRequirements: "",
    transportOptions: "",
    creatorId: "user123",
    categoryId: "cat456",
  };

  it("should validate a correct activity", () => {
    const { error } = activitySchema.validate(validActivity);
    expect(error).toBeUndefined();
  });

  it("should fail if title is missing", () => {
    const { error } = activitySchema.validate({ ...validActivity, title: "" });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain("Le nom est requis");
  });

  it("should fail if endDate is before startDate", () => {
    const { error } = activitySchema.validate({
      ...validActivity,
      endDate: "2024-10-20",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "La date de fin doit être postérieure à la date de début"
    );
  });

  it("should fail if status is invalid", () => {
    const { error } = activitySchema.validate({
      ...validActivity,
      status: "invalid",
    });
    expect(error).toBeDefined();
    expect(error?.details[0].message).toContain(
      "Le statut doit être 'draft', 'published' ou 'archived'"
    );
  });
});
