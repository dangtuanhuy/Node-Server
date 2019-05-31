module.exports = (sequelize, Sequelize) => {
	const Player = sequelize.define('player', {
		nationality: {
			type: Sequelize.STRING
		},
		name: {
			type: Sequelize.STRING
		},
		team: {
			type: Sequelize.INTEGER
        },
        point: {
			type: Sequelize.INTEGER
		}
	});

	return Player;
}