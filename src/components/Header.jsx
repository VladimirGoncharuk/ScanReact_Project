import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import InputBlock from './InputBlock/InputBlock'
import InputBlockIsAuth from "./InputBlockIsAuth/InputBlockIsAuth";
import './components.css'
import '../App.css'
import { Context } from "../App";
import { observer } from "mobx-react-lite";
import menu from '../images/menu.svg'




function Header() {
   const {store} = useContext(Context) 
   store.AuthCheck()


  return (
    <>
      <div className='header title'>
        <div>
          <img className='header__logo' src={logo} alt="logo" />
        </div>
        <div className='header__blocklinks'>
          <Link className='header__link' to="/"> Главная </Link>
          <Link className='header__link' to="/tariffs"> Тарифы </Link>
          <Link className='header__link' to="/FAQ"> FAQ </Link>

        </div>
        {store.isAuth&&<InputBlockIsAuth />} 
        {!store.isAuth&&<InputBlock />} 
        <div>
          <img className='header__menu' src={menu} alt="header__menu" />
        </div>
      </div>
      
    </>
  )
}


export default observer(Header)