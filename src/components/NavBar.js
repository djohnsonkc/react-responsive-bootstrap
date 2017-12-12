import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

  render() {
    return (
    	<div>

		<nav className="navbar navbar-default navbar-fixed-top templatemo-nav" role="navigation">
		  <div className="container">
		    <div className="navbar-header">
		      <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
		        <span className="icon icon-bar"></span>
		        <span className="icon icon-bar"></span>
		        <span className="icon icon-bar"></span>     
		     </button>
		      <a href="/" className="navbar-brand"><img src="img/logo.png" className="app-icon" align="left" />
		       <span className="app-name">MyApp</span></a>
		    </div>
		    <div className="collapse navbar-collapse">
		      <ul className="nav navbar-nav navbar-right">
		        <li><a href="/">HOME</a></li>
		        <li><a href="/account">ACCOUNT</a></li>
		      </ul>
		    </div> 
		  </div>
		</nav>




		</div>
    );
  }
}

export default NavBar;

