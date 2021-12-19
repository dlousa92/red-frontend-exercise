import React from "react";
import popupStyles from "./popup.module.css";

const Popup = ({ isPopupOpen, setIsPopupOpen, popupContent }) => {
	const closeHandler = () => {
		setIsPopupOpen(false);
	};

	return (
		<div
			style={{
				visibility: isPopupOpen ? "visible" : "hidden",
				opacity: isPopupOpen ? "1" : "0",
			}}
			className={popupStyles.popupWrapper}
		>
			<div className={popupStyles.popup}>
				<h3>Description</h3>
				<span className={popupStyles.close} onClick={closeHandler}>
					&times;
				</span>
				<div className={popupStyles.content}>{popupContent}</div>
			</div>
		</div>
	);
};

export default Popup;
