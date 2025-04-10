import { Op } from 'sequelize';
import db from '../models/index.js';

const Skill = db.Skill;

export const getAllSkills = async(req, res) => {
  try {
    const { name, category } = req.query;
    let whereClause = {};
    
    if (name) {
      whereClause.name = { [Op.iLike]: `%${name}%` };
    }
    
    if (category) {
      whereClause.category = { [Op.iLike]: `%${category}%` };
    }
    
    const skills = await Skill.findAll({
      where: whereClause,
      order: [['name', 'ASC']]
    });
    return res.status(200).json(skills);
  } catch (error) {
    return res.status(500).json({
      message: 'Erreur lors de la récupération des compétences',
      error: error.message
    });
  }
};

export const getSkillById = async(req, res) =>{
  try {
    const { id } = req.params;
    const skill = await Skill.findByPk(id);
    
    if (!skill) {
      return res.status(404).json({ message: `Skill avec l'ID ${id} non trouvé` });
    }
    
    res.status(200).json(skill);
  } catch (error) {
    return res.status(500).json({
      message: 'Erreur lors de la récupération de la compétence',
      error: error.message
    });
  }
};

/**
* Crée un nouveau skill
* @param {Object} req - La requête Express
* @param {Object} res - La réponse Express
*/
export const createSkill = async(req, res) => {
  try {
    const { name, description, category } = req.body;
    
    if (!name) {
      return res.status(400).json({ message: 'Le nom du skill est requis' });
    }
    
    const newSkill = await Skill.create({
      name,
      description,
      category
    });
    
    res.status(201).json(newSkill);
  } catch (error) {
    return res.status(500).json({
      message: 'Erreur lors de la création de la compétence',
      error: error.message
    });
  }
}

export const updateSkill = async(req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category } = req.body;
    
    const skill = await Skill.findByPk(id);
    
    if (!skill) {
      return res.status(404).json({ message: `Skill avec l'ID ${id} non trouvé` });
    }
    
    // Mise à jour des champs
    await skill.update({
      name: name || skill.name,
      description: description !== undefined ? description : skill.description,
      category: category !== undefined ? category : skill.category,
      updated_at: new Date()
    });
    
    res.status(200).json(skill);
  } catch (error) {
    return res.status(500).json({
      message: 'Erreur lors de la mise à jour de la compétence',
      error: error.message
    });
  }
}

export const deleteSkill = async(req, res) => {
  try {
    const { id } = req.params;
    const skill = await Skill.findByPk(id);
    
    if (!skill) {
      return res.status(404).json({ message: `Skill avec l'ID ${id} non trouvé` });
    }
    
    await skill.destroy();
    res.status(200).json({ message: `Skill avec l'ID ${id} supprimé avec succès` });
  } catch (error) {
    return res.status(500).json({
      message: 'Erreur lors de la suppression de la compétence',
      error: error.message
    });  
  }
}