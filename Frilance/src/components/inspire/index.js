import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
import 'swiper/modules/navigation/navigation.min.css'

function Inspire() {
    return(
        <>
            <div className={'inspire m-hidden'}>
                <div className={'kw-wrapper'}>
                    <h2 className="kw-header--h2 p0">Вдохновляйтесь проектами наших фрилансеров</h2>
                   <Swiper modules={[Pagination, Navigation]} navigation={true} spaceBetween={100} slidesPerView={4}  wrapperClass={'swiper-wrapper inspire__items'} className={'inspire__slider js-inspire-slider'}>
                       <SwiperSlide className={'inspire__item swiper-slide-duplicate'}>
                           <div className={'inspire__item-inner'}>
                               <a href="https://kwork.ru/portfolio/1421846" className="inspire__image-link"
                                  target="_blank" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                   alt=""
                                   src="https://cdn-edge.kwork.ru/files/portfolio/t1/97/cover-1421846-1573136197.jpg?ver=2"/>
                               </a>
                           </div>
                           <div className="inspire__bottom">
                               <a href="https://kwork.ru/user/adolka"
                                  className="inspire__user-avatar" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                               alt="" src="https://cdn-edge.kwork.ru/files/avatar/medium/54/7822-2.jpg?ver="/>
                               </a>
                               <span className="inspire__user-author">Автор: <a href="https://kwork.ru/user/adolka" title="adolka">adolka</a>
                               </span></div>
                       </SwiperSlide>
                       <SwiperSlide className={'inspire__item swiper-slide-duplicate'}>
                           <div className={'inspire__item-inner'}>
                               <a href="https://kwork.ru/portfolio/1421846" className="inspire__image-link"
                                  target="_blank" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt=""
                                        src="https://cdn-edge.kwork.ru/files/portfolio/t1/97/cover-1421846-1573136197.jpg?ver=2"/>
                               </a>
                           </div>
                           <div className="inspire__bottom">
                               <a href="https://kwork.ru/user/adolka"
                                  className="inspire__user-avatar" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt="" src="https://cdn-edge.kwork.ru/files/avatar/medium/54/7822-2.jpg?ver="/>
                               </a>
                               <span className="inspire__user-author">Автор: <a href="https://kwork.ru/user/adolka" title="adolka">adolka</a>
                               </span></div>
                       </SwiperSlide>
                       <SwiperSlide className={'inspire__item swiper-slide-duplicate'}>
                           <div className={'inspire__item-inner'}>
                               <a href="https://kwork.ru/portfolio/1421846" className="inspire__image-link"
                                  target="_blank" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt=""
                                        src="https://cdn-edge.kwork.ru/files/portfolio/t1/97/cover-1421846-1573136197.jpg?ver=2"/>
                               </a>
                           </div>
                           <div className="inspire__bottom">
                               <a href="https://kwork.ru/user/adolka"
                                  className="inspire__user-avatar" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt="" src="https://cdn-edge.kwork.ru/files/avatar/medium/54/7822-2.jpg?ver="/>
                               </a>
                               <span className="inspire__user-author">Автор: <a href="https://kwork.ru/user/adolka" title="adolka">adolka</a>
                               </span></div>
                       </SwiperSlide>
                       <SwiperSlide className={'inspire__item swiper-slide-duplicate'}>
                           <div className={'inspire__item-inner'}>
                               <a href="https://kwork.ru/portfolio/1421846" className="inspire__image-link"
                                  target="_blank" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt=""
                                        src="https://cdn-edge.kwork.ru/files/portfolio/t1/97/cover-1421846-1573136197.jpg?ver=2"/>
                               </a>
                           </div>
                           <div className="inspire__bottom">
                               <a href="https://kwork.ru/user/adolka"
                                  className="inspire__user-avatar" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt="" src="https://cdn-edge.kwork.ru/files/avatar/medium/54/7822-2.jpg?ver="/>
                               </a>
                               <span className="inspire__user-author">Автор: <a href="https://kwork.ru/user/adolka" title="adolka">adolka</a>
                               </span></div>
                       </SwiperSlide>
                       <SwiperSlide className={'inspire__item swiper-slide-duplicate'}>
                           <div className={'inspire__item-inner'}>
                               <a href="https://kwork.ru/portfolio/1421846" className="inspire__image-link"
                                  target="_blank" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt=""
                                        src="https://cdn-edge.kwork.ru/files/portfolio/t1/97/cover-1421846-1573136197.jpg?ver=2"/>
                               </a>
                           </div>
                           <div className="inspire__bottom">
                               <a href="https://kwork.ru/user/adolka"
                                  className="inspire__user-avatar" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt="" src="https://cdn-edge.kwork.ru/files/avatar/medium/54/7822-2.jpg?ver="/>
                               </a>
                               <span className="inspire__user-author">Автор: <a href="https://kwork.ru/user/adolka" title="adolka">adolka</a>
                               </span></div>
                       </SwiperSlide>
                       <SwiperSlide className={'inspire__item swiper-slide-duplicate'}>
                           <div className={'inspire__item-inner'}>
                               <a href="https://kwork.ru/portfolio/1421846" className="inspire__image-link"
                                  target="_blank" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt=""
                                        src="https://cdn-edge.kwork.ru/files/portfolio/t1/97/cover-1421846-1573136197.jpg?ver=2"/>
                               </a>
                           </div>
                           <div className="inspire__bottom">
                               <a href="https://kwork.ru/user/adolka"
                                  className="inspire__user-avatar" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt="" src="https://cdn-edge.kwork.ru/files/avatar/medium/54/7822-2.jpg?ver="/>
                               </a>
                               <span className="inspire__user-author">Автор: <a href="https://kwork.ru/user/adolka" title="adolka">adolka</a>
                               </span></div>
                       </SwiperSlide>
                       <SwiperSlide className={'inspire__item'}>
                           <div className={'inspire__item-inner'}>
                               <a href="https://kwork.ru/portfolio/1421846" className="inspire__image-link"
                                  target="_blank" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt=""
                                        src="https://cdn-edge.kwork.ru/files/portfolio/t1/97/cover-1421846-1573136197.jpg?ver=2"/>
                               </a>
                           </div>
                           <div className="inspire__bottom">
                               <a href="https://kwork.ru/user/adolka"
                                  className="inspire__user-avatar" title="adolka">
                                   <img className="js-lazy-load-image swiper-lazy swiper-lazy-loaded lazy-load_initialized"
                                        alt="" src="https://cdn-edge.kwork.ru/files/avatar/medium/54/7822-2.jpg?ver="/>
                               </a>
                               <span className="inspire__user-author">Автор: <a href="https://kwork.ru/user/adolka" title="adolka">adolka</a>
                               </span></div>
                       </SwiperSlide>
                   </Swiper>
                </div>
            </div>
        </>
    )
}
export default Inspire
