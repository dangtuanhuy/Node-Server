module.exports = (sequelize, Sequelize) => {
	const Player = sequelize.define('player', {
		Nationality: {
			type: Sequelize.STRING
		},
		Name: {
			type: Sequelize.STRING
		},
		Team: {
			type: Sequelize.INTEGER
        },
        Point: {
			type: Sequelize.INTEGER
		}
	});

	return Player;
}