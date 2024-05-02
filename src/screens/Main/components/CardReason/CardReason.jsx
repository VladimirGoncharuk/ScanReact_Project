import React from "react";
import './cardReason.css'

function CardReason({children, source}) {
    return (
        <div className="cardReason">
            <img className="cardReason__img" src={source} alt="Card Reasone" />
            <p className="cardReason__text font-inter">{children}</p>

        </div>

    )
}
export default CardReason