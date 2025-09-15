import { Sequelize } from "sequelize";

import userModel from "../model/User.js";
import projectModel from "../model/Project.js";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

const User = userModel(sequelize);
const Project = projectModel(sequelize);

User.hasMany(Project, {foreignKey: "owner_id"})
Project.belongsTo(User, {as: "owner", foreignKey: "owner_id"})

User.belongsToMany(Project, { through: "collaboration" });
Project.belongsToMany(User, { through: "collaboration" });

export  { sequelize, User, Project };
