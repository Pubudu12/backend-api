const { DataTypes } = require("sequelize");
// const sequelize = require('sequelize');

// Here it exports a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define(
    "employee",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      phone_number:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      gender: {
        type: DataTypes.ENUM('M','F'),
        allowNull: false,
        unique: false,
      },
      photo:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      }
    },
    {
      // sequelize,
      modelName: "employee",
      tableName: "employee",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
