// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_SMSystem_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * DESIGNATION
      * ------------------------------------
      */
    class DESIGNATION extends Sequelize.Model{}
    DESIGNATION.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Dateofjoining: {
        type: Sequelize.DATE
      },
      
      designation: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      teachers:  {
        type: Sequelize.INTEGER,
        references: {
          model: "TEACHERS",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "designation", timestamps: false }
    );



    /**
      * ------------------------------------
      * STUDENTS
      * ------------------------------------
      */
    class STUDENTS extends Sequelize.Model{}
    STUDENTS.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      DOB: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      
      First_Name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      Last_Name: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "students", timestamps: false }
    );



    /**
      * ------------------------------------
      * SUBJECT
      * ------------------------------------
      */
    class SUBJECT extends Sequelize.Model{}
    SUBJECT.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Name: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      Subjects: {
        type: Sequelize.INTEGER,
        references: {
          model: STUDENTS,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "subject", timestamps: false }
    );



    /**
      * ------------------------------------
      * TEACHERS
      * ------------------------------------
      */
    class TEACHERS extends Sequelize.Model{}
    TEACHERS.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      First_Name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      Last_Name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      teachers: {
        type: Sequelize.INTEGER,
        references: {
          model: DESIGNATION,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "teachers", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    STUDENTS.belongsToMany(SUBJECT, {
        through: "STUDENTS_Subjects",
        as: "Subjects",
        foreignKey: "id_STUDENTS",
        otherKey: "id_SUBJECT",
        timestamps: false
    });

    
    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
