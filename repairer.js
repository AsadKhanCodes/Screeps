const builder = require('builder');

module.exports = {
    run: function (creep) {
        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
        } else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working === true) {
            const repSite = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL
            });

            if (repSite != undefined) {
                if (creep.repair(repSite) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(repSite);
                }
            } else {
                builder.run(creep);
            }
        } else {
            source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }
};