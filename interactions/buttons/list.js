const startGame = require('./src/startGame');
const join = require('./src/join');
const start = require('./src/start');

const buttonList = {
    startGame: startGame,
    join: join,
    start: start,
}

module.exports = {buttonList}