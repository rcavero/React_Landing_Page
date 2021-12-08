import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	return (
		<div class="container-fluid col-12 py-5 mb-5">
			<h1 class="display-5 fw-bold">Custom jumbotron</h1>
			<p class="fs-5">
				Using a series of utilities, you can create this jumbotron, just
				like the one in previous versions of Bootstrap. Check out the
				examples below for how you can remix and restyle it to your
				liking.
			</p>
			<button class="btn btn-primary btn-lg" type="button">
				Example button
			</button>
		</div>
	);
};

export default Jumbotron;
