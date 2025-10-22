import { Router } from "express";
import {
  createUserContact,
  getAllUserContacts,
  getUserContact,
  updateUserContact,
  deleteAllUserContacts,
  deleteUserContact,
} from "@/controllers";

import { userContactSchema } from "@/validators";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User Contacts
 *   description: Gestion des contacts utilisateurs
 */

/**
 * @swagger
 * /api/user-contacts/{userId}/{contactId}:
 *   post:
 *     summary: Créer un nouveau contact utilisateur
 *     tags: [User Contacts]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Contact utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserContact'
 *       500:
 *         description: Erreur serveur
 */
router.post(
  "/:userId/:contactId",
  validate(userContactSchema),
  createUserContact
);

/**
 * @swagger
 * /api/user-contacts/{userId}:
 *   get:
 *     summary: Récupérer tous les contacts utilisateurs
 *     tags: [User Contacts]
 *     responses:
 *       200:
 *         description: Liste des contacts utilisateurs récupérée avec succès
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
router.get("/:userId", getAllUserContacts);

/**
 * @swagger
 * /api/user-contacts/{userId}/{contactId}:
 *   get:
 *     summary: Récupérer un contact utilisateur par ID
 *     tags: [User Contacts]
 *     responses:
 *       200:
 *         description: Contact utilisateur trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserContact'
 *       404:
 *         description: Contact utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/:userId/:contactId", getUserContact);

/**
 * @swagger
 * /api/user-contacts/{userId}/{contactId}:
 *   put:
 *     summary: Mettre à jour un contact utilisateur
 *     tags: [User Contacts]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du contact à mettre à jour
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Contact utilisateur mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserContact'
 *       500:
 *         description: Erreur serveur
 */
router.put("/:userId/:contactId", updateUserContact);

/**
 * @swagger
 * /api/user-contacts/{userId}/{contactId}:
 *   delete:
 *     summary: Supprimer un contact utilisateur par ID
 *     tags: [User Contacts]
 *     responses:
 *       200:
 *         description: Contact utilisateur supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:userId/:contactId", deleteUserContact);

/**
 * @swagger
 * /api/user-contacts/{userId}:
 *   delete:
 *     summary: Supprimer tous les contacts utilisateur
 *     tags: [User Contacts]
 *     responses:
 *       200:
 *         description: Tous les contacts utilisateur supprimés avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:userId", deleteAllUserContacts);

export default router;
