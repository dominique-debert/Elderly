import { Router } from "express";
import {
  createNotification,
  getAllNotifications,
  getAllNotificationsByUserId,
  getNotificationById,
  updateNotification,
  deleteNotification,
} from "@/controllers";

import { notificationSchema } from "@/validators";

import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Gestion des notifications
 */

/**
 * @swagger
 * /api/notifications:
 *   post:
 *     summary: Créer une nouvelle notification
 *     tags: [Notifications]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Notification créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notification'
 *       500:
 *         description: Erreur serveur
 */
router.post("/", validate(notificationSchema), createNotification);

/**
 * @swagger
 * /api/notifications:
 *   get:
 *     summary: Récupérer toutes les notifications
 *     tags: [Notifications]
 *     responses:
 *       200:
 *         description: Liste des notifications récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 notifications:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Notification'
 *       500:
 *         description: Erreur serveur
 */
router.get("/", getAllNotifications);

/**
 * @swagger
 * /api/notifications/{userId}:
 *   get:
 *     summary: Récupérer toutes les notifications d'un utilisateur
 *     tags: [Notifications]
 *     responses:
 *       200:
 *         description: Liste des notifications récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 notifications:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Notification'
 *       500:
 *         description: Erreur serveur
 */
router.get("/:userId", getAllNotificationsByUserId);

/**
 * @swagger
 * /api/notifications/{id}:
 *   get:
 *     summary: Récupérer une notification par ID
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Notification trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notification'
 *       404:
 *         description: Notification non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", getNotificationById);

/**
 * @swagger
 * /api/notifications/{id}:
 *   put:
 *     summary: Mettre à jour une notification
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la notification
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Notification mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notification'
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", updateNotification);

/**
 * @swagger
 * /api/notifications/{id}:
 *   delete:
 *     summary: Supprimer une notification
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la notification
 *     responses:
 *       200:
 *         description: Notification supprimée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", deleteNotification);

export default router;
