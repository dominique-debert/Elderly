import { conversationSchema } from "@/validators/conversation.validator";

describe("conversationSchema", () => {
  const validConversation = {
    title: "Discussion",
    type: "private",
  };

  it("should validate a correct conversation", () => {
    const { error } = conversationSchema.validate(validConversation);
    expect(error).toBeUndefined();
  });

  it("should fail if title is missing", () => {
    const { error } = conversationSchema.validate({
      ...validConversation,
      title: "",
    });
    expect(error).toBeDefined();
  });
});
