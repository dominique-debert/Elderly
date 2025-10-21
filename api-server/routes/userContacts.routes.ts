import { Router } from "express";
import {
  createUserContact,
  getAllUserContacts,
  getUserContactByContactId,
  updateUserContact,
  deleteUserContact,
} from "@/controllers";

import { userContactSchema } from "@/validators";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User Contacts
 *   description: Gestion des badges utilisateurs
 */

/**
 * @swagger
 * /api/user-contacts:
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
router.post("/", validate(userContactSchema), createUserContact);

/**
 * @swagger
 * /api/user-contacts:
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
router.get("/", getAllUserContacts);

/**
 * @swagger
 * /api/user-contacts/{id}:
 *   get:
 *     summary: Récupérer un contact utilisateur par ID
 *     tags: [User Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du badge utilisateur
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
router.get("/:id", getUserContactByContactId);

/**
 * @swagger
 * /api/user-contacts/{id}:
 *   put:
 *     summary: Mettre à jour un contact utilisateur
 *     tags: [User Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du badge utilisateur
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
router.put("/:id", updateUserContact);

/**
 * @swagger
 * /api/user-contacts/{id}:
 *   delete:
 *     summary: Supprimer un contact utilisateur
 *     tags: [User Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du badge utilisateur
 *     responses:
 *       200:
 *         description: Contact utilisateur supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", deleteUserContact);

export default router;
