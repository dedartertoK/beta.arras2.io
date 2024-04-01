

let calculatePoints = wave => 5 + wave * 3;
var bas1_count = 9;
let broadcasted = true;
let timeRemaining = 90; // Initial time remaining in seconds



// Each wave has a certain amount of "points" that it can spend on bosses, calculated above.
// Each boss costs an amount of points.
// It will always buy as many bosses until it has no points or else can't spend them.
// It picks a boss to buy by filtering the list of boss choices by if they are affordable.
// Then it picks a boss at random, with all choices being equally likely.

class BossRush {
    constructor() {
        this.bossChoices = [
            // [ cost , definition reference ],

            //elite crashers
            [  2, "eliteDestroyer"],
            [  2, "eliteGunner"],
            [  2, "eliteSprayer"],
            [  2, "eliteBattleship"],
            [  2, "eliteSpawner"],
            [  2, "eliteTrapGuard"],
            [  2, "eliteSpinner"],

            //elite tanks
            [  2, "eliteSkimmer"],

            //mysticals
            [  1, "sorcerer"],
            [  2, "summoner"],
            [  2, "enchantress"],
            [  2, "exorcistor"],

            //nesters
            [  3, "nestKeeper"],
            [  3, "nestWarden"],
            [  3, "nestGuardian"],
//fallens
[  2, "fallenBoosterAI"],
            //terrestrials
            [ 15, "ares"],
            [ 15, "gersemi"],
            [ 15, "ezekiel"],
            [ 15, "eris"],
            [ 15, "selene"],

            //celestials
            [ 35, "paladin"],
            [ 35, "freyja"],
            [ 35, "zaphkiel"],
            [ 35, "nyx"],
            [ 35, "theia"],

            //eternals
            [ 99, "legionaryCrasher" /*fucking mid*/],
            [100, "kronos"],
            [100, "ragnarok"],
        ];
        this.friendlyBossChoices = ["roguePalisade", "rogueArmada", "alviss", "tyr", "fiolnir"];
        this.ultrafriendlyBossChoices = ["legionaryCrasher", "kronos", "ragnarok", "taureonBoss", "zenphiaBoss"];


        this.waves = this.generateWaves();
        this.waveId = -1;
        this.gameActive = true;
        this.timer = 0;

        this.remainingEnemies = 0;;
    }

    generateWaves() {
        let waves = [];
        for (let i = 0; i < 30; i++) {
            let wave = [],
                points = calculatePoints(i),
                choices = this.bossChoices;

            while (points > 0 && choices.length) {
                choices = choices.filter(([ cost ]) => cost <= points);
                let [ cost, boss ] = ran.choose(choices);
                points -= cost;
                wave.push(boss);
            }

            waves.push(wave);
        }
        return waves;
    }

