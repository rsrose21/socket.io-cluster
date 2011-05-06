var io = require('socket.io'),
    ioNode = require('./lib/io-node').listener,
    appNode = require('./lib/app-node').listener;

exports.listen = listen;
exports.getClient = getClient;

function listen(server, config) {
    var socketIo = io.listen(server);
    new ioNode(socketIo, config);

    return socketIo;
}

function getClient(config) {
    return new appNode(config);
}