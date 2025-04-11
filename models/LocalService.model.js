const LocalService = (sequelize, DataTypes) => {
  const model = sequelize.define('LocalService', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(255),
    },
    address: {
      type: DataTypes.STRING(255),
    },
    gps_coordinates: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING(20),
    },
    website: {
      type: DataTypes.STRING(255),
    },
    description: {
      type: DataTypes.STRING,
    },
    hours: {
      type: DataTypes.STRING,
    },
    senior_friendly: {
      type: DataTypes.BOOLEAN,
    },
  }, 
  {
    tableName: 'local_service',
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

export default LocalService;
