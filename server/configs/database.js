import { Sequelize } from "sequelize";

//importing models
import userModel from "../model/User.js";
import projectModel from "../model/Project.js";
import issueModel from "../model/Issue.js";
import collaborationModel from "../model/Collaboration.js";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

//initializing models
const User = userModel(sequelize);
const Project = projectModel(sequelize);
const Issue = issueModel(sequelize);
const Collaboration = collaborationModel(sequelize);

//project&&creator assoc
User.hasMany(Project, { foreignKey: "owner_id" });
Project.belongsTo(User, { as: "owner", foreignKey: "owner_id" });
//project&&collaborator assoc
User.belongsToMany(Project, { through: Collaboration, as: "collaborations" });
Project.belongsToMany(User, { through: Collaboration, as: "collaborators" });
Collaboration.belongsTo(User);
Collaboration.belongsTo(Project);
//project&&issue assoc
Project.hasMany(Issue, {foreignKey:'project_id'})
Issue.belongsTo(Project)

export { sequelize, User, Project, Issue, Collaboration };
