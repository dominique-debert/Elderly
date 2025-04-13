import { Router } from 'express';
import { validate } from '../middlewares/validate.js';
import errorHandler from '../middlewares/errorHandler.js';

import {
  userSchema,
  idParamUserSchema }
from '../schemas/user.schema.js';

import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} 
from '../controllers/user.controller.js';

const router = Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Données invalides
 */
router.post('/', validate(userSchema), errorHandler, createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Récupérer la liste des utilisateurs
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 */
router.get('/', errorHandler, getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Récupérer un utilisateur par son ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Utilisateur non trouvé
 */
router.get('/:id', validate(idParamUserSchema, 'params'), errorHandler, getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Mettre à jour un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Utilisateur non trouvé
 */
router.put('/:id', validate(idParamUserSchema, 'params'), errorHandler, updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       404:
 *         description: Utilisateur non trouvé
 */
router.delete('/:id', validate(idParamUserSchema, 'params'), errorHandler, deleteUser);

export default router;