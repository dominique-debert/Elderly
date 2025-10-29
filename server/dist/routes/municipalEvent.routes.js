import { Router } from 'express';
import { createMunicipalEvent, getAllMunicipalEvents, getMunicipalEventById, updateMunicipalEvent, deleteMunicipalEvent } from '@/controllers/index.controller';
import { municipalEventSchema, idParamMunicipalEventSchema } from '../validators/municipalEvent.validator';
import { validate } from '@/middlewares/validate';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Municipal Events
 *   description: Gestion des événements municipaux
 */
/**
 * @swagger
 * /api/municipal-events:
 *   post:
 *     summary: Créer un nouvel événement municipal
 *     tags: [Municipal Events]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Événement municipal créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MunicipalEvent'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(municipalEventSchema), createMunicipalEvent);
/**
 * @swagger
 * /api/municipal-events:
 *   get:
 *     summary: Récupérer tous les événements municipaux
 *     tags: [Municipal Events]
 *     responses:
 *       200:
 *         description: Liste des événements municipaux récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 municipalEvents:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/MunicipalEvent'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', getAllMunicipalEvents);
/**
 * @swagger
 * /api/municipal-events/{id}:
 *   get:
 *     summary: Récupérer un événement municipal par ID
 *     tags: [Municipal Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Événement municipal trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MunicipalEvent'
 *       404:
 *         description: Événement municipal non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamMunicipalEventSchema, 'params'), getMunicipalEventById);
/**
 * @swagger
 * /api/municipal-events/{id}:
 *   put:
 *     summary: Mettre à jour un événement municipal
 *     tags: [Municipal Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'événement municipal
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Événement municipal mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MunicipalEvent'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamMunicipalEventSchema, 'params'), updateMunicipalEvent);
/**
 * @swagger
 * /api/municipal-events/{id}:
 *   delete:
 *     summary: Supprimer un événement municipal
 *     tags: [Municipal Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'événement municipal
 *     responses:
 *       200:
 *         description: Événement municipal supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamMunicipalEventSchema, 'params'), deleteMunicipalEvent);
export default router;
