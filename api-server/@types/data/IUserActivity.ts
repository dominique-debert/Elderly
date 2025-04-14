export default interface IUserActivity {
  user_id: string
  completion_date: Date
  exercise_program_id?: string
  cognitive_exercise_id?: string
  duration_minutes: number
  perceived_difficulty_level?: number
  enjoyment_level?: number
  comment?: string
}