import { Router } from "express";
import {
  createSurveyResponse,
  getAllSurveyResponse,
  getSurveyResponseById,
  updateSurveyResponse,
  deleteSurveyResponse,
} from "@/controllers/index.controller";

import {
  surveyResponseSchema,
  idParamSurveyResponseSchema,
} from "@/validators/surveyResponse.validator";
import { validate } from "@/middlewares/validate";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Response
 *   description: Gestion des réponses aux enquêtes
 */

/**
 * @swagger
 * /api/survey-response:
 *   post:
 *     summary: Créer une nouvelle réponse à une enquête
 *     tags: [Survey Response]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Réponse à l'enquête créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SurveyResponse'
 *       500:
 *         description: Erreur serveur
 */
router.post("/", validate(surveyResponseSchema), createSurveyResponse);

/**
 * @swagger
 * /api/survey-response:
 *   get:
 *     summary: Récupérer toutes les réponses aux enquêtes
 *     tags: [Survey Response]
 *     responses:
 *       200:
 *         description: Liste des réponses aux enquêtes récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 surveyResponse:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/SurveyResponse'
 *       500:
 *         description: Erreur serveur
 */
router.get("/", getAllSurveyResponse);

/**
 * @swagger
 * /api/survey-response/{id}:
 *   get:
 *     summary: Récupérer une réponse à une enquête par ID
 *     tags: [Survey Response]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la réponse à l'enquête
 *     responses:
 *       200:
 *         description: Réponse à l'enquête trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SurveyResponse'
 *       404:
 *         description: Réponse à l'enquête non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get(
  "/:id",
  validate(idParamSurveyResponseSchema, "params"),
  getSurveyResponseById
);

/**
 * @swagger
 * /api/survey-response/{id}:
 *   put:
 *     summary: Mettre à jour une réponse à une enquête
 *     tags: [Survey Response]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la réponse à l'enquête
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Réponse à l'enquête mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SurveyResponse'
 *       500:
 *         description: Erreur serveur
 */
router.put(
  "/:id",
  validate(idParamSurveyResponseSchema, "params"),
  updateSurveyResponse
);

/**
 * @swagger
 * /api/survey-response/{id}:
 *   delete:
 *     summary: Supprimer une réponse à une enquête
 *     tags: [Survey Response]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la réponse à l'enquête
 *     responses:
 *       200:
 *         description: Réponse à l'enquête supprimée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete(
  "/:id",
  validate(idParamSurveyResponseSchema, "params"),
  deleteSurveyResponse
);

export default router;
