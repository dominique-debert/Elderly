import { Router } from "express";
import {
  createUserBlockedContact,
  getAllUserBlockedContacts,
  getUserBlockedContact,
  deleteUserBlockedContact,
  deleteAllUserBlockedContacts,
} from "@/controllers";

import { userContactSchema } from "@/validators";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Blocked Contacts
 *   description: Gestion des contacts bloqués par les utilisateurs
 */

/**
 * @swagger
 * /api/blocked-contacts/{userId}:
 *   get:
 *     summary: Récupérer tous les contacts bloqués
 *     tags: [Blocked Contacts]
 *     responses:
 *       200:
 *         description: Liste des contacts bloqués récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userContacts:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/UserContact'
 *       500:
 *         description: Erreur serveur
 */
router.get("/:userId", getAllUserBlockedContacts);

/**
 * @swagger
 * /api/blocked-contacts/{userId}/{contactId}:
 *   get:
 *     summary: Récupérer un contact bloqué par ID
 *     tags: [Blocked Contacts]
 *     responses:
 *       200:
 *         description: Contact bloqué trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BlockedContact'
 *       404:
 *         description: Contact bloqué non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/:userId/:contactId", getUserBlockedContact);

/**
 * @swagger
 * /api/blocked-contacts/{userId}/{contactId}:
 *   post:
 *     summary: Créer un nouveau contact bloqué
 *     tags: [Blocked Contacts]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Contact bloqué créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BlockedContact'
 *       500:
 *         description: Erreur serveur
 */
router.post(
  "/:userId/:contactId",
  validate(userContactSchema),
  createUserBlockedContact
);

/**
 * @swagger
 * /api/blocked-contacts/{userId}/{contactId}:
 *   delete:
 *     summary: Supprimer un contact bloqué
 *     tags: [Blocked Contacts]
 *     responses:
 *       200:
 *         description: Contact bloqué supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:userId/:contactId", deleteUserBlockedContact);

/**
 * @swagger
 * /api/blocked-contacts/{userId}:
 *   delete:
 *     summary: Supprimer tous les contacts bloqués
 *     tags: [Blocked Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du contact bloqué
 *     responses:
 *       200:
 *         description: Contacts bloqués supprimés avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:userId", deleteAllUserBlockedContacts);

export default router;