    spawnFriendlyBoss() {
        let o = new Entity(room.randomType('bas1'));
        o.define(Class.genericEggnought1);
        o.define({ DANGER: 10 });
        o.team = -1;
        o.name = "Mysterious Egg";
        o.isEgg = true;
        sockets.broadcast('A mysterious egg has spawned on the base. The rumor says if it dies, something would happen.');
        o.onDeath = () => {
            let e = new Entity(room.randomType('bas1'));
            e.define(ran.choose(this.friendlyBossChoices));
            e.define({ DANGER: 10 });
            e.team = -1;
            e.isFriendly = true;
            e.controllers.push(new ioTypes.nearestDifferentMaster(o), new ioTypes.wanderAroundMap(0, { lookAtGoal: true }));
            sockets.broadcast(e.name + ' has arrived and joined your team!');
        }
    }
    spawnUltraFriendlyBoss() {
        let o = new Entity(room.randomType('bas1'));
        o.define(Class.genericEggnought2);
        o.define({ DANGER: 10 });
        o.team = -1;
        o.name = "Ultra Mysterious Egg";
        o.isUltraEgg = true;
        sockets.broadcast('An ultra mysterious egg has spawned on the base. The rumor says if it dies, something would happen.');
        o.onDeath = () => {
            let e = new Entity(room.randomType('bas1'));
            e.define(ran.choose(this.ultrafriendlyBossChoices));
            e.define({ DANGER: 10 });
            e.team = -1;
            e.isFriendly = true;
            e.controllers.push(new ioTypes.nearestDifferentMaster(o), new ioTypes.wanderAroundMap(0, { lookAtGoal: true }));
            sockets.broadcast(e.name + ' has arrived and joined your team!');
        }
    }
    spawnDominator(loc) {
        setInterval(() => {
            if (bas1_count === 0 && !broadcasted) {
                global.destroyedsanctuarybruh = true;
                broadcasted = true;
                sockets.broadcast("Your team cannot respawn until one of the sanctuaries is repaired.");

                const countdownInterval = setInterval(() => {
                    console.log("Timer", timeRemaining); // Add this line to print tick count
                    timeRemaining -= 1;
                    if (timeRemaining === 60 || timeRemaining === 30 || timeRemaining === 10) {
                        sockets.broadcast(`You have ${timeRemaining} seconds until your team loses!`);
                        console.log(`You have ${timeRemaining} seconds until your team loses!`);
                    }
                    if (timeRemaining <= 0) {
                        sockets.broadcast(`Your team has lost!`);
                        console.log(`Your team has lost!`);
                        clearInterval(countdownInterval);
                        setTimeout(closeArena, 3000);
                    }
                }, 1000); // Run every second
                
                sockets.broadcast(`You have ${timeRemaining} seconds until your team loses!`);
                console.log(`You have ${timeRemaining} seconds until your team loses!`);
                if (arenaClosed) {
                    clearInterval(countdownInterval);
                }
            }
            if (bas1_count >= 1) {
                global.destroyedsanctuarybruh = false;
                broadcasted = false;
                timeRemaining = 90; // Reset the time remaining if the condition is not met
            }
        }, 10);

        let o = new Entity(loc);
        if (arenaClosed) {
            room.setType("dom0", loc)
            global.destroyedsanctuarybruh = false;
            o.kill();
        } else {


        room.setType("bas1", loc)
        o.define(Class.trapssanctuariesAI1);
        o.team = -1;
        o.name = "Sanctuary";
        o.color = 10;
        o.SIZE = 50;
        o.FOV = 100;
        o.DANGER = 100;

        o.isDominator = true;
        o.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })];
        o.onDeath = () => {
            let e = new Entity(loc);
            if (arenaClosed) {
                room.setType("dom0", loc)
                global.destroyedsanctuarybruh = false;
                e.kill();
            } else {


            room.setType("dom0", loc)
            e.define(Class.deadsanctuary);
            e.team = -101;
            e.color = 3;
            e.name = "Sanctuary";
            e.SIZE = 50;
            e.FOV = 100;
            e.DANGER = 100;
            e.isDominator = true;
            e.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })];
            bas1_count -= 1;
            sockets.broadcast("A BLUE base has been destroyed by the bosses!");
            util.log("Sanctuary died! " + bas1_count + " Remain");
            
    e.onDeath = () => {
        let u = new Entity(loc);
        if (arenaClosed) {
            room.setType("dom0", loc)
            global.destroyedsanctuarybruh = false;
            u.kill();
        } else {


        room.setType("bas1", loc)
        u.define(Class.trapssanctuariesAI);
        u.team = -1;
        u.color = 10;
        u.name = "Sanctuary";
        u.SIZE = 50;
        u.FOV = 100;
        u.DANGER = 100;
        u.isDominator = true;
        bas1_count += 1;
        sockets.broadcast("A BLUE base has been repaired!");
        util.log("Sanctuary repaired! " + bas1_count + " Remain");
        }
        u.onDeath = o.onDeath;
        o = e = u;
    }
            }
        }
        }
        }
    

    playerWin() {
        if (this.gameActive) {
            this.gameActive = false;
            sockets.broadcast('YOUR TEAM HAS WON THE GAME!');
            setTimeout(closeArena, 3000);
        }
    }

    spawnEnemyWrapper(loc, type) {
        let enemy = new Entity(loc);
        enemy.define(type);
        enemy.team = TEAM_ENEMIES;
        enemy.FOV = 100;
        enemy.refreshBodyAttributes();
        enemy.controllers.push(new ioTypes.bossRushAI(enemy));
        enemy.controllers.push(new ioTypes.nearestDifferentMaster(enemy));
        enemy.controllers.push(new ioTypes.mapTargetToGoal(enemy));
        

        this.remainingEnemies++;
        enemy.onDeath = () => {
            //this enemy has been killed, decrease the remainingEnemies counter
            //if afterwards the counter happens to be 0, announce that the wave has been defeated
            if (!--this.remainingEnemies) {
                sockets.broadcast(`Wave ${this.waveId + 1} is defeated!`);
            }
        };
        
        return enemy;
    }

    spawnWave(waveId) {
        // Yell at everyone
        sockets.broadcast(`Wave ${waveId + 1} has arrived!`);
    
        // Flag to track if any actual bosses were spawned
        let anyBossSpawned = false;
    
        // Spawn bosses
        for (let boss of this.waves[waveId]) {
            let spot = null,
                attempts = 0;
            do {
                spot = room.randomType('boss');
            } while (dirtyCheck(spot, 500) && ++attempts < 30);
    
            let enemy = this.spawnEnemyWrapper(spot, boss);
            enemy.define({ DANGER: 25 + enemy.SIZE / 5 });
            enemy.isBoss = true;
    
            // Set anyBossSpawned to true if a boss is spawned
            anyBossSpawned = true;
        }
    

    
        // Check if all bosses are defeated
        if (!anyBossSpawned) {
            sockets.broadcast(`Wave ${waveId + 1} is defeated!`);
        }
    
        // Spawn friendly bosses every 10 and 15 waves
        if (waveId % 10 === 9) {
            setTimeout(() => {
                this.spawnFriendlyBoss();
            }, 2000);
        } else if (waveId % 15 === 14) {
            setTimeout(() => {
                this.spawnUltraFriendlyBoss();
            }, 2000);
        }
    
        // Check if it's the last wave or if custom messages need to be broadcasted
        if (waveId === this.waves.length - 1) {
            sockets.broadcast("Your team is gonna die now, our strongest team is gonna beat you!");
        } else if (waveId === this.waves.length - 5) {
            sockets.broadcast("I can see that your team is doing great. Now die from us!");
        } else if (waveId === this.waves.length - 15) {
            sockets.broadcast("Blue team, you are too low to kill us, just give up already!");
        }
    }
    
    
    

    //runs once when the server starts
    init() {
        Class.basic.UPGRADES_TIER_1.push('healer');

        for (let loc of room.bas1) {
            this.spawnDominator(loc, -1);
        //TODO: filter out tiles that are not of sanctuary type
        }
        console.log('Boss rush initialized.');
    }

    //runs every second
    loop() {
        if (arenaClosed) {
            return;
        }
        //the timer has ran out? reset timer and spawn the next wave
        if (this.timer <= 0) {
            this.timer = 150;
            this.waveId++;
            if (this.waves[this.waveId]) {
                this.spawnWave(this.waveId);

            //if there is no next wave then simply let the players win
            } else {
                this.playerWin();
            }

        //if the timer has not ran out and there arent any remaining enemies left, decrease the timer
        } else if (!this.remainingEnemies) {
            this.timer--;
        }
    }
}


module.exports = { BossRush, bas1_count };
