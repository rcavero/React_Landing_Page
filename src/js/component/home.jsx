import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="body container-fluid mb-3">
				<div className="row justify-content-center">
					<div className="col-8">
						<div className="row row-cols-1">
							<Jumbotron />
						</div>
						<div className="row">
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
