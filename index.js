// Import Express.js
import express from 'express'

// This variable defines the port of your computer where the API will be available
const PORT = 5000

// This variable instantiate the Express.js library
const app = express()


// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The Books API is running on: http://localhost:${PORT}.`)
)
// Static variable containing your books
let bookList = [
    {
      product: "shirts",
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
  
  // Replace the route name
  app.get('/books', (request, response) => {
    // The function will return your bookList in a JSON
    // Sample: { allBooks: ["Make Time: How to Focus on what Matters Every Day", "The Power Of Habit"]}
    return response.json({ bookList })
  })

  