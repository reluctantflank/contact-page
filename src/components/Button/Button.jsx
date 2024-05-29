/** @format */

import React from "react";
import { MdMessage } from "react-icons/md";
import "./button.css";

const Button = (props) => {
	const { onClick, isOutline, icon, text } = props;

	return (
		<button
			onClick={onClick}
			className={isOutline ? "outline-btn" : "primary-btn"}>
			{icon}
			{text}
		</button>
	);
};

export default Button;
