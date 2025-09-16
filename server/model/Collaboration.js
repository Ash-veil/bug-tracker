import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Collaboration = sequelize.define("collaboration", {
    assignedDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  return Collaboration;
};
