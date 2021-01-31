import React, { useEffect, useState } from 'react'
import data from '../data'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import {useTranslation} from 'react-i18next'
 function ReladtedTours(props) {

   
   // eslint-disable-next-line no-unused-vars
   const {t, i18n} = useTranslation()

 const [loading, setLoading] = useState(true)
 useEffect(() => {
      setTimeout(() => setLoading(false),100)
 }, [])

  
    return (
      
      <>
      {
        loading === false ? (
          <div className="m-0 p-0" >  
  <div className=" m-0">
             <Fade right>
                  <div className="container text-center ">
                <h1 >{t('Featured.1')}</h1>
    <div className="row">
      {
        data.products.map(product=>
            <div className="col-4" key={product._id}>
         <div className="card " >
           <Link to={'/product/' + product._id}  refresh="true"  ><img onClick={() => {props.setSelectedImg(product.image[0])}} src={product.image[0]} className="card-img-top img" alt="..."/>  </Link>
        
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{t('Body.1')}</p>
        <div className="d-flex justify-content-between">
          <Link to={'/product/' + product._id}> <button  onClick={() => props.setSelectedImg(product.image[0])} className="kalamar">{t('MoreInfo.1')}</button>  </Link>
              
            <p className="text-muted ">Price: <b>{product.price}£</b></p>
          </div>
        </div>
      </div>
      </div>
          
          )
      }
    
    </div>
    
  </div>
             </Fade>
    
         
        </div>
          </div>
         
        ) : (

           
        <div className="p-0 m-0">{''}</div>
        )
      }
     
      </>

       
    )
}
export default ReladtedTours;