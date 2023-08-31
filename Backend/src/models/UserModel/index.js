const sequelize = require("../../../db");
const {DataTypes} = require("sequelize");

const UserModel =sequelize.define('user', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    inviter_id: {type: DataTypes.BIGINT, defaultValue: null},
    username: {type: DataTypes.STRING, defaultValue: null},
    mobilePhone: {type: DataTypes.STRING, defaultValue: null},
    email: {type: DataTypes.STRING, defaultValue: null},
    password: {type: DataTypes.STRING, defaultValue: null},
    name: {type: DataTypes.STRING, defaultValue: null},
    firstName: {type: DataTypes.STRING, defaultValue: null},
    lastName: {type: DataTypes.STRING, defaultValue: null},
    jobTitle: {type: DataTypes.STRING, defaultValue: null},
    description: {type: DataTypes.TEXT, defaultValue: null},
    country: {type: DataTypes.STRING, defaultValue: null},
    city: {type: DataTypes.STRING, defaultValue: null},
    avatar: {type: DataTypes.STRING, defaultValue: null},
    balance: {type: DataTypes.DECIMAL(61, 2), defaultValue: 0.00, allowNull: false},
    profileHeader: {type: DataTypes.STRING, defaultValue: null},
    isAdmin: {type: DataTypes.BOOLEAN, defaultValue: false},
})
UserModel.belongsTo(UserModel, {foreignKey: 'inviter_id', as: 'inviter'})
module.exports = {UserModel}