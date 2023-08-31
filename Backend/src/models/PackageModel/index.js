const sequelize = require("../../../db");
const {SubCategoryViewModel} = require("../SubCategoryViewModel");
const {DataTypes} = require("sequelize");

const PackageModel = sequelize.define('package', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: null},
    viewId:{type: DataTypes.BIGINT, defaultValue: null},
})
SubCategoryViewModel.hasMany(PackageModel, {as: 'package'});
PackageModel.belongsTo(SubCategoryViewModel, {as: "view"});

module.exports = {PackageModel}