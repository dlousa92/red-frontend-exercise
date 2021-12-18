import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import api from "./api";

const App = () => {
	// state variable to hold the records from the json-server server.
	const [records, setRecords] = useState();
	const [sortedItem, setSortedItem] = useState(api.DATA_PROPS[0]);

	// // use api.GET method to fetch the records from the server on component mount and whenever a user sorts by new category
	useEffect(() => {
		const data = api.GET(sortedItem, api.ORDERS[0]);
		data.then((response) => response.json()).then((data) => setRecords(data));
	}, [sortedItem]);

	const handleTitleClick = (event) => {
		// Change the order of the items when the head row item of the table gets clicked.
		// if a column title is clicked, the records should get ordered by that key in an ascending way
		// if it is clicked again it should toggle the sort order to be descending

		setSortedItem(event.target.innerText.toLowerCase());
	};

	const handleOpenInfo = (record) => {
		// Open a popup displaying the record information
	};

	console.log(sortedItem);

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
				sortedItem={sortedItem}
			/>
		</div>
	);
};

export default App;
