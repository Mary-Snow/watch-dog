const jsonController = require('./jsonController.js'),
      expressiveMidware = require('./trackingMidware.js'),
      onFinished = require('on-finished'),
      resListeners = require('./resListeners');

const serverListeners = {
  // checkContinue: () => {},
  // checkExpectation: () => {},
  // clientError: () => {},
  // close: (/*accepts no params*/) => {},
  // //connect, connection are socket-related
  // connect: () => {},
  // connection: () => {},
  request: (req, res) => {
    onFinished(res, resListeners.finish);
  },
  // upgrade: () => {}
}

module.exports = serverListeners;
