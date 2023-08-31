import React from "react";

function LogoAndBrending({exit, logoAndBr, setLogoAndBr, lists}) {
    return(
        <>
            {logoAndBr && (
                <div className="mobile-menu__item-back">
                    <a onClick={()=>{exit(true); setLogoAndBr(false); document.querySelector('.mobile-catalog-a').classList.remove('open')}} className="mobile-menu__link-back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" fill="none" className="mobile-menu__arrow-back">
                            <path d="M2 7h13a6 6 0 0 1 6 6v1M2 7l6-6M2 7l6 6" stroke="#b8b8b8" strokeWidth="1.6" strokeLinecap="round"/>
                        </svg>
                        <div className="mobile-menu__item-title">{lists.label}</div>
                    </a>
                </div>
            )}
            <div className={'mobile-menu__item'}>
                {lists.routess && lists.routess.map((routess)=>(
                    <a href={routess.link} className="mobile-menu__link mobile-menu__link--lvl-3">
                        <span className="submenu-item__text js-menu-item">{routess.label}</span>
                        <span className="submenu-item__wrap-mark submenu-item__wrap-mark--hot">
                        <span data-tooltip-text="Очень популярная рубрика" data-tooltip-class="pointer-en" data-tooltip-thidden="true" className="submenu-item__icon tooltipster">
                            {routess.icon && (
                                <img src={routess.icon} alt="" className="submenu-item__icon-img"/>
                            )}
                        </span>
                    </span>
                    </a>
                ))}
            </div>
        </>
    )
}
export default LogoAndBrending
