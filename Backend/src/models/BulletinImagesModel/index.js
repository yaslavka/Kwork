const sequelize = require("../../../db");
const {DataTypes} = require("sequelize");

const BulletinImagesModel = sequelize.define('bulletinImages', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: null},
})

module.exports ={BulletinImagesModel}