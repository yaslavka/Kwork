import React from "react";
import {Link} from "react-router-dom";
import ChekInput from "./chekInput";
import FilterPrice from "./Filterprice";

function PopupMobileFilter({subCategoryPublicises}) {

    return (
        <>
            <div className={'popup-filter__header m-visible'}>
                <div className="popup-filter__header-name">Фильтры</div>
                <span className="popup-filter__close">Отмена</span>
            </div>
            <div className={'popup-filter__container'}>
                <div className={'popup-filter__group popup-filter__group--categories mt0'}>
                    <div className="kworks-filter-header m-hidden">{subCategoryPublicises.subCategory.pagesLogotyp[0].headingsText}</div>
                    <h3 className="popup-filter__group-title popup-filter__group-title--big-offset m-visible">
                        <span className="popup-filter__group-title-text">Категории</span>
                    </h3>
                    <div className={'allmusic filter-rubrics popup-filter__rubrics js-popup-filter-rubrics'}>
                        <div className="popup-filter__rubrics-mark js-popup-filter-rubrics-mark" style={{top: "82px"}}/>
                        <div className="card__content-header popup-filter__rubrics-header">
                            <Link to={`${subCategoryPublicises.route}`} className="db link-color-black popup-filter__rubrics-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175" className="arrow-svg">
                                    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                                </svg>
                                {subCategoryPublicises.label}
                            </Link>
                        </div>
                        <div className={'card__content-body popup-filter__rubrics-body'}>
                            <ul id="foxdontshowcats" className={'filter-rubrics__attributes'}>
                                <li className={'subcats popup-filter__rubrics-item js-popup-filter-rubrics-item'}>
                                    <Link to={`${subCategoryPublicises.categoryType?.route}`} className="category subId popup-filter__rubrics-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175" className="arrow-svg">
                                            <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                                        </svg>
                                        {subCategoryPublicises.categoryType?.title}
                                    </Link>
                                    <ul className={'sub_cat_list popup-filter__rubrics-list popup-filter__rubrics-list--active'}>
                                        <li className={'subcats popup-filter__rubrics-item js-popup-filter-rubrics-item active popup-filter__rubrics-item--active'}>
                                            <Link data-id="401928" to={`${subCategoryPublicises.subCategory.route}`} className="f13 subId popup-filter__rubrics-link">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"
                                                     className="arrow arrow-svg">
                                                    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                                                </svg>
                                                {subCategoryPublicises.subCategory.label}
                                            </Link>
                                            <ul className={'sub_cat_list popup-filter__rubrics-list'}>
                                                {subCategoryPublicises.subCategoryView.map((subCategoryViews)=>(
                                                    <>
                                                        <li className={'subcats popup-filter__rubrics-item js-popup-filter-rubrics-item'}>
                                                            <Link data-id="401933" to={`${subCategoryViews.route}`} className="f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 477.175 477.175"
                                                                     className="arrow arrow-svg hide">
                                                                    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                                                                </svg>
                                                                {subCategoryViews.name}
                                                            </Link>
                                                        </li>
                                                    </>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div>
                    <div className={'custom-select-wrapper_theme_left-filter popup-filter__group'}>
                        <div className={'custom-select custom-select_theme_multiple popup-filter__multiple'}>
                            <div className="custom-select__title popup-filter__group-title">
                                <span className="popup-filter__group-title-text">{subCategoryPublicises.subCategory.pagesLogotyp[0].toolsText}</span>
                            </div>
                            <ul className={'custom-select__list card__content-body popup-filter__props popup-filter__props-list'}>
                                {subCategoryPublicises.subCategoryView[0].filter.map((listPackage)=>(
                                    <>
                                        <ChekInput listPackage={listPackage} key={listPackage.id}/>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={'custom-select-wrapper_theme_left-filter popup-filter__group'}>
                        <div className={'custom-select custom-volume-wrapper'}>
                            <div className={'custom-volume clearfix'}>
                                <div className={'card__content-column'}>
                                    <div className={'card__content-body popup-filter__props'}>
                                        <div className={'popup-filter__custom-volume-wrapper custom-volume__input-wrapper'}>
                                            <div className="card__content-header popup-filter__group-title bold">
                                                <span className="popup-filter__group-title-text">
                                                    {subCategoryPublicises.subCategory.pagesLogotyp[0].countsText}
                                                </span>
                                            </div>
                                            <div className={'custom-volume__input-box popup-filter__field'}>
                                                <input
                                                    type="text"
                                                    inputMode="numeric"
                                                    pattern="[0-9\\s]*"
                                                    autoComplete="off"
                                                    placeholder="От"
                                                    className="popup-filter__field-input custom-volume__input"
                                                />
                                                <div className="popup-filter__field-clear custom-volume__filter-clear"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'price-filters__block popup-filter__group popup-filter__group_margin_mobile volume-price-filters__block js-test-volume-filter'}>
                    <div className={'popup-filter__group popup-filter__combined-filter'}>
                        {/*<h3 className="popup-filter__group-title m-visible">*/}
                        {/*    <span className="popup-filter__group-title-text">Цена*/}
                        {/*        <span className="popup-filter__currency m-visible">, */}
                        {/*            <span className="rouble">₽</span>*/}
                        {/*        </span>*/}
                        {/*    </span>*/}
                        {/*</h3>*/}
                        <div className={'card__content-column'}>
                            <div className="card__content-header">
                                <strong> {subCategoryPublicises.subCategory.pagesLogotyp[0].priceText}</strong>
                            </div>
                            <div className={'card__content-body'}>
                                <div className={'m-mb65 js-set-price-block popup-filter__set-price-block popup-filter__props-list popup-filter__props-list--price'}>
                                    {subCategoryPublicises.subCategoryView[0].filterPrice.map((filterPrice)=>(
                                        <>
                                            <FilterPrice filterPrice={filterPrice} key={filterPrice.id}/>
                                        </>
                                    ))}
                                </div>
                                <div className={'price-filter-inputs-block'}>
                                    <div className={'price-filter-input__box w100pi_mobile popup-filter__field'}>

                                    </div>
                                    <div className={'price-filter-input__box ml10 w100pi_mobile popup-filter__field'}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PopupMobileFilter