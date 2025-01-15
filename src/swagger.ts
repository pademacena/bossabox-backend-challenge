import swaggerAutogen from 'swagger-autogen';

const swaggerAutogenInstance = swaggerAutogen();

const doc = {
  info: {
    title: 'My API',
    description: 'API documentation automatically generated with swagger-autogen.',
  },
  host: 'localhost:3333', // Atualize conforme necessário
  schemes: ['http'],
};

const outputFile = './swagger-output.json'; // Arquivo de saída
const endpointsFiles = ['./src/routes/index.ts']; // Arquivo(s) principal(is) de rotas

swaggerAutogenInstance(outputFile, endpointsFiles).then(() => {
  console.log('Swagger documentation generated successfully!');
});
