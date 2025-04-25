import { Router } from "express";
import categoryController from "../controllers/genericCategory.controller";

const router = Router();

// Mapping des types de catégories vers leur modèle Prisma
const categoryMappings: Record<string, keyof import("@prisma/client").PrismaClient> = {
  activity: "activityCategory",
  badge: "badgeCategory",
  cognitive: "cognitiveCategory",
  help: "helpCategory",
  issue: "issueCategory",
  nutritional: "nutritionalCategory",
  program: "programCategory",
  project: "projectCategory",
  resource: "resourceCategory",
  service: "serviceCategory",
  skill: "skillCategory",
  wellness: "wellnessCategory",
};

// Génère dynamiquement les routes pour chaque type de catégorie
for (const [type, model] of Object.entries(categoryMappings)) {
  const controller = categoryController(model as keyof import("../prisma/client").PrismaClient);
  const prefix = `/api/categories/${type}`;

  router.get(`${prefix}`, controller.findAll);
  router.get(`${prefix}/:id`, async (req, res, next) => {
    try {
      await controller.findById(req, res);
    } catch (error) {
      next(error);
    }
  });
  router.post(`${prefix}`, async (req, res, next) => {
    try {
      await controller.create(req, res);
    } catch (error) {
      next(error);
    }
  });
  router.put(`${prefix}/:id`, async (req, res, next) => {
    try {
      await controller.update(req, res);
    } catch (error) {
      next(error);
    }
  });
  router.delete(`${prefix}/:id`, async (req, res, next) => {
    try {
      await controller.delete(req, res);
    } catch (error) {
      next(error);
    }
  });
}

export default router;
