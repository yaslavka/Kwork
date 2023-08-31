import React from "react";
import {Link} from "react-router-dom";
function MarketDatamap({item}) {
    return(
        <>
            <Link href={`/cases/${item.id}`} className={'responses-market__inner'} title="Читать отзыв">
                <div className="responses-market__avatar">
                    <img src="https://cdn-edge.kwork.ru/files/cases/143-1616050102.jpeg" className="lazy-load_scroll js-lazy-load-image lazy-load_initialized" data-inviewport-right="-80"
                    data-src="https://cdn-edge.kwork.ru/files/cases/143-1616050102.jpeg"
                    alt="Сэкономил 11 000 руб. на адаптивном дизайне сайта"/>
                </div>
                <h4 className="responses-market__name kw-header--h4">{item.name}</h4>
                <div className="responses-market__divider"/>
                <div className="responses-market__text kw-text--14 multi-elipsis">
                    {item.comments}
                </div>
                <div className="responses-market__quote">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                        <path d="M48.712 21.97l.038 1.13c-.002 8.577-7.302 15.522-16.328 15.648v-4.092c3.2-.06 6.174-1.26 8.432-3.387a11.67 11.67 0 0 0 1.218-1.337l.336-.432-.58.086a8.8 8.8 0 0 1-1.081.092h-.198c-4.496 0-8.164-3.442-8.164-7.715s3.67-7.715 8.164-7.715 8.164 3.45 8.164 7.722zM10.788 38.75c9.026-.126 16.326-7.07 16.328-15.647l-.038-1.137c0-4.273-3.668-7.715-8.164-7.715s-8.164 3.442-8.164 7.715 3.668 7.715 8.164 7.715h.198a8.8 8.8 0 0 0 1.081-.092l.58-.086-.336.432c-.366.47-.773.916-1.22 1.337-2.258 2.128-5.243 3.328-8.432 3.387v4.092z"/>
                    </svg>
                </div>
                <div className="responses-market__more">
                    <div className="kw-link">
                        Читать отзыв
                        <img className="responses-market__more-arrow"
                             src="https://cdn-edge.kwork.ru/images/index/response-arrow-right.svg"
                             alt=""/>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default MarketDatamap
