import React from "react";

function IconBac({setCatalog, setCategory,label}) {
    return(
        <>
            <div className="mobile-menu__item-back">
                <a onClick={()=>{setCategory(false); setCatalog(false)}} className="mobile-menu__link-back mobile-menu__item-link-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" fill="none"
                     className="mobile-menu__arrow-back">
                    <path d="M2 7h13a6 6 0 0 1 6 6v1M2 7l6-6M2 7l6 6" stroke="#b8b8b8" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                    <div className="mobile-menu__item-title">{label}</div>
                </a>
            </div>
        </>
    )
}
export default IconBac
