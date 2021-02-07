/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data'

const ExcurcionsMenu = () => {
    return (
        <div>
             <div className="dropdown">
                
                
                <a className="btn  dropdown-toggle"  id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Excurcions
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {
                        data.products.map( product =>
                            <Link to={'/product/' + product._id} className="dropdown-item" >{product.title}</Link>
                            )
                    }
                    
                   
                </div>
            </div>
            
        </div>
    )
}

export default ExcurcionsMenu
