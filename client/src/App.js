import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import api from "./api";

const App = () => {
	// state variable to hold the records from the json-server server.
	const [records, setRecords] = useState();

	// // use api.GET method to fetch the records from the server on component mount
	useEffect(() => {
		const data = api.GET(api.DATA_PROPS[0], api.ORDERS[0]);
		data.then((response) => response.json()).then((data) => setRecords(data));
	}, []);

	const handleTitleClick = (value) => {
		// Change the order of the items when the head row item of the table gets clicked.
		// if a column title is clicked, the records should get ordered by that key in an ascending way
		// if it is clicked again it should toggle the sort order to be descending
	};

	const handleOpenInfo = (record) => {
		// Open a popup displaying the record information
	};

	return (
		<div className="container">
			<header className="text-center my-4">
				<h1>Leaderboard</h1>
			</header>
			<div className="mb-3">{!records ? "Loading 🕑" : "Loaded ✅"}</div>
			<Table
				onTitleClick={handleTitleClick}
				onOpenInfoClick={handleOpenInfo}
				records={records}
			/>
		</div>
	);
};

export default App;
