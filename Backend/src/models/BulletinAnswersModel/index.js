const sequelize = require("../../../db");
const {DataTypes} = require("sequelize");

const BulletinAnswersModel = sequelize.define('answers', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, defaultValue: null},
    answers:{type: DataTypes.Text, defaultValue: null},
})
module.exports ={BulletinAnswersModel}