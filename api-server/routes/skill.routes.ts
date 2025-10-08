import { Router } from "express";
import { validate } from "@/middlewares";

import { skillSchema } from "@/validators";

import {
  createSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
} from "@/controllers";

const skillRouter = Router();
/**
 * @swagger
 * /api/skills:
 *   post:
 *     summary: Créer une nouvelle compétence
 *     tags: [Skills]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SkillInput'
 *     responses:
 *       201:
 *         description: Compétence créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       400:
 *         description: Données invalides
 */
skillRouter.post("/", validate(skillSchema), createSkill);

/**
 * @swagger
 * /api/skills:
 *   get:
 *     summary: Récupérer la liste des compétences
 *     tags: [Skills]
 */
skillRouter.get("/", getAllSkills);

/**
 * @swagger
 * /api/skills/{id}:
 *   get:
 *     summary: Récupérer une compétence par ID
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la compétence
 *         schema:
 *           type: string
 *           format: cuid
 *     responses:
 *       200:
 *         description: Compétence trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       404:
 *         description: Compétence non trouvée
 */
skillRouter.get("/:id", getSkillById);

/**
 * @swagger
 * /api/skills/{id}:
 *   put:
 *     summary: Mettre à jour une compétence
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la compétence
 *         schema:
 *           type: string
 *           format: cuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SkillInput'
 *     responses:
 *       200:
 *         description: Compétence mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       400:
 *         description: Données invalides
 */
skillRouter.put("/:id", updateSkill);

/**
 * @swagger
 * /api/skills/{id}:
 *   delete:
 *     summary: Supprimer une compétence
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la compétence
 *         schema:
 *           type: string
 *           format: cuid
 *     responses:
 *       200:
 *         description: Compétence supprimée avec succès
 *       404:
 *         description: Compétence non trouvée
 */
skillRouter.delete("/:id", deleteSkill);

export default skillRouter;
