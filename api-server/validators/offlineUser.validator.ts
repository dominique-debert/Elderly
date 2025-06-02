import Joi from 'joi';

export const offlineUserSchema = Joi.object({
  userId: Joi.string().required(),
  cachedData: Joi.string().allow(null, ''),
  lastSync: Joi.date().allow(null),
});

export const idParamOfflineUserSchema = Joi.object({
  id: Joi.string().required()
});

// userId     String    @id @map("user_id")
// cachedData Json?     @map("cached_data") @db.Json
// lastSync   DateTime? @map("last_sync") @db.Timestamp(6)