import { Router } from 'express';
import {
  createHelpOffer,
  getAllHelpOffers,
  getHelpOfferById,
  updateHelpOffer,
  deleteHelpOffer
} from '@/controllers/helpOffer.controller';

import {
  helpOfferSchema,
  idParamHelpOfferSchema
} from '@/schemas/validation/helpOffer.schema';

import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Help Offers
 *   description: Gestion des offres d'aide
 */

/**
 * @swagger
 * /api/help-offers:
 *   post:
 *     summary: Créer une nouvelle offre d'aide
 *     tags: [Help Offers]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Offre créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpOffer'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(helpOfferSchema), errorHandler, createHelpOffer);

/**
 * @swagger
 * /api/help-offers:
 *   get:
 *     summary: Récupérer toutes les offres d'aide
 *     tags: [Help Offers]
 *     responses:
 *       200:
 *         description: Liste des offres récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 helpOffers:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/HelpOffer'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllHelpOffers);

/**
 * @swagger
 * /api/help-offers/{id}:
 *   get:
 *     summary: Récupérer une offre par ID
 *     tags: [Help Offers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la catégorie
 *     responses:
 *       200:
 *         description: Offre trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpOffer'
 *       404:
 *         description: Offre non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamHelpOfferSchema, 'params'), errorHandler, getHelpOfferById);

/**
 * @swagger
 * /api/help-offers/{id}:
 *   put:
 *     summary: Mettre à jour une offre
 *     tags: [Help Offers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *             example:
 *               name: "Aide à domicile"
 *               description: "Catégorie pour les services d'aide à domicile"
 *     responses:
 *       200:
 *         description: Offre mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpOffer'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamHelpOfferSchema, 'params'), errorHandler, updateHelpOffer);

/**
 * @swagger
 * /api/help-offers/{id}:
 *   delete:
 *     summary: Supprimer une offre
 *     tags: [Help Offers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie
 *     responses:
 *       200:
 *         description: Offre supprimée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamHelpOfferSchema, 'params'), errorHandler, deleteHelpOffer);

export default router;
