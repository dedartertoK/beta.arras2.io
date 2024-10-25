import { util } from "./lib/util.js";
import { global } from "./lib/global.js";
import { config } from "./lib/config.js";
import { Canvas } from "./lib/canvas.js";
import { color as colors} from "./lib/color.js";
import { gameDraw } from "./lib/gameDraw.js";
import * as socketStuff from "./lib/socketInit.js";
(async function (util, global, config, Canvas, color, gameDraw, socketStuff) {
  let { socketInit, gui, leaderboard, minimap, moveCompensation, lag, getNow } =
    socketStuff;
  // fetch("changelog.md", { cache: "no-cache" })
  // .then((response) => response.text())
  // .then((response) => {
  //     const changelogs = response.split("\n\n").map((changelog) => changelog.split("\n"));
  //     for (let changelog of changelogs) {
  //         changelog[0] = changelog[0].split(":").map((line) => line.trim());
  //         document.getElementById("patchNotes").innerHTML += `<div><b>${changelog[0][0].slice(1).trim()}</b>: ${changelog[0].slice(1).join(":") || "Update lol"}<ul>${changelog.slice(1).map((line) => `<li>${line.slice(1).trim()}</li>`).join("")}</ul><hr></div>`;
  //     }
  // });
  document.getElementById("antivpn").style.display = "none";
  document.getElementById("antivpn1").style.display = "none";
if (document.getElementById("antivpn1").checked) {
  document.getElementById("antivpn1").checked = false;
}
  // Ensure the Animation class and animations object are correctly defined
  class Animation {
    constructor(start, to, smoothness = 0.05) {
      this.start = start;
      this.to = to;
      this.value = start;
      this.smoothness = smoothness;
    }
    reset() {
      this.value = this.start;
      return this.value;
    }
    getLerp() {
      this.value = util.lerp(this.value, this.to, this.smoothness, true);
      return this.value;
    }
    getNoLerp() {
      this.value = this.to;
      return this.value;
    }
    get() {
      return config.graphical.fancyAnimations
        ? this.getLerp()
        : this.getNoLerp();
    }
    flip() {
      const start = this.to;
      const to = this.start;
      this.start = start;
      this.to = to;
    }
    goodEnough(val = 0.5) {
      return Math.abs(this.to - this.value) < val;
    }
  }

  let animations = (window.animations = {
    connecting: new Animation(1, 0, 0.35),
    disconnected: new Animation(1, 0, 0.5),
    disconnected1: new Animation(0, 0),
settingsmenu: new Animation(0, 1, 0.01),
    deathScreen: new Animation(1, 0),
    disconnected22: new Animation(0, 0),
    upgradeMenu: new Animation(0, 1, 0.01),
    skillMenu: new Animation(0, 1, 0.01),
    optionsMenu: new Animation(1, 0),
    minimap: new Animation(-1, 1, 0.025),
    leaderboard: new Animation(-1, 1, 0.025),
  });
  // Mockup functions
  // Prepare stuff
  global.player = {
    //Set up the player
    id: -1,
    x: global.screenWidth / 2,
    y: global.screenHeight / 2,
    vx: 0,
    vy: 0,
    cx: 0,
    cy: 0,
    renderx: global.screenWidth / 2,
    rendery: global.screenHeight / 2,
    renderv: 1,
    slip: 0,
    view: 1,
    time: 0,
    screenWidth: global.screenWidth,
    screenHeight: global.screenHeight,
    nameColor: "#ffffff",
  };
    global.time = 0;
  var upgradeSpin = 0,
  treeSpin = 0,
    lastPing = 0,
    renderTimes = 0,
  currentFps;


  global.clearUpgrades = () => (gui.upgrades = []);

  global.movescreen = false;
  // Build the leaderboard object
  global.player = global.player;
  global.isHoveringUpgradeBox = false;
  global.reloadbox = false;
  global.omgwork = false;
  global.scoree = false;
   global.needsReset = false;
  global.notdied = false;
  global.disappearu = false;
  global.skipbox = false;
  global.showdeathscreen = false;
  global.skipClicked = false;
  global.SettingsClicked = false;
  global.sendmessagefps = false;
  global.yesbox = false;
  global.yesClicked = false;
  global.nobox = false;
  global.noClicked = false;
  global.hidemenu = false;
  global.choosenexit = false;
  global.discardexit = false;
  global.connecting = false;
  global.closesettings = false;
  global.reconnected = false;
  global.Settingsbox = false;
global.socket = false;
global.hasclickedsettings = false;
  global.reloadClicked = false;
  global.upgradeMenuVisible = false;
global.gameStart = false;
global.gameStart1 = false;
global.finishedloadingmockups = false;
global.showintroduction = false;
global.aa = false;
global.aaaa = false;
global.plsjust = false;
  global.tryingtoreconnect = false;
  global.waitingloop = false;
  global.waitingloop1 = false;
  global.optFancy = false;
  global.betternofcway = false;
  global.spectatebox = false;
  global.cancelspectatebox = false;
  global.cancelspectateClicked = false;
  global.isspectating = false;
  global.spectateClicked = false;
  global.ab = false;
  global.enterbox = false;
  global.enterClicked = false;
  global.reloadClicked1 = false;
  global.reloadbox1 = false;
  global.canUpgrade = false;
  global.canSkill = false;
  global.message = "";
  global.mesage = "";
  global.diedbruh = false;
  global.diedseekbruh = false;
  global.connectingmsg = "Loading Mockups...";
  global.daconnectingmsg = "Connecting";
  global.tips = [
    "Tip: For better performance and a smoother experience, enable better FPS on the view options!",
    "Tip: You can press T to see the class tree",
    "Want to access to the closed beta server? Contact the developer!",
    "Any cheating scripts such as multibox will result in a ban.",
    "Tip: You can press X to spinlock your tank to aim better!",
    "If you don't want to miss the events coming, join the official arras2.io discord server!",
    "Tip: You can press ENTER to chat with people!",
    "Want to play other gamemodes? Click on the Switch Gamemode button!",
  ][Math.floor(Math.random() * 8)];

  // Window setup <3
  global.mobile && document.body.classList.add("mobile");
  global.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent,
  );
  var serverName = "Connected";
  var provider = "Unknown";
  // Define the URLs for each game mode
const gameModeUrls = {
  dday: 'https://super-duper-goggles-g475v6p65wwv2vgwp-30004.app.github.dev/lib/json/gamemodeData.json',
  bossrush: 'https://super-duper-goggles-g475v6p65wwv2vgwp-30002.app.github.dev/lib/json/gamemodeData.json',
  ddayusa: 'https://dreadful-superstition-wrg7qgg4x57rcvjj4-30004.app.github.dev/lib/json/gamemodeData.json',
  bossrushusa: 'https://dreadful-superstition-wrg7qgg4x57rcvjj4-30002.app.github.dev/lib/json/gamemodeData.json',
  dominationusa: 'https://dreadful-superstition-wrg7qgg4x57rcvjj4-30000.app.github.dev/lib/json/gamemodeData.json',
  mothershipusa: 'https://dreadful-superstition-wrg7qgg4x57rcvjj4-30003.app.github.dev/lib/json/gamemodeData.json',
  killraceusa: 'https://dreadful-superstition-wrg7qgg4x57rcvjj4-30008.app.github.dev/lib/json/gamemodeData.json',
  coreusa: 'https://dreadful-superstition-wrg7qgg4x57rcvjj4-30009.app.github.dev/lib/json/gamemodeData.json',
  ffausa: 'https://dreadful-superstition-wrg7qgg4x57rcvjj4-30005.app.github.dev/lib/json/gamemodeData.json',
  twotdmusa: 'https://dreadful-superstition-wrg7qgg4x57rcvjj4-30001.app.github.dev/lib/json/gamemodeData.json',
  mazeusa: 'https://dreadful-superstition-wrg7qgg4x57rcvjj4-30006.app.github.dev/lib/json/gamemodeData.json',
  fourtdmusa: 'https://dreadful-superstition-wrg7qgg4x57rcvjj4-30007.app.github.dev/lib/json/gamemodeData.json',
  ddayasia: 'https://frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev/lib/json/gamemodeData.json',
  bossrushasia: 'https://frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev/lib/json/gamemodeData.json',
  dominationasia: 'https://frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev/lib/json/gamemodeData.json',
  mothershipasia: 'https://frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev/lib/json/gamemodeData.json',
  killraceasia: 'https://frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev/lib/json/gamemodeData.json',
  coreasia: 'https://frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev/lib/json/gamemodeData.json',
  ffaasia: 'https://frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev/lib/json/gamemodeData.json',
  twotdmasia: 'https://frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev/lib/json/gamemodeData.json',
  mazeasia: 'https://frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev/lib/json/gamemodeData.json',
  fourtdmasia: 'https://frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev/lib/json/gamemodeData.json',
  domination: 'https://super-duper-goggles-g475v6p65wwv2vgwp-30000.app.github.dev/lib/json/gamemodeData.json',
  mothership: 'https://super-duper-goggles-g475v6p65wwv2vgwp-30003.app.github.dev/lib/json/gamemodeData.json',
  killrace: 'https://super-duper-goggles-g475v6p65wwv2vgwp-30008.app.github.dev/lib/json/gamemodeData.json',
  closedbeta: 'https://automatic-space-rotary-phone-57444pjr7vq3vx57-3003.app.github.dev/lib/json/gamemodeData.json',
core: 'https://super-duper-goggles-g475v6p65wwv2vgwp-30009.app.github.dev/lib/json/gamemodeData.json',
ffa: 'https://super-duper-goggles-g475v6p65wwv2vgwp-30005.app.github.dev/lib/json/gamemodeData.json',
twotdm: 'https://super-duper-goggles-g475v6p65wwv2vgwp-30001.app.github.dev/lib/json/gamemodeData.json',
maze: 'https://super-duper-goggles-g475v6p65wwv2vgwp-30006.app.github.dev/lib/json/gamemodeData.json',
fourtdm: 'https://super-duper-goggles-g475v6p65wwv2vgwp-30007.app.github.dev/lib/json/gamemodeData.json',
};

// Initialize player counts
let playerCounts = {
dday: 0,
bossrush: 0,
domination: 0,
mothership: 0,
ddayusa: 0,
bossrushusa: 0,
dominationusa: 0,
mothershipusa: 0,
killraceusa: 0,
coreusa: 0,
ffausa: 0,
twotdmusa: 0,
mazeusa: 0,
fourtdmusa: 0,
ddayasia: 0,
bossrushasia: 0,
dominationasia: 0,
mothershipasia: 0,
killraceasia: 0,
coreasia: 0,
ffaasia: 0,
twotdmasia: 0,
mazeasia: 0,
fourtdmasia: 0,
killrace: 0,
core: 0,
closedbeta: 0,
ffa: 0,
twotdm: 0,
maze: 0,
fourtdm: 0,
};

// Function to fetch player counts from all servers
function fetchAllPlayerCounts() {
  const fetchPromises = Object.entries(gameModeUrls).map(([mode, url]) => 
      fetch(url)
          .then(response => response.json())
          .then(data => {
              // Assuming the player count is in a field called 'players'
              // Adjust this based on the actual structure of your JSON
              playerCounts[mode] = data.players || 0;
          })
          .catch(error => {
              console.error(`Error fetching ${mode} player count:`, error);
              playerCounts[mode] = 0; // Set to 0 if there's an error
          })
  );



  // Wait for all fetches to complete
  Promise.all(fetchPromises).then(() => {
 updateTotalPlayerCount(); // Call updateTotalPlayerCount here
 updateTotalPlayerCount1();
 updateTotalPlayerCount2();
 updateTotalPlayerCount3();
 updateTotalPlayerCounteurope();
updateTotalPlayerCountusa();
updateTotalPlayerCountasia();
 updateTotalPlayerCount4();
 updateTotalPlayerCount5();
 updateTotalPlayerCount6();
 updateTotalPlayerCount7();
 updateTotalPlayerCount8();
 updateTotalPlayerCount9();
 updateTotalPlayerCount10();
 updateTotalPlayerCount11();
      // You might want to trigger a redraw of your UI here
  });
}
function updateTotalPlayerCount() {
  let totalPlayers = 0;
  totalPlayers += isNaN(playerCounts.dday) ? 0 : playerCounts.dday;
  totalPlayers += isNaN(playerCounts.bossrush) ? 0 : playerCounts.bossrush;
  totalPlayers += isNaN(playerCounts.domination) ? 0 : playerCounts.domination;
  totalPlayers += isNaN(playerCounts.mothership) ? 0 : playerCounts.mothership;
  totalPlayers += isNaN(playerCounts.killrace) ? 0 : playerCounts.killrace;
  totalPlayers += isNaN(playerCounts.core) ? 0 : playerCounts.core;
  totalPlayers += isNaN(playerCounts.closedbeta) ? 0 : playerCounts.closedbeta;
  totalPlayers += isNaN(playerCounts.ffa) ? 0 : playerCounts.ffa;
  totalPlayers += isNaN(playerCounts.twotdm) ? 0 : playerCounts.twotdm;
  totalPlayers += isNaN(playerCounts.maze) ? 0 : playerCounts.maze;
  totalPlayers += isNaN(playerCounts.fourtdm) ? 0 : playerCounts.fourtdm;
  totalPlayers += isNaN(playerCounts.ddayusa) ? 0 : playerCounts.ddayusa;
  totalPlayers += isNaN(playerCounts.bossrushusa) ? 0 : playerCounts.bossrushusa;
  totalPlayers += isNaN(playerCounts.dominationusa) ? 0 : playerCounts.dominationusa;
  totalPlayers += isNaN(playerCounts.mothershipusa) ? 0 : playerCounts.mothershipusa;
  totalPlayers += isNaN(playerCounts.killraceusa) ? 0 : playerCounts.killraceusa;
  totalPlayers += isNaN(playerCounts.coreusa) ? 0 : playerCounts.coreusa;
  totalPlayers += isNaN(playerCounts.ffausa) ? 0 : playerCounts.ffausa;
  totalPlayers += isNaN(playerCounts.twotdmusa) ? 0 : playerCounts.twotdmusa;
  totalPlayers += isNaN(playerCounts.mazeusa) ? 0 : playerCounts.mazeusa;
  totalPlayers += isNaN(playerCounts.fourtdmusa) ? 0 : playerCounts.fourtdmusa;
  totalPlayers += isNaN(playerCounts.ddayasia) ? 0 : playerCounts.ddayasia;
  totalPlayers += isNaN(playerCounts.bossrushasia) ? 0 : playerCounts.bossrushasia;
  totalPlayers += isNaN(playerCounts.dominationasia) ? 0 : playerCounts.dominationasia;
  totalPlayers += isNaN(playerCounts.mothershipasia) ? 0 : playerCounts.mothershipasia;
  totalPlayers += isNaN(playerCounts.killraceasia) ? 0 : playerCounts.killraceasia;
  totalPlayers += isNaN(playerCounts.coreasia) ? 0 : playerCounts.coreasia;
  totalPlayers += isNaN(playerCounts.ffaasia) ? 0 : playerCounts.ffaasia;
  totalPlayers += isNaN(playerCounts.twotdmasia) ? 0 : playerCounts.twotdmasia;
  totalPlayers += isNaN(playerCounts.mazeasia) ? 0 : playerCounts.mazeasia;
  totalPlayers += isNaN(playerCounts.fourtdmasia) ? 0 : playerCounts.fourtdmasia;
  document.getElementById("totalPlayerCount").textContent = `${totalPlayers} players`;
}
function updateTotalPlayerCounteurope() {
  let totalPlayers = 0;
  totalPlayers += isNaN(playerCounts.dday) ? 0 : playerCounts.dday;
  totalPlayers += isNaN(playerCounts.bossrush) ? 0 : playerCounts.bossrush;
  totalPlayers += isNaN(playerCounts.domination) ? 0 : playerCounts.domination;
  totalPlayers += isNaN(playerCounts.mothership) ? 0 : playerCounts.mothership;
  totalPlayers += isNaN(playerCounts.killrace) ? 0 : playerCounts.killrace;
  totalPlayers += isNaN(playerCounts.core) ? 0 : playerCounts.core;
  totalPlayers += isNaN(playerCounts.closedbeta) ? 0 : playerCounts.closedbeta;
  totalPlayers += isNaN(playerCounts.ffa) ? 0 : playerCounts.ffa;
  totalPlayers += isNaN(playerCounts.twotdm) ? 0 : playerCounts.twotdm;
  totalPlayers += isNaN(playerCounts.maze) ? 0 : playerCounts.maze;
  totalPlayers += isNaN(playerCounts.fourtdm) ? 0 : playerCounts.fourtdm;
  document.getElementById("totalPlayerCounteurope").textContent = `${totalPlayers} players`;
}
function updateTotalPlayerCountusa() {
  let totalPlayers = 0;
  totalPlayers += isNaN(playerCounts.ddayusa) ? 0 : playerCounts.ddayusa;
  totalPlayers += isNaN(playerCounts.bossrushusa) ? 0 : playerCounts.bossrushusa;
  totalPlayers += isNaN(playerCounts.dominationusa) ? 0 : playerCounts.dominationusa;
  totalPlayers += isNaN(playerCounts.mothershipusa) ? 0 : playerCounts.mothershipusa;
  totalPlayers += isNaN(playerCounts.killraceusa) ? 0 : playerCounts.killraceusa;
  totalPlayers += isNaN(playerCounts.coreusa) ? 0 : playerCounts.coreusa;
  totalPlayers += isNaN(playerCounts.ffausa) ? 0 : playerCounts.ffausa;
  totalPlayers += isNaN(playerCounts.twotdmusa) ? 0 : playerCounts.twotdmusa;
  totalPlayers += isNaN(playerCounts.mazeusa) ? 0 : playerCounts.mazeusa;
  totalPlayers += isNaN(playerCounts.fourtdmusa) ? 0 : playerCounts.fourtdmusa;
  document.getElementById("totalPlayerCountusa").textContent = `${totalPlayers} players`;
}
function updateTotalPlayerCountasia() {
  let totalPlayers = 0;
  totalPlayers += isNaN(playerCounts.ddayasia) ? 0 : playerCounts.ddayasia;
  totalPlayers += isNaN(playerCounts.bossrushasia) ? 0 : playerCounts.bossrushasia;
  totalPlayers += isNaN(playerCounts.dominationasia) ? 0 : playerCounts.dominationasia;
  totalPlayers += isNaN(playerCounts.mothershipasia) ? 0 : playerCounts.mothershipasia;
  totalPlayers += isNaN(playerCounts.killraceasia) ? 0 : playerCounts.killraceasia;
  totalPlayers += isNaN(playerCounts.coreasia) ? 0 : playerCounts.coreasia;
  totalPlayers += isNaN(playerCounts.ffaasia) ? 0 : playerCounts.ffaasia;
  totalPlayers += isNaN(playerCounts.twotdmasia) ? 0 : playerCounts.twotdmasia;
  totalPlayers += isNaN(playerCounts.mazeasia) ? 0 : playerCounts.mazeasia;
  totalPlayers += isNaN(playerCounts.fourtdmasia) ? 0 : playerCounts.fourtdmasia;
  document.getElementById("totalPlayerCountasia").textContent = `${totalPlayers} players`;
}
// Global variable to track whether the USA region button is clicked
let isUsaRealSelected = false;
let isAsiaRealSelected = false;
function updateTotalPlayerCount1() {
  let totalPlayers = 0;
  // Check if the USA region button was clicked
  if (isUsaRealSelected) {
      totalPlayers += isNaN(playerCounts.ddayusa) ? 0 : playerCounts.ddayusa;
  } else if (isAsiaRealSelected) {
      totalPlayers += isNaN(playerCounts.ddayasia) ? 0 : playerCounts.ddayasia;
  } else {
      totalPlayers += isNaN(playerCounts.dday) ? 0 : playerCounts.dday;
  }
  document.getElementById("totalplayersred").textContent = `${totalPlayers} players`;
}
function updateTotalPlayerCount2() {
  let totalPlayers = 0;
  if (isUsaRealSelected) {
      totalPlayers += isNaN(playerCounts.bossrushusa) ? 0 : playerCounts.bossrushusa;
  } else if (isAsiaRealSelected) {
      totalPlayers += isNaN(playerCounts.bossrushasia) ? 0 : playerCounts.bossrushasia;
  } else {
      totalPlayers += isNaN(playerCounts.bossrush) ? 0 : playerCounts.bossrush;
  }
  document.getElementById("totalplayersyellow").textContent = `${totalPlayers} players`;
}

function updateTotalPlayerCount3() {
  let totalPlayers = 0;
  if (isUsaRealSelected) {
      totalPlayers += isNaN(playerCounts.dominationusa) ? 0 : playerCounts.dominationusa;
  } else if (isAsiaRealSelected) {
      totalPlayers += isNaN(playerCounts.dominationasia) ? 0 : playerCounts.dominationasia;
  } else {
      totalPlayers += isNaN(playerCounts.domination) ? 0 : playerCounts.domination;
  }
  document.getElementById("totalplayersblue").textContent = `${totalPlayers} players`;
}

function updateTotalPlayerCount4() {
  let totalPlayers = 0;
  if (isUsaRealSelected) {
      totalPlayers += isNaN(playerCounts.mothershipusa) ? 0 : playerCounts.mothershipusa;
  } else if (isAsiaRealSelected) {
      totalPlayers += isNaN(playerCounts.mothershipasia) ? 0 : playerCounts.mothershipasia;
  } else {
      totalPlayers += isNaN(playerCounts.mothership) ? 0 : playerCounts.mothership;
  }
  document.getElementById("totalplayersgreen").textContent = `${totalPlayers} players`;
}

function updateTotalPlayerCount5() {
  let totalPlayers = 0;
  if (isUsaRealSelected) {
      totalPlayers += isNaN(playerCounts.closedbetausa) ? 0 : playerCounts.closedbetausa;
  } else if (isAsiaRealSelected) {
      totalPlayers += isNaN(playerCounts.closedbetaasia) ? 0 : playerCounts.closedbetaasia;
  } else {
      totalPlayers += isNaN(playerCounts.closedbeta) ? 0 : playerCounts.closedbeta;
  }
  document.getElementById("totalplayersbeige").textContent = `${totalPlayers} players`;
}

function updateTotalPlayerCount6() {
  let totalPlayers = 0;
  if (isUsaRealSelected) {
      totalPlayers += isNaN(playerCounts.killraceusa) ? 0 : playerCounts.killraceusa;
  } else if (isAsiaRealSelected) {
      totalPlayers += isNaN(playerCounts.killraceasia) ? 0 : playerCounts.killraceasia;
  } else {
      totalPlayers += isNaN(playerCounts.killrace) ? 0 : playerCounts.killrace;
  }
  document.getElementById("totalplayersbrown").textContent = `${totalPlayers} players`;
}

function updateTotalPlayerCount7() {
  let totalPlayers = 0;
  if (isUsaRealSelected) {
      totalPlayers += isNaN(playerCounts.coreusa) ? 0 : playerCounts.coreusa;
  } else if (isAsiaRealSelected) {
      totalPlayers += isNaN(playerCounts.coreasia) ? 0 : playerCounts.coreasia;
  } else {
      totalPlayers += isNaN(playerCounts.core) ? 0 : playerCounts.core;
  }
  document.getElementById("totalplayerspink").textContent = `${totalPlayers} players`;
}

function updateTotalPlayerCount8() {
  let totalPlayers = 0;
  if (isUsaRealSelected) {
      totalPlayers += isNaN(playerCounts.ffausa) ? 0 : playerCounts.ffausa;
  } else if (isAsiaRealSelected) {
      totalPlayers += isNaN(playerCounts.ffaasia) ? 0 : playerCounts.ffaasia;
  } else {
      totalPlayers += isNaN(playerCounts.ffa) ? 0 : playerCounts.ffa;
  }
  document.getElementById("totalplayersffa").textContent = `${totalPlayers} players`;
}

function updateTotalPlayerCount9() {
  let totalPlayers = 0;
  if (isUsaRealSelected) {
      totalPlayers += isNaN(playerCounts.twotdmusa) ? 0 : playerCounts.twotdmusa;
  } else if (isAsiaRealSelected) {
      totalPlayers += isNaN(playerCounts.twotdmasia) ? 0 : playerCounts.twotdmasia;
  } else {
      totalPlayers += isNaN(playerCounts.twotdm) ? 0 : playerCounts.twotdm;
  }
  document.getElementById("totalplayers2tdm").textContent = `${totalPlayers} players`;
}

function updateTotalPlayerCount10() {
  let totalPlayers = 0;
  if (isUsaRealSelected) {
      totalPlayers += isNaN(playerCounts.mazeusa) ? 0 : playerCounts.mazeusa;
  } else if (isAsiaRealSelected) {
      totalPlayers += isNaN(playerCounts.mazeasia) ? 0 : playerCounts.mazeasia;
  } else {
      totalPlayers += isNaN(playerCounts.maze) ? 0 : playerCounts.maze;
  }
  document.getElementById("totalplayersmaze").textContent = `${totalPlayers} players`;
}

function updateTotalPlayerCount11() {
  let totalPlayers = 0;
  if (isUsaRealSelected) {
      totalPlayers += isNaN(playerCounts.fourtdmusa) ? 0 : playerCounts.fourtdmusa;
  } else if (isAsiaRealSelected) {
      totalPlayers += isNaN(playerCounts.fourtdmasia) ? 0 : playerCounts.fourtdmasia;
  } else {
      totalPlayers += isNaN(playerCounts.fourtdm) ? 0 : playerCounts.fourtdm;
  }
  document.getElementById("totalplayers4tdm").textContent = `${totalPlayers} players`;
}
// Call this function periodically, e.g., every 60 seconds
setInterval(fetchAllPlayerCounts, 500);
setInterval(updateTotalPlayerCount, 500);
setInterval(updateTotalPlayerCount1, 500);
setInterval(updateTotalPlayerCount2, 500);
setInterval(updateTotalPlayerCount3, 500);
setInterval(updateTotalPlayerCount4, 500);
setInterval(updateTotalPlayerCount5, 500);
setInterval(updateTotalPlayerCount6, 500);
setInterval(updateTotalPlayerCount7, 500);
setInterval(updateTotalPlayerCount8, 500);
setInterval(updateTotalPlayerCount9, 500);
setInterval(updateTotalPlayerCount10, 500);
setInterval(updateTotalPlayerCount11, 500);
setInterval(updateTotalPlayerCounteurope, 500);
setInterval(updateTotalPlayerCountusa, 500);
setInterval(updateTotalPlayerCountasia, 500);
// Also call it once when the game starts
fetchAllPlayerCounts();
updateTotalPlayerCount();
updateTotalPlayerCounteurope();
updateTotalPlayerCountusa();
updateTotalPlayerCountasia();
function getMockups() {
  global.mockupLoading = new Promise((resolve) => {
    fetch("mockups.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        global.mockups = data;
        console.log("Mockups loading complete.");
        resolve();
      })
      .catch((error) => {
        console.error("Error loading mockups:", error);
        resolve(); // Resolve even on error to avoid hanging
      });
  });
}

  // Function to show the grey box with slide-in animation
  function showGreyBox() {
    greyBox.style.display = 'block';
    greyBox.style.top = '20%'; // Move to the middle of the screen
  
    // Automatically hide the box after 3 seconds
    setTimeout(function() {
        greyBox.style.opacity = '0'; // Start fading out
        setTimeout(function() {
            greyBox.style.top = '-100px'; // Move back to the top
            greyBox.style.opacity = '1'; // Reset opacity for next time
            greyBox.style.display = 'none'; // Hide it
        }, 500); // Wait for the fade-out transition
    }, 3000); // 3 seconds before hiding
  }
    // Function to show the grey box with slide-in animation
    function showGreyBoxno() {
      greyBoxn.style.display = 'block';
      greyBoxn.style.top = '20%'; // Move to the middle of the screen
    
      // Automatically hide the box after 3 seconds
      setTimeout(function() {
          greyBoxn.style.opacity = '0'; // Start fading out
          setTimeout(function() {
              greyBoxn.style.top = '-100px'; // Move back to the top
              greyBoxn.style.opacity = '1'; // Reset opacity for next time
              greyBoxn.style.display = 'none'; // Hide it
          }, 500); // Wait for the fade-out transition
      }, 3000); // 3 seconds before hiding
    }
    // Function to show the grey box with slide-in animation
    function showGreyBox1() {
      greyBox1.style.display = 'block';
      greyBox1.style.top = '20%'; // Move to the middle of the screen
    
      // Automatically hide the box after 3 seconds
      setTimeout(function() {
          greyBox1.style.opacity = '0'; // Start fading out
          setTimeout(function() {
              greyBox1.style.top = '-100px'; // Move back to the top
              greyBox1.style.opacity = '1'; // Reset opacity for next time
              greyBox1.style.display = 'none'; // Hide it
          }, 500); // Wait for the fade-out transition
      }, 3000); // 3 seconds before hiding
    }
    // Function to show the grey box with slide-in animation
    function showGreyBox2() {
      greyBox2.style.display = 'block';
      greyBox2.style.top = '20%'; // Move to the middle of the screen
    
      // Automatically hide the box after 3 seconds
      setTimeout(function() {
          greyBox2.style.opacity = '0'; // Start fading out
          setTimeout(function() {
              greyBox2.style.top = '-100px'; // Move back to the top
              greyBox2.style.opacity = '1'; // Reset opacity for next time
              greyBox2.style.display = 'none'; // Hide it
          }, 500); // Wait for the fade-out transition
      }, 3000); // 3 seconds before hiding
    }
    function showGreyBox3() {
      greyBox3.style.display = 'block';
      greyBox3.style.top = '20%'; // Move to the middle of the screen
    
      // Automatically hide the box after 3 seconds
      setTimeout(function() {
          greyBox3.style.opacity = '0'; // Start fading out
          setTimeout(function() {
              greyBox3.style.top = '-100px'; // Move back to the top
              greyBox3.style.opacity = '1'; // Reset opacity for next time
              greyBox3.style.display = 'none'; // Hide it
          }, 500); // Wait for the fade-out transition
      }, 3000); // 3 seconds before hiding
    }
