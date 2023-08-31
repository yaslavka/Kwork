import React from "react";

function SwipeComponent({item}) {
    return(
        <>
            <div className={'kw-wrapper'}>
                <div className={'banner-slider__image'}>
                    <picture>
                        <img className="swiper-lazy swiper-lazy-loaded"
                             src={item.image}
                             alt="" onError="imageLoadError(this)"
                             srcSet="https://cdn-edge.kwork.ru/images/index/banner-user-1@2x.png?ver=6 2x"/>
                    </picture>
                </div>
            </div>
            <div className={'banner-slider__strip'}>
                <div className={'kw-wrapper'}>
                    <div className={'banner-slider__inner'}>
                        <div className={'banner-slider__content'}>
                            <div className="banner-slider__stars">
                                <i className="icon icon-star active"/>
                                <i className="icon icon-star active"/>
                                <i className="icon icon-star active"/>
                                <i className="icon icon-star active"/>
                                <i className="icon icon-star active"/>
                            </div>
                            <div className="banner-slider__text">
                                <span className="banner-slider__name">
                                    {item.username} {' '}
                                </span>
                                <span className="banner-slider__profession">
                                    {item.rolle}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SwipeComponent
