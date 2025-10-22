import { Router } from "express";
import {
  createUserContactRequest,
  getAllUserContactRequests,
  getUserContactRequest,
  deleteUserContactRequest,
  deleteAllUserContactRequests,
  updateUserContactRequest,
} from "@/controllers";

import { userContactSchema } from "@/validators";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Contact Requests
 *   description: Gestion des demandes de contacts
 */

/**
 * @swagger
 * /api/contact-requests/{userId}:
 *   get:
 *     summary: Récupérer toutes les demandes de contact
 *     tags: [Contact Requests]
 *     responses:
 *       200:
 *         description: Liste des demandes de contact récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userContacts:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ContactRequest'
 *       500:
 *         description: Erreur serveur
 */
router.get("/:userId", getAllUserContactRequests);

/**
 * @swagger
 * /api/contact-requests/{userId}/{contactId}:
 *   get:
 *     summary: Récupérer une demande de contact par ID
 *     tags: [Contact Requests]
 *     responses:
 *       200:
 *         description: Demande de contact trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContactRequest'
 *       404:
 *         description: Demande de contact non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/:userId/:contactId", getUserContactRequest);

/**
 * @swagger
 * /api/contact-requests/{userId}/{contactId}:
 *   post:
 *     summary: Créer un nouveau contact bloqué
 *     tags: [Contact Requests]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Demande de contact créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContactRequest'
 *       500:
 *         description: Erreur serveur
 */
router.post(
  "/:userId/:contactId",
  validate(userContactSchema),
  createUserContactRequest
);

/**
 * @swagger
 * /api/contact-requests/{userId}/{contactId}:
 *   post:
 *     summary: Mise a jour d'une demande de contact
 *     tags: [Contact Requests]
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Demande de contact mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContactRequest'
 *       500:
 *         description: Erreur serveur
 */
router.post(
  "/:userId/:contactId",
  validate(userContactSchema),
  updateUserContactRequest
);

/**
 * @swagger
 * /api/contact-requests/{userId}/{contactId}:
 *   delete:
 *     summary: Supprimer une demande de contact
 *     tags: [Contact Requests]
 *     responses:
 *       200:
 *         description: Demande de contact supprimée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:userId/:contactId", deleteUserContactRequest);

/**
 * @swagger
 * /api/contact-requests/{userId}:
 *   delete:
 *     summary: Supprimer toutes les demandes de contact d'un utilisateur
 *     tags: [Contact Requests]
 *     responses:
 *       200:
 *         description: Demandes de contact supprimées avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:userId", deleteAllUserContactRequests);

export default router;
