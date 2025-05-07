import Joi from 'joi';

export const wellnessGoalProgressSchema = Joi.object({
  goalId: Joi.string().required(),
  recordingDate: Joi.date().required(),
  achievedValue: Joi.number().required(),
  goalAchieved: Joi.boolean().required().default(false),
});

export const idParamWellnessGoalProgressSchema = Joi.object({
  id: Joi.string().required()
});

// goalId        String       @map("goal_id")
// recordingDate DateTime     @map("recording_date") @db.Date
// achievedValue Int          @map("achieved_value")
// goalAchieved  Boolean      @default(false) @map("goal_achieved")
