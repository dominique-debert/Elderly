import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '@/config/swagger';
import errorHandler from '@/middlewares/errorHandler';
import routes from '@/routes/index.routes';
import cors from 'cors';


const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://192.168.1.195:5173",
  "http://192.168.1.195:3000",
  "http://127.0.0.1:5173",
  "http://0.0.0.0:5173",
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`CORS blocked origin: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
