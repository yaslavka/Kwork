import React from "react";

function RubricsMap({items}) {
    return(
        <>
            <div id={items.id} className={'rubrics__item'}>
                <a className={'rubrics__link'} href={items.route}>
                    <picture className={'lazy-load_webp js-lazy-load-image lazy-load_initialized'}>
                      <img src={items.image} alt={''}/>
                    </picture>
                </a>
            </div>
        </>
    )
}
export default RubricsMap
