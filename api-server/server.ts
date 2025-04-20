import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from '@/config/swagger';
import errorHandler from '@/middlewares/errorHandler';
import routes from '@/routes/index.routes';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use('/api', routes);

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

export default app;
