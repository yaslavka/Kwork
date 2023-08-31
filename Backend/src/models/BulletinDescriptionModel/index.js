const sequelize = require("../../../db");
const {DataTypes} = require("sequelize");

const BulletinDescriptionModel = sequelize.define('description', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.TEXT, defaultValue: null},
    requirements: {type: DataTypes.TEXT, defaultValue: null},
})

module.exports ={BulletinDescriptionModel}