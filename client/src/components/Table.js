import React from "react";
import api from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Table = ({ records, onTitleClick, onOpenInfoClick, sortedItem }) => {
	return (
		<table
			style={{
				width: 1000,
				borderSpacing: "10px 15px",
				borderCollapse: "separate",
			}}
		>
			<thead>
				<tr>
					{api.DATA_PROPS.map((head, i) => (
						<th style={{ width: 100 }} key={i}>
							<button
								onClick={onTitleClick}
								style={{
									backgroundColor: "transparent",
									border: "none",
									outline: "none",
								}}
							>
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
			<tbody>
				{records &&
					records.map((record) => {
						return <TableRow record={record} key={record.id} />;
					})}
			</tbody>
		</table>
	);
};

const TableRow = ({ record }) => {
	console.log(record);
	return (
		<tr>
			{Object.keys(record).map((val) =>
				val === "description" ? (
					<button onClick={() => alert(record[val])}>More Info</button>
				) : (
					<td key={val}>{record[val]}</td>
				)
			)}
		</tr>
	);
};

export default Table;
