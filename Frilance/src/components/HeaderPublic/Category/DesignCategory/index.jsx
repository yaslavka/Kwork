import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function DesignCategory({ listItem }) {
  const [design, setDesign] = useState(false);
  const { t } = useTranslation('common');
  // console.log('subCategory?.route >>', subCategory?.route);

  return (
    <>
      <li
        className={'js-cat-menu-thin-item'}
        onClick={() => setDesign(false)}
        onMouseOver={() => setDesign(true)}
        onMouseOut={() => setDesign(false)}>
        <Link
          to={`${listItem.design.route}`}
          className={
            design
              ? 'js-category-menu-item category-menu__list-item js-cat-menu-thin-link category-menu__list-item--hover'
              : 'js-category-menu-item category-menu__list-item js-cat-menu-thin-link'
          }>
          <span className='js-cat-menu-thin-span category-menu__list__inner category-menu__list__inner--new'>
            {t(listItem.design.label)}
          </span>
        </Link>
        <div style={{ opacity: 1, display: design ? 'block' : 'none' }} className={'menubox menubox-all'}>
          <div className={'menulist'} style={{ left: 0 }}>
            <div className={'submenu submenu--new'}>
              {listItem.design.col1 && (
                <div className={'submenu-column submenu-column--cols-3'}>
                  {listItem.design.col1.map((col1, index) => (
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
                                <span className='submenu-item__text js-menu-item' onClick={() => setDesign(false)}>
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
              {listItem.design.col2 && (
                <div className={'submenu-column submenu-column--cols-3'}>
                  {listItem.design.col2.map((col2, index) => (
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
                                <span className='submenu-item__text js-menu-item' onClick={() => setDesign(false)}>
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
              {listItem.design.col3 && (
                <div className={'submenu-column submenu-column--cols-3'}>
                  {listItem.design.col3.map((col3, index) => (
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
                                <span className='submenu-item__text js-menu-item' onClick={() => setDesign(false)}>
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
      </li>
    </>
  );
}
export default DesignCategory;
