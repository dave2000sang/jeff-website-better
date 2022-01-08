import React from 'react';
import {  Link } from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return (
			<header>
				<h2>
					<Link to="/">
						Jeffery Sang
					</Link>
				</h2>
				<div>
					<nav className="nav-bar" role="navigation">
						<ul className="mynav-list">
							<li>
								<Link to="/projects">Projects</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}

export default Navbar; // Don’t forget to use export default!
