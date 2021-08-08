var Spawn = require('spawn');
var Harvester = require('harvester');
var Clean = require('cleanUp')

module.exports.loop = function() {
    Spawn.run()
    Clean.run()
}