// Function to create the grey box dynamically
function createGreyBox() {
  var greyBox = document.createElement('div');
  greyBox.id = 'greyBox';
  greyBox.innerHTML = 'You do not have permissions to join this server.';
  
  // Apply styles directly in JavaScript
  greyBox.style.display = 'none';
  greyBox.style.position = 'fixed';
  greyBox.style.top = '-100px';
  greyBox.style.left = '50%';
  greyBox.style.transform = 'translateX(-50%)';
  greyBox.style.width = '300px';
  greyBox.style.padding = '20px';
  greyBox.style.backgroundColor = '#363636';
  greyBox.style.color = 'white';
  greyBox.style.fontSize = '16px';
  greyBox.style.textAlign = 'center';
  greyBox.style.borderRadius = '10px';
  greyBox.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  greyBox.style.zIndex = '1000';
  greyBox.style.transition = 'top 0.5s ease-out, opacity 0.5s ease-out';
  greyBox.style.opacity = '1'; // Initial opacity for fade-out effect

  // Append to body
  document.body.appendChild(greyBox);
  return greyBox;
}
function createGreyBoxn() {
  var greyBoxn = document.createElement('div');
  greyBoxn.id = 'greyBox';
  greyBoxn.innerHTML = 'This feature is not available yet.';
  
  // Apply styles directly in JavaScript
  greyBoxn.style.display = 'none';
  greyBoxn.style.position = 'fixed';
  greyBoxn.style.top = '-100px';
  greyBoxn.style.left = '50%';
  greyBoxn.style.transform = 'translateX(-50%)';
  greyBoxn.style.width = '300px';
  greyBoxn.style.padding = '20px';
  greyBoxn.style.backgroundColor = '#363636';
  greyBoxn.style.color = 'white';
  greyBoxn.style.fontSize = '16px';
  greyBoxn.style.textAlign = 'center';
  greyBoxn.style.borderRadius = '10px';
  greyBoxn.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  greyBoxn.style.zIndex = '1000';
  greyBoxn.style.transition = 'top 0.5s ease-out, opacity 0.5s ease-out';
  greyBoxn.style.opacity = '1'; // Initial opacity for fade-out effect

  // Append to body
  document.body.appendChild(greyBoxn);
  return greyBoxn;
}
// Function to create the grey box dynamically
function createGreyBox1() {
  var greyBox1 = document.createElement('div');
  greyBox1.id = 'greyBox';
  greyBox1.innerHTML = 'No IP address detected.';
  
  // Apply styles directly in JavaScript
  greyBox1.style.display = 'none';
  greyBox1.style.position = 'fixed';
  greyBox1.style.top = '-100px';
  greyBox1.style.left = '50%';
  greyBox1.style.transform = 'translateX(-50%)';
  greyBox1.style.width = '300px';
  greyBox1.style.padding = '20px';
  greyBox1.style.backgroundColor = '#363636';
  greyBox1.style.color = 'white';
  greyBox1.style.fontSize = '16px';
  greyBox1.style.textAlign = 'center';
  greyBox1.style.borderRadius = '10px';
  greyBox1.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  greyBox1.style.zIndex = '1000';
  greyBox1.style.transition = 'top 0.5s ease-out, opacity 0.5s ease-out';
  greyBox1.style.opacity = '1'; // Initial opacity for fade-out effect

  // Append to body
  document.body.appendChild(greyBox1);
  return greyBox1;
}
function createGreyBox2() {
  var greyBox2 = document.createElement('div');
  greyBox2.id = 'greyBox';
  greyBox2.innerHTML = 'You have been banned from the game.';
  
  // Apply styles directly in JavaScript
  greyBox2.style.display = 'none';
  greyBox2.style.position = 'fixed';
  greyBox2.style.top = '-100px';
  greyBox2.style.left = '50%';
  greyBox2.style.transform = 'translateX(-50%)';
  greyBox2.style.width = '300px';
  greyBox2.style.padding = '20px';
  greyBox2.style.backgroundColor = '#363636';
  greyBox2.style.color = 'white';
  greyBox2.style.fontSize = '16px';
  greyBox2.style.textAlign = 'center';
  greyBox2.style.borderRadius = '10px';
  greyBox2.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  greyBox2.style.zIndex = '1000';
  greyBox2.style.transition = 'top 0.5s ease-out, opacity 0.5s ease-out';
  greyBox2.style.opacity = '1'; // Initial opacity for fade-out effect

  // Append to body
  document.body.appendChild(greyBox2);
  return greyBox2;
}


function createGreyBox3() {
  var greyBox3 = document.createElement('div');
  greyBox3.id = 'greyBox';
  greyBox3.innerHTML = 'You have been temporarily banned from the game.';
  
  // Apply styles directly in JavaScript
  greyBox3.style.display = 'none';
  greyBox3.style.position = 'fixed';
  greyBox3.style.top = '-100px';
  greyBox3.style.left = '50%';
  greyBox3.style.transform = 'translateX(-50%)';
  greyBox3.style.width = '300px';
  greyBox3.style.padding = '20px';
  greyBox3.style.backgroundColor = '#363636';
  greyBox3.style.color = 'white';
  greyBox3.style.fontSize = '16px';
  greyBox3.style.textAlign = 'center';
  greyBox3.style.borderRadius = '10px';
  greyBox3.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  greyBox3.style.zIndex = '1000';
  greyBox3.style.transition = 'top 0.5s ease-out, opacity 0.5s ease-out';
  greyBox3.style.opacity = '1'; // Initial opacity for fade-out effect

  // Append to body
  document.body.appendChild(greyBox3);
  return greyBox3;
}
// Create the grey box element
var greyBox = createGreyBox();
var greyBox1 = createGreyBox1();
var greyBox2 = createGreyBox2();
var greyBox3 = createGreyBox3();
var greyBoxn = createGreyBoxn();
window.onload = async () => {
  window.serverAdd = "" || "arras2railway1-production.up.railway.app";

  if (window.serverAdd !== "") {
      global.mockupLoading = new Promise((resolve) => {
          fetch("mockups.json")
              .then((response) => {
                  if (!response.ok) {
                      throw new Error(`Network response was not ok: ${response.statusText}`);
                  }
                  return response.json();
              })
              .then((data) => {
                  global.mockups = data;
                  console.log("Mockups loading complete.");
                  resolve();
              })
              .catch((error) => {
                  console.error("Error loading mockups:", error);
                  resolve(); // Resolve even on error to avoid hanging
              });
      });
  }

  const startMenuWrapper = document.getElementById("startMenuWrapper");
  const startButton = document.getElementById("startButton");

  // Function to handle button clicks
  const handleButtonClick = (buttonClass, defaultServer) => {
      const button = document.querySelector(buttonClass);
      button.onclick = () => {
          window.serverAdd = defaultServer;
          getMockups();

          // Store the class name of the clicked button in localStorage
          localStorage.setItem("lastClickedButton", buttonClass);
      };
  };

  // Function to set servers based on selected region
  const setServers = (region) => {
    isUsaRealSelected = false; 
    isAsiaRealSelected = false; 
      if (region === "greenreal") {
          handleButtonClick(".red-button", "super-duper-goggles-g475v6p65wwv2vgwp-30004.app.github.dev");
          handleButtonClick(".yellow-button", "super-duper-goggles-g475v6p65wwv2vgwp-30002.app.github.dev");
          handleButtonClick(".blue-button", "super-duper-goggles-g475v6p65wwv2vgwp-30000.app.github.dev");
          handleButtonClick(".green-button", "super-duper-goggles-g475v6p65wwv2vgwp-30003.app.github.dev");
          handleButtonClick(".brown-button", "super-duper-goggles-g475v6p65wwv2vgwp-30008.app.github.dev");
          handleButtonClick(".pink-button", "super-duper-goggles-g475v6p65wwv2vgwp-30009.app.github.dev");
          handleButtonClick(".new-ffa-button", "super-duper-goggles-g475v6p65wwv2vgwp-30005.app.github.dev");
          handleButtonClick(".new-2tdm-button", "super-duper-goggles-g475v6p65wwv2vgwp-30001.app.github.dev");
          handleButtonClick(".new-maze-button", "super-duper-goggles-g475v6p65wwv2vgwp-30006.app.github.dev");
          handleButtonClick(".new-4tdm-button", "super-duper-goggles-g475v6p65wwv2vgwp-30007.app.github.dev");
      } else if (region === "usareal") {
        isUsaRealSelected = true; // Set flag when USA region is selected
          handleButtonClick(".red-button", "dreadful-superstition-wrg7qgg4x57rcvjj4-30004.app.github.dev");
          handleButtonClick(".yellow-button", "dreadful-superstition-wrg7qgg4x57rcvjj4-30002.app.github.dev");
          handleButtonClick(".blue-button", "dreadful-superstition-wrg7qgg4x57rcvjj4-30000.app.github.dev");
          handleButtonClick(".green-button", "dreadful-superstition-wrg7qgg4x57rcvjj4-30003.app.github.dev");
          handleButtonClick(".brown-button", "dreadful-superstition-wrg7qgg4x57rcvjj4-30008.app.github.dev");
          handleButtonClick(".pink-button", "dreadful-superstition-wrg7qgg4x57rcvjj4-30009.app.github.dev");
          handleButtonClick(".new-ffa-button", "dreadful-superstition-wrg7qgg4x57rcvjj4-30005.app.github.dev");
          handleButtonClick(".new-2tdm-button", "dreadful-superstition-wrg7qgg4x57rcvjj4-30001.app.github.dev");
          handleButtonClick(".new-maze-button", "dreadful-superstition-wrg7qgg4x57rcvjj4-30006.app.github.dev");
          handleButtonClick(".new-4tdm-button", "dreadful-superstition-wrg7qgg4x57rcvjj4-30007.app.github.dev");
      } else if (region === "asiareal") {
        isAsiaRealSelected = true; // Set flag when Asia region is selected
          handleButtonClick(".red-button", "frightening-shadow-4j7v66grj9qr2qjwq-30004.app.github.dev");
          handleButtonClick(".yellow-button", "frightening-shadow-4j7v66grj9qr2qjwq-30002.app.github.dev");
          handleButtonClick(".blue-button", "frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev");
          handleButtonClick(".green-button", "frightening-shadow-4j7v66grj9qr2qjwq-30003.app.github.dev");
          handleButtonClick(".brown-button", "frightening-shadow-4j7v66grj9qr2qjwq-30008.app.github.dev");
          handleButtonClick(".pink-button", "frightening-shadow-4j7v66grj9qr2qjwq-30009.app.github.dev");
          handleButtonClick(".new-ffa-button", "frightening-shadow-4j7v66grj9qr2qjwq-30005.app.github.dev");
          handleButtonClick(".new-2tdm-button", "frightening-shadow-4j7v66grj9qr2qjwq-30001.app.github.dev");
          handleButtonClick(".new-maze-button", "frightening-shadow-4j7v66grj9qr2qjwq-30006.app.github.dev");
          handleButtonClick(".new-4tdm-button", "frightening-shadow-4j7v66grj9qr2qjwq-30007.app.github.dev");
      } 
  };

  // New region-specific buttons
  const greenRealButton = document.querySelector(".greenreal-button");
  const usaRealButton = document.querySelector(".usareal-button");
  const asiaRealButton = document.querySelector(".asiareal-button");


  greenRealButton.onclick = () => {
      setServers("greenreal");
      localStorage.setItem("lastRegionButton", ".greenreal-button");
      // Optionally click the first server button or a default server button
      const defaultServerButton = document.querySelector(".red-button");
      if (defaultServerButton) {
          defaultServerButton.click(); // Simulate click on the red button
      }
  };

  usaRealButton.onclick = () => {
      setServers("usareal");
      localStorage.setItem("lastRegionButton", ".usareal-button");
      const defaultServerButton = document.querySelector(".red-button");
      if (defaultServerButton) {
          defaultServerButton.click(); // Simulate click on the red button
      }
  };

  asiaRealButton.onclick = () => {
      setServers("asiareal");
      localStorage.setItem("lastRegionButton", ".asiareal-button");
      const defaultServerButton = document.querySelector(".red-button");
      if (defaultServerButton) {
          defaultServerButton.click(); // Simulate click on the red button
      }
  };



  // Restore last clicked region button on page load or default to europe-button if no buttons were clicked
  const lastRegionButtonClass = localStorage.getItem("lastRegionButton");
  if (lastRegionButtonClass) {
      const lastRegionButton = document.querySelector(lastRegionButtonClass);
      if (lastRegionButton) {
          lastRegionButton.click(); // Simulate a click on the last clicked region button
      } else {
          // If the last button clicked is not found, default to europe-button
          const greenRealaButton = document.querySelector(".greenreal-button");
          if (greenRealaButton) {
            greenRealaButton.click(); // Simulate a click on the europe button
          }
      }
  } else {
      // If no region button was clicked before, automatically click the europe button
      const greenRealaButton = document.querySelector(".greenreal-button");
      if (greenRealaButton) {
        greenRealaButton.click(); // Simulate a click on the europe button
      }
  }

  // Restore last clicked server button on page load or default to red-button if no buttons were clicked
  const lastClickedButtonClass = localStorage.getItem("lastClickedButton");
  if (lastClickedButtonClass) {
      const lastClickedButton = document.querySelector(lastClickedButtonClass);
      if (lastClickedButton) {
          lastClickedButton.click(); // Simulate a click on the last clicked server button
      } else {
          // If the last button clicked is not found, default to red-button
          const redButton = document.querySelector(".red-button");
          if (redButton) {
              redButton.click(); // Simulate a click on the red button
          }
      }
  } else {
      // If no server button was clicked before, automatically click the red button
      const redButton = document.querySelector(".red-button");
      if (redButton) {
          redButton.click(); // Simulate a click on the red button
      }
  }



      var premiumButton = document.getElementById("premiumButton");
      premiumButton.onclick = () => {
        showGreyBoxno();
      };
    var beigeButton = document.querySelector(".beige-button");

    const allowedIP = '88.126.207.146';
    const localhostIPs = ['127.0.0.1', '::1']; // Localhost IP addresses (IPv4 and IPv6)

      // Fetch the user's IP address (you would need a service to provide this)
      fetch('https://webserverip.onrender.com/api/getPublicIP')
      .then(response => response.json())
      .then(data => {
          const userIP = data.ip;
            
        // Check if the IP matches the allowed one or is localhost
        if (userIP === allowedIP || localhostIPs.includes(userIP)) {
                // IP is allowed, proceed with joining the Core gamemode
                if (document.getElementById("antivpn").checked) {
                  beigeButton.onclick = () => {
                  window.serverAdd = "arras2railway1-production.up.railway.app";
                    showGreyBox2();
                    getMockups();
                }
               } else if (document.getElementById("antivpn1").checked) {
                beigeButton.onclick = () => {
                  window.serverAdd = "arras2railway1-production.up.railway.app";
                  showGreyBox3();
                  getMockups();
              }
             } else {
                beigeButton.onclick = () => {
                    window.serverAdd = "localhost:3009";
                    getMockups();
                };
              }
            } else {
                // IP is not allowed, display a message
                beigeButton.onclick = () => {
                  showGreyBox();
                };
            }

                //beigeButton.style.opacity = 0.5; // Visually indicate disabled state
              })
              .catch(error => {
                  console.error("Error fetching IP address:", error);
                  showGreyBox1()
                 // beigeButton.style.opacity = 0.5; // Visually indicate disabled state
              });
            




  

    if (Array.isArray(window.serverAdd)) {
      window.isMultiserver = true;
      const servers = window.serverAdd;
      let serverSelector = document.getElementById("serverSelector"),
        tbody = document.createElement("tbody");
      serverSelector.style.display = "block";
      document
        .getElementById("startMenuSlidingContent")
        .removeChild(document.getElementById("serverName"));
      serverSelector.classList.add("serverSelector");
     // serverSelector.classList.add("shadowscroll");
      serverSelector.appendChild(tbody);
      let myServer = {
        classList: {
          contains: () => false,
        },
      };
      for (let server of servers) {
        try {
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.textContent = `${server.gameMode} | ${server.players} Players`;
          td.onclick = () => {
            if (myServer.classList.contains("selected")) {
              myServer.classList.remove("selected");
            }
            tr.classList.add("selected");
            myServer = tr;
            window.serverAdd = server.ip;
    
          };
          tr.appendChild(td);
          tbody.appendChild(tr);
          myServer = tr;
        } catch (e) {
          console.log(e);
        }
      }
      if (Array.from(myServer.children)[0].onclick) {
        Array.from(myServer.children)[0].onclick();
      }
    } else {
      document.querySelector(".beige-button").style.opacity = 1;
      util.pullJSON("gamemodeData").then((json) => {
        document.getElementById("serverName").innerHTML =
          `<h4 class="nopadding">${json.gameMode} | ${json.players} Players</h4>`;
      });
      setTimeout(() => {
        document.getElementById("startButton").textContent = "Play";
        setTimeout(() => {
          document.getElementById("applyButton").click();
        }, 0);
      });
    }
    // Save forms
    util.retrieveFromLocalStorage("playerNameInput");

    util.retrieveFromLocalStorage("optScreenshotMode");

    util.retrieveFromLocalStorage("chk3d");
    
    util.retrieveFromLocalStorage("optFancy");
    util.retrieveFromLocalStorage("coloredHealthbars");
    util.retrieveFromLocalStorage("centerTank");
    util.retrieveFromLocalStorage("optCustom");
    util.retrieveFromLocalStorage("betterperformance");

    util.retrieveFromLocalStorage("optColors");
    util.retrieveFromLocalStorage("optColorsChange");
    util.retrieveFromLocalStorage("optNoPointy");
    util.retrieveFromLocalStorage("optBorders");
    util.retrieveFromLocalStorage("optBordersChange");
    util.retrieveFromLocalStorage("antivpn");
    util.retrieveFromLocalStorage("antivpn1");
    util.retrieveFromLocalStorage("seperatedHealthbars");


    util.retrieveFromLocalStorage("high");

        // Retrieve the betterperformance checkbox element
        var threedCheckbox = document.getElementById("chk3d");

        // Add event listener to the betterperformance checkbox
        threedCheckbox.addEventListener("change", function () {
          // Save the state of the betterperformance checkbox to local storage
          localStorage.setItem("chk3d", threedCheckbox.checked);
        });
    
        // Check if the betterperformance checkbox was checked previously and set its state accordingly
        var threedChecked = localStorage.getItem("chk3d");
        if (threedChecked !== null) {
          threedCheckbox.checked = threedChecked === "true";
        }

    // Retrieve the betterperformance checkbox element
    var betterPerformanceCheckbox =
      document.getElementById("betterperformance");

    // Add event listener to the betterperformance checkbox
    betterPerformanceCheckbox.addEventListener("change", function () {
      // Save the state of the betterperformance checkbox to local storage
      localStorage.setItem(
        "betterperformance",
        betterPerformanceCheckbox.checked,
      );
    });

    // Check if the betterperformance checkbox was checked previously and set its state accordingly
    var betterPerformanceChecked = localStorage.getItem("betterperformance");
    if (betterPerformanceChecked !== null) {
      betterPerformanceCheckbox.checked = betterPerformanceChecked === "true";
    }
  
    // Set default theme
    if (document.getElementById("optColors").value === "") {
      document.getElementById("optColors").value = "DiepIO";
    }
    if (document.getElementById("optBorders").value === "") {
      document.getElementById("optBorders").value = "dark";
    }
    // Game start stuff
if (document.getElementById("antivpn1").checked || document.getElementById("antivpn").checked) {
  document.getElementById("startButton").onclick = () => showGreyBox2();
} else {
  let isStartingGame = false; // Flag to track if the game is starting

  document.getElementById("startButton").onclick = () => {
      if (!isStartingGame) { // Check if the game is already starting
          isStartingGame = true; // Set the flag to true
          document.getElementById("startButton").textContent = "Starting...";
          document.getElementById("startButton").style.background = "linear-gradient(0deg,#45f5d5 40%,#37c9ae 40%)";
          setTimeout(() => {
              startGame();
              isStartingGame = false; // Reset the flag after starting the game
          }, 200);
      }
  };
  
  document.onkeydown = (e) => {
      var key = e.which || e.keyCode;
  
      if (
          key === global.KEY_ENTER &&
          !document.getElementById("antivpn1").checked &&
          !document.getElementById("antivpn").checked &&
          !global.connecting &&
          (global.dead || !global.gameStart) &&
          !isStartingGame // Ensure the game isn't already starting
      ) {
          isStartingGame = true; // Set the flag to true
          document.getElementById("startButton").textContent = "Starting...";
          document.getElementById("startButton").style.background = "linear-gradient(0deg,#45f5d5 40%,#37c9ae 40%)";
          setTimeout(() => {
              startGame();
              isStartingGame = false; // Reset the flag after starting the game
          }, 200);
      }
    };
  }
  
    window.addEventListener("resize", resizeEvent);
    // Resizing stuff
    resizeEvent();
// Automatically click the red button on page load

};
  // Prepare canvas stuff
  function resizeEvent() {
    let scale = window.devicePixelRatio;
    if (!config.graphical.fancyAnimations) {
      if (global.nopixel) {
      } else {
        scale *= 0.5;
      }
    }
    if (config.graphical.highResolution) {
      scale *= 2.5;
    }
    global.screenWidth = window.innerWidth * scale;
    global.screenHeight = window.innerHeight * scale;
    c.resize(global.screenWidth, global.screenHeight);
    global.ratio = scale;
    global.screenSize = Math.min(1920, Math.max(window.innerWidth, 2280));
  }
  window.resizeEvent = resizeEvent;
  window.canvas = new Canvas();
  var c = window.canvas.cv;
  var ctx = c.getContext("2d");
  var c2 = document.createElement("canvas");
  var ctx2 = c2.getContext("2d");
  ctx2.imageSmoothingEnabled = false;
   
  // Animation things
  function Smoothbar(value, speed, sharpness = 3, lerpValue = 0.025) {
    let time = Date.now();
    let display = value;
    let oldvalue = value;
    return {
      set: (val) => {
        if (value !== val) {
          oldvalue = display;
          value = val;
          time = Date.now();
        }
      },
      get: (round = false) => {
        display = util.lerp(display, value, lerpValue);
        if (Math.abs(value - display) < 0.1 && round) display = value;
        return display;
      },
    };
  }
  global.player = {
    vx: 0,
    vy: 0,
    lastvx: 0,
    lastvy: 0,
    renderx: global.player.cx,
    rendery: global.player.cy,
    lastx: global.player.x,
    lasty: global.player.y,
    cx: 0,
    cy: 0,
    target: window.canvas.target,
    name: "",
    lastUpdate: 0,
    time: 0,
    nameColor: "#ffffff",
  };

  // This starts the game and sets up the websocket
  function startGame() {
    // Get options
      // Get options
    const checkboxes = [
      document.querySelector("#optScreenshotMode"),
      document.querySelector("#optNoPointy"),
      document.querySelector("#savesettingstext"),
      document.querySelector("#chk3d"),
      document.querySelector("#forceapply"),
      document.querySelector("#optFancy"),
      document.querySelector("#coloredHealthbars"),
      document.querySelector("#seperatedHealthbars"),
      document.querySelector("#centerTank"),
      document.querySelector("#betterperformance"),
      document.querySelector("#high")
    ];
    
    // Store the initial checked state of each checkbox
    const initialCheckedState = checkboxes.map((checkbox) => checkbox.checked);
    
    setTimeout(() => {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
        checkbox.dataset.prevChecked = initialCheckedState[checkboxes.indexOf(checkbox)];
      });
    }, 100);
    
    // Check the boxes back after 200 milliseconds
    setTimeout(() => {
      checkboxes.forEach((checkbox) => {
        if (checkbox.dataset.prevChecked === 'true') {
          checkbox.checked = true;
          config.graphical.screenshotMode = document.querySelector("#optScreenshotMode").checked;
          config.graphical.pointy = !document.querySelector("#optNoPointy").checked;
           document.querySelector("#forceapply").checked = true;
          config.graphical.fancyAnimations = !document.querySelector("#chk3d").checked;
          global.optFancy = document.querySelector("#optFancy").checked;
          config.graphical.coloredHealthbars = document.querySelector("#coloredHealthbars").checked;
          config.graphical.seperatedHealthbars = document.querySelector("#seperatedHealthbars").checked;
          config.graphical.centerTank = document.querySelector("#centerTank").checked;
          global.betternofcway = document.querySelector("#betterperformance").checked;
          config.graphical.highResolution = document.querySelector("#high").checked;
         
          document.getElementById("applyButton").click();
        }
      });
    }, 200);
    

    util.submitToLocalStorage("centerTank");
    util.submitToLocalStorage("optBorders");
    util.submitToLocalStorage("optNoPointy");


    util.submitToLocalStorage("chk3d");
    util.submitToLocalStorage("optCustom");
    util.submitToLocalStorage("optScreenshotMode");
    util.submitToLocalStorage("coloredHealthbars");
    util.submitToLocalStorage("seperatedHealthbars");
    util.submitToLocalStorage("high");

    config.graphical.centerTank = document.getElementById("centerTank").checked;
    config.graphical.pointy = !document.getElementById("optNoPointy").checked;


    config.graphical.screenshotMode =
      document.getElementById("optScreenshotMode").checked;
    config.graphical.coloredHealthbars =
      document.getElementById("coloredHealthbars").checked;
    config.graphical.seperatedHealthbars = document.getElementById(
      "seperatedHealthbars",
    ).checked;
    switch (document.getElementById("optBorders").value) {
      case "normal":
        config.graphical.darkBorders = config.graphical.neon = false;
        break;
        case "high":
          config.graphical.highResolution = true;
          break;
      case "dark":
        config.graphical.darkBorders = true;
        config.graphical.neon = false;
        break;

      case "glass":
        config.graphical.darkBorders = false;
        config.graphical.neon = true;
        break;
      case "neon":
        config.graphical.darkBorders = config.graphical.neon = true;
        break;
    }
    util.submitToLocalStorage("optColors");
    util.submitToLocalStorage("optColorsChange");
    util.submitToLocalStorage("optBordersChange");
    let a = document.getElementById("optColors").value;
    color = colors[a === "" ? "DiepIO" : a];
    if (a == "custom") {
      let customTheme = document.getElementById("optCustom").value;
      color = parseTheme(customTheme).content;
      util.submitToLocalStorage("optCustom");
    }

    const applyButton = document.querySelector("#applyButton");
    applyButton.addEventListener("click", () => {
      const screenshotModeCheckbox = document.querySelector("#optScreenshotMode");
const classicTrapsCheckbox = document.querySelector("#optNoPointy");
      const savesettingstext = document.querySelector("#savesettingstext");
      const lowquality = document.querySelector("#chk3d");
const forceapply = document.querySelector("#forceapply");
              forceapply.checked;
const optFancy = document.querySelector("#optFancy");
      const colored = document.querySelector("#coloredHealthbars");
      const seperated = document.querySelector("#seperatedHealthbars");
      const centerTank = document.querySelector("#centerTank");
      const betterfps = document.querySelector("#betterperformance");
      const high = document.querySelector("#high");
      let e = document.getElementById('optColorsChange').value;
      color = colors[e === "" ? "DiepIO" : e];
             gameDraw.color = color;
       gameDraw.colorCache = {};
       switch (document.getElementById("optBordersChange").value) {
        case "normal":
          config.graphical.darkBorders = config.graphical.neon = false;
          break;
        case "dark":
          config.graphical.darkBorders = true;
          config.graphical.neon = false;
          break;
  
        case "glass":
          config.graphical.darkBorders = false;
          config.graphical.neon = true;
          break;
        case "neon":
          config.graphical.darkBorders = config.graphical.neon = true;
          break;
      }
      screenshotModeCheckbox.addEventListener("change", () => {
        config.graphical.screenshotMode = screenshotModeCheckbox.checked;
      });
      
      classicTrapsCheckbox.addEventListener("change", () => {
        config.graphical.pointy = !classicTrapsCheckbox.checked;
      });
      optFancy.addEventListener("change", () => {
        global.optFancy = optFancy.checked;
      });

      lowquality.addEventListener("change", () => {
        config.graphical.fancyAnimations = !lowquality.checked;
      });


      
      colored.addEventListener("change", () => {
        config.graphical.coloredHealthbars = colored.checked;
      });
      seperated.addEventListener("change", () => {
      config.graphical.seperatedHealthbars = seperated.checked;
    });
    centerTank.addEventListener("change", () => {
    config.graphical.centerTank = centerTank.checked;
    });
    betterfps.addEventListener("change", () => {
    global.betternofcway = betterfps.checked;
    });
    high.addEventListener("change", () => {
      config.graphical.highResolution = high.checked;
      });
      
    util.submitToLocalStorage("optScreenshotMode", screenshotModeCheckbox);
    util.submitToLocalStorage("optNoPointy", classicTrapsCheckbox);
    util.submitToLocalStorage("optColorsChange", e);
    util.submitToLocalStorage("optBordersChange");
    util.submitToLocalStorage("optFancy", optFancy);
    util.submitToLocalStorage("chk3d", lowquality);
       util.submitToLocalStorage("forceapply", forceapply);
    util.submitToLocalStorage("coloredHealthbars", colored);
    util.submitToLocalStorage("seperatedHealthbars", seperated);
    util.submitToLocalStorage("centerTank", centerTank);
    util.submitToLocalStorage("betterperformance", betterfps);
    util.submitToLocalStorage("high", high);
       savesettingstext.textContent = "Options applied."
       setTimeout(() => {
               savesettingstext.textContent = ""
       }, 2000);
       resizeEvent();

    });
    gameDraw.color = color;
    // Other more important stuff
    let playerNameInput = document.getElementById("playerNameInput");

    // Name and keys
    util.submitToLocalStorage("playerNameInput");

    global.playerName = global.player.name = playerNameInput.value;

    // Change the screen
    global.screenWidth = window.innerWidth;
    global.screenHeight = window.innerHeight;
 

    document
      .getElementById("startMenuWrapper")
      .classList.add("startMenuWrapper");

      document.body
      .appendChild(document.createElement("style"))
      .appendChild(
          document.createTextNode("#settingsButton{visibility:visible}")
      );
    // Immediately set opacity to 1 to ensure element is visible
    document.getElementById("gameAreaWrapper").style.opacity = 1;
