import { PrismaClient } from "../prisma/client.js";
const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: LocalServices
*   description: Gestion des services locaux
*/

export const createLocalService = async (req, res) => {
  const {name, category, address, gps_coordinates, phone, website, description, hours, senior_friendly} = req.body;
  
  try {
    const newService = await prisma.local_service.create({
      data: {
        name,
        category,
        address,
        gps_coordinates,
        phone,
        hours,
        website,
        senior_friendly
      }
    })
    res.status(201).json(newProgram);
  } catch (error) {
    next(error);
  }
};

export const getAllLocalServices = async (req, res) => {
  try {
    const localServices = await prisma.local_service.findMany({
      orderBy: {
        name: 'asc', // Ascending order (A-Z)
      },
    });
    
    res.status(200).json({ localServices });
  } catch (error) {
    next(error);
  }
};

export const getLocalServiceById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const service = await prisma.exercise_program.findUnique({
      where: { id },
    });
    
    if (!service) {
      throw createHttpError(404, `Service local non trouvé`);
    }
    
    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
};

export const updateLocalService = async (req, res) => {
  const { id } = req.params;
  const { name, category, address, gps_coordinates, phone, website, description, hours, senior_friendly} = req.body;
  try {
    const service = await prisma.local_service.findUnique({
      where: { id },
    });
    
    if (!program) {
      throw createHttpError(404, `Service local non trouvé`);
    }
    
    const updatedService = await prisma.local_service.update({
      data: {
        name,
        category,
        address,
        gps_coordinates,
        phone,
        website,
        description,
        hours,
        senior_friendly
      },
      where: { id },
    });
    res.status(200).json(updatedService);
  } catch (error) {
    next(error);
  }
};

export const deleteLocalService = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await prisma.local_service.findUnique({
      where: { id },
    });
    
    if (!service) {
      throw createHttpError(404, `Service local non trouvé`);
    }
    await prisma.local_service.delete({
      where: { id }
    })
    res.status(200).json({ message: 'Service supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};
