import { Router } from "express";
import {
  getCategoryChapters,
  getCategoryTypes,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryChapterById,
  getCategoryTypeById,
} from "@/controllers";

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
 * /api/categories/chapters/{id}:
 *   get:
 *     summary: Récupérer un chapitre de catégorie par ID
 *     tags: [Chapitres de catégories]
 *     responses:
 *       200:
 *         description: Chapitre récupéré avec succès
 *       404:
 *         description: Chapitre non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/chapters/:id", getCategoryChapterById);

/**
 * @swagger
 * /api/categories/types/{id}:
 *   get:
 *     summary: Récupérer un type de catégorie par ID
 *     tags: [Types de catégories]
 *     responses:
 *       200:
 *         description: Type récupéré avec succès
 *       404:
 *         description: Type non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/types/:id", getCategoryTypeById);

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

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Récupérer les catégories
 *     tags: [Catégories]
 *     responses:
 *       200:
 *         description: Catégories récupérées avec succès
 *       404:
 *         description: Catégories non trouvées
 *       500:
 *         description: Erreur serveur
 */
router.get("/", async (req, res, next) => {
  try {
    const categoryTypeId = parseInt(req.query.categoryTypeId as string);
    const categories = await getCategories(req, res, next, categoryTypeId);
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Créer une catégorie
 *     tags: [Catégories]
 *     responses:
 *       200:
 *         description: Catégorie créée avec succès
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.post("/", async (req, res, next) => {
  try {
    await createCategory(req, res, next);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Catégories]
 *     responses:
 *       200:
 *         description: Catégorie supprimée avec succès
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", async (req, res, next) => {
  try {
    await deleteCategory(req, res, next);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /api/categories/{id}:
 *   post:
 *     summary: Mettre à jour une catégorie
 *     tags: [Catégories]
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.post("/:id", async (req, res, next) => {
  try {
    await updateCategory(req, res, next);
  } catch (error) {
    next(error);
  }
});

export default router;
