import express from 'express';
import { getAllLocalServices, getLocalServiceById, updateLocalService, deleteLocalService, createLocalService } from '../controllers/localService.controller.js';

const localServiceRoutes = express.Router();

/**
 * @swagger
 * /api/local-services:
 *   get:
 *     summary: Liste tous les services locaux bien-être
 *     tags: [Local Services]
 *     responses:
 *       200:
 *         description: Liste des services locaux
 */
localServiceRoutes.get('/', getAllLocalServices);

/**
 * @swagger
 * /api/local-services/{id}:
 *   get:
 *     summary: Récupère un service local par son ID
 *     tags: [Local Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Service local trouvé
 *       404:
 *         description: Service local introuvable
 */
localServiceRoutes.get('/:id', getLocalServiceById);

/**
 * @swagger
 * /api/local-services:
 *   post:
 *     summary: Crée un nouveau service local
 *     tags: [Local Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LocalService'
 *     responses:
 *       201:
 *         description: Service local créé
 */
localServiceRoutes.post('/', createLocalService);

/**
 * @swagger
 * /api/local-services/{id}:
 *   put:
 *     summary: Met à jour un service local
 *     tags: [Local Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LocalService'
 *     responses:
 *       200:
 *         description: Service local mis à jour
 *       404:
 *         description: Service local introuvable
 */
localServiceRoutes.put('/:id', updateLocalService);

/**
 * @swagger
 * /api/local-services/{id}:
 *   delete:
 *     summary: Supprime un service local
 *     tags: [Local Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Suppression réussie
 *       404:
 *         description: Service local introuvable
 */
localServiceRoutes.delete('/:id', deleteLocalService);

export default localServiceRoutes;
