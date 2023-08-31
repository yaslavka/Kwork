import React, {useState} from "react";

function HelpBuisness(){
    const [play, setPlay]=useState(false)
    return(
        <>
            <div className={'help-buisness'}>
                <div className={'kw-wrapper'}>
                    <div className={'help-buisness__inner'}>
                        <div className={'help-buisness__content'}>
                            <h2 className="kw-header--h2 p0">Как Kwork помогает бизнесу</h2>
                            <div className="help-buisness__items">
                                <div className="help-buisness__item">Оплачивайте с р/с или карты компании</div>
                                <div className="help-buisness__item">Экономьте до 87% бюджета на фрилансе</div>
                                <div className="help-buisness__item">Экономьте до 75% времени на решении фриланс задач
                                </div>
                            </div>
                        </div>
                        <div className={'promo-video js-youtube-modal-open'} onClick={()=>setPlay(true)}>
                            <img className="js-lazy-load-image lazy-load_initialized"
                                 src="https://cdn-edge.kwork.ru/images/youtube-modal/youtube-bg-min-ru.jpg"
                                 data-src="https://cdn-edge.kwork.ru/images/youtube-modal/youtube-bg-min-ru.jpg"
                                 data-srcset="https://cdn-edge.kwork.ru/images/youtube-modal/youtube-bg-min-ru@2x.jpg 2x"
                                 data-inviewport-bottom="-600" alt=""/>
                                 <div className={'promo-video__link'}>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none"><path d="M.575 20.875V.625l19.35 10.125L.575 20.875z" fill="#fff"/></svg>
                                 </div>
                        </div>
                        {play && (
                            <>
                                <div id="app-youtube-modal" onClick={()=>setPlay(false)}>
                                    <div className={'k-modal-outer k-modal--youtube'}>
                                        <div className={'k-modal-overlay'}>
                                            <div className={'k-modal-dialog'}>
                                                <div className={'k-modal-content player-init'}>
                                                    <div className={'k-modal-content__body'}>
                                                        <div className="k-modal-content__header-close" onClick={()=>setPlay(false)}/>
                                                        <div className={'youtube-replay'} style={{display: "none"}}>
                                                            <img src="https://cdn-edge.kwork.ru/images/youtube-modal/youtube-bg.jpg" alt=""/>
                                                            <div className="youtube-replay__link">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="81"
                                                                     fill="none">
                                                                    <path d="M41 16.875V7.459c0-1.519-1.822-2.261-2.869-1.181L25.306 19.069a1.67 1.67 0 0 0 0 2.396l12.791 12.791c1.08 1.046 2.902.304 2.902-1.215v-9.416c12.589 0 22.545 11.542 19.778 24.604-1.586 7.661-7.796 13.837-15.424 15.424-12.049 2.531-22.781-5.738-24.401-16.909-.236-1.62-1.654-2.869-3.308-2.869-2.025 0-3.645 1.789-3.375 3.814 2.093 14.816 16.2 25.785 32.164 22.68 10.53-2.059 19.001-10.53 21.06-21.06C70.835 31.995 57.672 16.875 41 16.875z" fill="#fff"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                    title="Фриланс это легко! Как покупать фриланс услуги в 1 клик?"
                                                                    width="640" height="360"
                                                                    src="https://www.youtube.com/embed/WDM4YR1dv4k?autoplay=1&amp;modestbranding=1&amp;rel=0&amp;hl=ru&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fkwork.ru&amp;widgetid=1"
                                                                    id="widget2"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="k-modal-backdrop" onClick={()=>setPlay(false)}/>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default HelpBuisness
