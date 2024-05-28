/** @format */

import React from "react";
import "./contactForm.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
	return (
		<section className="container2">
			<div className="contact-form">
				<div className="top-button">
					<Button
						text="VIA SUPPORT CHAT"
						icon={<MdMessage fontSize="24px" />}
					/>
					<Button text="VIA CALL" icon={<IoIosCall fontSize="24px" />} />
				</div>
				<Button
					isOutline={true}
					text="VIA EMAIL FORM"
					icon={<HiMail fontSize="24px" />}
				/>
			</div>
			<div className="contact-img"></div>
		</section>
	);
};

export default ContactForm;
