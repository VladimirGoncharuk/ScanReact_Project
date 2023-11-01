import React,{useContext, useEffect} from "react";
import '../components.css'
import '../../App.css'
import { Context } from "../../App";
import { observer } from "mobx-react-lite";
import spiner from '../../images/spiner.svg'
import Avatar from "../Avatar";


function InputBlockIsAuth(){
     const {store} =  useContext(Context) 
     const url= '../images/avatarexample.jpeg'
    useEffect(()=>{store.infocompany()}   
    ,[])
    const logout=()=>{store.logout()}

     
    return (   
        <div className="companyUser"> 
            {store.isLoading && <div className="companyInfo"><img className="companyInfoSpiner" src={spiner} alt="spiner" /></div>}
            {!store.isLoading &&        
             <div className="companyInfo">
                <p className="companyInfo__text font-inter">Использовано компаний <span className="companyInfo__numUse font-inter"> {store.companyUse} </span> </p>
                <p className="companyInfo__text font-inter">Лимит по компаниям    <span className="companyInfo__numLimit font-inter"> {store.companyLimit} </span></p>
             </div>}

             <div className="companyUser__name">
                <div className="companyUser__content">
                    <p className="companyUser__contentText font-inter" > Алексей А.</p>
                    <button className="companyUser__contentButton font-inter" onClick={logout}>Выйти</button>
                </div>
                <div className="companyUser__avatar">
                    <Avatar url={url} />
                </div>
             </div>
         </div>  
                   
            
        
    )
}
 export default  observer(InputBlockIsAuth);
















