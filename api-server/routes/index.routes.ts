
import { Router } from 'express';
import { authenticate } from '@/middlewares/auth';
import currentSession from '@/middlewares/session';

// Import all routers
import authRouter from './auth.routes';
import activityRouter from './activity.routes';
import badgeRouter from './badge.routes';
import cognitiveExerciseRouter from './cognitiveExercise.routes';
import conversationRouter from './conversation.routes';
import exerciseProgramRoutes from './exerciseProgram.routes';
import forumMessageRouter from './forumMessage.routes';
import healthIndicatorRouter from './healthIndicator.routes';
import helpOffersRouter from './helpOffer.routes';
import helpRequestsRouter from './helpRequest.routes';
import localServiceRouter from './localService.routes';
import medicationReminderRouter from './medicationReminder.routes';
import messageRouter from './message.routes';
import municipalEventRouter from './municipalEvent.routes';
import notificationRouter from './notification.routes';
import notificationPreferencesRouter from './notificationPreferences.routes';
import nutritionalAdviceRouter from './nutritionalAdvice.routes';
import projectMemberRouter from './projectMember.routes';
import projectTaskRouter from './projectTask.routes';
import resourceRouter from './resource.routes';
import satisfactionSurveyRouter from './satisfactionSurvey.routes';
import serviceCompletedRouter from './serviceCompleted.routes';
import serviceRatingRouter from './serviceRating.routes';
import skillRouter from './skill.routes';
import surveyResponseRouter from './surveyResponse.routes';
import trustCircleRouter from './trustCircle.routes';
import trustedContactRouter from './trustedContact.routes';
import urbanIssueReportRouter from './urbanIssueReport.routes';
import userRouter from './user.routes';
import userActivityRouter from './userActivity.routes';
import userBadgeRouter from './userBadge.routes';
import userDeviceRouter from './userDevice.routes';
import userSkillRouter from './userSkill.routes';
import userStatisticsRouter from './userStatistics.routes';
import videoCallRouter from './videoCall.routes';
import wellnessGoalRouter from './wellnessGoal.routes';

// Import all categories routers
import activityCategoriesRouter from './categories/activityCategory.routes';
import badgeCategoriesRouter from './categories/badgeCategory.routes';
import cognitiveCategoriesRouter from './categories/cognitiveCategory.routes';
import forumCategoryRouter from './categories/forumCategory.routes';
import helpCategoriesRouter from './categories/helpCategory.routes';
import issueCategoriesRouter from './categories/urbanIssueCategory.routes';
import nutritionalCategoriesRouter from './categories/nutritionalCategory.routes';
import programCategoriesRouter from './categories/programCategory.routes';
import projectCategoriesRouter from './categories/projectCategory.routes';
import resourceCategoriesRouter from './categories/resourceCategory.routes';
import serviceCategoriesRouter from './categories/serviceCategory.routes';
import skillCategoriesRouter from './categories/skillCategory.routes';
import wellnessCategoriesRouter from './categories/wellnessCategory.routes';

const router = Router();


// Public routes
router.use('/auth', authRouter);

// Apply authentication middleware for protected routes
router.use(authenticate);
router.use(currentSession);

router.use('/activities/categories', activityCategoriesRouter);
router.use('/badges/categories', badgeCategoriesRouter);
router.use('/cognitive-exercises/categories', cognitiveCategoriesRouter);
router.use('/forum-messages/categories', forumCategoryRouter);
router.use('/help-requests/categories', helpCategoriesRouter);
router.use('/urban-issue-reports/categories', issueCategoriesRouter);
router.use('/nutrition-advices/categories', nutritionalCategoriesRouter);
router.use('/exercise-programs/categories', programCategoriesRouter);
router.use('/project-members/categories', projectCategoriesRouter);
router.use('/resources/categories', resourceCategoriesRouter);
router.use('/services/categories', serviceCategoriesRouter); 
router.use('/skills/categories', skillCategoriesRouter);
router.use('/wellness-goals/categories', wellnessCategoriesRouter);

// Feature routes
router.use('/activities', activityRouter);
router.use('/badges', badgeRouter);
router.use('/cognitive-exercises', cognitiveExerciseRouter);
router.use('/conversations', conversationRouter);
router.use('/exercise-programs', exerciseProgramRoutes);
router.use('/forum-messages', forumMessageRouter);
router.use('/health-indicators', healthIndicatorRouter);
router.use('/help-offers', helpOffersRouter);
router.use('/help-requests', helpRequestsRouter);
router.use('/local-services', localServiceRouter);
router.use('/messages', messageRouter);
router.use('/medication-reminders', medicationReminderRouter);
router.use('/municipal-events', municipalEventRouter);
router.use('/notifications', notificationRouter);
router.use('/notification-preferences', notificationPreferencesRouter);
router.use('/nutrition-advices', nutritionalAdviceRouter);
router.use('/project-members', projectMemberRouter);
router.use('/project-tasks', projectTaskRouter);
router.use('/resources', resourceRouter);
router.use('/service-completed', serviceCompletedRouter);
router.use('/service-rating', serviceRatingRouter);
router.use('/satisfaction-surveys', satisfactionSurveyRouter);
router.use('/skills', skillRouter);
router.use('/survey-response', surveyResponseRouter);
router.use('/trust-circle', trustCircleRouter);
router.use('/trusted-contacts', trustedContactRouter);
router.use('/urban-issue-reports', urbanIssueReportRouter);
router.use('/users', userRouter);
router.use('/user-activities', userActivityRouter);
router.use('/user-badges', userBadgeRouter);
router.use('/user-devices', userDeviceRouter);
router.use('/user-skills', userSkillRouter);
router.use('/user-statistics', userStatisticsRouter);
router.use('/video-calls', videoCallRouter);
router.use('/wellness-goals', wellnessGoalRouter);

export default router;

