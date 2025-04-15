export default interface ITrustedContact {
  user_id: string
  last_name: string
  first_name: string
  email?: string
  phone: string
  relationship?: string
  share_medications: boolean
  share_health_indicators: boolean
  share_wellness_activities: boolean
  emergency_alerts: boolean
}