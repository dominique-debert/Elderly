export default interface IHealthIndicator {
  userId: string
  recordingDate: Date
  stepCount?: number
  sleepDurationMinutes?: number
  sleepQuality?: number
  weight?: number
  categoryId?: number
  notes?: string
}