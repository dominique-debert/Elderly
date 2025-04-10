const CognitiveExercise = (sequelize, DataTypes) => {
  const model = sequelize.define('CognitiveExercise', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('memory', 'attention', 'logic', 'language'),
      allowNull: false
    },
    difficulty_level: {
      type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
      allowNull: false
    },
    duration_minutes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING(255)
    }
  }, {
    tableName: 'cognitive_exercise',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  
  return model;
  
};

export default CognitiveExercise;
