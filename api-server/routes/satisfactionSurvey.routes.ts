import { Router } from "express";
import {
  createSatisfactionSurvey,
  getAllSatisfactionSurveys,
  getSatisfactionSurveyById,
  updateSatisfactionSurvey,
  deleteSatisfactionSurvey,
} from "@/controllers/index.controller";

import {
  satisfactionSurveySchema,
  idParamSatisfactionSurveySchema,
} from "@/validators/satisfactionSurvey.validator";
import { validate } from "@/middlewares/validate";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Satisfaction Surveys
 *   description: Gestion des sondages de satisfaction
 */

/**
 * @swagger
 * /api/satisfaction-surveys:
 *   post:
 *     summary: Créer un nouveau sondage de satisfaction
 *     tags: [Satisfaction Surveys]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Sondage de satisfaction créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SatisfactionSurvey'
 *       500:
 *         description: Erreur serveur
 */
router.post("/", validate(satisfactionSurveySchema), createSatisfactionSurvey);

/**
 * @swagger
 * /api/satisfaction-surveys:
 *   get:
 *     summary: Récupérer toutes les sondages de satisfaction
 *     tags: [Satisfaction Surveys]
 *     responses:
 *       200:
 *         description: Liste des sondages de satisfaction récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 satisfactionSurveys:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/SatisfactionSurvey'
 *       500:
 *         description: Erreur serveur
 */
router.get("/", getAllSatisfactionSurveys);

/**
 * @swagger
 * /api/satisfaction-surveys/{id}:
 *   get:
 *     summary: Récupérer un sondage de satisfaction par ID
 *     tags: [Satisfaction Surveys]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du sondage de satisfaction
 *     responses:
 *       200:
 *         description: Sondage de satisfaction trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SatisfactionSurvey'
 *       404:
 *         description: Sondage de satisfaction non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get(
  "/:id",
  validate(idParamSatisfactionSurveySchema, "params"),
  getSatisfactionSurveyById
);

/**
 * @swagger
 * /api/resources/{id}:
 *   put:
 *     summary: Mettre à jour une ressource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ressource
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Ressource mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SatisfactionSurvey'
 *       500:
 *         description: Erreur serveur
 */
router.put(
  "/:id",
  validate(idParamSatisfactionSurveySchema, "params"),
  updateSatisfactionSurvey
);

/**
 * @swagger
 * /api/satisfaction-surveys/{id}:
 *   delete:
 *     summary: Supprimer un sondage de satisfaction
 *     tags: [Satisfaction Surveys]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du sondage de satisfaction
 *     responses:
 *       200:
 *         description: Sondage de satisfaction supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete(
  "/:id",
  validate(idParamSatisfactionSurveySchema, "params"),
  deleteSatisfactionSurvey
);

export default router;
