import React, {useState} from "react";
import LogoAndBrending from "./loandbrending";

function DesingMapList({exit, lists}) {
    const [logoAndBr, setLogoAndBr]=useState(false)
    if (logoAndBr === true){
        document.querySelector('.mobile-catalog-a').classList.add('open')
    }
    return(
        <>
            <div id={lists.id} className={logoAndBr? "mobile-menu__item active": "mobile-menu__item"}>
                <a onClick={()=>{exit(false); setLogoAndBr(true)}} className="mobile-menu__link js-mobile-menu-open-sublist">
                    <span className="mobile-menu__title">{lists.label}</span>
                    <span className="submenu-item__wrap-mark arrow-margin"/>
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="mobile-menu__arrow">
                        <path d="M1 7L4 4L1 1" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                </a>
                <div className={ logoAndBr? 'mobile-menu__sublist active':'mobile-menu__sublist'}>
                    <LogoAndBrending exit={exit} setLogoAndBr={setLogoAndBr} logoAndBr={logoAndBr} lists={lists}/>
                </div>
            </div>
        </>
    )
}
export default DesingMapList
