import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../header.module.scss';

function BusinessLifeCategory({ listItem, left }) {
  const [it, setIt] = useState(false);
  return (
    <section
      className={styles.liMenuItem}
      onClick={() => setIt(false)}
      onMouseOver={() => setIt(true)}
      onMouseOut={() => setIt(false)}>
      <Link
        to={`${listItem.business.route}`}
        className={
          it
            ? 'js-category-menu-item category-menu__list-item category-menu__list-item--hover'
            : 'js-category-menu-item category-menu__list-item'
        }>
        <span className={styles.itemMenu}>{listItem.business.label}</span>
      </Link>
      <div className={styles.menuBox} style={{ left: `${left}px` }}>
        <div className={'menulist'}>
          <div className={'submenu submenu--new'}>
            {listItem.business.col1 && (
              <div className={'submenu-column submenu-column--cols-3'}>
                {listItem.business.col1.map((col1, index) => (
                  <div key={index}>
                    <div className={'menutitle'}>
                      <span className='js-menu-item'>{col1.title}</span>
                    </div>
                    <div className={'submenu-group-wrapper'}>
                      <div className={'submenu-group-inner'}>
                        {col1.subCategory.map((subCategory, index) => (
                          <div key={index}>
                            {/*<Link to={subCategory?.route} className={'submenu-item'}>*/}
                            <Link to='#' className={'submenu-item'}>
                              <span className='submenu-item__text js-menu-item' onClick={() => setIt(false)}>
                                {subCategory.label}
                              </span>
                              {subCategory.icon ? (
                                <>
                                  <span className='submenu-item__wrap-mark submenu-item__wrap-mark--hot'>
                                    <span
                                      className='submenu-item__icon tooltipster'
                                      data-tooltip-text='Очень популярная рубрика'
                                      data-tooltip-class='pointer-en'
                                      data-tooltip-thidden='true'>
                                      <img
                                        className='submenu-item__icon-img'
                                        src='https://cdn-edge.kwork.ru/images/mobile_menu/fire.svg'
                                        alt='Популярный раздел логотипы'
                                      />
                                    </span>
                                  </span>
                                </>
                              ) : (
                                <></>
                              )}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {listItem.business.col2 && (
              <div className={'submenu-column submenu-column--cols-3'}>
                {listItem.business.col2.map((col2, index) => (
                  <div key={index}>
                    <div className={'menutitle'}>
                      <span className='js-menu-item'>{col2.title}</span>
                    </div>
                    <div className={'submenu-group-wrapper'}>
                      <div className={'submenu-group-inner'}>
                        {col2.subCategory.map((subCategory, index) => (
                          <div key={index}>
                            {/*<Link to={subCategory?.route} className={'submenu-item'}>*/}
                            <Link to='#' className={'submenu-item'}>
                              <span className='submenu-item__text js-menu-item' onClick={() => setIt(false)}>
                                {subCategory.label}
                              </span>
                              {subCategory.icon ? (
                                <>
                                  <span className='submenu-item__wrap-mark submenu-item__wrap-mark--hot'>
                                    <span
                                      className='submenu-item__icon tooltipster'
                                      data-tooltip-text='Очень популярная рубрика'
                                      data-tooltip-class='pointer-en'
                                      data-tooltip-thidden='true'>
                                      <img
                                        className='submenu-item__icon-img'
                                        src='https://cdn-edge.kwork.ru/images/mobile_menu/fire.svg'
                                        alt='Популярный раздел логотипы'
                                      />
                                    </span>
                                  </span>
                                </>
                              ) : (
                                <></>
                              )}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {listItem.business.col3 && (
              <div className={'submenu-column submenu-column--cols-3'}>
                {listItem.business.col3.map((col3, index) => (
                  <div key={index}>
                    <div className={'menutitle'}>
                      <span className='js-menu-item'>{col3.title}</span>
                    </div>
                    <div className={'submenu-group-wrapper'}>
                      <div className={'submenu-group-inner'}>
                        {col3.subCategory.map((subCategory, index) => (
                          <div key={index}>
                            {/*<Link to={subCategory?.route} className={'submenu-item'}>*/}
                            <Link to='#' className={'submenu-item'}>
                              <span className='submenu-item__text js-menu-item' onClick={() => setIt(false)}>
                                {subCategory.label}
                              </span>
                              {subCategory.icon ? (
                                <>
                                  <span className='submenu-item__wrap-mark submenu-item__wrap-mark--hot'>
                                    <span
                                      className='submenu-item__icon tooltipster'
                                      data-tooltip-text='Очень популярная рубрика'
                                      data-tooltip-class='pointer-en'
                                      data-tooltip-thidden='true'>
                                      <img
                                        className='submenu-item__icon-img'
                                        src='https://cdn-edge.kwork.ru/images/mobile_menu/fire.svg'
                                        alt='Популярный раздел логотипы'
                                      />
                                    </span>
                                  </span>
                                </>
                              ) : (
                                <></>
                              )}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default BusinessLifeCategory;
