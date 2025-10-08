import { Router } from "express";
import {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
} from "@/controllers";

import { resourceSchema } from "@/validators";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Resources
 *   description: Gestion des ressources
 */

/**
 * @swagger
 * /api/resources:
 *   post:
 *     summary: Créer une nouvelle ressource
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Ressource créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *       500:
 *         description: Erreur serveur
 */
router.post("/", validate(resourceSchema), createResource);

/**
 * @swagger
 * /api/resources:
 *   get:
 *     summary: Récupérer toutes les ressources
 *     tags: [Resources]
 *     responses:
 *       200:
 *         description: Liste des ressources récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resources:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Resource'
 *       500:
 *         description: Erreur serveur
 */
router.get("/", getAllResources);

/**
 * @swagger
 * /api/resources/{id}:
 *   get:
 *     summary: Récupérer une ressource par ID
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la ressource
 *     responses:
 *       200:
 *         description: Ressource trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *       404:
 *         description: Ressource non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", getResourceById);

/**
 * @swagger
 * /api/resources/{id}:
 *   put:
 *     summary: Mettre à jour une ressource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ressource
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Ressource mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", updateResource);

/**
 * @swagger
 * /api/resources/{id}:
 *   delete:
 *     summary: Supprimer une ressource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ressource
 *     responses:
 *       200:
 *         description: Ressource supprimée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", deleteResource);

export default router;