global.needsReset = false;
    // Set timeout to remove the startMenuWrapper after animation ends
    setTimeout(() => {
      document.getElementById("startMenuWrapper").style.display = "none";
      document.getElementById("startMenuWrapper").style.maxHeight = "0px";

    }, 500);
  
    // Set up the socket
if (!global.socket || !global.socket.cmd || !global.socket.cmd.getMotion) {
      global.socket = socketInit(3000);
    }

  if (global.needsReset) {
global.animLoopHandle = true;
        setInterval(() => {
    fetchAllPlayerCounts();
    updateTotalPlayerCount();
    updateTotalPlayerCounteurope();
updateTotalPlayerCountusa();
updateTotalPlayerCountasia();
          }, 500);
  } else if (global.tryingtoreconnect) {
        setInterval(() => {
    fetchAllPlayerCounts();
    updateTotalPlayerCount();
    updateTotalPlayerCounteurope();
updateTotalPlayerCountusa();
updateTotalPlayerCountasia();
          }, 500);
  }
    if (!global.animLoopHandle) {

      animloop();

    }
    window.canvas.socket = global.socket;
    if (!global.needsReset) {
setInterval(
  () => moveCompensation.iterate(global.socket.cmd.getMotion()),
  1000 / 30,
);
    }
    document.getElementById("gameCanvas").focus();
    window.onbeforeunload = () => true;
  }

  // Background clearing
  function clearScreen(clearColor, alpha) {
    ctx.fillStyle = clearColor;
    ctx.globalAlpha = alpha;
    ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);
    ctx.globalAlpha = 1;
  }
  // Text functions
  function arrayifyText(rawText) {
    //we want people to be able to use the section sign in writing too
    // string with double §           txt   col   txt                      txt
    // "...§text§§text§..." => [..., "text", "", "text", ...] => [..., "text§text", ...]
    // this code is balanced on tight threads, holy shit
    let textArrayRaw = rawText.split(),
      textArray = [];
    if (!(textArrayRaw.length & 1)) {
      textArrayRaw.unshift("");
    }
    while (textArrayRaw.length) {
      let first = textArrayRaw.shift();
      if (!textArrayRaw.length) {
        textArray.push(first);
      } else if (textArrayRaw[1]) {
        textArray.push(first, textArrayRaw.shift());
      } else {
        textArrayRaw.shift();
      }
    }
    return textArray;
  }
  const measureText = (text, fontSize, withHeight = false) => {
    fontSize += config.graphical.fontSizeBoost;
    ctx.font = "bold " + fontSize + "px Ubuntu";
    let measurement = ctx.measureText(
      arrayifyText(text).reduce((a, b, i) => (i & 1 ? a : a + b), ""),
    );
    return withHeight
      ? { width: measurement.width, height: fontSize }
      : measurement.width;
  };
  function drawText(
    rawText,
    x,
    y,
    size,
    defaultFillStyle,
    align = "left",
    center = false,
    fade = 1,
    stroke = true,
    context = ctx,
  ) {
    size += config.graphical.fontSizeBoost;
    // Get text dimensions and resize/reset the canvas
    let offset = size / 5,
      ratio = 1,
      textArray = arrayifyText(rawText),
      renderedFullText = textArray.reduce((a, b, i) => (i & 1 ? a : a + b), "");
    if (context.getTransform) {
      ratio = ctx.getTransform().d;
      offset *= ratio;
    }
    if (ratio !== 1) {
      size *= ratio;
    }
    context.font = "bold " + size + "px Ubuntu";
    let Xoffset = offset,
      Yoffset = (size + 2 * offset) / 2,
      alignMultiplier = 0;
    switch (align) {
      //case "left":
      //    //do nothing.
      //    break;
      case "center":
        alignMultiplier = 0.5;
        break;
      case "right":
        alignMultiplier = 1;
    }
    if (alignMultiplier) {
      Xoffset -= ctx.measureText(renderedFullText).width * alignMultiplier;
    }
    // Draw it
    context.lineWidth = (size + 1) / config.graphical.fontStrokeRatio;
    context.textAlign = "left";
    context.textBaseline = "middle";
    context.strokeStyle = color.black;
    context.fillStyle = defaultFillStyle;
    context.save();
    context.lineCap = config.graphical.miterText ? "miter" : "round";
    context.lineJoin = config.graphical.miterText ? "miter" : "round";
    if (ratio !== 1) {
      context.scale(1 / ratio, 1 / ratio);
    }
    Xoffset += x * ratio - size / 4; //this extra size-dependant margin is a guess lol // apparently this guess worked out to be a hella good one
    Yoffset += y * ratio - Yoffset * (center ? 1.05 : 1.5);
    if (stroke) {
      context.strokeText(renderedFullText, Xoffset, Yoffset);
    }
    for (let i = 0; i < textArray.length; i++) {
      let str = textArray[i];

      // odd index = this is a color to set the fill style to
      if (i & 1) {
        //reset color to default
        if (str === "reset") {
          context.fillStyle = defaultFillStyle;
        } else {
          // try your best to get a valid color out of it
          if (!isNaN(str)) {
            str = parseInt(str);
          }
          str = gameDraw.getColor(str) ?? str;
        }
        context.fillStyle = str;
      } else {
        // move forward a bit taking the width of the last piece of text + "kerning" between
        // the last letter of last text and the first letter of current text,
        // making it align perfectly with what we drew with strokeText earlier
        if (i) {
          Xoffset +=
            ctx.measureText(textArray[i - 2] + str).width -
            ctx.measureText(str).width;
        }
        context.fillText(str, Xoffset, Yoffset);
      }
    }
    context.restore();
  }
  function drawTextn(
    rawText,
    x,
    y,
    size,
    defaultFillStyle,
    align = "left",
    center = false,
    fade = 1,
    stroke = true,
    context = ctx,
  ) {
    const devicePixelRatio = window.devicePixelRatio || 1;

    // Scale the canvas for high-resolution displays
    if (
      context.canvas.width !== context.canvas.clientWidth * devicePixelRatio ||
      context.canvas.height !== context.canvas.clientHeight * devicePixelRatio
    ) {
      context.canvas.width = context.canvas.clientWidth * devicePixelRatio;
      context.canvas.height = context.canvas.clientHeight * devicePixelRatio;
      context.scale(devicePixelRatio, devicePixelRatio);
    }

    size += config.graphical.fontSizeBoost;
    // Get text dimensions and resize/reset the canvas
    let offset = size / 5,
      ratio = 1,
      textArray = arrayifyText(rawText),
      renderedFullText = textArray.reduce((a, b, i) => (i & 1 ? a : a + b), "");

    if (context.getTransform) {
      ratio = context.getTransform().d;
      offset *= ratio;
    }
    if (ratio !== 1) {
      size *= ratio;
    }
    context.font = `bold ${size}px Ubuntu`;

    let Xoffset = offset,
      Yoffset = (size + 2 * offset) / 2,
      alignMultiplier = 0;

    switch (align) {
      case "center":
        alignMultiplier = 0.5;
        break;
      case "right":
        alignMultiplier = 1;
    }

    if (alignMultiplier) {
      Xoffset -= context.measureText(renderedFullText).width * alignMultiplier;
    }

    context.lineWidth = (size - 1.5) / config.graphical.fontStrokeRatio;
    context.textAlign = "left";
    context.textBaseline = "middle";

    context.strokeStyle = color.black;
    context.fillStyle = defaultFillStyle;
    context.save();

    context.lineCap = config.graphical.miterText ? "miter" : "round";
    context.lineJoin = config.graphical.miterText ? "miter" : "round";

    if (ratio !== 1) {
      context.scale(1 / ratio, 1 / ratio);
    }

    Xoffset += x * ratio - size / 4;
    Yoffset += y * ratio - Yoffset * (center ? 1.05 : 1.5);

    if (stroke) {
      context.strokeText(renderedFullText, Xoffset, Yoffset);
    }

    for (let i = 0; i < textArray.length; i++) {
      let str = textArray[i];

      if (i & 1) {
        if (str === "reset") {
          context.fillStyle = defaultFillStyle;
        } else {
          if (!isNaN(str)) {
            str = parseInt(str);
          }
          str = gameDraw.getColor(str) ?? str;
        }
        context.fillStyle = str;
      } else {
        if (i) {
          Xoffset +=
            context.measureText(textArray[i - 2] + str).width -
            context.measureText(str).width;
        }
        context.fillText(str, Xoffset, Yoffset);
      }
    }
    context.restore();
  }
  // Gui drawing functions
  function drawGuiRect(x, y, length, height, stroke = false) {
    switch (stroke) {
      case true:
        ctx.strokeRect(x, y, length, height);
        break;
      case false:
        ctx.fillRect(x, y, length, height);
        break;
    }
  }

  function drawGuiCircle(x, y, radius, stroke = false) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    stroke ? ctx.stroke() : ctx.fill();
  }

  function drawGuiLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.lineTo(Math.round(x1) + 0.5, Math.round(y1) + 0.5);
    ctx.lineTo(Math.round(x2) + 0.5, Math.round(y2) + 0.5);
    ctx.closePath();
    ctx.stroke();
  }

  function drawBar(x1, x2, y, width, color) {
    ctx.beginPath();
    ctx.lineTo(x1, y);
    ctx.lineTo(x2, y);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();
  }
  //checking for images in the shape so we can draw them
  function isImageURL(url) {
    try {
      const parsedUrl = new URL(url);
      const path = parsedUrl.pathname;
      const ext = path.split(".").pop().toLowerCase(); // Get the lowercase file extension

      // List of common image file extensions
      const imageExtensions = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "webp",
        "svg",
      ];

      return imageExtensions.includes(ext);
    } catch (error) {
      return false; // URL parsing failed, or it's not an image URL.
    }
  }
  // Sub-drawing functions
  const drawPolyImgs = [];
  function drawPoly(
    context,
    centerX,
    centerY,
    radius,
    sides,
    angle = 0,
    borderless,
    fill,
  ) {
    // Start drawing
    context.beginPath();
    if (sides instanceof Array) {
      let dx = Math.cos(angle);
      let dy = Math.sin(angle);
      for (let [x, y] of sides)
        context.lineTo(
          centerX + radius * (x * dx - y * dy),
          centerY + radius * (y * dx + x * dy),
        );
    } else {
      if ("string" === typeof sides) {
        if (isImageURL(sides)) {
          //ideally we'd preload images when mockups are loaded but im too lazy for that atm
          if (!drawPolyImgs[sides]) {
            drawPolyImgs[sides] = new Image();
            drawPolyImgs[sides].src = sides;
            drawPolyImgs[sides].isBroken = false;
            drawPolyImgs[sides].onerror = function () {
              console.log("Failed to load image!\nURL:", sides);
              this.isBroken = true;
            };
          }
          let img = drawPolyImgs[sides];
          if (img.isBroken || !img.complete) {
            // check if img is broken and draw placeholder if so
            //this is probably the worst way to draw a missing texture checkerboard but im too lazy to do a better one
            context.translate(centerX, centerY);
            context.rotate(angle);
            context.beginPath();
            context.fillStyle = "#ff00ff";
            context.lineTo(-radius, -radius);
            context.lineTo(radius, -radius);
            context.lineTo(radius, radius);
            context.lineTo(-radius, radius);
            context.lineTo(-radius, -radius);
            context.fill();
            context.closePath();
            context.beginPath();
            context.fillStyle = "#000000";
            context.lineTo(-radius, -radius);
            context.lineTo(0, -radius);
            context.lineTo(0, 0);
            context.lineTo(0, radius);
            context.lineTo(radius, radius);
            context.lineTo(radius, 0);
            context.lineTo(0, 0);
            context.lineTo(-radius, 0);
            context.lineTo(-radius, -radius);
            context.fill();
            context.closePath();
            context.rotate(-angle);
            context.translate(-centerX, -centerY);
            return;
          }
          context.translate(centerX, centerY);
          context.rotate(angle);
          context.drawImage(img, -radius, -radius, radius * 2, radius * 2);
          context.rotate(-angle);
          context.translate(-centerX, -centerY);
          return;
        } else {
          let path = new Path2D(sides);
          context.save();
          context.translate(centerX, centerY);
          context.scale(radius, radius);
          context.lineWidth /= radius;
          context.rotate(angle);
          context.lineWidth *= fill ? 1 : 0.5; // Maintain constant border width
          if (!borderless) context.stroke(path);
          if (fill) context.fill(path);
          context.restore();
          return;
        }
      }
      angle += sides % 2 ? 0 : Math.PI / sides;
    }
    if (!sides) {
      // Circle
      let fillcolor = context.fillStyle;
      let strokecolor = context.strokeStyle;
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      context.fillStyle = strokecolor;
      context.lineWidth *= fill ? 1 : 0.5; // Maintain constant border width
      if (!borderless) context.stroke();
      context.closePath();
      context.beginPath();
      context.fillStyle = fillcolor;
      context.arc(centerX, centerY, radius * fill, 0, 2 * Math.PI);
      if (fill) context.fill();
      context.closePath();
      return;
    } else if (sides < 0) {
      // Star
      context.lineJoin = "miter";
      sides = -sides;
      angle += (sides % 1) * Math.PI * 2;
      sides = Math.floor(sides);
      let dip = 1 - 6 / sides ** 2;
      context.moveTo(
        centerX + radius * Math.cos(angle),
        centerY + radius * Math.sin(angle),
      );
      context.lineWidth *= fill ? 1 : 0.5; // Maintain constant border width
      for (let i = 0; i < sides; i++) {
        let htheta = ((i + 0.5) / sides) * 2 * Math.PI + angle,
          theta = ((i + 1) / sides) * 2 * Math.PI + angle,
          cx = centerX + radius * dip * Math.cos(htheta),
          cy = centerY + radius * dip * Math.sin(htheta),
          px = centerX + radius * Math.cos(theta),
          py = centerY + radius * Math.sin(theta);
        /*if (curvyTraps) {
                context.quadraticCurveTo(cx, cy, px, py);
            } else {
                context.lineTo(cx, cy);
                context.lineTo(px, py);
            }*/
        context.quadraticCurveTo(cx, cy, px, py);
      }
    } else if (sides > 0) {
      // Polygon
      angle += (sides % 1) * Math.PI * 2;
      sides = Math.floor(sides);
      context.lineWidth *= fill ? 1 : 0.5; // Maintain constant border width
      for (let i = 0; i < sides; i++) {
        let theta = (i / sides) * 2 * Math.PI + angle;
        context.lineTo(
          centerX + radius * Math.cos(theta),
          centerY + radius * Math.sin(theta),
        );
      }
    }
    context.closePath();
    if (!borderless) context.stroke();
    if (fill) context.fill();
    context.lineJoin = "round";
  }
  function drawTrapezoid(
    context,
    x,
    y,
    length,
    height,
    aspect,
    angle,
    borderless,
    fill,
  ) {
    let h = [];
    h = aspect > 0 ? [height * aspect, height] : [height, -height * aspect];

    // Construct a trapezoid at angle 0
    let points = [],
      sinT = Math.sin(angle),
      cosT = Math.cos(angle);
    points.push([0, h[1]]);
    points.push([length * 2, h[0]]);
    points.push([length * 2, -h[0]]);
    points.push([0, -h[1]]);

    // Rotate it to the new angle via vector rotation
    context.beginPath();
    for (let point of points) {
      let newX = point[0] * cosT - point[1] * sinT + x,
        newY = point[0] * sinT + point[1] * cosT + y;
      context.lineTo(newX, newY);
    }
    context.closePath();
    if (!borderless) context.stroke();
    if (fill) context.fill();
  }
  // Entity drawing (this is a function that makes a function)
const drawEntity = (baseColor, x, y, instance, ratio, alpha = 1, scale = 1, rot = 0, turretsObeyRot = false, assignedContext = false, turretInfo = false, render = instance.render) => {
    let context = assignedContext ? assignedContext : ctx;
    let fade = turretInfo ? 1 : render.status.getFade(),
        drawSize = scale * ratio * instance.size,
        indexes = instance.index.split("-"),
        m = global.mockups[parseInt(indexes[0])],
        xx = x,
        yy = y,
        source = turretInfo === false ? instance : turretInfo,
        blend = turretsObeyRot ? 0 : render.status.getBlend();
    source.guns.update();
    if (fade === 0 || alpha === 0) return;
    if (render.expandsWithDeath) drawSize *= 1 + 0.5 * (1 - fade);
    if (config.graphical.fancyAnimations && assignedContext != ctx2 && (fade !== 1 || alpha !== 1)) {
        context = ctx2;
        context.canvas.width = context.canvas.height = drawSize * m.position.axis + ratio * 20;
        xx = context.canvas.width / 2 - (drawSize * m.position.axis * m.position.middle.x * Math.cos(rot)) / 4;
        yy = context.canvas.height / 2 - (drawSize * m.position.axis * m.position.middle.x * Math.sin(rot)) / 4;
        context.translate(0.5, 0.5);
    } else {
        if (fade * alpha < 0.5) return;
    }
    context.lineCap = "round";
    context.lineJoin = "round";
    // Draw turrets beneath us
    for (let i = 0; i < source.turrets.length; i++) {
        let t = source.turrets[i];
        source.turrets[i].lerpedFacing == undefined
            ? (source.turrets[i].lerpedFacing = source.turrets[i].facing)
            : (source.turrets[i].lerpedFacing = util.lerpAngle(source.turrets[i].lerpedFacing, source.turrets[i].facing, 0.1, true));
        if (!t.layer) {
            let ang = t.direction + t.angle + rot,
                len = t.offset * drawSize,
                facing = 0;
            if (t.mirrorMasterAngle || turretsObeyRot) {
                facing = rot + t.angle;
            } else {
                facing = source.turrets[i].lerpedFacing;
            }
            drawEntity(baseColor, xx + len * Math.cos(ang), yy + len * Math.sin(ang), t, ratio, 1, (drawSize / ratio / t.size) * t.sizeFactor, facing, turretsObeyRot, context, source.turrets[i], render);
        }
    }
    context.lineJoin = "miter";
    // Draw guns below us
    context.lineWidth = Math.max(config.graphical.mininumBorderChunk, ratio * config.graphical.borderChunk);
    let positions = source.guns.getPositions(),
        gunConfig = source.guns.getConfig();
    for (let i = 0; i < source.guns.length; i++) {
        let g = gunConfig[i];
        if (!g.drawAbove) {
            let position = (turretsObeyRot ? 0 : positions[i]) / (g.aspect === 1 ? 2 : 1),
                gx = g.offset * Math.cos(g.direction + g.angle + rot),
                gy = g.offset * Math.sin(g.direction + g.angle + rot),
                gunColor = g.color == null ? color.grey : gameDraw.modifyColor(g.color, baseColor),
                borderless = g.borderless,
                fill = g.drawFill;
            gameDraw.setColor(context, gameDraw.mixColors(gunColor, render.status.getColor(), blend));
            drawTrapezoid(context, xx + drawSize * gx, yy + drawSize * gy, drawSize * (g.length / 1.8 - (g.aspect === 1 ? position : position / 2)), (drawSize * g.width) / 2, g.aspect, g.angle + rot, borderless, fill);
        }
    }
    context.lineJoin = "round";
    // Draw body
    context.globalAlpha = 1;
    gameDraw.setColor(context, gameDraw.mixColors(gameDraw.modifyColor(instance.color, baseColor), render.status.getColor(), turretsObeyRot ? 0 : blend));
    
    //just so you know, the glow implimentation is REALLY bad and subject to change in the future
    context.shadowColor = m.glow.color!=null ? gameDraw.modifyColor(m.glow.color) : gameDraw.mixColors(
        gameDraw.modifyColor(instance.color),
        render.status.getColor(),
        render.status.getBlend()
    );
    if (m.glow.radius && m.glow.radius>0){
      context.shadowBlur = m.glow.radius * ((drawSize / m.size) * m.realSize);
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.globalAlpha = m.glow.alpha;
      for (var i = 0; i < m.glow.recursion; i++) {
        drawPoly(context, xx, yy, (drawSize / m.size) * m.realSize, m.shape, rot, true, m.drawFill);
      }
      context.globalAlpha = 1;
    }
    context.shadowBlur = 0
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    drawPoly(context, xx, yy, (drawSize / m.size) * m.realSize, m.shape, rot, m.borderless, m.drawFill);
    context.lineJoin = "miter";
    // Draw guns above us
    for (let i = 0; i < source.guns.length; i++) {
        let g = gunConfig[i];
        if (g.drawAbove) {
            let position = (turretsObeyRot ? 0 : positions[i]) / (g.aspect === 1 ? 2 : 1),
                gx = g.offset * Math.cos(g.direction + g.angle + rot),
                gy = g.offset * Math.sin(g.direction + g.angle + rot),
                gunColor = g.color == null ? color.grey : gameDraw.modifyColor(g.color, baseColor),
                borderless = g.borderless,
                fill = g.drawFill;
            gameDraw.setColor(context, gameDraw.mixColors(gunColor, render.status.getColor(), blend));
            drawTrapezoid(context, xx + drawSize * gx, yy + drawSize * gy, drawSize * (g.length / 2 - (g.aspect === 1 ? position * 2 : position)), (drawSize * g.width) / 2, g.aspect, g.angle + rot, borderless, fill);
        }
    }
    context.lineJoin = "round";
    // Draw turrets above us
    for (let i = 0; i < source.turrets.length; i++) {
        let t = source.turrets[i];
        if (t.layer) {
            let ang = t.direction + t.angle + rot,
                len = t.offset * drawSize,
                facing = 0;
            if (t.mirrorMasterAngle || turretsObeyRot) {
                facing = rot + t.angle;
            } else {
                facing = source.turrets[i].lerpedFacing;
            }
            drawEntity(baseColor, xx + len * Math.cos(ang), yy + len * Math.sin(ang), t, ratio, 1, (drawSize / ratio / t.size) * t.sizeFactor, facing, turretsObeyRot, context, source.turrets[i], render);
        }
    }
    if (assignedContext == false && context != ctx && context.canvas.width > 0 && context.canvas.height > 0) {
        ctx.save();
        ctx.globalAlpha = alpha * fade;
        ctx.imageSmoothingEnabled = false;
        //ctx.globalCompositeOperation = "overlay";
        ctx.drawImage(context.canvas, x - xx, y - yy);
        ctx.restore();
        //ctx.globalCompositeOperation = "source-over";
    }
};

var autoLevelUpCheckbox = document.querySelector("#betterperformance");
// Function to check the checkbox automatically
function checkAutoLevelUp() {
  // Check the checkbox
  autoLevelUpCheckbox.checked = true;

  // Store the updated value in local storage
  util.submitToLocalStorage("betterperformance");

  // Add an event listener for the load event
  window.addEventListener("load", () => {
    // Get the saved value from local storage
    const savedValue = localStorage.getItem("betterperformance");

    // If the saved value is false, uncheck the checkbox
    if (savedValue === "false") {
      autoLevelUpCheckbox.checked = false;
    }
  });
}
  checkAutoLevelUp();
