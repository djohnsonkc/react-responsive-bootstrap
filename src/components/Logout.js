import React from 'react';
import { Link } from 'react-router-dom';

class Logout extends React.Component {

  render() {
    return (

      <div className="view-header">

        <div className="container">

          <div className="row">


            <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">


              <h1>You have been logged out.</h1>


                  <p><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></p>


            </div>


          </div>

          </div>

      </div>
    );
  }
}

export default Logout;
