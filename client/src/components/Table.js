import React from "react";
import api from "../api";

const Table = ({ records, onTitleClick, onOpenInfoClick }) => {
	console.log(records);
	return (
		<table style={{ width: 750 }}>
			<thead>
				<tr>
					{api.DATA_PROPS.map((head) => (
						<th>{head}</th>
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
