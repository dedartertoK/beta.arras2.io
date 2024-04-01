module.exports = {
    // Server

    // Game server domain.
    // If 'localhost:NUMBER', the port must equal the port setting.
    host: "beta.arras2.io",

    // Which port to run the web server on.
    port: 3000,

    // Ticks per second. 1 is 30 tps, 2 is 60, etc.
    // Has physics side effecs.
    gameSpeed: 1,

    // How often to update the list of the entities players can see.
    // Has effects of when entities are activated.
    visibleListInterval: 250,

    // How long (in ms) a socket can be disconnected without their player dying.
    maxHeartbeatInterval: 300000,

    // Flatten entity definition, which gets rid of PARENT attributes and applies the parents' attributes to the entity definition, if they're not set in the entity already.
    flattenDefintions: false,



    // Room
    
    WIDTH: 0,
    HEIGHT: 0,
    
    // Shape of the arena.
    // Can be "rect" or "circle".
    ARENA_TYPE: "rect",

    // The tiles that the room consist of.
    ROOM_SETUP: [],
    X_GRID: 0,
    Y_GRID: 0,


    // Physics

    // General multiplier for acceleration and max speeds.
    runSpeed: 1.5,

    // General damage multiplier everytime damage is dealt.
    DAMAGE_CONSTANT: 0.5,

    // General knockback multiplier everytime knockback is applied.
    KNOCKBACK_CONSTANT: 1.5,

    // TODO: Figure out how the math behind this works.
    GLASS_HEALTH_FACTOR: 2,

    // How strong the force is that confines entities to the map and portals apply to entities.
    ROOM_BOUND_FORCE: 0.01,

    // What does this do?
    SKILL_BOOST: 5,

    // TODO: Find out what the intention behind the implementation of this configuration is.
    SOFT_MAX_SKILL: 0.59,



    // Gameplay

    // When an entity reaches a level, this function is called and returns how many points that entity gets for reaching that level.
    LEVEL_SKILL_POINT_FUNCTION: level => {
        if (level < 2) return 0;
        if (level <= 40) return 1;
        if (level <= 45 && level & 1 == 1) return 1;
        return 0;
    },

    // Default skill caps.
    MAX_SKILL: 9,

    // Amount of tank tiers.
    MAX_UPGRADE_TIER: 9,

    // Level difference between each tier.
    TIER_MULTIPLIER: 15,

    // Max normally achievable level.
    LEVEL_CAP: 45,

    // TODO: Figure out what this does.
    LEVEL_SOFT_CAP: 0,

    // Max level you get by level-up key and auto-level-up.
    LEVEL_CHEAT_CAP: 45,

    // Amount of player-bots to spawn.
    BOTS: 0,

    // How much XP player-bots get per second until they reach LEVEL_CAP.
    BOT_XP: 125,

    // The class that players and player-bots spawn as.
    SPAWN_CLASS: "basic",



    // Natural Spawns

    // Something about the likeliness of shinies, idk.
    SHINY_SCALE: 0,

    // How much food to spawn. Not an exact amount.
    FOOD_AMOUNT: 100,

    // How much nest food to spawn.
    // Dependant on the food limit calculated with FOOD_AMOUNT.
    // Not exact multiplier either.
    FOOD_AMOUNT_NEST: 1.5,

    // Number of crashers per nest tile.
    CRASHER_RATIO: 2,



    // Gamemode related.
    // Please change gamemode in 'server\modules\setup\config.js' instead.
    SPECIAL_BOSS_SPAWNS: false,
    MOTHERSHIP_LOOP: false,
    DOMINATOR_LOOP: false,

    DDAY_LOOP: false,
    NEXUS_LOOP: false,
    DDAYTWO_LOOP: false,
    RANDOM_COLORS: false,
    SPACE_PHYSICS: false,
    SPACE_MODE: false,
    GROUPS: false,
    TRAIN: false,
    MAZE: false,
    HUNT: false,
    TAG: false,
    TEAMS: 0,
    MODE: "tdm",



    // Miscellaneous

    // How long a entity chat message lasts in milliseconds.
    // Includes the fade-out period.
    CHAT_MESSAGE_DURATION: 10_000,

    // If you don't want your players to color their messages.
    // They get sanitized after addons interpret them, but before they're added to the chat message dictionary.
    SANITIZE_CHAT_MESSAGE_COLORS: true,

    // If someone tries to get a file that does not exist, send them this instead.
    DEFAULT_FILE: 'index.html',

    // Window name of the server terminal.
    WINDOW_NAME: 'Arras2.io',

    // Allows you to type and run javascript code in the terminal.
    REPL_WINDOW: false,

 // Welcome message once a player spawns.
 WELCOME_MESSAGE: function() {
    if (c.SIEGE_LOOP) {
        return "You have spawned! Welcome to the game.\n"
             + "You will be invulnerable for 60 seconds until you move or shoot.\n"
             + "The gamemode changes everytimes the server restarts.\n"
             + "Remember to kill all the crashers and sentries to defeat a wave!";
    } else if (c.DOMINATOR_LOOP || c.DDAY_LOOP || c.DDAYTWO_LOOP) {
        return "You have spawned! Welcome to the game.\n"
             + "You will be invulnerable for 60 seconds until you move or shoot.\n"
             + "The gamemode changes everytimes the server restarts.\n"
             + "You can press H to control the dominator of your team.";
    } else if (c.MOTHERSHIP_LOOP) {
        return "You have spawned! Welcome to the game.\n"
        + "You will be invulnerable for 60 seconds until you move or shoot.\n"
        + "The gamemode changes everytimes the server restarts.\n"
        + "You can press H to control the mothership of your team.";
    } else {
        return "You have spawned! Welcome to the game.\n"
             + "You will be invulnerable until you move or shoot for 60 seconds.\n"
             + "The gamemode changes everytimes the server restarts.";
    }
}

}

