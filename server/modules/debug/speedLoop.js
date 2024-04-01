let fails = 0;
const speedcheckloop = () => {
    let activationtime = logs.activation.sum(),
        collidetime = logs.collide.sum(),
        movetime = logs.entities.sum(),
        playertime = logs.network.sum(),
        maptime = logs.minimap.sum(),
        physicstime = logs.physics.sum(),
        lifetime = logs.life.sum(),
        selfietime = logs.selfie.sum();
    let sum = logs.master.record();
    let loops = logs.loops.count(),
        active = logs.entities.count();
    global.fps = (1000 / sum).toFixed(2);
    if (sum > 1000 / roomSpeed / 30) {
        //fails++;
        util.warn('~~ LOOPS: ' + loops + '. ENTITY #: ' + entities.length + '//' + Math.round(active / loops) + '. VIEW #: ' + views.length + '. BACKLOGGED :: ' + (sum * roomSpeed * 3)
            .toFixed(3) + '%! ~~');
        util.warn('Total activation time: ' + activationtime);
        util.warn('Total collision time: ' + collidetime);
        util.warn('Total cycle time: ' + movetime);
        util.warn('Total player update time: ' + playertime);
        util.warn('Total lb+minimap processing time: ' + maptime);
        util.warn('Total entity physics calculation time: ' + physicstime);
        util.warn('Total entity life+thought cycle time: ' + lifetime);
        util.warn('Total entity selfie-taking time: ' + selfietime);
        util.warn('Total time: ' + (activationtime + collidetime + movetime + playertime + maptime + physicstime + lifetime + selfietime));
        if (sum > 10000 / roomSpeed / 20) {

            util.log('Server overloaded! Restarting...');

            setTimeout(function() {
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
            // Remove afk
            
                                    for (let i = entities.length - 1; i >= 0; i--) {
                                        if (entities[i].isAFK) {
                                            entities[i].kill();
                                        }
                                    }
                for (let i = 0; i < entities.length; i++) {
                    if (entities[i].isBot) {
                        entities[i].kill();
                    }
                }
                for (let i = 0; i < entities.length; i++) {
                    if (entities[i].isDominator) {
                        entities[i].kill();
                    }
                }
                for (let i = 0; i < entities.length; i++) {
                    if (entities[i].isArenaCloser) {
                        entities[i].kill();
                    }
                }
                // Remove bosses
                for (let i = entities.length - 1; i >= 0; i--) {
                    if (entities[i].isBoss) {
                        entities[i].kill();
                    }
                }
                sockets.broadcast("Server overloaded! Restarting...");
global.overloaded = true;
 
                                    }, )
                                    setTimeout(function() {
                setTimeout(process.exit);
                clearInterval();
                                    }, 1000)
                                }
        if (fails > 60) {
            util.error("FAILURE!");
            //process.exit(1);
        }
    } else {
        fails = 0;
    }
};

module.exports = {
    speedcheckloop
};