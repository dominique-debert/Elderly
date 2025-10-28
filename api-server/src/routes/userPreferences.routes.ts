import { Router } from "express";
import {
  createUserPreferences,
  getUserPreferences,
  updateUserPreferences,
  deleteUserPreferences,
} from "@/controllers";

import { userPreferencesSchema } from "@/validators";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User Preferences
 *   description: Gestion des préférences utilisateur
 */

/**
 * @swagger
 * /api/user-preferences:
 *   post:
 *     summary: Créer une nouvelle préférence utilisateur
 *     tags: [User Preferences]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Préférence utilisateur créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserPreferences'
 *       500:
 *         description: Erreur serveur
 */
router.post("/", validate(userPreferencesSchema), createUserPreferences);

/**
 * @swagger
 * /api/user-preferences/{userId}:
 *   get:
 *     summary: Récupérer les préférences utilisateur par ID
 *     tags: [User Preferences]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Préférences utilisateur trouvées
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserPreferences'
 *       404:
 *         description: Préférences utilisateur non trouvées
 *       500:
 *         description: Erreur serveur
 */
router.get(
  "/:userId",
  (req, res, next) => {
    console.log("[user-preferences] GET hit for userId:", req.params.userId);
    next();
  },
  getUserPreferences
);

/**
 * @swagger
 * /api/user-preferences/{userId}:
 *   put:
 *     summary: Mettre à jour les préférences utilisateur
 *     tags: [User Preferences]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Préférences utilisateur mises à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserPreferences'
 *       500:
 *         description: Erreur serveur
 */
router.put("/:userId", updateUserPreferences);

/**
 * @swagger
 * /api/user-preferences/{userId}:
 *   delete:
 *     summary: Supprimer les préférences utilisateur
 *     tags: [User Preferences]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Préférences utilisateur supprimées avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:userId", deleteUserPreferences);

export default router;
