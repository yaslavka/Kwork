import React from "react";
import {Link} from "react-router-dom";

function FilterPrice({filterPrice}) {
    return (
        <>
            <div className={'clear popup-filter__prop'}>
                <label className={'popup-filter__radio-label'} role={"button"}>
                    <Link to={'#'} role={"button"} className={'popup-filter__radio-link'}>
                        <span className="popup-filter__prop-title">{filterPrice.name}</span>
                    </Link>
                </label>
            </div>
        </>
    )
}
export default FilterPrice