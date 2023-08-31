import React from "react";
import MarketDatamap from "./marketDatamap";

const marketData = [
    {
        id: 1,
        name: 'Алексей Б.',
        comments: 'Сэкономил 11 000 руб. на адаптивном дизайне сайта'
    },
    {
        id: 2,
        name: 'Алексей Б.',
        comments: 'Сэкономил 11 000 руб. на адаптивном дизайне сайта'
    },
    {
        id: 3,
        name: 'Алексей Б.',
        comments: 'Сэкономил 11 000 руб. на адаптивном дизайне сайта'
    },
    {
        id: 4,
        name: 'Алексей Б.',
        comments: 'Сэкономил 11 000 руб. на адаптивном дизайне сайта'
    },
    {
        id: 5,
        name: 'Алексей Б.',
        comments: 'Сэкономил 11 000 руб. на адаптивном дизайне сайта'
    },
]
function ResponsesMarket() {
    return(
        <>
            <div className={'responses-market'}>
                <div className={'kw-wrapper'}>
                    <h2 className="kw-header--h2 p0">Что говорят о Kwork клиенты</h2>
                    <div className={'responses-market__slider js-responses-market-slider index-slider swiper-backface-hidden'}>
                        <div className={'responses-market__items swiper-wrapper'}>
                            {marketData.map((item)=>(
                                <div className={'responses-market__item swiper-slide'} id={item.id}>
                                    <MarketDatamap item={item} key={item.id}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResponsesMarket
