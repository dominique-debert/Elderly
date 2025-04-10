const Badge = (sequelize, DataTypes) => {
  const model = sequelize.define('Badge', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'badge',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  
  return model;

};

export default Badge;
