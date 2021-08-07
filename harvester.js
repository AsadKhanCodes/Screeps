module.exports = {
    run: function (creep) {
        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
        } else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.working = true;
        }

        let source;
        if (creep.memory.working === true) {
            const struct = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => s.energy < s.energyCapacity
            });

            if (struct != undefined) {
                if (creep.transfer(struct, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(struct);
                }
            }
        } else {
            source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }
};