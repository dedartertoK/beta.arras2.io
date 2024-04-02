let output = require("../../config.js");

// You change gamemodes here
// To change specific things about specific gamemodes (such as team count for tdm), visit their config file in \gamemodeconfigs\


var modes = Math.floor(Math.random() * 1);

switch (modes) {

    case 0:
    gamemodes = ['beta'];
    break;

            default:
                break;
 }
for (let gamemode of gamemodes) {
    let mode = require(`./gamemodeconfigs/${gamemode}.js`);
    for (let key in mode) {
        if (key === "ROOM_SETUP") {
            for (let y = 0; y < output.Y_GRID; y++) {
                for (let x = 0; x < output.X_GRID; x++) {
                    if (mode[key][y] && mode[key][y][x]) {
                        if (!output[key][y]) output[key][y] = [];
                        output[key][y][x] = mode[key][y][x];
                    }
                }
            }
        } else {
            output[key] = mode[key];
        }   
    }
}

module.exports = { output };

// Everything past this handles the display name in the main menu
const nameMap = {
'beta': "Closed Beta",
    'soccer': "Soccer",
    'siege': "Boss Rush",
                'd-Day_Trenches': "D-Day Trenches",
            'd-Day_Bastron': "D-Day Bastron",
    tdm: "TDM",
    ffa: "FFA",
    opentdm: "Open TDM",
    //clanwars: "Clan Wars",
    trainwars: "Train Wars"
};

output.gameModeName = gamemodes.map(x => nameMap[x] || (x[0].toUpperCase() + x.slice(1))).join(' ');
