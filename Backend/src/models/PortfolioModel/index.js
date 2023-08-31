const sequelize = require("../../../db");
const {UserModel} = require("../UserModel");
const {DataTypes} = require("sequelize");

const PortfolioModel = sequelize.define('portfolio', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, defaultValue: null},
    cover:{type: DataTypes.STRING, defaultValue: null},
    userId:{type: DataTypes.BIGINT, defaultValue: null},
})

UserModel.hasMany(PortfolioModel, {as: 'portfolio'});
PortfolioModel.belongsTo(UserModel, {as: "user"});
module.exports ={PortfolioModel}