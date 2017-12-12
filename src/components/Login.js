import React from 'react';

class Login extends React.Component {



	constructor(props) {
		super(props);

		// use these handlers as a wrapper to this.props.onAuthChange(results), etc.
		this.handleEmailChange = this.handleEmailChange.bind(this);
    	this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleAuthChange = this.handleAuthChange.bind(this);
	}

	//******************************************************************
	// this will pass results back up to App.js
	//******************************************************************
	handleAuthChange = (results) => {
		this.props.onAuthChange(results);
	}

	handleEmailChange = (evt) => {
		this.props.onEmailChange(evt);
	}

	handlePasswordChange = (evt) => {
		this.props.onPasswordChange(evt);
	}

	//******************************************************************
	// handles the form submission
	//******************************************************************
	handleSubmit = (evt) => {
		evt.preventDefault();
		this.postLoginRequest()
	}



  	postLoginRequest = () => {
		fetch('https://djohnsonkc-identity-provider.herokuapp.com/api/v1/accounts/' + this.props.user.email, {  
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    email: this.props.user.email,
		    password: this.props.user.password,
		  })
		})
		.then(this.handleErrors)
		.then(response => response.json())
      	.then(result => this.onLoginResult(result))
      	.catch(function(error) {
      		// catch errors thrown by handleErrors
	        console.log("catch caught an error: " + error);
	    });

  	}

  	getAccountDetailsRequest = (access_token) => {
		fetch('https://djohnsonkc-identity-provider.herokuapp.com/api/v1/accounts', {  
		  method: 'GET',
		  headers: {
		    'x-access-token': access_token,
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

	onLoginResult = (result) => {
		//console.log(JSON.stringify(result, null, 2))
		//console.log('setting local storage...' + result.access_token)
		localStorage.setItem('x-access-token', result.access_token);
		this.setState({ auth: {
			access_token: result.access_token,
			expires: result.expires_in
		} });

		// use the access_token to make another request for the account details
		this.getAccountDetailsRequest(result.access_token)

	}



	onAccountDetailsResult = (result) => {
		//console.log(JSON.stringify(result, null, 2))

		this.handleAuthChange({ 
			email: this.props.user.email,
			first_name: result.first_name,
			last_name: result.last_name,
			isLoggedIn: true,
			auth: {
				access_token: result.access_token,
				expires_in: result.expires_in
			}
		})

		this.props.history.push('/account');

	}


  	render() {
	    return (

	    	<div className="view-header">

				<div className="container">

					<div className="row">

						<div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">

							<div className="text-center">
								<h1>Login</h1>
							</div>

							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<input type="text" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email address"  value={this.props.user.email} onChange={this.handleEmailChange} />
								</div>
								<div className="form-group">
									<input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" value={this.props.user.password} onChange={this.handlePasswordChange} />
								</div>
								<div className="form-group text-center">
									<input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
									<label htmlFor="remember"> Remember Me</label>
								</div>
								<div className="form-group">
									<div className="row">
										<div className="col-sm-6 col-sm-offset-3">
											<input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-primary" value="Log In" />
										</div>
									</div>
								</div>
								<div className="form-group">
									<div className="row">
										<div className="col-lg-12">
											<div className="text-center">
												<a href="" tabIndex="5" className="forgot-password">Forgot Password?</a>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>

				</div>

	    	</div>
	    );
  }
}


export default Login;