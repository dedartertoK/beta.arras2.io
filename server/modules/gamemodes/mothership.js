if (mothershipletsago) return;
global.defeatedTeams = [];
let motherships = [];
let teamWon = false;
let choices = [Class.mothershiphp];

function spawn() {
    let locs = [{
        x: c.WIDTH * 0.1,
        y: c.HEIGHT * 0.1
    }, {
        x: c.WIDTH * 0.9,
        y: c.HEIGHT * 0.9
    }, {
        x: c.WIDTH * 0.9,
        y: c.HEIGHT * 0.1
    }, {
        x: c.WIDTH * 0.1,
        y: c.HEIGHT * 0.9
    }, {
        x: c.WIDTH * 0.9,
        y: c.HEIGHT * 0.5
    }, {
        x: c.WIDTH * 0.1,
        y: c.HEIGHT * 0.5
    }, {
        x: c.WIDTH * 0.5,
        y: c.HEIGHT * 0.9
    }, {
        x: c.WIDTH * 0.5,
        y: c.HEIGHT * 0.1
    }].sort(() => 0.5 - Math.random());
    for (let i = 0; i < c.TEAMS; i++) {
        let o = new Entity(locs[i]);
        o.define(ran.choose(choices));
        o.define({
            ACCEPTS_SCORE: false,
            VALUE: 643890
        });
        o.color = getTeamColor(-i - 1);
        o.team = -i - 1;
        o.name = "Mothership";
        o.isMothership = true;
        o.controllers.push(new ioTypes.nearestDifferentMaster(o), new ioTypes.mapTargetToGoal(o));
        o.refreshBodyAttributes();
        motherships.push([o.id, i]);
    }
};

function death(entry) {
    global.defeatedTeams.push(-entry[1] - 1);
    let mothershipKilled = false;
    let killerTeam = null; // Variable to store the killer team

    for (let i = 0; i < entities.length; i++) {
        let o = entities[i];
        if (o.team === -entry[1] - 1) {
            o.sendMessage("Your team has been eliminated.");
        } else {
            mothershipKilled = true;
            // Assuming o.master is the killer entity
            if (o.master && o.master.master && o.master.master.team !== TEAM_ROOM) {
                killerTeam = o.master.master;
            }
        }
    }

    if (arenaClosed) {
        mothershipKilled = false;
        return;
    } else if (overloaded) {
        mothershipKilled = false;
        return;
    }

    if (mothershipKilled && killerTeam) {
        const deadTeamName = getTeamName1(-entry[1] - 1);
        const killerTeamName = killerTeam.team > 0 ? killerTeam.name : getTeamName1(killerTeam.team);
        sockets.broadcast(`${killerTeamName} has destroyed ${deadTeamName}'s Mothership!`);
        setTimeout(closeArena, 5000);
    }

    return false;
}





function loop() {
    if (teamWon) return;
    let aliveNow = motherships.map(entry => [...entry, entities.find(entity => entity.id === entry[0])]);
    aliveNow = aliveNow.filter(entry => {
        if (!entry[2]) return death(entry);
        if (entry[2].isDead()) return death(entry);
        return true;
    });
    if (aliveNow.length === 1) {
        teamWon = true;
        const index = aliveNow[0][1]; // Assuming aliveNow[0][1] is an index or a value
        setTimeout(() => console.log(index), 5000);
    }
    motherships = aliveNow;
}




module.exports = { mothershipLoop:  { spawn, loop, motherships } };