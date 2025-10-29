export const validate = (schema, property = 'body') => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req[property]);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return next(error);
        }
        // Assigne les valeurs validées (utile si le schéma transforme les données)
        req[property] = value;
        next();
    };
};
