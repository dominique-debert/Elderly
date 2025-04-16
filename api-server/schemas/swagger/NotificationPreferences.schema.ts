/**
 * @swagger
 * components:
 *   schemas:
 *     NotificationPreferences:
 *       type: object
 *       required:
 *         - userId
 *       properties:
 *         userId:
 *           type: string
 *         messageNotification:
 *           type: boolean
 *           default: false
 *         activityNotification:
 *           type: boolean
 *           default: false
 *         helpNotification:
 *           type: boolean
 *           default: false
 *         forumNotification:
 *           type: boolean
 *           default: false
 *         emailNotification:
 *           type: boolean
 *           default: false
 *         smsNotification:
 *           type: boolean
 *           default: false
 *         pushNotification:
 *           type: boolean
 *           default: false
 *         quietHoursStart:
 *           type: string
 *           format: time
 *         quietHoursEnd:
 *           type: string
 *           format: time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         userId: "user123"
 *         messageNotification: true
 *         activityNotification: false
 *         helpNotification: true
 *         forumNotification: true
 *         emailNotification: true
 *         smsNotification: false
 *         pushNotification: true
 *         quietHoursStart: "22:00:00"
 *         quietHoursEnd: "07:00:00"
 *         createdAt: "2025-04-15T08:00:00Z"
 *         updatedAt: "2025-04-15T08:00:00Z"
 *     createNotificationPreferences:
 *       type: object
 *       required:
 *         - userId
 *       properties:
 *         userId:
 *           type: string
 *         messageNotification:
 *           type: boolean
 *           default: false
 *         activityNotification:
 *           type: boolean
 *           default: false
 *         helpNotification:
 *           type: boolean
 *           default: false
 *         forumNotification:
 *           type: boolean
 *           default: false
 *         emailNotification:
 *           type: boolean
 *           default: false
 *         smsNotification:
 *           type: boolean
 *           default: false
 *         pushNotification:
 *           type: boolean
 *           default: false
 *         quietHoursStart:
 *           type: string
 *           format: time
 *         quietHoursEnd:
 *           type: string
 *           format: time
 *       example:
 *         userId: "user123"
 *         messageNotification: true
 *         activityNotification: false
 *         helpNotification: true
 *         forumNotification: true
 *         emailNotification: true
 *         smsNotification: false
 *         pushNotification: true
 *         quietHoursStart: "22:00:00"
 *         quietHoursEnd: "07:00:00"
 *     updateNotificationPreferences:
 *       type: object
 *       properties:
 *         messageNotification:
 *           type: boolean
 *         activityNotification:
 *           type: boolean
 *         helpNotification:
 *           type: boolean
 *         forumNotification:
 *           type: boolean
 *         emailNotification:
 *           type: boolean
 *         smsNotification:
 *           type: boolean
 *         pushNotification:
 *           type: boolean
 *         quietHoursStart:
 *           type: string
 *           format: time
 *         quietHoursEnd:
 *           type: string
 *           format: time
 *       example:
 *         messageNotification: true
 *         activityNotification: false
 *         helpNotification: true
 *         forumNotification: true
 *         emailNotification: true
 *         smsNotification: false
 *         pushNotification: true
 *         quietHoursStart: "22:00:00"
 *         quietHoursEnd: "07:00:00"
 */

export {};
