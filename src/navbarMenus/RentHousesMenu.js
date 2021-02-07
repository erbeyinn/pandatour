import React from 'react'
import { Link } from 'react-router-dom'

const RentHousesMenu = () => {
    return (
        <div>
         
                 <div className="dropdown">
                
                <Link className="btn"  to="/renthouse">
                    Rent House
                </Link>
               
            </div>
           
            
        </div>
    )
}

export default RentHousesMenu
