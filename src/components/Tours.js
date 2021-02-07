/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import data from '../data'
import {Link} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'
import {useTranslation} from 'react-i18next'
 function Tours() {

  const {t} = useTranslation()


    
    return (
        <>
          
      
              <Zoom>
                
                <div className="container-fluied "style={{ height:'100vh'}}>
    <div className="">
            <div className="container ">
    <div className="row">
      {
        data.products.map(product=>
            <div className="col-4" key={product._id}>
         <div className="card" >
           <Link to={'/product/' + product._id}><img src={product.image[0]} className="card-img-top img" alt="..."/>  </Link>
        
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{t('Body.1')}</p>
        <div className="d-flex justify-content-between">
          <Link to={'/product/' + product._id}> <button className="kalamar">{t('MoreInfo.1')}</button>  </Link>
              
            <p className="text-muted ">Price: <b>{product.price}£</b></p>
          </div>
        </div>
      </div>
      </div>
          
          )
      }
    
    </div>
    
  </div>
        </div>
                </div>
             
              </Zoom>

           
       
        </>

        
    )
}
export default Tours;