const {DataTypes} = require("sequelize")

module.exports = (db) => {
  db.users = db.define('users', {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pronouns: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DOB: {
        type: DataTypes.DATE,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING(512),
        allowNull: true
    },
    userID: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    isVerified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    isAdmin: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    jwtToken: {
      type: DataTypes.STRING(512),
      allowNull: false
    }
  },
  {
    timestamps: true
  }
)};