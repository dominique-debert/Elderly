import { PrismaClient } from "../prisma/client.js";
const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: ExerciseProgram
*   description: API for managing exercise programs
*/

export const createExerciseProgram = async (req, res) => {
  const { name, category, difficulty_level, adapted_for_reduced_mobility, duration_minutes, description, video_link, image } = req.body;
  try {
    const newProgram = await prisma.exercise_program.create({
      data: {
        name,
        category,
        difficulty_level,
        adapted_for_reduced_mobility,
        duration_minutes,
        description,
        video_link,
        image,
      },
    });
    res.status(201).json(newProgram);
  } catch (error) {
    next(error);
  }
};

export const getAllExercisePrograms = async (req, res) => {
  try {
    const programs = await prisma.exercise_program.findMany(
      {  orderBy: {
        name: 'asc', // Tri ascendant (A-Z)
      }      
    });
    
    res.status(200).json({ programs });
  } catch (error) {
    next(error);
  }
};

export const getExerciseProgramById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const program = await prisma.exercise_program.findUnique({
      where: { id },
    });
    
    if (!program) {
      throw createHttpError(404, `Programme d'exercices non trouvé`);
    }
    
    res.status(200).json(program);
  } catch (error) {
    next(error);
  }
};

export const updateExerciseProgram = async (req, res) => {
  const { id } = req.params;
  const { name, category, difficulty_level, adapted_for_reduced_mobility, duration_minutes, description, video_link, image } = req.body;
  try {
    const program = await prisma.exercise_program.findUnique({
      where: {
        id,
      },
    });
    
    if (!program) {
      throw createHttpError(404, `Programme d'exercices non trouvé`);
    }
    
    const updatedProgram = await prisma.exercise_program.update({
      data: {
        name,
        category,
        difficulty_level,
        adapted_for_reduced_mobility,
        duration_minutes,
        description,
        video_link,
        image,
      },
      where: { id },
    });
    res.status(200).json(updatedProgram);
  } catch (error) {
    next(error);
  }
};

export const deleteExerciseProgram = async (req, res) => {
  const { id } = req.params;
  try {
    const program = await prisma.exercise_program.findUnique({
      where: {
        id,
      },
    });

    if (!program) {
      throw createHttpError(404, 'Programme non trouvé');
    }

    await prisma.exercise_program.delete({
      where: { id }
    });
    res.status(200).json({ message: 'Programme supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};