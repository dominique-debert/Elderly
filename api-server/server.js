import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger.js';
import db from  './models/index.js';

import userRoutes from './routes/user.routes.js';
import skillRoutes from './routes/skill.routes.js';
import badgeRoutes from './routes/badge.routes.js';
import cognitiveExerciseRoutes from './routes/cognitiveExercise.routes.js';
import exerciseProgramRoutes from './routes/exerciseProgram.routes.js';
import localServiceRoutes from './routes/localService.routes.js';
import nutritionAdviceRoutes from './routes/nutritionAdvice.routes.js';
import wellnessBadgeRoutes from './routes/wellnessBadge.routes.js';

import { PrismaClient } from './prisma/client.js'

const prisma = new PrismaClient()

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/api/badges', badgeRoutes);
app.use('/api/cognitive-exercises', cognitiveExerciseRoutes);
app.use('/api/exercise-programs', exerciseProgramRoutes);
app.use('/api/local-services', localServiceRoutes);
app.use('/api//nutrition-advices', nutritionAdviceRoutes);
app.use('/api/users', userRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/wellness-badges', wellnessBadgeRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API. Visit /api-docs for documentation');
});

// Sync database and start server
db.sequelize.sync() // Use { force: true } to drop and recreate tables in development
.then(() => {
  console.log('Database synchronized');
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
  });
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

