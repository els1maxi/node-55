import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: List of products
 */
router.get('/', (req, res) => {
    res.json({ message: 'List of products' });
});

export default router;
