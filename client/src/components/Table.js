import React from "react";
import api from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUp,
	faArrowDown,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Table = ({ records, onTitleClick, onOpenInfoClick }) => {
	console.log(records);
	return (
		<table style={{ width: 1000 }}>
			<thead>
				<tr>
					{api.DATA_PROPS.map((head) => (
						<th style={{ width: 100 }}>
							{head}
							<button onClick={onTitleClick}>
								<FontAwesomeIcon icon={faArrowRight} />
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
	console.log(record);
	return (
		<tr>
			{Object.keys(record).map((val) => (
				<td>{record[val]}</td>
			))}
		</tr>
	);
};

export default Table;
