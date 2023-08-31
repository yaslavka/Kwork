import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import SwipeComponent from "../SwiperSlide";

const data = [
    {
        id:1,
        image: '/images/index/banner-user-1.png?ver=6',
        username:'Евгения,',
        rolle: 'Поэт-фрилансер'
    },
    {
        id:2,
        image: '/images/index/banner-user-2.png?ver=6',
        username:'Евгения,',
        rolle: 'Поэт-фрилансер'
    },
    {
        id:3,
        image: '/images/index/banner-user-5.png?ver=6',
        username:'Евгения,',
        rolle: 'Поэт-фрилансер'
    },
]
function BannerHome() {
    return (
        <>
            <div className={'banner-market'}>
                <div className={'banner-slider__outer'}>
                    <div className={'banner-slider__inner'}>
                        <Swiper  spaceBetween={30}  modules={[Autoplay]}   autoplay containerClass={'banner-slider m-hidden js-banner-slider'}
                                 wrapperClass={'banner-slider__container swiper-wrapper'} >
                            {data.map((item)=>(
                                <SwiperSlide className={`banner-slider__item banner-slider__item--${item.id}`}>
                                    {/*swiper-slide banner-slider__item banner-slider__item--2 swiper-slide-duplicate-active*/}
                                    <SwipeComponent key={item.id} item={item}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className={'kw-wrapper'}>
                    <div className={'banner-market__inner'}>
                        <h1 className="kw-header--h1 p0">Покупайте фриланс-услуги <br/>в один клик</h1>
                        <div id="index-banner-search">
                            <div className="custom-search general-search-index">
                                <input name="" type="text"
                                       placeholder="Создать сайт на wix"
                                       autoComplete="off"
                                       spellCheck="false"
                                       className="form-control"/>
                                <input type="text" name="username" className="hidden"/>
                                <span className="search-button">
                                        <button className="button button-success">Найти</button>
                                    </span>
                            </div>
                        </div>
                        <div className="banner-market__popular mt16">
                            <div className="banner-market__popular-header kw-color--gray">Популярное:</div>
                            <div className="banner-market__popular-links">
                                <a className="banner-market__popular-link" href="https://kwork.ru/search?query=Веб дизайн">
                                    <span>Веб дизайн</span>
                                </a>
                                <a className="banner-market__popular-link" href="https://kwork.ru/search?query=Логотипы">
                                    <span>Логотипы</span>
                                </a>
                                <a className="banner-market__popular-link" href="https://kwork.ru/search?query=Дизайн соцсетей">
                                    <span>Дизайн соцсетей</span>
                                </a>
                                <a className="banner-market__popular-link" href="https://kwork.ru/search?query=Wordpress">
                                    <span>Wordpress</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BannerHome
