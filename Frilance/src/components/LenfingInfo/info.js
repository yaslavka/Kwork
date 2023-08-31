import React from "react";

function Info({item}) {
    return(
        <>
            <div id={item.id} className={'numbers__item'}>
                <div className="numbers__title js-animation-count active" data-count="402318">{item.count}</div>
                <div className="numbers__text">{item.title}</div>
            </div>
        </>
    )
}
export default Info
