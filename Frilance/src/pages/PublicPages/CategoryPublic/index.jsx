import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import starRating from '../../../assets/images/icons/user-level-top-rated.svg';
// import { api, categoryImage } from '../../../api';
// import { toast } from 'react-toastify';
// import styles from './categoryPublick.module.scss';
import { slider } from './mockData';
import styles from './categoryPublick.module.scss';
import rightArrow from '../../../assets/images/arrow-right.svg';
import cross from '../../../assets/images/cross-white.svg';
import {
  filterInputItem,
  linkPrice,
  levelSalesman,
  sellerActivity,
  positiveReviews,
  deadline,
  tags,
} from './arrayDataFilterDesignLogo';
import question from '../../../../src/assets/images/question-outlined.svg';

function CategoryPublic({ children }) {
  const location = useLocation();
  const { t } = useTranslation('common');
  const [categoryPublicises, setCategoryPublicises] = useState(null);

  const [open, setOpen] = useState(false);

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
    <section className={styles.designLogo}>
      <article className={styles.breadcrumbs}>
        <ul className={styles.breadcrumbsUl} itemScope='itemScope' itemType='http://schema.org/BreadcrumbList'>
          <li
            className={styles.breadcrumbsLi}
            itemProp='itemListElement'
            itemScope='itemScope'
            itemType='http://schema.org/ListItem'
            data-item-type='category'
            data-level='1'>
            <Link to='https://kwork.ru/categories/design' data-href='https://kwork.ru/categories/design'>
              <span itemProp='name' className={styles.breadCrumbTitle}>
                Дизайн
              </span>
            </Link>
            <img src={rightArrow} alt='right-arrow' />
            <meta itemProp='position' content='2' />
          </li>
          <li
            className={styles.breadcrumbsLi}
            itemProp='itemListElement'
            itemScope='itemScope'
            itemType='http://schema.org/ListItem'
            data-item-type='category'
            data-level='2'>
            <Link itemProp='item' to='https://kwork.ru/categories/logo' data-href='https://kwork.ru/categories/logo'>
              <span itemProp='name' className={styles.breadCrumbTitle}>
                Логотип и брендинг
              </span>
            </Link>
            <img src={rightArrow} alt='right-arrow' />
            <meta itemProp='position' content='2' />
          </li>
          <li
            itemProp='itemListElement'
            itemScope='itemScope'
            itemType='http://schema.org/ListItem'
            data-item-type='attribute'
            data-level='1'>
            <Link itemProp='item' to='https://kwork.ru/categories/logo/logotipy'>
              <span itemProp='name' className={styles.breadCrumbTitle}>
                Логотипы
              </span>
            </Link>
            <meta itemProp='position' content='3' />
          </li>
        </ul>
      </article>
      <article>
        <h1 className={styles.catalogHeader}>Дизайн логотипов</h1>
        <aside className={styles.menuBox}>
          <button className={styles.menuItem} type='button'>
            <span className={styles.menuItemDesc}>Логотипы</span>
            <img src={cross} alt='cross' />
          </button>
          <button className={styles.menuItem} type='button'>
            <span className={styles.menuItemDesc}>Новый логотип</span>
            {/*<img src={cross} alt='cross' />*/}
          </button>
          <button className={styles.menuItem} type='button'>
            <span className={styles.menuItemDesc}>Доработка лого</span>
            {/*<img src={cross} alt='cross' />*/}
          </button>
        </aside>
      </article>
      <article>
        <div className='base-filters-content-wrapper'>
          <div className='base-filters-count-project desktop'>12 885 результатов</div>
          <div className='base-filters-content base-filters-content--pretty'>
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
                          <path d='M12 14l4 4 4-4' strokeWidth='1.6' strokeLinecap='round'></path>
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
      </article>
      <section className={styles.designLogoWrapper}>
        <aside className={styles.filters}>
          <article className={styles.filtersWrapper}>
            <h4 className={styles.title}>Рубрики</h4>
            <div>
              <a href='https://kwork.ru/categories/design' className={styles.filterLink}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 477.175 477.175'
                  className='arrow-svg'
                  width='9'
                  height='9'>
                  <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z' />
                </svg>
                <span>Дизайн</span>
              </a>
              <a href='https://kwork.ru/categories/logo' className={styles.filterLink}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 477.175 477.175'
                  className='arrow-svg'
                  width='9'
                  height='9'>
                  <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z' />
                </svg>
                Логотип и брендинг
              </a>
              <a data-id='401928' href='https://kwork.ru/categories/logo/logotipy' className={styles.filterLink}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 477.175 477.175'
                  className='arrow-svg'
                  width='9'
                  height='9'>
                  <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z' />
                </svg>
                Логотипы
              </a>
              <a
                data-id='401933'
                href='https://kwork.ru/categories/logo/logotipy-noviy-logotip'
                className={styles.filterLink}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 477.175 477.175'
                  className='arrow-svg'
                  width='9'
                  height='9'>
                  <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z' />
                </svg>
                Новый логотип
              </a>
              <a
                data-id='401969'
                href='https://kwork.ru/categories/logo/logotipy-dorabotka-logo'
                className={styles.filterLink}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 477.175 477.175'
                  className='arrow-svg'
                  width='9'
                  height='9'>
                  <path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z' />
                </svg>
                Доработка лого
              </a>
              <div className='card__content-body popup-filter__rubrics-body'>
                <ul id='foxdontshowcats' className='filter-rubrics__attributes'>
                  <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item'>
                    <ul className='sub_cat_list popup-filter__rubrics-list popup-filter__rubrics-list--active'>
                      <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item active popup-filter__rubrics-item--active'>
                        <ul className='sub_cat_list popup-filter__rubrics-list'>
                          <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item'>
                            <ul className='sub_cat_list popup-filter__rubrics-list'>
                              <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item hide popup-filter__rubrics-item--hide'></li>
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
                          <li className='subcats popup-filter__rubrics-item js-popup-filter-rubrics-item'></li>
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
          </article>
          <article className={styles.filtersWrapper}>
            <h3 className={styles.filterTitle}>Услуга включает</h3>
            <button className={styles.filterBtn} type='button'>
              Сбросить
            </button>
            {filterInputItem.map((item, index) => (
              <label className={styles.checkboxLabel} key={index}>
                <input type='checkbox' className={styles.checkbox} hidden />
                <span className={styles.checkboxTitle}>{item}</span>
              </label>
            ))}
          </article>
          {/*Колличество логотипов*/}
          {/*<div className='custom-select-wrapper_theme_left-filter popup-filter__group'>
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
            </div>*/}
          <article className={styles.filtersWrapper}>
            <h3 className={styles.filterTitle}>Цена</h3>
            {linkPrice.map((item, index) => (
              <a className={styles.filterLink} href={`${item.link}`} key={index}>
                {item.price}.
              </a>
            ))}
            <div className={styles.inputBox}>
              <input
                type='number'
                min='0'
                step='1'
                data-volume-name='volume_price_from'
                data-price='from'
                placeholder='От руб.'
                autoComplete='off'
                className={styles.input}
              />
              <input
                type='number'
                min='0'
                data-volume-name='volume_price_to'
                data-price='to'
                placeholder='До руб.'
                autoComplete='off'
                className={styles.input}
              />
            </div>
          </article>
          <article className={styles.filtersWrapper}>
            <aside className={styles.filterTitleBox}>
              <h3 className={styles.filterTitle}>Уровень продавца</h3>
              <img className={styles.questionImg} src={question} height={14} width={14} alt='question' />
              <div className={styles.filterDescBox}>
                <p className={styles.filterDesc}>
                  Продавцы с уровнем «Восходящая звезда», «Высший рейтинг» и «Высший рейтинг плюс» - это те, кто уже
                  зарекомендовал себя на Kwork, и кому можно доверять.
                </p>
                <p>Данные продавцы должны выполнить не менее 10 заказов, из них не менее 90% должны быть успешными.</p>
              </div>
            </aside>
            {levelSalesman.map((item, index) => (
              <a className={styles.filterLink} href={`${item.link}`} key={index}>
                {item.level}.
              </a>
            ))}
          </article>
          <article className={styles.filtersWrapper}>
            <h3 className={styles.filterTitle}>Активность продавцов</h3>
            {sellerActivity.map((item, index) => (
              <a className={styles.filterLink} href={`${item.link}`} key={index}>
                {item.level}.
              </a>
            ))}
          </article>
          <article className={styles.filtersWrapper}>
            <h3 className={styles.filterTitle}>Положительных отзывов</h3>
            {positiveReviews.map((item, index) => (
              <a className={styles.filterLink} href={`${item.link}`} key={index}>
                {item.level}.
              </a>
            ))}
          </article>
          <article className={styles.filtersWrapper}>
            <h3 className={styles.filterTitle}>Срок выполнения</h3>
            {deadline.map((item, index) => (
              <a className={styles.filterLink} href={`${item.link}`} key={index}>
                {item.level}.
              </a>
            ))}
          </article>
          <article className={styles.filtersWrapper}>
            <button className={styles.filterBtn} onClick={() => setOpen(!open)} type='button'>
              Теги
            </button>
            <aside className={`${styles.text} ${open && styles.textOpen}`}>
              <ul className={styles.textBox}>
                {tags.map((item, index) => (
                  <li>
                    <a className={styles.filterLink} href={`${item.link}`} key={index}>
                      {item.level}.
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </article>
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
        </aside>
        <section id='catalog-cards'>
          {slider.map((item, index) => (
            <div
              key={index}
              data-id={item.id}
              className='cusongsblock js-kwork-card kwork-card-item
             kwork-card-item--update kwork-card-item--seller-level'>
              <div className='kwork-card-item__wrapper'>
                <div className='songperson cusongsblock__content kwork-card-item__left kwork-card-portfolio-wrapper kwork-card-item__preview'>
                  <Link
                    to={`${item.url}/${item.id}`}
                    className='ispinner-container kwcard-ppreview js-kwork-card-portfolio-preview js-lazy-load-carousel init js-lazy-load-without-viewport'>
                    <div className='thumbnail-img-load'>
                      <div className='ispinner-lite'></div>
                    </div>
                    <div className='kwcard-ppreview__wrapper'>
                      {item.images ? (
                        <img
                          // src={`http://192.168.1.56/api/category/images/${item.images}`}
                          src={`${item.images}`}
                          className='kwcard-ppreview__image'
                        />
                      ) : (
                        <img
                          src='https://cdn-edge.kwork.ru/pics/t4/79/140734-6440f45c764b6.webp'
                          className='kwcard-ppreview__image'
                        />
                      )}
                    </div>
                    <div className='kwcard-ppreview__button prev'></div>
                    <div className='kwcard-ppreview__button next'></div>
                    <div className='kwcard-ppreview__dots'>
                      <div className='kwcard-ppreview__dot active'></div>
                      <div className='kwcard-ppreview__dot'></div>
                      <div className='kwcard-ppreview__dot'></div>
                      <div className='kwcard-ppreview__dot'></div>
                      <div className='kwcard-ppreview__dot edge'></div>
                      <div className='kwcard-ppreview__dot hidden'></div>
                      <div className='kwcard-ppreview__dot hidden'></div>
                      <div className='kwcard-ppreview__dot hidden'></div>
                      <div className='kwcard-ppreview__dot hidden'></div>
                      <div className='kwcard-ppreview__dot hidden'></div>
                      <div className='kwcard-ppreview__dot hidden'></div>
                      <div className='kwcard-ppreview__dot hidden'></div>
                      <div className='kwcard-ppreview__dot hidden'></div>
                    </div>
                  </Link>
                  <div
                    className='kwork-card-portfolio-icon kwork-card-portfolio-icon--update tooltipster m-hidden js-kwork-card-portfolio-icon tooltipstered'
                    data-portfolio-id='10646107'
                    data-tooltip-text='Смотреть портфолио'
                    data-tooltip-side='top'
                    data-tooltip-delay='500, 50'
                    data-tooltip-interactive='false'>
                    {/*{item.icon && `http://192.168.1.56/api/category/images/${item.icon}`}*/}
                    {item.icon && item.icon}
                  </div>
                </div>
                <div className='kwork-card-item__content'>
                  <p className='kwork-card-item__title'>
                    <a
                      href='https://kwork.ru/logo/140734/sozdam-unikalniy-logotip-besplatnie-pravki'
                      title=''
                      className=''>
                      {' '}
                      <span className='first-letter breakwords force-font force-font--s14'>{item.title}</span>
                    </a>
                  </p>
                  <div className='kwork-card-item__info kwork-card-item__info--from'>
                    <div className='kwork-card-item__info-price price'>
                      <div className=''>
                        <span className='price-wrap'>
                          <span className='price-wrap__value force-font force-font--s15'>
                            от {item.price}&nbsp;<span className='rouble'>₽</span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='userdata kwork-card-item__userdata'>
                    <div className='kwork-card-item__username kwork-card-item__username--with-level'>
                      <div className='kwork-card-item__user-avatar'>
                        <i
                          data-user-id='13104'
                          className='js-user-online-block dot-user-status track--item__title-status dot-user-offline is-init'></i>
                        <span className='user-avatar t-user-avatar'>
                          <img src={item.user.avatar} alt='avatar' className='user-avatar__picture rounded' />
                        </span>
                      </div>
                      <div className='kwork-card-item__user-link-wrap'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <Link
                            to={`/user/${item.user.userName}`}
                            title={`${item.user.userName}`}
                            className='oneline-faded'>
                            {item.user.userName}
                          </Link>
                          <div className='kwork-card-item__rating cusongsblock-panel__rating d-flex align-items-center'>
                            <ul className='rating-block cusongsblock-panel__rating-list ul-outside'>
                              <li className='mr2 v-align-m'>
                                <i aria-hidden='true' className='fa fa-star gold'></i>
                              </li>
                              <li className='rating-block__rating-item--number fw600 v-align-m'>
                                {item.user.gradeRating}
                              </li>
                            </ul>
                            <span className='rating-block__count rating-block__count-star'>
                              ({item.user.countRating})
                            </span>
                          </div>
                        </div>
                        <div className='kwork-card-item__user-level-wrap kwork-card-item__user-level-wrap--2'>
                          <span className='kwork-card-item__user-level has-tooltip' data-original-title='null'>
                            <span className='kwork-card-item__user-level-icon'>
                              <img src={starRating} alt='rating star' />
                            </span>
                            {item.user.titleRating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-id='140734' className='kwork-card-item__favorites js-favorites-signup'>
                    <div
                      data-tooltip-text='Вы сможете заносить кворки в Избранное, когда <span class="js-favorites-signin kw-link" data-id="140734">авторизуетесь</span>'
                      className='dib tooltipster tooltipstered'>
                      <span className='cur kwork-icon icon-heart icon-heart-card icon-heart--card'>
                        {item.secondIcon && item.secondIcon}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
export default CategoryPublic;
