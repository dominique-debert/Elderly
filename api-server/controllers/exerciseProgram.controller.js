import { PrismaClient } from "../prisma/client.js";
const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: ExerciseProgram
 *   description: API for managing exercise programs
 */

export const getAllExercisePrograms = async (req, res) => {
  const programs = await prisma.exercise_program.findMany({
    orderBy: {
      name: 'asc', // Ascending order (A-Z)
    },
  });
  if (!programs) return res.status(404).json({ error: `Programme d'exercices non trouvé` });
  res.json(programs);
};

export const getExerciseProgramById = async (req, res) => {
  const { id } = req.params;
  const program = await prisma.exercise_program.findUnique({
    where: {
      id,
    },
  });
  if (!program) return res.status(404).json({ error: `Programme d'exercices non trouvé` });
  if (program) return res.status(200).json(program);
  res.status(404).json({ error: 'ExerciseProgram not found' });
};

export const createExerciseProgram = async (req, res) => {
  const { name, category, difficulty_level, adapted_for_reduced_mobility, duration_minutes, description, video_link, image } = req.body;
  const program = await prisma.exercise_program.create({
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
  if (!program) return res.status(400).json({ error: `Impossible de créer le programme d'exercices` });
  res.status(201).json(program);
};

export const updateExerciseProgram = async (req, res) => {
  const { id } = req.params;
  const program = await prisma.exercise_program.findUnique({
    where: {
      id,
    },
  });
  if (!program) return res.status(404).json({ error: `Programme d'exercices non trouvé` });
  const { name, category, difficulty_level, adapted_for_reduced_mobility, duration_minutes, description, video_link, image } = req.body;
  const updatedProgram = await prisma.exercise_program.update({
    where: { id },
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
  if (!updatedProgram) return res.status(400).json({ error: `Impossible de mettre à jour le programme d'exercices` });
  res.status(200).json(updatedProgram);
};

export const deleteExerciseProgram = async (req, res) => {
  const { id } = req.params;
  const program = await prisma.exercise_program.findUnique({
    where: {
      id,
    },
  });
  if (!program) return res.status(404).json({ error: `Programme d'exercices non trouvé` });
  await prisma.cognitive_exercise.delete({
    where: {
      exercise_program_id: id,
    },
  });
  if (deleted) return res.status(204).send();
};
