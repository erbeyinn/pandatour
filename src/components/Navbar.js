/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data'
import {useTranslation} from 'react-i18next'
import Navbar3 from './Navbar3';

function Navbar(props) {
    
 // eslint-disable-next-line no-unused-vars
 const {t, i18n} = useTranslation()
       
    return (
           <div className="container-fluid ">
            
                  <nav className="navbar navbar-expand-lg  ">
                    
                    
                    
   {
                      data.logos.map(logo=>
                        <div>
                          <Link className="navbar-brand " to="/"><img style={{height:'auto',width:'auto'}} src={logo}/></Link>
                        </div>
                        
                        )
                    }
                   
                  <div className="d-flex justfiy-content-between ">
                     <div className="social-icon "  >
                        <Link ><i className="iconify"  data-icon="bx:bxl-facebook" data-inline="false"></i></Link> 
                          <Link><i className="iconify"  data-icon="bx:bxl-twitter" data-inline="false"></i></Link>  
                        <Link><i className="iconify"  data-icon="uil:instagram-alt" data-inline="false"></i></Link> 
                      <Link><i className="iconify"  data-icon="dashicons:whatsapp" data-inline="false"></i></Link>
                      </div>
          
                     
                        <ul className="navbar-nav ">
                        
                          <li className="nav-item active">
                            <button className="kalamar">{t('Kalamar.1')}</button>
                        </li>
                       
                      </ul>
                   
                  </div>
                      
                        
                      
                    
                    
                      
                  
                      
             
                    
                    
                  </nav>
            
           </div>
          
    
            
      
    )
}
export default  Navbar