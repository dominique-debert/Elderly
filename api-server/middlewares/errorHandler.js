const errorHandler = (err, req, res, next) => {
  console.error(err); // utile pour le debug en dev

  const status = err.status || 500;
  const message = err.message || 'Une erreur est survenue sur le serveur';
  const details = err.details || undefined;

  res.status(status).json({
    message,
    ...(details && { details }) // ajoute "details" uniquement si présent
  });
};

export default errorHandler;
// Ce middleware doit être ajouté après toutes les routes dans votre fichier server.js