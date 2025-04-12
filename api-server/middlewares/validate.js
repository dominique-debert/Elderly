export const validate = (schema, property = 'body') => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property]);

    if (error) {
      return res.status(400).json({
        message: 'Validation échouée',
        error: error.details.map(detail => detail.message)
      });
    }

    next();
  };
};
