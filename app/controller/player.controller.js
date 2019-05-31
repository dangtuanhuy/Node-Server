const db = require('../config/db.config.js');
const Player = db.players;

// Post a Player
exports.create = (req, res) => {
	// Save to MySQL database
	let player = req.body;
	Player.create(player).then(result => {
		// Send created  to client
		res.json(result);
	});
};

// Fetch all a Player
exports.findAll = (req, res) => {
	Player.findAll().then(players => {
		// Send all to Client
		res.json(players);
	});
};

// Find a a Player by Id
exports.findById = (req, res) => {
	Player.findById(req.params.playerId).then(player => {
		res.json(player);
	})
};

// Update a Player
exports.update = (req, res) => {
	let player = req.body;
	let id = req.body.id;
	Player.update(player,
		{ where: { id: id } }
	).then(() => {
		res.status(200).json({ msg: "updated successfully a player with id = " + id });
	});
};

// Delete a a Player by Id
exports.delete = (req, res) => {
	const id = req.params.playerId;
	Player.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).json({ msg: 'deleted successfully a player with id = ' + id });
	});
};