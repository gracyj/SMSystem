// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_SMSystem_db";
import UserModel from "../models/SMSystem_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.SMSystem_db.host +
        ":" +
        properties.SMSystem_db.port +
        "//" +
        properties.SMSystem_db.user +
        "@" +
        properties.SMSystem_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.SMSystem_db.name,
      properties.SMSystem_db.user,
      properties.SMSystem_db.password,
      {
        host: properties.SMSystem_db.host,
        dialect: properties.SMSystem_db.dialect,
        port: properties.SMSystem_db.port,
        logging: false
      }
    );
    this.dbConnection_SMSystem_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_SMSystem_db;
  }
}

export default new Database();
