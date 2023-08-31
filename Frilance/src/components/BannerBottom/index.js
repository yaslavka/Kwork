import React from "react";

function BannerBottom({setModalSignUp}) {
    return(
        <>
            <div className="banner-bottom js-animation-banner">
                <div className="kw-wrapper">
                    <div className="banner-bottom__bg js-bg-banner optimize m-hidden lazy-load_initialized loaded"
                         data-style={{backgroundImage: "url(https://cdn-edge.kwork.ru/images/index/banner-bg-bottom.jpg)"}}
                         style={{backgroundImage: "url(https://cdn-edge.kwork.ru/images/index/banner-bg-bottom.jpg)"}}/>
                    <div className="banner-bottom__bg banner-bottom__bg--mobile js-lazy-load-image js-lazy-load-image-bg optimize m-visible"
                         data-style={{backgroundImage: "url(https://cdn-edge.kwork.ru/images/index/banner-bg-bottom-mobile.jpg);"}}/>
                    <div className="banner-bottom__inner">
                        <h2 className="kw-header--h2 p0">
                            Закажите услуги фрилансеров прямо сейчас
                        </h2>
                        <div className="banner-bottom__text">Быстро, просто и безопасно!</div>
                        <button className="banner-bottom__link kw-button kw-button--green signup-js" onClick={()=>{setModalSignUp(true); document.getElementById('body').classList.add('modal-open')}}>Начать</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BannerBottom
