
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ActivityScalarFieldEnum = {
  id: 'id',
  creator_id: 'creator_id',
  title: 'title',
  description: 'description',
  start_date: 'start_date',
  end_date: 'end_date',
  location: 'location',
  gps_coordinates: 'gps_coordinates',
  max_spots: 'max_spots',
  category: 'category',
  recurring: 'recurring',
  frequency: 'frequency',
  reduced_mobility_access: 'reduced_mobility_access',
  difficulty_level: 'difficulty_level',
  cost: 'cost',
  status: 'status',
  weather_requirements: 'weather_requirements',
  transport_options: 'transport_options',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Activity_logScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  action_type: 'action_type',
  description: 'description',
  action_date: 'action_date',
  ip_address: 'ip_address',
  device: 'device',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Activity_registrationScalarFieldEnum = {
  activity_id: 'activity_id',
  user_id: 'user_id',
  registration_date: 'registration_date',
  status: 'status',
  attendance_confirmed: 'attendance_confirmed',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.BadgeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  icon: 'icon',
  category: 'category',
  level: 'level',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Cognitive_exerciseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  difficulty_level: 'difficulty_level',
  duration_minutes: 'duration_minutes',
  description: 'description',
  image: 'image',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Collaborative_projectScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  creator_id: 'creator_id',
  creation_date: 'creation_date',
  status: 'status',
  category: 'category',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ConversationScalarFieldEnum = {
  id: 'id',
  type: 'type',
  creation_date: 'creation_date',
  title: 'title',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Conversation_participantScalarFieldEnum = {
  conversation_id: 'conversation_id',
  user_id: 'user_id',
  date_added: 'date_added',
  administrator: 'administrator',
  last_access: 'last_access',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Exercise_programScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  difficulty_level: 'difficulty_level',
  adapted_for_reduced_mobility: 'adapted_for_reduced_mobility',
  duration_minutes: 'duration_minutes',
  description: 'description',
  video_link: 'video_link',
  image: 'image',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Forum_categoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  parent_category_id: 'parent_category_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Forum_messageScalarFieldEnum = {
  id: 'id',
  topic_id: 'topic_id',
  author_id: 'author_id',
  content: 'content',
  creation_date: 'creation_date',
  modification_date: 'modification_date',
  solution_message: 'solution_message',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Forum_topicScalarFieldEnum = {
  id: 'id',
  category_id: 'category_id',
  author_id: 'author_id',
  title: 'title',
  creation_date: 'creation_date',
  pinned: 'pinned',
  status: 'status',
  views: 'views',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Goal_progressScalarFieldEnum = {
  id: 'id',
  goal_id: 'goal_id',
  recording_date: 'recording_date',
  achieved_value: 'achieved_value',
  goal_achieved: 'goal_achieved',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Health_indicatorScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  recording_date: 'recording_date',
  step_count: 'step_count',
  sleep_duration_minutes: 'sleep_duration_minutes',
  sleep_quality: 'sleep_quality',
  weight: 'weight',
  mood: 'mood',
  notes: 'notes',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Help_offerScalarFieldEnum = {
  id: 'id',
  request_id: 'request_id',
  helper_id: 'helper_id',
  offer_date: 'offer_date',
  message: 'message',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Help_requestScalarFieldEnum = {
  id: 'id',
  creator_id: 'creator_id',
  title: 'title',
  description: 'description',
  creation_date: 'creation_date',
  needed_date: 'needed_date',
  estimated_duration: 'estimated_duration',
  location: 'location',
  gps_coordinates: 'gps_coordinates',
  category: 'category',
  recurring: 'recurring',
  frequency: 'frequency',
  status: 'status',
  points_offered: 'points_offered',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Local_serviceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  address: 'address',
  gps_coordinates: 'gps_coordinates',
  phone: 'phone',
  website: 'website',
  description: 'description',
  hours: 'hours',
  senior_friendly: 'senior_friendly',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Medication_reminderScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  medication_name: 'medication_name',
  dosage: 'dosage',
  morning_reminder_time: 'morning_reminder_time',
  noon_reminder_time: 'noon_reminder_time',
  evening_reminder_time: 'evening_reminder_time',
  night_reminder_time: 'night_reminder_time',
  days_of_week: 'days_of_week',
  instructions: 'instructions',
  active: 'active',
  start_date: 'start_date',
  end_date: 'end_date',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  conversation_id: 'conversation_id',
  sender_id: 'sender_id',
  content: 'content',
  send_date: 'send_date',
  type: 'type',
  read: 'read',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Municipal_eventScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  start_date: 'start_date',
  end_date: 'end_date',
  location: 'location',
  gps_coordinates: 'gps_coordinates',
  organizer: 'organizer',
  contact: 'contact',
  official_link: 'official_link',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  type: 'type',
  content: 'content',
  read: 'read',
  action_link: 'action_link',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Notification_preferencesScalarFieldEnum = {
  user_id: 'user_id',
  message_notification: 'message_notification',
  activity_notification: 'activity_notification',
  help_notification: 'help_notification',
  forum_notification: 'forum_notification',
  email_notification: 'email_notification',
  sms_notification: 'sms_notification',
  push_notification: 'push_notification',
  quiet_hours_start: 'quiet_hours_start',
  quiet_hours_end: 'quiet_hours_end',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nutritional_adviceScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  category: 'category',
  season: 'season',
  image: 'image',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Offline_userScalarFieldEnum = {
  user_id: 'user_id',
  cached_data: 'cached_data',
  last_sync: 'last_sync',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Project_memberScalarFieldEnum = {
  project_id: 'project_id',
  user_id: 'user_id',
  role: 'role',
  join_date: 'join_date',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Project_taskScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  title: 'title',
  description: 'description',
  creation_date: 'creation_date',
  due_date: 'due_date',
  status: 'status',
  assignee_id: 'assignee_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ResourceScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  type: 'type',
  category: 'category',
  author_id: 'author_id',
  admin_validated: 'admin_validated',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Satisfaction_surveyScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  start_date: 'start_date',
  end_date: 'end_date',
  active: 'active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Service_completedScalarFieldEnum = {
  id: 'id',
  request_id: 'request_id',
  helper_id: 'helper_id',
  completion_date: 'completion_date',
  actual_duration: 'actual_duration',
  creator_comment: 'creator_comment',
  helper_comment: 'helper_comment',
  creator_rating: 'creator_rating',
  helper_rating: 'helper_rating',
  points_exchanged: 'points_exchanged',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Service_ratingScalarFieldEnum = {
  service_id: 'service_id',
  user_id: 'user_id',
  rating: 'rating',
  comment: 'comment',
  rating_date: 'rating_date',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SkillScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Survey_responseScalarFieldEnum = {
  survey_id: 'survey_id',
  user_id: 'user_id',
  responses: 'responses',
  response_date: 'response_date',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Trust_circleScalarFieldEnum = {
  user_id: 'user_id',
  contact_id: 'contact_id',
  date_added: 'date_added',
  access_level: 'access_level',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Trusted_contactScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  last_name: 'last_name',
  first_name: 'first_name',
  email: 'email',
  phone: 'phone',
  relationship: 'relationship',
  share_medications: 'share_medications',
  share_health_indicators: 'share_health_indicators',
  share_wellness_activities: 'share_wellness_activities',
  emergency_alerts: 'emergency_alerts',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Urban_issue_reportScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  category: 'category',
  description: 'description',
  address: 'address',
  gps_coordinates: 'gps_coordinates',
  report_date: 'report_date',
  status: 'status',
  city_reference: 'city_reference',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password_hash: 'password_hash',
  first_name: 'first_name',
  last_name: 'last_name',
  birth_date: 'birth_date',
  address: 'address',
  gps_coordinates: 'gps_coordinates',
  phone: 'phone',
  profile_picture: 'profile_picture',
  registration_date: 'registration_date',
  account_verified: 'account_verified',
  interface_preferences: 'interface_preferences',
  two_factor_authentication: 'two_factor_authentication',
  help_points: 'help_points',
  reduced_mobility: 'reduced_mobility',
  activity_level: 'activity_level',
  emergency_contact_name: 'emergency_contact_name',
  emergency_contact_phone: 'emergency_contact_phone',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_activityScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  completion_date: 'completion_date',
  exercise_program_id: 'exercise_program_id',
  cognitive_exercise_id: 'cognitive_exercise_id',
  duration_minutes: 'duration_minutes',
  perceived_difficulty_level: 'perceived_difficulty_level',
  enjoyment_level: 'enjoyment_level',
  comment: 'comment',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_badgeScalarFieldEnum = {
  user_id: 'user_id',
  badge_id: 'badge_id',
  achievement_date: 'achievement_date',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_deviceScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  device_type: 'device_type',
  device_name: 'device_name',
  operating_system: 'operating_system',
  notification_token: 'notification_token',
  last_connection: 'last_connection',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_skillScalarFieldEnum = {
  user_id: 'user_id',
  skill_id: 'skill_id',
  level: 'level',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_statisticsScalarFieldEnum = {
  user_id: 'user_id',
  services_provided: 'services_provided',
  services_received: 'services_received',
  activities_participated: 'activities_participated',
  activities_organized: 'activities_organized',
  forum_messages: 'forum_messages',
  total_help_points: 'total_help_points',
  network_size: 'network_size',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Video_callScalarFieldEnum = {
  id: 'id',
  conversation_id: 'conversation_id',
  initiator_id: 'initiator_id',
  start_date: 'start_date',
  end_date: 'end_date',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Wellness_badgeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  image: 'image',
  level: 'level',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Wellness_goalScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  title: 'title',
  category: 'category',
  target_value: 'target_value',
  unit: 'unit',
  frequency: 'frequency',
  start_date: 'start_date',
  end_date: 'end_date',
  active: 'active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  activity: 'activity',
  activity_log: 'activity_log',
  activity_registration: 'activity_registration',
  badge: 'badge',
  cognitive_exercise: 'cognitive_exercise',
  collaborative_project: 'collaborative_project',
  conversation: 'conversation',
  conversation_participant: 'conversation_participant',
  exercise_program: 'exercise_program',
  forum_category: 'forum_category',
  forum_message: 'forum_message',
  forum_topic: 'forum_topic',
  goal_progress: 'goal_progress',
  health_indicator: 'health_indicator',
  help_offer: 'help_offer',
  help_request: 'help_request',
  local_service: 'local_service',
  medication_reminder: 'medication_reminder',
  message: 'message',
  municipal_event: 'municipal_event',
  notification: 'notification',
  notification_preferences: 'notification_preferences',
  nutritional_advice: 'nutritional_advice',
  offline_user: 'offline_user',
  project_member: 'project_member',
  project_task: 'project_task',
  resource: 'resource',
  satisfaction_survey: 'satisfaction_survey',
  service_completed: 'service_completed',
  service_rating: 'service_rating',
  skill: 'skill',
  survey_response: 'survey_response',
  trust_circle: 'trust_circle',
  trusted_contact: 'trusted_contact',
  urban_issue_report: 'urban_issue_report',
  user: 'user',
  user_activity: 'user_activity',
  user_badge: 'user_badge',
  user_device: 'user_device',
  user_skill: 'user_skill',
  user_statistics: 'user_statistics',
  video_call: 'video_call',
  wellness_badge: 'wellness_badge',
  wellness_goal: 'wellness_goal'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
