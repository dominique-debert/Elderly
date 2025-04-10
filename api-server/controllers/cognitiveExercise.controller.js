import db from '../models/index.js';
const CognitiveExercise = db.CognitiveExercise;

/**
 * @swagger
 * tags:
 *   name: Cognitive Exercises
 *   description: API pour gérer les exercices cognitifs
 */

export const createExercise = async (req, res) => {
  try {
    const exercise = await CognitiveExercise.create(req.body);
    res.status(201).json(exercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllExercises = async (req, res) => {
  try {
    const exercises = await CognitiveExercise.findAll();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getExerciseById = async (req, res) => {
  try {
    const exercise = await CognitiveExercise.findByPk(req.params.id);
    if (!exercise) return res.status(404).json({ error: 'Not found' });
    res.json(exercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateExercise = async (req, res) => {
  try {
    const [updated] = await CognitiveExercise.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    const updatedExercise = await CognitiveExercise.findByPk(req.params.id);
    res.json(updatedExercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteExercise = async (req, res) => {
  try {
    const deleted = await CognitiveExercise.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
