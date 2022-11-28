import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="container pt-10 pb-10 flex justify-between">
				<div className="logo text-4xl text-white opacity-98 drop-shadow-md">
					blogME
				</div>
				<div className="links no-underline flex gap-8 text-md justify-center items-center text-white font-light ">
					<Link to="?cat=art">
						<h6>ART</h6>
					</Link>

					<Link to="?cat=science">
						<h6>SCIENCE</h6>
					</Link>

					<Link to="?cat=tech">
						<h6>TECH</h6>
					</Link>

					<Link to="?cat=cinema">
						<h6>CINEMA</h6>
					</Link>

					<Link to="?cat=design">
						<h6>DESIGN</h6>
					</Link>

					<Link to="?cat=food">
						<h6>FOOD</h6>
					</Link>
					<span>Name</span>
					<span>Logout</span>
					<span>
						<Link to="/compose">Compose</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
