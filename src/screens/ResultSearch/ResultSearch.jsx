import React, {useContext, useEffect, useState} from "react";
import './resultSearch.css'
import result from '../../images/PageResault1.svg'
import CaruselResults from "./components/CaruselResults";
import CardInfo from "./components/CardInfo";
import {Context} from "../../App";
import {observer} from "mobx-react-lite";

function ResultSearch() {
    const {store} = useContext(Context)
    const [cardContent, setCardContent] = useState([]);
    const [firstArrayIds, setFirstArrayIds] = useState([]);
    const [totalDocuments, setTotalDocuments] = useState('');

    function idsApart(firstArrayIds) {
        if (firstArrayIds && firstArrayIds.length > 10) {
            return firstArrayIds.splice(0, 10)
        } else {
            return firstArrayIds && firstArrayIds.splice(0, firstArrayIds.length)
        }
    }

    useEffect(() => {
        blockRequest()
        async function blockRequest() {
            const searchcompanyRequest = await store.searchcompany(store.searchcompanyBody)
            setTotalDocuments(searchcompanyRequest)

            const searchcompanyDataId = await store.searchcompanyId(
                store.searchcompanyBody
            )

            const firstArrayIds = searchcompanyDataId && searchcompanyDataId
                .items
                .map(item => (item.encodedId))
            setFirstArrayIds(firstArrayIds)

            const searchcompanyDataInfo = await store.searchcompanyContent(
                idsApart(firstArrayIds)
            )

            setCardContent(searchcompanyDataInfo && searchcompanyDataInfo.data)

        }
    }, [])

    async function clickHandler() {
        const idRemains = idsApart(firstArrayIds)
        const idRemainsInfo = await store.searchcompanyContent(idRemains)
        setCardContent([
            ...cardContent,
            ...idRemainsInfo.data
        ])

    }

    return (
        <div>

            <div className="result">
                <div className="result__header">
                    <div className="result__blockTitle">
                        <h1 className="result__title font-ferry">Ищем. Скоро
                            <br/>
                            будут результаты</h1>
                        <p className="result__text font-inter">Поиск может занять некоторое время,
                            <br/>
                            просим сохранять терпение.</p>
                    </div>
                    <div className="result__img">
                        <img src={result} alt="result"/>
                    </div>
                </div>
                <div className="result__total">
                    <h2 className="result__totalTitle font-ferry">
                        Общая сводка</h2>
                    <p className="result__totalText font-inter">Найдено
                        <span>
                            {store.searchcompanyData}
                        </span>
                        вариантов</p>

                    <div className="carouselBlock">
                        <div className="carouselBlock__header">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>

                        </div>

                        <CaruselResults {...totalDocuments}/>
                    </div>

                </div>
                <div className="result__list">
                    <h2 className="result__listTitle font-ferry">Список документов</h2>
                    <div className="result__BlockList">

                        {
                            cardContent.map(
                                cardContent => (<CardInfo {...cardContent } key={Date.now()}/>)
                            )
                        }
                    </div>
                </div>
                <button
                    className="result__button font-medium"
                    onClick={clickHandler}
                    disabled={(
                        firstArrayIds && firstArrayIds.length == 0)
                        ? true
                        : false}>Показать больше</button>
            </div>

        </div>
    )
}
export default observer(ResultSearch);