import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../components.css'
import '../../App.css'

function InputBlock(){
    const navigate= useNavigate()
    const Auth=()=>navigate('/authorization');
    return (
        <> 
             < div className = 'header__blockRegistration' >
             <a href='#' className='header__text font-inter'>Зарегистрироваться</a>
             < p className = 'header__tube' >|</p>
             <button className='header__button font-medium' onClick={Auth}>Войти</button > 
            </div>
        </>
    )
}
 export default InputBlock;