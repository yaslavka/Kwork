import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {api, categoryImage} from "../../../api";
import {toast} from "react-toastify";

function CategoryPublic({children}) {
    const location =useLocation()
    const {t} = useTranslation('common')
    const [categoryPublicises, setCategoryPublicises]=useState(null)

    useEffect(()=>{
        api.listCategoryPages({pathname:location.pathname})
            .then((response)=>{
                setCategoryPublicises(response)
            })
            .catch((error)=>{
                toast.error(error.message)
            })
    },[location.pathname])
    return (
        <>
            {categoryPublicises ? (
                <>
                    <div className={'all_page page-flex__content pt0'}>
                        <div id="event_list" className="event-list js-event-list"/>
                        <div id="fox_notification_block"/>
                        <div className={'page-parent-category'}>
                            <div className="page-parent-category__header">
                                <h1>{t(`${categoryPublicises[0].label}`)}</h1>
                                <div>{t(`${categoryPublicises[0].subLabel}`)}</div>
                            </div>
                            <div className={'lg-centerwrap clearfix centerwrap'}>
                                <div className={'subcategories-wrapper'}>
                                    <div className={'subcategories-list m-hidden'}>
                                        {categoryPublicises.map((category)=>(
                                            <>
                                                <div className="subcategories-list__title">{category.label}</div>
                                                {category.categoryType.map((categoryType)=>(
                                                    <>
                                                        <span className="subcategories-list__subtitle">{categoryType.title}</span>
                                                        {categoryType.subCategory.map((subCategory)=>(
                                                            <>
                                                                <Link className="subcategories-list__link" to="https://kwork.ru/categories/logo/logotipy">{subCategory.label}</Link>
                                                            </>
                                                        ))}
                                                    </>
                                                ))}
                                            </>
                                        ))}
                                    </div>
                                    <div className={'subcategories-collage'}>
                                        <div className={'collageSubcategories firstSubcategories-3'}>
                                            {categoryPublicises[0].categoryType && (
                                                <>
                                                    {categoryPublicises[0].categoryType.map((categoryType)=>(
                                                        <>
                                                            {categoryType.subCategory.map((subCategory)=>(
                                                                <>
                                                                    {subCategory.images ?(
                                                                        <>
                                                                            <div className="collageSubcategories-col cards-layout-item">
                                                                                <Link to={subCategory.route} className="collageSubcategories-item">
                                                                                    <picture>
                                                                                        <img src={`${categoryImage}/${subCategory.images}`} alt="Логотипы"/>
                                                                                    </picture>
                                                                                </Link>
                                                                            </div>
                                                                        </>
                                                                    ):(
                                                                        <>

                                                                        </>
                                                                    )}
                                                                </>
                                                            ))}
                                                        </>
                                                    ))}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
export default CategoryPublic