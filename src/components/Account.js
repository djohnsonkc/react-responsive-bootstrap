import React from 'react';
import { Link } from 'react-router-dom';


class Account extends React.Component {


  componentDidMount() {
    fetch('https://djohnsonkc-identity-provider.herokuapp.com/api/v1/accounts', {  
      method: 'GET',
      headers: {
        'x-access-token': localStorage.getItem('x-access-token'),
        'Content-Type': 'application/json',
      }
    })
    .then(this.handleErrors)
    .then(response => response.json())
    .then(result => this.onAccountDetailsResult(result))
    .catch(function(error) {
        // catch errors thrown by handleErrors
        console.log("catch caught an error: " + error);
    });
  }

  handleErrors = (response) => {
      if (!response.ok) {
        // throw an error that will be caught by fetch.catch 
          throw Error(response.statusText);
      }
      return response;
  }

  onAccountDetailsResult = (result) => {
    console.log("account page: " + JSON.stringify(result, null, 2))

  }

  render() {
    return (


        <div className="view-header">

        <div className="container">

          <div className="row">
          
            <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">

              <h1>Account Info</h1>


              {!this.props.user.isLoggedIn ? (
                <div>
                  <p>Please login to view your account info</p>
                  <p><Link to="/login" className="btn btn-lg btn-primary">Login</Link></p>
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

export default Account;
