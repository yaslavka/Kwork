const sequelize = require("../../../db");
const {PortfolioModel} = require("../PortfolioModel");
const {DataTypes} = require("sequelize");

const PortfolioImagesModel = sequelize.define('portfolioImages', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: null},
    portfolioId:{type: DataTypes.BIGINT, defaultValue: null},
})
PortfolioModel.hasMany(PortfolioImagesModel, {as: 'portfolioImages'});
PortfolioImagesModel.belongsTo(PortfolioModel, {as: "portfolio"});
module.exports ={PortfolioImagesModel}