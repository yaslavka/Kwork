const sequelize = require("../../../db");
const {CategoryTypeModel} = require("../CategoryTypeModel");
const {DataTypes} = require("sequelize");

const SubcategoriesModel =sequelize.define('subCategory', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    route:{type: DataTypes.STRING, defaultValue: null},
    label:{type: DataTypes.STRING, defaultValue: null},
    icon:{type: DataTypes.STRING, defaultValue: null},
    images:{type: DataTypes.STRING, defaultValue: null},
    categoryTypeId:{type: DataTypes.BIGINT, defaultValue: null}
})
CategoryTypeModel.hasMany(SubcategoriesModel, {as: 'subCategory'});
SubcategoriesModel.belongsTo(CategoryTypeModel, {as: "categoryType"});
module.exports = {SubcategoriesModel}