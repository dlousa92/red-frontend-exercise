import React, { useState, useEffect, useRef } from "react";
import Table from "./components/Table";
import api from "./api";

const App = () => {
	// state variable to hold the records from the json-server server.
	const [records, setRecords] = useState();
	const [sortedItem, setSortedItem] = useState({
		item: api.DATA_PROPS[0],
		order: api.ORDERS[0],
	});
	const prevSortedItem = useRef();

	// // use api.GET method to fetch the records from the server on component mount and whenever a user sorts by new category
	useEffect(() => {
		const data = api.GET(sortedItem.item, sortedItem.order);
		data.then((responseData) => setRecords(responseData));

		prevSortedItem.current = sortedItem;
	}, [sortedItem]);

	const handleTitleClick = (event) => {
		// Change the order of the items when the head row item of the table gets clicked.
		// if a column title is clicked, the records should get ordered by that key in an ascending way
		// if it is clicked again it should toggle the sort order to be descending

		if (prevSortedItem.current.item === event.target.innerText.toLowerCase()) {
			setSortedItem({
				item: event.target.innerText.toLowerCase(),
				order:
					prevSortedItem.current.order === api.ORDERS[0]
						? api.ORDERS[1]
						: api.ORDERS[0],
			});
		} else {
			setSortedItem({
				item: event.target.innerText.toLowerCase(),
				order: api.ORDERS[0],
			});
		}
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
				sortedItem={sortedItem}
			/>
		</div>
	);
};

export default App;
