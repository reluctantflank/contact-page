/** @format */

import React from "react";
import "./contactForm.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
	const ViaChat = () => {
		alert("Chat Opening");
	};

	const ViaCall = () => {
		alert("Call Opening");
	};

	const ViaEmail = () => {
		alert("Email Opening");
	};

	return (
		<section className="container2">
			<div className="contact-form">
				<div className="top-button">
					<Button
						onClick={ViaChat}
						text="VIA SUPPORT CHAT"
						icon={<MdMessage fontSize="24px" />}
					/>
					<Button
						onClick={ViaCall}
						text="VIA CALL"
						icon={<IoIosCall fontSize="24px" />}
					/>
				</div>
				<Button
					onClick={ViaEmail}
					isOutline={true}
					text="VIA EMAIL FORM"
					icon={<HiMail fontSize="24px" />}
				/>

				<form>
					<div className="form-control">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" />
					</div>
					<div className="form-control">
						<label htmlFor="email">E-mail</label>
						<input type="email" name="email" />
					</div>
					<div className="form-control">
						<label htmlFor="text">Text</label>
						<textarea name="text" rows="8" />
					</div>
					<div style={{ display: "flex", justifyContent: "end" }}>
						<Button text="SUBMIT" />
					</div>
				</form>
			</div>
			<div className="contact-img">
				<img src="/images/contact.svg" alt="contact-img" />
			</div>
		</section>
	);
};

export default ContactForm;
