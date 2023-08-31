import React from "react";

function ChekInput({listPackage}) {

    return (
        <>
            <li key={listPackage.id} className={'popup-filter__custom-select-item'}>
                <input id={`package_filter_${listPackage.id}`} value={listPackage.id} type="checkbox" className="custom-select__list-checkbox popup-filter__checkbox-input m-hidden"/>
                <label htmlFor={`package_filter_${listPackage.id}`} className="custom-select__list-item popup-filter__checkbox">
                    {listPackage.name}
                </label>
            </li>
        </>
    )
}
export default ChekInput