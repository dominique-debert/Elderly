import db from '../models/index.js';

const NutritionAdvice = db.NutritionAdvice;

/**
 * @swagger
 * tags:
 *   name: NutritionAdvices
 *   description: Gestion des avis nutritionnels
 */

// CREATE
export const createAdvice = async (req, res) => {
  try {
    const advice = await NutritionAdvice.create(req.body);
    res.status(201).json(advice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ ALL
export const getAllAdvices = async (req, res) => {
  try {
    const advices = await NutritionAdvice.findAll();
    res.json(advices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ ONE
export const getAdviceById = async (req, res) => {
  try {
    const advice = await NutritionAdvice.findByPk(req.params.id);
    if (!advice) return res.status(404).json({ error: 'Not found' });
    res.json(advice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateAdvice = async (req, res) => {
  try {
    const [updated] = await NutritionAdvice.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    const updatedAdvice = await NutritionAdvice.findByPk(req.params.id);
    res.json(updatedAdvice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
export const deleteAdvice = async (req, res) => {
  try {
    const deleted = await NutritionAdvice.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
