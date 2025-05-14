// routes/badgeRoutes.ts
import { Router } from 'express';
import errorHandler from '@/middlewares/errorHandler';

import {
  getAllMenuItems,
} from '@/controllers/index.controller';

const router = Router();

/**
 * @swagger
 * /api/menu-items:
 *   get:
 *     summary: Récupérer tous les items du menu d'administration
 *     description: Renvoie une liste d'items
 *     tags: [Menu Items]
 *     responses:
 *       200:
 *         description: Liste des items récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 menuItems:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/MenuItem'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllMenuItems);

export default router;
