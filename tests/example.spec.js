const { chromium } = require('playwright');

async function filterAndExportToCSV(searchProductName) {
  const arrayOfObjects = [
    { product: 'Product A', productPrice: 10 },
    { product: 'Product B', productPrice: 5 },
    { product: 'Product C', productPrice: 20 },
    // Add more objects here
  ];

  // Filter the array to include only objects with matching product name
  const filteredArray = arrayOfObjects.filter(({ product }) => product === searchProductName);

  // Sort the filtered array based on the 'productPrice' property in ascending order
  filteredArray.sort((a, b) => a.productPrice - b.productPrice);

  // Get the three objects with the lowest prices
  const threeLowestPrices = filteredArray.slice(0, 3);

  // Convert the data to CSV format
  const csvData = threeLowestPrices.map(({ product, productPrice }) => `${product},${productPrice}`).join('\n');

  // Launch a new browser instance
  const browser = await chromium.launch();

  // Create a new context
  const context = await browser.newContext();

  // Create a new page in the context
  const page = await context.newPage();

  // Navigate to a data URL with the CSV content
  const dataURL = `data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`;
  await page.goto(dataURL);

  // Wait for a short time to ensure the download starts
  await page.waitForTimeout(3000);

  // Close the browser
  await browser.close();
}

const searchProductName = 'Product B';
filterAndExportToCSV(searchProductName);
