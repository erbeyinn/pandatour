import React from 'react'
import { Link } from 'react-router-dom'

 function Footer() {
    return (
        <div style={{background:'orange'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
   <nav className=" container" >
                    <div className="d-flex justify-content-between">
<ul className="navbar-nav mr-auto">
                            <div className=" font-weight-bold text-wrap">
                             COPYRIGHT © PANDATOUR 2020 <br/><span style={{color:'brown'}}>info@pandatour.com</span> <span style={{color:'#8e8e8a;'}}>– 907.479.8203 – Box 80562, Fairbanks, Alaska 99708</span> 
                            </div>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <div><Link to="/"><h3  style={{width:'135px',textDecoration:'none',color:'black'}}>pandatour</h3></Link></div>
                        </form>
                   
                    </div>
                        
               </nav>
                    </div>
                   
                </div>
                <div className="row justify-content-center">
                    <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-6  ">
 <div className="social-iconss justify-content-center" >
                 <Link ><i className="iconify"  data-icon="bx:bxl-facebook" data-inline="false"></i></Link> 
                   <Link><i className="iconify"  data-icon="bx:bxl-twitter" data-inline="false"></i></Link>  
                  <Link><i className="iconify"  data-icon="uil:instagram-alt" data-inline="false"></i></Link> 
                <Link><i className="iconify"  data-icon="dashicons:whatsapp" data-inline="false"></i></Link>
                </div>
                    </div>
                </div>
            </div> 
             
                
        </div>
      
    )
}
export default Footer