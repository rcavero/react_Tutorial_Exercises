import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
	//add the condition inside this function
	if (props.show === false) {
		return null;
	} else {
		return (
			<div>
				<div className="alert alert-danger" role="alert">
					{props.text}
				</div>
			</div>
		);
	}
};
Alert.propTypes = {
	show: PropTypes.bool,
	text: PropTypes.string,
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(<Alert text="This is a primary alert-check it out!" show={true} />, document.querySelector("#myDiv"));
