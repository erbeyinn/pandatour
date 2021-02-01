/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react'
import data from '../data'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Navbar_2 from './Navbar_2'

import Slider2 from './Slider'
import {useTranslation} from 'react-i18next'
import RecommendedTours from '../CategoryTours.js/RecommendedTours'
import PrivateTours from '../CategoryTours.js/PrivateTours'
import Navbar3 from './Navbar3'




 function Home(props) {
       // eslint-disable-next-line no-unused-vars
       const {t, i18n} = useTranslation()
const [loading, setLoading] = useState(true)
useEffect(() => {
  setTimeout(() => setLoading(false),100)

}, [])
    
    return (
      <>
      <div>
        <Navbar3/>
      </div>
      
       <Navbar_2/>
  
  <Slider2/>

  

          {
            loading === false ? (
              
          
                     
        <div>
          
          <Fade left>
            <div className="container-fluid bg-light"  >
              <div><h3 className="text-center"> Tours</h3></div>
             
                 <div className=" " >
    <div className="row">
      {
        data.products.map(product=>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={product._id} >
         <div className="card" style={{borderBottom:'1px solid #ccc'}} >
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
   <RecommendedTours/>
   <PrivateTours/>

            </div>
   
          </Fade>
     
        </div>
            ):(
           <div>Loading...</div>
            )
          }
        
      </>
          )
}
      
export default Home;