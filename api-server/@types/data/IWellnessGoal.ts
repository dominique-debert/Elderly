export default interface IWellnessGoal {
  user_id: string
  title: string
  category: string
  target_value: number
  unit: string
  frequency: string
  start_date: Date
  end_date: Date
  active: boolean
}