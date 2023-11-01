import React,{useState } from 'react';
import LabelTariff from "./components/LabelTariff";
import './tariffCard.css'
import bird from '../../../../images/bird.svg'


function TariffCard({tarriffImg,tariffAction,children,bg}) {
   const [label, setLabel]= useState(children.tariffOption);  
  
    const bg4=label? "bg4":'';
    const light =label?((bg==="bg1")? 'light':(bg==="bg2")?'light2':'light3'):'';
   
   
    return (
        <div className={`cardTariff ${light}`}>
           <div className={`cardTariff__header  ${bg}`}>
              <div className="cardTariff__title ">
                  <h1 className="cardTariff__name font-medium">
                    {children.tariffName}
                  </h1>
                  <p className="cardTariff__text font-inter">
                    {children.tariffAim}
                  </p>
              </div>
              <div className="cardTariff__img">
                  <img src={tarriffImg} alt="tarriffImg" />
              </div>
           </div>
           <div className="cardTariff__content">
                 <div  className="cardTariff__blockprice">
                    <div className="cardTariff__price">
                        <span className="cardTariff__priceNew font-medium">{children.newPrice}</span>
                        <span className="cardTariff__priceOld font-medium">{children.oldPrice}</span>
                    </div>

                 <LabelTariff label={label}/>
                  
                 </div>
                 <div className="cardTariff__cost font-inter">{children.cost}</div>
                 <div className="cardTariff__include font-inter">
                    <h1 className='cardTariff__includeTitle font-medium'>В тариф входит</h1>
                    {children.conditions.map(item => (
            <div className='cardTariff__includeText'>
                <img className='cardTariff__includeImg' src={bird} alt="bird" />   
                 {item}
                 </div>
          ))}       
                 </div>
                 
                   <button className={`cardTariff__button  font-inter ${bg4}`}>
                   {tariffAction}
                    </button> 
                    
           </div>
        </div>

    )
}
export default TariffCard