const WellnessBadge = (sequelize, DataTypes) => {
  const model = sequelize.define('WellnessBadge', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.ENUM('physical', 'cognitive', 'nutrition', 'global'),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 3,
      },
    },
  }, 
  {
    tableName: 'wellness_badge',
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

export default WellnessBadge;
