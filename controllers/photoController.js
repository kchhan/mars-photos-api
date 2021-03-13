// load dependencies
const axios = require('axios');
const { query, validationResult } = require('express-validator');

// get API key
require('dotenv').config();
const KEY = process.env.API_KEY;

// GET photos on search query request
exports.index = [
	// validate
	query('rover')
		.not()
		.isEmpty()
		.withMessage('Rover field must not be empty')
		.trim()
		.isAlpha()
		.withMessage('Rover field must contain only alphabet characters'),
	query('camera')
		.not()
		.isEmpty()
		.withMessage('Camera field must not be empty')
		.trim()
		.isAlpha()
		.withMessage('Camera field must contain only alphabet characters'),
	query('sol')
		.not()
		.isEmpty()
		.withMessage('Sol field must not be empty')
		.trim()
		.isInt()
		.withMessage('Sol field must be an integer'),

	// sanitize
	query('*').escape(),

	(req, res, next) => {
		// express-validator result
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			// there are errors, send error messages to client
			return res.json({ errors: errors.array() });
		} else {
			// no errors. send query and request photos
			const rover = req.query.rover;
			const camera = req.query.camera;
			const sol = req.query.sol;

			let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${KEY}`;

			axios
				.get(url)
				.then((response) => {
					return res.json(response.data);
				})
				.catch((err) => {
					if (err.response) {
						// request made and server responded
						res.json({ errors: err.response });
					} else if (err.request) {
						// request was made but no response was recieved
						res.json({ errors: err.request });
					} else {
						res.json({ errors: err.message });
					}
				});
		}
	},
];
