// models/user.js
const User = (sequelize, DataTypes) => {
  const model = sequelize.define('User', {
id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(100)
    },
    last_name: {
      type: DataTypes.STRING(100)
    },
    birth_date: {
      type: DataTypes.DATEONLY
    },
    address: {
      type: DataTypes.STRING(255)
    },
    gps_coordinates: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING(20)
    },
    profile_picture: {
      type: DataTypes.STRING(255)
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    account_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    interface_preferences: {
      type: DataTypes.STRING(255)
    },
    two_factor_authentication: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    help_points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    reduced_mobility: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    activity_level: {
      type: DataTypes.STRING(20),
      validate: {
        isIn: [['sedentary', 'moderate', 'active']]
      }
    },
    emergency_contact_name: {
      type: DataTypes.STRING(100)
    },
    emergency_contact_phone: {
      type: DataTypes.STRING(20)
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: 'active'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE
    },
  }, {
    tableName: 'user',
    timestamps: true,
  });

  // Add any associations here if needed
  model.associate = function(models) {
    // For example: User.hasMany(models.Post);
  };

  return model;
};

export default User;