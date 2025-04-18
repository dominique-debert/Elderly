import { Router } from 'express';
import { signup, login, logout } from '@/controllers/auth.controller';
import { validate } from '@/middlewares/validate';
import { signupSchema, loginSchema } from '@/schemas/validation/auth.schema';
import errorHandler from '@/middlewares/errorHandler';

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Erreur de validation
 *       409:
 *         description: Email déjà utilisé
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connecter un utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       400:
 *         description: Erreur de validation
 *       401:
 *         description: Accès refusé
 *       404:
 *         description: Utilisateur non trouvé
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Déconnecter un utilisateur
 *     description: Déconnecte un utilisateur
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Déconnexion réussie
 */

router.post('/signup', validate(signupSchema), errorHandler, signup);
router.post('/login', validate(loginSchema), errorHandler, login);
router.post('/logout', errorHandler, logout);

export default router;