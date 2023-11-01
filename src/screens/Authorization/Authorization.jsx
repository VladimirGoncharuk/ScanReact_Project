import React from "react";
import pageAuth from '../../images/PageAuth.svg'
import FormAuth from "./components/FormAuth";
import './authorization.css'
import lock from '../../images/lock.svg'
function Authorization(){
return(
    <div>
               <div className="serchForm">
            <div className="serchForm__content">
                <div className="serchForm__blockTitle">
                    <h1 className="serchForm__title font-ferry">Для оформления подписки<br/> на тариф, необходимо<br/> авторизоваться.</h1>

                </div>
                <div className="serchForm__img">
                    <img src={pageAuth} alt="PageAuthIMG" />
                </div>

            </div>
            <div className="serchForm__form">
              <FormAuth/> 
              <img className="formImg" src={lock} alt="lock" /> 
            </div>
            

            
        </div>

    </div>

)
}
export default Authorization