// load dependencies
const axios = require('axios');

// get API key
require('dotenv').config();
const KEY = process.env.API_KEY;

// GET photos on search query request
exports.index = (req, res, next) => {
	const rover = req.query.rover;
	const camera = req.query.camera;
	const sol = req.query.sol;

	let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${KEY}`;

	axios
		.get(url)
		.then((response) => {
			return res.json(response.data);
		})
		.catch((error) => {
			if (error.response) {
				// request made and server responded
				console.log(error.response);
			} else if (error.request) {
				// request was made but no response was recieved
				console.log(error.request);
			} else {
				console.log('Error', error.message);
			}
		});
};
