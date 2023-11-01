import React from "react";
import labelTariff from '../../../../../images/labelCurrentTariff.svg'
import './labelTariff.css'


function LabelTariff({label}) {
    if(label){
    return (
        <div className="cardTariff__indificateTariff">
            <img src={labelTariff} alt="labelTariff" />
        </div>

    )
    }
}
export default LabelTariff