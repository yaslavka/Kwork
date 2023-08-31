const {BulletinFilterPriceModel} = require("../../models/BulletinFilterPriceModel");
const {BulletinFilterModel} = require("../../models/BulletinFilterModel");
const {ListPackageModel} = require("../../models/ListPackageModel");
const {PackageModel} = require("../../models/PackageModel");
const {PagesLogotypModel} = require("../../models/PagesLogotypModel");
const {SubCategoryViewStyleModel} = require("../../models/SubCategoryViewStyleModel");
const {SubCategoryViewModel} = require("../../models/SubCategoryViewModel");
const {Op} = require("sequelize");
const {SubcategoriesModel} = require("../../models/SubСategoriesModel");
const {CategoryTypeModel} = require("../../models/CategoryTypeModel");
const {CategoryModel} = require('../../models/CategoryModel')

class CategoryController {
    async getAllCategory(req, res){
        let design =await CategoryModel.findOne({where:{label:'homePages.header.DesignCategory.design.label'}})
        let it =await CategoryModel.findOne({where:{label:'Разработка и IT'}})
        let text =await CategoryModel.findOne({where:{label:'Тексты и переводы'}})
        let seo =await CategoryModel.findOne({where:{label:'SEO и трафик'}})
        let social =await CategoryModel.findOne({where:{label:'Соцсети и реклама'}})
        let audio =await CategoryModel.findOne({where:{label:'Аудио, видео, съемка'}})
        let business =await CategoryModel.findOne({where:{label:'Бизнес и жизнь'}})

        const designcol1 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Логотип и брендинг'},{title:'Презентации и инфографика'},{title:'Арт и иллюстрации'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})
        const designcol2 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Веб и мобильный дизайн'},{title:'Маркетплейсы и соцсети'},{title:'Интерьер и экстерьер'},{title:'Обработка и редактирование'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})
        const designcol3 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Полиграфия'},{title:'Промышленный дизайн'},{title:'Наружная реклама'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})

        const itcol1 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Доработка и настройка сайта'},{title:'Создание сайтов'},{title:'Верстка'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})
        const itcol2 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Десктоп программирование'},{title:'Скрипты и боты'},{title:'Мобильные приложения'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})
        const itcol3 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Игры'},{title:'Сервера и хостинг'},{title:'Юзабилити, тесты и помощь'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})

        const textcol1 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Тексты и наполнение сайта'},{title:'Переводы'},{title:'Набор текста'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})
        const textcol2 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Продающие и бизнес тексты'},{title:'Резюме и вакансии'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})

        const seocol1 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'SEO'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})
        const seocol2 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Трафик'},{title:'Статистика и аналитика'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})

        const socialcol1 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Соцсети и SMM'}, {title:'Контекстная реклама'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})
        const socialcol2 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Базы данных и клиентов'},{title:'E-mail рассылки'},{title:'Маркетплейсы и доски объявлений'},{title:'Реклама и PR'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})

        const audiocol1 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Аудиозапись и озвучка'}, {title:'Музыка и песни'},{title:'Редактирование аудио'},{title:'Интро и анимация логотипа'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})
        const audiocol2 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Видеоролики'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})

        const businesscol1 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Персональный помощник'}, {title:'Бухгалтерия и налоги'},{title:'Обзвоны и продажи'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})
        const businesscol2 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Юридическая помощь'},{title:'Продажа сайтов'},{title:'Подбор персонала'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})
        const businesscol3 = await CategoryTypeModel.findAll({where:{[Op.or]:[{title:'Презентация'},{title:'Обучение и консалтинг'},{title:'Стройка и ремонт'}]}, include:[{model:SubcategoriesModel, as: 'subCategory'}]})

        design.dataValues.col1 =designcol1
        design.dataValues.col2 =designcol2
        design.dataValues.col3 =designcol3

        it.dataValues.col1 = itcol1
        it.dataValues.col2 = itcol2
        it.dataValues.col3 = itcol3

        text.dataValues.col1 = textcol1
        text.dataValues.col2 = textcol2

        seo.dataValues.col1 = seocol1
        seo.dataValues.col2 = seocol2

        social.dataValues.col1 = socialcol1
        social.dataValues.col2 = socialcol2

        audio.dataValues.col1 = audiocol1
        audio.dataValues.col2 = audiocol2

        business.dataValues.col1 = businesscol1
        business.dataValues.col2 = businesscol2
        business.dataValues.col3 = businesscol3
        if (!design || !it || !text || !seo || !social || !audio || !business){
            return res.status(400).json({message: 'категории отсутствуют'})
        }else {
            return res.status(200).json({design:design, it:it, text:text, seo:seo, social:social, audio:audio, business:business})
        }
    }
    async getPageCategory(req, res){
        const {pathname}=req.body
        if (!pathname){
            return res.status(404).json({message: 'Запрашиваемая страница не найдена'})
        }else {
            let page_category =await CategoryModel.findAll({where:{route:pathname}, include:[{model: CategoryTypeModel, as:'categoryType', include:[{model:SubcategoriesModel, as: 'subCategory'}]}]})
            return res.status(200).json(page_category)
        }
    }
    async getSubPageCategory(req, res){
        const {pathname}=req.body
        if (!pathname){
            return res.status(404).json({message: 'Запрашиваемая страница не найдена'})
        }else {
            let sub_page_category = await SubcategoriesModel.findOne({where:{route:pathname}, include: [{model: PagesLogotypModel, as:'pagesLogotyp'}]})
            let category_type = await CategoryTypeModel.findOne({where:{id:sub_page_category.categoryTypeId}})
            let category = await CategoryModel.findOne({where:{id:category_type.categoryId}})
            let subCategoryView = await SubCategoryViewModel.findAll({where:{subCategoryId: sub_page_category.id}, include:[{model:SubCategoryViewStyleModel, as:'style'},{model: BulletinFilterModel, as: 'filter'},{model:BulletinFilterPriceModel, as: 'filterPrice'}, {model: PackageModel, as: 'package', include:[{model: ListPackageModel, as: 'listPackage'}]}]})
            category.dataValues.categoryType = category_type
            category.dataValues.subCategory = sub_page_category
            category.dataValues.subCategoryView = subCategoryView
            if (!category){
                return res.status(500).json({message: 'Запрашиваемая страница не найдена'})
            }else {
                return res.status(200).json(category)
            }
        }
    }
}
module.exports = new CategoryController()
