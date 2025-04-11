const Conversation = (sequelize, DataTypes) => {
  const model = sequelize.define('Conversation', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    creation_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }, 
  {
    tableName: 'conversation',
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

export default Conversation;
