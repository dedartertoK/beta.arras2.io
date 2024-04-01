let loop;


function close() {

    for (let i = 0; i < entities.length; i++) {
        if (entities[i].isPlayer) {
            entities[i].kill();
        }
    }
            // Remove motherships
            for (let i = entities.length - 1; i >= 0; i--) {
                if (entities[i].isMothership) {
                    entities[i].kill();
                }
            }
                        // Remove motherships
                        for (let i = entities.length - 1; i >= 0; i--) {
                            if (entities[i].isMothership1) {
                                entities[i].kill();
                            }
                        }
                                    // Remove dominators
            for (let i = entities.length - 1; i >= 0; i--) {
                if (entities[i].isDominator) {
                    entities[i].kill();
                }
            }
                        // Remove dominators
                        for (let i = entities.length - 1; i >= 0; i--) {
                            if (entities[i].isDominator1) {
                                entities[i].kill();
                            }
                        }
                                // Remove eggs
        for (let i = entities.length - 1; i >= 0; i--) {
            if (entities[i].isEgg) {
                entities[i].kill();
            }
        }
            // Remove ultra eggs
    for (let i = entities.length - 1; i >= 0; i--) {
        if (entities[i].isUltraEgg) {
            entities[i].kill();
        }
    }
// Remove afk

                        for (let i = entities.length - 1; i >= 0; i--) {
                            if (entities[i].isAFK) {
                                entities[i].kill();
                            }
                        }

global.closed = true;


    sockets.broadcast("Closing!");
    clearInterval(loop);
    setTimeout(process.exit, 600);
}

if (closed) {
    global.overloaded = false
}
function closeArena() {

    if (arenaClosed) return;

    sockets.broadcast("Arena closed: No players can join", "#FF0000")



    global.arenaClosed = true;

    // Remove bots
    for (let i = entities.length - 1; i >= 0; i--) {
        if (entities[i].isBot) {
            entities[i].kill();
        }
    }
        // Remove eggs
        for (let i = entities.length - 1; i >= 0; i--) {
            if (entities[i].isEgg) {
                entities[i].kill();
            }
        }
            // Remove ultra eggs
    for (let i = entities.length - 1; i >= 0; i--) {
        if (entities[i].isUltraEgg) {
            entities[i].kill();
        }
    }
            // Remove friendly
            for (let i = entities.length - 1; i >= 0; i--) {
                if (entities[i].isFriendly) {
                    entities[i].kill();
                }
            }
                // Remove ultra friendly
        for (let i = entities.length - 1; i >= 0; i--) {
            if (entities[i].isUltraFriendly) {
                entities[i].kill();
            }
        }
        // Remove dominators
        for (let i = entities.length - 1; i >= 0; i--) {
            if (entities[i].isDominator) {
                entities[i].kill();
            }
        }
        // Remove motherships
        for (let i = entities.length - 1; i >= 0; i--) {
            if (entities[i].isMothership) {
                entities[i].kill();
            }
        }
                // Remove dominators
                for (let i = entities.length - 1; i >= 0; i--) {
                    if (entities[i].isDominator) {
                        entities[i].kill();
                    }
                }
                // Remove afk players
                for (let i = entities.length - 1; i >= 0; i--) {
                    if (entities[i].isAFK) {
                        entities[i].kill();
                    }
                }
                // Remove bosses
                for (let i = entities.length - 1; i >= 0; i--) {
                    if (entities[i].isBoss) {
                        entities[i].kill();
                    }
                }
    // Create Arena Closers
    for (let i = 0; i < 12; i++) {
        const radius = this.width * Math.PI + 500;
        let angle = ((Math.PI * 2) / 12) * i;
				x = Math.cos(angle) * radius;
				y = Math.sin(angle) * radius;
				angle = angle + Math.PI;
        let o = new Entity(room.random());
o.define(Class.arenaCloserAI);
o.define({
    AI: {
        FULL_VIEW: true,
        SKYNET: true,
        BLIND: false,
        LIKES_SHAPES: true,
    },
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal", "spinWhileIdlemiaow"],
    SKILL: Array(10).fill(9),
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    VALUE: 0,

    // Modify the collision property to exclude dominators
    collision: {
        AUTO: true,
        SET: [
            [1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]],
            [0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]],
        ],
    },
});
o.color = 3;
o.team = -101;
o.isArenaCloser = true;
o.name = "Arena Closer";
    };
    let ticks = 0;
    loop = setInterval(() => {
        ticks++;
        console.log("Tick:", ticks); // Add this line to print tick count
        if (ticks >= 120) {
            console.log("Ticks reached 120, Closing!");
            return close();
        }
    
        let alive = false;
        for (let i = 0; i < entities.length; i++) {
            let instance = entities[i];
            if ((instance.isPlayer || instance.isMothership1 || instance.isDominator1) && instance.team !== -101) {
                alive = true;
                break;
            }
        }
    
        console.log("Alive:", alive);
    
        if (!alive) {
            console.log("No players, Closing!");
            close();
        }
    }, 500);
    
};

module.exports = { closeArena };
