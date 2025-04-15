export default interface IHealthIndicator {
  user_id: string
  recording_date: Date
  step_count?: number
  sleep_duration_minutes?: number
  sleep_quality?: number
  weight?: number
  mood?: string
  notes?: string
}