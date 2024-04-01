if (c.DDAYTWO_LOOP) {
    let timer = setInterval(
        (function () {

            let time = 60 * 12;
            return function () {
                time--;
                if (time <= 0) {
                    clearInterval(timer);
                    global.gameWon = true;
                    sockets.broadcast("RED HAS WON THE GAME!");
                    setTimeout(closeArena, 3000);
                } else if (time === 660) {
                    sockets.broadcast("The walls got destroyed. BLUE is coming to kill RED's base!");
                } else if (time <= 15) {
                    sockets.broadcast(time + " seconds until RED wins!");
                } else if (time < 60 && time % 30 === 0) {
                    sockets.broadcast(time + " seconds until RED wins!");
                } else if (time % 60 === 0) {
                    sockets.broadcast(time / 60 + " minutes until RED wins!");
                }

                setInterval(function () {
                    if (arenaClosed) {
                        clearInterval(timer);
                    }
                }, 1000);
            };

        })(),
        1000
    );


  
  
  
      
    
    
  
  

  
            var bas2_count = 4;
  
            if (room.bas2) {
              for (let loc of room.bas2) {

                let o = new Entity(loc);
                if (arenaClosed) {
                  room.setType("dom0", loc);
                   // Change to dom0 when arenaClosed
                   o.kill();
                } else {
                room.setType("dom3", loc);
                let type = ran.choose([
                  Class.destroyerDominatorAI1,
                  Class.gunnerDominatorAI1,
                  Class.trapperDominatorAI1,
                ]);
                o.define(type);
                o.define({ DANGER: 7 });
                o.team = -2;
                o.name = "Dominator"
                o.color = 12;
                o.SIZE = 55;

                o.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })];
                o.isDominator = true;
                util.log("Dominator repaired! " + bas2_count + " Remain");
                o.onDeath = () => {
                  let e = new Entity(loc);
            
                  if (arenaClosed) {
                    room.setType("dom0", loc);
                     // Change to dom0 when arenaClosed
                     e.kill();
                  } else {
                    room.setType("dom1", loc);
                    let type = ran.choose([
                      Class.destroyerDominatorAI1,
                      Class.gunnerDominatorAI1,
                      Class.trapperDominatorAI1,
                    ]);
                    e.define(type);
                    e.define({ DANGER: 7 });
                    e.team = -1;
                    e.name = "Dominator"
                    e.color = 10;
                    e.SIZE = 55;

                    e.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })];
                    e.isDominator = true;
                    bas2_count -= 1;
            
                    sockets.broadcast("A RED base has been destroyed!");
                    util.log("Dominator died! " + bas2_count + " Remain");
                    if (bas2_count === 0) {
                        global.gameWon = true;
                        clearInterval(timer);
                        setTimeout(function () {
                          sockets.broadcast("BLUE HAS WON THE GAME!");
                        }, 500);
                        setTimeout(closeArena, 3000);
                        return;
                    }
                    if (overloaded) {
                        global.down = false;
                        global.unlocked = false;
                        global.locked = false;
                        global.gameWon = false;
                        return;
                      }
                      if (arenaClosed) {
                        global.down = false;
                        global.unlocked = false;
                        global.locked = false;
                        global.gameWon = false;
                        return;
                      }
                        if (bas2_count === 2) {
                          global.down = true;
                          setTimeout(function () {
                            clearInterval(timer);
        
                            util.log("RED bases are down.");
                            sockets.broadcast("RED bases are down.");
                          }, 500);
                        }
                        if (bas2_count === 1) {
                          global.unlocked = true;
                          clearInterval(timer);
        
                          util.log("RED's main base has been unlocked!");
                          sockets.broadcast("RED's main base has been unlocked!");
                        }
        
                        if (bas2_count === 4) {
                          global.locked = true;
                          setInterval(timer);
        
                          util.log("RED's main base has been locked!");
                          sockets.broadcast("RED's main base has been locked!");
                        }
                      }

                      e.onDeath = () => {
                        let d = new Entity(loc);
                        if (arenaClosed) {
                          room.setType("dom0", loc);
                           // Change to dom0 when arenaClosed
                           d.kill();
                        } else {
                        room.setType("dom3", loc);
                        let type = ran.choose([
                          Class.destroyerDominatorAI1,
                          Class.gunnerDominatorAI1,
                          Class.trapperDominatorAI1,
                        ]);
                        d.define(type);
                        d.define({ DANGER: 7 });
                        d.team = -2;
                      d.name = "Dominator"
                        d.color = 12;
                        d.SIZE = 55;

                        d.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })];
                        d.isDominator = true;
                        bas2_count += 1;
                        sockets.broadcast("A RED base has been repaired!");
                        util.log("Dominator repaired! " + bas2_count + " Remain");
                        d.onDeath = () => {
                          let u = new Entity(loc);
                          if (arenaClosed) {
                            room.setType("dom0", loc);
                             // Change to dom0 when arenaClosed
                             u.kill();
                          } else {
                          room.setType("dom1", loc);
                          let type = ran.choose([
                            Class.destroyerDominatorAI1,
                            Class.gunnerDominatorAI1,
                            Class.trapperDominatorAI1,
                          ]);
                          u.define(type);
                          u.define({ DANGER: 7 });
                          u.color = 10;
                          u.team = -1;
                          u.SIZE = 55;
                          u.name = "Dominator"

                          u.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })];
                          u.isDominator = true;
                          bas2_count -= 1;
                          sockets.broadcast("A RED base has been destroyed!");
                          util.log("Dominator died! " + bas2_count + " Remain");
                          u.onDeath = e.onDeath;
                          o = e = d = u;
  
  
                        }
                      };
                      }
                    };
                    }
                  }
                }
              }
            }
              
  
    
            
      
                
            
  module.exports = { ddaytwoLoop: { bas2_count} };
