/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data'

const PrivateToursMenu = () => {
    return (
        <div>
            <div className="dropdown">
                
                <a className="btn  dropdown-toggle"  id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Private Tours
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {
                        data.privs.map( priv =>
                            <Link to={'/priv/' + priv._id} className="dropdown-item">{priv.title}</Link>
                            )
                    }
                    
                    
                </div>
            </div>
        </div>
    )
}

export default PrivateToursMenu
