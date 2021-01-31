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
  {data.products.map((product, index) =>
   <div key={index} >
    
      <div className="slider "> 
       
         <div className=" text-center align-middle" style={{marginTop:'130px'}}>
          <h3 className="font-weight-bold ">{product.content}</h3>
           <Link to={'/product/' + product._id}> <button className="kalamar ">{t('MoreInfo.1')}</button>  </Link>
           </div>
        
    
    
       
        <div className="z-index">
           <img src={product.image[0]}  alt="product"/>
           
        </div>
     
      
        
      </div>
      
    
    
    
  </div>)}
</Slider>
   
  )
}
export default Slider2