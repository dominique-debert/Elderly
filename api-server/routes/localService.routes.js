import { Router } from 'express';
import { validate } from '../middlewares/validate.js';
import errorHandler from '../middlewares/errorHandler.js';

import {
  localServiceSchema,
  idParamLocalServiceSchema }
from '../schemas/localService.schema.js';

import {
  createLocalService,
  getAllLocalServices,
  getLocalServiceById,
  updateLocalService,
  deleteLocalService
} from '../controllers/localService.controller.js';

const router = Router();

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
router.post('/', validate(localServiceSchema), errorHandler, createLocalService);

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
router.get('/', errorHandler, getAllLocalServices);

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
 *           type: string
 *           format: cuid
 *     responses:
 *       200:
 *         description: Service local trouvé
 *       404:
 *         description: Service local introuvable
 */
router.get('/:id', validate(idParamLocalServiceSchema, 'params'), errorHandler, getLocalServiceById);

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
 *           type: string
 *           format: cuid
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
router.put('/:id', validate(idParamLocalServiceSchema, 'params'), errorHandler, updateLocalService);

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
 *           type: string
 *           format: cuid
 *     responses:
 *       204:
 *         description: Suppression réussie
 *       404:
 *         description: Service local introuvable
 */
router.delete('/:id', validate(idParamLocalServiceSchema, 'params'), errorHandler, deleteLocalService);

export default router;
