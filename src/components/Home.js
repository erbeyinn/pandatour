/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'

import Slider2 from './Slider'
import {useTranslation} from 'react-i18next'
import RecommendedTours from '../CategoryTours/RecommendedTours'
import PrivateTours from '../CategoryTours/PrivateTours'

import ProductTours from '../CategoryTours/ProductTours'




 function Home(props) {
       // eslint-disable-next-line no-unused-vars
       const {t, i18n} = useTranslation()
const [loading, setLoading] = useState(true)
useEffect(() => {
  setTimeout(() => setLoading(false),100)

}, [])
    
    return (
      <>
   
  
  <Slider2/>

  

          {
            loading === false ? (
              
          
                     
        <div>
          
          <Fade left>
            <div className="container-fluid bg-light"  >
              <ProductTours/>
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