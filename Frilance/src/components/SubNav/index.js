import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";


function SubNav({category}) {
    const [categoryOpen, setCategoryOpen]=useState(false)
    return(
        <>
            <li className={'js-cat-menu-thin-item'} onMouseOver={()=>setCategoryOpen(true)} onMouseOut={()=>setCategoryOpen(false)}>
                <Link to={`${category.route}`} className={categoryOpen ?'js-category-menu-item category-menu__list-item js-cat-menu-thin-link category-menu__list-item--hover':'js-category-menu-item category-menu__list-item js-cat-menu-thin-link' }>
                    <span className="js-cat-menu-thin-span category-menu__list__inner category-menu__list__inner--new">{category.label}</span>
                </Link>
                <div style={{opacity: 1, display: categoryOpen?"block":"none"}} className={'menubox menubox-all'}>
                    <div className={'menulist'} style={{left: 0}}>
                        <Row md={3} className={'submenu submenu--new'}>
                            <Col md={3} sm className={"submenu-column submenu-column--cols-3"}>
                                {category.categoryType.map((col1)=>(
                                   <>
                                       <div className={'menutitle'}>
                                           <span className="js-menu-item">{col1.title}</span>
                                       </div>
                                       <div className={'submenu-group-wrapper'}>
                                           <div className={'submenu-group-inner'}>
                                               {col1.subCategory.map((subCategory)=>(
                                                   <>
                                                       <Link to={subCategory?.route} className={'submenu-item'}>
                                                           <span className="submenu-item__text js-menu-item">{subCategory.label}</span>
                                                           {subCategory.icon ? (
                                                               <>
                                                                   <span className="submenu-item__wrap-mark submenu-item__wrap-mark--hot">
                                                                       <span className="submenu-item__icon tooltipster" data-tooltip-text="Очень популярная рубрика" data-tooltip-class="pointer-en" data-tooltip-thidden="true">
                                                                           <img className="submenu-item__icon-img" src="https://cdn-edge.kwork.ru/images/mobile_menu/fire.svg" alt="Популярный раздел логотипы"/>
                                                                       </span>
                                                                   </span>
                                                               </>
                                                           ):(
                                                               <></>
                                                           )}
                                                       </Link>
                                                   </>
                                               ))}
                                           </div>
                                       </div>
                                   </>
                                ))}
                            </Col>
                        </Row>
                    </div>
                </div>
            </li>
        </>
    )
}
export default SubNav
