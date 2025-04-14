import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from '@/config/swagger';

import skillRouter from '@/routes/skill.routes';
import badgeRouter from '@/routes/badge.routes';
import cognitiveExerciseRouter from '@/routes/cognitiveExercise.routes';
import localServiceRouter from '@/routes/localService.routes';
import nutritionalAdviceRouter from '@/routes/nutritionalAdvice.routes';

import errorHandler from '@/middlewares/errorHandler';
import exerciseProgramRoutes from '@/routes/exerciseProgram.routes';
import userRouter from '@/routes/user.routes';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(express.json()); // Correction de "expresson" -> "express.json"
app.use(express.urlencoded({ extended: true }));

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use('/api/badges', badgeRouter);
app.use('/api/cognitive-exercises', cognitiveExerciseRouter);
app.use('/api/exercise-programs', exerciseProgramRoutes);
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
