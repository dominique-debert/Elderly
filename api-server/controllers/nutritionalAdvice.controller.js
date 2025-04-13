import { PrismaClient } from "../prisma/client.js";
const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: NutritionAdvices
 *   description: Gestion des avis nutritionnels
 */

export const createNutritionalAdvice = async (req, res) => {
  const { title, description, category, season, image } = req.body;
  try {
    const newAdvice = await prisma.nutritional_advice.create ({
      data: {
        title,
        description,
        category,
        season,
        image
      }
    })
    res.status(201).json(newAdvice);
  } catch (error) {
    next(error);
  }
};

export const getAllNutritionalAdvices = async (req, res) => {
  try {
    const advices = await prisma.nutritional_advice.findMany({
      orderBy: {
        name: 'title', // Ascending order (A-Z)
      },
    });
    
    res.status(200).json({ advices });
  } catch (error) {
    next(error);
  }
};

// READ ONE
export const getNutritionalAdviceById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const advice = await prisma.nutritional_advice.findUnique({
      where: { id },
    });
    
    if (!advice) {
      throw createHttpError(404, `Conseil nutrionnel non trouvé`);
    }
    
    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
};

// UPDATE
export const updateNutritionalAdvice = async (req, res) => {
  const { title, description, category, season, image } = req.body;
  const { id } = req.params;

  try {
      const advice = await prisma.nutritional_advice.findUnique({
      where: { id },
    });
    
    if (!advice) {
      throw createHttpError(404, `Avis nutritionnel non trouvé`);
    }

    const updatedAdvice = await prisma.nutritional_advice.update ({
      data: {
        title,
        description,
        category,
        season,
        image
      },
      where: { id },
    });
    res.status(200).json(updatedAdvice);
  } catch (error) {
    next(error);
  }
};

export const deleteNutritionalAdvice = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await prisma.nutritional_advice.findUnique({
      where: { id },
    });
    
    if (!service) {
      throw createHttpError(404, `Avis nutritionnel non trouvé`);
    }
    await prisma.nutritional_advice.delete({
      where: { id }
    })
    res.status(200).json({ message: 'Avis nutritionnel supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};
