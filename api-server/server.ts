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
import nutritionalAdviceRouter from '@/routes/nutritionalAdvice.routes';
import activityRouter from '@/routes/activity.routes'
import activityCategoriesRouter from '@/routes/activityCategory.routes'
import badgeCategoriesRouter from '@/routes/badgeCategory.routes'
import cognitiveCategoriesRouter from '@/routes/cognitiveCategory.routes'
import conversationRouter from '@/routes/conversation.routes'
import exerciseProgramRoutes from '@/routes/exerciseProgram.routes';
import forumCategoryRouter from '@/routes/forumCategory.routes';
import helpCategoriesRouter from '@/routes/helpCategory.routes'
import issueCategoriesRouter from '@/routes/issueCategory.routes'
import nutritionalCategoriesRouter from '@/routes/nutritionalCategory.routes'
import programCategoriesRouter from '@/routes/programCategory.routes'
import projectCategoriesRouter from '@/routes/projectCategory.routes'
import resourceCategoriesRouter from '@/routes/resourceCategory.routes'
import serviceCategoriesRouter from '@/routes/serviceCategory.routes'
import skillRouter from '@/routes/skill.routes';
import skillCategoriesRouter from '@/routes/skillCategory.routes'
import userRouter from '@/routes/user.routes';
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
app.use('/api/forum-categories', forumCategoryRouter);
app.use('/api/local-services', localServiceRouter);
app.use('/api/nutrition-advices', nutritionalAdviceRouter); // Correction de l'URL (supprimé un slash en trop)
app.use('/api/users', userRouter);
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


