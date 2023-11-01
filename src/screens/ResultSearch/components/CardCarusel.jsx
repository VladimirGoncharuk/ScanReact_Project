import React from "react";

function CardCarusel(docRiskFactors) {
    return (
        <div className="sliderResult__data">
            <div className="sliderResult__dataContent font-inter">

                <p className="sliderResult__itemContent ">{
                        new Intl
                            .DateTimeFormat()
                            .format(new Date(docRiskFactors.document.date))
                    }</p>
                <p className="sliderResult__itemContent ">{docRiskFactors.document.value}</p>
                {
                    docRiskFactors
                        .riskFactors
                        .map(riskFactor => (

                            (docRiskFactors.document.date === riskFactor.date) && <p className="sliderResult__itemContent " key={Date.now() + riskFactor.date}>{riskFactor.value}</p>

                        ))
                }

            </div>
        </div>
    )
}
export default CardCarusel