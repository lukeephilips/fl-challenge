import React from 'react';
import air from '../assets/air.svg';
import ocean from '../assets/ocean.svg';
import customs from '../assets/customs.svg';
import {Link} from 'react-router-dom';

function Home(props) {
  return(
    <div className="row home-links">
      <div className="col-sm-4">
        <div className="panel panel-default">
          <Link to="/air">
            <div className="panel-body">
              <img className="tile-img" src={air} alt="Air" />
              <span className="tile-label">Air</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-default">
          <Link to="/ocean">
            <div className="panel-body">
                <img className="tile-img" src={ocean} alt="Ocean" />
                <span className="tile-label">Ocean</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-default">
          <Link to="/customBroker">
            <div className="panel-body">
                <img className="tile-img" src={customs} alt="Customs"/>
                <span className="tile-label">Customs Brokers</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
