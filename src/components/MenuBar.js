import React from 'react';
import { Link } from 'react-router-dom';

class MenuBar extends React.Component {

  render() {
    return (
    	<div>
		    <div className="menu-bar">
		      <div className="container">
		        <p className="menu-links">
		          <Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span></Link>
		          <Link to="/dams">Dams</Link>
		          <Link to="/reports">Reports</Link>
		        </p>
		      </div>
		    </div>
    	</div>
    );
  }
}

export default MenuBar;