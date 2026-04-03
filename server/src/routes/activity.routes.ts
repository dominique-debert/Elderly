import { Router } from "express";
import { validate } from "@/middlewares";
import {
  createActivity,
  getAllActivities,
  getActivityById,
  updateActivity,
  deleteActivity,
} from "@/controllers";

import { activitySchema } from "@/validators";

const router = Router();

/**
 * @swagger
 * /api/activities:
 *   get:
 *     summary: Récupérer toutes les activités avec leurs catégories
 *     description: Renvoie une liste de toutes les activités disponibles avec leurs catégories associées
 *     security:
 *       - bearerAuth: []
 *     tags: [Activities]
 *     responses:
 *       200:
 *         description: Liste des activités récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 *       500:
 *         description: Erreur serveur
 */
router.get("/", getAllActivities);

/**
 * @swagger
 * /api/activities/{id}:
 *   get:
 *     summary: Récupérer une activité et sa catégorie par son ID
 *     description: Renvoie une activité basée sur son ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'activité à récupérer
 *     responses:
 *       200:
 *         description: Activité récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       404:
 *         description: Activité non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", getActivityById);

/**
 * @swagger
 * /api/activities:
 *   post:
 *     summary: Créer une nouvelle activité
 *     description: Crée une nouvelle activité avec les données fournies
 *     tags: [Activities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Activity'
 *     responses:
 *       201:
 *         description: Activité créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 */
router.post("/", validate(activitySchema), createActivity);

/**
 * @swagger
 * /api/activities/{id}:
 *   put:
 *     summary: Mettre à jour une activité
 *     description: Met à jour une activité existante avec les données fournies
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'activité à mettre à jour
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Activité mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       404:
 *         description: Activité non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", updateActivity);

/**
 * @swagger
 * /api/activities/{id}:
 *   delete:
 *     summary: Supprimer une activité
 *     description: Supprime une activité existante
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'activité à supprimer
 *     responses:
 *       200:
 *         description: Activité supprimée avec succès
 *       404:
 *         description: Activité non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", deleteActivity);

export default router;
