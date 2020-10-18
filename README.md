# Online-Offline-Budget-Tracker [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Persistent cached online/offline budget tracker server app using IndexedDB and MongoDB Atlas

## Description 

Online Offline Budget Tracker logs user expenditures/income and graphs account balance over time.
Transactions are stored and queried from a Mongoose/MongoDB Atlas cluster when the user's device can communicate with the database. 
If the database is unavaible (i.e. if the user has no internet connection) transaction data will be stored user side using an IndexedDB object store. 
When the connection to the database is reestablished the contents of the IndexedDB object store will be sent to the database, and the object store will be cleared.


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

Clone this repo.
Run `npm install` in the cloned base directory, and run locally (`npm start` executes `node server.js`)


## Usage 

The index page provides all the functionality of the app. Users are able to input a transaction name, transaction amount, and select if the transaction is income or expenditure.
Transactions are show in a graph form over time, and also in a line item spreadsheet.
![Transaction entry, history, and account balance graph](https://github.com/jodoedjr/Online-Offline-Budget-Tracker/blob/main/assets/budget-app-screenshot.png "Budget Tracker and graph")


## License

This repo is covered by the MIT license


## Contributing

Please add issues to the issues section of the repo


## Tests

no tests provided


## Questions

Find me on GitHub at: https://github.com/jodoedjr

