import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from '@/config/swagger';


import { authenticate } from '@/middlewares/auth';
import errorHandler from '@/middlewares/errorHandler';
import currentSession from '@/middlewares/session';

import authRouter from '@/routes/auth.routes';

import badgeRouter from '@/routes/badge.routes';
import cognitiveExerciseRouter from '@/routes/cognitiveExercise.routes';
import localServiceRouter from '@/routes/localService.routes';
import medicationReminderRouter from '@/routes/medicationReminder.routes';
import nutritionalAdviceRouter from '@/routes/nutritionalAdvice.routes';
import activityRouter from '@/routes/activity.routes'
import activityCategoriesRouter from '@/routes/activityCategory.routes'
import badgeCategoriesRouter from '@/routes/badgeCategory.routes'
import cognitiveCategoriesRouter from '@/routes/cognitiveCategory.routes'
import conversationRouter from '@/routes/conversation.routes'
import exerciseProgramRoutes from '@/routes/exerciseProgram.routes';
import forumCategoryRouter from '@/routes/forumCategory.routes';
import forumMessageRouter from '@/routes/forumMessage.routes';
import healthIndicatorRouter from '@/routes/healthIndicator.routes';
import helpCategoriesRouter from '@/routes/helpCategory.routes'
import helpOffersRouter from '@/routes/helpOffer.routes'
import helpRequestsRouter from '@/routes/helpRequest.routes'
import messageRouter from '@/routes/message.routes';
import municipalEventRouter from '@/routes/municipalEvent.routes';
import notificationRouter from '@/routes/notification.routes';
import notificationPreferencesRouter from '@/routes/notificationPreferences.routes';
import issueCategoriesRouter from '@/routes/issueCategory.routes'
import nutritionalCategoriesRouter from '@/routes/nutritionalCategory.routes'
import programCategoriesRouter from '@/routes/programCategory.routes'
import projectCategoriesRouter from '@/routes/projectCategory.routes'
import projectMemberRouter from '@/routes/projectMember.routes'
import projectTaskRouter from '@/routes/projectTask.routes'
import resourceRouter from '@/routes/resource.routes'
import resourceCategoriesRouter from '@/routes/resourceCategory.routes'
import satisfactionSurveyRouter from '@/routes/satisfactionSurvey.routes';
import serviceCompletedRouter from '@/routes/serviceCompleted.routes';
import serviceCategoriesRouter from '@/routes/serviceCategory.routes'
import serviceRatingRouter from '@/routes/serviceRating.routes';
import skillRouter from '@/routes/skill.routes';
import skillCategoriesRouter from '@/routes/skillCategory.routes'
import surveyResponseRouter from '@/routes/surveyResponse.routes';
import trustCircleRouter from '@/routes/trustCircle.routes';
import trustedContactRouter from '@/routes/trustedContact.routes';
import urbanIssueReportRouter from '@/routes/urbanIssueReport.routes';
import userRouter from '@/routes/user.routes';
import userActivityRouter from '@/routes/userActivity.routes';
import userBadgeRouter from '@/routes/userBadge.routes';
import userDeviceRouter from '@/routes/userDevice.routes';
import userSkillRouter from '@/routes/userSkill.routes';
import wellnessCategoriesRouter from '@/routes/serviceCategory.routes'

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(express.json()); // Correction de "expresson" -> "express.json"
app.use(express.urlencoded({ extended: true }));

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes

// Authentification
app.use('/api/auth', authRouter);

// Middleware d'auth global pour le reste
app.use(authenticate);

// On intègre ça dans une session
app.use(currentSession)

// Catégories
app.use('/api/activity-categories', activityCategoriesRouter);
app.use('/api/badge-categories', badgeCategoriesRouter);
app.use('/api/cognitive-categories', cognitiveCategoriesRouter);
app.use('/api/forum-categories', forumCategoryRouter);
app.use('/api/help-categories', helpCategoriesRouter);
app.use('/api/issue-categories', issueCategoriesRouter);
app.use('/api/nutritional-categories', nutritionalCategoriesRouter);
app.use('/api/program-categories', programCategoriesRouter);
app.use('/api/project-categories', projectCategoriesRouter);
app.use('/api/resource-categories', resourceCategoriesRouter);
app.use('/api/service-categories', serviceCategoriesRouter);
app.use('/api/skill-categories', skillCategoriesRouter);
app.use('/api/wellness-categories', wellnessCategoriesRouter);

app.use('/api/activities', activityRouter);
app.use('/api/badges', badgeRouter);
app.use('/api/cognitive-exercises', cognitiveExerciseRouter);
app.use('/api/conversations', conversationRouter);
app.use('/api/exercise-programs', exerciseProgramRoutes);
app.use('/api/forum-messages', forumMessageRouter);
app.use('/api/health-indicators', healthIndicatorRouter);
app.use('/api/help-offers', helpOffersRouter);
app.use('/api/help-requests', helpRequestsRouter);
app.use('/api/local-services', localServiceRouter);
app.use('/api/messages', messageRouter);
app.use('/api/medication-reminders', medicationReminderRouter);
app.use('/api/municipal-events', municipalEventRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/notification-preferences', notificationPreferencesRouter);
app.use('/api/nutrition-advices', nutritionalAdviceRouter); 
app.use('/api/project-members', projectMemberRouter);
app.use('/api/project-tasks', projectTaskRouter);
app.use('/api/resources', resourceRouter);
app.use('/api/service-completed', serviceCompletedRouter);
app.use('/api/service-rating', serviceRatingRouter);
app.use('/api/satisfaction-surveys', satisfactionSurveyRouter);
app.use('/api/survey-response', surveyResponseRouter);
app.use('/api/trust-circle', trustCircleRouter);
app.use('/api/trusted-contacts', trustedContactRouter);
app.use('/api/urban-issue-reports', urbanIssueReportRouter);
app.use('/api/users', userRouter);
app.use('/api/user-activities', userActivityRouter);
app.use('/api/user-badges', userBadgeRouter);
app.use('/api/user-devices', userDeviceRouter);
app.use('/api/user-skills', userSkillRouter);
app.use('/api/skills', skillRouter);

// Error handling middleware
app.use(errorHandler);

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API. Visit /api-docs for documentation');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});


