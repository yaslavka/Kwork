const sequelize = require("../../../db");
const {DataTypes} = require("sequelize");

const CategoryModel = sequelize.define('category', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    route:{type: DataTypes.STRING, defaultValue: null},
    label:{type: DataTypes.STRING, defaultValue: null},
    subLabel:{type: DataTypes.TEXT, defaultValue: null},
})

module.exports = {CategoryModel}