function drawHealth(x, y, instance, ratio, alpha) {
  let fade = instance.render.status.getFade();

  ctx.globalAlpha = fade * fade;

  let size = instance.size * ratio,
    indexes = instance.index.split("-"),
    m = global.mockups[parseInt(indexes[0])],
    realSize = (size / m.size) * m.realSize;

  if (instance.drawsHealth) {
    let health = instance.render.health.get(),
      shield = instance.render.shield.get();

    if (instance.hpLoss) {
      const textAlpha = 1;
      const textFadeInDuration = 500;
      const textFadeOutDuration = 500;
      const textDisappearDelay = 500;
      const textYOffset = 10;

      const textX = x - size - 5 * ratio;
      const textY = y + realSize + 10 * ratio + textYOffset;

      const currentTime = new Date().getTime();
      const textShowTime = currentTime - textDisappearDelay;
      const textFadeStatus =
        currentTime - textShowTime < textFadeOutDuration
          ? 1 - (currentTime - textShowTime) / textFadeOutDuration
          : currentTime - textShowTime < textFadeInDuration
          ? (currentTime - textShowTime) / textFadeInDuration
          : 1;

      if (textFadeStatus > 0) {
        ctx.globalAlpha = textAlpha * textFadeStatus;
        drawText(
          `-${instance.hpLoss}`,
          textX,
          textY,
          16 * ratio,
          "black",
          "left",
          "top",
          "Arial"
        );
        ctx.globalAlpha = 1;
      }

      instance.hpLoss = null;
    }

    if (health < 1 - 1e-4 || shield < 1 - 1e-4) {
      let instanceColor = null;
      let getColor = true;

      if (typeof instance.color == "string") {
        instanceColor = instance.color.split(" ")[0];

        if (instanceColor[0] == "#") {
          getColor = false;
        } else if (!isNaN(parseInt(instanceColor))) {
          instanceColor = parseInt(instanceColor);
        }
      } else {
        instanceColor = instance.color;
      }

      function interpolateColor(color1, color2, factor) {
        const r1 = parseInt(color1.substring(1, 3), 16);
        const g1 = parseInt(color1.substring(3, 5), 16);
        const b1 = parseInt(color1.substring(5, 7), 16);

        const r2 = parseInt(color2.substring(1, 3), 16);
        const g2 = parseInt(color2.substring(3, 5), 16);
        const b2 = parseInt(color2.substring(5, 7), 16);

        const r = Math.floor(r1 + factor * (r2 - r1));
        const g = Math.floor(g1 + factor * (g2 - g1));
        const b = Math.floor(b1 + factor * (b2 - b1));

        return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
      }

      let col = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : color.lgreen;
      let col1 = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : color.orange;
      let col2 = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : "#d10000";
      let col3 = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : "#d10e00";
      let col4 = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : "#e5ff00";
      let col5 = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : "#e7e300";
      let col6 = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : "#ffae00";
      let col7 = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : "#ff9100";
      let col8 = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : "#ff7300";
      let col9 = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : "#db2100";
      let col10 = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : "#5ae200";
      let col11 = config.graphical.coloredHealthbars
        ? gameDraw.mixColors(
            getColor ? gameDraw.getColor(instanceColor) : instanceColor,
            color.guiwhite,
            0.5,
          )
        : "#7edf00";

      let transitionCol = interpolateColor(col, col9, 1 - health);
      let transitionCol3 = interpolateColor(col, col3, 1 - health);
      let transitionCol4 = interpolateColor(col, col4, 1 - health);
      let transitionCol5 = interpolateColor(col, col5, 1 - health);
      let transitionCol6 = interpolateColor(col, col6, 1 - health);
      let transitionCol7 = interpolateColor(col, col7, 1 - health);
      let transitionCol8 = interpolateColor(col, col8, 1 - health);
      let transitionCol9 = interpolateColor(col, col9, 1 - health);
      let transitionCol10 = interpolateColor(col, col10, 1 - health);
      let transitionCol11 = interpolateColor(col, col11, 1 - health);

      let yy = y + realSize + 15 * ratio;
      let barWidth = 3 * ratio;

      ctx.globalAlpha = fade * alpha ** 2;

      drawBar(
        x - size,
        x + size,
        yy + (barWidth * config.graphical.seperatedHealthbars) / 2,
        barWidth * (1 + config.graphical.seperatedHealthbars) +
          config.graphical.barChunk,
        color.black,
      );

      drawBar(
        x - size,
        x - size + 2 * size * health,
        yy + barWidth * config.graphical.seperatedHealthbars,
        barWidth,
        col,
      );

      if (shield || config.graphical.seperatedHealthbars) {
        if (health < 0.95)
          drawBar(
            x - size,
            x - size + 2 * size * health,
            yy + barWidth * config.graphical.seperatedHealthbars,
            barWidth,
            transitionCol10,
          );

        if (health < 0.85)
          drawBar(
            x - size,
            x - size + 2 * size * health,
            yy + barWidth * config.graphical.seperatedHealthbars,
            barWidth,
            transitionCol11,
          );

        if (health < 0.75)
          drawBar(
            x - size,
            x - size + 2 * size * health,
            yy + barWidth * config.graphical.seperatedHealthbars,
            barWidth,
            transitionCol4,
          );

        if (health < 0.25)
          drawBar(
            x - size,
            x - size + 2 * size * health,
            yy + barWidth * config.graphical.seperatedHealthbars,
            barWidth,
            transitionCol8,
          );

        if (health < 0.5)
          drawBar(
            x - size,
            x - size + 2 * size * health,
            yy + barWidth * config.graphical.seperatedHealthbars,
            barWidth,
            transitionCol3,
          );

        if (health < 0.65)
          drawBar(
            x - size,
            x - size + 2 * size * health,
            yy + barWidth * config.graphical.seperatedHealthbars,
            barWidth,
            transitionCol5,
          );

        if (health < 0.55)
          drawBar(
            x - size,
            x - size + 2 * size * health,
            yy + barWidth * config.graphical.seperatedHealthbars,
            barWidth,
            transitionCol6,
          );

        if (health < 0.45)
          drawBar(
            x - size,
            x - size + 2 * size * health,
            yy + barWidth * config.graphical.seperatedHealthbars,
            barWidth,
            transitionCol7,
          );

        if (health < 0.35)
          drawBar(
            x - size,
            x - size + 2 * size * health,
            yy + barWidth * config.graphical.seperatedHealthbars,
            barWidth,
            transitionCol8,
          );

        if (health < 0.15)
          drawBar(
            x - size,
            x - size + 2 * size * health,
            yy + barWidth * config.graphical.seperatedHealthbars,
            barWidth,
            transitionCol9,
          );

        if (health < 0.05)
          drawBar(
            x - size,
            x - size + 2 * size * health,
            yy + barWidth * config.graphical.seperatedHealthbars,
            barWidth,
            transitionCol,
          );

        if (!config.graphical.seperatedHealthbars)
          ctx.globalAlpha = (1 + shield) * 0.3 * alpha ** 2 * fade;

        ctx.globalAlpha = 1;

        if (!config.graphical.seperatedHealthbars)
          ctx.globalAlpha = (1 + shield) * 0.3 * alpha ** 2 * fade;

        ctx.globalAlpha = 1;
      }
    }
  }

  function calculateNameRatio(instance, ratio) {
    return (ratio * instance.size) / 20; // Adjust the divisor as needed
  }

  if (instance.id !== gui.playerid && instance.nameplate) {
    var name = instance.name.substring(7, instance.name.length + 1);
    var namecolor = instance.name.substring(0, 7);

    let nameSize = (ratio * instance.size) / 18;
    let scoreSize = (ratio * instance.size) / 48;

    ctx.globalAlpha = alpha;

    let nameRatio = calculateNameRatio(instance, ratio);
    if (global.showInvisible) ctx.globalAlpha = alpha + 0.28;
    else {
      ctx.globalAlpha = fade * alpha ** 2;
    }

    drawText(
      name,
      x,
      y - realSize - 20 * nameRatio,
      16 * nameSize,
      namecolor,
      "center"
    );

    drawText(
      util.handleLargeNumber(instance.score, 1),
      x,
      y - realSize - 8 * nameRatio,
      16 * scoreSize,
      namecolor,
      "center"
    );

    ctx.globalAlpha = 1;
  }
}
  // Start animation
  window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    ((callback) => setTimeout(callback, 1000 / 60));
  window.cancelAnimFrame =
    window.cancelAnimationFrame || window.mozCancelAnimationFrame;
  // Drawing states
  const statMenu = Smoothbar(0, 0.7, 1.5, 0.1);
  const upgradeMenu = Smoothbar(0, 2, 3, 0.05);
  const hasclickedsettings = Smoothbar(0, 2, 3, 0.05);
  const leaveupgradeMenu = Smoothbar(-1, 2, 3, 0.05);
  // Define the graph constructor
  function graph() {
    var data = [];
    return (point, x, y, w, h, col) => {
      // Add point and push off old ones
      data.push(point);
      while (data.length > w) {
        data.splice(0, 1);
      }
      // Get scale
      let min = Math.min(...data),
        max = Math.max(...data),
        range = max - min;
      // Draw zero
      if (max > 0 && min < 0) {
        drawBar(x, x + w, y + (h * max) / range, 2, color.guiwhite);
      }
      // Draw points
      ctx.beginPath();
      let i = -1;
      for (let p of data) {
        if (!++i) {
          ctx.moveTo(x, y + (h * (max - p)) / range);
        } else {
          ctx.lineTo(x + i, y + (h * (max - p)) / range);
        }
      }
      ctx.lineWidth = 1;
      ctx.strokeStyle = col;
      ctx.stroke();
    };
  }
  // Protected functions
  function interpolate(p1, p2, v1, v2, ts, tt) {
    let k = Math.cos((1 + tt) * Math.PI);
    return 0.5 * (((1 + tt) * v1 + p1) * (k + 1) + (-tt * v2 + p2) * (1 - k));
  }

  function extrapolate(p1, p2, v1, v2, ts, tt) {
    return p2 + (p2 - p1) * tt;
  }
  // Useful thing
  let modulo = function (a, n) {
    return ((a % n) + n) % n;
  };
  function angleDifference(sourceA, targetA) {
    let a = targetA - sourceA;
    return modulo(a + Math.PI, 2 * Math.PI) - Math.PI;
  }
  // Lag compensation functions
  const compensation = () => {
    // Protected vars
    let t = 0,
      tt = 0,
      ts = 0;
    // Methods
    return {
      set: (time = global.player.time, interval = global.metrics.rendergap) => {
        t = Math.max(getNow() - time - 80, -interval);
        if (t > 150 && t < 1000) {
          t = 150;
        }
        if (t > 1000) {
          t = (1000 * 1000 * Math.sin(t / 1000 - 1)) / t + 1000;
        }
        tt = t / interval;
        ts = (config.roomSpeed * 30 * t) / 1000;
      },
      predict: (p1, p2, v1, v2) => {
        return t >= 0
          ? extrapolate(p1, p2, v1, v2, ts, tt)
          : interpolate(p1, p2, v1, v2, ts, tt);
      },
      predictFacing: (f1, f2) => {
        return f1 + (1 + tt) * angleDifference(f1, f2);
      },
      getPrediction: () => {
        return t;
      },
    };
  };
  // Make graphs
  const timingGraph = graph(),
    lagGraph = graph(),
    gapGraph = graph();
  // The skill bar dividers
  let skas = [];
  for (let i = 1; i <= 256; i++) {
    //if you want to have more skill levels than 255, then update this
    skas.push((i - 2) * 0.01 + Math.log(4 * (i / 9) + 1) / 1.6);
  }
  const ska = (x) => skas[x];
  let scaleScreenRatio = (by, unset) => {
    global.screenWidth /= by;
    global.screenHeight /= by;
    ctx.scale(by, by);
    if (!unset) ratio *= by;
  };
  var getClassUpgradeKey = function (number) {
    switch (number) {
      case 0:
        return "y";
      case 1:
        return "u";
      case 2:
        return "i";
      case 3:
        return "h";
      case 4:
        return "j";
      case 5:
        return "k";
      default:
        return null;
    }
  };

  let tiles,
    branches,
    tankTree,
    measureSize = (x, y, colorIndex, { index, tier = 0 }) => {
      tiles.push({ x, y, colorIndex, index });
      let { upgrades } = global.mockups[parseInt(index)],
        xStart = x,
        cumulativeWidth = 1,
        maxHeight = 1,
        hasUpgrades = [],
        noUpgrades = [];
      for (let i = 0; i < upgrades.length; i++) {
        let upgrade = upgrades[i];
        if (global.mockups[upgrade.index].upgrades.length) {
          hasUpgrades.push(upgrade);
        } else {
          noUpgrades.push(upgrade);
        }
      }
      for (let i = 0; i < hasUpgrades.length; i++) {
        let upgrade = hasUpgrades[i],
          spacing = 2 * Math.max(1, upgrade.tier - tier),
          measure = measureSize(x, y + spacing, 10 + i, upgrade);
        branches.push([
          { x, y: y + Math.sign(i) },
          { x, y: y + spacing + 1 },
        ]);
        if (i === hasUpgrades.length - 1 && !noUpgrades.length) {
          branches.push([
            { x: xStart, y: y + 1 },
            { x, y: y + 1 },
          ]);
        }
        x += measure.width;
        cumulativeWidth += measure.width;
        if (maxHeight < measure.height) maxHeight = measure.height;
      }
      y++;
      for (let i = 0; i < noUpgrades.length; i++) {
        let upgrade = noUpgrades[i],
          height = 2 + upgrades.length;
        measureSize(
          x,
          y + 1 + i + Math.sign(hasUpgrades.length) * 2,
          10 + i,
          upgrade,
        );
        if (i === noUpgrades.length - 1) {
          if (hasUpgrades.length > 1) cumulativeWidth++;
          branches.push([
            { x: xStart, y },
            { x, y },
          ]);
          branches.push([
            { x, y },
            { x, y: y + noUpgrades.length + Math.sign(hasUpgrades.length) * 2 },
          ]);
        }
        if (maxHeight < height) maxHeight = height;
      }
      return {
        width: cumulativeWidth,
        height: 2 + maxHeight,
      };
    };
  function generateTankTree(indexes) {
    tiles = [];
    branches = [];
    let initialX = 0;
    let maxHeight = 0;
    if (!Array.isArray(indexes)) indexes = [indexes];
    for (let index of indexes) {
      tankTree = measureSize(initialX, 0, 10, { index });
      tankTree.width += initialX;
      maxHeight = Math.max(maxHeight, tankTree.height);
      initialX = tankTree.width + 3;
    }
    tankTree.height = maxHeight;
  }

  function drawFloor(px, py, ratio) {
    // Clear the background + draw grid
    clearScreen(color.white, 1);
    clearScreen(color.guiblack, 0.1);

    //loop through the entire room setup
    let W = global.roomSetup[0].length,
      H = global.roomSetup.length;
    for (let i = 0; i < H; i++) {
      //skip if this row is not visible
      let top = Math.max(
          0,
          (ratio * i * global.gameHeight) / H - py + global.screenHeight / 2
        ),
        bottom = Math.min(
          global.screenHeight,
          (ratio * (i + 1) * global.gameHeight) / H -
            py +
            global.screenHeight / 2
        );
      if (top > global.screenHeight || bottom < 0) continue;

      //loop through tiles in this row
      let row = global.roomSetup[i];
      for (let j = 0; j < W; j++) {
        //skip if tile not visible
        let left = Math.max(
            0,
            (ratio * j * global.gameWidth) / W - px + global.screenWidth / 2
          ),
          right = Math.min(
            global.screenWidth,
            (ratio * (j + 1) * global.gameWidth) / W -
              px +
              global.screenWidth / 2
          );
        if (left > global.screenWidth || right < 0) continue;

        //draw it
        let tile = row[j];
        ctx.globalAlpha = 1;
        ctx.fillStyle = config.graphical.screenshotMode
          ? color.guiwhite
          : color.white;
        ctx.fillRect(left, top, right - left, bottom - top);
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = config.graphical.screenshotMode
          ? color.guiwhite
          : gameDraw.getZoneColor(tile, true);
        ctx.fillRect(left, top, right - left, bottom - top);
      }
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = config.graphical.screenshotMode
      ? color.guiwhite
      : color.guiblack;
    ctx.globalAlpha = 0.04;
    ctx.beginPath();
    let gridsize = [];
    if (config.graphical.highResolution) {
      gridsize = 50 * ratio
    } else {
      gridsize = 15 * ratio
    }
    for (
      let x = (global.screenWidth / 2 - px) % gridsize;
      x < global.screenWidth;
      x += gridsize
    ) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, global.screenHeight);
    }
    for (
      let y = (global.screenHeight / 2 - py) % gridsize;
      y < global.screenHeight;
      y += gridsize
    ) {
      ctx.moveTo(0, y);
      ctx.lineTo(global.screenWidth, y);
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
  }


 function drawEntities(px, py, ratio) {
    // Draw things
    for (let instance of global.entities) {
      let motion = compensation();
      if (instance.render.status.getFade() === 1) {
        motion.set();
      } else {
        motion.set(instance.render.lastRender, instance.render.interval);
      }
      instance.render.x = util.lerp(
        instance.render.x,
        Math.round(instance.x + instance.vx),
        0.15,
        true,
      );
      instance.render.y = util.lerp(
        instance.render.y,
        Math.round(instance.y + instance.vy),
        0.15,
        true,
      );
      instance.render.f =
        instance.id === gui.playerid &&
        !global.autoSpin &&
        !global.realTime &&
        !global.freezebody &&
        !global.botplay &&
        !instance.twiggle &&
        !global.died
          ? Math.atan2(global.target.y, global.target.x)
          : util.lerpAngle(instance.render.f, instance.facing, 0.15, true);
      let x = ratio * instance.render.x - px,
        y = ratio * instance.render.y - py,
        baseColor = instance.color;

      if (instance.id === gui.playerid) {
        x = config.graphical.centerTank && !global.player.isScoping ? 0 : x;
        y = config.graphical.centerTank && !global.player.isScoping ? 0 : y;
        global.player.screenx = x;
        global.player.screeny = y;
      }
      x += global.screenWidth / 2;
      y += global.screenHeight / 2;
      drawEntity(
        baseColor,
        x,
        y,
        instance,
        ratio,
        instance.id === gui.playerid || global.showInvisible
          ? instance.alpha
            ? instance.alpha * 0.75 + 0.25
            : 0.25
          : instance.alpha,
        1.1,
        instance.render.f,
      );
    }

    //draw health bars above entities
    for (let instance of global.entities) {
      let x =
          instance.id === gui.playerid
            ? global.player.screenx
            : ratio * instance.render.x - px,
        y =
          instance.id === gui.playerid
            ? global.player.screeny
            : ratio * instance.render.y - py;
      x += global.screenWidth / 2;
      y += global.screenHeight / 2;
      drawHealth(x, y, instance, ratio, instance.alpha);
    }

    let now = Date.now(),
      ratioForChat = (1 + ratio) / 2;
    for (let instance of global.entities) {
      if (
        !(instance.id === gui.playerid) &&
        !global.showInvisible &&
        instance.alpha < 0.25
      )
        continue;
      //put chat msg above name
      let size = instance.size * ratio,
        indexes = instance.index.split("-"),
        m = global.mockups[parseInt(indexes[0])],
        realSize = (size / m.size) * m.realSize,
        x =
          instance.id === gui.playerid
            ? global.player.screenx
            : ratio * instance.render.x - px,
        y =
          instance.id === gui.playerid
            ? global.player.screeny
            : ratio * instance.render.y - py;
      x += global.screenWidth / 2;
      y += global.screenHeight / 2 - realSize - 46 * ratio;
      if (instance.id !== gui.playerid && instance.nameplate) y -= 8 * ratio;

      //draw all the msgs
      for (let i in global.chats[instance.id]) {
        let chat = global.chats[instance.id][i],
          text = chat.text,
          msgLengthHalf = measureText(text, 15 * ratioForChat) / 2,
          alpha = Math.max(0, Math.min(200, chat.expires - now) / 200);

        ctx.globalAlpha = 0.5 * alpha;
        drawBar(
          x - msgLengthHalf,
          x + msgLengthHalf,
          y,
          30 * ratioForChat,
          gameDraw.modifyColor(instance.color),
        );
        ctx.globalAlpha = alpha;
        config.graphical.fontStrokeRatio *= 1.2;
        drawText(
          text,
          x,
          y + 7 * ratioForChat,
          15 * ratioForChat,
          color.guiwhite,
          "center",
        );
        config.graphical.fontStrokeRatio /= 1.2;
        y -= 35 * ratioForChat;
      }
    }
  }

  global.showTree = false;
  global.scrollX =
    global.scrollY =
    global.fixedScrollX =
    global.fixedScrollY =
      -1;
  global.shouldScrollY = global.shouldScrollX = 0;
  let lastGuiType = null;

  function drawUpgradeTree(spacing, alcoveSize) {
    if (lastGuiType != gui.type) {
      let m = util.getEntityImageFromMockup(gui.type), // The mockup that corresponds to the player's tank
        rootName = m.rerootUpgradeTree, // The upgrade tree root of the player's tank
        rootIndex = [];
      for (let name of rootName) {
        let ind =
          name == undefined
            ? -1
            : global.mockups.find((i) => i.className == name).index;
        rootIndex.push(ind); // The index of the mockup that corresponds to the root tank (-1 for no root)
      }
      if (!rootIndex.includes(-1)) {
        generateTankTree(rootIndex);
      }
      lastGuiType = gui.type;
    }

    if (!tankTree) {
      console.log("No tank tree rendered yet.");
      return;
    }

    let tileSize = alcoveSize / 2,
      size = tileSize - 4,
      spaceBetween = 8,
      padding = 0.5 + spaceBetween / tileSize;

    if (global.died || global.diedbruh || global.diedseekbruh) {
      global.showTree = false;
      global.scrollX =
        global.scrollY =
        global.fixedScrollX =
        global.fixedScrollY =
          -1;
      global.shouldScrollY = global.shouldScrollX = 0;
    }

    global.fixedScrollX = Math.max(
      -padding,
      Math.min(
        tankTree.width + padding,
        global.fixedScrollX + global.shouldScrollX,
      ),
    );
    global.fixedScrollY = Math.max(
      -padding,
      Math.min(
        tankTree.height + padding,
        global.fixedScrollY + global.shouldScrollY,
      ),
    );
    global.scrollX = util.lerp(global.scrollX, global.fixedScrollX, 0.1);
    global.scrollY = util.lerp(global.scrollY, global.fixedScrollY, 0.1);

    for (let [start, end] of branches) {
      let sx =
          start.x * spaceBetween +
          (start.x - global.scrollX) * tileSize +
          1 +
          0.5 * size,
        sy =
          start.y * spaceBetween +
          (start.y - global.scrollY) * tileSize +
          1 +
          0.5 * size,
        ex =
          end.x * spaceBetween +
          (end.x - global.scrollX) * tileSize +
          1 +
          0.5 * size,
        ey =
          end.y * spaceBetween +
          (end.y - global.scrollY) * tileSize +
          1 +
          0.5 * size;
      if (
        ex < 0 ||
        sx > global.screenWidth ||
        ey < 0 ||
        sy > global.screenHeight
      )
        continue;
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 2;
      drawGuiLine(sx, sy, ex, ey);
    }
    ctx.globalAlpha = 0.5;



    //draw the various tank icons
    for (let { x, y, colorIndex, index } of tiles) {
      let ax = x * spaceBetween + (x - global.scrollX) * tileSize,
        ay = y * spaceBetween + (y - global.scrollY) * tileSize,
        size = tileSize;
      if (
        ax < -size ||
        ax > global.screenWidth + size ||
        ay < -size ||
        ay > global.screenHeight + size
      )
        continue;
      let angle = -Math.PI / 4,
        position = global.mockups[index].position,
        scale = (0.6 * size) / position.axis,
        xx = ax + 0.5 * size - scale * position.middle.x * Math.cos(angle),
        yy = ay + 0.5 * size - scale * position.middle.x * Math.sin(angle),
        picture = util.getEntityImageFromMockup(index.toString(), gui.color),
        baseColor = picture.color;

      ctx.globalAlpha = 0.5;
             ctx.fillStyle = gameDraw.getColor(colorIndex > 18 ? colorIndex - 19 : colorIndex);
             drawRoundedRect(ax, ay, size, size);
        ctx.globalAlpha = 0.25;
        ctx.fillStyle = gameDraw.getColor(-10 + colorIndex++);
        drawRoundedRect(ax, ay, size, size * 0.6);
      ctx.fillStyle = color.black;
      drawRoundedRect(ax, ay + size * 0.6, size, size * 0.4);
      ctx.globalAlpha = 1;

      drawEntity(
        baseColor,
        xx,
        yy,
        picture,
        1,
        1,
        scale / picture.size,
        angle,
        true,
      );

      drawText(
        picture.upgradeName ?? picture.name,
        ax + size / 2,
        ay + size - 5,
        size / 8 - 3,
        color.guiwhite,
        "center",
      );

      ctx.lineWidth = 5;
      drawRoundedRect(ax, ay, size, size, 10); // Change the last argument for radius as needed
    }

    let text =
      "Use the arrow keys to navigate the class tree. Hold Shift to navigate faster. Press T again to close it.";
    let w = measureText(text, 16);
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.fillStyle = color.black;
    ctx.strokeStyle = color.black;
    ctx.fillText(text, innerWidth / 2 - w / 2, innerHeight * 0.04);
    ctx.strokeText(text, innerWidth / 2 - w / 2, innerHeight * 0.04);
  }
  function drawRoundedRect(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.stroke();
  }
  
  let lastUpdateTime = Date.now();

  function drawMessages(spacing) {
        if (global.tryingtoreconnect) return;
    // Draw messages
    const vspacing = 4;
    const baseHeight = 20; // Fixed base height for each message
    const x = global.screenWidth / 2;
    const len = 0;
    // Calculate time delta since last update
    const currentTime = Date.now();
    const deltaTime = currentTime - lastUpdateTime;
    lastUpdateTime = currentTime;
    // Calculate total height occupied by global.messages2 to global.messages5
    const messages1Height = global.messages1.length * (vspacing + baseHeight);
    const messages2Height = global.messages2.length * (vspacing + baseHeight);
    const messages3height = global.messages3.length * (vspacing + baseHeight);
    const messagesblueheight =
      global.messagesblue.length * (vspacing + baseHeight);
    const messagesbabaHeight =
      global.messagesbaba.length * (vspacing + baseHeight);
    const messages4Height = global.messages4.length * (vspacing + baseHeight);

    let y =
      spacing +
      messages1Height +
      messages2Height +
      messages3height +
      messagesblueheight +
      messagesbabaHeight +
      messages4Height; // Start y position below global.messages

    // Draw each message
    for (let i = 0; i < global.messages.length; i++) {
      const msg = global.messages[i];
      const text = msg.text;

      // Measure the text width if it doesn't have one
      if (msg.len == null) msg.len = measureText(text, baseHeight - 4); // Measure text width

      if (msg.scale == null) msg.scale = 0; // Initialize scale if not present

      // Update alpha and status based on time
      const REFERENCE_DELTA_TIME = 10; // Set a reference delta time (in milliseconds)

      if (msg.status > 1) {
        msg.status -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.alpha = Math.min(
          1,
          msg.alpha + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        );
        msg.scale = Math.min(
          1,
          msg.scale + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        ); // Increase scale
      } else if (
        i === 0 &&
        (global.messages.length > 7 || Date.now() - msg.time > 10000)
      ) {
        msg.alpha -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.scale -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME; // Decrease scale

        // Remove message if alpha is less than or equal to 0
        if (msg.alpha <= 0) {
          global.messages.splice(0, 1);
          i--; // Adjust index since we removed an element
          continue; // Skip the rest of the loop
        }
      }
     
      if (
        i === 0 &&
        (global.messages.length > 15)
    ) {
        msg.alpha = 0;
        global.messages.splice(0, 1);
    }
      
      const scaledHeight = baseHeight * msg.scale;
      const scaledWidth = msg.len * msg.scale;

      // Draw the background
      ctx.globalAlpha = 0.5 * msg.alpha;
drawSquare(
  x - scaledWidth / 2,
  y,
  scaledWidth,
  scaledHeight,
  color.black,
);


      // Draw the text
      ctx.globalAlpha = msg.alpha;
      drawText1(
        text,
        x,
        y + scaledHeight / 2,
        scaledHeight - 4,
        "white",
        "center",
        true,
      );

      // Update the y position for the next message
      y += vspacing + scaledHeight;
    }
    ctx.globalAlpha = 1;
  }
  function drawText1(
    text,
    x,
    y,
    fontSize,
    color,
    align = "center",
    bold = false,
  ) {
    ctx.fillStyle = color;
    ctx.font = (bold ? "bold " : "") + fontSize + "px Arial";
    ctx.textAlign = align;
    ctx.textBaseline = "middle";
    ctx.fillText(text, x, y);
  }

  // Helper function to draw a square
  function drawSquare(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
  let lastUpdateTimeBlue = Date.now();

  function drawMessagesblue(spacing) {
    // Draw messages
    const vspacing = 4;
    const baseHeight = 22; // Fixed base height for each message
    const x = global.screenWidth / 2;

    // Calculate time delta since last update
    const currentTime = Date.now();
    const deltaTime = currentTime - lastUpdateTimeBlue;
    lastUpdateTimeBlue = currentTime;

    const messages1Height = global.messages1.length * (vspacing + baseHeight);
    const messages2Height = global.messages2.length * (vspacing + baseHeight);
    const messages3height = global.messages3.length * (vspacing + baseHeight);
    const messagesbabaHeight =
      global.messagesbaba.length * (vspacing + baseHeight);
    const messages4Height = global.messages4.length * (vspacing + baseHeight);
    let y =
      spacing +
      messages1Height +
      messages2Height +
      messages3height +
      messagesbabaHeight +
      messages4Height; // Start y position below global.messages1-3

    // Draw each message
    for (let i = 0; i < global.messagesblue.length; i++) {
      const msg = global.messagesblue[i];
      const text = msg.text;

      // Measure the text width if it doesn't have one
      if (msg.len == null) msg.len = measureText(text, baseHeight - 4); // Measure text width

      if (msg.scale == null) msg.scale = 0; // Initialize scale if not present

      // Update alpha and status based on time
      const REFERENCE_DELTA_TIME = 10; // Set a reference delta time (in milliseconds)

      if (msg.status > 1) {
        msg.status -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.alpha = Math.min(
          1,
          msg.alpha + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        );
        msg.scale = Math.min(
          1,
          msg.scale + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        ); // Increase scale
      } else if (
        i === 0 &&
        (global.messagesblue.length > 1 || Date.now() - msg.time > 10000)
      ) {
        msg.alpha -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.scale -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME; // Decrease scale

        // Remove message if alpha is less than or equal to 0
        if (msg.alpha <= 0) {
          global.messagesblue.splice(0, 1);
          i--; // Adjust index since we removed an element
          continue; // Skip the rest of the loop
        }
      }

      const scaledHeight = baseHeight * msg.scale;
      const scaledWidth = msg.len * msg.scale;

      // Draw the background
      ctx.globalAlpha = 0.5 * msg.alpha;
      drawSquare(x - scaledWidth / 2, y, scaledWidth, scaledHeight, "#2e3eea");

      // Draw the text
      ctx.globalAlpha = msg.alpha;
      drawText1(
        text,
        x,
        y + scaledHeight / 2,
        scaledHeight - 4,
        "white",
        "center",
        true,
      );

      // Update the y position for the next message
      y += vspacing + scaledHeight;
    }
    ctx.globalAlpha = 1;
  }
  let lastUpdateTime1 = Date.now();
  function drawMessages1(spacing) {
    if (global.tryingtoreconnect) return;
    // Draw messages
    const vspacing = 4;
    const baseHeight = 20; // Fixed base height for each message
    const x = global.screenWidth / 2;

    // Calculate time delta since last update
    const currentTime = Date.now();
    const deltaTime = currentTime - lastUpdateTime1;
    lastUpdateTime1 = currentTime;

    const messages2Height = global.messages2.length * (vspacing + baseHeight);
    const messages3Height = global.messages3.length * (vspacing + baseHeight);
    const messagesbabaHeight =
      global.messagesbaba.length * (vspacing + baseHeight);
    const messages4Height = global.messages4.length * (vspacing + baseHeight);
    let y =
      spacing +
      messages2Height +
      messages3Height +
      messagesbabaHeight +
      messages4Height; // Start y position below global.messages

    // Draw each message
    for (let i = 0; i < global.messages1.length; i++) {
      const msg = global.messages1[i];
      const text = msg.text;

      // Measure the text width if it doesn't have one
      if (msg.len == null) msg.len = measureText(text, baseHeight - 4); // Measure text width

      if (msg.scale == null) msg.scale = 0; // Initialize scale if not present

      const REFERENCE_DELTA_TIME = 10; // Set a reference delta time (in milliseconds)

      if (msg.status > 1) {
        msg.status -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.alpha = Math.min(
          1,
          msg.alpha + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        );
        msg.scale = Math.min(
          1,
          msg.scale + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        ); // Increase scale
      } else if (
        i === 0 &&
        (global.messages1.length > 5 || Date.now() - msg.time > 9e99)
      ) {
        msg.alpha -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.scale -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME; // Decrease scale

        // Remove message if alpha is less than or equal to 0
        if (msg.alpha <= 0) {
          global.messages1.splice(0, 1);
          i--; // Adjust index since we removed an element
          continue; // Skip the rest of the loop
        }
      }

      const scaledHeight = baseHeight * msg.scale;
      const scaledWidth = msg.len * msg.scale;

      // Draw the background
      ctx.globalAlpha = 0.5 * msg.alpha;
      drawSquare(x - scaledWidth / 2, y, scaledWidth, scaledHeight, "#FF0000");

      // Draw the text
      ctx.globalAlpha = msg.alpha;
      drawText1(
        text,
        x,
        y + scaledHeight / 2,
        scaledHeight - 4,
        "white",
        "center",
        true,
      );

      // Update the y position for the next message
      y += vspacing + scaledHeight;
    }
    ctx.globalAlpha = 1;
  }

  // Helper function to draw a square
  function drawSquare(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
  let lastUpdateTime2 = Date.now();
  function drawMessages2(spacing) {
        if (global.tryingtoreconnect) return;
    // Draw messages
    const vspacing = 4;
    const baseHeight = 20; // Fixed base height for each message
    const x = global.screenWidth / 2;

    // Calculate time delta since last update
    const currentTime = Date.now();
    const deltaTime = currentTime - lastUpdateTime2;
    lastUpdateTime2 = currentTime;

    let y = spacing; // Start y position below global.messages

    // Draw each message
    for (let i = 0; i < global.messages2.length; i++) {
      const msg = global.messages2[i];
      const text = msg.text;

      // Measure the text width if it doesn't have one
      if (msg.len == null) msg.len = measureText(text, baseHeight - 4); // Measure text width

      if (msg.scale == null) msg.scale = 0; // Initialize scale if not present

      const REFERENCE_DELTA_TIME = 10; // Set a reference delta time (in milliseconds)

      if (msg.status > 1) {
        msg.status -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.alpha = Math.min(
          1,
          msg.alpha + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        );
        msg.scale = Math.min(
          1,
          msg.scale + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        ); // Increase scale
      } else if (
        i === 0 &&
        (global.messages2.length > 1 || Date.now() - msg.time > 9e99)
      ) {
        msg.alpha -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.scale -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME; // Decrease scale

        // Remove message if alpha is less than or equal to 0
        if (msg.alpha <= 0) {
          global.messages2.splice(0, 1);
          i--; // Adjust index since we removed an element
          continue; // Skip the rest of the loop
        }
      }
if (global.messages2.length > 1) {
  global.messages2.splice(1);
}
      const scaledHeight = baseHeight * msg.scale;
      const scaledWidth = msg.len * msg.scale;

      // Draw the background
      ctx.globalAlpha = 0.5 * msg.alpha;
      drawSquare(x - scaledWidth / 2, y, scaledWidth, scaledHeight, "#00B0E1");

      // Draw the text
      ctx.globalAlpha = msg.alpha;
      drawText1(
        text,
        x,
        y + scaledHeight / 2,
        scaledHeight - 4,
        "white",
        "center",
        true,
      );

      // Update the y position for the next message
      y += vspacing + scaledHeight;
    }
    ctx.globalAlpha = 1;
  }
  let lastUpdateTime3 = Date.now();
  function drawMessages3(spacing) {
        if (global.tryingtoreconnect) return;
    // Draw messages
    const vspacing = 4;
    const baseHeight = 20; // Fixed base height for each message
    const x = global.screenWidth / 2;

    // Calculate time delta since last update
    const currentTime = Date.now();
    const deltaTime = currentTime - lastUpdateTime3;
    lastUpdateTime3 = currentTime;

    let y = spacing; // Start y position below global.messages

    // Draw each message
    for (let i = 0; i < global.messages3.length; i++) {
      const msg = global.messages3[i];
      const text = msg.text;

      // Measure the text width if it doesn't have one
      if (msg.len == null) msg.len = measureText(text, baseHeight - 4); // Measure text width

      if (msg.scale == null) msg.scale = 0; // Initialize scale if not present

      const REFERENCE_DELTA_TIME = 10; // Set a reference delta time (in milliseconds)

      if (msg.status > 1) {
        msg.status -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.alpha = Math.min(
          1,
          msg.alpha + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        );
        msg.scale = Math.min(
          1,
          msg.scale + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        ); // Increase scale
      } else if (
        i === 0 &&
        (global.messages3.length > 1 || Date.now() - msg.time > 9e99)
      ) {
        msg.alpha -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.scale -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME; // Decrease scale

        // Remove message if alpha is less than or equal to 0
        if (msg.alpha <= 0) {
          global.messages3.splice(0, 1);
          i--; // Adjust index since we removed an element
          continue; // Skip the rest of the loop
        }
      }
      if (global.messages3.length > 1) {
        global.messages3.splice(1);
      }
      const scaledHeight = baseHeight * msg.scale;
      const scaledWidth = msg.len * msg.scale;

      // Draw the background
      ctx.globalAlpha = 0.5 * msg.alpha;
      drawSquare(x - scaledWidth / 2, y, scaledWidth, scaledHeight, "#FF5E65");

      // Draw the text
      ctx.globalAlpha = msg.alpha;
      drawText1(
        text,
        x,
        y + scaledHeight / 2,
        scaledHeight - 4,
        "white",
        "center",
        true,
      );

      // Update the y position for the next message
      y += vspacing + scaledHeight;
    }
    ctx.globalAlpha = 1;
  }
  let lastUpdateTimebaba = Date.now();
  function drawMessages6(spacing) {
    // Draw messages
    const vspacing = 4;
    const baseHeight = 20; // Fixed base height for each message
    const x = global.screenWidth / 2;

    // Calculate time delta since last update
    const currentTime = Date.now();
    const deltaTime = currentTime - lastUpdateTimebaba;
    lastUpdateTimebaba = currentTime;

    let y = spacing; // Start y position below global.messages

    // Draw each message
    for (let i = 0; i < global.messagesbaba.length; i++) {
      const msg = global.messagesbaba[i];
      const text = msg.text;

      // Measure the text width if it doesn't have one
      if (msg.len == null) msg.len = measureText(text, baseHeight - 4); // Measure text width

      if (msg.scale == null) msg.scale = 0; // Initialize scale if not present

      const REFERENCE_DELTA_TIME = 10; // Set a reference delta time (in milliseconds)

      if (msg.status > 1) {
        msg.status -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.alpha = Math.min(
          1,
          msg.alpha + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        );
        msg.scale = Math.min(
          1,
          msg.scale + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        ); // Increase scale
      } else if (
        i === 0 &&
        (global.messagesbaba.length > 1 || Date.now() - msg.time > 9e99)
      ) {
        msg.alpha -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.scale -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME; // Decrease scale

        // Remove message if alpha is less than or equal to 0
        if (msg.alpha <= 0) {
          global.messagesbaba.splice(0, 1);
          i--; // Adjust index since we removed an element
          continue; // Skip the rest of the loop
        }
      }
      if (global.messagesbaba.length > 1) {
        global.messagesbaba.splice(1);
      }
      const scaledHeight = baseHeight * msg.scale;
      const scaledWidth = msg.len * msg.scale;

      // Draw the background
      ctx.globalAlpha = 0.5 * msg.alpha;
      drawSquare(x - scaledWidth / 2, y, scaledWidth, scaledHeight, "#5FFF64");

      // Draw the text
      ctx.globalAlpha = msg.alpha;
      drawText1(
        text,
        x,
        y + scaledHeight / 2,
        scaledHeight - 4,
        "white",
        "center",
        true,
      );

      // Update the y position for the next message
      y += vspacing + scaledHeight;
    }
    ctx.globalAlpha = 1;
  }
  let lastUpdateTime4 = Date.now();
  function drawMessages4(spacing) {
        if (global.tryingtoreconnect) return;
    // Draw messages
    const vspacing = 4;
    const baseHeight = 20; // Fixed base height for each message
    const x = global.screenWidth / 2;

    // Calculate time delta since last update
    const currentTime = Date.now();
    const deltaTime = currentTime - lastUpdateTime4;
    lastUpdateTime4 = currentTime;

    let y = spacing; // Start y position below global.messages

    // Draw each message
    for (let i = 0; i < global.messages4.length; i++) {
      const msg = global.messages4[i];
      const text = msg.text;

      // Measure the text width if it doesn't have one
      if (msg.len == null) msg.len = measureText(text, baseHeight - 4); // Measure text width

      if (msg.scale == null) msg.scale = 0; // Initialize scale if not present

      const REFERENCE_DELTA_TIME = 10; // Set a reference delta time (in milliseconds)

      if (msg.status > 1) {
        msg.status -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.alpha = Math.min(
          1,
          msg.alpha + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        );
        msg.scale = Math.min(
          1,
          msg.scale + (0.045 * deltaTime) / REFERENCE_DELTA_TIME,
        ); // Increase scale
      } else if (
        i === 0 &&
        (global.messages4.length > 1 || Date.now() - msg.time > 9e99)
      ) {
        msg.alpha -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME;
        msg.scale -= (0.045 * deltaTime) / REFERENCE_DELTA_TIME; // Decrease scale

        // Remove message if alpha is less than or equal to 0
        if (msg.alpha <= 0) {
          global.messages4.splice(0, 1);
          i--; // Adjust index since we removed an element
          continue; // Skip the rest of the loop
        }
      }
      if (global.messages4.length > 1) {
        global.messages4.splice(1);
      }
      const scaledHeight = baseHeight * msg.scale;
      const scaledWidth = msg.len * msg.scale;

      // Draw the background
      ctx.globalAlpha = 0.5 * msg.alpha;
      drawSquare(x - scaledWidth / 2, y, scaledWidth, scaledHeight, "#FFF83B");

      // Draw the text
      ctx.globalAlpha = msg.alpha;
      drawText1(
        text,
        x,
        y + scaledHeight / 2,
        scaledHeight - 4,
        "white",
        "center",
        true,
      );

      // Update the y position for the next message
      y += vspacing + scaledHeight;
    }
    ctx.globalAlpha = 1;
  }
  function drawMessages5(spacing) {
        if (global.tryingtoreconnect) return;
    // Draw messages
    let vspacing = 4;
    let len = 0;
    let height = 18;
    let x = global.screenWidth / 2;
    let y = spacing; // Start y position below global.messages2

    // Calculate time delta since last update
    let currentTime = Date.now();
    let deltaTime = currentTime - lastUpdateTime;
    lastUpdateTime = currentTime;

    // Draw each message
    for (let i = global.messages5.length - 1; i >= 0; i--) {
      let msg = global.messages5[i];
      let txt = msg.text;
      let text = txt;

      // Give it a textobj if it doesn't have one
      if (msg.len == null) msg.len = measureText(text, height - 4);

      // Draw the background
      ctx.globalAlpha = 1 * msg.alpha;

      drawBar(
        x - msg.len / 2,
        x + msg.len / 2,
        y + height / 2,
        height,
        "#5C6BC0",
      );

      ctx.globalAlpha = Math.min(1, msg.alpha);
      // Draw the text
      drawText(
        text,
        x,
        y + height / 2,
        height - 4,
        color.guiwhite,
        "center",
        true,
      );
      const REFERENCE_DELTA_TIME = 10; // Set a reference delta time (in milliseconds)
      // Update alpha based on time
      if (msg.status > 1) {
        y -= (vspacing + height) * (1 - Math.sqrt(msg.alpha));
        msg.status -= 0.05 / deltaTime; // Decrease faster
        msg.alpha += 0.05 / deltaTime; // Increase faster
      }

      // Iterate and move
      y += vspacing + height;
    }
    ctx.globalAlpha = 1;
  }

  function drawSkillBars(spacing, alcoveSize) {
    if (global.mobile) return drawMobileSkillUpgrades(spacing, alcoveSize);
    // Draw skill bars
    global.canSkill = !!gui.points;
    statMenu.set(
      0 +
        (global.died ||
          global.disconnected ||
          global.statHover ||
          (global.canSkill &&
            !gui.skills.every((skill) => skill.cap === skill.amount))),
    );
    global.clickables.stat.hide();
    let vspacing = 4;
    let height = 18;
    let gap = 40;
    let gap1 = 15;
    let len = alcoveSize; // * global.screenWidth; // The 30 is for the value modifiers
    let save = len;
    let x =
      spacing +
      (statMenu.get() - 1) *
        (height +
          50 +
          len *
            ska(
              gui.skills.reduce(
                (largest, skill) => Math.max(largest, skill.cap),
                0,
              ),
            ));
    let y = global.screenHeight - spacing - height;
    let ticker = 11;
    let namedata = gui.getStatNames(
      global.mockups[parseInt(gui.type.split("-")[0])].statnames,
    );
    let clickableRatio = canvas.height / global.screenHeight / global.ratio;
    let mouseX = global.mouse.x * clickableRatio;
    let mouseY = global.mouse.y * clickableRatio;

    for (let i = 0; i < gui.skills.length; i++) {
      ticker--;

      //information about the bar
      let skill = gui.skills[i],
        name = namedata[ticker - 1],
        level = skill.amount,
        col = color[skill.color],
        cap = skill.softcap,
        maxLevel = skill.cap;
      if (!cap) continue;
      len = save;
      let max = 0,
        extension = cap > max,
        blocking = cap < maxLevel;
      if (extension) {
        max = cap;
      }
      drawBar(
        x + height / 2,
        x + height / 2 + len * ska(cap) - gap1,
        y + height / 2,
        height - 4,
        color.black,
      );
      drawBar(
        x + height / 2,
        x - height / 2 + len * ska(cap),
        y + height / 2,
        height - 6.5,
        col,
      );
   
      drawBar(
        x + height / 2,
        x + height / 2 + len * ska(cap) - gap,
        y + height / 2,
        height - 3,
        color.black,
      );
      drawBar(
        x + height / 2,
        x + height / 2 + len * ska(level) - gap,
        y + height / 2,
        height - 7.5,
        col,
      );

      // Blocked-off area
      if (blocking) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = color.grey;
        for (let j = cap + 1; j < max; j++) {
          drawGuiLine(
            x + len * ska(j) - gap,
            y + 1.5,
            x + len * ska(j) - gap,
            y - 3 + height,
          );
        }
      }

      // Vertical dividers
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 1;
      for (let j = 1; j < level + 1; j++) {
        drawGuiLine(
          x + len * ska(j) - gap,
          y + 1.5,
          x + len * ska(j) - gap,
          y - 3 + height,
        );
      }

      // Skill name
      len = save * ska(max);
      let textcolor =
        level == maxLevel
          ? col
          : !gui.points || (cap !== maxLevel && level == cap)
            ? color.grey
            : color.guiwhite;
      drawText(
        name,
        Math.round(x + len / 2) + 0.5,
        y + height / 2,
        height - 8,
        textcolor,
        "center",
        true,
      );

      // Skill key
      drawText(
        "+",
        Math.round(x + len - height * 0.3) - 3.5,
        y + height / 2 + 0.5,
        height - 5,
        color.black,
        "right",
        true,
      );
      drawText(
        "[" + (ticker % 10) + "]",
        Math.round(x + len - height * 2) - 1.5,
        y + height / 2,
        height - 8,
        textcolor,
        "right",
        true,
      );
      if (textcolor === color.guiwhite) {
        // If it's active
        global.clickables.stat.place(
          ticker - 1,
          x * clickableRatio,
          y * clickableRatio,
          len * clickableRatio,
          height * clickableRatio,
        );
      }

      // Skill value
      if (level) {
        drawText(
          textcolor === col ? "MAX" : "+" + level,
          Math.round(x + len + 4) + 0.5,
          y + height / 2,
          height - 5,
          col,
          "left",
          true,
        );
      }

      // Move on
      y -= height + vspacing;
    }
    global.clickables.hover.place(
      0,
      0,
      y * clickableRatio,
      0.8 * len * clickableRatio,
      (global.screenHeight - y) * clickableRatio,
    );

    if (gui.points !== 0) {
      // Draw skillpoints to spend
      drawText(
        "x" + gui.points,
        Math.round(x + len - 2) + 0.5,
        Math.round(y + height - 4) + 0.5,
        20,
        color.guiwhite,
        "right",
      );
    }
  }
  function drawMobileSkillUpgrades(spacing, alcoveSize) {
    spacing += 800; // Adjust vertical position by adding 50 pixels
    global.canSkill =
      gui.points > 0 && gui.skills.some((s) => s.amount < s.cap);
    statMenu.set(global.canSkill || global.died || global.disconnected ? 1 : 0);
    let n = statMenu.get();
    global.clickables.stat.hide();
    let t = alcoveSize / 2,
      q = alcoveSize / 3,
      x = 2 * n * spacing - spacing,
      statNames = gui.getStatNames(
        global.mockups[parseInt(gui.type.split("-")[0])].statnames,
      ),
      clickableRatio = canvas.height / global.screenHeight / global.ratio;
    if (global.canSkill) {
      for (let i = 0; i < gui.skills.length; i++) {
        let skill = gui.skills[i],
          softcap = skill.softcap;
        if (softcap <= 0) continue;
        let amount = skill.amount,
          skillColor = color[skill.color],
          cap = skill.cap,
          name = statNames[9 - i].split(/\s+/),
          halfNameLength = Math.floor(name.length / 2),
          [name1, name2] =
            name.length === 1
              ? [name[0], null]
              : [
                  name.slice(0, halfNameLength).join(" "),
                  name.slice(halfNameLength).join(" "),
                ];

        ctx.globalAlpha = 0.5;
        ctx.fillStyle = skillColor;
        drawGuiRect(x, spacing, t, (2 * q) / 3);

        ctx.globalAlpha = 0.1;
        ctx.fillStyle = color.black;
        drawGuiRect(x, spacing + (((q * 2) / 3) * 2) / 3, t, (q * 2) / 3 / 3);

        ctx.globalAlpha = 1;
        ctx.fillStyle = color.guiwhite;
        drawGuiRect(x, spacing + (q * 2) / 3, t, q / 3);

        ctx.fillStyle = skillColor;
        drawGuiRect(x, spacing + (q * 2) / 3, (t * amount) / softcap, q / 3);

        ctx.strokeStyle = color.black;
        ctx.lineWidth = 1;
        for (let j = 1; j < cap; j++) {
          let width = x + (j / softcap) * t;
          drawGuiLine(width, spacing + (q * 2) / 3, width, spacing + q);
        }

        cap === 0 ||
          !gui.points ||
          (softcap !== cap && amount === softcap) ||
          global.clickables.stat.place(
            9 - i,
            x * clickableRatio,
            spacing * clickableRatio,
            t * clickableRatio,
            q * clickableRatio,
          );

        if (name2) {
          drawText(
            name2,
            x + t / 2,
            spacing + q * 0.55,
            q / 5,
            color.guiwhite,
            "center",
          );
          drawText(
            name1,
            x + t / 2,
            spacing + q * 0.3,
            q / 5,
            color.guiwhite,
            "center",
          );
        } else {
          drawText(
            name1,
            x + t / 2,
            spacing + q * 0.425,
            q / 5,
            color.guiwhite,
            "center",
          );
        }

        if (amount > 0) {
          drawText(
            amount < softcap ? `+${amount}` : "MAX",
            x + t / 2,
            spacing + q * 1.3,
            q / 4,
            skillColor,
            "center",
          );
        }

        ctx.strokeStyle = color.black;
        ctx.globalAlpha = 1;
        ctx.lineWidth = 3;
        drawGuiLine(x, spacing + (q * 2) / 3, x + t, spacing + (q * 2) / 3);
        drawGuiRect(x, spacing, t, q, true);

        x += n * (t + 14);
      }

      if (gui.points > 1) {
        drawText(
          `x ${gui.points}`,
          x,
          spacing + 20,
          20,
          color.guiwhite,
          "left",
        );
      }
    }
  }

  function drawSelfInfo(spacing, alcoveSize, max) {
    //rendering information
    let vspacing = 4;
    let len = 1.65 * alcoveSize; // * global.screenWidth;
    let height = 20;
    let x = (global.screenWidth - len) / 2;
    let y = global.screenHeight - spacing - height;
    ctx.lineWidth = 1;

    // Draw the exp bar
    drawBar(
      x,
      x + len,
      y + height / 2,
      height - 3 + config.graphical.barChunk,
      color.black,
    );
    drawBar(x, x + len, y + height / 2, height - 3, "#3c3c3c");
    drawBar(
      x,
      x + len * gui.__s.getProgress(),
      y + height / 2,
      height - 3.5,
      color.gold,
    );

    // Draw the class type
    drawText(
      "Level " + gui.__s.getLevel() + " " + gui.class,
      x + len / 2,
      y + height / 2,
      height - 4,
      color.guiwhite,
      "center",
      true,
    );
    height = 14;
    y -= height + vspacing;

    // Draw the %-of-leader bar
    drawBar(
      x + len * 0.1,
      x + len * 0.9,
      y + height / 2,
      height - 3 + config.graphical.barChunk,
      color.black,
    );
    drawBar(
      x + len * 0.1,
      x + len * 0.9,
      y + height / 2,
      height - 3,
      "#3c3c3c",
    );

    drawBar(
      x + len * 0.1,
      x + len * (0.1 + 0.8 * (max ? Math.min(1, gui.__s.getScore() / max) : 1)),
      y + height / 2,
      height - 3.5,
      color.green,
    );

    //write the score and name
    drawText(
      "Score: " + util.handleLargeNumber(gui.__s.getScore()),
      x + len / 2,
      y + height / 2,
      height - 2,
      color.guiwhite,
      "center",
      true,
    );
    ctx.lineWidth = 4;
    drawText(
      global.player.name,
      Math.round(x + len / 2) + 0.5,
      Math.round(y - 10 - vspacing) + 0.5,
      32,
      global.nameColor,
      "center",
    );
  }

  function drawArrow(x, y, size, direction = "up") {
    ctx.beginPath();
    switch (direction) {
      case "up":
        ctx.moveTo(x, y - size); // Top point
        ctx.lineTo(x - size, y + size); // Bottom left point
        ctx.lineTo(x + size, y + size); // Bottom right point
        break;
      case "down":
        ctx.moveTo(x, y + size); // Bottom point
        ctx.lineTo(x - size, y - size); // Top left point
        ctx.lineTo(x + size, y - size); // Top right point
        break;
      case "left":
        ctx.moveTo(x - size, y); // Left point
        ctx.lineTo(x + size, y - size); // Top right point
        ctx.lineTo(x + size, y + size); // Bottom right point
        break;
      case "right":
        ctx.moveTo(x + size, y); // Right point
        ctx.lineTo(x - size, y - size); // Top left point
        ctx.lineTo(x - size, y + size); // Bottom left point
        break;
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  function drawMinimapAndDebug(spacing, alcoveSize) {
    // Draw minimap and FPS monitors
    //minimap stuff stards here
    let minimapScaleFactor = 0.85; // Adjust this value to control the minimap size
    let len = alcoveSize * minimapScaleFactor;
    let height = (len / global.gameWidth) * global.gameHeight;
    if (global.mobile) {
      height = (len / global.gameWidth / 1.9) * global.gameHeight;
      len = alcoveSize * 0.6;
    }
    if (
      global.gameHeight > global.gameWidth ||
      global.gameHeight < global.gameWidth
    ) {
      let ratio = [
        global.gameWidth / global.gameHeight,
        global.gameHeight / global.gameWidth,
      ];
      len /= ratio[1] * 1.5;
      height /= ratio[1] * 1.5;
      if (len > alcoveSize * 2) {
        ratio = len / (alcoveSize * 2);
      } else if (height > alcoveSize * 2) {
        ratio = height / (alcoveSize * 2);
      } else {
        ratio = 1;
      }
      len /= ratio;
      height /= ratio;
    }
    let x = global.screenWidth - spacing - len;
    let y = global.screenHeight - height - spacing;
    ctx.globalAlpha = 0.4;
    let W = global.roomSetup[0].length,
      H = global.roomSetup.length,
      i = 0;
    for (let ycell = 0; ycell < H; ycell++) {
      let row = global.roomSetup[ycell];
      let j = 0;
      for (let xcell = 0; xcell < W; xcell++) {
        let cell = global.roomSetup[ycell][xcell];
        ctx.fillStyle = gameDraw.getZoneColor(cell);
        if (gameDraw.getZoneColor(cell) !== color.white) {
          drawGuiRect(
            x + (j * len) / W,
            y + (i * height) / H,
            len / W,
            height / H,
          );
        }
        j++;
      }
      i++;
    }
    ctx.fillStyle = color.white;
    drawGuiRect(x, y, len, height);
    ctx.globalAlpha = 1;
    ctx.lineWidth = 5;
    ctx.fillStyle = "#D5D5D5";
    drawGuiRect(x, y, len, height, true); // Border
    for (let entity of minimap.get()) {
      ctx.fillStyle = gameDraw.mixColors(
        gameDraw.modifyColor(entity.color),
        color.black,
        0.3,
      );
      ctx.globalAlpha = entity.alpha;
      switch (entity.type) {
        case 2:
          drawGuiRect(
            x + ((entity.x - entity.size) / global.gameWidth) * len - 0.4,
            y + ((entity.y - entity.size) / global.gameHeight) * height - 1,
            ((2 * entity.size) / global.gameWidth) * len + 0.2,
            ((2 * entity.size) / global.gameWidth) * len + 0.2,
          );
          break;
        case 1:
          drawGuiCircle(
            x + (entity.x / global.gameWidth) * len,
            y + (entity.y / global.gameHeight) * height,
            (entity.size / global.gameWidth) * len + 0.2,
          );
          break;
        case 0:
          if (entity.id !== gui.playerid)
            drawGuiCircle(
              x + (entity.x / global.gameWidth) * len,
              y + (entity.y / global.gameHeight) * height,
              2,
            );
          break;
      }
    }
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.strokeStyle = color.black;
    ctx.fillStyle = color.black;
    drawGuiCircle(
      x + (global.player.cx / global.gameWidth) * len - 1,
      y + (global.player.cy / global.gameHeight) * height - 1,
      2,
      false,
    );
    if (global.showDebug) {
      drawGuiRect(x, y - 40, len, 30);
      lagGraph(lag.get(), x, y - 40, len, 30, color.teal);
      gapGraph(global.metrics.rendergap, x, y - 40, len, 30, color.pink);
      timingGraph(GRAPHDATA, x, y - 40, len, 30, color.yellow);
    }
    //minimap stuff ends here
    //debug stuff
    if (!global.showDebug) y += 14 * 3;
    // Text
    function interpolateColor(color1, color2, factor) {
      const result = color1.map((value, index) => {
        const blendedValue = Math.round(
          value + factor * (color2[index] - value),
        );
        return Math.min(255, Math.max(0, blendedValue)); // Ensure the value is between 0 and 255
      });

      return `rgb(${result.join(",")})`;
    }

    const green = [0, 255, 0]; // RGB values for green
    const grey = [169, 169, 169]; // RGB values for grey
    const lightgreen = [185, 232, 126];

    const currentTime = Date.now();
    const cycleDuration = 1200; // Adjust this value to control the speed of the color transition
    const factor = (currentTime % cycleDuration) / cycleDuration;

    let rainbowColor;

    if (factor < 0.5) {
      // Transition from green to grey
      rainbowColor = interpolateColor(green, lightgreen, factor * 2);
    } else {
      // Transition from grey to black
      rainbowColor = interpolateColor(lightgreen, grey, (factor - 0.5) * 2);
    }

    if (global.showDebug) {
      drawText(
        "Arras2.io",
        x + len,
        y - 50 - 6 * 14 - 2,
        15,
        rainbowColor,
        "right",
      );


// Calculate total players
let totalPlayers = Object.values(playerCounts).reduce((a, b) => a + b, 0);

// Draw player counts

drawText(
  `${totalPlayers} players`,
  x + len,
  y - 50 - 5 * 14,
  10,
  color.guiwhite,
  "right",
);





      drawText(
        "Prediction: " + Math.round(GRAPHDATA) + "ms",
        x + len,
        y - 50 - 4 * 14,
        10,
        color.guiwhite,
        "right",
      );
      drawText(
        `Bandwidth: ${gui.bandwidth.in} in, ${gui.bandwidth.out} out`,
        x + len,
        y - 50 - 3 * 14,
        10,
        color.guiwhite,
        "right",
      );
      drawText(
        "Update Rate: " + global.metrics.updatetime + "Hz",
        x + len,
        y - 50 - 2 * 14,
        10,
        color.guiwhite,
        "right",
      );
      drawText(
        (100 * gui.fps).toFixed(2) +
        "% : " +
          global.metrics.rendertime +
          " FPS",
        x + len,
        y - 50 - 1 * 14,
        10,
        global.metrics.rendertime > 10 ? color.guiwhite : color.orange,
        "right",
      );

      drawText(
        global.metrics.latency + " ms - " + global.serverName,
        x + len,
        y - 50,
        10,
        color.guiwhite,
        "right",
      );
    } else {
      drawText(
        "Arras2.io",
        x + len,
        y - 50 - 3 * 14 - 2,
        15,
        rainbowColor,
        "right",
      );
      // Calculate total players
let totalPlayers = Object.values(playerCounts).reduce((a, b) => a + b, 0);



drawText(
  `${totalPlayers} players`,
  x + len,
  y - 50 - 2 * 14,
  10,
  color.guiwhite,
  "right",
);

      drawText(
        (100 * gui.fps).toFixed(2) +
        "% : " +
          global.metrics.rendertime +
          " FPS",
        x + len,
        y - 50 - 1 * 14,
        10,
        global.metrics.rendertime > 10 ? color.guiwhite : color.orange,
        "right",
      );
      drawText(
        global.metrics.latency + " ms : " + global.metrics.updatetime + "Hz",
        x + len,
        y - 50,
        10,
        color.guiwhite,
        "right",
      );
    }
    global.fps = global.metrics.rendertime;
  }

  function drawLeaderboard(spacing, alcoveSize, max) {
    // Draw leaderboard
    let lb = leaderboard.get();
    let vspacing = 6;
    let len = alcoveSize; // * global.screenWidth;
    let height = 14;
    let textHeight = 12; // Adjust this value to change the text size
    let x = global.screenWidth - len - spacing;
    let y = spacing + height + 15;
    drawText(
      "Scoreboard",
      Math.round(x + len / 2) + 0.5,
      Math.round(y - 10) + 0.5,
      textHeight + 8,
      color.guiwhite,
      "center",
    );
    for (let i = 0; i < lb.data.length; i++) {
      let entry = lb.data[i];
      drawBar(
        x,
        x + len,
        y + height / 2,
        height - 1 + config.graphical.barChunk,
        color.black,
      );
      drawBar(x, x + len, y + height / 2, height - 1, "#3c3c3c");
      let shift = Math.min(1, entry.score / max);
      drawBar(
        x,
        x + len * shift,
        y + height / 2,
        height - 1.5,
        gameDraw.modifyColor(entry.barColor),
      );
      // Leadboard name + score
      let nameColor = entry.nameColor || "#FFFFFF";
      drawText(
        entry.label + (": " + util.handleLargeNumber(Math.round(entry.score))),
        x + len / 2,
        y + height / 2,
        textHeight - 3,
        nameColor,
        "center",
        true,
        1,
      );
      
      // Mini-image
      let scale = height / (entry.position.axis / 1), // Adjust multiplier as needed
        xx = x - 1.5 * height - scale * entry.position.middle.x * 0.707,
        // Other calculations
        yy = y + 0.5 * height + scale * entry.position.middle.x * 0.707,
        baseColor = entry.image.color;
      drawEntity(
        baseColor,
        xx,
        yy,
        entry.image,
        1 / scale,
        1,
        (scale * scale) / entry.image.size,
        -Math.PI / 4,
        true,
      );
      // Move down
      y += vspacing + height;
    }
  }

  function drawAvailableUpgrades(spacing, alcoveSize) {
    global.upgradeMenuVisible = gui.upgrades.length > 0;
    // Draw upgrade menu
    upgradeMenu.set(0 + (global.canUpgrade || global.upgradeHover));

    let glide = upgradeMenu.get();
    global.clickables.upgrade.hide();
    if (gui.upgrades.length > 0) {
      global.canUpgrade = true;
      let internalSpacing = 20;
      let internalSpacing1 = 8;
      let len = alcoveSize / 2;
      let height = len;
      let x = glide * 2 * spacing - spacing;
      let initialY = spacing - -15 + internalSpacing;
      let initialY1 = spacing - -12 + internalSpacing1;
      let xStart = x;
      let initialX = x;
      let rowWidth = 0;
      let ticker = 0;
      let upgradeNum = 0;
      let colorIndex = 10;
      let upgradeHoverIndex = global.clickables.upgrade.check({
        x: global.mouse.x,
        y: global.mouse.y,
      });
      let columnCount = Math.max(3, Math.ceil(gui.upgrades.length / 4));
      let clickableRatio =
        global.canvas.height / global.screenHeight / global.ratio;
      let lastBranch = -1;
      let y; // Initialize y here
      upgradeSpin += 0.01;

      // Draw "Upgrades:" label
      let upgradesText = "Upgrades";
      let upgradesTextWidth = measureText(upgradesText, internalSpacing * 2.3);
      drawText(
        upgradesText,
        xStart + (rowWidth - upgradesTextWidth) / 90,
        initialY1 - internalSpacing1,
        internalSpacing1 * 2.75,
        color.guiwhite,
        "left",
        false,
      );


      let mouseX = (global.target.x + global.canvas.width / 2) / clickableRatio;
      let mouseY =
        (global.target.y + global.canvas.height / 2) / clickableRatio;
      for (let i = 0; i < gui.upgrades.length; i++) {
        let upgrade = gui.upgrades[i];
        let upgradeBranch = upgrade[0];
        let upgradeBranchLabel = upgrade[1] == "undefined" ? "" : upgrade[1];
        let model = upgrade[2];

        // Draw either in the next row or next column
        if (ticker === columnCount || upgradeBranch != lastBranch) {
          x = xStart;
          y += height + internalSpacing;
          if (upgradeBranch != lastBranch) {
            if (upgradeBranchLabel.length > 0) {
              drawText(
                " " + upgradeBranchLabel,
                xStart,
                y + internalSpacing * 2,
                internalSpacing * 2.3,
                color.guiwhite,
                "left",
                false,
              );
              y += 3 * internalSpacing;
            }

          }
          lastBranch = upgradeBranch;
          ticker = 0;
        } else {
          x += glide * (len + internalSpacing);
        }

        if (!y) y = initialY; // Set y to initialY if it's not yet initialized
        rowWidth = x;


    // Calculate upgrade box positions (use scaled values)
    let boxLeft = x;
    let boxTop = y;
    let boxRight = x + len;
    let boxBottom = y + height;

    // Scale these positions for hover detection
    let scaledBoxLeft = boxLeft * clickableRatio;
    let scaledBoxTop = boxTop * clickableRatio;
    let scaledBoxRight = boxRight * clickableRatio;
    let scaledBoxBottom = boxBottom * clickableRatio;

    // Set the upgrade box area as clickable using scaled positions
    global.clickables.upgrade.place(
        i, 
        scaledBoxLeft, 
        scaledBoxTop, 
        len * clickableRatio, 
        height * clickableRatio
    );
        let picture = util.getEntityImageFromMockup(model, gui.color),
          position = picture.position,
          scale = (0.6 * len) / position.axis,
          entityX =
            x + 0.5 * len - scale * position.middle.x * Math.cos(upgradeSpin),
          entityY =
            y +
            0.5 * height -
            scale * position.middle.x * Math.sin(upgradeSpin),
          baseColor = picture.color;

    // Check if mouse is hovering over the current upgrade box
    // Compare scaled mouse coordinates to scaled box coordinates
    if (mouseX > scaledBoxLeft && mouseX < scaledBoxRight && mouseY > scaledBoxTop && mouseY < scaledBoxBottom && !global.disconnected) {
      ctx.globalAlpha = 0.1; // Set transparency when hovering
  } else {
      ctx.globalAlpha = 0.5; // Default transparency
  }

        ctx.fillStyle = gameDraw.getColor(colorIndex > 18 ? colorIndex - 19 : colorIndex);
        drawGuiRect(boxLeft, boxTop, len, height); // Use unscaled positions for drawing
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = gameDraw.getColor(-10 + colorIndex++);
        drawGuiRect(boxLeft, boxTop, len, height * 0.6); // Use unscaled positions for drawing
        ctx.fillStyle = color.black;
        drawGuiRect(boxLeft, boxTop + height * 0.6, len, height * 0.4); // Use unscaled positions for drawing
        ctx.globalAlpha = 1;

        // Draw Tank
        drawEntity(
          baseColor,
          entityX,
          entityY,
          picture,
          1,
          1,
          scale / picture.size,
          upgradeSpin,
          true,
        );
        let upgradeKey = getClassUpgradeKey(upgradeNum);

        // Tank name
        drawText(
          picture.upgradeName ?? picture.name,
          x + ((upgradeKey ? 0.9 : 1) * len) / 2,
          y + height - 6,
          height / 8 - 3,
          color.guiwhite,
          "center",
        );

        // Upgrade key
        if (upgradeKey) {
          drawText(
            "[" + upgradeKey + "]",
            x + len - 4,
            y + height - 6,
            height / 8 - 3,
            color.guiwhite,
            "right",
          );
        }
        ctx.strokeStyle = color.black;
        ctx.globalAlpha = 1;
        ctx.lineWidth = 5;
        drawGuiRect(x, y, len, height, true); // Border
        ticker++;
        upgradeNum++;
      }

      let h = 14,
        msg = "Ignore",
        m = measureText(msg, h - 3) + 40;
      let buttonX =
          initialX + (rowWidth + len + internalSpacing - initialX) / 2,
        buttonY = y + height + internalSpacing; // Adjust buttonY based on the final y position after drawing upgrade boxes

      // Draw the background of the button
      if (global.skipClicked && !global.disconnected) {
        ctx.fillStyle = "#9B9B9B"; // Change background color when clicked
      } else if (global.skipbox && !global.disconnected) {
        ctx.fillStyle = "#C7C3C3"; // Background color
      } else {
        ctx.fillStyle = "#AFAEAE"; // Background color
      }

      // Draw the top half of the button
      ctx.fillRect(buttonX - m / 2, buttonY - 5, m, (h + 10) / 2);

      // Draw the bottom half of the button in a slightly darker color
      ctx.fillStyle = "#8F8E8E"; // Darker color for the bottom half
      ctx.fillRect(
        buttonX - m / 2,
        buttonY - 5 + (h + 10) / 2,
        m,
        (h + 10) / 2,
      );

      // Draw the border of the button
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 4;
      ctx.strokeRect(buttonX - m / 2, buttonY - 5, m, h + 10);

      // Draw the text on the button
      drawText(
        msg,
        buttonX,
        buttonY + h / 2,
        h - 2,
        color.guiwhite,
        "center",
        true,
      );

      // Set the clickable area for the button
      global.clickables.skipUpgrades.place(
        0,
        (buttonX - m / 2) * clickableRatio,
        (buttonY - 5) * clickableRatio,
        m * clickableRatio,
        (h + 10) * clickableRatio,
      );
    } else {
      global.canUpgrade = false;
      global.clickables.upgrade.hide();
      global.clickables.skipUpgrades.hide();
    }
  }
  function drawMobileforbutton() {
    if (global.upgradeMenuVisible) return;

  
    let clickableRatio = canvas.height / global.screenHeight / global.ratio;
    let h = 30,

    // Update msg based on global.closesettings
  msg = global.closesettings ? "Close" : "Exit",
   
      m = measureText(msg, h - 3) + 20;
    let buttonX = global.screenWidth / 22,
      buttonY = global.screenHeight / 26;

      if (global.SettingsClicked && !global.disconnected) {
      ctx.fillStyle = "#9B9B9B"; // Change background color when clicked
    } else if (global.Settingsbox && !global.disconnected) {
      ctx.fillStyle = "#C7C3C3"; // Background color
    } else {
      ctx.fillStyle = "#AFAEAE"; // Background color
    }
    // Draw the top half of the button
    ctx.fillRect(buttonX - m / 2, buttonY - 5, m, (h + 10) / 2);

    // Draw the bottom half of the button in a slightly darker color
    ctx.fillStyle = "#8F8E8E"; // Darker color for the bottom half
    ctx.fillRect(
      buttonX - m / 2,
      buttonY - 5 + (h + 10) / 2,
      m,
      (h + 10) / 2,
    );

    // Draw the border of the button
    ctx.strokeStyle = color.black;
    ctx.lineWidth = 4;
    ctx.strokeRect(buttonX - m / 2, buttonY - 5, m, h + 10);

    // Draw the text on the button
    drawText(
      msg,
      buttonX,
      buttonY + h / 2 + 3,
      16,
      color.guiwhite,
      "center",
      true,
    );

    // Set the clickable area for the button
    global.clickables.settingsbutton.place(
      0,
      (buttonX - m / 2) * clickableRatio,
      (buttonY - 5) * clickableRatio,
      m * clickableRatio,
      (h + 10) * clickableRatio,
    );

    // If settings have been clicked, draw additional options
    if (global.hasclickedsettings && global.closesettings || global.discardexit) {

      hasclickedsettings.set();
      let greyBoxX = global.screenWidth / 14,
        greyBoxY = global.screenHeight / 5,
        greyBoxWidth = 120, // Width of the grey box
        greyBoxHeight = 100, // Height of the grey box
        greyBoxPadding = -30, // Padding around the text
        textHeight = 30; // Height of each text line
      
      // Draw grey background box
      ctx.fillStyle = "#9B9B9B";
      ctx.fillRect(greyBoxX - greyBoxWidth / 2, greyBoxY - greyBoxHeight / 2, greyBoxWidth, greyBoxHeight);
  
      // Draw border around the grey box
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 4;
      ctx.strokeRect(greyBoxX - greyBoxWidth / 2, greyBoxY - greyBoxHeight / 2, greyBoxWidth, greyBoxHeight);
  
       // Option 6: Exit
       let textX = greyBoxX;
      let textY = greyBoxY - greyBoxHeight / 1.8 + greyBoxPadding + textHeight * 3;
       drawText("Exit", textX, textY, 23, color.guiwhite, "center", true);
       global.clickables.exit.place(
           0,
           (greyBoxX - greyBoxWidth / 2) * clickableRatio,
           (textY - textHeight / 2) * clickableRatio,
           greyBoxWidth * clickableRatio,
           textHeight * clickableRatio
       );
    }
    if (global.choosenexit && !global.discardexit) {
      let greyBoxX = global.screenWidth / 14,
        greyBoxY = global.screenHeight / 5,
        greyBoxWidth = 250, // Width of the grey box
        greyBoxHeight = 100, // Height of the grey box
        greyBoxPadding = 10, // Padding around the text
        textHeight = 30; // Height of each text line
      
      // Draw grey background box
      ctx.fillStyle = "#9B9B9B";
      ctx.fillRect(greyBoxX - greyBoxWidth / 2, greyBoxY - greyBoxHeight / 2, greyBoxWidth, greyBoxHeight);
  
      // Draw border around the grey box
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 4;
      ctx.strokeRect(greyBoxX - greyBoxWidth / 2, greyBoxY - greyBoxHeight / 2, greyBoxWidth, greyBoxHeight);
  
      // Draw each option text inside the grey box
      ctx.fillStyle = color.guiwhite;
      // Option 1: D-Day
      let textX = greyBoxX;
      let textY = greyBoxY - greyBoxHeight / 2 + greyBoxPadding + textHeight * 0;
      drawText("Are you sure you want to exit?", textX, textY, 15, color.guiwhite, "center", true);
      
      // Draw "Yes" button
      let buttonWidth = 80;
      let buttonHeight = 40;
      let buttonPadding = 20;
      let yesButtonX = greyBoxX - buttonWidth / 2 - buttonPadding;
      let yesButtonY = greyBoxY;
      let halfButtonHeight = buttonHeight / 2;
      if (global.yesClicked && !global.disconnected) {
        ctx.fillStyle = "#0079EE"; // Change background color when clicked
      } else if (global.yesbox && !global.disconnected) {
        ctx.fillStyle = "#3D9FFF"; // Background color
      } else {
        ctx.fillStyle = "#1E90FF"; // Background color
      }
      // Draw "Yes" button with top and bottom color variation

      ctx.fillRect(yesButtonX - buttonWidth / 2, yesButtonY - buttonHeight / 2, buttonWidth, halfButtonHeight);
  
      ctx.fillStyle = "#0174d7"; // Darker color for the bottom half
      ctx.fillRect(yesButtonX - buttonWidth / 2, yesButtonY - buttonHeight / 2 + halfButtonHeight, buttonWidth, halfButtonHeight);
  
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 4;
      ctx.strokeRect(yesButtonX - buttonWidth / 2, yesButtonY - buttonHeight / 2, buttonWidth, buttonHeight);
      drawText("Yes", yesButtonX, yesButtonY, 16, color.guiwhite, "center", true);
  
      // Set clickable area for "Yes" button
      global.clickables.yes.place(
        0,
        (yesButtonX - buttonWidth / 2) * clickableRatio,
        (yesButtonY - buttonHeight / 2) * clickableRatio,
        buttonWidth * clickableRatio,
        buttonHeight * clickableRatio
      );
  
      // Draw "No" button
      let noButtonX = greyBoxX + buttonWidth / 3 + buttonPadding;
      if (global.noClicked && !global.disconnected) {
        ctx.fillStyle = "#ff1313"; // Change background color when clicked
      } else if (global.nobox && !global.disconnected) {
        ctx.fillStyle = "#ff6969"; // Background color
      } else {
        ctx.fillStyle = "#ff4747"; // Red color for No button
      }
      ctx.fillRect(noButtonX - buttonWidth / 2, yesButtonY - buttonHeight / 2, buttonWidth, halfButtonHeight);
  
      ctx.fillStyle = "#d80000"; // Darker color for the bottom half
      ctx.fillRect(noButtonX - buttonWidth / 2, yesButtonY - buttonHeight / 2 + halfButtonHeight, buttonWidth, halfButtonHeight);
  
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 4;
      ctx.strokeRect(noButtonX - buttonWidth / 2, yesButtonY - buttonHeight / 2, buttonWidth, buttonHeight);
      drawText("No", noButtonX, yesButtonY, 16, color.guiwhite, "center", true);
  
      // Set clickable area for "No" button
      global.clickables.no.place(
        0,
        (noButtonX - buttonWidth / 2) * clickableRatio,
        (yesButtonY - buttonHeight / 2) * clickableRatio,
        buttonWidth * clickableRatio,
        buttonHeight * clickableRatio
      );
  }
  
}
  
  function drawMobileButtons(spacing, alcoveSize) {
    if (!global.mobile) return;

    if (global.clickables.mobileButtons.active == null)
      global.clickables.mobileButtons.active = false;
    if (global.clickables.mobileButtons.altFire == null)
      global.clickables.mobileButtons.altFire = false;

    // Hide the buttons
    global.clickables.mobileButtons.hide();

    // Some sizing variables
    let clickableRatio =
      global.canvas.height / global.screenHeight / global.ratio;
    let upgradeColumns = Math.ceil(gui.upgrades.length / 9);
    let yOffset = global.canUpgrade
      ? ((alcoveSize / 2) /*+ spacing * 2*/ *
          upgradeMenu.get() *
          upgradeColumns) /
          1.5 +
        spacing * (upgradeColumns + 1.6) +
        7
      : 0 + global.canSkill
        ? alcoveSize / 3 + spacing
        : 0;
    let baseSize = (alcoveSize - spacing * 2) / 3;

    function makeButton(index, x, y, width, height, text) {
      // Set the clickable's position
      global.clickables.mobileButtons.place(
        index,
        x * clickableRatio,
        y * clickableRatio,
        width * clickableRatio,
        height * clickableRatio,
      );

      // Draw boxes
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = color.grey;
      drawGuiRect(x, y, width, height);
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = color.black;
      drawGuiRect(x, y + height * 0.6, width, height * 0.4);
      ctx.globalAlpha = 1;

      // Draw text
      drawText(
        text,
        x + width / 2,
        y + height * 0.5,
        height * 0.6,
        color.guiwhite,
        "center",
        true,
      );

      // Draw the borders
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 3;
      drawGuiRect(x, y, width, height, true);
    }

    function makeButtons(buttons, startX, startY, baseSize) {
      let x,
        y,
        index = 0;

      let resetX = () => (x = startX);
      let resetY = () => (y = startY);

      resetX();
      resetY();

      for (let row = 0; row < buttons.length; row++) {
        for (let col = 0; col < buttons[row].length; col++) {
          //console.log(buttons[row][col][0], buttons[row][col][3] ?? index);
          makeButton(
            buttons[row][col][3] ?? index,
            x,
            y,
            baseSize * (buttons[row][col][1] ?? 1),
            baseSize * (buttons[row][col][2] ?? 1),
            buttons[row][col][0],
          );
          x += baseSize * (buttons[row][col][1] ?? 1) + spacing;
          index++;
        }

        resetX();
        y +=
          Math.max(...buttons[row].map((b) => baseSize * (b[2] ?? 1))) +
          spacing;
      }
    }

    let buttons = global.clickables.mobileButtons.active
      ? [
          [
            [global.clickables.mobileButtons.active ? "-" : "+"],
            [
              `Alt ${global.clickables.mobileButtons.altFire ? "Manual" : "Disabled"}`,
              6,
            ],
            ["Fullscreen", 5],
          ],
          [
            ["Autofire", 3.5],
            ["Reverse", 3.5],
            ["Self-Destruct", 5],
          ],
          [
            ["Autospin", 3.5],
            ["Override", 3.5],
            ["Level Up", 5],
          ],
          [
            ["Action", 3.5],
            ["Special", 3.5],
            ["Chat", 5],
          ],
        ]
      : [[[global.clickables.mobileButtons.active ? "-" : "+"]]];

    if (global.clickables.mobileButtons.altFire)
      buttons.push([["\u2756", 2, 2, 12]]);

    makeButtons(buttons, spacing * 2, yOffset + spacing, baseSize);
  }
  let initialCameraX = global.player.cx; // Start far away on X-axis
  let initialCameraY = global.player.cy; // Start far away on Y-axis
  let cameraMoveDuration = 2000; // 2 seconds
  let cameraStartTime = null; // Initialize start time
  
  // Easing function for smoother camera movement
  const easeInOutCubic = (t) =>  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  
  const gameDrawAlive = (ratio, drawRatio) => {
    let GRAPHDATA = 0;
    renderTimes++;
// Check if camera movement should be disabled
if (global.ab) {
        // Implement slow camera movement logic here (for example, you could make it orbit around the player)
        const slowCameraSpeed = 1000; // Adjust this value for speed
        const angle = (getNow() / 1000) * slowCameraSpeed; // Calculate angle for circular motion

        // Calculate new camera position based on the angle
        global.player.renderx = global.player.cx + Math.cos(angle) * 500; // 100 is the radius
        global.player.rendery = global.player.cy + Math.sin(angle) * 500;
}
    // Check if introduction is showing
    if (global.aa && !global.aaaa) {
    
        // Implement slow camera movement logic here (for example, you could make it orbit around the player)
        const slowCameraSpeed = 0.1; // Adjust this value for speed
        const angle = (getNow() / 1000) * slowCameraSpeed; // Calculate angle for circular motion

        // Calculate new camera position based on the angle
        global.player.renderx = global.player.cx + Math.cos(angle) * 500; // 100 is the radius
        global.player.rendery = global.player.cy + Math.sin(angle) * 500;
        
        // Optionally, you can limit the camera's movement to within certain bounds.
    } else if (global.disconnected) {
     
        // Implement slow camera movement logic here (for example, you could make it orbit around the player)
        const slowCameraSpeed = 0.1; // Adjust this value for speed
        const angle = (getNow() / 1000) * slowCameraSpeed; // Calculate angle for circular motion

        // Calculate new camera position based on the angle
        global.player.renderx = global.player.cx + Math.cos(angle) * 500; // 100 is the radius
        global.player.rendery = global.player.cy + Math.sin(angle) * 500;
  }
else if (global.aaaa) {
      global.aaaa = true;
        // Proceed with the existing camera follow logic
        let currentTime = getNow();
        if (!cameraStartTime) {
            cameraStartTime = currentTime; // Set the start time when the function first runs
        }

        // Calculate how much time has passed since the animation started
        let elapsedTime = currentTime - cameraStartTime;

        // Move the camera over 2 seconds
        if (elapsedTime < cameraMoveDuration) {
            // Calculate the percentage of the animation that has completed
            let t = elapsedTime / cameraMoveDuration;

            // Apply easing to the progress
            let smoothT = easeInOutCubic(t);

            // Smoothly interpolate (lerp) the camera's position from the initial far away point to the player's position
            let cameraX = util.lerp(initialCameraX, global.player.cx, smoothT);
            let cameraY = util.lerp(initialCameraY, global.player.cy, smoothT);

            // Set the player's rendered position to match the camera
            global.player.renderx = cameraX;
            global.player.rendery = cameraY;
        } else {
            // After 2 seconds, fix the camera on the player's position
            global.player.renderx = util.lerp(global.player.renderx, global.player.cx, 0.1, true);
            global.player.rendery = util.lerp(global.player.rendery, global.player.cy, 0.1, true);
        }
    }
  
      let px = ratio * global.player.renderx;
      let py = ratio * global.player.rendery;
  
      // Draw the in-game stuff
      drawFloor(px, py, ratio);
    
      drawEntities(px, py, ratio);

      ratio = util.getScreenRatio();
      scaleScreenRatio(ratio, true);
    //draw hud
    let alcoveSize = 200 / ratio; // drawRatio * global.screenWidth;
    let spacing = 20;
    gui.__s.update();
    let lb = leaderboard.get();
    let max = lb.max;
    if (global.isspectating) {
      // Do nothing or skip drawing
    } else if (global.showTree) {
      drawUpgradeTree(spacing, alcoveSize);
    } else if (global.mobile) {
      if (global.mobile) {
        // draw joysticks if needed.
        let radius = Math.min(
          global.screenWidth * 0.6,
          global.screenHeight * 0.12,
        );
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(
          (global.screenWidth * 1) / 6,
          (global.screenHeight * 2) / 3,
          radius,
          0,
          2 * Math.PI,
        );
        ctx.arc(
          (global.screenWidth * 5) / 6,
          (global.screenHeight * 2) / 3,
          radius,
          0,
          2 * Math.PI,
        );
        ctx.fill();
      }
      drawMessages(spacing);
      drawMessages1(spacing);
      drawMessages2(spacing);
      drawMessages3(spacing);
      drawMessagesblue(spacing);
      drawMessages4(spacing);
      drawMessages5(spacing);
      drawMessages6(spacing);
      drawSkillBars(spacing, alcoveSize);
    
      drawSelfInfo(spacing, alcoveSize, max);
      drawMinimapAndDebug(spacing, alcoveSize);
      drawLeaderboard(spacing, alcoveSize, max, lb);
      drawAvailableUpgrades(spacing, alcoveSize);
    } else if (global.died) {
      drawMessages(spacing);
      drawMessages1(spacing);
      drawMessages2(spacing);
      drawMessagesblue(spacing);
 
      drawMessages3(spacing);
      drawMessages4(spacing);
      drawMessages5(spacing);
      drawMessages6(spacing);
      drawSkillBars(spacing, alcoveSize);

      drawMinimapAndDebug(spacing, alcoveSize);
      drawLeaderboard(spacing, alcoveSize, max, lb);
    } else if (global.diedbruh) {
      drawMessages(spacing);
      drawMessages1(spacing);
      drawMessages2(spacing);
      drawMessagesblue(spacing);
      drawMessages3(spacing);
   
      drawMessages4(spacing);
      drawMessages5(spacing);
      drawMessages6(spacing);
      drawSkillBars(spacing, alcoveSize);

      drawMinimapAndDebug(spacing, alcoveSize);
      drawLeaderboard(spacing, alcoveSize, max, lb);
    } else if (global.diedseekbruh) {
      drawMessages(spacing);
      drawMessages1(spacing);
      drawMessages2(spacing);

      drawMessagesblue(spacing);
      drawMessages3(spacing);
      drawMessages4(spacing);
      drawMessages5(spacing);
      drawMessages6(spacing);
      drawSkillBars(spacing, alcoveSize);

      drawMinimapAndDebug(spacing, alcoveSize);
      drawLeaderboard(spacing, alcoveSize, max, lb);
    } else if (!global.aa) {
      drawMessages(spacing);
      drawMessages1(spacing);
      drawMessages2(spacing);
      drawMessages3(spacing);
      drawMessagesblue(spacing);
      drawMessages4(spacing);
      drawMessages5(spacing);
      drawMessages6(spacing);
  
      drawSkillBars(spacing, alcoveSize);
      drawSelfInfo(spacing, alcoveSize, max);
      drawMinimapAndDebug(spacing, alcoveSize);
      drawLeaderboard(spacing, alcoveSize, max, lb);
      drawAvailableUpgrades(spacing, alcoveSize);
    }

    global.metrics.lastrender = getNow();
  };
  let getKills = () => {
    let finalKills = {
        " kills": [Math.round(global.finalKills[0].get()), 1],
        " assists": [Math.round(global.finalKills[1].get()), 0.5],
        " visitors defeated": [Math.round(global.finalKills[2].get()), 3],
        " polygons destroyed": [Math.round(global.finalKills[3].get()), 0.05],
      },
      killCountTexts = [];
    let destruction = 0;
    for (let key in finalKills) {
      if (finalKills[key][0]) {
        destruction += finalKills[key][0] * finalKills[key][1];
        killCountTexts.push(finalKills[key][0] + key);
      }
    }
    return (
      (destruction < 4
        ? "🎯"
        : destruction < 8
          ? "💥"
          : destruction < 15
            ? "💢"
            : destruction < 25
              ? "🔥"
              : destruction < 50
                ? "💣"
                : destruction < 75
                  ? "👺"
                  : destruction < 100
                    ? "🌶️"
                    : "💯") +
      " " +
      (!killCountTexts.length
        ? "You haven't killed any entity"
        : killCountTexts.length == 1
          ? killCountTexts.join(" and ")
          : killCountTexts.slice(0, -1).join(", ") +
            " and " +
            killCountTexts[killCountTexts.length - 1])
    );
  };
  let getDeath = () => {
    let txt = "";
    if (global.finalKillers.length) {
      txt = "";
      for (let e of global.finalKillers) {
        txt +=
          "" + util.addArticle(util.getEntityImageFromMockup(e).name) + " and ";
      }
      txt = txt.slice(0, -4);
    } else {
      txt += "An unknown entity";
    }
    return txt;
  };

  const gameDrawDead = (killerName, killerPosition = { x: 0, y: 0 }) => {
    if (global.diedseekbruh && global.gameStart) {
      clearScreen(color.black, 0.5);
      let ratio = util.getScreenRatio();

      let scaleScreenRatio = (by, unset) => {
        global.screenWidth /= by;
        global.screenHeight /= by;
        ctx.scale(by, by);
        if (!unset) ratio *= by;
      };
      scaleScreenRatio(ratio, true);

      let shift = animations.deathScreen.get();

      ctx.translate(0, -shift * global.screenHeight);

      // Draw tank icon and score
      let x = global.screenWidth / 2,
        y = global.screenHeight / 2;

      let len = 140,
        position = global.mockups[parseInt(gui.type.split("-")[0])].position,
        scale = len / position.axis,
        xx = global.screenWidth / 2 + 70 + scale * position.middle.x * 0.707,
        yy = global.screenHeight / 2 - 70 + scale * position.middle.x * 0.707,
        picture = util.getEntityImageFromMockup(gui.type, gui.color),
        baseColor = picture.color;

      // Calculate the length of the tank name text
      let tankName = " " + picture.name;
      let tankNameLength = ctx.measureText(tankName).width;

      // Adjust the scale of the tank icon based on the length of the tank name text
      let tankScale = 1 + tankNameLength / 500; // Adjust divisor as needed
      drawEntity(
        baseColor,
        xx,
        yy,
        picture,
        1.5 * tankScale,
        1 * tankScale,
        (0.5 * scale) / picture.realSize,
        -Math.PI / 4,
        true,
      );

      // Draw other messages
      drawText(
        "You were killed by: ",
        x,
        y - 170,
        18,
        color.guiwhite,
        "center",
      );
      drawText(getDeath(), x, y - 140, 24, color.guiwhite, "center");
      drawText(tankName, x + 82, y + 20, 20, color.guiwhite, "center");
      drawText(
        "Level: " + gui.__s.getLevel(),
        x - 177,
        y - 40,
        20,
        color.guiwhite,
        "center",
      );
      drawText(
        "Score: " + util.formatLargeNumber(Math.round(global.finalScore.get())),
        x - 150,
        y - 70,
        20,
        color.guiwhite,
        "center",
      );
      drawText(
        "Time alive: " +
          util.timeForHumans(Math.round(global.finalLifetime.get())),
        x - 150,
        y - 10,
        20,
        color.guiwhite,
        "center",
      );

      drawText(
        "Game already started! Cannot join",
        x,
        y + 70,
        24,
        color.red,
        "center",
      );

      ctx.translate(0, shift * global.screenHeight);
    } else if (global.diedbruh && global.gameStart) {
      clearScreen(color.black, 0.5);
      let ratio = util.getScreenRatio();

      let scaleScreenRatio = (by, unset) => {
        global.screenWidth /= by;
        global.screenHeight /= by;
        ctx.scale(by, by);
        if (!unset) ratio *= by;
      };
      scaleScreenRatio(ratio, true);

      let shift = animations.deathScreen.get();

      ctx.translate(0, -shift * global.screenHeight);

      // Draw tank icon and score
      let x = global.screenWidth / 2,
        y = global.screenHeight / 2;

      let len = 140,
        position = global.mockups[parseInt(gui.type.split("-")[0])].position,
        scale = len / position.axis,
        xx = global.screenWidth / 2 + 70 + scale * position.middle.x * 0.707,
        yy = global.screenHeight / 2 - 70 + scale * position.middle.x * 0.707,
        picture = util.getEntityImageFromMockup(gui.type, gui.color),
        baseColor = picture.color;

      // Calculate the length of the tank name text
      let tankName = " " + picture.name;
      let tankNameLength = ctx.measureText(tankName).width;

      // Adjust the scale of the tank icon based on the length of the tank name text
      let tankScale = 1 + tankNameLength / 500; // Adjust divisor as needed
      drawEntity(
        baseColor,
        xx,
        yy,
        picture,
        1.5 * tankScale,
        1 * tankScale,
        (0.5 * scale) / picture.realSize,
        -Math.PI / 4,
        true,
      );

      // Draw other messages
      drawText(
        "You were killed by: ",
        x,
        y - 170,
        18,
        color.guiwhite,
        "center",
      );
      drawText(getDeath(), x, y - 140, 24, color.guiwhite, "center");
      drawText(tankName, x + 82, y + 20, 20, color.guiwhite, "center");
      drawText(
        "Level: " + gui.__s.getLevel(),
        x - 177,
        y - 40,
        20,
        color.guiwhite,
        "center",
      );
      drawText(
        "Score: " + util.formatLargeNumber(Math.round(global.finalScore.get())),
        x - 150,
        y - 70,
        20,
        color.guiwhite,
        "center",
      );
      drawText(
        "Time alive: " +
          util.timeForHumans(Math.round(global.finalLifetime.get())),
        x - 150,
        y - 10,
        20,
        color.guiwhite,
        "center",
      );

      drawText("Arena closed! Cannot join", x, y + 70, 24, color.red, "center");

      ctx.translate(0, shift * global.screenHeight);
    } else if (global.isspectating) {
      let clickableRatio = canvas.height / global.screenHeight / global.ratio;
      let h = 30,
        msg = "X Stop spectating",
        m = measureText(msg, h - 3) + 20;
      let buttonX = global.screenWidth / 12,
        buttonY = global.screenHeight / 16;

      if (global.cancelspectateClicked && !global.disconnected) {
        ctx.fillStyle = "#D10202"; // Change background color when clicked
      } else if (global.cancelspectatebox && !global.disconnected) {
        ctx.fillStyle = "#FD8989"; // Background color
      } else {
        ctx.fillStyle = "#FF5F5F"; // Background color
      }

      // Draw the top half of the button
      ctx.fillRect(buttonX - m / 2, buttonY - 5, m, (h + 10) / 2);

      // Draw the bottom half of the button in a slightly darker color
      ctx.fillStyle = "#CC4C4C"; // Darker color for the bottom half
      ctx.fillRect(
        buttonX - m / 2,
        buttonY - 5 + (h + 10) / 2,
        m,
        (h + 10) / 2,
      );

      // Draw the border of the button
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 4;
      ctx.strokeRect(buttonX - m / 2, buttonY - 5, m, h + 10);

      // Draw the text on the button
      drawText(
        msg,
        buttonX,
        buttonY + h / 2 + 3,
        16,
        color.guiwhite,
        "center",
        true,
      );

      // Set the clickable area for the button
      global.clickables.cancelspectate.place(
        0,
        (buttonX - m / 2) * clickableRatio,
        (buttonY - 5) * clickableRatio,
        m * clickableRatio,
        (h + 10) * clickableRatio,
      );
    } else if (global.gameStart || global.showdeathscreen) {
      clearScreen(color.black, 0.5);
      let ratio = util.getScreenRatio();

      let scaleScreenRatio = (by, unset) => {
        global.screenWidth /= by;
        global.screenHeight /= by;
        ctx.scale(by, by);
        if (!unset) ratio *= by;
      };
      scaleScreenRatio(ratio, true);

      let shift = animations.deathScreen.get();

      ctx.translate(0, -shift * global.screenHeight);

      // Draw tank icon and score
      let x = global.screenWidth / 2,
        y = global.screenHeight / 2;

      let len = 140,
        position = global.mockups[parseInt(gui.type.split("-")[0])].position,
        scale = len / position.axis,
        xx = global.screenWidth / 2 + 70 + scale * position.middle.x * 0.707,
        yy = global.screenHeight / 2 - 70 + scale * position.middle.x * 0.707,
        picture = util.getEntityImageFromMockup(gui.type, gui.color),
        baseColor = picture.color;

      // Calculate the length of the tank name text
      let tankName = " " + picture.name;
      let tankNameLength = ctx.measureText(tankName).width;

      // Adjust the scale of the tank icon based on the length of the tank name text
      let tankScale = 1 + tankNameLength / 500; // Adjust divisor as needed
      drawEntity(
        baseColor,
        xx,
        yy,
        picture,
        1.5 * tankScale,
        1 * tankScale,
        (0.5 * scale) / picture.realSize,
        -Math.PI / 4,
        true,
      );

      // Draw other messages
      drawText(
        "You were killed by: ",
        x,
        y - 170,
        18,
        color.guiwhite,
        "center",
      );
      drawText(getDeath(), x, y - 140, 24, color.guiwhite, "center");
      drawText(tankName, x + 82, y + 20, 20, color.guiwhite, "center");
      drawText(
        "Level: " + gui.__s.getLevel(),
        x - 177,
        y - 40,
        20,
        color.guiwhite,
        "center",
      );
      drawText(
        "Score: " + util.formatLargeNumber(Math.round(global.finalScore.get())),
        x - 150,
        y - 70,
        20,
        color.guiwhite,
        "center",
      );
      drawText(
        "Time alive: " +
          util.timeForHumans(Math.round(global.finalLifetime.get())),
        x - 150,
        y - 10,
        20,
        color.guiwhite,
        "center",
      );
      let clickableRatio = canvas.height / global.screenHeight / global.ratio;
      let h = 30,
        msg = "Spectate",
        m = measureText(msg, h - 3) + 20;
      let buttonX = global.screenWidth / 2.25,
        buttonY = global.screenHeight / 1.75;

      if (global.spectateClicked && !global.disconnected) {
        ctx.fillStyle = "#00D1C2"; // Change background color when clicked
      } else if (global.spectatebox && !global.disconnected) {
        ctx.fillStyle = "#88fcf4"; // Background color
      } else {
        ctx.fillStyle = "#5CFFF4"; // Background color
      }

      // Draw the top half of the button
      ctx.fillRect(buttonX - m / 2, buttonY - 5, m, (h + 10) / 2);

      // Draw the bottom half of the button in a slightly darker color
      ctx.fillStyle = "#4BCCC4"; // Darker color for the bottom half
      ctx.fillRect(
        buttonX - m / 2,
        buttonY - 5 + (h + 10) / 2,
        m,
        (h + 10) / 2,
      );

      // Draw the border of the button
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 4;
      ctx.strokeRect(buttonX - m / 2, buttonY - 5, m, h + 10);

      // Draw the text on the button
      drawText(
        msg,
        buttonX,
        buttonY + h / 2 + 3,
        16,
        color.guiwhite,
        "center",
        true,
      );

      // Set the clickable area for the button
      global.clickables.spectate.place(
        0,
        (buttonX - m / 2) * clickableRatio,
        (buttonY - 5) * clickableRatio,
        m * clickableRatio,
        (h + 10) * clickableRatio,
      );

      // Remove the old "press enter to respawn" text drawing line
      // drawText("(press enter to respawn)", x, y + 100, 24, color.guiwhite, "center");

      // Define the new button for "Enter"
      let enterButtonWidth = 125;
      let enterButtonHeight = 39;
      let enterButtonX = global.screenWidth / 1.85 - enterButtonWidth / 2;
      let enterButtonY = global.screenHeight / 1.765;

      if (global.enterClicked && !global.disconnected) {
        ctx.fillStyle = "#00DC08"; // Change background color when clicked
      } else if (global.enterbox && !global.disconnected) {
        ctx.fillStyle = "#89FD8D"; // Background color
      } else {
        ctx.fillStyle = "#65FF5F"; // Background color
      }

      // Draw the top half of the button
      ctx.fillRect(
        enterButtonX,
        enterButtonY,
        enterButtonWidth,
        enterButtonHeight / 2,
      );

      // Draw the bottom half of the button in a slightly darker color
      ctx.fillStyle = "#52CC4C"; // Darker color for the bottom half
      ctx.fillRect(
        enterButtonX,
        enterButtonY + enterButtonHeight / 2,
        enterButtonWidth,
        enterButtonHeight / 2,
      );

      // Draw the border of the button
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 4;
      ctx.strokeRect(
        enterButtonX,
        enterButtonY,
        enterButtonWidth,
        enterButtonHeight,
      );

      // Draw the text on the button
      let enterButtonText = "Enter";
      drawText(
        enterButtonText,
        enterButtonX + enterButtonWidth / 2,
        enterButtonY + enterButtonHeight / 2 + 3,
        16,
        color.guiwhite,
        "center",
        true,
      );

      // Set the clickable area for the button
      global.clickables.enterButton.place(
        0,
        enterButtonX * clickableRatio,
        enterButtonY * clickableRatio,
        enterButtonWidth * clickableRatio,
        enterButtonHeight * clickableRatio,
      );

      ctx.translate(0, shift * global.screenHeight);
    }
  };

  const gameDrawErrorScreen = (e) => {
    global.errordetected = true;

    let ratio = util.getScreenRatio();
    let scaleScreenRatio = (by, unset) => {
      global.screenWidth /= by;
      global.screenHeight /= by;
      ctx.scale(by, by);
      if (!unset) ratio *= by;
    };
    scaleScreenRatio(ratio, true);

    ctx.fillStyle = "#5AFF47"; // Dark background color
    ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);

    let shift = animations.disconnected1.get();
    ctx.translate(0, -shift * global.screenHeight);

    drawTextconnect(
      "A weird error has been detected.",
      global.screenWidth / 2,
      global.screenHeight / 2 - 100,
      70,
      color.guiwhite,
      "center",
      1,
    ); // Lower stroke width value, here set to 1
    drawTextconnect(
      "You may need to reload the page if the screen doesn't disappear",
      global.screenWidth / 2,
      global.screenHeight / 2 - 10,
      22,
      color.guiwhite,
      "center",
    ); // Lower stroke width value, here set to 1
    drawTextconnect(
      "Here is the following error code:",
      global.screenWidth / 2,
      global.screenHeight / 2 + 20,
      22,
      color.guiwhite,
      "center",
    ); // Lower stroke width value, here set to 1
    drawTextconnect(
      "" + e,
      global.screenWidth / 2,
      global.screenHeight / 2 + 50,
      22,
      "#FF0000",
      "center",
    );
    drawTextconnect(
      "Please send this error code to the developer in order to fix it.",
      global.screenWidth / 2,
      global.screenHeight / 2 + 80,
      22,
      color.guiwhite,
      "center",
    ); // Lower stroke width value, here set to 1

    if (global.allthesanctuarieskilled)
      drawText(
        global.sancdiedripforyouanyways || "",
        global.screenWidth / 2,
        global.screenHeight / 2 + 30,
        15,
        color.orange,
        "center",
      );

    ctx.translate(0, shift * global.screenHeight);
  };

  // Rest of your code...
// Define global variables for the introduction text
// Define global variables for the introduction text
global.introTextAlpha = 0;
global.introTextState = 'fadeIn'; // Possible states: 'fadeIn', 'display', 'fadeOut'
global.introTextStartTime = null;
global.introShown = false; // New variable to track if introduction has been shown

// Update the introduction function to handle the fade-in, display, and fade-out transitions
const introduction = () => {
  if (global.gameStart && global.showintroduction && !global.introShown) {
    setTimeout(() => {
      global.showintroduction = false;
    }, 10000); // 10000 milliseconds = 10 seconds

    // Initialize the start time if it's the first time
    if (!global.introTextStartTime) {
      global.introTextStartTime = Date.now();
    }

    // Calculate the elapsed time
    const elapsedTime = Date.now() - global.introTextStartTime;

    if (global.introTextState === 'fadeIn') {
      // Fade-in effect (first 2.5 seconds)
      if (elapsedTime < 2500) {
        global.introTextAlpha = elapsedTime / 2500; // Linear fade-in
      } else {
        global.introTextAlpha = 1;
        global.introTextState = 'display'; // Switch to display state
        global.introTextStartTime = Date.now(); // Reset the start time for the display phase
      }
    } else if (global.introTextState === 'display') {
      // Display text (for 5 seconds)
      if (elapsedTime < 5000) {
        global.introTextAlpha = 1; // Fully opaque
      } else {
        global.introTextState = 'fadeOut'; // Switch to fade-out state
        global.introTextStartTime = Date.now(); // Reset the start time for the fade-out phase
      }
    } else if (global.introTextState === 'fadeOut') {
      // Fade-out effect (last 2.5 seconds)
      if (elapsedTime < 2500) {
        global.introTextAlpha = 1 - (elapsedTime / 2500); // Linear fade-out
      } else {
        global.introTextAlpha = 0;
        global.showintroduction = false; // End introduction
        global.introShown = true; // Mark introduction as shown
        global.introTextState = 'fadeIn'; // Reset state for future use
        global.introTextStartTime = null; // Reset the start time
      }
    }

    // Draw the text with the current alpha value
    ctx.save();
    ctx.globalAlpha = global.introTextAlpha;
    if (window.serverAdd === "super-duper-goggles-g475v6p65wwv2vgwp-30004.app.github.dev" || window.serverAdd === "dreadful-superstition-wrg7qgg4x57rcvjj4-30004.app.github.dev" || window.serverAdd === "frightening-shadow-4j7v66grj9qr2qjwq-30004.app.github.dev") {
      drawTextconnect("D-Day", global.screenWidth / 2, 40, 30, color.guiwhite, "center");
      drawTextconnect("For blue team, destroy red dominators. For red team, protect your dominators and destroy blue dominators.", global.screenWidth / 2, 70, 20, color.guiwhite, "center");
    } else if (window.serverAdd === "super-duper-goggles-g475v6p65wwv2vgwp-30002.app.github.dev" || window.serverAdd === "dreadful-superstition-wrg7qgg4x57rcvjj4-30002.app.github.dev" || window.serverAdd === "frightening-shadow-4j7v66grj9qr2qjwq-30002.app.github.dev") {
      drawTextconnect("Boss Rush", global.screenWidth / 2, 40, 30, color.guiwhite, "center");
      drawTextconnect("Destroy all the bosses till wave 150 to win", global.screenWidth / 2, 70, 20, color.guiwhite, "center");
    } 
    else if (window.serverAdd === "super-duper-goggles-g475v6p65wwv2vgwp-30000.app.github.dev" || window.serverAdd === "dreadful-superstition-wrg7qgg4x57rcvjj4-30000.app.github.dev" || window.serverAdd === "frightening-shadow-4j7v66grj9qr2qjwq-30000.app.github.dev") {
      drawTextconnect("Domination", global.screenWidth / 2, 40, 30, color.guiwhite, "center");
      drawTextconnect("Destroy all dominators to win!", global.screenWidth / 2, 70, 20, color.guiwhite, "center");
    } 
     else if (window.serverAdd === "super-duper-goggles-g475v6p65wwv2vgwp-30003.app.github.dev" || window.serverAdd === "dreadful-superstition-wrg7qgg4x57rcvjj4-30003.app.github.dev" || window.serverAdd === "frightening-shadow-4j7v66grj9qr2qjwq-30003.app.github.dev") {
      drawTextconnect("Mothership", global.screenWidth / 2, 40, 30, color.guiwhite, "center");
      drawTextconnect("Kill your opponent's mothership to win!", global.screenWidth / 2, 70, 20, color.guiwhite, "center");
    } 
         else if (window.serverAdd === "super-duper-goggles-g475v6p65wwv2vgwp-30008.app.github.dev" || window.serverAdd === "dreadful-superstition-wrg7qgg4x57rcvjj4-30008.app.github.dev" || window.serverAdd === "frightening-shadow-4j7v66grj9qr2qjwq-30008.app.github.dev") {
      drawTextconnect("Kill Race", global.screenWidth / 2, 40, 30, color.guiwhite, "center");
      drawTextconnect("Escape from the dangerous killer to without being killed!", global.screenWidth / 2, 70, 20, color.guiwhite, "center");
    }    else if (window.serverAdd === "super-duper-goggles-g475v6p65wwv2vgwp-30009.app.github.dev" || window.serverAdd === "dreadful-superstition-wrg7qgg4x57rcvjj4-30009.app.github.dev" || window.serverAdd === "frightening-shadow-4j7v66grj9qr2qjwq-30009.app.github.dev") {
      drawTextconnect("Core", global.screenWidth / 2, 40, 30, color.guiwhite, "center");
      drawTextconnect("Stay in the center of the map to win!", global.screenWidth / 2, 70, 20, color.guiwhite, "center");

    }    else if (window.serverAdd === "automatic-space-rotary-phone-57444pjr7vq3vx57-3007.app.github.dev") {
      drawTextconnect("Closed Beta", global.screenWidth / 2, 40, 30, color.guiwhite, "center");
      drawTextconnect("A private server with developer powers.", global.screenWidth / 2, 70, 20, color.guiwhite, "center");

    }   else if (window.serverAdd === "super-duper-goggles-g475v6p65wwv2vgwp-30005.app.github.dev" || window.serverAdd === "dreadful-superstition-wrg7qgg4x57rcvjj4-30005.app.github.dev" || window.serverAdd === "frightening-shadow-4j7v66grj9qr2qjwq-30005.app.github.dev") {
      drawTextconnect("FFA", global.screenWidth / 2, 40, 30, color.guiwhite, "center");
      drawTextconnect("Fight each other and gain highest score!", global.screenWidth / 2, 70, 20, color.guiwhite, "center");

    } 
    else if (window.serverAdd === "super-duper-goggles-g475v6p65wwv2vgwp-30001.app.github.dev" || window.serverAdd === "dreadful-superstition-wrg7qgg4x57rcvjj4-30001.app.github.dev" || window.serverAdd === "frightening-shadow-4j7v66grj9qr2qjwq-30001.app.github.dev") {
      drawTextconnect("2TDM", global.screenWidth / 2, 40, 30, color.guiwhite, "center");
      drawTextconnect("Fight with your teammates against your opponent's team!", global.screenWidth / 2, 70, 20, color.guiwhite, "center");

    }  else if (window.serverAdd === "super-duper-goggles-g475v6p65wwv2vgwp-30007.app.github.dev" || window.serverAdd === "dreadful-superstition-wrg7qgg4x57rcvjj4-30007.app.github.dev" || window.serverAdd === "frightening-shadow-4j7v66grj9qr2qjwq-30007.app.github.dev") {
      drawTextconnect("4TDM", global.screenWidth / 2, 40, 30, color.guiwhite, "center");
      drawTextconnect("Attack with your teammates 3 other teams!", global.screenWidth / 2, 70, 20, color.guiwhite, "center");

    } else if (window.serverAdd === "super-duper-goggles-g475v6p65wwv2vgwp-30006.app.github.dev" || window.serverAdd === "dreadful-superstition-wrg7qgg4x57rcvjj4-30006.app.github.dev" || window.serverAdd === "frightening-shadow-4j7v66grj9qr2qjwq-30006.app.github.dev") {
      drawTextconnect("Maze", global.screenWidth / 2, 40, 30, color.guiwhite, "center");
      drawTextconnect("Attack everyone in a labyrinth.", global.screenWidth / 2, 70, 20, color.guiwhite, "center");

    } 
    ctx.restore();
  }
};


  const rewardsmasher = () => {
    if (global.smasherreward) {
      // Set a timeout to hide the text after 5 seconds
      setTimeout(() => {
        global.smasherreward = false;
      }, 5000); // 5000 milliseconds = 5 seconds

      // Draw the text
      let text = "Achievement complete:";
      drawText(text, 20, global.screenHeight / 2, 24, color.guiwhite, "left");

      // Text below "Achievements"
      let text1 = "What is this new world of diep.io???";
      drawText(
        text1,
        20,
        global.screenHeight / 2 + 30,
        16,
        color.guiwhite,
        "left",
      );

      // Text below the previous text
      let text2 = "Join the game for the first time.";
      drawText(
        text2,
        20,
        global.screenHeight / 2 + 60,
        16,
        color.guiwhite,
        "left",
      );
    }
  };

  let circleRadius = 0;
  const maxCircleRadius = Math.sqrt(
    global.screenWidth ** 2 + global.screenHeight ** 2,
  ); // Max radius to cover the whole screen

  const gameDrawBeforeStart = () => {
    global.connecting = true;
    let expanding = true; // Initialize expanding variable
    let ratio = util.getScreenRatio();

    let scaleScreenRatio = (by, unset) => {
      global.screenWidth /= by;
      global.screenHeight /= by;
      ctx.scale(by, by);
      if (!unset) ratio *= by;
    };

    scaleScreenRatio(ratio, true);

    // Background setup
    ctx.fillStyle = "#000"; // Dark background color
    ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);

    let shift = animations.connecting.get();
    ctx.translate(0, -shift * global.screenHeight);

    // Circle apparition animation
    const centerX = global.screenWidth / 2;
    const centerY = global.screenHeight / 2;
    if (global.gameStart1) {
      // Reverse the animation if the game has started

      circleRadius = Math.max(0, circleRadius - 15); // Prevent negative radius
      expanding = false; // Circle is contracting
    } else {
      if (circleRadius < maxCircleRadius) {
        circleRadius += 15; // Adjust speed of radius increase
      }
    }
    // Draw the expanding circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI);
    ctx.clip();

    // Draw the content inside the circle
    drawContent();

    ctx.restore();

    ctx.translate(0, shift * global.screenHeight);
  };

  // Function to draw the connecting screen content
  const drawContent = () => {
    // Create a light green gradient with cyan-like hints
    let gradient = ctx.createLinearGradient(
      0,
      0,
      global.screenWidth,
      global.screenHeight,
    );

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);

    // Adjusted speed for ellipsis animation
    const getEllipsis = () => {
      const dots = [".", "..", "..."];
      const interval = 250; // Faster animation (250 milliseconds)
      const index = Math.floor(Date.now() / interval) % dots.length;
      return dots[index];
    };

    let ellipsis = getEllipsis();
    drawTextconnect(
      global.daconnectingmsg + ellipsis, // Correct concatenation
      global.screenWidth / 2,
      global.screenHeight / 2,
      50,
      "#FFFFFF",
      "center",
      "Arial",
      "black",
    );
    drawTextconnect(
      global.mesage,
      global.screenWidth / 2,
      global.screenHeight / 2 + 30,
      15,
      "#FFFFFF",
      "center",
      "Arial",
      "black",
    );
        drawTextconnect(
      global.message,
      global.screenWidth / 2,
      global.screenHeight / 2 + 60,
      15,
      "#FFFFFF",
      "center",
      "Arial",
      "black",
    );
    drawTextconnect(
      global.tips,
      global.screenWidth / 2,
      global.screenHeight / 2 + 90,
      25,
      "#FFFFFF",
      "center",
      "Arial",
      "black",
    );
    // Tank animation
    drawRotatingTank(
      global.screenWidth / 2,
      global.screenHeight / 2 - 100,
      30,
      color.guiwhite,
    );
  };

  // Function to draw a rotating Diep.io tank
  const drawRotatingTank = (x, y, size) => {
    ctx.save();
    ctx.translate(x, y);

    const turretRotation = (Date.now() / 400) % (2 * Math.PI); // Adjust speed of rotation
    const turretLengthFactor = 0.8; // Adjust this factor to change turret length (80% of tank size)
    // Draw turret first, so it can be partially covered by the tank body
    ctx.save();
    ctx.rotate(turretRotation);

    const turretWidth = 25; // Turret width
    const turretLength = size * turretLengthFactor; // Turret length, adjustable with a factor
    const turretOffset = size + turretWidth / 2; // Ensure turret is outside the tank body

    ctx.beginPath();
    ctx.rect(
      -turretWidth / 2,
      -turretOffset - turretLength / 2,
      turretWidth,
      turretLength,
    );
    ctx.fillStyle = "gray"; // Turret color
    ctx.lineWidth = 2; // Border width
    ctx.strokeStyle = "#696969"; // Dark gray color for the turret border
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    // Ensure text mitering
    ctx.lineCap = "miter";
    ctx.lineJoin = "miter";
    // Draw tank body over the turret
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, 2 * Math.PI);
    ctx.fillStyle = color.blue; // Tank body color
    ctx.strokeStyle = "#006699"; // Darker blue color for tank body border
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };

  // Function to draw text with a black stroke
  const drawTextconnect = (
    text,
    x,
    y,
    fontSize,
    color,
    alignment,
    strokeColor = "black",
  ) => {
    ctx.font = "bold " + fontSize + "px Ubuntu1";
    ctx.textAlign = alignment;
    ctx.fillStyle = color;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;

    // Draw the stroke first for better visibility
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
  };
  const drawTextconnect1 = (
    text,
    x,
    y,
    fontSize,
    color,
    alignment,
    strokeColor = "black",
  ) => {
    ctx.font = "bold " + fontSize + "px Ubuntu1";
    ctx.textAlign = alignment;
    ctx.fillStyle = color;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;

    // Draw the stroke first for better visibility
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
  };
