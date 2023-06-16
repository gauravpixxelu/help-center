import React from 'react';
import { NavLink } from "react-router-dom";
import Map from '../assets/icons/map.svg';
import Phone from '../assets/icons/phone.svg';
import Email from '../assets/icons/email.svg';
import Facebook from '../assets/icons/facebook.png';
import Twitter from '../assets/icons/twitter.png';
import Youtube from '../assets/icons/youtube.png';
import Linkedin from '../assets/icons/linkedin.png';
import Slideshare from '../assets/icons/slideshare.png';


function Footer() {
  return (
    <footer class="site-footer">
    <div class="container">
      <div className="business-footer">
        <div class="row">
          <div className="col-md-2">
            <div className="footer-logo-block">
              <NavLink class="footer-logo" to="/"><img src="../images/logo.svg" alt="" /></NavLink>
            </div>
          </div>
          <div className="col-md-8">
          <div className="footer-address">
          <ul>
                <li><img src={Map} alt="Map" /><b>Address: </b><NavLink to="#">Africa, Portugal</NavLink></li>
                <li><img src={Phone} alt="Phone" /><b>Phone: </b><NavLink to="#">0110282854</NavLink></li>
                <li><img src={Email} alt="Email" /><b>Email: </b><NavLink to="#">estelanie@red3-sixty.com</NavLink></li>
              </ul>
          </div>
          </div>
          <div className="col-md-2">
            <div className="footer-social">
            <ul>
                <li><NavLink to="https://www.facebook.com/RED3SIXTY" target="_blank" rel="noreferrer"><img src={Facebook} alt="Facebook" /></NavLink></li>
                <li><NavLink to="https://twitter.com/RED3_60" target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter" /></NavLink></li>
                <li><NavLink to="https://www.youtube.com/channel/UCXjYQMq_OPXCzNW-uOSUyUQ" target="_blank" rel="noreferrer"><img src={Youtube} alt="Youtube" /></NavLink></li>
                <li><NavLink to="https://www.linkedin.com/company/86631025" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin" /></NavLink></li>
                <li><NavLink to="https://www.slideshare.net/steve511660/edit_my_uploads" target="_blank" rel="noreferrer"><img src={Slideshare} alt="Slideshare" /></NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>2022 RED3SIXTY. All rights reserved. Design and Develop by <NavLink to="https://pixxelu.com" target="_blank" rel="noreferrer">PIXXELU</NavLink></p>
      </div>
    </div>

  </footer>


  )
}


export default Footer