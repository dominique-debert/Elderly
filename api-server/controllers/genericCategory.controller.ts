import { Request, Response } from "express";
import { PrismaClient } from "../prisma/client";
import { categorySchema } from "@/schemas/validation/category.schema";

const prisma = new PrismaClient();

function categoryController(modelName: keyof PrismaClient) {
  return {
    async findAll(req: Request, res: Response) {
      const items = await (prisma[modelName] as any).findMany({ orderBy: { createdAt: "desc" } });
      res.json(items);
    },

    async findById(req: Request, res: Response) {
      const { id } = req.params;
      const item = await (prisma[modelName] as any).findUnique({ where: { id } });
      if (!item) return res.status(404).json({ error: "Not found" });
      res.json(item);
    },

    async create(req: Request, res: Response) {
      const { error, value } = categorySchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const newItem = await (prisma[modelName] as any).create({ data: value });
      res.status(201).json(newItem);
    },

    async update(req: Request, res: Response) {
      const { id } = req.params;
      const { error, value } = categorySchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      try {
        const updated = await (prisma[modelName] as any).update({
          where: { id },
          data: value,
        });
        res.json(updated);
      } catch {
        res.status(404).json({ error: "Not found" });
      }
    },

    async delete(req: Request, res: Response) {
      const { id } = req.params;
      try {
        await (prisma[modelName] as any).delete({ where: { id } });
        res.status(204).send();
      } catch {
        res.status(404).json({ error: "Not found" });
      }
    },
  };
}

export default categoryController;
