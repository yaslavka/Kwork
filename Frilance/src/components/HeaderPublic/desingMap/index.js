import React, {useState} from "react";
import DesingMapList from "./drsingMapList";

function DesingMap({exit, catalog}) {
    const [iconBac, setIconBac]=useState(false)
    const [desing, setDesing]=useState(false)
    if (desing === true){
        document.getElementById('mobile-catalog').classList.add('open')
    }

    return (
        <>
            <div id={catalog.id} className={desing? 'mobile-menu__item active':"mobile-menu__item"}>
                <a onClick={()=>{setDesing(true); exit(false); setIconBac(true)}} className="mobile-menu__link js-mobile-menu-open-sublist">
                    <span className="mobile-menu__title">{catalog.label}</span>
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="mobile-menu__arrow">
                        <path d="M1 7L4 4L1 1" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                </a>
                <div id="mobile-catalog-a" className={desing? 'mobile-menu__sublist active mobile-catalog-a':"mobile-menu__sublist"}>
                    {iconBac && (
                        <div className="mobile-menu__item-back">
                            <a onClick={()=>{setDesing(false); exit(true); setIconBac(false); document.getElementById('mobile-catalog').classList.remove('open')}} className="mobile-menu__link-back mobile-menu__item-link-back">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" fill="none"
                                     className="mobile-menu__arrow-back">
                                    <path d="M2 7h13a6 6 0 0 1 6 6v1M2 7l6-6M2 7l6 6" stroke="#b8b8b8" strokeWidth="1.6" strokeLinecap="round"/>
                                </svg>
                                <div className="mobile-menu__item-title">{catalog.label}</div>
                            </a>
                        </div>
                    )}
                    {catalog.lists && catalog.lists.map((lists)=>(
                        <DesingMapList exit={setIconBac} lists={lists} key={lists.id}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default DesingMap
