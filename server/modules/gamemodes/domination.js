

if (room.bas2) {
    for (let loc of room.bas2) {
        room.setType("dom3", loc);
    }
};

let dominatorTypes = ["destroyerDominatorAI1", "gunnerDominatorAI1", "trapperDominatorAI1"],
    neededToWin = 4,

    teamcounts = {},
    gameWon = false;

let spawn = (loc, team, color, type = false) => {
    type = type ? type : ran.choose(dominatorTypes);
    let o = new Entity(loc);
    o.define(type);
    o.team = team;
    o.color = color ?? getTeamColor(team);
o.danger = 7;
    o.name = "Dominator";
    o.SIZE = 50;
    o.isDominator = true;
    o.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spinWhileIdlemiaow(o, { onlyWhenIdle: true })];

    if (!teamcounts[team]) {
        teamcounts[team] = 0;
    }
    teamcounts[team]++;

    o.onDeath = () => {

        teamcounts[team]--;
        if (!teamcounts[team]) {
            delete teamcounts[team];
        }
if (arenaClosed) {
    room.setType("dom0", loc)
} else {
    if (team === TEAM_ENEMIES) {
        let killers = [];
        for (let instance of o.collisionArray) {
            if (isPlayerTeam(instance.team) && team !== instance.team) {
                killers.push(instance);
            }
        }

        let killer = ran.choose(killers);
        killer = killer ? killer.master.master : { team: TEAM_ROOM, color: room.gameMode === "tdm" ? 3 : 12 };

        let newTeam = killer.team,
            teamName = newTeam > 0 ? killer.name : getTeamName1(newTeam);

        if (newTeam === -2) {
            // If killer's team is -2, set type to "dom3" and color to red
            spawn(loc, newTeam, 12, type);  // Assuming 2 represents red color, change it accordingly
            room.setType("dom3", loc);
        } else {
            spawn(loc, newTeam, getTeamColor(killer.team), type);
            room.setType((newTeam > 0) ? "dom3" : (newTeam > -9) ? "dom" + (-newTeam) : "dom0", loc);
        }

        sockets.broadcast(`A dominator is now controlled by ${teamName}!`);
        for (let player of sockets.players) {
            if (player.body && player.body.team === newTeam) {
                player.body.sendMessage("Press H to take control of the dominator.");
            }
        }

        if (newTeam !== TEAM_ENEMIES && teamcounts[newTeam] >= neededToWin && !gameWon) {
            gameWon = true;
            setTimeout(function() {
                sockets.broadcast(teamName + " HAS WON THE GAME!");
                setTimeout(closeArena, 3000);
            }, 1500);
        }
    } else {
        spawn(loc, TEAM_ENEMIES, 3, type);
        room.setType("dom0", loc);
        sockets.broadcast("A dominator is being contested!");
    }
};
};
};

module.exports = { dominatorLoop: { spawn } };
