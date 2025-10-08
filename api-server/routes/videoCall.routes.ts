import { Router } from "express";
import {
  createVideoCall,
  getAllVideoCalls,
  getVideoCallById,
  updateVideoCall,
  deleteVideoCall,
} from "@/controllers";

import {
  videoCallSchema,
  idParamVideoCallSchema,
} from "@/validators/videoCall.validator";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Video Calls
 *   description: Gestion des appels vidéo
 */

/**
 * @swagger
 * /api/video-calls:
 *   post:
 *     summary: Créer un nouvel appel vidéo
 *     tags: [Video Calls]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Appel vidéo créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VideoCall'
 *       500:
 *         description: Erreur serveur
 */
router.post("/", validate(videoCallSchema), createVideoCall);

/**
 * @swagger
 * /api/video-calls:
 *   get:
 *     summary: Récupérer tous les appels vidéo
 *     tags: [Video Calls]
 *     responses:
 *       200:
 *         description: Liste des appels vidéo récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 videoCalls:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/VideoCall'
 *       500:
 *         description: Erreur serveur
 */
router.get("/", getAllVideoCalls);

/**
 * @swagger
 * /api/video-calls/{id}:
 *   get:
 *     summary: Récupérer un appel vidéo par ID
 *     tags: [Video Calls]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'appel vidéo
 *     responses:
 *       200:
 *         description: Appel vidéo trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VideoCall'
 *       404:
 *         description: Appel vidéo non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get(
  "/:id",
  validate(idParamVideoCallSchema, "params"),
  getVideoCallById
);

/**
 * @swagger
 * /api/video-calls/{id}:
 *   put:
 *     summary: Mettre à jour un appel vidéo
 *     tags: [Video Calls]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'appel vidéo
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Appel vidéo mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VideoCall'
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", validate(idParamVideoCallSchema, "params"), updateVideoCall);

/**
 * @swagger
 * /api/video-calls/{id}:
 *   delete:
 *     summary: Supprimer un appel vidéo
 *     tags: [Video Calls]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'appel vidéo
 *     responses:
 *       200:
 *         description: Appel vidéo supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete(
  "/:id",
  validate(idParamVideoCallSchema, "params"),
  deleteVideoCall
);

export default router;
