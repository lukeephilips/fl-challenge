import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return(
    <div className="App-header">
    <Link to="/"><span className="App-title">SHIPSTR</span></Link>
      <span className="App-login">Log in</span>
    </div>
  )
}

export default Header;
