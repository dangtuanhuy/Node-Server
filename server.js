var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync with { force: true }');
    initial();
});

require('./app/route/player.route.js')(app);

// Create a Server
var server = app.listen(8080, function () {

    let host = server.address().address
    let port = server.address().port

    console.log("App listening at http://%s:%s", host, port);
})

function initial() {

    let players= [
        {
            id: 1,
            nationality: "Joe",
            name: "Thomas",
            team: 36,
            point: 10
        },
        {
            id: 2,
            nationality: "Joe",
            name: "Thomas",
            team: 36,
            point: 10
        },
        {
            id: 3,
            nationality: "Joe",
            name: "Thomas",
            team: 36,
            point: 10
        },
        {
            id: 4,
            nationality: "Joe",
            name: "Thomas",
            team: 36,
            point: 10
        },
        {
            id: 5,
            nationality: "Joe",
            name: "Thomas",
            team: 36,
            point: 10
        }
    ]

    // Init data -> save to MySQL
    const Player = db.players;
    for (let i = 0; i < players.length; i++) {
        Player.create(players[i]);
    }
}