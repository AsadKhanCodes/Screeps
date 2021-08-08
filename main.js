var Spawn = require('spawn');
var Clean = require('cleanUp');
var Controller = require('creepController');

module.exports.loop = function() {
    Spawn.run()
    Clean.run()
}
