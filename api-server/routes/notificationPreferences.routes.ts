import { Router } from "express";
import {
  createNotificationPreferences,
  getAllNotificationPreferences,
  getNotificationPreferencesById,
  updateNotificationPreferences,
  deleteNotificationPreferences,
} from "@/controllers";

import { notificationPreferencesSchema } from "@/validators";

import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Notification Preferences
 *   description: Gestion des préférences de notifications
 */

/**
 * @swagger
 * /api/notification-preferences:
 *   post:
 *     summary: Créer une nouvelle préférence de notification
 *     tags: [Notification Preferences]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Préférence de notification créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotificationPreferences'
 *       500:
 *         description: Erreur serveur
 */
router.post(
  "/",
  validate(notificationPreferencesSchema),
  createNotificationPreferences
);

/**
 * @swagger
 * /api/notification-preferences:
 *   get:
 *     summary: Récupérer toutes les préférences de notifications
 *     tags: [Notification Preferences]
 *     responses:
 *       200:
 *         description: Liste des préférences de notifications récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 notificationPreferences:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/NotificationPreferences'
 *       500:
 *         description: Erreur serveur
 */
router.get("/", getAllNotificationPreferences);

/**
 * @swagger
 * /api/notification-preferences/{id}:
 *   get:
 *     summary: Récupérer une préférence de notification par ID
 *     tags: [Notification Preferences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Préférence de notification trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotificationPreferences'
 *       404:
 *         description: Préférence de notification non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", getNotificationPreferencesById);

/**
 * @swagger
 * /api/notification-preferences/{id}:
 *   put:
 *     summary: Mettre à jour une préférence de notification
 *     tags: [Notification Preferences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la préférence de notification
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Préférence de notification mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotificationPreferences'
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", updateNotificationPreferences);

/**
 * @swagger
 * /api/notification-preferences/{id}:
 *   delete:
 *     summary: Supprimer une préférence de notification
 *     tags: [Notification Preferences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la préférence de notification
 *     responses:
 *       200:
 *         description: Préférence de notification supprimée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", deleteNotificationPreferences);

export default router;
