import { Router } from "express";
import { signUp, signIn, logout } from "@/controllers";
import { validate } from "@/middlewares";
import { signUpSchema, signInSchema } from "@/validators";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer storage for avatars
const avatarsDir = path.join(process.cwd(), "public", "images", "avatars");
// Ensure the avatars directory exists
try {
  fs.mkdirSync(avatarsDir, { recursive: true });
} catch (err) {
  console.warn(`Could not create avatars directory ${avatarsDir}:`, err);
}

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, avatarsDir);
  },
  filename: function (_req, file, cb) {
    // Always generate a unique filename
    const ext = path.extname(file.originalname) || ".jpg";
    const uniqueName = `${Date.now()}-${Math.random()
      .toString(16)
      .slice(2, 10)}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /api/auth/signup:
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
 * /api/auth/login:
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
 * /api/auth/logout:
 *   post:
 *     summary: Déconnecter un utilisateur
 *     description: Déconnecte un utilisateur
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Déconnexion réussie
 */

// Accept multipart/form-data with optional 'avatar' file
router.post("/signup", upload.single("avatar"), validate(signUpSchema), signUp);
router.post("/login", validate(signInSchema), signIn);
router.post("/logout", logout);

export default router;
