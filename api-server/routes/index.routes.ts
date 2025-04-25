
import { Router } from 'express';
import { authenticate } from '@/middlewares/auth';
import currentSession from '@/middlewares/session';

// Import all routers
import authRouter from './auth.routes';
import activityRouter from './activity.routes';
import activityCategoriesRouter from './activityCategory.routes';
import badgeRouter from './badge.routes';
import badgeCategoriesRouter from './badgeCategory.routes';
import cognitiveExerciseRouter from './cognitiveExercise.routes';
import cognitiveCategoriesRouter from './cognitiveCategory.routes';
import conversationRouter from './conversation.routes';
import exerciseProgramRoutes from './exerciseProgram.routes';
import forumCategoryRouter from './forumCategory.routes';
import forumMessageRouter from './forumMessage.routes';
import healthIndicatorRouter from './healthIndicator.routes';
import helpCategoriesRouter from './helpCategory.routes';
import helpOffersRouter from './helpOffer.routes';
import helpRequestsRouter from './helpRequest.routes';
import issueCategoriesRouter from './issueCategory.routes';
import localServiceRouter from './localService.routes';
import medicationReminderRouter from './medicationReminder.routes';
import messageRouter from './message.routes';
import municipalEventRouter from './municipalEvent.routes';
import notificationRouter from './notification.routes';
import notificationPreferencesRouter from './notificationPreferences.routes';
import nutritionalAdviceRouter from './nutritionalAdvice.routes';
import nutritionalCategoriesRouter from './nutritionalCategory.routes';
import programCategoriesRouter from './programCategory.routes';
import projectCategoriesRouter from './projectCategory.routes';
import projectMemberRouter from './projectMember.routes';
import projectTaskRouter from './projectTask.routes';
import resourceRouter from './resource.routes';
import resourceCategoriesRouter from './resourceCategory.routes';
import satisfactionSurveyRouter from './satisfactionSurvey.routes';
import serviceCompletedRouter from './serviceCompleted.routes';
import serviceCategoriesRouter from './serviceCategory.routes';
import serviceRatingRouter from './serviceRating.routes';
import skillRouter from './skill.routes';
import skillCategoriesRouter from './skillCategory.routes';
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
import wellnessCategoriesRouter from './wellnessCategory.routes';
import wellnessGoalRouter from './wellnessGoal.routes';
import categoryIndexRouter from './categoryIndex.routes';

const router = Router();

// Public routes
router.use('/auth', authRouter);

// Apply authentication middleware for protected routes
router.use(authenticate);
router.use(currentSession);

// Categories routes
router.use('/categories', categoryIndexRouter);

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

