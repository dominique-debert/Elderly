import { PrismaClient } from "../prisma/client.js";
const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Cognitive Exercises
*   description: API pour gérer les exercices cognitifs
*/

export const createExercise = async (req, res) => {
  const { name, category, difficulty_level, duration_minutes, description, image } = req.body
  try {
    const exercise = await prisma.cognitive_exercise.create({
      data: {
        name,
        category,
        difficulty_level,
        duration_minutes,
        description,
        image
      }
    });
    if (!exercise) return res.status(400).json({ error: `Impossible de créer l'exercise` });
    res.status(201).json(exercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllExercises = async (req, res) => {
  try {
    const exercises = await prisma.cognitive_exercise.findMany(
      {  orderBy: {
        name: 'asc', // Tri ascendant (A-Z)
      }      
    });
    if (!exercises) return res.status(404).json({ error: 'Exercices cognitifs non trouvés' });
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getExerciseById = async (req, res) => {
  
  try {
  
    const exercise = await prisma.cognitive_exercise.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!exercise) return res.status(404).json({ error: 'Exercice cognitif non trouvé' });
    res.json(exercise);
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateExercise = async (req, res) => {
  try {
    const exercise = await prisma.cognitive_exercise.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (!exercise) return res.status(404).json({ error: 'Exercice cognitif non trouvé' });
    // Vérification des champs requis
    const { name, category, difficulty_level, duration_minutes, description, image } = req.body;
    if (!name || !category || !difficulty_level || !duration_minutes || !description || !image) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }
    // Mise à jour de l'exercice
    await prisma.cognitive_exercise.update({
      where: {
        id: req.params.id,
      },
      data: {
        name,
        category,
        difficulty_level,
        duration_minutes,
        description,
        image
      },
    }); 
    res.status(200).json(exercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteExercise = async (req, res) => {
  try {
    const exercise = await prisma.cognitive_exercise.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (!exercise) return res.status(404).json({ error: 'Exercice cognitif non trouvé' });

    // Suppression de l'exercice
    await prisma.cognitive_exercise.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
