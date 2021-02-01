import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import data from '../data'
import {useTranslation} from 'react-i18next'
 function Slider2() {
     // eslint-disable-next-line no-unused-vars
     const {t, i18n} = useTranslation()
  return (
   
      
<Slider >
  {data.tours.map((tour, id) =>
   <div key={id} >
    
      <div className="slider "> 
       
         <div className=" text-center align-middle" style={{marginTop:'130px'}}>
          <h3>{tour.title}</h3>
           <Link to={tour.href}> <button className="kalamar ">{t('MoreInfo.1')}</button>  </Link>
           </div>
    
    
       
        <div className="z-index">
           <img src={tour.image} alt="tour"/>
        </div>
     
      
        
      </div>
      
    
    
    
  </div>)}
</Slider>
   
  )
}
export default Slider2