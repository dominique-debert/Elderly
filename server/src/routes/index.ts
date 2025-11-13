import { Router } from "express";
import { authenticate } from "@/middlewares";
import { currentSession } from "@/middlewares";
import { errorHandler } from "@/middlewares";

// Import all routers
import authRouter from "./auth.routes";
import activityRouter from "./activity.routes";
import badgeRouter from "./badge.routes";
import cognitiveExerciseRouter from "./cognitiveExercise.routes";
import conversationRouter from "./conversation.routes";
import exerciseProgramRoutes from "./exerciseProgram.routes";
import forumMessageRouter from "./forumMessage.routes";
import forumTopicRouter from "./forumTopic.routes";
import forumSectionRouter from "./forumSection.routes";
import healthIndicatorRouter from "./healthIndicator.routes";
import helpOffersRouter from "./helpOffer.routes";
import helpRequestsRouter from "./helpRequest.routes";
import localServiceRouter from "./localService.routes";
import medicationReminderRouter from "./medicationReminder.routes";
import menuItemRouter from "./menuItem.routes";
import messageRouter from "./message.routes";
import municipalEventRouter from "./municipalEvent.routes";
import notificationRouter from "./notification.routes";
import nutritionalAdviceRouter from "./nutritionalAdvice.routes";
import projectMemberRouter from "./projectMember.routes";
import projectTaskRouter from "./projectTask.routes";
import resourceRouter from "./resource.routes";
import satisfactionSurveyRouter from "./satisfactionSurvey.routes";
import serviceCompletedRouter from "./serviceCompleted.routes";
import serviceRatingRouter from "./serviceRating.routes";
import skillRouter from "./skill.routes";
import surveyResponseRouter from "./surveyResponse.routes";
import trustCircleRouter from "./trustCircle.routes";
import trustedContactRouter from "./trustedContact.routes";
import urbanIssueReportRouter from "./urbanIssueReport.routes";
import userRouter from "./user.routes";
import userActivityRouter from "./userActivity.routes";
import userBadgeRouter from "./userBadge.routes";
import userContactRouter from "./userContacts.routes";
import userDeviceRouter from "./userDevice.routes";
import userSkillRouter from "./userSkill.routes";
import userStatisticsRouter from "./userStatistics.routes";
import videoCallRouter from "./videoCall.routes";
import weatherRouter from "./weather.routes";
import wellnessGoalRouter from "./wellnessGoal.routes";
import moodRouter from "./mood.routes";
import uploadsRoutes from "./uploads.routes";
import userPreferenceRouter from "./userPreferences.routes";

// Import all categories routers
import categoryRouter from "./category.meta.routes";

const router = Router();

// Public routes (no authentication required)
router.use("/auth", authRouter);

// Apply authentication middleware for protected routes
router.use(authenticate);
router.use(currentSession);

router.use("/categories", categoryRouter);

// Feature routes (all authenticated)
router.use("/activities", activityRouter);
router.use("/badges", badgeRouter);
router.use("/cognitive-exercises", cognitiveExerciseRouter);
router.use("/conversations", conversationRouter);
router.use("/exercise-programs", exerciseProgramRoutes);
router.use("/forum-messages", forumMessageRouter);
router.use("/forum-sections", forumSectionRouter);
router.use("/forum-topics", forumTopicRouter);
router.use("/health-indicators", healthIndicatorRouter);
router.use("/help-offers", helpOffersRouter);
router.use("/help-requests", helpRequestsRouter);
router.use("/local-services", localServiceRouter);
router.use("/messages", messageRouter);
router.use("/moods", moodRouter);
router.use("/medication-reminders", medicationReminderRouter);
router.use("/menu-items", menuItemRouter);
router.use("/municipal-events", municipalEventRouter);
router.use("/notifications", notificationRouter);
router.use("/nutrition-advices", nutritionalAdviceRouter);
router.use("/project-members", projectMemberRouter);
router.use("/project-tasks", projectTaskRouter);
router.use("/resources", resourceRouter);
router.use("/service-completed", serviceCompletedRouter);
router.use("/service-rating", serviceRatingRouter);
router.use("/satisfaction-surveys", satisfactionSurveyRouter);
router.use("/skills", skillRouter);
router.use("/survey-response", surveyResponseRouter);
router.use("/trust-circle", trustCircleRouter);
router.use("/trusted-contacts", trustedContactRouter);
router.use("/uploads", uploadsRoutes);
router.use("/urban-issue-reports", urbanIssueReportRouter);
router.use("/users", userRouter);
router.use("/user-activities", userActivityRouter);
router.use("/user-badges", userBadgeRouter);
router.use("/user-contacts", userContactRouter);
router.use("/user-devices", userDeviceRouter);
router.use("/user-skills", userSkillRouter);
router.use("/user-statistics", userStatisticsRouter);
router.use("/user-preferences", userPreferenceRouter);
router.use("/video-calls", videoCallRouter);
router.use("/weather", weatherRouter);
router.use("/wellness-goals", wellnessGoalRouter);

// Error handler (must be last)
router.use(errorHandler);

export default router;
