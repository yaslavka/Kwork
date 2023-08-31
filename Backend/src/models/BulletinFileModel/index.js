const sequelize = require("../../../db");
const {BulletinDescriptionModel} = require("../BulletinDescriptionModel");
const {DataTypes} = require("sequelize");

const BulletinFileModel = sequelize.define('fileDescription', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    fileName: {type: DataTypes.STRING, defaultValue: null},
    descriptionId:{type: DataTypes.BIGINT, defaultValue: null},
})
BulletinDescriptionModel.hasMany(BulletinFileModel, {as: 'fileDescription'});
BulletinFileModel.belongsTo(BulletinDescriptionModel, {as: "description"});
module.exports ={BulletinFileModel}