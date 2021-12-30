import React from 'react';
class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="nav-bar" role="navigation">
					<ul className="mynav-list">
						<li>
							<a href="pages/fashion.html">Fashion</a>
						</li>
						<li>
							<a href="pages/fine_art.html">Fine Art</a>
						</li>
						<li>
							<a href="pages/contact.html">Contact</a>
						</li>
						<li>
							<a href="pages/about.html">About</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar; // Don’t forget to use export default!
