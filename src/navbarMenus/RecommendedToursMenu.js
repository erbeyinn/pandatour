/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data'

const RecommendedToursMenu = () => {
    return (
        <div>
            <div className="dropdown">
                
                <a className="btn  dropdown-toggle"  id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Recommended Tours
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {
                        data.recommends.map( (recommend,id) =>
                            <Link key={id} to={'/recommend/' + recommend._id} className="dropdown-item">{recommend.title}</Link>
                            )
                    }
                    
                    
                </div>
            </div>
        </div>
    )
}

export default RecommendedToursMenu
