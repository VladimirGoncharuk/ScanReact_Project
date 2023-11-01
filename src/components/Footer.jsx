import  React from 'react'
import logoFooter from '../images/logoFooter.svg'

import './components.css'
import '../App.css'

function Footer (){


return(

<div className='footer title'>
<div>
  <img className='footer__logo' src={logoFooter} alt="logo"/>
</div>
<div className='footer__blockinfo font-inter'>
<p className='footer__text'>г. Москва, Цветной б-р, 40<br/> +7 495 771 21 11<br/> info@skan.ru</p> 
<p className='footer__text footer__text_size'>Copyright. 2022</p>
</div>
</div>

)
}


export default Footer