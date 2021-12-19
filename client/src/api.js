const DEMO_RECORDS = [
	{
		id: 0,
		rank: 0,
		name: "DUMMY PERSON",
		age: 99,
		points: 10,
		description:
			"Omnis eligendi ipsam est velit. Error provident natus amet reprehenderit dolores. Consequatur eos placeat officiis omnis earum tempora est sit qui. Aliquid illum in sunt aperiam asperiores sunt dolorem corrupti omnis. Quia autem sunt consectetur sunt laborum doloribus fugiat et. Sed odit ex ut pariatur rerum autem laborum quos tempora. Quia unde quae illo ea consequatur deserunt ea. Laudantium et cum et et doloribus iure neque non. Dicta et enim quia. Exercitationem sunt non accusamus at enim. Quia consectetur vero est sit accusantium. Et sit dolor eum voluptatem. Quidem minus aut magni quis cumque quam. Laborum saepe ut iusto molestias dignissimos omnis atque odio. Quis saepe sed accusantium non qui. Rem veniam est et fuga explicabo est sunt ea eligendi. Veniam cupiditate est corporis dicta sunt exercitationem dolor adipisci. Expedita labore et.",
	},
	{
		id: 100,
		rank: 99,
		name: "ANOTHER DUMMY PERSON",
		age: 50,
		points: 11,
		description:
			"Adipisci laboriosam esse omnis illo ducimus tempore ratione commodi et. Tempore voluptatem qui assumenda animi explicabo expedita. Temporibus assumenda provident. Sit voluptatibus rerum saepe quia non. Voluptatem aperiam ut aut et quod. Ipsam autem doloribus rerum sint repudiandae inventore. Numquam ut qui quasi voluptatem accusantium. Cum accusamus eligendi aliquam earum. Ullam ratione ducimus quae eum nihil est ut. Voluptatem magnam sint est id reprehenderit esse. Optio deserunt voluptas animi ipsa recusandae itaque nisi voluptatem. Iste veritatis aliquid quam architecto earum rerum illum molestiae consequatur. Aut et doloribus officiis ut voluptatem dicta sit repellendus eum. Dolor saepe magnam inventore eos eum ad esse. Doloribus rem non omnis quae perspiciatis.",
	},
];

/**
 * @module API
 * @todo Configure GET function as needed to interact with the server
 * @todo Update App.js so it fetches the data from the server correctly
 * @todo Update Table.js so it can display a table of elements in any way you consider optimal
 * @todo Update App.js and Table.js so records can be re-ordered with table title row clicks.
 * @todo Create a Popup.js component [using CRA CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
 * @todo Update App.js and Table.js so the custom Popup.js can be displayed when clicking a "more info" button that should be present in each row of the table.
 */

/**
 *  list of data object properties
 */
const DATA_PROPS = ["id", "rank", "points", "name", "age"];

/**
 * list of possible order directions
 */
const ORDERS = ["asc", "desc"];

/**
 * server url
 */
const url = "http://localhost:3015/people";

/**
 *  GET function. It should get the data sorted by the provided key and order
 * @param {string} sortBy
 * @param {string} order
 */
const GET = (sortBy, order) => {
	return fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const unsortedData = data;
			if (order === ORDERS[0]) {
				const sortedData = unsortedData.sort((a, b) =>
					a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0
				);
				return sortedData;
			}

			const sortedData = unsortedData.sort((a, b) =>
				a[sortBy] < b[sortBy] ? 1 : b[sortBy] < a[sortBy] ? -1 : 0
			);
			return sortedData;
		});
};

const api = {
	GET,
	DATA_PROPS,
	ORDERS,
	DEMO_RECORDS,
};

export default api;
