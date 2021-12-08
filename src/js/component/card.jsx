import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Card = (props) => {
	return (
		<div className="card col m-2">
			<img
				src="..."
				height="120"
				width="245"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
