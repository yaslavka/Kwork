const sequelize = require("../../../db");
const {PackageModel} = require("../PackageModel");
const {SubCategoryViewModel} = require("../SubCategoryViewModel");
const {DataTypes} = require("sequelize");

const BulletinFilterModel = sequelize.define('filter', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: null},
    choice: {type: DataTypes.BOOLEAN, defaultValue: null},
    text: {type: DataTypes.STRING, defaultValue: null},
    viewId:{type: DataTypes.BIGINT, defaultValue: null},
    packageId:{type: DataTypes.BIGINT, defaultValue: null},
})
SubCategoryViewModel.hasMany(BulletinFilterModel, {as: "filter"});
BulletinFilterModel.belongsTo(SubCategoryViewModel, {as: 'view'});

PackageModel.hasMany(BulletinFilterModel, {as: 'filter'});
BulletinFilterModel.belongsTo(PackageModel, {as: "package"});
module.exports ={BulletinFilterModel}