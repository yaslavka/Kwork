import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {api} from "../../../api";
import {toast} from "react-toastify";
import PopupMobileFilter from "../../../components/PopupMobileFilter";

function SubCategoryPublic({children}) {
    const location =useLocation()
    const {t} = useTranslation('common')
    const [gridActive, setGridActive]=useState(false)
    const [rowActive, setRowActive]=useState(false)
    const [sort, setSort]=useState('Рекомендуемые')
    const [openSort, setOpenSort]=useState(false)
    const [subCategoryPublicises, setSubCategoryPublicises]=useState(null)

    useEffect(()=>{
        api.listSubCategoryPages({pathname:location.pathname})
            .then((response)=>{
                setSubCategoryPublicises(response)
            })
            .catch((error)=>{
                toast.error(error.message)
            })
    },[location.pathname])

    console.log(subCategoryPublicises && subCategoryPublicises)
    return (
        <>
            {subCategoryPublicises ? (
                <>
                    <div className={'all_page page-flex__content header-new-nav is_cat'}>
                        <div id="app">
                            <>
                                <div>
                                    <div>
                                        <div className={'tagcloud standart_cat_header cat-fon-repeat'}>
                                            <div className={'kw-wrapper kw-wrapper--1536'}>
                                                <div className={'bread-crump block-response bread-crump--pretty'}>
                                                    <ol className={'mb0'}>
                                                        <>
                                                            <li>
                                                                <Link to={`${subCategoryPublicises.route}`}>
                                                                    <span itemProp="name" className="bread-crumb-title">{subCategoryPublicises.label}</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={`${subCategoryPublicises.categoryType?.route}`}>
                                                                    <span itemProp="name" className="bread-crumb-title">{subCategoryPublicises.categoryType.title}</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={`${subCategoryPublicises.subCategory.route}`}>
                                                                    <span itemProp="name" className="bread-crumb-title">{subCategoryPublicises.subCategory.label}</span>
                                                                </Link>
                                                            </li>
                                                        </>

                                                    </ol>
                                                </div>
                                                <h1 className="catalog-header">{subCategoryPublicises.subCategory.pagesLogotyp[0].name}</h1>
                                            </div>
                                        </div>
                                        <div className={'kw-wrapper kw-wrapper--1536'}>
                                            <div className={'cat-header-tags cat-header-tags--pretty mt16'}>
                                                <div className={'cat-header-tags__wrap overflow-hidden js-cat-header-tags swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden'}>
                                                    <div className={'cat-header-tags__wrap-inner swiper-wrapper'}>
                                                        {subCategoryPublicises.subCategoryView.map((subCategoryView)=>(
                                                            <>
                                                                <Link to={`${subCategoryView.route}`} className="cat-header-tags__item swiper-slide">
                                                                    {subCategoryView.name}
                                                                    <span className="cat-header-tags__item-close"/>
                                                                </Link>
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear m-visible"/>
                                    <div className={'base-filters-wrap'}>
                                        <div className={'kw-wrapper kw-wrapper--1536'}>
                                            <div className={'base-filters-block base-filters top-filters-panel__base-filters'}>
                                                <div className={'base-filters-content-wrapper'}>
                                                    <div className="base-filters-count-project desktop">
                                                        12 260 {subCategoryPublicises.subCategory.pagesLogotyp[0].countText}
                                                    </div>
                                                    <div className={'base-filters-content base-filters-content--pretty'}>
                                                        <div/>
                                                        <div className={'kwork-list-display-mode sort-by_container'}>
                                                            <div className={'select-block'}>
                                                                <div className={'sort-block'}>
                                                                    <a className={'sort-option'} role={"button"} href={'#'}>
                                                                        {!gridActive ? (
                                                                            <i className="icons ico-type-grid-sm"/>
                                                                        ):(
                                                                            <i className="icons ico-type-grid-sm ico-type-grid-sm_no-active" onClick={()=>{setGridActive(false);setRowActive(false)}}/>
                                                                        )}
                                                                    </a>
                                                                    <a className={'sort-option mr5'} role={"button"} href={'#'}>
                                                                        {rowActive ? (
                                                                            <i className="icons ico-type-list-sm"/>
                                                                        ):(
                                                                            <i className="icons ico-type-list-sm ico-type-list-sm_no-active" onClick={()=>{setGridActive(true);setRowActive(true)}}/>
                                                                        )}
                                                                    </a>
                                                                </div>
                                                                {/*opened sort-custom-switcher custom-switcher*/}
                                                                <div className={openSort ?'opened sort-custom-switcher custom-switcher' :'sort-custom-switcher custom-switcher'}>
                                                                    <div className={'custom-switcher__wrapper'}>
                                                                        <span className="custom-switcher__header-title">{t(`${subCategoryPublicises.subCategory.pagesLogotyp[0].sortText}`)}:</span>
                                                                        <div className={'custom-switcher__header'}>
                                                                            <div className="custom-switcher__header-value" onClick={()=>setOpenSort(!openSort)}>
                                                                                <span className="order-custom-switcher__value">{sort}</span>
                                                                                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className="custom-switcher__arrow">
                                                                                    <path d="M12 14l4 4 4-4" strokeWidth="1.6" strokeLinecap="round"/>
                                                                                </svg>
                                                                            </div>
                                                                            <div className={'custom-switcher__list'}>
                                                                                <div className="custom-switcher__list-item active" onClick={()=>{setSort('Рекомендуемые');setOpenSort(false)}}>
                                                                                    Рекомендуемые
                                                                                </div>
                                                                                <div className="custom-switcher__list-item" onClick={()=>{setSort('Новые');setOpenSort(false)}}>
                                                                                    Новые
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear"/>
                                    <div className={'page-filters kw-wrapper kw-wrapper--1536 kwork-list-cards kwork-list-cards--wide'}>
                                        <div className={'left-col js-kworks-filter-button-parent page-filters__filters'}>
                                            <div className={'left-col w230 js-kworks-filter kworks-filter popup-filter popup-filter--pretty'}>
                                                <PopupMobileFilter subCategoryPublicises={subCategoryPublicises}/>
                                            </div>
                                        </div>
                                        <div className={'right-col page-filters__content'}>

                                        </div>
                                    </div>

                                </div>
                            </>
                        </div>
                    </div>
                </>
            ):(
                <>

                </>
            )}
            {children}
        </>
    )
}
export default SubCategoryPublic