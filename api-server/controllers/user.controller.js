// controllers/userController.js
import { Op } from 'sequelize';
import db from '../models/index.js';

const User = db.User;

// Récupérer tous les utilisateurs avec pagination et filtres optionnels
export const getAllUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, email, activity_level } = req.query;
    const offset = (page - 1) * limit;
    
    // Construction des filtres
    const where = {};
    if (status) where.status = status;
    if (email) where.email = { [Op.iLike]: `%${email}%` };
    if (activity_level) where.activity_level = activity_level;
    
    const { count, rows } = await User.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['email', 'ASC']]
    });
    
    return res.status(200).json({
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      users: rows
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erreur lors de la récupération des utilisateurs',
      error: error.message
    });
  }
};

// Récupérer un utilisateur par son ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: 'Erreur lors de la récupération de l\'utilisateur',
      error: error.message
    });
  }
};

// Créer un nouvel utilisateur
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({
      message: 'Erreur lors de la création de l\'utilisateur',
      error: error.message
    });
  }
};

// Mettre à jour un utilisateur
export const updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id }
    });
    
    if (updated === 0) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    
    const updatedUser = await User.findByPk(req.params.id);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json({
      message: 'Erreur lors de la mise à jour de l\'utilisateur',
      error: error.message
    });
  }
};

// Supprimer un utilisateur
export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });
    
    if (deleted === 0) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    
    return res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    return res.status(500).json({
      message: 'Erreur lors de la suppression de l\'utilisateur',
      error: error.message
    });
  }
};

// Changer le statut d'un utilisateur (actif/inactif)
export const changeUserStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!status || !['active', 'inactive', 'suspended'].includes(status)) {
      return res.status(400).json({ message: 'Statut invalide' });
    }
    
    const [updated] = await User.update(
      { status },
      { where: { id: req.params.id } }
    );
    
    if (updated === 0) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    
    return res.status(200).json({ message: `Statut utilisateur changé à ${status}` });
  } catch (error) {
    return res.status(500).json({
      message: 'Erreur lors du changement de statut',
      error: error.message
    });
  }
};