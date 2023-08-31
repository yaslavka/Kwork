import React, {useState} from "react";
import IconBac from "../../IconBac";
import DesingMap from "../../desingMap";

function MenuItemMap({setCatalog, catalog, menu}) {

    const [category, setCategory]=useState(false)
    const [iconBac, setIconBac]=useState(false)


    return(
        <>
            <div id={menu.id} className={catalog? 'mobile-menu__item active':'mobile-menu__item'}>
                <a onClick={()=>{setCategory(true); setCatalog(true); setIconBac(true)}} className="mobile-menu__item-link js-mobile-menu-open-sublist">
                    <span className="mobile-menu__item-icon">
                        {menu.icon}
                    </span>
                    <span className="mobile-menu__item-title">{menu.label}</span>
                    {menu.arrow && menu.arrow}
                </a>
                <div id="mobile-catalog" className={category?'mobile-menu__sublist active': 'mobile-menu__sublist'}>
                    {iconBac && (
                        <IconBac setCatalog={setCatalog} setCategory={setCategory} label={"Каталог услуг"}/>
                    )}
                    {menu.catalog.map((catalogs)=>(
                        <DesingMap setCatalog={setCatalog} setCategory={setCategory} exit={setIconBac} key={catalog.id} catalog={catalogs}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default MenuItemMap