const drawGamereconnecting = () => {
  if (global.waitingloop && global.gameStart && !global.waitingloop1) {
    drawText(
      "Waiting for players...",
      global.screenWidth / 2,
      20, // Change the y position of the text to 45 pixels down
      20,
      color.guiwhite,
      "center"
    );
  }
};



  const gameDrawDisconnected = () => {
    global.disconnected = true;

    let ratio = util.getScreenRatio();
    let scaleScreenRatio = (by, unset) => {
      global.screenWidth /= by;
      global.screenHeight /= by;
      ctx.scale(by, by);
      if (!unset) ratio *= by;
    };
    scaleScreenRatio(ratio, true);
if (global.piracy) {
      ctx.fillStyle = "#FF0000"; // Red background color
      ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);
} else
    if (global.kicked || global.banned || global.banned1) {
      clearScreen(gameDraw.mixColors("#FF6D6D", color.guiblack, 0.3), 1);
    } else if (global.connecting && !global.gameStart && global.disconnected) {
      ctx.fillStyle = "#E03E41"; // Red background color
      ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);
    } else {
      // Apply a semi-transparent overlay to dim the background
      ctx.globalAlpha = 0.6; // Adjust opacity as needed
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);
      ctx.globalAlpha = 1; // Reset global alpha

      // Apply a blur effect directly on the main canvas
      ctx.filter = "blur(10px)"; // Adjust blur radius as needed
      ctx.drawImage(ctx.canvas, 0, 0, global.screenWidth, global.screenHeight);
      ctx.filter = "none"; // Reset filter
    }

    if (global.kicked) {
      let shift = animations.disconnected1.get();
      ctx.translate(0, -shift * global.screenHeight);

      // Grey box dimensions
      const boxWidth = global.screenWidth * 0.3;
      const boxHeight = 200;
      const boxX = (global.screenWidth - boxWidth) / 2;
      const boxY = (global.screenHeight - boxHeight) / 2 - 10;
      ctx.fillStyle = "#0080FF"; // Semi-transparent grey

      ctx.strokeStyle = "#033568"; // Darker red border
      ctx.lineWidth = 15; // Set the border width (optional)
      ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

      drawText(
        "KICKED",
        global.screenWidth / 2,
        global.screenHeight / 2.25,
        45,
        color.guiwhite,
        "center",
        1,
      );
      drawText(
        "Reason: " + (global.messagekick || "None."),
        global.screenWidth / 2,
        global.screenHeight / 2 - 10,
        22,
        color.guiwhite,
        "center",
        1,
      ); // Lower stroke width value, here set to 1

      let clickableRatio = canvas.height / global.screenHeight / global.ratio;
      let h = 30,
        msg = "Reload",
        m = measureText(msg, h - 3) + 20;
      let buttonX = global.screenWidth / 2,
        buttonY = global.screenHeight / 1.9;

      if (global.reloadClicked) {
        ctx.fillStyle = "#9B9B9B"; // Change background color when clicked
      } else if (global.reloadbox) {
        ctx.fillStyle = "#C7C3C3"; // Background color
      } else {
        ctx.fillStyle = "#AFAEAE"; // Background color
      }
      // Draw the top half of the button
      ctx.fillRect(buttonX - m / 2, buttonY - 5, m, (h + 10) / 2);

      // Draw the bottom half of the button in a slightly darker color
      ctx.fillStyle = "#8F8E8E"; // Darker color for the bottom half
      ctx.fillRect(
        buttonX - m / 2,
        buttonY - 5 + (h + 10) / 2,
        m,
        (h + 10) / 2,
      );

      // Draw the border of the button
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 4;
      ctx.strokeRect(buttonX - m / 2, buttonY - 5, m, h + 10);

      // Draw the text on the button
      drawText(
        msg,
        buttonX,
        buttonY + h / 2 + 3,
        16,
        color.guiwhite,
        "center",
        true,
      );

      // Set the clickable area for the button
      global.clickables.refreshButton.place(
        0,
        (buttonX - m / 2) * clickableRatio,
        (buttonY - 5) * clickableRatio,
        m * clickableRatio,
        (h + 10) * clickableRatio,
      );

      ctx.translate(0, shift * global.screenHeight);
    } else if (global.banned) {
      let shift = animations.disconnected1.get();
      ctx.translate(0, -shift * global.screenHeight);

      // Grey box dimensions
      const boxWidth = global.screenWidth * 0.3;
      const boxHeight = 200;
      const boxX = (global.screenWidth - boxWidth) / 2;
      const boxY = (global.screenHeight - boxHeight) / 2 - 10;
      ctx.fillStyle = "#FF0000"; // Semi-transparent grey

      ctx.strokeStyle = "#8B0000"; // Darker red border
      ctx.lineWidth = 15; // Set the border width (optional)
      ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

      drawText(
        "BANNED",
        global.screenWidth / 2,
        global.screenHeight / 2.25,
        45,
        color.guiwhite,
        "center",
        1,
      );
      drawText(
        "This decision is final.",
        global.screenWidth / 2,
        global.screenHeight / 2 - 10,
        22,
        color.guiwhite,
        "center",
        1,
      ); // Lower stroke width value, here set to 1
      drawText(
        "Please contact the developer.",
        global.screenWidth / 2,
        global.screenHeight / 2 + 50,
        22,
        color.guiwhite,
        "center",
        1,
      ); // Lower stroke width value, here set to 1

      ctx.translate(0, shift * global.screenHeight);
    } else if (global.piracy) {
      let shift = animations.disconnected1.get();
      ctx.translate(0, -shift * global.screenHeight);

      // Grey box dimensions
      const boxWidth = global.screenWidth * 0.4;
      const boxHeight = 200;
      const boxX = (global.screenWidth - boxWidth) / 2;
      const boxY = (global.screenHeight - boxHeight) / 2 - 10;
      ctx.fillStyle = "#ffdd00"; // Semi-transparent grey

      ctx.strokeStyle = "#8b8900"; // Darker red border
      ctx.lineWidth = 15; // Set the border width (optional)
      ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

      drawText(
        "PIRACY IS NO FUN",
        global.screenWidth / 2,
        global.screenHeight / 2.25,
        45,
        color.guiwhite,
        "center",
        1,
      );
      drawText(
        "You're using a modifed game client",
        global.screenWidth / 2,
        global.screenHeight / 2 - 10,
        22,
        color.guiwhite,
        "center",
        1,
      ); // Lower stroke width value, here set to 1
      drawText(
        "Please remove your client and report this to LA3T#4868",
        global.screenWidth / 2,
        global.screenHeight / 2 + 50,
        22,
        color.guiwhite,
        "center",
        1,
      ); // Lower stroke width value, here set to 1

      ctx.translate(0, shift * global.screenHeight);
    } else if (global.banned1) {
      let shift = animations.disconnected1.get();
      ctx.translate(0, -shift * global.screenHeight);

      // Grey box dimensions
      const boxWidth = global.screenWidth * 0.3;
      const boxHeight = 200;
      const boxX = (global.screenWidth - boxWidth) / 2;
      const boxY = (global.screenHeight - boxHeight) / 2 - 10;
      ctx.fillStyle = "#FF0000"; // Semi-transparent grey

      ctx.strokeStyle = "#8B0000"; // Darker red border
      ctx.lineWidth = 15; // Set the border width (optional)
      ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

      drawText(
        "BANNED",
        global.screenWidth / 2,
        global.screenHeight / 2.25,
        45,
        color.guiwhite,
        "center",
        1,
      );
       // Check if global.messageban is defined and not empty, otherwise use the default message
       const banMessage = global.messageban1 || "Temporarily banned.";

       drawText(
           banMessage,
           global.screenWidth / 2,
           global.screenHeight / 2 - 10,
           22,
           color.guiwhite,
           "center",
           1,
       ); // Lower stroke width value, here set to 1
      drawText(
        "Please wait until the next server restart.",
        global.screenWidth / 2,
        global.screenHeight / 2 + 50,
        22,
        color.guiwhite,
        "center",
        1,
      ); // Lower stroke width value, here set to 1

      ctx.translate(0, shift * global.screenHeight);
    } else {
      let shift = animations.disconnected1.get();
      ctx.translate(0, -shift * global.screenHeight);

      // Grey box dimensions
      const boxWidth = global.screenWidth * 0.3;
      const boxHeight = 200;
      const boxX = (global.screenWidth - boxWidth) / 2;
      const boxY = (global.screenHeight - boxHeight) / 2 - 10;
      ctx.fillStyle = "#a0a0a0"; // Semi-transparent grey

      ctx.strokeStyle = "#000000"; // Darker red border
      ctx.lineWidth = 15; // Set the border width (optional)
      ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

      drawText(
        "DISCONNECTED",
        global.screenWidth / 2,
        global.screenHeight / 2.25,
        45,
        color.guiwhite,
        "center",
        1,
      );
      drawText(
        global.messageerrorsocket || "The connection has closed.",
        global.screenWidth / 2,
        global.screenHeight / 2 - 10,
        22,
        color.guiwhite,
        "center",
        1,
      ); // Lower stroke width value, here set to 1

      let clickableRatio = canvas.height / global.screenHeight / global.ratio;
      let h = 30,
        msg = "Reload",
        m = measureText(msg, h - 3) + 20;
      let buttonX = global.screenWidth / 2,
        buttonY = global.screenHeight / 1.9;

      if (global.reloadClicked) {
        ctx.fillStyle = "#9B9B9B"; // Change background color when clicked
      } else if (global.reloadbox) {
        ctx.fillStyle = "#C7C3C3"; // Background color
      } else {
        ctx.fillStyle = "#AFAEAE"; // Background color
      }
      // Draw the top half of the button
      ctx.fillRect(buttonX - m / 2, buttonY - 5, m, (h + 10) / 2);

      // Draw the bottom half of the button in a slightly darker color
      ctx.fillStyle = "#8F8E8E"; // Darker color for the bottom half
      ctx.fillRect(
        buttonX - m / 2,
        buttonY - 5 + (h + 10) / 2,
        m,
        (h + 10) / 2,
      );

      // Draw the border of the button
      ctx.strokeStyle = color.black;
      ctx.lineWidth = 4;
      ctx.strokeRect(buttonX - m / 2, buttonY - 5, m, h + 10);

      // Draw the text on the button
      drawText(
        msg,
        buttonX,
        buttonY + h / 2 + 3,
        16,
        color.guiwhite,
        "center",
        true,
      );
      // Set the clickable area for the button
      global.clickables.refreshButton.place(
        0,
        (buttonX - m / 2) * clickableRatio,
        (buttonY - 5) * clickableRatio,
        m * clickableRatio,
        (h + 10) * clickableRatio,
      );

      ctx.translate(0, shift * global.screenHeight);
    }

    if (global.allthesanctuarieskilled)
      drawText(
        global.sancdiedripforyouanyways || "",
        global.screenWidth / 2,
        global.screenHeight / 2 + 30,
        15,
        color.orange,
        "center",
      );
  };

  const getCurrentDateID = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month =
      (currentDate.getMonth() + 1 < 10 ? "0" : "") +
      (currentDate.getMonth() + 1);
    const day = (currentDate.getDate() < 10 ? "0" : "") + currentDate.getDate();
    return year + "-" + month + "-" + day;
  };

  console.log(getCurrentDateID());

  const getCurrentDateTimeID = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month =
      (currentDate.getMonth() + 1 < 10 ? "0" : "") +
      (currentDate.getMonth() + 1);
    const day = (currentDate.getDate() < 10 ? "0" : "") + currentDate.getDate();

    const hours =
      (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
    const minutes =
      (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
    const seconds =
      (currentDate.getSeconds() < 10 ? "0" : "") + currentDate.getSeconds();

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return {
      dateID: year + "-" + month + "-" + day,
      time: hours + ":" + minutes + ":" + seconds,
      timeZone: timeZone,
    };
  };

  console.log(getCurrentDateTimeID());

  // The main function
  function createSnowCanvas() {
    let snowCanvas = document.createElement("canvas");
    snowCanvas.id = "snowCanvas";
    snowCanvas.style.position = "fixed";
    snowCanvas.style.top = "0";
    snowCanvas.style.left = "0";
    snowCanvas.style.width = "100vw";
    snowCanvas.style.height = "100vh";
    document.body.insertBefore(snowCanvas, document.body.firstChild);
    let ctx = snowCanvas.getContext("2d");
    let snowflakes = [];

    function updateSnow() {
        if (snowCanvas.width !== window.innerWidth)
            snowCanvas.width = window.innerWidth;
        if (snowCanvas.height !== window.innerHeight)
            snowCanvas.height = window.innerHeight;
        ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);

        for (let flake of snowflakes) {
            flake.y += flake.vel;
            if (flake.y > snowCanvas.height) {
                flake.y = -flake.r;
                flake.x = Math.random() * snowCanvas.width;
            }
            ctx.globalAlpha = flake.alpha;
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.r, 0, 2 * Math.PI);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
        }

        if (snowflakes.length < 100) {
            let x = Math.random() * snowCanvas.width;
            let y = Math.random() * snowCanvas.height;
            let r = 2 + Math.random() * 5;
            let vel = 0.5 + Math.random() * 1;
            let alpha = Math.random();
            snowflakes.push({ x, y, r, vel, alpha });
        }

        if (global.gameStart) snowCanvas.remove();
        else requestAnimationFrame(updateSnow);
    }

    updateSnow();
}

