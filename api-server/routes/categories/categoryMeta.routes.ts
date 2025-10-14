import { Router } from "express";
import {
  getCategoryChapters,
  getCategoryTypes,
} from "@/controllers/categories/categoryMeta.controller";

const router = Router();

/**
 * @swagger
 * /api/categories/chapters:
 *   get:
 *     summary: Récupérer les chapitres de catégories
 *     tags: [Chapitres de catégories]
 *     responses:
 *       200:
 *         description: Chapitres récupérés avec succès
 *       404:
 *         description: Chapitres non trouvés
 *       500:
 *         description: Erreur serveur
 */
router.get("/chapters", getCategoryChapters);

/**
 * @swagger
 * /api/categories/types:
 *   get:
 *     summary: Récupérer les types de catégories
 *     tags: [Types de catégories]
 *     responses:
 *       200:
 *         description: Types récupérés avec succès
 *       404:
 *         description: Types non trouvés
 *       500:
 *         description: Erreur serveur
 */
router.get("/types", getCategoryTypes);

export default router;
