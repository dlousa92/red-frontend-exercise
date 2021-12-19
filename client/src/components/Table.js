import React, { useState } from "react";
import api from "../api";
import Popup from "./Popup";
import tableStyles from "./table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Table = ({
	records,
	onTitleClick,
	onOpenInfoClick,
	sortedItem,
	isPopupOpen,
	setIsPopupOpen,
}) => {
	const [popupContent, setPopupContent] = useState();

	const handlePopupButtonClick = (event) => {
		// gets the description content from the button attribute and sets it as the popup content
		const description = event.target.getAttribute("description");

		setPopupContent(description);
		onOpenInfoClick(true);
	};
	return (
		<table className={tableStyles.table}>
			<Popup
				isPopupOpen={isPopupOpen}
				setIsPopupOpen={setIsPopupOpen}
				popupContent={popupContent}
			/>
			<thead className={tableStyles.tableHead}>
				<tr>
					{api.DATA_PROPS.map((head, i) => (
						<th className={tableStyles.tableHeader} key={i}>
							<button onClick={onTitleClick}>
								<h5>{head.toUpperCase()}</h5>
							</button>
							{sortedItem.item === head ? (
								<FontAwesomeIcon
									icon={
										sortedItem.order === api.ORDERS[0] ? faArrowUp : faArrowDown
									}
								/>
							) : (
								""
							)}
						</th>
					))}
				</tr>
			</thead>
			<tbody className={tableStyles.tableBody}>
				{records &&
					records.map((record) => {
						return (
							<TableRow
								record={record}
								key={record.id}
								handlePopupButtonClick={handlePopupButtonClick}
							/>
						);
					})}
			</tbody>
		</table>
	);
};

const TableRow = ({ record, handlePopupButtonClick }) => {
	return (
		<tr>
			{Object.keys(record).map((val) =>
				val === "description" ? (
					<button
						key={val}
						description={record[val]}
						onClick={handlePopupButtonClick}
					>
						More Info
					</button>
				) : (
					<td key={val}>{record[val]}</td>
				)
			)}
		</tr>
	);
};

export default Table;
