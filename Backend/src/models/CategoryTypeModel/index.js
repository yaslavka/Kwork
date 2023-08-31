const sequelize = require("../../../db");
const {DataTypes} = require("sequelize");
const {CategoryModel} = require("../CategoryModel");

const CategoryTypeModel =sequelize.define('categoryType', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, defaultValue: null},
    route:{type: DataTypes.STRING, defaultValue: null},
    categoryId: {type: DataTypes.BIGINT, defaultValue: null}
})

CategoryModel.hasMany(CategoryTypeModel, {as: 'categoryType'});
CategoryTypeModel.belongsTo(CategoryModel, {as: "category"});
module.exports = {CategoryTypeModel}