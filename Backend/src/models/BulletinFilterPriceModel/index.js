const sequelize = require("../../../db");
const {SubCategoryViewModel} = require("../SubCategoryViewModel");
const {DataTypes} = require("sequelize");

const BulletinFilterPriceModel = sequelize.define('filterPrice', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: null},
    viewId:{type: DataTypes.BIGINT, defaultValue: null},
})
SubCategoryViewModel.hasMany(BulletinFilterPriceModel, {as: "filterPrice"});
BulletinFilterPriceModel.belongsTo(SubCategoryViewModel, {as: 'view'});
module.exports ={BulletinFilterPriceModel}