import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (

      <div className="view-header">

        <div className="container">

          <div className="row">


            <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">




              {!this.props.isLoggedIn ? (
                <div>
                  <h2>Login Required</h2>
                  <p>Please login to view your account info</p>
                  <p><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></p>
                </div>
              ) : (

                <p>Welcome, {this.props.user.first_name}! <Link to="/logout"><span className="glyphicon glyphicon-log-out"></span>Logout</Link></p>
              
              )}


            </div>


          </div>

          </div>

      </div>
    );
  }
}

export default Home;