function animloop() {
  global.animLoopHandle = window.requestAnimationFrame(animloop);

  // Reanimate colors
  gameDraw.reanimateColors();

  // Smoothly interpolate player view
  global.player.renderv += (global.player.view - global.player.renderv) / 15;

  // Calculate screen ratio
  var ratio = config.graphical.screenshotMode ? 2 : util.getRatio();

  // Set the drawing style
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Draw the game if it's started and not disconnected
  if (global.gameStart && !global.disconnected && !global.tryingtoreconnect) {
      global.time = getNow();
      
      // Latency optimizations
      if (document.getElementById("optFancy").checked || global.optFancy) {
          if (global.time - lastPing > 0) {
              global.sendmessagefps = true;
              let currentTime = Date.now();
              lastUpdateTime = currentTime;
              
              global.socket.ping(global.time);
              lastPing = global.time;
              global.metrics.rendertime = renderTimes;
              renderTimes = 0;
              global.metrics.updatetime = global.updateTimes;
              global.updateTimes = 0;
              
              global.currentFps = Math.round(1000 / (global.time - lastUpdateTime));
              global.currentFps = currentFps;
          }
      } else if (document.getElementById("betterperformance").checked || global.betternofcway) {
          if (global.time - lastPing > 3000) {
              global.sendmessagefps = false;
              let currentTime = Date.now();
              lastUpdateTime = currentTime;
              global.socket.ping(global.time);
              lastPing = global.time;
              global.metrics.rendertime = renderTimes;
              renderTimes = 0;
              global.metrics.updatetime = global.updateTimes;
              global.updateTimes = 0;
              
              global.currentFps = Math.round(1000 / (global.time - lastUpdateTime));
              global.currentFps = currentFps;
          }
      } else {
          if (global.time - lastPing > 1000) {
              global.sendmessagefps = true;
              let currentTime = Date.now();
              lastUpdateTime = currentTime;
              global.socket.ping(global.time);
              lastPing = global.time;
              global.metrics.rendertime = renderTimes;
              renderTimes = 0;
              global.metrics.updatetime = global.updateTimes;
              global.updateTimes = 0;
              
              global.currentFps = Math.round(1000 / (global.time - lastUpdateTime));
              global.currentFps = currentFps;
          }
      }
      global.metrics.lag = global.time - global.player.time;
  }

  // Apply translation for smoother rendering
  ctx.translate(0.5, 0.5);

  try {
      if (global.gameStart) {
          gameDrawAlive(ratio, util.getScreenRatio());
      } else if (!global.disconnected) {
          gameDrawBeforeStart();
      }
      if (
          global.died ||
          global.diedbruh ||
          global.diedseekbruh ||
          global.showdeathscreen
      ) {
          gameDrawDead();
      }

      if (global.arenaClosed) {
          arenaClosed();
      } else if (global.disconnected) {
          gameDrawDisconnected();
      } else if (global.waitingloop && global.gameStart && !global.waitingloop1) {
          drawGamereconnecting();
      } else if (global.smasherreward) {
          rewardsmasher();
      } else if (global.showintroduction) {
          introduction();
      }

      // Undo translation after rendering
      ctx.translate(-0.5, -0.5);

      // Handle reconnection scenario
      if (global.reconnected) {
          console.log("Reconnected and updating game state...");
          global.reconnected = false; // Reset flag
          lastPing = global.time; // Update lastPing
      }

        if (!document.getElementById("snowCanvas")) {
            createSnowCanvas();
        }
    
  } catch (e) {
      // Handle errors during rendering
      gameDrawErrorScreen(e);
      console.error(e);
      ctx.translate(-0.5, -0.5);
  }
}
let snowAmount = 0.3; // Reduced likelihood of generating new shapes
let aeff = 1;
let cool = 0;
let counter = 0;
let counter2 = 0;

