var cleanUp = {
    run: function() {
        for (const i in Memory.creeps) {
            // If creep data is saved in Memory but creep is not in game, delete creep from memory
            // and reduce number of creeps of that role in game by 1
            if (!Game.creeps[i]) {
                Memory.GameInfo.numOfCreeps[Memory.creeps[i].role]--
                delete Memory.creeps[i];
            }
        }
    }
};

module.exports = cleanUp
