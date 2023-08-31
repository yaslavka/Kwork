const sequelize = require("../../../db");
const {SubCategoryViewModel} = require("../SubCategoryViewModel");
const {DataTypes} = require("sequelize");

const SubCategoryViewStyleModel = sequelize.define('style', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: null},
    choice: {type: DataTypes.BOOLEAN, defaultValue: false},
    route:{type: DataTypes.STRING, defaultValue: null},
    viewId:{type: DataTypes.BIGINT, defaultValue: null},
})
SubCategoryViewModel.hasMany(SubCategoryViewStyleModel, {as: 'style'});
SubCategoryViewStyleModel.belongsTo(SubCategoryViewModel, {as: "view"});
module.exports ={SubCategoryViewStyleModel}