// Adjustable speed variables
let fallingSpeed = 2; // Control the falling speed
let rotationSpeed = 0.05; // Control the rotation speed

if (snowAmount) {
    let snowCanvas = document.createElement('canvas');
    snowCanvas.style.position = 'absolute';
    snowCanvas.style.top = '0';
    document.body.insertBefore(snowCanvas, document.body.firstChild);

    let ctx = snowCanvas.getContext('2d');
    let snow = [];

    // Function to draw shapes with white fill
    const drawShape = (x, y, r, shape, rotation) => {
        ctx.save(); // Save the current context
        ctx.translate(x, y); // Move the origin to the shape's position
        ctx.rotate(rotation); // Rotate the canvas
        //ctx.globalAlpha = 0.3; // Example: 50% opacity
        ctx.beginPath();
        if (shape === 'circle') {
            ctx.arc(0, 0, r, 0, 2 * Math.PI);
        } else if (shape === 'square') {
            ctx.rect(-r, -r, r * 2, r * 2);
        } else if (shape === 'triangle') {
            ctx.moveTo(0, -r);
            ctx.lineTo(-r, r);
            ctx.lineTo(r, r);
            ctx.closePath();
        }  else if (shape === 'pentagon') {
          // Correctly define pentagon shape
          for (let i = 0; i < 5; i++) {
              ctx.lineTo(r * Math.cos((i * 2 * Math.PI) / 5), r * Math.sin((i * 2 * Math.PI) / 5));
          }
          ctx.closePath(); // Close the path
      }


   
        ctx.strokeStyle = '#ffffff'; // White outline
        ctx.lineWidth = 5; // Outline width
        ctx.stroke(); // Draw the outline

        ctx.restore(); // Restore the context to its original state
    };

      let updateSnow = () => {
        if (snowCanvas.width !== window.innerWidth) snowCanvas.width = window.innerWidth;
        if (snowCanvas.height !== window.innerHeight) snowCanvas.height = window.innerHeight;
        ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
        for (let p of snow) {
            p.vel2++;
            p.x += p.vel * Math.cos(p.dir);
            p.y += p.vel * Math.sin(p.dir);
            let a = Math.min(0.4, 1 - (p.y / snowCanvas.height)) * 2;
            if (a > 0) {
                ctx.globalAlpha = a;
                drawShape(p.x, p.y, p.r, p.shape, p.rotation); // Pass rotation to drawShape
                p.rotation += rotationSpeed; // Update rotation
            } else if (p.x < 20 || p.x > window.innerWidth + 20 || p.y < -25 || a < 0 || global.gameStart) {
                p.gone = true;
            }
        }
        if (Math.random() < snowAmount) { // Reduced threshold for generating new shapes
            if (!global.gameStart) {
                let aeef = -10;
                let aee = (snowCanvas.width) * (1 - 2 * Math.random());
                if (counter % 43) counter2++;
                counter++;
                cool += aeff;
                if (counter % 1440 == 0) aeff *= -1;
                if (counter % 1 == 0) {
                    for (let i = 0; i < 360; i += 360 / 1) {
                        let x = snowCanvas.width / 2 + aee;
                        let shape = ['circle', 'square', 'triangle', 'pentagon'][Math.floor(Math.random() * 4)]; // Random shape selection
    
                        // Set different radius values for different shapes
                        let r;
                        if (shape === 'circle') {
                            r = 10; // Smaller radius for circles
                        } else {
                            r = 20; // Larger radius for squares, triangles, and pentagons
                        }
                        let dir = Math.PI / 2 + 10 * (1 - 2 * Math.random()) * Math.PI / 180 + 30 * Math.sin(0.3 * counter * Math.PI / 180) * Math.PI / 180;
                        let vel = fallingSpeed + 2 * Math.random(); // Use adjustable falling speed
                    
                        snow.push({ x, y: aeef, r, dir, vel, shape, rotation: 0 }); // Initialize rotation
                    }
                }
            }
        }
        if (global.gameStart) {
            snowCanvas.remove();
        } else {
            requestAnimationFrame(updateSnow);
        }
    };
 

    setInterval(() => {
        snow = snow.filter(r => !r.gone);
    }, 2000);
    updateSnow();
}





})(util, global, config, Canvas, colors, gameDraw, socketStuff);
