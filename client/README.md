<a name="module_API"></a>

## API

**Todo**

- [x] Configure GET function as needed to interact with the server
- [x] Update App.js so it fetches the data from the server correctly
- [x] Update Table.js so it can display a table of elements in any way you consider optimal
- [x] Update App.js and Table.js so records can be re-ordered with table title row clicks.
- [ ] Create a Popup.js component [using CRA CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
- [x] Update App.js and Table.js so the custom Popup.js can be displayed when clicking a "more info" button that should be present in each row of the table.
- [ ] (hint) use DATA_PROPS as needed to interact with the server
- [ ] (hint) use ORDERS as needed to interact with the server

* [API](#module_API)
  - [~DATA_PROPS](#module_API..DATA_PROPS)
  - [~ORDERS](#module_API..ORDERS)
  - [~GET(sortBy, order)](#module_API..GET)

<a name="module_API..DATA_PROPS"></a>

### API~DATA_PROPS

list of data object properties

**Kind**: inner constant of [<code>API</code>](#module_API)  
<a name="module_API..ORDERS"></a>

### API~ORDERS

list of possible order directions

**Kind**: inner constant of [<code>API</code>](#module_API)  
<a name="module_API..GET"></a>

### API~GET(sortBy, order)

GET function. It should get the data sorted by the provided key and order

**Kind**: inner method of [<code>API</code>](#module_API)

| Param  | Type                |
| ------ | ------------------- |
| sortBy | <code>string</code> |
| order  | <code>string</code> |
