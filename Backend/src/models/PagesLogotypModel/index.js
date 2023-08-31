const sequelize = require("../../../db");
const {SubcategoriesModel} = require("../SubСategoriesModel");
const {DataTypes} = require("sequelize");

const PagesLogotypModel = sequelize.define('pagesLogotyp', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: null},
    countText: {type: DataTypes.STRING, defaultValue: null},
    sortText: {type: DataTypes.STRING, defaultValue: null},
    headingsText: {type: DataTypes.STRING, defaultValue: null},
    toolsText: {type: DataTypes.STRING, defaultValue: null},
    countsText: {type: DataTypes.STRING, defaultValue: null},
    priceText: {type: DataTypes.STRING, defaultValue: null},
    levelText: {type: DataTypes.STRING, defaultValue: null},
    activeText: {type: DataTypes.STRING, defaultValue: null},
    positiveText: {type: DataTypes.STRING, defaultValue: null},
    termText: {type: DataTypes.STRING, defaultValue: null},
    ordersText: {type: DataTypes.STRING, defaultValue: null},
    viewedText: {type: DataTypes.STRING, defaultValue: null},
    orderedText: {type: DataTypes.STRING, defaultValue: null},
    subCategoryId:{type: DataTypes.BIGINT, defaultValue: null},
})
SubcategoriesModel.hasMany(PagesLogotypModel, {as: 'pagesLogotyp'});
PagesLogotypModel.belongsTo(SubcategoriesModel, {as: "subCategory"});
module.exports = {PagesLogotypModel}