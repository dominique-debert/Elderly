import db from '../models/index.js';
const Conversation = db.Conversation;

export const getAllConversations = async(req, res) => {
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
    
    const { count, rows } = await Conversation.findAndCountAll({
      where: whereClause,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['id', 'ASC']]
    });
    
    res.status(200).json({
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      conversations: rows
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des conversations', error: error.message });
  }
}

export const getConversationById = async(req, res) => {
  try {
    const { id } = req.params;
    const conversation = await Conversation.findByPk(id);
    
    if (!conversation) {
      return res.status(404).json({ message: 'Conversation non trouvée' });
    }
    
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la conversation', error: error.message });
  }
}

export const createConversation = async(req, res) => {
  try {
    const { id, type, title, creation_date } = req.body;
    
    // Vérification si un badge avec cet ID existe déjà
    const existingConversation = await Conversation.findByPk(id);
    if (existingConversation) {
      return res.status(400).json({ message: 'Une conversation avec cet ID existe déjà' });
    }
    
    const newConversation = await Conversation.create({
      id,
      type,
      title,
      creation_date
    });
    
    res.status(201).json(newConversation);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la conversation', error: error.message });
  }
}


export const updateConversation = async(req, res) => {
  try {
    const { id } = req.params;
    const { type, title, creation_date } = req.body;
    
    const conversation = await Conversation.findByPk(id);
    
    if (!conversation) {
      return res.status(404).json({ message: 'Conversation non trouvée' });
    }
    
    await Conversation.update({
      type,
      title,
      creation_date,
      updated_at: new Date()
    });
    
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la conversation', error: error.message });
  }
}

export const deleteConversation = async(req, res) => {
  try {
    const { id } = req.params;
    
    const conversation = await Conversation.findByPk(id);
    
    if (!conversation) {
      return res.status(404).json({ message: 'Badge non trouvé' });
    }
    
    await conversation.destroy();
    
    res.status(200).json({ message: 'Conversation supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la conversation', error: error.message });
  }
}