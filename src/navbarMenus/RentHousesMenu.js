import React from 'react'
import { Link } from 'react-router-dom'

const RentHousesMenu = () => {
    return (
        <div>
         
                 <div className="dropdown">
                
                <Link className="btn btn-light"  to="/renthouse">
                    Rent House
                </Link>
               
            </div>
           
            
        </div>
    )
}

export default RentHousesMenu
