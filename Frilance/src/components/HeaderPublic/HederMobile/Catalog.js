import React, {useState} from "react";
import MobileMenuCatalog from "./MobileMenuCatalog";

function Catalog({item, menuItem, setMenuItem, setCatalog, catalog}) {
    const [subCategor, setSubCategor]=useState(false)
    const [icons, setIcons]=useState(true)
    return (
        <>
            {/*open? 'mobile-menu__sublist active open' : catalog?'mobile-menu__sublist active' : 'mobile-menu__sublist'*/}
            <div id="mobile-catalog" className={menuItem ? 'mobile-menu__sublist active': 'mobile-menu__sublist' || subCategor? 'mobile-menu__sublist active open': 'mobile-menu__sublist active'}>
                {item.catalog && item.catalog.map((i)=>(
                    <>
                        {icons && (
                            <div className="mobile-menu__item-back">
                                <a onClick={()=>{setMenuItem(false); setCatalog(false)}} className="mobile-menu__link-back mobile-menu__item-link-back" role={"button"}>
                                    {i.iconBack}
                                    <div className="mobile-menu__item-title">{i.label}</div>
                                </a>
                            </div>
                        )}
                        {i.subCategori && i.subCategori.map((item)=>(
                            <>
                                <MobileMenuCatalog item={item} key={item.id} setCatalog={setCatalog} setIcons={setIcons} setMenuItem={setMenuItem} subCategor={subCategor} setSubCategor={setSubCategor}/>
                            </>
                        ))}
                    </>
                ))}
            </div>
        </>
    )
}
export default Catalog
