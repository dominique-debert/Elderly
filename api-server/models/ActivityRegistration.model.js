const ActivityRegistration = (sequelize, DataTypes) => {
  const model = sequelize.define('ActivityRegistration', {
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Activity',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    attendance_confirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'activity_registration',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  
  ActivityRegistration.associate = (models) => {
    ActivityRegistration.belongsTo(models.Activity, {
      foreignKey: 'activity_id'
    });
    ActivityRegistration.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };
    
  return model;
};

export default ActivityRegistration;
