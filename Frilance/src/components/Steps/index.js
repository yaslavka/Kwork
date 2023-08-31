import React, {useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Steps() {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return(
        <>
            <div className={'steps m-hidden js-animation-steps'}>
                <div className={'kw-wrapper'}>
                    <div className="steps__header">
                        <h2 className="kw-header--h2 p0">Как решать задачи на Kwork</h2>
                        <div className="steps__header-text">Идеально подходит для бизнеса и для себя</div>
                    </div>
                    <div className="steps__items">
                        <div className="steps__item js-animation-step">
                            <div className="steps__item-inner steps__item--choose">
                                <div className="steps__image"><img className="js-lazy-load-image lazy-load_initialized"
                                                                   data-src="https://cdn-edge.kwork.ru/images/index/steps-choose.svg"
                                                                   alt=""
                                                                   src="https://cdn-edge.kwork.ru/images/index/steps-choose.svg"/>
                                </div>
                                <div className="steps__item-right"><h4 className="steps__title kw-header--h4">Выберите
                                    услугу</h4>
                                    <div className="steps__text kw-text--14">В магазине Kwork представлен <br/> большой
                                        выбор услуг <br/> от профессионалов.</div>
                                </div>
                                <div className="steps__arrow steps__arrow--choose js-animation-arrow js-animation-arrow-choose" style={{opacity:1}}>
                                    <img className="js-lazy-load-image lazy-load_initialized" data-src="https://cdn-edge.kwork.ru/images/index/steps-choose-arrow.svg" alt=""
                                    src="https://cdn-edge.kwork.ru/images/index/steps-choose-arrow.svg"/>
                                </div>
                            </div>
                        </div>
                        <div className="steps__item js-animation-step">
                            <div className="steps__item-inner steps__item--pay">
                                <div className="steps__image">
                                    <img className="js-lazy-load-image lazy-load_initialized"
                                         data-src="https://cdn-edge.kwork.ru/images/index/steps-pay.svg"
                                         alt=""
                                         src="https://cdn-edge.kwork.ru/images/index/steps-pay.svg"/>
                                </div>
                                <div className="steps__item-right">
                                    <h4 className="steps__title kw-header--h4">Оплатите</h4>
                                    <div className="steps__text kw-text--14">
                                        Деньги будут перечислены продавцу <br/> после того, как он выполнит работу, <br/>и вы её одобрите.
                                    </div>
                                </div>
                                <div
                                    className="steps__arrow steps__arrow--pay js-animation-arrow js-animation-arrow-pay" style={{opacity:1}}>
                                    <img
                                    className="js-lazy-load-image lazy-load_initialized"
                                    data-src="https://cdn-edge.kwork.ru/images/index/steps-pay-arrow.svg" alt=""
                                    src="https://cdn-edge.kwork.ru/images/index/steps-pay-arrow.svg"/></div>
                            </div>
                        </div>
                        <div className="steps__item js-animation-step">
                            <div className="steps__item-inner steps__item--result">
                                <div className="steps__image">
                                    <img className="js-lazy-load-image lazy-load_initialized"
                                         data-src="https://cdn-edge.kwork.ru/images/index/steps-result.svg"
                                         alt=""
                                         src="https://cdn-edge.kwork.ru/images/index/steps-result.svg"/>
                                </div>
                                <div className="steps__item-right">
                                    <h4 className="steps__title kw-header--h4">
                                        Получите результат</h4>
                                    <div className="steps__text kw-text--14">
                                        100% гарантия возврата средств <br/> в
                                        случае невыполнения заказа.
                                    </div>
                                </div>
                                <div
                                    className="steps__arrow steps__arrow--result js-animation-arrow js-animation-arrow-result" style={{opacity:1}}>
                                    <img
                                    className="js-lazy-load-image lazy-load_initialized"
                                    data-src="https://cdn-edge.kwork.ru/images/index/steps-result-arrow.svg" alt=""
                                    src="https://cdn-edge.kwork.ru/images/index/steps-result-arrow.svg"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Steps
