import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js API with PostgreSQL and Sequelize',
      version: '1.0.0',
      description: 'A RESTful API with full CRUD operations built with Express, PostgreSQL, and Sequelize',
      contact: {
        name: 'API Support',
        email: 'support@example.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
      {
        url: 'https://api.example.com',
        description: 'Production server',
      }
    ],
  },
  apis: ['./routes/*.js',
    './swagger/schemas/*.js',
  ], // Path to the API routes with JSDoc comments
};

export const specs = swaggerJsdoc(options);
