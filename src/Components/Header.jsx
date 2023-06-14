import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import SupportPopup from './SupportPopup';


function Header() {
  return (

    <header className="site-header business-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <NavLink className="navbar-brand" to="/"><img src="images/help-logo.svg" alt="" /></NavLink>
          <ul className="navbar-nav">
          <li className="nav-item">
              <NavLink to="/" className="nav-link custom-btn back-page"><span><FontAwesomeIcon icon={faAnglesLeft} /> Help Center</span></NavLink>
            </li>
            <li className="nav-item">
              <SupportPopup />
            </li>
          </ul>
        </nav>
      </div>
    </header>

  )
}

export default Header