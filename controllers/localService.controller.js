import db from "../models/index.js";
const LocalService = db.LocalService

/**
 * @swagger
 * tags:
 *   name: LocalServices
 *   description: Gestion des services locaux
 */

export const getAllLocalServices = async (req, res) => {
  const services = await LocalService.findAll();
  res.json(services);
};

export const getLocalServiceById = async (req, res) => {
  const service = await LocalService.findByPk(req.params.id);
  if (service) res.json(service);
  else res.status(404).json({ message: 'Service local non trouvé' });
};

export const createLocalService = async (req, res) => {
  try {
    const service = await LocalService.create(req.body);
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateLocalService = async (req, res) => {
  const service = await LocalService.findByPk(req.params.id);
  if (!service) return res.status(404).json({ message: 'Service local non trouvé' });

  try {
    await service.update(req.body);
    res.json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteLocalService = async (req, res) => {
  const service = await LocalService.findByPk(req.params.id);
  if (!service) return res.status(404).json({ message: 'Service local non trouvé' });

  await service.destroy();
  res.status(204).send();
};
