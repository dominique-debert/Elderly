import { JsonObject } from "@/prisma/runtime/library"

export default interface IOfflineUser {
  user_id: string
  cached_data?: JsonObject
  last_sync: Date
}