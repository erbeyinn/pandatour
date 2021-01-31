import React, { useEffect, useState } from 'react';
import Navbar from'./Navbar'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
 function Introduction() {
   const [product,setProduct] = useState(false)
   
   const openModal = (product)  =>{
      setProduct(!product)
    }
    const closeModal = ( ) =>{
      setProduct(!product)
     
    }
    useEffect(() => {
        Modal.setAppElement('body')
    }, [])

    return (
        <div className="pandatour-app">
            <Navbar/>
            <div className="banner-title">
            <h1>Food <span> doesn't have <br/> a cook.</span> It is cook</h1>
            <button className="kalamar">Explore </button>
          </div>
          <i className="fab fa-play"></i>
          <div className="vertical-bar">
            <div className="search-icon">
              <span className="iconify fa" data-icon="fa-solid:th-list" data-inline="false"></span>
             </div>
            <div className="social-icons">
              <i className="iconify" data-icon="bx:bxl-facebook" data-inline="false"></i>
                <i className="iconify" data-icon="bx:bxl-twitter" data-inline="false"></i>
                <i className="iconify" data-icon="uil:instagram-alt" data-inline="false"></i>
                <i className="iconify" data-icon="dashicons:whatsapp" data-inline="false"></i>
            </div>

          </div>
            <div className="text-center ">
            <h3 className="text-white">Watch our video</h3>
           {
             product && (
               <Modal isOpen={true} onRequestClose={closeModal} >
                 <Zoom>
                  <div >
                    <div>Modal</div>
                    <div onClick={ closeModal}>X</div>
                  </div>
                 </Zoom>
               </Modal>
             )
           }
           <i className="fas fa-play modal-button"  onClick={()=> openModal(product)}></i>
            </div>
        </div>
        
    )
}
export default Introduction