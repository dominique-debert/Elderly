import db from '../models/index.js';
const ExerciseProgram = db.ExerciseProgram;

/**
 * @swagger
 * tags:
 *   name: ExerciseProgram
 *   description: API for managing exercise programs
 */

export const getAllExercisePrograms = async (req, res) => {
  const programs = await ExerciseProgram.findAll();
  res.json(programs);
};

export const getExerciseProgramById = async (req, res) => {
  const { id } = req.params;
  const program = await ExerciseProgram.findByPk(id);
  if (program) return res.json(program);
  res.status(404).json({ error: 'ExerciseProgram not found' });
};

export const createExerciseProgram = async (req, res) => {
  const program = await ExerciseProgram.create(req.body);
  res.status(201).json(program);
};

export const updateExerciseProgram = async (req, res) => {
  const { id } = req.params;
  const [updated] = await ExerciseProgram.update(req.body, { where: { id } });
  if (updated) {
    const updatedProgram = await ExerciseProgram.findByPk(id);
    return res.json(updatedProgram);
  }
  res.status(404).json({ error: 'ExerciseProgram not found' });
};

export const deleteExerciseProgram = async (req, res) => {
  const { id } = req.params;
  const deleted = await ExerciseProgram.destroy({ where: { id } });
  if (deleted) return res.status(204).send();
  res.status(404).json({ error: 'ExerciseProgram not found' });
};
