import React, {useState} from "react";
import SubCategori from "./SubCategori";

function MobileMenuCatalog({setIcons, setSubCategor, subCategor, setMenuItem, setCatalog, item}) {
    const [list, setList]=useState(false)
    return (
        <>
            {list && (
                <>
                    <div className="mobile-menu__item-back">
                        <a onClick={()=>{setMenuItem(true); setCatalog(true); setIcons(true); setSubCategor(false); setList(false)}} className="mobile-menu__link-back mobile-menu__item-link-back" role={"button"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" fill="none" className="mobile-menu__arrow-back">
                                <path d="M2 7h13a6 6 0 0 1 6 6v1M2 7l6-6M2 7l6 6" stroke="#b8b8b8" strokeWidth="1.6" strokeLinecap="round"/>
                            </svg>
                            <div className="mobile-menu__item-title">{item.label}</div>
                        </a>
                    </div>
                </>
            )}
            <div className={subCategor? "mobile-menu__item active":"mobile-menu__item"}>
                <a className="mobile-menu__link js-mobile-menu-open-sublist" role={"button"} onClick={()=>{setSubCategor(true); setIcons(false); setList(true)}}>
                    <span className="mobile-menu__title">{item.label}</span>
                    {item.arrow}
                </a>
                {item.podCategori && item.podCategori.map((pod)=>(
                    <>
                        <SubCategori setSubCategor={setSubCategor} setList={setList} podc={pod} list={list} bacck={setIcons}  key={pod.id}/>
                    </>
                ))}
            </div>
        </>
    )
}
export default MobileMenuCatalog
