import express from 'express';
import swaggerUi from 'swagger-ui-express';
import userRouter from './routes/users.js';
import swaggerSpecs from './config/swagger.js';
import db from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use('/api/users', userRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API. Visit /api-docs for documentation');
});

// Sync database and start server
db.sequelize.sync({ alter: true }) // Use { force: true } to drop and recreate tables in development
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