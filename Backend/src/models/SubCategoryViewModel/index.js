const sequelize = require("../../../db");
const {SubcategoriesModel} = require("../SubСategoriesModel");
const {DataTypes} = require("sequelize");

const SubCategoryViewModel = sequelize.define('view', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: null},
    choice: {type: DataTypes.BOOLEAN, defaultValue: false},
    route:{type: DataTypes.STRING, defaultValue: null},
    subCategoryId:{type: DataTypes.BIGINT, defaultValue: null},
})
SubcategoriesModel.hasMany(SubCategoryViewModel, {as: 'view'});
SubCategoryViewModel.belongsTo(SubcategoriesModel, {as: "subCategory"});
module.exports ={SubCategoryViewModel}