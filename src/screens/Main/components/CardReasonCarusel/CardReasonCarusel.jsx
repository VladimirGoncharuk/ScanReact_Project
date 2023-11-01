import React from "react";
import Slider from "react-slick";
import CardReason from '../CardReason/CardReason';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alarm from '../../../../images/alarm.svg'
import loupe from '../../../../images/loupe.svg'
import protection from '../../../../images/protection.svg'
import './CardReasonCarusel.css'
import arrowLeft from '../../../../images/arrowLeft.svg'
import arrowRight from '../../../../images/arrowRight.svg'
 function CardReasonCarusel() {
  const settingsCard = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> <img src={arrowRight} alt="arrowRight" /> </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">  <img src={arrowLeft} alt="arrowLeft" /> </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1400, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots:false
        }
      },
    
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
   <div className="sliderMain">
    <Slider {...settingsCard}>

     <CardReason source={alarm}>
      Высокая и оперативная скорость<br/> обработки заявки
      </CardReason>
      
      <CardReason source={loupe}>
      Огромная комплексная база<br/> данных, обеспечивающая<br/> объективный ответ на запрос
      </CardReason>

      <CardReason source={protection}>
      Защита конфеденциальных сведений,<br/> не подлежащих разглашению по<br/> федеральному законодательству
      </CardReason>
      <CardReason source={protection}>
      Защита конфеденциальных сведений,<br/> не подлежащих разглашению по<br/> федеральному законодательству
      </CardReason>
    </Slider>
    </div>
  );
}
export default CardReasonCarusel
