const ActivityLog = (sequelize, DataTypes) => {
  const model = sequelize.define('ActivityLog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    action_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    action_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ip_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    device: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'activity_log',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  
  // Add any associations here if needed
  
  return model;
};

export default ActivityLog;
