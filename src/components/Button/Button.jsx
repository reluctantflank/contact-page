/** @format */

import React from "react";
import { MdMessage } from "react-icons/md";
import "./button.css";

const Button = (props) => {
	const { isOutline, icon, text } = props;

	return (
		<button className={isOutline ? "outline-btn" : "primary-btn"}>
			{icon}
			{text}
		</button>
	);
};

export default Button;
