const Skill = (sequelize, DataTypes) => {
  const model = sequelize.define('Skill', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(500),
    },
    category: {
      type: DataTypes.STRING(255)
    },
  }, 
  {
    tableName: 'skill',
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

export default Skill;
