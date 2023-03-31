import React from 'react';

function Header() {
  return (

    <header className="site-header business-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/"><img src="images/help-logo.svg" alt="" /></a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link custom-btn" href="/implementation-partners" aria-current="page"> 
              <span>Log a Support Request</span>
              </a>
            </li> 
          </ul>
        </nav>
      </div>
    </header>

  )
}

export default Header