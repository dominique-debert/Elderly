const ExerciseProgram = (sequelize, DataTypes) => {
  const model = sequelize.define('ExerciseProgram', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('balance', 'strength', 'flexibility', 'cardio'),
      allowNull: false
    },
    difficulty_level: {
      type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
      allowNull: false
    },
    adapted_for_reduced_mobility: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    duration_minutes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    video_link: {
      type: DataTypes.STRING(255)
    },
    image: {
      type: DataTypes.STRING(255)
    },
  }, {
    tableName: 'exercise_program',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  
  return model;
  
};

export default ExerciseProgram;
