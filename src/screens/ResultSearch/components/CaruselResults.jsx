import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from '../../../images//arrowLeft.svg'
import arrowRight from '../../../images/arrowRight.svg'
import './carouselResults.css'
import {observer} from "mobx-react-lite";
import spiner from '../../../images/spiner.svg'
import CardCarusel from "./CardCarusel";

function CaruselResults(totalDocuments) {

    if (Object.entries(totalDocuments).length === 0) {

        return <div className="spinerResult"><img className="spinerResultImg" src={spiner} alt="spiner"/>
            <p className="spinerResultText font-inter">Загружаем данные
            </p>
        </div>
    }

    const riskFactors = totalDocuments
        .data[1]
        .data;
    const documents = totalDocuments
        .data[0]
        .data;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: (
            <div>
                <div className="next-slick-arrow">
                    <img src={arrowRight} alt="arrowRight"/>
                </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow">
                    <img src={arrowLeft} alt="arrowLeft"/>
                </div>
            </div>
        ),
        responsive: [

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div className="sliderResult">

            <Slider {...settings}>

                {
                    documents.map(document => (
                        <CardCarusel
                            document={document}
                            riskFactors={riskFactors}
                            key={document.date + document.value}/>
                    ))
                }

            </Slider>

        </div>
    );
}

export default observer(CaruselResults)