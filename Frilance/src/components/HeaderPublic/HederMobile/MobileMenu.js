import React, {useState} from "react";
import mobileLogo from '../../../assets/images/index/logo.svg'
import MenuItemMap from "./MenuItemMap";
import fire from '../../../assets/images/mobile_menu/fire.svg'
import r from "../../../constants/routes.constants";

function MobileMenu({menu, setMenu, setModalAuth, setModalSignUp}) {
    const [catalog, setCatalog]=useState(false)

    const catalogs = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
            <path d="M0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm0 9a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-3zm9-9a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V2zm0 9a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3z" fill="#333"/>
        </svg>
    )
    const arrow = (
        <svg className="mobile-menu__item-arrow" xmlns="http://www.w3.org/2000/svg" width="7" height="10" fill="none">
            <path d="M1 1L5 5L1 9" stroke="#333" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
    )
    const pol = (
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.56794 0.741795C7.76081 0.410661 8.23919 0.410661 8.43206 0.741794L10.4754 4.24993C10.546 4.37123 10.6644 4.45725 10.8016 4.48696L14.7695 5.34618C15.144 5.42728 15.2918 5.88225 15.0365 6.168L12.3315 9.19537C12.2379 9.30005 12.1927 9.43922 12.2068 9.57889L12.6158 13.6181C12.6544 13.9993 12.2674 14.2805 11.9167 14.126L8.20162 12.4888C8.07317 12.4322 7.92683 12.4322 7.79838 12.4888L4.08327 14.126C3.73261 14.2805 3.34559 13.9993 3.38419 13.6181L3.79316 9.57889C3.8073 9.43923 3.76208 9.30005 3.66855 9.19537L0.963524 6.168C0.708197 5.88225 0.856022 5.42728 1.23055 5.34618L5.1984 4.48696C5.3356 4.45725 5.45399 4.37123 5.52464 4.24993L7.56794 0.741795Z" fill="#333333"/>
        </svg>
    )
    const help =(
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
            <path fillRule="evenodd" d="M14 7a7.01 7.01 0 0 0-7-7C3.14 0 0 3.12 0 7s3.14 7 7 7a7.01 7.01 0 0 0 7-7zM6.223 9.75c.03-.042.064-.082.1-.12l.005-.005c.324-.31.847-.31 1.168.005.155.15.24.355.24.568.004.103-.013.207-.05.304-.075.2-.24.36-.446.432a.8.8 0 0 1-.628 0c-.208-.073-.37-.23-.446-.432-.046-.095-.07-.2-.066-.304a1.05 1.05 0 0 1 0-.16.5.5 0 0 1 .05-.144.6.6 0 0 1 .074-.144zM4.76 4.2C5.203 3.457 6.022 3 6.91 3c1.036.008 1.958.638 2.31 1.58.467 1.246-.198 2.622-1.485 3.074V7.8c0 .442-.37.8-.826.8s-.826-.358-.826-.8V7c0-.442.37-.8.826-.8s.826-.358.826-.8-.37-.8-.826-.8a.83.83 0 0 0-.719.4l-.035.058c-.245.373-.755.483-1.14.246s-.5-.73-.254-1.104z" fill="#333"/>
        </svg>
    )

    const menuItemData = [
        {
            id: 1,
            label:'Каталог услуг',
            icon: catalogs,
            arrow: arrow,
            catalog: [
                {
                    id: 1,
                    label:'Дизайн',
                    arrow: arrow,
                    lists:[
                        {
                            id: 1,
                            label:'Логотип и брендинг',
                            arrow: arrow,
                            routess: [
                                {
                                    id: 1,
                                    label:'Логотип',
                                    icon: fire,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 2,
                                    label:'Фирменный стиль',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 3,
                                    label:'Визитки',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 4,
                                    label:'Брендирование и сувенирка',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                            ]
                        },
                        {
                            id: 2,
                            label:'Презентации и инфографика',
                            arrow: arrow,
                            routess: [
                                {
                                    id: 1,
                                    label:'Презентации',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 2,
                                    label:'Инфографика',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 3,
                                    label:'Инфографика',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                            ]
                        },
                        {
                            id: 3,
                            label:'Арт и иллюстрации',
                            arrow: arrow,
                            routess: [
                                {
                                    id: 1,
                                    label:'Портрет, шарж, карикатура',
                                    icon: fire,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 2,
                                    label:'Иллюстрации и рисунки',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 3,
                                    label:'Дизайн игр',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 4,
                                    label:'Тату, принты',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 5,
                                    label:'Стикеры',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 6,
                                    label:'NFT арт',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 7,
                                    label:'Готовые шаблоны и рисунки',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                            ]
                        },
                        {
                            id: 4,
                            label:'Веб и мобильный дизайн',
                            arrow: arrow,
                            routess: [
                                {
                                    id: 1,
                                    label:'Веб-дизайн',
                                    icon: fire,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 2,
                                    label:'Мобильный дизайн',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 3,
                                    label:'Email-дизайн',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 4,
                                    label:'Баннеры и иконки',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 5,
                                    label:'Юзабилити-аудит',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                            ]
                        },
                        {
                            id: 5,
                            label:'Маркетплейсы и соцсети',
                            arrow: arrow,
                            routess: [
                                {
                                    id: 1,
                                    label:'Дизайн в соцсетях',
                                    icon: fire,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 2,
                                    label:'Дизайн для маркетплейсов',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                            ]
                        },
                        {
                            id: 6,
                            label:'Интерьер и экстерьер',
                            arrow: arrow,
                            routess: [
                                {
                                    id: 1,
                                    label:'Интерьер',
                                    icon: fire,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 2,
                                    label:'Дизайн домов и сооружений',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 3,
                                    label:'Ландшафтный дизайн',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 4,
                                    label:'Дизайн мебели',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                            ]
                        },
                        {
                            id: 7,
                            label:'Обработка и редактирование',
                            arrow: arrow,
                            routess: [
                                {
                                    id: 1,
                                    label:'Отрисовка в векторе',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 2,
                                    label:'Фотомонтаж и обработка',
                                    icon: fire,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 3,
                                    label:'3D-графика',
                                    icon: fire,
                                    link: r.categoriesLogotip
                                },
                            ]
                        },
                        {
                            id: 8,
                            label:'Полиграфия',
                            arrow: arrow,
                            routess: [
                                {
                                    id: 1,
                                    label:'Брошюра и буклет',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 2,
                                    label:'Листовки и флаер',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 3,
                                    label:'Плакат и афиша',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 4,
                                    label:'Календарь и открытка',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 5,
                                    label:'Каталог, меню, книга',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 6,
                                    label:'Грамота и сертификат',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                            ]
                        },
                        {
                            id: 9,
                            label:'Промышленный дизайн',
                            arrow: arrow,
                            routess: [
                                {
                                    id: 1,
                                    label:'Электроника и устройства',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 2,
                                    label:'Предметы и аксессуары',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 3,
                                    label:'Упаковка и этикетка',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 2,
                    label:'Разработка и IT',
                    arrow: arrow,
                    lists:[
                        {
                            id: 1,
                            label:'Доработка и настройка сайта',
                            arrow: arrow,
                            routess:[
                                {
                                    id: 1,
                                    label:'Доработка сайта',
                                    icon: fire,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 2,
                                    label:'Настройка сайта',
                                    icon: fire,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 3,
                                    label:'Защита и лечение сайта',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 4,
                                    label:'Ускорение сайта',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 5,
                                    label:'Плагины и темы',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 6,
                                    label:'Исправление ошибок',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                            ]
                        },
                        {
                            id: 1,
                            label:'Создание сайтов',
                            arrow: arrow,
                            routess:[
                                {
                                    id: 1,
                                    label:'Новый сайт',
                                    icon: fire,
                                    link: r.categoriesLogotip
                                },
                                {
                                    id: 2,
                                    label:'Копия сайта',
                                    icon: null,
                                    link: r.categoriesLogotip
                                },
                            ]
                        },

                    ]
                },
            ]
        },
        {
            id: 2,
            label:'Полезное',
            icon: pol,
            arrow: arrow,
            catalog:  [
                {
                    id: 2,
                    label:'Полезное',
                    lists:null
                },
            ]
        },
        {
            id: 3,
            label:'Помощь',
            icon: help,
            arrow: arrow,
            catalog:  [
                {
                    id: 3,
                    label:'Вопрос-ответ',
                    lists:null
                },
            ]
        },
    ]
    return(
        <>
            <div className={menu? 'js-mobile-nav mobile-nav mobile-nav--modern mobile-nav--is--android': 'js-mobile-nav mobile-nav mobile-nav--modern mobile-nav--is--android hidden'}>
                <div className="js-mobile-nav-overlay mobile-nav__overlay" onClick={()=>{setMenu(false); setCatalog(false)}}/>
                <div id={'ktalog'} className={catalog? 'js-mobile-nav-list mobile-nav__list header-new-nav  unauthorized mobile-nav__list--active has-subopen' : 'js-mobile-nav-list mobile-nav__list header-new-nav  unauthorized mobile-nav__list--active' || menu? 'js-mobile-nav-list mobile-nav__list header-new-nav  unauthorized mobile-nav__list--active':'js-mobile-nav-list mobile-nav__list header-new-nav  unauthorized'}>
                    <div id={'ktalog'} className={catalog? 'mobile-menu unauthorized subopen':'mobile-menu unauthorized'}>
                        <div className="mobile-nav__header">
                            <div className="mobile-nav__header-close js-show-mobile-nav-link crossed" onClick={()=>{setMenu(false);setCatalog(false)}}/>
                            <a className="mobile-nav__header-logo" href="https://kwork.ru/">
                                <img className="js-header-theme-logo" src={mobileLogo} height="22" width="105" alt="mobile logo"/>
                            </a>
                        </div>
                        <a className="kw-button kw-button--green kw-button--size-40 kw-button--width-fixed mobile-nav__signup-button signup-js" role={"button"} onClick={()=>{setModalSignUp(true); setMenu(false); document.getElementById('body').classList.add('modal-open')}}>Регистрация</a>
                        <div id={'ktalog'} className={catalog? 'mobile-menu__items active':'mobile-menu__items'}>
                            <>
                                <div className="mobile-menu__item" onClick={()=>{setModalAuth(true); setMenu(false); document.getElementById('body').classList.add('modal-open')}}>
                                    <a className="mobile-menu__item-link login-js cur">
                                        <span className="mobile-menu__item-icon">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.09234 6.3L6.48524 4.6942L7.47897 3.7058L10.7816 7.0063L7.47757 10.2956L6.48594 9.3044L8.09795 7.7L1.0276e-06 7.7C0.353001 11.2315 3.34894 14 6.9821 14C10.8518 14 14 10.8591 14 7C14 3.1409 10.8518 2.0161e-07 6.98211 -1.36687e-07C3.34894 -4.54308e-07 0.353002 2.7678 1.14999e-06 6.3L8.09234 6.3Z" fill="#333"/>
                                            </svg>
                                        </span>
                                        <span className="mobile-menu__item-title">Вход</span>
                                    </a>
                                </div>
                                <div className="mobile-menu__item">
                                    <a href="https://kwork.ru/" className="mobile-menu__item-link">
                                        <span className="mobile-menu__item-icon mt-1">
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 7.18637C0 7.39134 0.0715241 7.55787 0.214572 7.68597C0.35762 7.81408 0.533762 7.87813 0.742996 7.87813C0.862558 7.87813 0.972513 7.85464 1.07286 7.80767C1.17321 7.7607 1.26395 7.69665 1.34508 7.61552L7.82067 1.69716C7.87618 1.64592 7.93596 1.6203 8.00002 1.6203C8.06834 1.6203 8.13025 1.64592 8.18576 1.69716L14.6549 7.61552C14.7403 7.69665 14.8332 7.7607 14.9336 7.80767C15.0339 7.85464 15.1417 7.87813 15.257 7.87813C15.4663 7.87813 15.6424 7.81408 15.7855 7.68597C15.9285 7.55787 16 7.39134 16 7.18637C16 7.07535 15.9808 6.9718 15.9424 6.87572C15.9039 6.77965 15.8314 6.68464 15.7246 6.59069L13.3355 4.40655V0.480202C13.3355 0.335019 13.2917 0.218659 13.2042 0.131122C13.1166 0.0435853 13.0003 -0.000183105 12.8551 -0.000183105H11.6637C11.5186 -0.000183105 11.4011 0.0435853 11.3115 0.131122C11.2218 0.218659 11.177 0.335019 11.177 0.480202V2.44018L9.01843 0.467392C8.71525 0.189837 8.37578 0.0510603 8.00001 0.0510603C7.62851 0.0510603 7.29118 0.189837 6.988 0.467392L0.275424 6.59071C0.168672 6.68465 0.0960804 6.77966 0.0576494 6.87574C0.0192186 6.97182 3.26967e-06 7.07537 3.26967e-06 7.18639L0 7.18637ZM2.21618 12.5923C2.21618 13.0663 2.36029 13.4399 2.64852 13.7132C2.93676 13.9865 3.32854 14.1231 3.82387 14.1231H6.32187V9.44738C6.32187 9.29793 6.36777 9.1773 6.45958 9.08549C6.55139 8.99368 6.67202 8.94778 6.82147 8.94778H9.18497C9.33869 8.94778 9.46039 8.99368 9.55006 9.08549C9.63973 9.1773 9.68457 9.29793 9.68457 9.44738V14.1231H12.1826C12.6779 14.1231 13.0697 13.9865 13.3579 13.7132C13.6461 13.4399 13.7903 13.0663 13.7903 12.5923V7.9678L8.17296 2.87571C8.11744 2.82447 8.05766 2.79885 7.99361 2.79885C7.92956 2.79885 7.86978 2.82661 7.81427 2.88212L2.21619 7.99341L2.21618 12.5923Z" fill="#333"/>
                                            </svg>
                                        </span>
                                        <span className="mobile-menu__item-title">На главную</span>
                                    </a>
                                </div>
                            </>
                            {menuItemData.map((menu)=>(
                                <MenuItemMap setCatalog={setCatalog} catalog={catalog} menu={menu} key={menu.id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MobileMenu
