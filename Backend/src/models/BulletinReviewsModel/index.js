const sequelize = require("../../../db");
const {UserModel} = require("../UserModel");
const {DataTypes} = require("sequelize");

const BulletinReviewsModel = sequelize.define('reviews', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, defaultValue: null},
    answers:{type: DataTypes.Text, defaultValue: null},
})
UserModel.hasMany(BulletinReviewsModel, {as: 'reviews'});
BulletinReviewsModel.belongsTo(UserModel, {as: "user"});
module.exports ={BulletinReviewsModel}