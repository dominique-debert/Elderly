import { PrismaClient } from "../prisma/client.js";
import { createHttpError } from '../utils/httpError.js';

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Cognitive Exercises
*   description: API pour gérer les exercices cognitifs
*/

export const createCognitiveExercise = async (req, res) => {
  const { name, category, difficulty_level, duration_minutes, description, image } = req.body
  try {
    const newCognitiveExercise = await prisma.cognitive_exercise.create({
      data: {
        name,
        category,
        difficulty_level,
        duration_minutes,
        description,
        image
      }
    });
    res.status(201).json(newCognitiveExercise);
  } catch (error) {
    next(error);
  }
};

export const getAllCognitiveExercises = async (req, res) => {
  try {
    const cognitiveExercises = await prisma.cognitive_exercise.findMany(
      {  orderBy: {
        name: 'asc', // Tri ascendant (A-Z)
      }      
    });

    res.status(200).json({ cognitiveExercises });
  } catch (error) {
    next(error);
  }
};

export const getCognitiveExerciseById = async (req, res) => {
  const { id } = req.params;

  try {
      const cognitiveExercise = await prisma.cognitive_exercise.findUnique({
      where: { id },
    });

    if (!cognitiveExercise) {
      throw createHttpError(404, 'Exercice cognitif non trouvé');
    }

    res.status(200).json(cognitiveExercise);
  } catch (error) {
    next(error);
  }
};

export const updateCognitiveExercise = async (req, res) => {
  const { id } = req.params;
  const { name, category, difficulty_level, duration_minutes, description, image } = req.body;
  try {
    const cognitiveExercise = await prisma.cognitive_exercise.findUnique({
      where: { id },
    });

    if (!cognitiveExercise) {
      throw createHttpError(404, 'Exercice cognitif non trouvé');
    }
    
    // Mise à jour de l'exercice
    const updatedCognitiveExercise = await prisma.cognitive_exercise.update({
      data: {
        name,
        category,
        difficulty_level,
        duration_minutes,
        description,
        image
      },
      where: { id },
    }); 
    res.status(200).json(updatedCognitiveExercise);
  } catch (error) {
    next(error);
  }
};

export const deleteCognitiveExercise = async (req, res) => {
  const { id } = req.params;

  try {
    const cognitiveExercise = await prisma.cognitive_exercise.findUnique({
      where: { id },
    });

    if (!cognitiveExercise) {
      throw createHttpError(404, 'Exercice cognitif non trouvé');
    }

    // Suppression de l'exercice
    await prisma.cognitive_exercise.delete({
      where: { id },
    });
    res.status(200).json({ message: 'Exercice cognitif supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};
