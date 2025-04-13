import { PrismaClient } from "../prisma/client.js";
const prisma = new PrismaClient();

/**
* Crée un nouveau skill
* @param {Object} req - La requête Express
* @param {Object} res - La réponse Express
*/
export const createSkill = async(req, res) => {
  const { name, category, description } = req.body;
  try {
    const newSkill = await prisma.skill.create({
      data: {
        name,
        category,
        description
      }
    })
  } catch (error) {
  }
}

export const getAllSkills = async(req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: {
        name: 'asc', // Ascending order (A-Z)
      },
    });
    
    res.status(200).json({ skill });
  } catch (error) {
    next(error);
  }
};

export const getSkillById = async(req, res) =>{
  const { id } = req.params;
  
  try {
    const skill = await prisma.skill.findUnique({
      where: { id },
    });
    
    if (!skill) {
      throw createHttpError(404, `Compétence non trouvée`);
    }
    
    res.status(200).json(skill);
  } catch (error) {
    next(error);
  }
};

export const updateSkill = async(req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category } = req.body;
    
    const skill = await prisma.skill.findUnique({
      where: { id },
    });
    
    if (!skill) {
      throw createHttpError(404, `Compétence non trouvée`);
    }
    
    // Mise à jour des champs
    const updatedSkill = prisma.skill.update({
      data: {
        name,
        category,
        description
      }
    })
  } catch (error) {
    next(error);
  }
}

export const deleteSkill = async(req, res) => {
  try {
    const { id } = req.params;
    
    const skill = await prisma.skill.findUnique({
      where: { id },
    });
    
    if (!skill) {
      throw createHttpError(404, `Compétence non trouvée`);
    }
    
    // Mise à jour des champs
    const updatedSkill = prisma.skill.delete({
      where: { id }
    })
    res.status(200).json({ message: 'Service supprimé avec succès' });
  } catch (error) {
    next(error);
  }
}