import React, {useState} from "react";

function SubCategori({podc, setList, setSubCategor, list, bacck}) {
    const [sub, setSub]=useState(false)
    const [icons, setIcons]=useState(false)
    return(
        <>
            {icons && (
                <>
                    <div className="mobile-menu__item-back">
                        <a onClick={()=>{setSub(false); setSubCategor(true); setList(true)}} className="mobile-menu__link-back mobile-menu__item-link-back" role={"button"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" fill="none" className="mobile-menu__arrow-back">
                                <path d="M2 7h13a6 6 0 0 1 6 6v1M2 7l6-6M2 7l6 6" stroke="#b8b8b8" strokeWidth="1.6" strokeLinecap="round"/>
                            </svg>
                            <div className="mobile-menu__item-title">{podc.label}</div>
                        </a>
                    </div>
                </>
            )}
         <div className={sub? "mobile-menu__item active":"mobile-menu__item"}>
             <a className="mobile-menu__link js-mobile-menu-open-sublist" role={"button"} onClick={()=>{setSub(true); setIcons(false); setList(false); setIcons(true)}}>
                 <span className="mobile-menu__title">{podc.label}</span>
                 {podc.arrow}
             </a>
         </div>

        </>
    )
}
export default SubCategori
