/**
 * @swagger
 * components:
 *   schemas:
 *     MedicationReminder:
 *       type: object
 *       required:
 *         - userId
 *         - medication_name
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         userId:
 *           type: string
 *         medication_name:
 *           type: string
 *           maxLength: 255
 *         dosage:
 *           type: string
 *           maxLength: 100
 *         morningReminderTime:
 *           type: string
 *           format: time
 *         noonReminderTime:
 *           type: string
 *           format: time
 *         eveningReminderTime:
 *           type: string
 *           format: time
 *         nightReminderTime:
 *           type: string
 *           format: time
 *         daysOfWeek:
 *           type: string
 *           maxLength: 50
 *         instructions:
 *           type: string
 *         active:
 *           type: boolean
 *         startDate:
 *           type: string
 *           format: date-time
 *         end_date:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def456"
 *         userId: "user123"
 *         medication_name: "Paracetamol"
 *         dosage: "500mg"
 *         morningReminderTime: "08:00:00"
 *         noonReminderTime: "12:00:00"
 *         eveningReminderTime: "18:00:00"
 *         nightReminderTime: "22:00:00"
 *         daysOfWeek: "Mon,Tue,Wed,Thu,Fri"
 *         instructions: "Prendre après les repas"
 *         active: true
 *         startDate: "2025-04-16T08:00:00Z"
 *         end_date: "2025-05-16T08:00:00Z"
 *         createdAt: "2025-04-16T08:00:00Z"
 *         updatedAt: "2025-04-16T08:00:00Z"
 *     createMedicationReminder:
 *       type: object
 *       required:
 *         - userId
 *         - medication_name
 *       properties:
 *         userId:
 *           type: string
 *         medication_name:
 *           type: string
 *           maxLength: 255
 *         dosage:
 *           type: string
 *           maxLength: 100
 *         morningReminderTime:
 *           type: string
 *           format: time
 *         noonReminderTime:
 *           type: string
 *           format: time
 *         eveningReminderTime:
 *           type: string
 *           format: time
 *         nightReminderTime:
 *           type: string
 *           format: time
 *         daysOfWeek:
 *           type: string
 *           maxLength: 50
 *         instructions:
 *           type: string
 *         active:
 *           type: boolean
 *           default: true
 *         startDate:
 *           type: string
 *           format: date-time
 *         end_date:
 *           type: string
 *           format: date-time
 *       example:
 *         userId: "user123"
 *         medication_name: "Ibuprofen"
 *         dosage: "200mg"
 *         morningReminderTime: "07:00:00"
 *         noonReminderTime: "12:00:00"
 *         eveningReminderTime: "18:00:00"
 *         nightReminderTime: "21:00:00"
 *         daysOfWeek: "Mon,Wed,Fri"
 *         instructions: "Prendre avant les repas"
 *         active: true
 *         startDate: "2025-04-16T08:00:00Z"
 *         end_date: "2025-06-16T08:00:00Z"
 *     updateMedicationReminder:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *         medication_name:
 *           type: string
 *           maxLength: 255
 *         dosage:
 *           type: string
 *           maxLength: 100
 *         morningReminderTime:
 *           type: string
 *           format: time
 *         noonReminderTime:
 *           type: string
 *           format: time
 *         eveningReminderTime:
 *           type: string
 *           format: time
 *         nightReminderTime:
 *           type: string
 *           format: time
 *         daysOfWeek:
 *           type: string
 *           maxLength: 50
 *         instructions:
 *           type: string
 *         active:
 *           type: boolean
 *         startDate:
 *           type: string
 *           format: date-time
 *         end_date:
 *           type: string
 *           format: date-time
 *       example:
 *         userId: "user456"
 *         medication_name: "Aspirin"
 *         dosage: "100mg"
 *         morningReminderTime: "08:00:00"
 *         noonReminderTime: "12:00:00"
 *         eveningReminderTime: "17:00:00"
 *         nightReminderTime: "22:00:00"
 *         daysOfWeek: "Tue,Thu,Sat"
 *         instructions: "Prendre avec de l'eau"
 *         active: true
 *         startDate: "2025-04-16T08:00:00Z"
 *         end_date: "2025-07-16T08:00:00Z"
 */

export {};
