  export default interface IActivity {
    creator_id: string
    title: string
    description?: string
    start_date: Date
    end_date?: Date
    location?: string
    gps_coordinates?: string
    max_spots?: number
    category?: string
    recurring?: boolean
    frequency?: string
    reduced_mobility_access?: boolean
    difficulty_level?: string
    cost?: number
    status?: string
    weather_requirements?: string
    transport_options?: string
}
