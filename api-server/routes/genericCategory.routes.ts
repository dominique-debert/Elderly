import { Router } from "express";
import { PrismaClient, Prisma } from "../prisma/client";
import { categorySchema } from "@/schemas/validation/category.schema";

const prisma = new PrismaClient();

export function genericCategoryRouter(modelName: keyof PrismaClient, tag: string) {
  const router = Router();

  /**
   * @swagger
   * /api/categories/{type}:
   *   get:
   *     tags: [{tag}]
   *     summary: Liste toutes les catégories
   *     responses:
   *       200:
   *         description: Liste des catégories
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Category'
   */
  router.get("/", async (req, res) => {
    const items = await (prisma[modelName] as Prisma.CategoryDelegate<Prisma.RejectOnNotFound>).findMany({ orderBy: { createdAt: "desc" } });
    res.json(items);
  });

  /**
   * @swagger
   * /api/categories/{type}:
   *   post:
   *     tags: [{tag}]
   *     summary: Crée une nouvelle catégorie
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CategoryInput'
   *     responses:
   *       201:
   *         description: Catégorie créée
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Category'
   *       400:
   *         description: Erreur de validation
   *         content:
   *           application/json:
   *             example:
   *               error: "Le champ name est requis"
   */
  router.post("/", async (req, res) => {
    const { error, value } = categorySchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const newItem = await prisma[modelName].create({ data: value });
    res.status(201).json(newItem);
  });

  /**
   * @swagger
   * /api/categories/{type}/{id}:
   *   get:
   *     tags: [{tag}]
   *     summary: Récupère une catégorie par ID
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: ID de la catégorie
   *     responses:
   *       200:
   *         description: Catégorie trouvée
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Category'
   *       404:
   *         description: Catégorie non trouvée
   *         content:
   *           application/json:
   *             example:
   *               error: "Not found"
   */
  router.get("/:id", async (req, res) => {
    const item = await prisma[modelName].findUnique({ where: { id: req.params.id } });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  });

  /**
   * @swagger
   * /api/categories/{type}/{id}:
   *   put:
   *     tags: [{tag}]
   *     summary: Met à jour une catégorie
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CategoryInput'
   *     responses:
   *       200:
   *         description: Catégorie mise à jour
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Category'
   *       400:
   *         description: Erreur de validation
   *         content:
   *           application/json:
   *             example:
   *               error: "Le champ name est requis"
   *       404:
   *         description: Catégorie non trouvée
   *         content:
   *           application/json:
   *             example:
   *               error: "Not found"
   */
  router.put("/:id", async (req: Request, res: Response) => {
    const { error, value } = categorySchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
      const updated = await prisma[modelName].update({
        where: { id: req.params.id },
        data: value,
      });
      res.json(updated);
    } catch {
      res.status(404).json({ error: "Not found" });
    }
  });

  /**
   * @swagger
   * /api/categories/{type}/{id}:
   *   delete:
   *     tags: [{tag}]
   *     summary: Supprime une catégorie
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *     responses:
   *       204:
   *         description: Catégorie supprimée
   *       404:
   *         description: Catégorie non trouvée
   *         content:
   *           application/json:
   *             example:
   *               error: "Not found"
   */
  router.delete("/:id", async (req, res) => {
    try {
      await prisma[modelName].delete({ where: { id: req.params.id } });
      res.status(204).send();
    } catch {
      res.status(404).json({ error: "Not found" });
    }
  });

  return router;
}
