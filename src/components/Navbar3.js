import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'
const Navbar3 = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                  
                 
                <div className="collapse navbar-collapse flex-row "  id="navbarSupportedContent">
                     {
                      data.logos.map(logo=>
                        <div className=" justify-content-center"> 
                          <Link className="navbar-brand " to="/"><img className="logo" alt="navbar" src={logo}/></Link>
                        </div>
                        
                        )
                    }
                    <ul className="navbar-nav flex-row social-icon ">
                        <li className="nav-item active ">
                            <Link className="nav-link" ><i className="iconify"  data-icon="bx:bxl-facebook" data-inline="false"></i></Link> 
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link"><i className="iconify"  data-icon="bx:bxl-twitter" data-inline="false"></i></Link> 
                        </li>
                        <li className="nav-item ">
                                <Link className="nav-link"><i className="iconify"  data-icon="uil:instagram-alt" data-inline="false"></i></Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link"><i className="iconify"  data-icon="dashicons:whatsapp" data-inline="false"></i></Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"> 
                            <Link><button className="kalamar">Contact Us</button></Link>
                        </li>
                    </ul>
                </div>
             
                </nav>
        </div>
    )
}

export default Navbar3
