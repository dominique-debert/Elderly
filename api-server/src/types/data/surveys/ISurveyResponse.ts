import { JsonObject } from "@/prisma/runtime/library";

export interface ISurveyResponse {
  id?: string;
  surveyId: string;
  userId: string;
  responses: JsonObject;
  responseDate: Date;
}
