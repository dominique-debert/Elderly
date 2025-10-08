export default interface ITrustedContact {
  id?: string
  userId: string
  lastName: string
  firstName: string
  email?: string
  phone: string
  relationship?: string
  shareMedications: boolean
  shareHealthIndicators: boolean
  shareWellnessActivities: boolean
  emergencyAlerts: boolean
}