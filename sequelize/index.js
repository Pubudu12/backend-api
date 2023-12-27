const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();

const DB_Host = process.env.DB_HOST;
const DB_username = process.env.DB_USERNAME;
const DB_Password = process.env.DB_PASSWORD;
const DB_Name = process.env.DB_NAME;
const DB_Port = process.env.DB_PORT;

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize(DB_Name, DB_username, DB_Password, {
  host: DB_Host,
  port: DB_Port,
  dialect: "mysql",
  operatorsAliases: 0,
  timezone: "+05:30",
});

const modelDefiners = [
    // Add more models here...  
    require("./models/employee"),
];


// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
  }
  
// We execute any extra setup after the models are defined, such as adding foreignKeys.
// foreignKeySetUp(sequelize);

module.exports = sequelize;
global.sequelize = sequelize;