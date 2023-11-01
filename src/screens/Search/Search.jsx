import React from "react";

import pageSearchp1 from '../../images/PageSearchp1.svg'
import pageSearchp2 from '../../images/PageSearchp2.svg'
import pageSearchp3 from '../../images/PageSearchp3.svg'
import './search.css'
import FormRequest from "./components/FormRequest";

function Search() {
    return (
        <div>

            <div className="searchPage">
                <div className="searchPage__titleForm">
                    <div className="searchPage__titleBlock">
                        <h1 className="searchPage__title font-ferry">Найдите необходимые<br/>
                            данные в пару кликов.</h1>
                        <p className="searchPage__text font-inter">Задайте параметры поиска.<br/>
                            Чем больше заполните, тем точнее поиск</p>
                    </div>

                    <FormRequest/>

                </div>
                <div className="searchPage__bloclImg">
                    <img className="searchPage__img1" src={pageSearchp1} alt="ImgpageSearchp1"/>
                    <img className="searchPage__img2" src={pageSearchp2} alt="ImgpageSearchp2"/>
                    <img className="searchPage__img3" src={pageSearchp3} alt="ImgpageSearchp3"/>

                </div>
            </div>
        </div>

    )
}
export default Search