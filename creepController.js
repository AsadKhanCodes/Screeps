var Harvester = require('harvester');

var creepController = {
    run: function() {
        for (const i in Game.creeps) {
            switch (Memory.creeps[i].role) {
                case 'harvester':
                    Harvester.run(Game.creeps[i])
            }
        }
    }
};

module.exports = creepController;
