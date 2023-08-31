import React from "react";
import r from "../../constants/routes.constants";
import RubricsMap from "./RubricsMap";
import it from '../../assets/images/index/programming_guest_new.webp'
import disa from '../../assets/images/index/design_guest_new.webp'
const dataRubrics = [
    {
        id: 1,
        image: it,
        title: '',
        route: r.root
    },    {
        id: 2,
        image: disa,
        title: '',
        route: r.root
    },
    {
        id: 3,
        image: it,
        title: '',
        route: r.root
    },
    {
        id: 4,
        image: it,
        title: '',
        route: r.root
    },
    {
        id: 5,
        image: it,
        title: '',
        route: r.root
    },
    {
        id: 6,
        image: it,
        title: '',
        route: r.root
    },
    {
        id: 7,
        image: it,
        title: '',
        route: r.root
    },
]

function Rubrics() {
    return(
        <>
            <div className={'rubrics'}>
                <div className={'kw-wrapper'}>
                    <h2 className="kw-header--h2 p0">Выберите рубрику, чтобы начать</h2>
                    <div className={'rubrics__items'}>
                        {dataRubrics.map((items)=>(
                            <>
                                <RubricsMap items={items} key={items.id}/>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rubrics
