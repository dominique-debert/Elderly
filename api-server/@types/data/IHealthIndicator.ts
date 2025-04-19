export default interface IHealthIndicator {
  userId: string
  recordingDate: Date
  stepCount?: number
  sleepDurationMinutes?: number
  sleepQuality?: number
  weight?: number
  mood?: string
  notes?: string
}