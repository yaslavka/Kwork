import React, {useState} from "react";
import Info from "./info";
import logo from '../../assets/images/index/numbers-logo.svg'

const dataNumbs = [
    {
        id: 1,
        title: 'Активных кворков',
        count: 0
    },
    {
        id: 2,
        title: 'Новых кворков\n' +
            'за неделю',
        count: 0
    },
    {
        id: 3,
        title: 'Новых проектов\n' +
            'за неделю',
        count: 0
    },
]

function LendingInfo() {
    const [active, setActive]=useState(false)
    return(
        <>
            <div className={'numbers m-hidden'}>
                <div className={'kw-wrapper'}>
                    <div className={'numbers__items'}>\
                        <div className="numbers__item">
                            <div className="numbers__logo">
                                <img className="js-lazy-load-image lazy-load_initialized"
                                     data-src={logo}
                                     alt={logo}
                                     src={logo}/>
                            </div>
                            <div className="numbers__text numbers__text--hint d-flex align-content-center justify-content-center">
                                Фриланс платформа №1
                                <i className="icon-help--grey tooltipster ml5 tooltipstered" data-tooltip-side="bottom" data-tooltip-content="#numbers-hint" data-tooltip-distance="5" onMouseOver={()=>setActive(true)} onMouseOut={()=>setActive(false)}/>
                            </div>
                            <div className="" style={{display:active ? "block": "none"}}>
                                <div id="numbers-hint" className="numbers__hint">
                                    Kwork - лидер по трафику среди <br/> фриланс-сервисов в рунете <br/> по данным Similar Web
                                </div>
                            </div>
                        </div>
                        {dataNumbs.map((item)=>(
                            <>
                                <Info item={item} key={item.id}/>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default LendingInfo
