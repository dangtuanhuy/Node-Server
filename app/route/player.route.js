module.exports = function (app) {

    const players = require('../controller/player.controller.js');

    // Create a new player
    app.post('/api/players', players.create);

    // Retrieve all player
    app.get('/api/players', players.findAll);

    // Retrieve a single player by Id
    app.get('/api/players/:playerId', players.findById);

    // Update a player with Id
    app.put('/api/players', players.update);

    // Delete a player with Id
    app.delete('/api/players/:playerId', players.delete);
}