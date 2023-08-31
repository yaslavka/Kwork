import React from "react";
import beeline from '../../assets/images/index/partners/beeline.svg'
import ikea from '../../assets/images/index/partners/ikea.svg'
import aplle from '../../assets/images/index/partners/apple.svg'
import tele2 from '../../assets/images/index/partners/tele2.svg'
import vk from '../../assets/images/index/partners/vk.svg'
import otkr from '../../assets/images/index/partners/otkritie.svg'
import dns from '../../assets/images/index/partners/dns.svg'
const  dataPartner = [
    {
        id: 1,
        im: beeline
    },
    {
        id: 2,
        im: ikea
    },
    {
        id: 3,
        im: aplle
    },
    {
        id: 4,
        im: tele2
    },
    {
        id: 5,
        im: vk
    },
    {
        id: 6,
        im: otkr
    },
    {
        id: 7,
        im: dns
    },
]
function PartnerHome() {
    return(
        <>
            <div className={'partners'}>
                <div className={'kw-wrapper partners__wrapper'}>
                    <div className={'partners__items'}>
                        {dataPartner.map((i)=>(
                            <>
                                <div key={i.id} className={'partners__item partners__item--beeline js-partner-hint tooltipstered'}>
                                    <img id={i.id} src={i.im} alt={i.im}/>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartnerHome
