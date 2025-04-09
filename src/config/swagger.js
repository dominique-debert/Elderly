import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Helpy backend API',
      version: '0.0.1',
      description: 'API with CRUD operations and Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['src/routes/*.js'], // Attention: le chemin vers les routes est à partir du root
};

const swaggerSpecs = swaggerJsdoc(options);

export default swaggerSpecs;