import React from 'react'
import {useTranslation} from 'react-i18next'
import { Link } from 'react-router-dom'
const Language = () => {
    // eslint-disable-next-line no-unused-vars
    const {t, i18n} = useTranslation()

     const handleClick = (lang) =>{
         i18n.changeLanguage(lang)
     } 
    return (
        <div>
            
          <div className="dropdown">
            <Link className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Language
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item"  onClick={() => handleClick('en')} >English</Link>
                <Link className="dropdown-item"  onClick={() => handleClick('chi')} >Turkish</Link>
                
            </div>
            </div>
        </div>
    )
}

export default Language
