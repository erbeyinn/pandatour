import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data'

const ExcurcionsMenu = () => {
    return (
        <div>
             <div className="dropdown">
                
                <Link className="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Excurcions
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {
                        data.recommends.map( recommend =>
                            <Link to={'/recommend/' + recommend._id} className="dropdown-item" >{recommend.title}</Link>
                            )
                    }
                    
                    {
                        data.privs.map( priv =>
                            <Link to={'/priv/' + priv._id} className="dropdown-item " type="button">{priv.title}</Link>
                            )
                    }
                </div>
            </div>
            
        </div>
    )
}

export default ExcurcionsMenu
