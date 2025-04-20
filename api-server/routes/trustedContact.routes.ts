import { Router } from 'express';
import {
  createTrustedContact,
  getAllTrustedContacts,
  getTrustedContactById,
  updateTrustedContact,
  deleteTrustedContact
} from '@/controllers/index.controller';

import { trustedContactSchema, idParamTrustedContactSchema } from '@/schemas/validation/trustedContact.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Trusted Contact
 *   description: Gestion des contacts de confiance
 */

/**
 * @swagger
 * /api/trusted-contacts:
 *   post:
 *     summary: Créer un nouveau cercle de confiance
 *     tags: [Trusted Contact]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Cercle de confiance créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TrustCircle'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(trustedContactSchema), errorHandler, createTrustedContact);

/**
 * @swagger
 * /api/trusted-contacts:
 *   get:
 *     summary: Récupérer tous les contacts de confiance
 *     tags: [Trusted Contact]
 *     responses:
 *       200:
 *         description: Liste des contacts de confiance récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 trustedContacts:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/TrustCircle'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllTrustedContacts);

/**
 * @swagger
 * /api/trusted-contacts/{id}:
 *   get:
 *     summary: Récupérer un cercle de confiance par ID
 *     tags: [Trusted Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du cercle de confiance
 *     responses:
 *       200:
 *         description: Cercle de confiance trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TrustCircle'
 *       404:
 *         description: Cercle de confiance non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamTrustedContactSchema, 'params'), errorHandler, getTrustedContactById);

/**
 * @swagger
 * /api/trusted-contacts/{id}:
 *   put:
 *     summary: Mettre à jour un contact de confiance
 *     tags: [Trusted Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du contact de confiance
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Contact de confiance mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TrustedContact'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamTrustedContactSchema, 'params'), errorHandler, updateTrustedContact);

/**
 * @swagger
 * /api/trust-circle/{id}:
 *   delete:
 *     summary: Supprimer un cercle de confiance
 *     tags: [Trust Circle]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du cercle de confiance
 *     responses:
 *       200:
 *         description: Cercle de confiance supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamTrustedContactSchema, 'params'), errorHandler, deleteTrustedContact);

export default router;
