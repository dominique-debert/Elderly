import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import process from 'process';
import { fileURLToPath } from 'url';
import dbConfig from '../config/database.js';
import User from './User.model.js';
import Skill from './Skill.model.js';
import Activity from './Activity.model.js';
import ActivityLog from './ActivityLog.model.js';
import ActivityRegistration from './ActivityRegistration.model.js';
import Badge from './Badge.model.js';
import CognitiveExercise from './CognitiveExercise.model.js';
import ExerciseProgram from './ExerciseProgram.model.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];
const db = {};

// Create Sequelize instance
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Load models
db.Activity = Activity(sequelize, Sequelize.DataTypes);
db.ActivityLog = ActivityLog(sequelize, Sequelize.DataTypes);
db.ActivityRegistration = ActivityRegistration(sequelize, Sequelize.DataTypes);
db.Badge = Badge(sequelize, Sequelize.DataTypes);
db.CognitiveExercise = CognitiveExercise(sequelize, Sequelize.DataTypes);
db.ExerciseProgram = ExerciseProgram(sequelize, Sequelize.DataTypes);
db.User = User(sequelize, Sequelize.DataTypes);
db.Skill = Skill(sequelize, Sequelize.DataTypes);

// Associate models if associations exist
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;