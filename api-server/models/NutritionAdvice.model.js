const NutritionAdvice = (sequelize, DataTypes) => {
  const model = sequelize.define('NutritionAdvice', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.STRING(50),
    },
    season: {
      type: DataTypes.ENUM('printemps', 'été', 'automne', 'hiver'),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
    }, 
  },
  {
    tableName: 'nutrition_advice',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  
  // Add any associations here if needed
  model.associate = function(models) {
    // For example: User.hasMany(models.Post);
  };
  
  return model;
};

export default NutritionAdvice;
