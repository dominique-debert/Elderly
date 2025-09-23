import { Router } from 'express';
import {
  createMood,
  getAllMoods,
  getMoodById,
  updateMood,
  deleteMood
} from '@/controllers/index.controller';

import {
  moodSchema,
  idParamMoodSchema
} from '../validators/mood.validator';

import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Moods
 *   description: Gestion des humeurs
 */

/**
 * @swagger
 * /api/moods:
 *   post:
 *     summary: Créer une nouvelle humeur
 *     tags: [Moods]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Humeur créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mood'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(moodSchema), createMood);

/**
 * @swagger
 * /api/moods:
 *   get:
 *     summary: Récupérer toutes les humeurs
 *     tags: [Moods]
 *     responses:
 *       200:
 *         description: Liste des humeurs récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 moods:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Mood'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', getAllMoods);

/**
 * @swagger
 * /api/moods/{id}:
 *   get:
 *     summary: Récupérer une humeur par ID
 *     tags: [Moods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Humeur trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mood'
 *       404:
 *         description: Humeur non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamMoodSchema, 'params'), getMoodById);

/**
 * @swagger
 * /api/moods/{id}:
 *   put:
 *     summary: Mettre à jour une humeur
 *     tags: [Moods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'humeur
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Humeur mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mood'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamMoodSchema, 'params'), updateMood);

/**
 * @swagger
 * /api/moods/{id}:
 *   delete:
 *     summary: Supprimer une humeur
 *     tags: [Moods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'humeur
 *     responses:
 *       200:
 *         description: Humeur supprimée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamMoodSchema, 'params'), deleteMood);

export default router;
