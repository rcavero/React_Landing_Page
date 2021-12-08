import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Footer = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid d-flex">
				<a className="navbar-brand m-auto" href="#">
					Copyright My Website 2021
				</a>
			</div>
		</nav>
	);
};

export default Footer;
