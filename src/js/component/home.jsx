import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="body container-fluid">
				<Jumbotron />
				{/* <Card /> */}
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
