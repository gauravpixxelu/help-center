import React from 'react';

function Footer() {
  return (
    <footer class="site-footer">
      <div class="container">
        <div className="business-footer">
          <div class="row">
            <div className="col-md-2">
              <div className="footer-logo-block">
                <a class="footer-logo" href="/"><img src="../images/logo.svg" alt="" /></a>
              </div>
            </div>
            <div className="col-md-8">
            <div className="footer-address">
            <ul>
                  <li><img src="icons/map.svg" alt="" /><b>Address: </b><a href="#">Africa, Portugal</a></li>
                  <li><img src="icons/phone.svg" alt="" /><b>Phone: </b><a href="#">0110282854</a></li>
                  <li><img src="icons/email.svg" alt="" /><b>Email: </b><a href="#">estelanie@red3-sixty.com</a></li>
                </ul>
            </div>
            </div>
            <div className="col-md-2">
              <div className="footer-social">
              <ul>
                  <li><a href="https://www.facebook.com/RED3SIXTY" target="_blank"><img src="icons/facebook.png" alt="" /></a></li>
                  <li><a href="https://twitter.com/RED3_60" target="_blank"><img src="icons/twitter.png" alt="" /></a></li>
                  <li><a href="https://www.youtube.com/channel/UCXjYQMq_OPXCzNW-uOSUyUQ" target="_blank"><img src="icons/youtube.png" alt="" /></a></li>
                  <li><a href="https://www.linkedin.com/company/86631025" target="_blank"><img src="icons/linkedin.png" alt="" /></a></li>
                  <li><a href="https://www.slideshare.net/steve511660/edit_my_uploads" target="_blank"><img src="icons/slideshare.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <p>2022 RED3SIXTY. All rights reserved. Design and Develop by <a href="https://pixxelu.com" target="_blank">PIXXELU</a></p>
        </div>
      </div>


      {/* <div class="exit-op">
        <div class="gd-box">
          <h2>Free For Life</h2>
          <ul>
            <li>Everything you need to start with.</li>
            <li>Access to exclusive diagnostic platform.</li>
            <li>Unlimited report generation.</li>
            <li>No credit card no payments, ever!</li>
            <li>Includes online training.</li>
          </ul>
          <b>Upgrade anytime!</b>
          <p>Proof of concept. Use unlimited report generation. Only limited to 10 customers at any one time and no access to customer development modules</p>
          <a href="https://red-project.com/pages/sign-up?user_type=Consultant&subscricriptionPlan=3679d024-f6be-11ec-895e-068428e27ad2" class="custom-btn"><span>Sign Up</span></a>
          <button class="close">✕</button>
        </div>
  </div> */}


    </footer>

  )
}


export default Footer