import React, { useState } from "react";

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  {
    product: "Shirts",
    productPrice: 10,
    path: "https://www.w3schools.com/images/picture.jpg"
  },
  {
    product: "kids",
    productPrice: 5,
    path: "https://www.w3schools.com/images/picture.jpg"
  },
  {
    product: "Gents",
    productPrice: 20,
    path: "https://www.w3schools.com/images/picture.jpg"
  },
  {
    product: "Ladies",
    productPrice: 3,
    path: "https://www.w3schools.com/images/picture.jpg"
  },
  {
    product: "kids",
    productPrice: 15,
    path: "https://www.w3schools.com/images/picture.jpg"
  },
  {
    product: "kids",
    productPrice: 53,
    path: "https://www.w3schools.com/images/picture.jpg"
  },
  {
    product: "kids",
    productPrice: 10,
    path: "https://www.w3schools.com/images/picture.jpg"
  },
  {
    product: "Gents",
    productPrice: 25,
    path: "https://www.w3schools.com/images/picture.jpg"
  },
  {
    product: "Ladies",
    productPrice: 30,
    path: "https://www.w3schools.com/images/picture.jpg"
  }
];

function App() {
  // the value of the search field
  const [name, setName] = useState("");
  const [filteredVal, setFilteredVal] = useState("");
  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);
  const searchProductName = filteredVal;
  // Filter the array to include only objects with matching product name
  const filteredArray = foundUsers.filter(
    ({ product }) => product === searchProductName
  );

  // Sort the filtered array based on the 'product price' property in ascending order
  filteredArray.sort((a, b) => a.productPrice - b.productPrice);

  // Get the three objects with the lowest prices
  let threeLowestPrices = filteredArray.slice(0, 3);

  const nestedArray = threeLowestPrices.map((product) =>
    Object.values(product)
  );
  const nestedAllArray = foundUsers.map((product) => Object.values(product));
  function download_csv_file() {
    //define the heading for each row of the data
    console.log("nestedArray", nestedArray);
    var csv = "Product,Product Price, Link\n";

    //merge the data with CSV
    if (nestedArray.length !== 0) {
      nestedArray.forEach(function (row) {
        csv += row.join(",");
        csv += "\n";
      });
    } else {
      nestedAllArray.forEach(function (row) {
        csv += row.join(",");
        csv += "\n";
      });
    }

    //display the created CSV data on the web browser
    document.write(csv);

    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";

    //provide the name for the CSV file to be downloaded
    hiddenElement.download = "Lowest Prices Lists.csv";
    hiddenElement.click();
  }
  const filter = (e) => {
    const keyword = e.target.value;
    setFilteredVal(e.target.value);
    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.product.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder="Search Item" />
        <button onClick={() => download_csv_file()}>
          Download CSV(Three lowest prices)
        </button>
        <div className="user-list" style={{ justifyItems: "center" }}>
          {foundUsers && foundUsers.length > 0 ? (
            foundUsers.map((user) => (
              <li
                key={user.id}
                className="user"
                style={{ borderBottom: "1px solid", listStyle: "none" }}
              >
                <div className="user-id">{user.product}</div>

                <div>
                  <img src={user.path} width="300px" alt="Mountain" />
                </div>
                <div className="user-name"> Price: {user.productPrice}</div>
              </li>
            ))
          ) : (
            <h1>No results found!</h1>
          )}
        </div>
      </div>
  );
}

export default App;