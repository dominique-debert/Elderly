const Activity = (sequelize, DataTypes) => {
  const model = sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE
    },
    location: {
      type: DataTypes.STRING(255)
    },
    gps_coordinates: {
      type: DataTypes.TEXT
    },
    max_spots: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.STRING(100)
    },
    recurring: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    frequency: {
      type: DataTypes.STRING(100)
    },
    reduced_mobility_access: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    difficulty_level: {
      type: DataTypes.STRING(100)
    },
    cost: {
      type: DataTypes.FLOAT
    },
    status: {
      type: DataTypes.STRING(50)
    },
    weather_requirements: {
      type: DataTypes.STRING(255)
    },
    transport_options: {
      type: DataTypes.STRING(255)
    }
  }, {
    tableName: 'activity',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  
  // Add any associations here if needed
  
  return model;
};

export default Activity;
