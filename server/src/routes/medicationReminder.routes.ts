import { Router } from "express";
import {
  createMedicationReminder,
  getAllMedicationReminders,
  getMedicationReminderById,
  updateMedicationReminder,
  deleteMedicationReminder,
} from "@/controllers";

import { medicationReminderSchema } from "@/validators";

import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Medication Reminders
 *   description: Gestion des rappels de médicaments
 */

/**
 * @swagger
 * /api/medication-reminders:
 *   post:
 *     summary: Créer un nouveau rappel de médicament
 *     tags: [Medication Reminders]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Rappel de médicament créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedicationReminder'
 *       500:
 *         description: Erreur serveur
 */
router.post("/", validate(medicationReminderSchema), createMedicationReminder);

/**
 * @swagger
 * /api/medication-reminders:
 *   get:
 *     summary: Récupérer tous les rappels de médicaments
 *     tags: [Medication Reminders]
 *     responses:
 *       200:
 *         description: Liste des rappels de médicaments récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 medicationReminders:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/MedicationReminder'
 *       500:
 *         description: Erreur serveur
 */
router.get("/", getAllMedicationReminders);

/**
 * @swagger
 * /api/medication-reminders/{id}:
 *   get:
 *     summary: Récupérer un rappel de médicament par ID
 *     tags: [Medication Reminders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du rappel de médicament
 *     responses:
 *       200:
 *         description: Rappel de médicament trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedicationReminder'
 *       404:
 *         description: Rappel de médicament non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", getMedicationReminderById);

/**
 * @swagger
 * /api/medication-reminders/{id}:
 *   put:
 *     summary: Mettre à jour un rappel de médicament
 *     tags: [Medication Reminders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du rappel de médicament
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Rappel de médicament mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedicationReminder'
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", updateMedicationReminder);

/**
 * @swagger
 * /api/medication-reminders/{id}:
 *   delete:
 *     summary: Supprimer un rappel de médicament
 *     tags: [Medication Reminders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du rappel de médicament
 *     responses:
 *       200:
 *         description: Rappel de médicament supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", deleteMedicationReminder);

export default router;
