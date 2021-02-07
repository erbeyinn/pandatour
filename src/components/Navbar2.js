import React from 'react'
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import Language from './Language'
import RecommendedToursMenu from '../navbarMenus/RecommendedToursMenu'
import PrivateToursMenu from '../navbarMenus/PrivateToursMenu'
import ExcurcionsMenu from '../navbarMenus/ExcurcionsMenu'

import AirportTransferTour from '../navbarMenus/AirportTransferTour'
import RentHousesMenu from '../navbarMenus/RentHousesMenu'
function Navbar2() {


    
   // eslint-disable-next-line no-unused-vars
   const {t, i18n} = useTranslation()

    return (
      <div className="container-fluid m-0 p-0" style={{ background: "orange" }}>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link className="navbar-brand" to="/">
            {t("Home.1")}{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link">
                  <RecommendedToursMenu />
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link">
                  <PrivateToursMenu />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <ExcurcionsMenu />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <AirportTransferTour />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <RentHousesMenu />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  {" "}
                  <Language />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
  
      </div>
    );
}
export default Navbar2