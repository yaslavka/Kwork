import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { api, categoryImage } from '../../../api';
import { toast } from 'react-toastify';
import styles from './categoryPublick.module.scss';

function CategoryPublic({ children }) {
  const location = useLocation();
  const { t } = useTranslation('common');
  const [categoryPublicises, setCategoryPublicises] = useState(null);

  /*useEffect(()=>{
        api.listCategoryPages({pathname:location.pathname})
            .then((response)=>{
                setCategoryPublicises(response)
            })
            .catch((error)=>{
                toast.error(error.message)
            })
    },[location.pathname])*/
  return (
    <>
      <article className='tagcloud standart_cat_header cat-fon-repeat'>
        <div className='kw-wrapper kw-wrapper--1536'>
          <div className='bread-crump block-response bread-crump--pretty'>
            <ol className='mb0' itemscope='itemscope' itemtype='http://schema.org/BreadcrumbList'>
              <li
                itemprop='itemListElement'
                itemscope='itemscope'
                itemtype='http://schema.org/ListItem'
                data-item-type='category'
                data-level='1'>
                <Link to='https://kwork.ru/categories/design' data-href='https://kwork.ru/categories/design'>
                  <span itemProp='name' className='bread-crumb-title'>
                    Дизайн
                  </span>
                </Link>
                <meta itemProp='position' content='2' />
              </li>
              <li
                itemProp='itemListElement'
                itemScope='itemscope'
                itemType='http://schema.org/ListItem'
                data-item-type='category'
                data-level='2'>
                <Link
                  itemProp='item'
                  to='https://kwork.ru/categories/logo'
                  data-href='https://kwork.ru/categories/logo'>
                  <span itemProp='name' className='bread-crumb-title'>
                    Логотип и брендинг
                  </span>
                </Link>
                <meta itemProp='position' content='2' />
              </li>
              <li
                itemProp='itemListElement'
                itemScope='itemscope'
                itemType='http://schema.org/ListItem'
                data-item-type='attribute'
                data-level='1'>
                <Link itemProp='item' to='https://kwork.ru/categories/logo/logotipy'>
                  <span itemProp='name' className='bread-crumb-title'>
                    Логотипы
                  </span>
                </Link>
                <meta itemProp='position' content='3' />
              </li>
            </ol>
          </div>
        </div>
      </article>
      <article>
        <div className='tagcloud standart_cat_header categories-header cat-fon-repeat'>
          <div className='kw-wrapper kw-wrapper--1536'>
            <h1 className='catalog-header'>Дизайн логотипов</h1>
          </div>
        </div>
        <div className='kw-wrapper kw-wrapper--1536'>
          <div className='cat-header-tags cat-header-tags--pretty mt16'>
            <div className='cat-header-tags__wrap overflow-hidden js-cat-header-tags swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden'>
              <div className='cat-header-tags__wrap-inner swiper-wrapper'>
                <span className='cat-header-tags__item swiper-slide has-sub active swiper-slide-active'>
                  Логотипы
                  <span className='cat-header-tags__item-close'></span>
                </span>
                <span className='cat-header-tags__item swiper-slide swiper-slide-next'>
                  Новый логотип
                  <span className='cat-header-tags__item-close'></span>
                </span>
                <span className='cat-header-tags__item swiper-slide'>
                  Доработка лого
                  <span className='cat-header-tags__item-close'></span>
                </span>
              </div>
            </div>
            <div className='cat-header-tags__button left swiper-button-disabled js-cat-header-tags-btn-l swiper-button-lock'></div>
            <div className='cat-header-tags__button right swiper-button-disabled js-cat-header-tags-btn-r swiper-button-lock'></div>
          </div>
        </div>
      </article>
      <article className='base-filters-wrap'>
        <div className='kw-wrapper kw-wrapper--1536'>
          <div className='base-filters-block base-filters top-filters-panel__base-filters'>
            <div className='base-filters-content-wrapper'>
              <div className='base-filters-count-project desktop'>12 885 результатов</div>
              <div className='base-filters-content base-filters-content--pretty'>
                <div></div>
                <div className='kwork-list-display-mode sort-by_container'>
                  <div className='select-block'>
                    <div className='sort-block'>
                      <a
                        rel='nofollow'
                        data-field='sdisplay'
                        data-type='table'
                        href='https://kwork.ru/categories/logo/logotipy'
                        className='sort-option'>
                        <i className='icon ico-type-grid-sm'></i>
                      </a>
                      <a
                        rel='nofollow'
                        data-field='sdisplay'
                        data-type='list'
                        href='https://kwork.ru/categories/logo/logotipy?sdisplay=list'
                        className='sort-option mr5'>
                        <i className='icon ico-type-list-sm ico-type-list-sm_no-active'></i>
                      </a>
                    </div>
                    <div className='sort-custom-switcher custom-switcher'>
                      <div className='custom-switcher__wrapper'>
                        <span className='custom-switcher__header-title'>Сортировать:</span>
                        <div className='custom-switcher__header'>
                          <div className='custom-switcher__header-value'>
                            <span className='order-custom-switcher__value'>Рекомендуемые</span>
                            <svg
                              width='32'
                              height='32'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              className='custom-switcher__arrow'>
                              <path d='M12 14l4 4 4-4' stroke-width='1.6' stroke-linecap='round'></path>
                            </svg>
                          </div>
                          <div className='custom-switcher__list'>
                            <div className='custom-switcher__list-item active'>Рекомендуемые</div>
                            <div className='custom-switcher__list-item'>Новые</div>
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
      </article>
      <section className='page-filters kw-wrapper kw-wrapper--1536 kwork-list-cards kwork-list-cards--wide'>
        <div className='left-col js-kworks-filter-button-parent page-filters__filters'>
          <div className='left-col w230 js-kworks-filter kworks-filter popup-filter popup-filter--pretty'>
            <div className='popup-filter__header m-visible'>
              <div className='popup-filter__header-name'>Фильтры</div>
              <span className='popup-filter__close'>Отмена</span>
            </div>
            <div className='popup-filter__container'>
              <div className='popup-filter__group popup-filter__group--categories mt0'>
                <div className='kworks-filter-header m-hidden'>Рубрики</div>
                <h3 className='popup-filter__group-title popup-filter__group-title--big-offset m-visible'>
                  <span className='popup-filter__group-title-text'>Категории</span>
                </h3>
                <div className='allmusic filter-rubrics popup-filter__rubrics js-popup-filter-rubrics'>
                  <div className='popup-filter__rubrics-mark js-popup-filter-rubrics-mark' />
                  <div className='card__content-header popup-filter__rubrics-header'>
                    <a
                      href='https://kwork.ru/categories/design'
                      className='db link-color-black popup-filter__rubrics-link'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175' className='arrow-svg'>
                        <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                      </svg>
                      Дизайн
                    </a>
                  </div>
                  <div className='card__content-body popup-filter__rubrics-body'>
                    <ul id='foxdontshowcats' className='filter-rubrics__attributes'>
                      <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item'>
                        <a
                          href='https://kwork.ru/categories/logo'
                          className='category subId popup-filter__rubrics-link'>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175' className='arrow-svg'>
                            <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                          </svg>
                          Логотип и брендинг
                        </a>
                        <ul className='sub_cat_list popup-filter__rubrics-list popup-filter__rubrics-list--active'>
                          <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item active popup-filter__rubrics-item--active'>
                            <a
                              data-id='401928'
                              href='https://kwork.ru/categories/logo/logotipy'
                              className='f13 subId popup-filter__rubrics-link'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 477.175 477.175'
                                className='arrow arrow-svg'>
                                <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                              </svg>
                              Логотипы
                            </a>
                            <ul className='sub_cat_list popup-filter__rubrics-list'>
                              <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item'>
                                <a
                                  data-id='401933'
                                  href='https://kwork.ru/categories/logo/logotipy-noviy-logotip'
                                  className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 477.175 477.175'
                                    className='arrow arrow-svg hide'>
                                    <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                  </svg>
                                  Новый логотип
                                </a>
                                <ul className='sub_cat_list popup-filter__rubrics-list'>
                                  <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                    <a
                                      data-id='401939'
                                      href='https://kwork.ru/categories/logo/logotipy-noviy-logotip-vintazh-retro'
                                      className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 477.175 477.175'
                                        className='arrow arrow-svg hide'>
                                        <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                      </svg>
                                      Винтаж/ретро
                                    </a>{' '}
                                  </li>
                                  <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                    <a
                                      data-id='401942'
                                      href='https://kwork.ru/categories/logo/logotipy-noviy-logotip-3d'
                                      className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 477.175 477.175'
                                        className='arrow arrow-svg hide'>
                                        <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                      </svg>
                                      3D
                                    </a>{' '}
                                  </li>
                                  <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                    <a
                                      data-id='401945'
                                      href='https://kwork.ru/categories/logo/logotipy-noviy-logotip-ploskiy'
                                      className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 477.175 477.175'
                                        className='arrow arrow-svg hide'>
                                        <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                      </svg>
                                      Плоский
                                    </a>{' '}
                                  </li>
                                  <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                    <a
                                      data-id='401948'
                                      href='https://kwork.ru/categories/logo/logotipy-noviy-logotip-shriftoviy'
                                      className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 477.175 477.175'
                                        className='arrow arrow-svg hide'>
                                        <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                      </svg>
                                      Шрифтовый
                                    </a>{' '}
                                  </li>
                                  <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                    <a
                                      data-id='401951'
                                      href='https://kwork.ru/categories/logo/logotipy-noviy-logotip-geraldicheskiy'
                                      className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 477.175 477.175'
                                        className='arrow arrow-svg hide'>
                                        <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                      </svg>
                                      Геральдический
                                    </a>{' '}
                                  </li>
                                  <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                    <a
                                      data-id='401954'
                                      href='https://kwork.ru/categories/logo/logotipy-noviy-logotip-risovanniy-ot-ruki'
                                      className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 477.175 477.175'
                                        className='arrow arrow-svg hide'>
                                        <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                      </svg>
                                      Рисованный от руки
                                    </a>{' '}
                                  </li>
                                  <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                    <a
                                      data-id='401957'
                                      href='https://kwork.ru/categories/logo/logotipy-noviy-logotip-akvarelniy'
                                      className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 477.175 477.175'
                                        className='arrow arrow-svg hide'>
                                        <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                      </svg>
                                      Акварельный
                                    </a>{' '}
                                  </li>
                                </ul>
                              </li>
                              <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item'>
                                <a
                                  data-id='401969'
                                  href='https://kwork.ru/categories/logo/logotipy-dorabotka-logo'
                                  className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 477.175 477.175'
                                    className='arrow arrow-svg hide'>
                                    <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                  </svg>
                                  Доработка лого
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                          <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide'>
                            <a
                              data-id='401976'
                              href='https://kwork.ru/categories/logo/firmenniy-stil'
                              className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 477.175 477.175'
                                className='arrow arrow-svg hide'>
                                <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                              </svg>
                              Фирменный стиль
                            </a>
                            <ul className='sub_cat_list popup-filter__rubrics-list'>
                              <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                <a
                                  data-id='401980'
                                  href='https://kwork.ru/categories/logo/firmenniy-stil-firmennie-blanki'
                                  className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 477.175 477.175'
                                    className='arrow arrow-svg hide'>
                                    <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                  </svg>
                                  Фирменные бланки
                                </a>{' '}
                              </li>
                              <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                <a
                                  data-id='401983'
                                  href='https://kwork.ru/categories/logo/firmenniy-stil-brending'
                                  className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 477.175 477.175'
                                    className='arrow arrow-svg hide'>
                                    <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                  </svg>
                                  Брендинг
                                </a>{' '}
                              </li>
                              <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                <a
                                  data-id='401986'
                                  href='https://kwork.ru/categories/logo/firmenniy-stil-pechati-i-shtampy'
                                  className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 477.175 477.175'
                                    className='arrow arrow-svg hide'>
                                    <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                  </svg>
                                  Печати и штампы
                                </a>{' '}
                              </li>
                              <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                <a
                                  data-id='401989'
                                  href='https://kwork.ru/categories/logo/firmenniy-stil-kommerch-predlozhenie'
                                  className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 477.175 477.175'
                                    className='arrow arrow-svg hide'>
                                    <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                  </svg>
                                  Коммерч. предложение
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                          <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide'>
                            <a
                              data-id='402019'
                              href='https://kwork.ru/categories/logo/vizitki'
                              className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 477.175 477.175'
                                className='arrow arrow-svg hide'>
                                <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                              </svg>
                              Визитки
                            </a>
                            <ul className='sub_cat_list popup-filter__rubrics-list'>
                              <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                <a
                                  data-id='402023'
                                  href='https://kwork.ru/categories/logo/vizitki-sozdanie-novykh'
                                  className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 477.175 477.175'
                                    className='arrow arrow-svg hide'>
                                    <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                  </svg>
                                  Создание новых
                                </a>{' '}
                              </li>
                              <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                <a
                                  data-id='402026'
                                  href='https://kwork.ru/categories/logo/vizitki-gotovie-shablony-i-makety'
                                  className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 477.175 477.175'
                                    className='arrow arrow-svg hide'>
                                    <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                  </svg>
                                  Готовые шаблоны и макеты
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                          <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide'>
                            <a
                              data-id='402005'
                              href='https://kwork.ru/categories/logo/brendirovanie-i-suvenirka'
                              className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 477.175 477.175'
                                className='arrow arrow-svg hide'>
                                <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                              </svg>
                              Брендирование и сувенирка
                            </a>
                            <ul className='sub_cat_list popup-filter__rubrics-list'>
                              <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                <a
                                  data-id='402011'
                                  href='https://kwork.ru/categories/logo/brendirovanie-i-suvenirka-brendirovanie-avto'
                                  className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 477.175 477.175'
                                    className='arrow arrow-svg hide'>
                                    <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                  </svg>
                                  Брендирование авто
                                </a>{' '}
                              </li>
                              <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'>
                                <a
                                  data-id='402017'
                                  href='https://kwork.ru/categories/logo/brendirovanie-i-suvenirka-suveniry'
                                  className='f13 subId popup-filter__rubrics-link popup-filter__rubrics-link--children'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 477.175 477.175'
                                    className='arrow arrow-svg hide'>
                                    <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'></path>
                                  </svg>
                                  Сувениры
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className='custom-select-wrapper_theme_left-filter popup-filter__group'>
                  <div className='custom-select custom-select_theme_multiple popup-filter__multiple'>
                    <div className='custom-select__title popup-filter__group-title'>
                      <span className='popup-filter__group-title-text'>Услуга включает</span>
                    </div>
                    <span className='custom-select__filter-clear filter-clear link-color custom-checkbox__filter-clear hidden'>
                      Сбросить
                    </span>
                    <ul className='custom-select__list card__content-body popup-filter__props popup-filter__props-list'>
                      <li className='popup-filter__custom-select-item'>
                        <input
                          id='package_filter_186'
                          type='checkbox'
                          className='custom-select__list-checkbox popup-filter__checkbox-input m-hidden'
                          value='186'
                        />{' '}
                        <label htmlFor='package_filter_186' className='custom-select__list-item popup-filter__checkbox'>
                          В нескольких цветах
                        </label>
                      </li>
                      <li className='popup-filter__custom-select-item'>
                        <input
                          id='package_filter_187'
                          type='checkbox'
                          className='custom-select__list-checkbox popup-filter__checkbox-input m-hidden'
                          value='187'
                        />{' '}
                        <label htmlFor='package_filter_187' className='custom-select__list-item popup-filter__checkbox'>
                          Визуализация
                        </label>
                      </li>
                      <li className='popup-filter__custom-select-item'>
                        <input
                          id='package_filter_188'
                          type='checkbox'
                          className='custom-select__list-checkbox popup-filter__checkbox-input m-hidden'
                          value='188'
                        />{' '}
                        <label htmlFor='package_filter_188' className='custom-select__list-item popup-filter__checkbox'>
                          Фавикон
                        </label>
                      </li>
                      <li className='popup-filter__custom-select-item'>
                        <input
                          id='package_filter_189'
                          type='checkbox'
                          className='custom-select__list-checkbox popup-filter__checkbox-input m-hidden'
                          value='189'
                        />{' '}
                        <label htmlFor='package_filter_189' className='custom-select__list-item popup-filter__checkbox'>
                          Высокое разрешение
                        </label>
                      </li>
                      <li className='popup-filter__custom-select-item'>
                        <input
                          id='package_filter_190'
                          type='checkbox'
                          className='custom-select__list-checkbox popup-filter__checkbox-input m-hidden'
                          value='190'
                        />{' '}
                        <label htmlFor='package_filter_190' className='custom-select__list-item popup-filter__checkbox'>
                          Исходники
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='custom-select-wrapper_theme_left-filter popup-filter__group'>
                  <div className='custom-select custom-volume-wrapper'>
                    <div className='custom-volume clearfix'>
                      <div className='card__content-column'>
                        <div className='card__content-body popup-filter__props'>
                          <div className='popup-filter__custom-volume-wrapper custom-volume__input-wrapper'>
                            <div className='card__content-header popup-filter__group-title bold'>
                              <span className='popup-filter__group-title-text'>Количество логотипов</span>
                            </div>
                            <div className='custom-volume__input-box popup-filter__field'>
                              <input
                                type='text'
                                inputMode='numeric'
                                pattern='[0-9\\s]*'
                                autoComplete='off'
                                placeholder='От'
                                className='popup-filter__field-input custom-volume__input'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='price-filters__block popup-filter__group popup-filter__group_margin_mobile volume-price-filters__block js-test-volume-filter'>
                <div className='popup-filter__group popup-filter__combined-filter'>
                  <h3 className='popup-filter__group-title m-visible'>
                    <span className='popup-filter__group-title-text'>
                      Цена
                      <span className='popup-filter__currency m-visible'>
                        , <span className='rouble'>₽</span>
                      </span>
                    </span>
                  </h3>
                  <div className='card__content-column'>
                    <div className='card__content-header'>
                      <strong>Цена</strong>
                    </div>
                    <div className='card__content-body'>
                      <div className='m-mb65 js-set-price-block popup-filter__set-price-block popup-filter__props-list popup-filter__props-list--price'>
                        <div className='clear popup-filter__prop'>
                          <input
                            type='radio'
                            name='price'
                            className='js-kwork-filter-input js-kwork-price styled-radio js-kwork-filter-input-price popup-filter__radio'
                            value='_500'
                          />{' '}
                          <label className='popup-filter__radio-label'>
                            <a
                              href='https://kwork.ru/categories/logo/logotipy?price=_500'
                              className='popup-filter__radio-link'>
                              <span className='popup-filter__prop-title'>500 руб.</span>{' '}
                              <span className='popup-filter__prop-title--mob'>
                                500
                                <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                                  <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                                </svg>
                              </span>
                            </a>
                          </label>
                        </div>
                        <div className='clear popup-filter__prop'>
                          <input
                            type='radio'
                            name='price'
                            className='js-kwork-filter-input js-kwork-price styled-radio js-kwork-filter-input-price popup-filter__radio'
                            value='1000_3500'
                          />{' '}
                          <label className='popup-filter__radio-label'>
                            <a
                              href='https://kwork.ru/categories/logo/logotipy?price=1000_3500'
                              className='popup-filter__radio-link'>
                              <span className='popup-filter__prop-title'>1 000 руб. - 3 500 руб.</span>
                              <span className='popup-filter__prop-title--mob'>
                                1000 - 3500
                                <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                                  <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                                </svg>
                              </span>
                            </a>
                          </label>
                        </div>
                        <div className='clear popup-filter__prop'>
                          <input
                            type='radio'
                            name='price'
                            className='js-kwork-filter-input js-kwork-price styled-radio js-kwork-filter-input-price popup-filter__radio'
                            value='4000_27000'
                          />{' '}
                          <label className='popup-filter__radio-label'>
                            <a
                              href='https://kwork.ru/categories/logo/logotipy?price=4000_27000'
                              className='popup-filter__radio-link'>
                              <span className='popup-filter__prop-title'>4 000 руб. - 27 000 руб.</span>
                              <span className='popup-filter__prop-title--mob'>
                                4000 - 27000
                                <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                                  <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                                </svg>
                              </span>
                            </a>
                          </label>
                        </div>
                        <div className='clear popup-filter__prop'>
                          <input
                            type='radio'
                            name='price'
                            className='js-kwork-filter-input js-kwork-price styled-radio js-kwork-filter-input-price popup-filter__radio'
                            value='30000_'
                          />{' '}
                          <label className='popup-filter__radio-label'>
                            <a
                              href='https://kwork.ru/categories/logo/logotipy?price=30000_'
                              className='popup-filter__radio-link'>
                              <span className='popup-filter__prop-title'>30 000 руб. и выше</span>
                              <span className='popup-filter__prop-title--mob'>
                                от 30000
                                <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                                  <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                                </svg>
                              </span>
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className='price-filter-inputs-block'>
                        <div className='price-filter-input__box w100pi_mobile popup-filter__field'>
                          <span className='popup-filter__field-text'>от</span>{' '}
                          <input
                            type='number'
                            min='0'
                            step='1'
                            data-volume-name='volume_price_from'
                            data-price='from'
                            placeholder='От руб.'
                            autoComplete='off'
                            className='js-combined-filter-input popup-filter__field-input text-transform-normal'
                          />
                        </div>
                        <div className='price-filter-input__box ml10 w100pi_mobile popup-filter__field'>
                          <span className='popup-filter__field-text'>до</span>{' '}
                          <input
                            type='number'
                            min='0'
                            data-volume-name='volume_price_to'
                            data-price='to'
                            placeholder='До руб.'
                            autoComplete='off'
                            className='js-combined-filter-input popup-filter__field-input text-transform-normal'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='popup-filter__group'>
                <h3 className='popup-filter__group-title m-visible'>
                  <span className='popup-filter__group-title-text'>Уровень продавца</span>{' '}
                  <i
                    data-tooltip-text='<p> Продавцы с уровнем «Восходящая звезда», «Высший рейтинг» и «Высший рейтинг плюс» - это те, кто уже зарекомендовал себя на Kwork, и кому можно доверять.</p> <p>Данные продавцы должны выполнить не менее 10 заказов, из них не менее 90% должны быть успешными.</p>'
                    data-tooltip-class='popup-filter__tooltip'
                    className='icon-question-outlined tooltipster cur popup-filter__group-title-icon'></i>
                </h3>
                <div className='card__content-column'>
                  <div className='card__content-header'>
                    <strong>Уровень продавца</strong>{' '}
                    <span className='wrap-tooltip_circle wrap-tooltip_circle--scale-16 ml0'>
                      <span
                        data-tooltip-side='right'
                        data-tooltip-text='<p> Продавцы с уровнем «Восходящая звезда», «Высший рейтинг» и «Высший рейтинг плюс» - это те, кто уже зарекомендовал себя на Kwork, и кому можно доверять.</p> <p>Данные продавцы должны выполнить не менее 10 заказов, из них не менее 90% должны быть успешными.</p>'
                        data-tooltip-theme='dark'
                        className='tooltipster tooltip_circle tooltip_circle--light tooltip_circle--hover tooltip_circle--scale-16'>
                        ?
                      </span>
                    </span>
                  </div>
                  <div className='card__content-body popup-filter__props popup-filter__props-list'>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sellerlvl' className='styled-radio popup-filter__radio' value='1' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sellerlvl=1'
                          className='popup-filter__radio-link'>
                          Восходящая звезда и выше
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sellerlvl' className='styled-radio popup-filter__radio' value='2' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sellerlvl=2'
                          className='popup-filter__radio-link'>
                          Высший рейтинг и выше
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sellerlvl' className='styled-radio popup-filter__radio' value='3' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sellerlvl=3'
                          className='popup-filter__radio-link'>
                          Высший рейтинг плюс
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='popup-filter__group'>
                <h3 className='popup-filter__group-title m-visible'>
                  <span className='popup-filter__group-title-text'>Активность продавцов</span>
                </h3>
                <div className='card__content-column'>
                  <div className='card__content-header'>
                    <strong>Активность продавцов</strong>
                  </div>
                  <div className='card__content-body popup-filter__props popup-filter__props-list'>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sonline' className='styled-radio popup-filter__radio' value='online' />{' '}
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sonline=online'
                          className='popup-filter__radio-link'>
                          Онлайн
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sonline' className='styled-radio popup-filter__radio' value='1' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sonline=1'
                          className='popup-filter__radio-link'>
                          Заходил до 1 дн. назад
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sonline' className='styled-radio popup-filter__radio' value='3' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sonline=3'
                          className='popup-filter__radio-link'>
                          Заходил до 3 дн. назад
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sonline' className='styled-radio popup-filter__radio' value='7' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sonline=7'
                          className='popup-filter__radio-link'>
                          Заходил до 1 нед. назад
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sonline' className='styled-radio popup-filter__radio' value='14' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sonline=14'
                          className='popup-filter__radio-link'>
                          Заходил до 2 нед. назад
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='popup-filter__group attibute-review-filter'>
                <h3 className='popup-filter__group-title m-visible'>
                  <span className='popup-filter__group-title-text'>Положительных отзывов</span>
                  <i
                    data-tooltip-text='Количество положительных отзывов у продавца'
                    data-tooltip-class='popup-filter__tooltip'
                    className='icon-question-outlined tooltipster cur popup-filter__group-title-icon'></i>
                </h3>
                <div className='card__content-column'>
                  <div className='card__content-header'>
                    <strong>Положительных отзывов</strong>{' '}
                    <span className='wrap-tooltip_circle wrap-tooltip_circle--scale-16 ml0'>
                      <span
                        data-tooltip-side='right'
                        data-tooltip-text='Количество положительных отзывов у продавца'
                        data-tooltip-theme='dark'
                        className='tooltipster tooltip_circle tooltip_circle--light tooltip_circle--hover tooltip_circle--scale-16'>
                        ?
                      </span>
                    </span>
                  </div>
                  <div className='card__content-body popup-filter__props popup-filter__props-list'>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sminreview' className='styled-radio popup-filter__radio' value='1' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sminreview=1'
                          className='popup-filter__radio-link'>
                          От 1
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sminreview' className='styled-radio popup-filter__radio' value='5' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sminreview=5'
                          className='popup-filter__radio-link'>
                          От 5
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sminreview' className='styled-radio popup-filter__radio' value='20' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sminreview=20'
                          className='popup-filter__radio-link'>
                          От 20
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sminreview' className='styled-radio popup-filter__radio' value='100' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sminreview=100'
                          className='popup-filter__radio-link'>
                          От 100
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='popup-filter__group'>
                <h3 className='popup-filter__group-title m-visible'>
                  <span className='popup-filter__group-title-text'>Срок выполнения</span>{' '}
                  <i
                    data-tooltip-text='Укажите желаемый срок выполнения кворка'
                    data-tooltip-class='popup-filter__tooltip'
                    className='icon-question-outlined tooltipster cur popup-filter__group-title-icon'></i>
                </h3>
                <div className='card__content-column'>
                  <div className='card__content-header'>
                    <strong>Срок выполнения</strong>{' '}
                    <span className='wrap-tooltip_circle wrap-tooltip_circle--scale-16 ml0'>
                      <span
                        data-tooltip-side='right'
                        data-tooltip-text='Укажите желаемый срок выполнения кворка'
                        data-tooltip-theme='dark'
                        className='tooltipster tooltip_circle tooltip_circle--light tooltip_circle--hover tooltip_circle--scale-16'>
                        ?
                      </span>
                    </span>
                  </div>
                  <div className='card__content-body popup-filter__props fw400'>
                    <div className='popup-filter__props-list'>
                      <div className='popup-filter__prop'>
                        <input
                          type='radio'
                          name='sdeliverytime'
                          className='styled-radio popup-filter__radio'
                          value='1'
                        />
                        <label className='popup-filter__radio-label'>
                          <a
                            href='https://kwork.ru/categories/logo/logotipy?sdeliverytime=1'
                            className='popup-filter__radio-link'>
                            За 24 часа
                            <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                              <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                            </svg>
                          </a>
                        </label>
                      </div>
                      <div className='popup-filter__prop'>
                        <input
                          type='radio'
                          name='sdeliverytime'
                          className='styled-radio popup-filter__radio'
                          value='2'
                        />
                        <label className='popup-filter__radio-label'>
                          <a
                            href='https://kwork.ru/categories/logo/logotipy?sdeliverytime=2'
                            className='popup-filter__radio-link'>
                            До 2 дней
                            <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                              <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                            </svg>
                          </a>
                        </label>
                      </div>
                      <div className='popup-filter__prop'>
                        <input
                          type='radio'
                          name='sdeliverytime'
                          className='styled-radio popup-filter__radio'
                          value='3'
                        />
                        <label className='popup-filter__radio-label'>
                          <a
                            href='https://kwork.ru/categories/logo/logotipy?sdeliverytime=3'
                            className='popup-filter__radio-link'>
                            До 3 дней
                            <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                              <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                            </svg>
                          </a>
                        </label>
                      </div>
                      <div className='popup-filter__prop'>
                        <input
                          type='radio'
                          name='sdeliverytime'
                          className='styled-radio popup-filter__radio'
                          value='5'
                        />
                        <label className='popup-filter__radio-label'>
                          <a
                            href='https://kwork.ru/categories/logo/logotipy?sdeliverytime=5'
                            className='popup-filter__radio-link'>
                            До 5 дней
                            <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                              <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                            </svg>
                          </a>
                        </label>
                      </div>
                      <div className='popup-filter__prop'>
                        <input
                          type='radio'
                          name='sdeliverytime'
                          className='styled-radio popup-filter__radio'
                          value='10'
                        />{' '}
                        <label className='popup-filter__radio-label'>
                          <a
                            href='https://kwork.ru/categories/logo/logotipy?sdeliverytime=10'
                            className='popup-filter__radio-link'>
                            До 10 дней
                            <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                              <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                            </svg>
                          </a>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='popup-filter__group'>
                <h3 className='popup-filter__group-title m-visible'>
                  <span className='popup-filter__group-title-text'>Заказов в работе</span>{' '}
                  <i
                    data-tooltip-text='Укажите допустимое количество заказов, которые сейчас находятся в работе у продавца'
                    data-tooltip-class='popup-filter__tooltip'
                    className='icon-question-outlined tooltipster cur popup-filter__group-title-icon'></i>
                </h3>
                <div className='card__content-column'>
                  <div className='card__content-header'>
                    <strong>Заказов в работе</strong>{' '}
                    <span className='wrap-tooltip_circle wrap-tooltip_circle--scale-16 ml0'>
                      <span
                        data-tooltip-side='right'
                        data-tooltip-text='Укажите допустимое количество заказов, которые сейчас находятся в работе у продавца'
                        data-tooltip-theme='dark'
                        className='tooltipster tooltip_circle tooltip_circle--light tooltip_circle--hover tooltip_circle--scale-16'>
                        ?
                      </span>
                    </span>
                  </div>
                  <div className='card__content-body fw400 popup-filter__props popup-filter__props-list'>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sordersqueue' className='styled-radio popup-filter__radio' value='1' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sordersqueue=1'
                          className='popup-filter__radio-link'>
                          Нет
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sordersqueue' className='styled-radio popup-filter__radio' value='2' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sordersqueue=2'
                          className='popup-filter__radio-link'>
                          До 1
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sordersqueue' className='styled-radio popup-filter__radio' value='4' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sordersqueue=4'
                          className='popup-filter__radio-link'>
                          До 3
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sordersqueue' className='styled-radio popup-filter__radio' value='6' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sordersqueue=6'
                          className='popup-filter__radio-link'>
                          До 5
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                    <div className='popup-filter__prop'>
                      <input type='radio' name='sordersqueue' className='styled-radio popup-filter__radio' value='9' />
                      <label className='popup-filter__radio-label'>
                        <a
                          href='https://kwork.ru/categories/logo/logotipy?sordersqueue=9'
                          className='popup-filter__radio-link'>
                          До 8
                          <svg xmlns='http://www.w3.org/2000/svg' className='popup-filter__radio-cancel'>
                            <path d='M7.562.438a.525.525 0 00-.743 0L4 3.258 1.18.438a.525.525 0 10-.742.743L3.258 4 .438 6.82a.525.525 0 10.743.742L4 4.742l2.82 2.82a.525.525 0 10.742-.743L4.742 4l2.82-2.82a.525.525 0 000-.742z'></path>
                          </svg>
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='popup-filter__group'>
                <h3 className='popup-filter__group-title m-visible'>
                  <span className='popup-filter__group-title-text'>Теги</span>
                </h3>
                <div className='card__content-column options'>
                  <div className='allmusic ml0'>
                    <div className='card__content-header'>
                      <div className='showmorebtnx show-land'>
                        <span className='showSubLand relative cur'>Теги</span>
                      </div>
                    </div>
                    <div className='card__content-body popup-filter__props'>
                      <div className='sub_land'>
                        <ul className='sub_land_list mt5 p0'>
                          <li>
                            <a href='https://kwork.ru/land/logotip-dlya-kompanii' className='f13'>
                              Логотип для компании
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/logotip-dlya-sayta' className='f13'>
                              Логотип для сайта
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/logo-dlya-sayta' className='f13'>
                              Лого для сайта
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/logo-dlya-kompanii' className='f13'>
                              Лого для компании
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/narisovat-logotip' className='f13'>
                              Нарисовать логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/logo-dlya-biznesa' className='f13'>
                              Лого для бизнеса
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/firmenniy-znak' className='f13'>
                              Фирменный знак
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/kachestvenniy-logotip' className='f13'>
                              Качественный логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotka-emblemy' className='f13'>
                              Разработка эмблемы
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sozdat-logotip' className='f13'>
                              Создать логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotka-logotipa' className='f13'>
                              Разработка логотипа
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/unikalniy-logotip' className='f13'>
                              Уникальный логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sozdat-dizayn-logotipa' className='f13'>
                              Создать дизайн логотипа
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotka-dizayna-logotipa' className='f13'>
                              Разработка дизайна логотипа
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/individualniy-logotip' className='f13'>
                              Индивидуальный логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/kreativniy-logotip' className='f13'>
                              Креативный логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/professionalniy-logotip' className='f13'>
                              Профессиональный логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/vektorniy-logotip' className='f13'>
                              Векторный логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/stilniy-logotip' className='f13'>
                              Стильный логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/vektorniy-logo' className='f13'>
                              Векторный лого
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sdelat-logotip' className='f13'>
                              Сделать логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/logotip-dlya-biznesa' className='f13'>
                              Логотип для бизнеса
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/iskhodnik-logotipa' className='f13'>
                              Исходник логотипа
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/dizayn-logo' className='f13'>
                              Дизайн лого
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/narisovat-dizayn-logotipa' className='f13'>
                              Нарисовать дизайн логотипа
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/originalniy-logotip' className='f13'>
                              Оригинальный логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/3d-logotip' className='f13'>
                              3D логотип
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/eskiz-logotipa' className='f13'>
                              Эскиз логотипа
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/logotip-po-eskizu' className='f13'>
                              Логотип по эскизу
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/logo' className='f13'>
                              Лого
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/otrisovka-logotipa' className='f13'>
                              Отрисовка логотипа
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotka-logo' className='f13'>
                              Разработка лого
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/narisovat-logo' className='f13'>
                              Нарисовать лого
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sdelat-logo' className='f13'>
                              Сделать лого
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sozdat-logo' className='f13'>
                              Создать лого
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/vizitnaya-kartochka' className='f13'>
                              Визитная карточка
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/dizayn-vizitok' className='f13'>
                              Дизайн визиток
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/maket-vizitki' className='f13'>
                              Макет визитки
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/vizitka-dlya-biznesa' className='f13'>
                              Визитка для бизнеса
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/vizitnie-karty' className='f13'>
                              Визитные карты
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/dvustoronnyaya-vizitka' className='f13'>
                              Двусторонняя визитка
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/dizayn-vizitnoy-kartochki' className='f13'>
                              Дизайн визитной карточки
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/dizayn-maket-vizitki' className='f13'>
                              Дизайн-макет визитки
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/izgotovit-vizitku' className='f13'>
                              Изготовить визитку
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/originalniy-dizayn-vizitki' className='f13'>
                              Оригинальный дизайн визитки
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotat-dizayn-vizitki' className='f13'>
                              Разработать дизайн визитки
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotat-vizitnuyu-kartochku' className='f13'>
                              Разработать визитную карточку
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotat-maket-vizitki' className='f13'>
                              Разработать макет визитки
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/eksklyuzivnaya-vizitka' className='f13'>
                              Эксклюзивная визитка
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sdelat-vizitku' className='f13'>
                              Сделать визитку
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sdelat-dizayn-vizitki' className='f13'>
                              Сделать дизайн визитки
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sdelat-maket-vizitki' className='f13'>
                              Сделать макет визитки
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sozdat-vizitku' className='f13'>
                              Создать визитку
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sozdat-maket-vizitki' className='f13'>
                              Создать макет визитки
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/unikalnaya-vizitka' className='f13'>
                              Уникальная визитка
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/psd-vizitki' className='f13'>
                              PSD визитки
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/narisovat-vizitku' className='f13'>
                              Нарисовать визитку
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotat-vizitku' className='f13'>
                              Разработать визитку
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/maket-poligrafii' className='f13'>
                              Макет полиграфии
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/maket-pechati' className='f13'>
                              Макет печати
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/logotip-akvarelyu' className='f13'>
                              Логотип акварелью
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotat-dizayn-firmennogo-blanka' className='f13'>
                              Разработать дизайн фирменного бланка
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotka-firmennogo-logotipa' className='f13'>
                              Разработка фирменного логотипа
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sozdanie-firmennogo-stilya' className='f13'>
                              Создание фирменного стиля
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotka-brendbuka' className='f13'>
                              Разработка брендбука
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sozdanie-firmennogo-blanka' className='f13'>
                              Создание фирменного бланка
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/sozdat-firmenniy-blank-s-logotipom' className='f13'>
                              Создать фирменный бланк с логотипом
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotka-firmennogo-stilya' className='f13'>
                              Разработка фирменного стиля
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotat-dizayn-blanka' className='f13'>
                              Разработать дизайн бланка
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotka-brenda' className='f13'>
                              Разработка бренда
                            </a>
                          </li>
                          <li>
                            <a href='https://kwork.ru/land/razrabotka-firmennogo-blanka' className='f13'>
                              Разработка фирменного бланка
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button type='button' className='kworks-filter-button kworks-filter-button--pretty'>
            <span>Фильтры</span>{' '}
            <img
              src='https://cdn-edge.kwork.ru/images/filter-sliders-icon.svg'
              alt=''
              width='16'
              height='16'
              className='kworks-filter-button__icon'
            />{' '}
          </button>
        </div>
      </section>
    </>
    /*<div>
      <div className='all_page page-flex__content pt0 is_cat'></div>
      <div id='event_list' className='event-list js-event-list'></div>

      <div id='fox_notification_block'></div>

      <div className='js-cetegories-preloaders'>
        <div className='tagcloud standart_cat_header cat-fon-repeat t-align-l'>
          <div className='kw-wrapper kw-wrapper--1536'>
            <div className='bread-crump block-response bread-crump--pretty'>
              <img
                className='m-visible'
                src='https://cdn-edge.kwork.ru/images/categories/preloaders/breadcrumbs-mob.svg'
                alt='placeholder'
              />
              <img
                className='m-hidden'
                src='https://cdn-edge.kwork.ru/images/categories/preloaders/breadcrumbs-desktop.svg'
                alt='placeholder'
              />
            </div>
            <div className='catalog-header lh13'>
              <img
                className='m-visible'
                src='https://cdn-edge.kwork.ru/images/categories/preloaders/title-mob.svg'
                alt='placeholder'
              />
              <img
                className='m-hidden'
                src='https://cdn-edge.kwork.ru/images/categories/preloaders/title-desktop.svg'
                alt='placeholder'
              />
            </div>
          </div>
        </div>
        <div className='kw-wrapper kw-wrapper--1536'>
          <div className='cat-header-tags mt16'>
            <img src='https://cdn-edge.kwork.ru/images/categories/preloaders/tags.svg' alt='tags' />
          </div>
        </div>
        <div className='m-hidden kw-wrapper kw-wrapper--1536'>
          <img className='mw100' src='https://cdn-edge.kwork.ru/images/categories/preloaders/sort.svg' alt='tags' />
        </div>
        <div className='clear'></div>
        <div className='page-filters kw-wrapper kw-wrapper--1536 kwork-list-cards kwork-list-cards--wide'>
          <div className='left-col js-kworks-filter-button-parent page-filters__filters'>
            <img
              className='mw100 m-hidden'
              src='https://cdn-edge.kwork.ru/images/categories/preloaders/filter.svg'
              alt='filter'
            />
            <img
              className='mw100 m-visible'
              src='https://cdn-edge.kwork.ru/images/categories/preloaders/mob-filter.svg'
              alt='mob filter'
            />
          </div>
          <div className='right-col page-filters__content page-filters__content--preloader'>
            <div className='cusongslist clearfix kwork-card-data-wrap kwork-list-table'>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/pics/t4/32/19261672-64db3b89277e4.webp'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/pics/t4/25/8204971-1656404493.webp'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/pics/t4/23/3334907-1634330731.webp'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
              <div>
                <img
                  className='mw100 m-hidden'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table.svg'
                  alt='kwork-table'
                />
                <img
                  className='mw100 m-visible'
                  src='https://cdn-edge.kwork.ru/images/categories/preloaders/kwork-table-mob.svg'
                  alt='kwork-table'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/!*<div id="app">
                    <categories-view ref="categoriesView"></categories-view>
                </div>*!/}
    </div>*/
    /*<>
      {categoryPublicises ? (
        <>
          <div className={'all_page page-flex__content pt0'}>
            <div id='event_list' className='event-list js-event-list' />
            <div id='fox_notification_block' />
            <div className={'page-parent-category'}>
              <div className='page-parent-category__header'>
                sdfvsdfv
                <h1>{t(`${categoryPublicises[0].label}`)}</h1>
                <div>{t(`${categoryPublicises[0].subLabel}`)}</div>
              </div>
              <div className={'lg-centerwrap clearfix centerwrap'}>
                <div className={'subcategories-wrapper'}>
                  <div className={'subcategories-list m-hidden'}>
                    {categoryPublicises.map((category) => (
                      <>
                        <div className='subcategories-list__title'>{category.label}</div>
                        {category.categoryType.map((categoryType) => (
                          <>
                            <span className='subcategories-list__subtitle'>{categoryType.title}</span>
                            {categoryType.subCategory.map((subCategory) => (
                              <>
                                <Link
                                  className='subcategories-list__link'
                                  to='https://kwork.ru/categories/logo/logotipy'>
                                  {subCategory.label}
                                </Link>
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
                          {categoryPublicises[0].categoryType.map((categoryType) => (
                            <>
                              {categoryType.subCategory.map((subCategory) => (
                                <>
                                  {subCategory.images ? (
                                    <>
                                      <div className='collageSubcategories-col cards-layout-item'>
                                        <Link to={subCategory.route} className='collageSubcategories-item'>
                                          <picture>
                                            <img src={`${categoryImage}/${subCategory.images}`} alt='Логотипы' />
                                          </picture>
                                        </Link>
                                      </div>
                                    </>
                                  ) : (
                                    <></>
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
      ) : (
        <></>
      )}
      {children}
    </>*/
  );
}
export default CategoryPublic;
