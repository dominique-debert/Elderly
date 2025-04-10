import db from "../models/index.js";
const WellnessBadge = db.WellnessBadge

/**
 * @swagger
 * tags:
 *   name: WellnessBadges
 *   description: Gestion des badges bien-être
 */

export const getAllBadges = async (req, res) => {
  const badges = await WellnessBadge.findAll();
  res.json(badges);
};

export const getBadgeById = async (req, res) => {
  const badge = await WellnessBadge.findByPk(req.params.id);
  if (badge) res.json(badge);
  else res.status(404).json({ message: 'Badge not found' });
};

export const createBadge = async (req, res) => {
  try {
    const badge = await WellnessBadge.create(req.body);
    res.status(201).json(badge);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateBadge = async (req, res) => {
  const badge = await WellnessBadge.findByPk(req.params.id);
  if (!badge) return res.status(404).json({ message: 'Badge not found' });

  try {
    await badge.update(req.body);
    res.json(badge);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteBadge = async (req, res) => {
  const badge = await WellnessBadge.findByPk(req.params.id);
  if (!badge) return res.status(404).json({ message: 'Badge not found' });

  await badge.destroy();
  res.status(204).send();
};
