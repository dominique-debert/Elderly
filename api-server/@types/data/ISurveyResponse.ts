import { JsonObject } from "@/prisma/runtime/library"

export default interface ISurveyResponse {
  survey_id: string
  user_id: string
  responses: JsonObject
  response_date: Date
}