import React, {useEffect, useState} from "react";
import './cardInfo.css'
import {Link} from "react-router-dom";

function CardInfo(item) {

    const parseXml = (text) => {
        const parser = new DOMParser();
        const xmlDOM = parser.parseFromString(text, "application/xml");

        return xmlDOM
            .documentElement
            .textContent
            .replace(/(<(\/?[^>]+)>)/g, '')
    }
    const {XMLParser} = require("fast-xml-parser");
    const parser = new XMLParser();
    let jObj = parser.parse(item.ok.content.markup);

    const [html, setHtml] = useState("")
    useEffect(() => {
        jObj.scandoc['#text'] && setHtml(jObj.scandoc['#text'])
    }, [html])
    return (
        <div className="result__onelist">
            <div className="cardHeader">
                <p className="result__sourceOnelist font-inter">{
                        new Intl
                            .DateTimeFormat()
                            .format(new Date(item.ok.issueDate))
                    }</p>
                <p className="linkCardInfo font-inter">
                    <Link
                        className="linkCardInfo "
                        to={item.ok.url}
                        target="_blank"
                        rel="noopener noreferrer">{item.ok.source.name}</Link>
                </p>
            </div>

            <h1 className="result__titleOnelist font-medium">
                {item.ok.title.text}
            </h1>
            <div>
                {item.ok.attributes.isTechNews &&< span className = "result__labelOnelist font-inter" > Технические новости</span>}
                {item.ok.attributes.isAnnouncement &&< span className = "result__labelOnelist font-inter" > Анонсы и события</span>}
                {item.ok.attributes.isDigest &&< span className = "result__labelOnelist font-inter" > Сводки новостей</span>}

            </div>
            {
                jObj.scandoc['#text'] && <div
                        className="cardInfoImg"
                        dangerouslySetInnerHTML={{
                            __html: html
                        }}></div>
            }

            <p className="result__textOnelist font-inter">{parseXml(item.ok.content.markup)}
            </p>
            <Link
                className="result__buttonOnelist font-inter"
                to={item.ok.url}
                target="_blank"
                rel="noopener noreferrer">Читать в источнике</Link>
            <p className="result__countWordsOnelist font-inter">{item.ok.attributes.wordCount}
                слова</p>
        </div>
    )
}
export default CardInfo
