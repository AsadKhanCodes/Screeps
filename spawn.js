var spawn = {
    run: function() {
        for(const i in Game.spawns) {
            if (Game.spawns[i].store[RESOURCE_ENERGY] == Game.spawns[i].store.getCapacity(RESOURCE_ENERGY)) {
                // If less than 2 Harvesters, spawn a harvester
                if (Memory.GameInfo.numOfCreeps['harvester'] < 2) {
                    harvester_name = 'harvester'.concat((Math.round(Math.random() * 100000000000)).toString())
                    Game.spawns[i].spawnCreep([WORK, CARRY, MOVE, MOVE, MOVE], harvester_name, {
                        memory: {role: 'harvester'}
                    });
                    Memory.GameInfo.numOfCreeps['harvester']++
                }
            }
        }
    }
};

module.exports = spawn
