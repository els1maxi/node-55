import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { authenticateJWT } from './middleware/authMiddleware.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc({
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Product API',
            version: '1.0.0',
            description: 'API documentation for the product service'
        }
    },
    apis: ['./routes/*.js'],
})));

app.use('/users', userRoutes);
app.use('/products', productRoutes, authenticateJWT);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
