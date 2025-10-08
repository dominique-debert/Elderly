import { Router } from "express";
import {
  createServiceCompleted,
  getAllServiceCompleted,
  getServiceCompletedById,
  updateServiceCompleted,
  deleteServiceCompleted,
} from "@/controllers";

import {
  serviceCompletedSchema,
  idParamServiceCompletedSchema,
} from "@/validators/serviceCompleted.validator";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Service Completed
 *   description: Gestion des services terminés
 */

/**
 * @swagger
 * /api/service-completed:
 *   post:
 *     summary: Créer un nouveau service terminé
 *     tags: [Service Completed]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Service terminé créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceCompleted'
 *       500:
 *         description: Erreur serveur
 */
router.post("/", validate(serviceCompletedSchema), createServiceCompleted);

/**
 * @swagger
 * /api/service-completed:
 *   get:
 *     summary: Récupérer tous les services terminés
 *     tags: [Service Completed]
 *     responses:
 *       200:
 *         description: Liste des services terminés récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 serviceCompleted:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ServiceCompleted'
 *       500:
 *         description: Erreur serveur
 */
router.get("/", getAllServiceCompleted);

/**
 * @swagger
 * /api/service-completed/{id}:
 *   get:
 *     summary: Récupérer un service terminé par ID
 *     tags: [Service Completed]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du service terminé
 *     responses:
 *       200:
 *         description: Service terminé trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceCompleted'
 *       404:
 *         description: Service terminé non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get(
  "/:id",
  validate(idParamServiceCompletedSchema, "params"),
  getServiceCompletedById
);

/**
 * @swagger
 * /api/service-completed/{id}:
 *   put:
 *     summary: Mettre à jour un service terminé
 *     tags: [Service Completed]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du service terminé
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Service terminé mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceCompleted'
 *       500:
 *         description: Erreur serveur
 */
router.put(
  "/:id",
  validate(idParamServiceCompletedSchema, "params"),
  updateServiceCompleted
);

/**
 * @swagger
 * /api/service-completed/{id}:
 *   delete:
 *     summary: Supprimer un service terminé
 *     tags: [Service Completed]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du service terminé
 *     responses:
 *       200:
 *         description: Service terminé supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete(
  "/:id",
  validate(idParamServiceCompletedSchema, "params"),
  deleteServiceCompleted
);

export default router;
