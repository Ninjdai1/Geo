const startGame = require('./src/startGame');
const join = require('./src/join');

const buttonList = {
    startGame: startGame,
    join: join,
}

module.exports = {buttonList}