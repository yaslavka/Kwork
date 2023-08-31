const sequelize = require("../../../db");
const {BulletinReviewsModel} = require("../BulletinReviewsModel");
const {BulletinAnswersModel} = require("../BulletinAnswersModel");
const {PortfolioModel} = require("../PortfolioModel");
const {BulletinDescriptionModel} = require("../BulletinDescriptionModel");
const {BulletinImagesModel} = require("../BulletinImagesModel");
const {ListPackageModel} = require("../ListPackageModel");
const {PackageModel} = require("../PackageModel");
const {SubCategoryViewModel} = require("../SubCategoryViewModel");
const {SubcategoriesModel} = require("../SubСategoriesModel");
const {CategoryTypeModel} = require("../CategoryTypeModel");
const {UserModel} = require("../UserModel");
const {DataTypes} = require("sequelize");

const BulletinModel = sequelize.define('bulletin', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, defaultValue: null},
    blackList: {type: DataTypes.BOOLEAN, defaultValue: false},
    favorites: {type: DataTypes.BOOLEAN, defaultValue: false},
    route:{type: DataTypes.STRING, defaultValue: null},
    file:{type: DataTypes.STRING, defaultValue: null},
    price: {type: DataTypes.DECIMAL(61, 2), defaultValue: 0.00, allowNull: false},
    cover:{type: DataTypes.STRING, defaultValue: null},
    categoryTypeId:{type: DataTypes.BIGINT, defaultValue: null},
    subCategoryId:{type: DataTypes.BIGINT, defaultValue: null},
    viewId:{type: DataTypes.BIGINT, defaultValue: null},
    packageId:{type: DataTypes.BIGINT, defaultValue: null},
    listPackageId:{type: DataTypes.BIGINT, defaultValue: null},
    bulletinImagesId:{type: DataTypes.BIGINT, defaultValue: null},
    descriptionId:{type: DataTypes.BIGINT, defaultValue: null},
    userId:{type: DataTypes.BIGINT, defaultValue: null},
})

CategoryTypeModel.hasMany(BulletinModel, {as: 'bulletin'});
BulletinModel.belongsTo(CategoryTypeModel, {as: "categoryType"});

SubcategoriesModel.hasMany(BulletinModel, {as: 'bulletin'});
BulletinModel.belongsTo(SubcategoriesModel, {as: "subCategory"});

SubCategoryViewModel.hasMany(BulletinModel, {as: 'bulletin'});
BulletinModel.belongsTo(SubCategoryViewModel, {as: "view"});

PackageModel.hasMany(BulletinModel, {as: 'bulletin'});
BulletinModel.belongsTo(PackageModel, {as: "package"});

ListPackageModel.hasMany(BulletinModel, {as: 'bulletin'});
BulletinModel.belongsTo(ListPackageModel, {as: "listPackage"});

BulletinImagesModel.hasMany(BulletinModel, {as: "bulletin"});
BulletinModel.belongsTo(BulletinImagesModel, {as: 'bulletinImages'});

BulletinDescriptionModel.hasMany(BulletinModel, {as: "bulletin"});
BulletinModel.belongsTo(BulletinDescriptionModel, {as: 'description'});

PortfolioModel.hasMany(BulletinModel, {as: "bulletin"});
BulletinModel.belongsTo(PortfolioModel, {as: 'portfolio'});

BulletinAnswersModel.hasMany(BulletinModel, {as: "bulletin"});
BulletinModel.belongsTo(BulletinAnswersModel, {as: 'answers'});

BulletinReviewsModel.hasMany(BulletinModel, {as: "bulletin"});
BulletinModel.belongsTo(BulletinReviewsModel, {as: 'reviews'});

UserModel.hasMany(BulletinModel, {as: 'bulletin'});
BulletinModel.belongsTo(UserModel, {as: "user"});

module.exports ={BulletinModel}