import { PrismaClient } from '../prisma/client.js'
const prisma = new PrismaClient()

export const getAllBadges = async (req, res) => {
  try {
    const badges = await prisma.badge.findMany({
      orderBy: {
        name: 'asc'
      },
    });

    res.status(200).json({ badges });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des badges', error: error.message });
  }
};

export const getBadgeById = async (req, res) => {
  try {
    const { id } = req.params;

    const badge = await prisma.badge.findUnique({
      where: { id }
    });

    if (!badge) {
      return res.status(404).json({ message: 'Badge non trouvé' });
    }

    res.status(200).json(badge);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du badge', error: error.message });
  }
};

export const createBadge = async (req, res) => {
  try {
    const newBadge = await prisma.badge.create({
      data: req.body
    });

    res.status(201).json(newBadge);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du badge', error: error.message });
  }
};

export const updateBadge = async (req, res) => {
  try {
    const { id } = req.params;

    const badge = await prisma.badge.findUnique({
      where: { id }
    });

    if (!badge) {
      return res.status(404).json({ message: 'Badge non trouvé' });
    }

    const updatedBadge = await prisma.badge.update({
      data: {
        ...req.body,
        updated_at: new Date()
      },
      where: { id }
    });

    res.status(200).json(updatedBadge);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du badge', error: error.message });
  }
};

export const deleteBadge = async (req, res) => {
  try {
    const { id } = req.params;

    const badge = await prisma.badge.findUnique({
      where: { id }
    });

    if (!badge) {
      return res.status(404).json({ message: 'Badge non trouvé' });
    }

    await prisma.badge.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Badge supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du badge', error: error.message });
  }
};
