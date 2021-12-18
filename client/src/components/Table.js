import React from "react";
import api from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUp,
	faArrowDown,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Table = ({ records, onTitleClick, onOpenInfoClick, sortedItem }) => {
	return (
		<table style={{ width: 1000 }}>
			<thead>
				<tr>
					{api.DATA_PROPS.map((head) => (
						<th style={{ width: 100 }}>
							<button
								onClick={onTitleClick}
								style={{
									backgroundColor: "transparent",
									border: "none",
									outline: "none",
								}}
							>
								<h5>{head.toUpperCase()}</h5>
								{sortedItem === head ? (
									<FontAwesomeIcon icon={faArrowDown} />
								) : (
									""
								)}
							</button>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{records &&
					records.map((record) => {
						return <TableRow record={record} />;
					})}
			</tbody>
		</table>
	);
};

const TableRow = ({ record }) => {
	return (
		<tr>
			{Object.keys(record).map((val) => (
				<td>{record[val]}</td>
			))}
		</tr>
	);
};

export default Table;
