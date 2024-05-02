import React, {useContext, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import './formAuth.css' 
import buttonGoogle from '../../../images/buttonGoogle.svg'
import buttonFacebook from '../../../images/buttonFacebook.svg'
import buttonYandex from '../../../images/buttonYandex.svg'
import { Context } from "../../../App";

function FormAuth(){
    const [login, setLogin]= useState('')
    const [password, setPassword]= useState('')  
    const disabled=(login===''||password==='')?true:false
    const {store} = useContext(Context)   
    const inputRef = useRef(null)
    const errorLogMes = useRef(null)
    const navigate= useNavigate()

     async function buttonlick(){
       
      
       await store.login(login, password);
      
        if(!store.isAuth){
        inputRef.current.style.borderColor ='#FF5959';
        errorLogMes.current.style.display = 'block'
       }else{navigate('/')}

    }
    
    return(

     
     <div className="form">
        <div className="form__header">
          <button className="form__buttonInput font-inter">Войти</button>
          <button className="form__buttonAuth font-inter">Зарегистрироваться</button>
        </div>
        <div className="form__login">
            <label className="form__labelLogin font-inter" htmlFor="login">Логин или номер телефона:</label>
           <input className="form__loginInput" type="tel" name="login" onChange={(e)=>setLogin(e.target.value)} value={login}/>
        </div>
        <div className="form__password">
            <label className="form__labelPassword font-inter" htmlFor="password">Пароль:</label>
           <input ref={inputRef} className="form__passwordInput" type="password" name="password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <p ref={errorLogMes} className="erorrLog font-inter">Неправильный пароль</p>
        </div>
        <div className="form__send">
            <button disabled={disabled} className="form__button font-medium" onClick={buttonlick}>Войти</button>
            <a href="#" className="form__link font-inter">Восстановить пароль</a>
        </div>
        <div className="form__blockButton">
            <p className="form__blockButtonText font-inter">Войти через:</p>
            <div className="form__buttons">
                <button><img src={buttonGoogle} alt="buttonGoogle" /></button>
                <button><img src={buttonFacebook } alt="buttonFacebook " /></button>
                <button><img src={buttonYandex} alt="buttonYandex" /></button>
            </div>

        </div>
     </div>
    )

}

export default FormAuth