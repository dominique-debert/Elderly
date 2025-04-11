
import { PrismaClient } from '../prisma/client.js'
const prisma = new PrismaClient()

export const getAllBadges = async(req, res) => {
  try {
    const { page = 1, limit = 10, search, category, level } = req.query;
    const offset = (page - 1) * limit;
    
    const whereClause = {};
    
    if (search) {
      whereClause[Op.or] = [
        { name: { [Op.iLike]: `%${search}%` } },
        { description: { [Op.iLike]: `%${search}%` } }
      ];
    }
    
    if (category) {
      whereClause.category = category;
    }
    
    if (level) {
      whereClause.level = level;
    }
    
    const { count, rows } = await Badge.findAndCountAll({
      where: whereClause,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['id', 'ASC']]
    });
    
    res.status(200).json({
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      badges: rows
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des badges', error: error.message });
  }
}

export const getBadgeById = async(req, res) => {
  try {
    const { id } = req.params;
    const badge = await Badge.findByPk(id);
    
    if (!badge) {
      return res.status(404).json({ message: 'Badge non trouvé' });
    }
    
    res.status(200).json(badge);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du badge', error: error.message });
  }
}

export const createBadge = async(req, res) => {
  try {
    const { id, name, description, icon, category, level } = req.body;
    
    // Vérification si un badge avec cet ID existe déjà
    const existingBadge = await Badge.findByPk(id);
    if (existingBadge) {
      return res.status(400).json({ message: 'Un badge avec cet ID existe déjà' });
    }
    
    const newBadge = await Badge.create({
      id,
      name,
      description,
      icon,
      category,
      level
    });
    
    res.status(201).json(newBadge);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du badge', error: error.message });
  }
}


export const updateBadge = async(req, res) => {
  try {
    const { id } = req.params;
    const { name, description, icon, category, level } = req.body;
    
    const badge = await Badge.findByPk(id);
    
    if (!badge) {
      return res.status(404).json({ message: 'Badge non trouvé' });
    }
    
    await badge.update({
      name,
      description,
      icon,
      category,
      level,
      updated_at: new Date()
    });
    
    res.status(200).json(badge);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du badge', error: error.message });
  }
}

export const deleteBadge = async(req, res) => {
  try {
    const { id } = req.params;
    
    const badge = await Badge.findByPk(id);
    
    if (!badge) {
      return res.status(404).json({ message: 'Badge non trouvé' });
    }
    
    await badge.destroy();
    
    res.status(200).json({ message: 'Badge supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du badge', error: error.message });
  }
}