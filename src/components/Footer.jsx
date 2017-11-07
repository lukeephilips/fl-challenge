import React from 'react';
function Footer(props) {
  return(
    <div className="App-footer row">
      <div className="col-sm-4">
        <ul className="site-links">
          <li>Home</li>
          <li>Manage Account</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="col-sm-4">
        <ul className="site-links">
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Collection Statement</li>
        </ul>
      </div>
      <div className="col-sm-4">
        Social stuff
      </div>
    </div>
  )
}
export default Footer;
