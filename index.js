const fs = require('fs');
const Sequelize = require('sequelize');
const { Client } = require("discord.js");
const { token, sequelizeCredentials } = require('./config.json');
const { deploy_commands } = require('./functions.js');

const client = new Client({
    intents: []
});

const sequelize = new Sequelize('database', sequelizeCredentials.username, sequelizeCredentials.password, {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});
const users = sequelize.define('users', {
	name: {//id
		type: Sequelize.STRING,
		unique: true,
	},
    gamesPlayed: Sequelize.INTEGER,
	gamesWon: Sequelize.INTEGER,
    points: Sequelize.INTEGER
});

client.database = {
	sequelize: sequelize,
	users: users,
};

users.sync();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

deploy_commands(client, true);//true will refresh slash commands, false will clear them


client.login(token);