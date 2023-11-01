import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../../App.css'
import './title.css'
import TitleImg from '../../../../images/TitleImg.svg'
import { Context } from "../../../../App";
import { observer } from "mobx-react-lite";



function Title() {
    const {store} = useContext(Context) 
    const navigate= useNavigate()
const requestData =()=>{
navigate('/searchData')
}

    return (
        <div className='titleMainBlock'>
            <div className='titleMain'>
                <h1 className='titleMain__title font-ferry'>
                    сервис по поиску<br/> публикаций<br/>о компании<br/> по его ИНН
                </h1>
                <p className='titleMain__text font-inter'>
                    Комплексный анализ публикаций, получение данных<br/> в формате PDF на электронную почту.
                </p>
                {store.isAuth&&<button className='titleMain__button font-medium' onClick={requestData}>Запросить данные</button>}

            </div>
            <div className='titleImgBlock'>
                <img className='titleImgBlock__img' src={TitleImg} alt="TitleImg" />

            </div>
        </div>
    )
}

export default observer(Title)