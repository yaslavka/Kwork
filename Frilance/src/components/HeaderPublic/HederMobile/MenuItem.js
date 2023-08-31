import React, {useState} from "react";
import Catalog from "./Catalog";

function MenuItem({item, setCatalog}) {
    const [menuItem, setMenuItem]=useState(false)
    return(
        <>
            <div className={menuItem? 'mobile-menu__item active':'mobile-menu__item'}>
                <a className={'mobile-menu__item-link login-js cur'} href={item.route && item.route} onClick={()=>{setCatalog(true); setMenuItem(true)}}>
                    <span className="mobile-menu__item-icon">
                        {item.icon}
                    </span>
                    <span className="mobile-menu__item-title">{item.label}</span>
                    {item.arrow && item.arrow}
                </a>
                {menuItem && (
                    <Catalog item={item} key={item.id} menuItem={menuItem} setMenuItem={setMenuItem} setCatalog={setCatalog}/>
                )}
            </div>
        </>
    )
}
export default MenuItem
