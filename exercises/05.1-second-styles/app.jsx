import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	//write button styles here
	background: "yellow",
	color: "black",
	border: "0px",
	padding: "5px",
	paddingLeft: "7px",
	paddingRight: "7px",
	fontWeight: "bold",
};

const badgeStyles = {
	//write the span styles here
	background: "red",
	color: "white",
	borderRadius: "50%",
	padding: "5px",
	paddingTop: "2px",
	paddingBottom: "2px",
	margin: "3px",
	marginTop: "0px",
};

const Badge = (props) => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string,
};
//dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
