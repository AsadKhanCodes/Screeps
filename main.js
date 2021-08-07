const harvester = require('harvester');
const upgrader = require('upgrader');
const builder = require('builder');
const repairer = require('repairer');

module.exports.loop = function () {

    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) delete Memory.creeps[name];
    }

    for (let name in Game.creeps) {
        let creep = Game.creeps[name];

        if (creep.memory.role === 'Harvester') harvester.run(creep);
        else if (creep.memory.role === 'Upgrader') upgrader.run(creep);
        else if (creep.memory.role === 'Builder') builder.run(creep);
        else if (creep.memory.role === 'Repairer') repairer.run(creep);
    }

    let numHarvesters = _.sum(Game.creeps, (c) => c.memory.role === 'Harvester');
    let numUpgraders = _.sum(Game.creeps, (c) => c.memory.role === 'Upgrader');
    let numBuilders = _.sum(Game.creeps, (c) => c.memory.role === 'Builder');
    let numRepairers = _.sum(Game.creeps, (c) => c.memory.role === 'Repairer');
    let name = undefined;

    let rand = Math.random();

    const workBody = [WORK, WORK, CARRY, MOVE];
    const carryBody = [WORK, CARRY, CARRY, MOVE, MOVE];


    if (numHarvesters < 4) {
        name = Game.spawns.Alpha.createCreep(workBody, undefined, {
            working: false,
            role: 'Harvester'
        });
    } else if (numUpgraders < 5) {
        name = Game.spawns.Alpha.createCreep(carryBody, undefined, {
            working: false,
            role: 'Upgrader'
        });
    } else if (numRepairers < 2) {
        name = Game.spawns.Alpha.createCreep(workBody, undefined, {
            working: false,
            role: 'Repairer'
        });
    } else if (numBuilders < 1) {
        name = Game.spawns.Alpha.createCreep(workBody, undefined, {
            working: false,
            role: 'Builder'
        });
    }  else {
        if (rand >= 0.5) {
            name = Game.spawns.Alpha.createCreep(carryBody, undefined, {
                working: false,
                role: 'Upgrader'
            });
        } else {
            name = Game.spawns.Alpha.createCreep(workBody, undefined, {
                working: false,
                role: 'Builder'
            });
        }
    }
};

// BODYPART_COST: { "move": 50, "work": 100, "attack": 80, "carry": 50, "heal": 250, "ranged_attack": 150, "tough": 10, "claim": 600 }