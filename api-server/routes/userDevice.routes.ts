import { Router } from 'express';
import {
  createUserDevice,
  getAllUserDevices,
  getUserDeviceById,
  updateUserDevice,
  deleteUserDevice
} from '@/controllers/userDevice.controller';

import { userDeviceSchema, idParamUserDeviceSchema } from '@/schemas/validation/userDevice.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User Devices
 *   description: Gestion des appareils utilisateurs
 */

/**
 * @swagger
 * /api/user-devices:
 *   post:
 *     summary: Créer un nouveau appareil utilisateur
 *     tags: [User Devices]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Appareil utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDevice'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(userDeviceSchema), errorHandler, createUserDevice);

/**
 * @swagger
 * /api/user-devices:
 *   get:
 *     summary: Récupérer tous les appareils utilisateurs
 *     tags: [User Devices]
 *     responses:
 *       200:
 *         description: Liste des appareils utilisateurs récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userDevices:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/UserDevice'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllUserDevices);

/**
 * @swagger
 * /api/user-devices/{id}:
 *   get:
 *     summary: Récupérer un appareil utilisateur par ID
 *     tags: [User Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'appareil utilisateur
 *     responses:
 *       200:
 *         description: Appareil utilisateur trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDevice'
 *       404:
 *         description: Appareil utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamUserDeviceSchema, 'params'), errorHandler, getUserDeviceById);

/**
 * @swagger
 * /api/user-devices/{id}:
 *   put:
 *     summary: Mettre à jour un appareil utilisateur
 *     tags: [User Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'appareil utilisateur
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Appareil utilisateur mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDevice'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamUserDeviceSchema, 'params'), errorHandler, updateUserDevice);

/**
 * @swagger
 * /api/user-devices/{id}:
 *   delete:
 *     summary: Supprimer un appareil utilisateur
 *     tags: [User Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'appareil utilisateur
 *     responses:
 *       200:
 *         description: Appareil utilisateur supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamUserDeviceSchema, 'params'), errorHandler, deleteUserDevice);

export default router;
