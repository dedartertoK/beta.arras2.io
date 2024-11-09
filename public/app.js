import { util } from "./lib/util.js";
import { global } from "./lib/global.js";
import { config } from "./lib/config.js";
import { Canvas } from "./lib/canvas.js";
import { color as _0x24df39 } from "./lib/color.js";
import { gameDraw } from "./lib/gameDraw.js";
import * as _0x12fff9 from "./lib/socketInit.js";
(async function (_0x8e966f, _0x5bae59, _0x2c1aed, _0x1b49b4, _0x53f6d6, _0x289a34, _0x15f292) {
  let {
    socketInit: _0x7ea282,
    gui: _0x71195b,
    leaderboard: _0x2c4e9e,
    minimap: _0x39b95e,
    moveCompensation: _0x53b24e,
    lag: _0x1184fe,
    getNow: _0x18517a
  } = _0x15f292;
  document.getElementById("antivpn").style.display = "none";
  document.getElementById("antivpn1").style.display = "none";
  document.getElementById("antivpn1").checked = false;
  class _0x5ef600 {
    constructor(_0x50553b, _0x478944, _0x5d9a28 = 0.05) {
      this.start = _0x50553b;
      this.to = _0x478944;
      this.value = _0x50553b;
      this.smoothness = _0x5d9a28;
    }
    reset() {
      this.value = this.start;
      return this.value;
    }
    getLerp() {
      this.value = _0x8e966f.lerp(this.value, this.to, this.smoothness, true);
      return this.value;
    }
    getNoLerp() {
      this.value = this.to;
      return this.value;
    }
    get() {
      if (_0x2c1aed.graphical.fancyAnimations) {
        return this.getLerp();
      } else {
        return this.getNoLerp();
      }
    }
    flip() {
      const _0x24ab58 = this.to;
      const _0x5a0962 = this.start;
      this.start = _0x24ab58;
      this.to = _0x5a0962;
    }
    goodEnough(_0x20863a = 0.5) {
      return Math.abs(this.to - this.value) < _0x20863a;
    }
  }
  let _0x17aebb = window.animations = {
    connecting: new _0x5ef600(1, 0, 0.35),
    disconnected: new _0x5ef600(1, 0, 0.5),
    disconnected1: new _0x5ef600(0, 0),
    settingsmenu: new _0x5ef600(0, 1, 0.01),
    deathScreen: new _0x5ef600(1, 0),
    disconnected22: new _0x5ef600(0, 0),
    upgradeMenu: new _0x5ef600(0, 1, 0.01),
    skillMenu: new _0x5ef600(0, 1, 0.01),
    optionsMenu: new _0x5ef600(1, 0),
    minimap: new _0x5ef600(-1, 1, 0.025),
    leaderboard: new _0x5ef600(-1, 1, 0.025)
  };
  _0x5bae59.player = {
    id: -1,
    x: _0x5bae59.screenWidth / 2,
    y: _0x5bae59.screenHeight / 2,
    vx: 0,
    vy: 0,
    cx: 0,
    cy: 0,
    renderx: _0x5bae59.screenWidth / 2,
    rendery: _0x5bae59.screenHeight / 2,
    renderv: 1,
    slip: 0,
    view: 1,
    time: 0,
    screenWidth: _0x5bae59.screenWidth,
    screenHeight: _0x5bae59.screenHeight,
    nameColor: "#ffffff"
  };
  _0x5bae59.time = 0;
  var _0xbc2643 = 0;
  var _0x30df86 = 0;
  var _0x12abc2 = 0;
  var _0x30e370 = 0;
  var _0x27e2a3;
  _0x5bae59.clearUpgrades = () => _0x71195b.upgrades = [];
  _0x5bae59.movescreen = false;
  _0x5bae59.player = _0x5bae59.player;
  _0x5bae59.isHoveringUpgradeBox = false;
  _0x5bae59.reloadbox = false;
  _0x5bae59.omgwork = false;
  _0x5bae59.scoree = false;
  _0x5bae59.needsReset = false;
  _0x5bae59.notdied = false;
  _0x5bae59.disappearu = false;
  _0x5bae59.skipbox = false;
  _0x5bae59.showdeathscreen = false;
  _0x5bae59.skipClicked = false;
  _0x5bae59.SettingsClicked = false;
  _0x5bae59.sendmessagefps = false;
  _0x5bae59.yesbox = false;
  _0x5bae59.yesClicked = false;
  _0x5bae59.nobox = false;
  _0x5bae59.noClicked = false;
  _0x5bae59.hidemenu = false;
  _0x5bae59.choosenexit = false;
  _0x5bae59.discardexit = false;
  _0x5bae59.connecting = false;
  _0x5bae59.closesettings = false;
  _0x5bae59.reconnected = false;
  _0x5bae59.Settingsbox = false;
  _0x5bae59.socket = false;
  _0x5bae59.hasclickedsettings = false;
  _0x5bae59.reloadClicked = false;
  _0x5bae59.upgradeMenuVisible = false;
  _0x5bae59.gameStart = false;
  _0x5bae59.gameStart1 = false;
  _0x5bae59.finishedloadingmockups = false;
  _0x5bae59.showintroduction = false;
  _0x5bae59.aa = false;
  _0x5bae59.aaaa = false;
  _0x5bae59.plsjust = false;
  _0x5bae59.tryingtoreconnect = false;
  _0x5bae59.waitingloop = false;
  _0x5bae59.waitingloop1 = false;
  _0x5bae59.optFancy = false;
  _0x5bae59.betternofcway = false;
  _0x5bae59.spectatebox = false;
  _0x5bae59.cancelspectatebox = false;
  _0x5bae59.cancelspectateClicked = false;
  _0x5bae59.isspectating = false;
  _0x5bae59.spectateClicked = false;
  _0x5bae59.ab = false;
  _0x5bae59.enterbox = false;
  _0x5bae59.enterClicked = false;
  _0x5bae59.reloadClicked1 = false;
  _0x5bae59.reloadbox1 = false;
  _0x5bae59.canUpgrade = false;
  _0x5bae59.canSkill = false;
  _0x5bae59.message = "";
  _0x5bae59.mesage = "";
  _0x5bae59.diedbruh = false;
  _0x5bae59.diedseekbruh = false;
  _0x5bae59.connectingmsg = "Loading Mockups...";
  _0x5bae59.daconnectingmsg = "Connecting";
  _0x5bae59.tips = ["Tip: For better performance and a smoother experience, enable better FPS on settings!", "Tip: You can press T to see the class tree", "Want to access to the closed beta server? Contact the developer!", "Any cheating scripts such as multibox will result in a ban.", "Tip: You can press X to spinlock your tank to aim better!", "If you don't want to miss the events coming, join the official arras2.io discord server!", "Tip: You can press ENTER to chat with people!", "Lagging? Choose the closest region to get the smoothest experience!"][Math.floor(Math.random() * 8)];
  if (_0x5bae59.mobile) {
    document.body.classList.add("mobile");
  }
  _0x5bae59.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  var _0x4783b2 = "Connected";
  var _0x36b501 = "Unknown";
  const _0x18d63e = {
    dday: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30004.app.github.dev/lib/json/gamemodeData.json",
    hide: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30011.app.github.dev/lib/json/gamemodeData.json",
    train: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30012.app.github.dev/lib/json/gamemodeData.json",
    nexus: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30013.app.github.dev/lib/json/gamemodeData.json",
    manhunt: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30014.app.github.dev/lib/json/gamemodeData.json",
    growth: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30010.app.github.dev/lib/json/gamemodeData.json",
    bossrush: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30002.app.github.dev/lib/json/gamemodeData.json",
    ddayusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30004.app.github.dev/lib/json/gamemodeData.json",
    trainusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30012.app.github.dev/lib/json/gamemodeData.json",
    nexususa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30013.app.github.dev/lib/json/gamemodeData.json",
    manhuntusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30014.app.github.dev/lib/json/gamemodeData.json",
    hideusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30011.app.github.dev/lib/json/gamemodeData.json",
    growthusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30010.app.github.dev/lib/json/gamemodeData.json",
    bossrushusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30002.app.github.dev/lib/json/gamemodeData.json",
    dominationusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30000.app.github.dev/lib/json/gamemodeData.json",
    mothershipusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30003.app.github.dev/lib/json/gamemodeData.json",
    killraceusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30008.app.github.dev/lib/json/gamemodeData.json",
    coreusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30009.app.github.dev/lib/json/gamemodeData.json",
    ffausa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30005.app.github.dev/lib/json/gamemodeData.json",
    twotdmusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30001.app.github.dev/lib/json/gamemodeData.json",
    mazeusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30006.app.github.dev/lib/json/gamemodeData.json",
    fourtdmusa: "https://sturdy-guide-jjqpq7qxj4vjf54j9-30007.app.github.dev/lib/json/gamemodeData.json",
    ddayasia: "https://cautious-invention-v6q79rq9xr57hwqww-30004.app.github.dev/lib/json/gamemodeData.json",
    growthasia: "https://cautious-invention-v6q79rq9xr57hwqww-30010.app.github.dev/lib/json/gamemodeData.json",
    hideasia: "https://cautious-invention-v6q79rq9xr57hwqww-30011.app.github.dev/lib/json/gamemodeData.json",
    bossrushasia: "https://cautious-invention-v6q79rq9xr57hwqww-30002.app.github.dev/lib/json/gamemodeData.json",
    dominationasia: "https://cautious-invention-v6q79rq9xr57hwqww-30000.app.github.dev/lib/json/gamemodeData.json",
    mothershipasia: "https://cautious-invention-v6q79rq9xr57hwqww-30003.app.github.dev/lib/json/gamemodeData.json",
    killraceasia: "https://cautious-invention-v6q79rq9xr57hwqww-30008.app.github.dev/lib/json/gamemodeData.json",
    coreasia: "https://cautious-invention-v6q79rq9xr57hwqww-30009.app.github.dev/lib/json/gamemodeData.json",
    ffaasia: "https://cautious-invention-v6q79rq9xr57hwqww-30005.app.github.dev/lib/json/gamemodeData.json",
    trainasia: "https://cautious-invention-v6q79rq9xr57hwqww-30012.app.github.dev/lib/json/gamemodeData.json",
    nexusasia: "https://cautious-invention-v6q79rq9xr57hwqww-30013.app.github.dev/lib/json/gamemodeData.json",
    manhuntasia: "https://cautious-invention-v6q79rq9xr57hwqww-30014.app.github.dev/lib/json/gamemodeData.json",
    twotdmasia: "https://cautious-invention-v6q79rq9xr57hwqww-30001.app.github.dev/lib/json/gamemodeData.json",
    mazeasia: "https://cautious-invention-v6q79rq9xr57hwqww-30006.app.github.dev/lib/json/gamemodeData.json",
    fourtdmasia: "https://cautious-invention-v6q79rq9xr57hwqww-30007.app.github.dev/lib/json/gamemodeData.json",
    domination: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30000.app.github.dev/lib/json/gamemodeData.json",
    mothership: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30003.app.github.dev/lib/json/gamemodeData.json",
    killrace: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30008.app.github.dev/lib/json/gamemodeData.json",
    core: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30009.app.github.dev/lib/json/gamemodeData.json",
    ffa: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30005.app.github.dev/lib/json/gamemodeData.json",
    twotdm: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30001.app.github.dev/lib/json/gamemodeData.json",
    maze: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30006.app.github.dev/lib/json/gamemodeData.json",
    fourtdm: "https://super-duper-space-happiness-97jgjjj4gjq72xwqx-30007.app.github.dev/lib/json/gamemodeData.json"
  };
  let _0x4acbef = {
    dday: 0,
    bossrush: 0,
    domination: 0,
    mothership: 0,
    ddayusa: 0,
    hide: 0,
    manhunt: 0,
    train: 0,
    nexus: 0,
    nexusasia: 0,
    manhuntasia: 0,
    trainasia: 0,
    hideasia: 0,
    growth: 0,
    growthusa: 0,
    growthasia: 0,
    hideusa: 0,
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
    manhuntusa: 0,
    trainusa: 0,
    nexususa: 0,
    ffaasia: 0,
    twotdmasia: 0,
    mazeasia: 0,
    fourtdmasia: 0,
    killrace: 0,
    core: 0,
    ffa: 0,
    twotdm: 0,
    maze: 0,
    fourtdm: 0
  };
  function _0x4a3011() {
    const _0xb47fd = Object.entries(_0x18d63e).map(([_0x58f91d, _0xbd7371]) => fetch(_0xbd7371).then(_0x55af72 => _0x55af72.json()).then(_0x1016ff => {
      _0x4acbef[_0x58f91d] = _0x1016ff.players || 0;
    }).catch(_0x20a817 => {
      //console.error("Error fetching " + _0x58f91d + " player count:", _0x20a817);
      _0x4acbef[_0x58f91d] = 0;
    }));
    Promise.all(_0xb47fd).then(() => {
      _0x1e44e9();
      _0x244c51();
      _0x1f4bfe();
      _0xeb7db5();
      _0x234856();
      _0x38aa31();
      _0x57237b();
      _0x49f1b7();
      _0x14027f();
      _0x557eae();
      _0x21ee44();
      _0x2dc7ed();
      _0x2c1cd0();
      _0x4e39aa();
      _0x19505f();
      _0x34059f();
      _0x1ec5d7();
      _0x530506();
      _0x3f889a();
    });
  }
  function _0x1e44e9() {
    let _0x52679d = 0;
    _0x52679d += isNaN(_0x4acbef.dday) ? 0 : _0x4acbef.dday;
    _0x52679d += isNaN(_0x4acbef.bossrush) ? 0 : _0x4acbef.bossrush;
    _0x52679d += isNaN(_0x4acbef.domination) ? 0 : _0x4acbef.domination;
    _0x52679d += isNaN(_0x4acbef.mothership) ? 0 : _0x4acbef.mothership;
    _0x52679d += isNaN(_0x4acbef.killrace) ? 0 : _0x4acbef.killrace;
    _0x52679d += isNaN(_0x4acbef.core) ? 0 : _0x4acbef.core;
    _0x52679d += isNaN(_0x4acbef.ffa) ? 0 : _0x4acbef.ffa;
    _0x52679d += isNaN(_0x4acbef.twotdm) ? 0 : _0x4acbef.twotdm;
    _0x52679d += isNaN(_0x4acbef.maze) ? 0 : _0x4acbef.maze;
    _0x52679d += isNaN(_0x4acbef.fourtdm) ? 0 : _0x4acbef.fourtdm;
    _0x52679d += isNaN(_0x4acbef.growth) ? 0 : _0x4acbef.growth;
    _0x52679d += isNaN(_0x4acbef.hide) ? 0 : _0x4acbef.hide;
    _0x52679d += isNaN(_0x4acbef.nexus) ? 0 : _0x4acbef.nexus;
    _0x52679d += isNaN(_0x4acbef.manhunt) ? 0 : _0x4acbef.manhunt;
    _0x52679d += isNaN(_0x4acbef.train) ? 0 : _0x4acbef.train;
    _0x52679d += isNaN(_0x4acbef.nexusasia) ? 0 : _0x4acbef.nexusasia;
    _0x52679d += isNaN(_0x4acbef.manhuntasia) ? 0 : _0x4acbef.manhuntasia;
    _0x52679d += isNaN(_0x4acbef.trainasia) ? 0 : _0x4acbef.trainasia;
    _0x52679d += isNaN(_0x4acbef.nexususa) ? 0 : _0x4acbef.nexususa;
    _0x52679d += isNaN(_0x4acbef.trainusa) ? 0 : _0x4acbef.trainusa;
    _0x52679d += isNaN(_0x4acbef.manhuntusa) ? 0 : _0x4acbef.manhuntusa;
    _0x52679d += isNaN(_0x4acbef.ddayusa) ? 0 : _0x4acbef.ddayusa;
    _0x52679d += isNaN(_0x4acbef.bossrushusa) ? 0 : _0x4acbef.bossrushusa;
    _0x52679d += isNaN(_0x4acbef.dominationusa) ? 0 : _0x4acbef.dominationusa;
    _0x52679d += isNaN(_0x4acbef.mothershipusa) ? 0 : _0x4acbef.mothershipusa;
    _0x52679d += isNaN(_0x4acbef.killraceusa) ? 0 : _0x4acbef.killraceusa;
    _0x52679d += isNaN(_0x4acbef.coreusa) ? 0 : _0x4acbef.coreusa;
    _0x52679d += isNaN(_0x4acbef.ffausa) ? 0 : _0x4acbef.ffausa;
    _0x52679d += isNaN(_0x4acbef.twotdmusa) ? 0 : _0x4acbef.twotdmusa;
    _0x52679d += isNaN(_0x4acbef.mazeusa) ? 0 : _0x4acbef.mazeusa;
    _0x52679d += isNaN(_0x4acbef.growthusa) ? 0 : _0x4acbef.growthusa;
    _0x52679d += isNaN(_0x4acbef.hideusa) ? 0 : _0x4acbef.hideusa;
    _0x52679d += isNaN(_0x4acbef.fourtdmusa) ? 0 : _0x4acbef.fourtdmusa;
    _0x52679d += isNaN(_0x4acbef.ddayasia) ? 0 : _0x4acbef.ddayasia;
    _0x52679d += isNaN(_0x4acbef.bossrushasia) ? 0 : _0x4acbef.bossrushasia;
    _0x52679d += isNaN(_0x4acbef.dominationasia) ? 0 : _0x4acbef.dominationasia;
    _0x52679d += isNaN(_0x4acbef.mothershipasia) ? 0 : _0x4acbef.mothershipasia;
    _0x52679d += isNaN(_0x4acbef.killraceasia) ? 0 : _0x4acbef.killraceasia;
    _0x52679d += isNaN(_0x4acbef.coreasia) ? 0 : _0x4acbef.coreasia;
    _0x52679d += isNaN(_0x4acbef.ffaasia) ? 0 : _0x4acbef.ffaasia;
    _0x52679d += isNaN(_0x4acbef.twotdmasia) ? 0 : _0x4acbef.twotdmasia;
    _0x52679d += isNaN(_0x4acbef.mazeasia) ? 0 : _0x4acbef.mazeasia;
    _0x52679d += isNaN(_0x4acbef.growthasia) ? 0 : _0x4acbef.growthasia;
    _0x52679d += isNaN(_0x4acbef.fourtdmasia) ? 0 : _0x4acbef.fourtdmasia;
    _0x52679d += isNaN(_0x4acbef.hideasia) ? 0 : _0x4acbef.hideasia;
    document.getElementById("totalPlayerCount").textContent = _0x52679d + " players";
  }
  function _0x234856() {
    let _0xaf4d2d = 0;
    _0xaf4d2d += isNaN(_0x4acbef.dday) ? 0 : _0x4acbef.dday;
    _0xaf4d2d += isNaN(_0x4acbef.bossrush) ? 0 : _0x4acbef.bossrush;
    _0xaf4d2d += isNaN(_0x4acbef.domination) ? 0 : _0x4acbef.domination;
    _0xaf4d2d += isNaN(_0x4acbef.mothership) ? 0 : _0x4acbef.mothership;
    _0xaf4d2d += isNaN(_0x4acbef.nexus) ? 0 : _0x4acbef.nexus;
    _0xaf4d2d += isNaN(_0x4acbef.manhunt) ? 0 : _0x4acbef.manhunt;
    _0xaf4d2d += isNaN(_0x4acbef.train) ? 0 : _0x4acbef.train;
    _0xaf4d2d += isNaN(_0x4acbef.killrace) ? 0 : _0x4acbef.killrace;
    _0xaf4d2d += isNaN(_0x4acbef.core) ? 0 : _0x4acbef.core;
    _0xaf4d2d += isNaN(_0x4acbef.ffa) ? 0 : _0x4acbef.ffa;
    _0xaf4d2d += isNaN(_0x4acbef.twotdm) ? 0 : _0x4acbef.twotdm;
    _0xaf4d2d += isNaN(_0x4acbef.growth) ? 0 : _0x4acbef.growth;
    _0xaf4d2d += isNaN(_0x4acbef.maze) ? 0 : _0x4acbef.maze;
    _0xaf4d2d += isNaN(_0x4acbef.fourtdm) ? 0 : _0x4acbef.fourtdm;
    _0xaf4d2d += isNaN(_0x4acbef.hide) ? 0 : _0x4acbef.hide;
    document.getElementById("totalPlayerCounteurope").textContent = _0xaf4d2d + " players";
  }
  function _0x38aa31() {
    let _0x5275fe = 0;
    _0x5275fe += isNaN(_0x4acbef.ddayusa) ? 0 : _0x4acbef.ddayusa;
    _0x5275fe += isNaN(_0x4acbef.bossrushusa) ? 0 : _0x4acbef.bossrushusa;
    _0x5275fe += isNaN(_0x4acbef.dominationusa) ? 0 : _0x4acbef.dominationusa;
    _0x5275fe += isNaN(_0x4acbef.mothershipusa) ? 0 : _0x4acbef.mothershipusa;
    _0x5275fe += isNaN(_0x4acbef.killraceusa) ? 0 : _0x4acbef.killraceusa;
    _0x5275fe += isNaN(_0x4acbef.coreusa) ? 0 : _0x4acbef.coreusa;
    _0x5275fe += isNaN(_0x4acbef.hideusa) ? 0 : _0x4acbef.hideusa;
    _0x5275fe += isNaN(_0x4acbef.nexususa) ? 0 : _0x4acbef.nexususa;
    _0x5275fe += isNaN(_0x4acbef.manhuntusa) ? 0 : _0x4acbef.manhuntusa;
    _0x5275fe += isNaN(_0x4acbef.trainusa) ? 0 : _0x4acbef.trainusa;
    _0x5275fe += isNaN(_0x4acbef.ffausa) ? 0 : _0x4acbef.ffausa;
    _0x5275fe += isNaN(_0x4acbef.twotdmusa) ? 0 : _0x4acbef.twotdmusa;
    _0x5275fe += isNaN(_0x4acbef.growthusa) ? 0 : _0x4acbef.growthusa;
    _0x5275fe += isNaN(_0x4acbef.mazeusa) ? 0 : _0x4acbef.mazeusa;
    _0x5275fe += isNaN(_0x4acbef.fourtdmusa) ? 0 : _0x4acbef.fourtdmusa;
    document.getElementById("totalPlayerCountusa").textContent = _0x5275fe + " players";
  }
  function _0x57237b() {
    let _0x273a75 = 0;
    _0x273a75 += isNaN(_0x4acbef.ddayasia) ? 0 : _0x4acbef.ddayasia;
    _0x273a75 += isNaN(_0x4acbef.bossrushasia) ? 0 : _0x4acbef.bossrushasia;
    _0x273a75 += isNaN(_0x4acbef.dominationasia) ? 0 : _0x4acbef.dominationasia;
    _0x273a75 += isNaN(_0x4acbef.mothershipasia) ? 0 : _0x4acbef.mothershipasia;
    _0x273a75 += isNaN(_0x4acbef.killraceasia) ? 0 : _0x4acbef.killraceasia;
    _0x273a75 += isNaN(_0x4acbef.coreasia) ? 0 : _0x4acbef.coreasia;
    _0x273a75 += isNaN(_0x4acbef.ffaasia) ? 0 : _0x4acbef.ffaasia;
    _0x273a75 += isNaN(_0x4acbef.hideasia) ? 0 : _0x4acbef.hideasia;
    _0x273a75 += isNaN(_0x4acbef.growthasia) ? 0 : _0x4acbef.growthasia;
    _0x273a75 += isNaN(_0x4acbef.twotdmasia) ? 0 : _0x4acbef.twotdmasia;
    _0x273a75 += isNaN(_0x4acbef.mazeasia) ? 0 : _0x4acbef.mazeasia;
    _0x273a75 += isNaN(_0x4acbef.nexusasia) ? 0 : _0x4acbef.nexusasia;
    _0x273a75 += isNaN(_0x4acbef.manhuntasia) ? 0 : _0x4acbef.manhuntasia;
    _0x273a75 += isNaN(_0x4acbef.trainasia) ? 0 : _0x4acbef.trainasia;
    _0x273a75 += isNaN(_0x4acbef.fourtdmasia) ? 0 : _0x4acbef.fourtdmasia;
    document.getElementById("totalPlayerCountasia").textContent = _0x273a75 + " players";
  }
  let _0x379d44 = false;
  let _0x5a0096 = false;
  function _0x244c51() {
    let _0x38458c = 0;
    if (_0x379d44) {
      _0x38458c += isNaN(_0x4acbef.ddayusa) ? 0 : _0x4acbef.ddayusa;
    } else if (_0x5a0096) {
      _0x38458c += isNaN(_0x4acbef.ddayasia) ? 0 : _0x4acbef.ddayasia;
    } else {
      _0x38458c += isNaN(_0x4acbef.dday) ? 0 : _0x4acbef.dday;
    }
    document.getElementById("totalplayersred").textContent = _0x38458c + " players";
  }
  function _0x1f4bfe() {
    let _0x2f9991 = 0;
    if (_0x379d44) {
      _0x2f9991 += isNaN(_0x4acbef.bossrushusa) ? 0 : _0x4acbef.bossrushusa;
    } else if (_0x5a0096) {
      _0x2f9991 += isNaN(_0x4acbef.bossrushasia) ? 0 : _0x4acbef.bossrushasia;
    } else {
      _0x2f9991 += isNaN(_0x4acbef.bossrush) ? 0 : _0x4acbef.bossrush;
    }
    document.getElementById("totalplayersyellow").textContent = _0x2f9991 + " players";
  }
  function _0xeb7db5() {
    let _0x54cdca = 0;
    if (_0x379d44) {
      _0x54cdca += isNaN(_0x4acbef.dominationusa) ? 0 : _0x4acbef.dominationusa;
    } else if (_0x5a0096) {
      _0x54cdca += isNaN(_0x4acbef.dominationasia) ? 0 : _0x4acbef.dominationasia;
    } else {
      _0x54cdca += isNaN(_0x4acbef.domination) ? 0 : _0x4acbef.domination;
    }
    document.getElementById("totalplayersblue").textContent = _0x54cdca + " players";
  }
  function _0x49f1b7() {
    let _0x49010d = 0;
    if (_0x379d44) {
      _0x49010d += isNaN(_0x4acbef.mothershipusa) ? 0 : _0x4acbef.mothershipusa;
    } else if (_0x5a0096) {
      _0x49010d += isNaN(_0x4acbef.mothershipasia) ? 0 : _0x4acbef.mothershipasia;
    } else {
      _0x49010d += isNaN(_0x4acbef.mothership) ? 0 : _0x4acbef.mothership;
    }
    document.getElementById("totalplayersgreen").textContent = _0x49010d + " players";
  }
  function _0x14027f() {
    let _0x209338 = 0;
    if (_0x379d44) {
      _0x209338 += isNaN(_0x4acbef.killraceusa) ? 0 : _0x4acbef.killraceusa;
    } else if (_0x5a0096) {
      _0x209338 += isNaN(_0x4acbef.killraceasia) ? 0 : _0x4acbef.killraceasia;
    } else {
      _0x209338 += isNaN(_0x4acbef.killrace) ? 0 : _0x4acbef.killrace;
    }
    document.getElementById("totalplayersbrown").textContent = _0x209338 + " players";
  }
  function _0x557eae() {
    let _0x16a90c = 0;
    if (_0x379d44) {
      _0x16a90c += isNaN(_0x4acbef.coreusa) ? 0 : _0x4acbef.coreusa;
    } else if (_0x5a0096) {
      _0x16a90c += isNaN(_0x4acbef.coreasia) ? 0 : _0x4acbef.coreasia;
    } else {
      _0x16a90c += isNaN(_0x4acbef.core) ? 0 : _0x4acbef.core;
    }
    document.getElementById("totalplayerspink").textContent = _0x16a90c + " players";
  }
  function _0x21ee44() {
    let _0x3d3709 = 0;
    if (_0x379d44) {
      _0x3d3709 += isNaN(_0x4acbef.ffausa) ? 0 : _0x4acbef.ffausa;
    } else if (_0x5a0096) {
      _0x3d3709 += isNaN(_0x4acbef.ffaasia) ? 0 : _0x4acbef.ffaasia;
    } else {
      _0x3d3709 += isNaN(_0x4acbef.ffa) ? 0 : _0x4acbef.ffa;
    }
    document.getElementById("totalplayersffa").textContent = _0x3d3709 + " players";
  }
  function _0x2dc7ed() {
    let _0xf6828e = 0;
    if (_0x379d44) {
      _0xf6828e += isNaN(_0x4acbef.twotdmusa) ? 0 : _0x4acbef.twotdmusa;
    } else if (_0x5a0096) {
      _0xf6828e += isNaN(_0x4acbef.twotdmasia) ? 0 : _0x4acbef.twotdmasia;
    } else {
      _0xf6828e += isNaN(_0x4acbef.twotdm) ? 0 : _0x4acbef.twotdm;
    }
    document.getElementById("totalplayers2tdm").textContent = _0xf6828e + " players";
  }
  function _0x2c1cd0() {
    let _0x5dbc8c = 0;
    if (_0x379d44) {
      _0x5dbc8c += isNaN(_0x4acbef.mazeusa) ? 0 : _0x4acbef.mazeusa;
    } else if (_0x5a0096) {
      _0x5dbc8c += isNaN(_0x4acbef.mazeasia) ? 0 : _0x4acbef.mazeasia;
    } else {
      _0x5dbc8c += isNaN(_0x4acbef.maze) ? 0 : _0x4acbef.maze;
    }
    document.getElementById("totalplayersmaze").textContent = _0x5dbc8c + " players";
  }
  function _0x4e39aa() {
    let _0x5ccfa6 = 0;
    if (_0x379d44) {
      _0x5ccfa6 += isNaN(_0x4acbef.fourtdmusa) ? 0 : _0x4acbef.fourtdmusa;
    } else if (_0x5a0096) {
      _0x5ccfa6 += isNaN(_0x4acbef.fourtdmasia) ? 0 : _0x4acbef.fourtdmasia;
    } else {
      _0x5ccfa6 += isNaN(_0x4acbef.fourtdm) ? 0 : _0x4acbef.fourtdm;
    }
    document.getElementById("totalplayers4tdm").textContent = _0x5ccfa6 + " players";
  }
  function _0x19505f() {
    let _0x4899f6 = 0;
    if (_0x379d44) {
      _0x4899f6 += isNaN(_0x4acbef.growthusa) ? 0 : _0x4acbef.growthusa;
    } else if (_0x5a0096) {
      _0x4899f6 += isNaN(_0x4acbef.growthasia) ? 0 : _0x4acbef.growthasia;
    } else {
      _0x4899f6 += isNaN(_0x4acbef.growth) ? 0 : _0x4acbef.growth;
    }
    document.getElementById("totalplayersgrowth").textContent = _0x4899f6 + " players";
  }
  function _0x34059f() {
    let _0x14c963 = 0;
    if (_0x379d44) {
      _0x14c963 += isNaN(_0x4acbef.hideusa) ? 0 : _0x4acbef.hideusa;
    } else if (_0x5a0096) {
      _0x14c963 += isNaN(_0x4acbef.hideasia) ? 0 : _0x4acbef.hideasia;
    } else {
      _0x14c963 += isNaN(_0x4acbef.hide) ? 0 : _0x4acbef.hide;
    }
    document.getElementById("totalplayershide").textContent = _0x14c963 + " players";
  }
  function _0x1ec5d7() {
    let _0x314303 = 0;
    if (_0x379d44) {
      _0x314303 += isNaN(_0x4acbef.trainusa) ? 0 : _0x4acbef.trainusa;
    } else if (_0x5a0096) {
      _0x314303 += isNaN(_0x4acbef.trainasia) ? 0 : _0x4acbef.trainasia;
    } else {
      _0x314303 += isNaN(_0x4acbef.train) ? 0 : _0x4acbef.train;
    }
    document.getElementById("totalplayerstrain").textContent = _0x314303 + " players";
  }
  function _0x530506() {
    let _0x179956 = 0;
    if (_0x379d44) {
      _0x179956 += isNaN(_0x4acbef.nexususa) ? 0 : _0x4acbef.nexususa;
    } else if (_0x5a0096) {
      _0x179956 += isNaN(_0x4acbef.nexusasia) ? 0 : _0x4acbef.nexusasia;
    } else {
      _0x179956 += isNaN(_0x4acbef.nexus) ? 0 : _0x4acbef.nexus;
    }
    document.getElementById("totalplayersnexus").textContent = _0x179956 + " players";
  }
  function _0x3f889a() {
    let _0x1f2705 = 0;
    if (_0x379d44) {
      _0x1f2705 += isNaN(_0x4acbef.manhuntusa) ? 0 : _0x4acbef.manhuntusa;
    } else if (_0x5a0096) {
      _0x1f2705 += isNaN(_0x4acbef.manhuntasia) ? 0 : _0x4acbef.manhuntasia;
    } else {
      _0x1f2705 += isNaN(_0x4acbef.manhunt) ? 0 : _0x4acbef.manhunt;
    }
    document.getElementById("totalplayersmanhunt").textContent = _0x1f2705 + " players";
  }
  setInterval(_0x4a3011, 500);
  setInterval(_0x1e44e9, 500);
  setInterval(_0x244c51, 500);
  setInterval(_0x1f4bfe, 500);
  setInterval(_0xeb7db5, 500);
  setInterval(_0x49f1b7, 500);
  setInterval(_0x14027f, 500);
  setInterval(_0x557eae, 500);
  setInterval(_0x21ee44, 500);
  setInterval(_0x2dc7ed, 500);
  setInterval(_0x2c1cd0, 500);
  setInterval(_0x4e39aa, 500);
  setInterval(_0x19505f, 500);
  setInterval(_0x34059f, 500);
  setInterval(_0x1ec5d7, 500);
  setInterval(_0x530506, 500);
  setInterval(_0x3f889a, 500);
  setInterval(_0x234856, 500);
  setInterval(_0x38aa31, 500);
  setInterval(_0x57237b, 500);
  _0x4a3011();
  _0x1e44e9();
  _0x234856();
  _0x38aa31();
  _0x57237b();
  function _0x16d031() {
    _0x5bae59.mockupLoading = new Promise(_0x1a82ee => {
      fetch("mockups.json").then(_0x455495 => {
        if (!_0x455495.ok) {
          throw new Error("Network response was not ok: " + _0x455495.statusText);
        }
        return _0x455495.json();
      }).then(_0x276ae3 => {
        _0x5bae59.mockups = _0x276ae3;
        console.log("Mockups loading complete.");
        _0x1a82ee();
      }).catch(_0x40a934 => {
        console.error("Error loading mockups:", _0x40a934);
        _0x1a82ee();
      });
    });
  }
  function _0x4ff510() {
    _0x3dce30.style.display = "block";
    _0x3dce30.style.top = "20%";
    setTimeout(function () {
      _0x3dce30.style.opacity = "0";
      setTimeout(function () {
        _0x3dce30.style.top = "-100px";
        _0x3dce30.style.opacity = "1";
        _0x3dce30.style.display = "none";
      }, 500);
    }, 3000);
  }
  function _0x39cf73() {
    _0x3e2eab.style.display = "block";
    _0x3e2eab.style.top = "20%";
    setTimeout(function () {
      _0x3e2eab.style.opacity = "0";
      setTimeout(function () {
        _0x3e2eab.style.top = "-100px";
        _0x3e2eab.style.opacity = "1";
        _0x3e2eab.style.display = "none";
      }, 500);
    }, 3000);
  }
  function _0x5d92a0() {
    _0xa53ca5.style.display = "block";
    _0xa53ca5.style.top = "20%";
    setTimeout(function () {
      _0xa53ca5.style.opacity = "0";
      setTimeout(function () {
        _0xa53ca5.style.top = "-100px";
        _0xa53ca5.style.opacity = "1";
        _0xa53ca5.style.display = "none";
      }, 500);
    }, 3000);
  }
  function _0x33cc09() {
    _0xb500e7.style.display = "block";
    _0xb500e7.style.top = "20%";
    setTimeout(function () {
      _0xb500e7.style.opacity = "0";
      setTimeout(function () {
        _0xb500e7.style.top = "-100px";
        _0xb500e7.style.opacity = "1";
        _0xb500e7.style.display = "none";
      }, 500);
    }, 3000);
  }
  function _0xf84cd8() {
    _0x32fde9.style.display = "block";
    _0x32fde9.style.top = "20%";
    setTimeout(function () {
      _0x32fde9.style.opacity = "0";
      setTimeout(function () {
        _0x32fde9.style.top = "-100px";
        _0x32fde9.style.opacity = "1";
        _0x32fde9.style.display = "none";
      }, 500);
    }, 3000);
  }
  function _0x35d71c() {
    var _0x1fb8c8 = document.createElement("div");
    _0x1fb8c8.id = "greyBox";
    _0x1fb8c8.innerHTML = "You do not have permissions to join this server.";
    _0x1fb8c8.style.display = "none";
    _0x1fb8c8.style.position = "fixed";
    _0x1fb8c8.style.top = "-100px";
    _0x1fb8c8.style.left = "50%";
    _0x1fb8c8.style.transform = "translateX(-50%)";
    _0x1fb8c8.style.width = "300px";
    _0x1fb8c8.style.padding = "20px";
    _0x1fb8c8.style.backgroundColor = "#363636";
    _0x1fb8c8.style.color = "white";
    _0x1fb8c8.style.fontSize = "16px";
    _0x1fb8c8.style.textAlign = "center";
    _0x1fb8c8.style.borderRadius = "10px";
    _0x1fb8c8.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
    _0x1fb8c8.style.zIndex = "1000";
    _0x1fb8c8.style.transition = "top 0.5s ease-out, opacity 0.5s ease-out";
    _0x1fb8c8.style.opacity = "1";
    document.body.appendChild(_0x1fb8c8);
    return _0x1fb8c8;
  }
  function _0x181613() {
    var _0x224978 = document.createElement("div");
    _0x224978.id = "greyBox";
    _0x224978.innerHTML = "This feature is not available yet.";
    _0x224978.style.display = "none";
    _0x224978.style.position = "fixed";
    _0x224978.style.top = "-100px";
    _0x224978.style.left = "50%";
    _0x224978.style.transform = "translateX(-50%)";
    _0x224978.style.width = "300px";
    _0x224978.style.padding = "20px";
    _0x224978.style.backgroundColor = "#363636";
    _0x224978.style.color = "white";
    _0x224978.style.fontSize = "16px";
    _0x224978.style.textAlign = "center";
    _0x224978.style.borderRadius = "10px";
    _0x224978.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
    _0x224978.style.zIndex = "1000";
    _0x224978.style.transition = "top 0.5s ease-out, opacity 0.5s ease-out";
    _0x224978.style.opacity = "1";
    document.body.appendChild(_0x224978);
    return _0x224978;
  }
  function _0x8c8e3c() {
    var _0x10886b = document.createElement("div");
    _0x10886b.id = "greyBox";
    _0x10886b.innerHTML = "No IP address detected.";
    _0x10886b.style.display = "none";
    _0x10886b.style.position = "fixed";
    _0x10886b.style.top = "-100px";
    _0x10886b.style.left = "50%";
    _0x10886b.style.transform = "translateX(-50%)";
    _0x10886b.style.width = "300px";
    _0x10886b.style.padding = "20px";
    _0x10886b.style.backgroundColor = "#363636";
    _0x10886b.style.color = "white";
    _0x10886b.style.fontSize = "16px";
    _0x10886b.style.textAlign = "center";
    _0x10886b.style.borderRadius = "10px";
    _0x10886b.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
    _0x10886b.style.zIndex = "1000";
    _0x10886b.style.transition = "top 0.5s ease-out, opacity 0.5s ease-out";
    _0x10886b.style.opacity = "1";
    document.body.appendChild(_0x10886b);
    return _0x10886b;
  }
  function _0x56a321() {
    var _0xba6ee4 = document.createElement("div");
    _0xba6ee4.id = "greyBox";
    _0xba6ee4.innerHTML = "You have been banned from the game.";
    _0xba6ee4.style.display = "none";
    _0xba6ee4.style.position = "fixed";
    _0xba6ee4.style.top = "-100px";
    _0xba6ee4.style.left = "50%";
    _0xba6ee4.style.transform = "translateX(-50%)";
    _0xba6ee4.style.width = "300px";
    _0xba6ee4.style.padding = "20px";
    _0xba6ee4.style.backgroundColor = "#363636";
    _0xba6ee4.style.color = "white";
    _0xba6ee4.style.fontSize = "16px";
    _0xba6ee4.style.textAlign = "center";
    _0xba6ee4.style.borderRadius = "10px";
    _0xba6ee4.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
    _0xba6ee4.style.zIndex = "1000";
    _0xba6ee4.style.transition = "top 0.5s ease-out, opacity 0.5s ease-out";
    _0xba6ee4.style.opacity = "1";
    document.body.appendChild(_0xba6ee4);
    return _0xba6ee4;
  }
  function _0x446672() {
    var _0x2a658c = document.createElement("div");
    _0x2a658c.id = "greyBox";
    _0x2a658c.innerHTML = "You have been temporarily banned from the game.";
    _0x2a658c.style.display = "none";
    _0x2a658c.style.position = "fixed";
    _0x2a658c.style.top = "-100px";
    _0x2a658c.style.left = "50%";
    _0x2a658c.style.transform = "translateX(-50%)";
    _0x2a658c.style.width = "300px";
    _0x2a658c.style.padding = "20px";
    _0x2a658c.style.backgroundColor = "#363636";
    _0x2a658c.style.color = "white";
    _0x2a658c.style.fontSize = "16px";
    _0x2a658c.style.textAlign = "center";
    _0x2a658c.style.borderRadius = "10px";
    _0x2a658c.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
    _0x2a658c.style.zIndex = "1000";
    _0x2a658c.style.transition = "top 0.5s ease-out, opacity 0.5s ease-out";
    _0x2a658c.style.opacity = "1";
    document.body.appendChild(_0x2a658c);
    return _0x2a658c;
  }
  var _0x3dce30 = _0x35d71c();
  var _0xa53ca5 = _0x8c8e3c();
  var _0xb500e7 = _0x56a321();
  var _0x32fde9 = _0x446672();
  var _0x3e2eab = _0x181613();
  window.onload = async () => {
    
    window.serverAdd = "" || "arras2railway1-production.up.railway.app";
    if (window.serverAdd !== "") {
      _0x5bae59.mockupLoading = new Promise(_0x352dc4 => {
        fetch("mockups.json").then(_0xa64f49 => {
          if (!_0xa64f49.ok) {
            throw new Error("Network response was not ok: " + _0xa64f49.statusText);
          }
          return _0xa64f49.json();
        }).then(_0x4b0f39 => {
          _0x5bae59.mockups = _0x4b0f39;
          console.log("Mockups loading complete.");
          _0x352dc4();
        }).catch(_0x3aab2a => {
          console.error("Error loading mockups:", _0x3aab2a);
          _0x352dc4();
        });
      });
    }
  


async function loadWasm() {
    try {
        // Fetch the WebAssembly file from GitHub
        const wasmResponse = await fetch('https://raw.githubusercontent.com/LORDARRAS3000TESTER/beta.arras2.io/main/public/game_logic.wasm');
        
        // Check if the fetch request was successful
        if (!wasmResponse.ok) {
            console.error('Failed to load WASM file:', wasmResponse.statusText);
            return;
        }

        // Convert the response to an array buffer
        const wasmArrayBuffer = await wasmResponse.arrayBuffer();
        
        // Instantiate the WebAssembly module
        const wasmModule = await WebAssembly.instantiate(wasmArrayBuffer);
        const wasmInstance = wasmModule.instance;

        // Log the exports of the WebAssembly module to the console
        console.log('WebAssembly Instance:', wasmInstance);

        // Call a function from the WebAssembly module (e.g., 'add')
        // Ensure this function exists in your WASM module and replace 'add' with the correct function name
        if (wasmInstance.exports.add) {
            const result = wasmInstance.exports.add(5, 3); // Example usage
            console.log('Wasm Result (5 + 3):', result);
        } else {
            console.log('The "add" function does not exist in the WASM module');
        }

    } catch (error) {
        // Log errors in case of failure
        console.error("Error loading WebAssembly:", error);
    }
}

// Load WebAssembly when the page is loaded
loadWasm();


    const _0x1f0ec0 = document.getElementById("startMenuWrapper");
    const _0x8a9fa1 = document.getElementById("startButton");
    const _0x4e5fec = (_0x32ad5f, _0x3a4863) => {
      const _0x2939e6 = document.querySelector(_0x32ad5f);
      _0x2939e6.onclick = () => {
        window.serverAdd = _0x3a4863;
        _0x16d031();
        localStorage.setItem("lastClickedButton", _0x32ad5f);
      };
    };
    const _0x43d635 = _0x5b8ce5 => {
      _0x379d44 = false;
      _0x5a0096 = false;
      if (_0x5b8ce5 === "greenreal") {
        _0x4e5fec(".red-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30004.app.github.dev");
        _0x4e5fec(".yellow-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30002.app.github.dev");
        _0x4e5fec(".blue-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30000.app.github.dev");
        _0x4e5fec(".green-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30003.app.github.dev");
        _0x4e5fec(".brown-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30008.app.github.dev");
        _0x4e5fec(".pink-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30009.app.github.dev");
        _0x4e5fec(".new-ffa-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30005.app.github.dev");
        _0x4e5fec(".new-2tdm-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30001.app.github.dev");
        _0x4e5fec(".new-maze-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30006.app.github.dev");
        _0x4e5fec(".new-4tdm-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30007.app.github.dev");
        _0x4e5fec(".new-growth-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30010.app.github.dev");
        _0x4e5fec(".new-hide-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30011.app.github.dev");
        _0x4e5fec(".new-train-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30012.app.github.dev");
        _0x4e5fec(".new-nexus-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30013.app.github.dev");
        _0x4e5fec(".new-manhunt-button", "super-duper-space-happiness-97jgjjj4gjq72xwqx-30014.app.github.dev");
      } else if (_0x5b8ce5 === "usareal") {
        _0x379d44 = true;
        _0x4e5fec(".red-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30004.app.github.dev");
        _0x4e5fec(".yellow-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30002.app.github.dev");
        _0x4e5fec(".blue-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30000.app.github.dev");
        _0x4e5fec(".green-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30003.app.github.dev");
        _0x4e5fec(".brown-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30008.app.github.dev");
        _0x4e5fec(".pink-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30009.app.github.dev");
        _0x4e5fec(".new-ffa-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30005.app.github.dev");
        _0x4e5fec(".new-2tdm-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30001.app.github.dev");
        _0x4e5fec(".new-maze-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30006.app.github.dev");
        _0x4e5fec(".new-4tdm-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30007.app.github.dev");
        _0x4e5fec(".new-growth-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30010.app.github.dev");
        _0x4e5fec(".new-hide-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30011.app.github.dev");
        _0x4e5fec(".new-train-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30012.app.github.dev");
        _0x4e5fec(".new-nexus-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30013.app.github.dev");
        _0x4e5fec(".new-manhunt-button", "sturdy-guide-jjqpq7qxj4vjf54j9-30014.app.github.dev");
      } else if (_0x5b8ce5 === "asiareal") {
        _0x5a0096 = true;
        _0x4e5fec(".red-button", "cautious-invention-v6q79rq9xr57hwqww-30004.app.github.dev");
        _0x4e5fec(".yellow-button", "cautious-invention-v6q79rq9xr57hwqww-30002.app.github.dev");
        _0x4e5fec(".blue-button", "cautious-invention-v6q79rq9xr57hwqww-30000.app.github.dev");
        _0x4e5fec(".green-button", "cautious-invention-v6q79rq9xr57hwqww-30003.app.github.dev");
        _0x4e5fec(".brown-button", "cautious-invention-v6q79rq9xr57hwqww-30008.app.github.dev");
        _0x4e5fec(".pink-button", "cautious-invention-v6q79rq9xr57hwqww-30009.app.github.dev");
        _0x4e5fec(".new-ffa-button", "cautious-invention-v6q79rq9xr57hwqww-30005.app.github.dev");
        _0x4e5fec(".new-2tdm-button", "cautious-invention-v6q79rq9xr57hwqww-30001.app.github.dev");
        _0x4e5fec(".new-maze-button", "cautious-invention-v6q79rq9xr57hwqww-30006.app.github.dev");
        _0x4e5fec(".new-4tdm-button", "cautious-invention-v6q79rq9xr57hwqww-30007.app.github.dev");
        _0x4e5fec(".new-growth-button", "cautious-invention-v6q79rq9xr57hwqww-30010.app.github.dev");
        _0x4e5fec(".new-hide-button", "cautious-invention-v6q79rq9xr57hwqww-30011.app.github.dev");
        _0x4e5fec(".new-train-button", "cautious-invention-v6q79rq9xr57hwqww-30012.app.github.dev");
        _0x4e5fec(".new-nexus-button", "cautious-invention-v6q79rq9xr57hwqww-30013.app.github.dev");
        _0x4e5fec(".new-manhunt-button", "cautious-invention-v6q79rq9xr57hwqww-30014.app.github.dev");
      }
    };
    const _0x2f46e8 = document.querySelector(".greenreal-button");
    const _0x36ce43 = document.querySelector(".usareal-button");
    const _0x6ce804 = document.querySelector(".asiareal-button");
    _0x2f46e8.onclick = () => {
      _0x43d635("greenreal");
      localStorage.setItem("lastRegionButton", ".greenreal-button");
      const _0x412fe3 = document.querySelector(".red-button");
      if (_0x412fe3) {
        _0x412fe3.click();
      }
    };
    _0x36ce43.onclick = () => {
      _0x43d635("usareal");
      localStorage.setItem("lastRegionButton", ".usareal-button");
      const _0x4677e5 = document.querySelector(".red-button");
      if (_0x4677e5) {
        _0x4677e5.click();
      }
    };
    _0x6ce804.onclick = () => {
      _0x43d635("asiareal");
      localStorage.setItem("lastRegionButton", ".asiareal-button");
      const _0xfa5ffd = document.querySelector(".red-button");
      if (_0xfa5ffd) {
        _0xfa5ffd.click();
      }
    };
    const _0xe99fe6 = localStorage.getItem("lastRegionButton");
    if (_0xe99fe6) {
      const _0x4fb4ce = document.querySelector(_0xe99fe6);
      if (_0x4fb4ce) {
        _0x4fb4ce.click();
      } else {
        const _0x4b0b24 = document.querySelector(".greenreal-button");
        if (_0x4b0b24) {
          _0x4b0b24.click();
        }
      }
    } else {
      const _0x548e22 = document.querySelector(".greenreal-button");
      if (_0x548e22) {
        _0x548e22.click();
      }
    }
    const _0x2953c7 = localStorage.getItem("lastClickedButton");
    if (_0x2953c7) {
      const _0x52adf0 = document.querySelector(_0x2953c7);
      if (_0x52adf0) {
        _0x52adf0.click();
      } else {
        const _0x9f88cd = document.querySelector(".red-button");
        if (_0x9f88cd) {
          _0x9f88cd.click();
        }
      }
    } else {
      const _0xa717d3 = document.querySelector(".red-button");
      if (_0xa717d3) {
        _0xa717d3.click();
      }
    }
    var _0x43fcc2 = document.getElementById("premiumButton");
    _0x43fcc2.onclick = () => {
      _0x39cf73();
    };
    var _0x2544ec = document.querySelector(".beige-button");
    const _0x351bbb = "88.126.207.146";
    const _0x517366 = ["127.0.0.1", "::1"];
    fetch("https://webserverip.onrender.com/api/getPublicIP").then(_0x2108ce => _0x2108ce.json()).then(_0x1c1e13 => {
      const _0x44e141 = _0x1c1e13.ip;
      if (_0x44e141 === _0x351bbb || _0x517366.includes(_0x44e141)) {
        if (document.getElementById("antivpn").checked) {
          _0x2544ec.onclick = () => {
            window.serverAdd = "arras2railway1-production.up.railway.app";
            _0x33cc09();
            _0x16d031();
          };
        } else if (document.getElementById("antivpn1").checked) {
          _0x2544ec.onclick = () => {
            window.serverAdd = "arras2railway1-production.up.railway.app";
            _0xf84cd8();
            _0x16d031();
          };
        } else {
          _0x2544ec.onclick = () => {
            window.serverAdd = "localhost:3009";
            _0x16d031();
          };
        }
      } else {
        _0x2544ec.onclick = () => {
          _0x4ff510();
        };
      }
    }).catch(_0x241298 => {
      console.error("Error fetching IP address:", _0x241298);
      _0x5d92a0();
    });
    if (Array.isArray(window.serverAdd)) {
      window.isMultiserver = true;
      const _0x1249d3 = window.serverAdd;
      let _0x27ee15 = document.getElementById("serverSelector");
      let _0x5bd210 = document.createElement("tbody");
      _0x27ee15.style.display = "block";
      document.getElementById("startMenuSlidingContent").removeChild(document.getElementById("serverName"));
      _0x27ee15.classList.add("serverSelector");
      _0x27ee15.appendChild(_0x5bd210);
      let _0x310081 = {
        classList: {
          contains: () => false
        }
      };
      for (let _0x34433f of _0x1249d3) {
        try {
          const _0x16ac0c = document.createElement("tr");
          const _0xffc20b = document.createElement("td");
          _0xffc20b.textContent = _0x34433f.gameMode + " | " + _0x34433f.players + " Players";
          _0xffc20b.onclick = () => {
            if (_0x310081.classList.contains("selected")) {
              _0x310081.classList.remove("selected");
            }
            _0x16ac0c.classList.add("selected");
            _0x310081 = _0x16ac0c;
            window.serverAdd = _0x34433f.ip;
          };
          _0x16ac0c.appendChild(_0xffc20b);
          _0x5bd210.appendChild(_0x16ac0c);
          _0x310081 = _0x16ac0c;
        } catch (_0x2cff5b) {
          console.log(_0x2cff5b);
        }
      }
      if (Array.from(_0x310081.children)[0].onclick) {
        Array.from(_0x310081.children)[0].onclick();
      }
    } else {
      document.querySelector(".beige-button").style.opacity = 1;
      _0x8e966f.pullJSON("gamemodeData").then(_0x501b7 => {
        document.getElementById("serverName").innerHTML = "<h4 class=\"nopadding\">" + _0x501b7.gameMode + " | " + _0x501b7.players + " Players</h4>";
      });
      setTimeout(() => {
document.getElementById("startButton").textContent = "PLAY";
        setTimeout(() => {
          document.getElementById("applyButton").click();
        }, 0);
      });
    }
    _0x8e966f.retrieveFromLocalStorage("playerNameInput");
    _0x8e966f.retrieveFromLocalStorage("optScreenshotMode");
    _0x8e966f.retrieveFromLocalStorage("chk3d");
    _0x8e966f.retrieveFromLocalStorage("optFancy");
    _0x8e966f.retrieveFromLocalStorage("coloredHealthbars");
    _0x8e966f.retrieveFromLocalStorage("centerTank");
    _0x8e966f.retrieveFromLocalStorage("optCustom");
    _0x8e966f.retrieveFromLocalStorage("betterperformance");
    _0x8e966f.retrieveFromLocalStorage("optColors");
    _0x8e966f.retrieveFromLocalStorage("optColorsChange");
    _0x8e966f.retrieveFromLocalStorage("optNoPointy");
    _0x8e966f.retrieveFromLocalStorage("optBorders");
    _0x8e966f.retrieveFromLocalStorage("optBordersChange");
    _0x8e966f.retrieveFromLocalStorage("antivpn");
    _0x8e966f.retrieveFromLocalStorage("antivpn1");
    _0x8e966f.retrieveFromLocalStorage("seperatedHealthbars");
    _0x8e966f.retrieveFromLocalStorage("high");
    var _0x36c8c4 = document.getElementById("chk3d");
    _0x36c8c4.addEventListener("change", function () {
      localStorage.setItem("chk3d", _0x36c8c4.checked);
    });
    var _0x350d33 = localStorage.getItem("chk3d");
    if (_0x350d33 !== null) {
      _0x36c8c4.checked = _0x350d33 === "true";
    }
    var _0x3c4fcf = document.getElementById("betterperformance");
    _0x3c4fcf.addEventListener("change", function () {
      localStorage.setItem("betterperformance", _0x3c4fcf.checked);
    });
    var _0x1a8c4d = localStorage.getItem("betterperformance");
    if (_0x1a8c4d !== null) {
      _0x3c4fcf.checked = _0x1a8c4d === "true";
    }
    if (document.getElementById("optColors").value === "") {
      document.getElementById("optColors").value = "DiepIO";
    }
    if (document.getElementById("optBorders").value === "") {
      document.getElementById("optBorders").value = "normal";
    }
    if (document.getElementById("antivpn1").checked || document.getElementById("antivpn").checked) {
      document.getElementById("startButton").onclick = () => _0x33cc09();
    } else {
let _0x4fe30b = false;

document.getElementById("startButton").onclick = () => {
    if (!_0x4fe30b) {
        _0x4fe30b = true;
        document.getElementById("startButton").textContent = "Starting...";
        document.getElementById("startButton").style.background = "linear-gradient(0deg,#45f5d5 40%,#37c9ae 40%)";
        setTimeout(() => {
            _0x4a46f0();
            _0x4fe30b = false;
        }, 200);
    }
};
document.onkeydown = _0x2575e7 => {
  var _0x467973 = _0x2575e7.which || _0x2575e7.keyCode;
  if (_0x467973 === _0x5bae59.KEY_ENTER && 
      !document.getElementById("antivpn1").checked && 
      !document.getElementById("antivpn").checked && 
      !_0x5bae59.connecting && 
      (_0x5bae59.dead || !_0x5bae59.gameStart) && 
      !_0x4fe30b) {
      
      _0x4fe30b = true;
      document.getElementById("startButton").textContent = "Starting...";
      document.getElementById("startButton").style.background = "linear-gradient(0deg,#45f5d5 40%,#37c9ae 40%)";
      setTimeout(() => {
          _0x4a46f0();
          _0x4fe30b = false;
      }, 200);
  }
};
    };

    window.addEventListener("resize", _0x1bd24d);
    _0x1bd24d();
  };
  function _0x1bd24d() {
    let _0x1cccd9 = window.devicePixelRatio;
    if (!_0x2c1aed.graphical.fancyAnimations) {
      if (_0x5bae59.nopixel) {} else {
        _0x1cccd9 *= 0.5;
      }
    }
    if (_0x2c1aed.graphical.highResolution) {
      _0x1cccd9 *= 2.5;
    }
    _0x5bae59.screenWidth = window.innerWidth * _0x1cccd9;
    _0x5bae59.screenHeight = window.innerHeight * _0x1cccd9;
    _0x486c90.resize(_0x5bae59.screenWidth, _0x5bae59.screenHeight);
    _0x5bae59.ratio = _0x1cccd9;
    _0x5bae59.screenSize = Math.min(1920, Math.max(window.innerWidth, 2280));
  }
  window.resizeEvent = _0x1bd24d;
  window.canvas = new _0x1b49b4();
  var _0x486c90 = window.canvas.cv;
  var _0x36be89 = _0x486c90.getContext("2d");
  var _0xd07fe1 = document.createElement("canvas");
  var _0x19776f = _0xd07fe1.getContext("2d");
  _0x19776f.imageSmoothingEnabled = false;
  function _0x59cf04(_0x2b9e47, _0xa3f238, _0x1d6339 = 3, _0x35d405 = 0.025) {
    let _0x2ff9be = Date.now();
    let _0xc95d87 = _0x2b9e47;
    let _0x20804f = _0x2b9e47;
    return {
      set: _0x4bad32 => {
        if (_0x2b9e47 !== _0x4bad32) {
          _0x20804f = _0xc95d87;
          _0x2b9e47 = _0x4bad32;
          _0x2ff9be = Date.now();
        }
      },
      get: (_0x24ce33 = false) => {
        _0xc95d87 = _0x8e966f.lerp(_0xc95d87, _0x2b9e47, _0x35d405);
        if (Math.abs(_0x2b9e47 - _0xc95d87) < 0.1 && _0x24ce33) {
          _0xc95d87 = _0x2b9e47;
        }
        return _0xc95d87;
      }
    };
  }
  _0x5bae59.player = {
    vx: 0,
    vy: 0,
    lastvx: 0,
    lastvy: 0,
    renderx: _0x5bae59.player.cx,
    rendery: _0x5bae59.player.cy,
    lastx: _0x5bae59.player.x,
    lasty: _0x5bae59.player.y,
    cx: 0,
    cy: 0,
    target: window.canvas.target,
    name: "",
    lastUpdate: 0,
    time: 0,
    nameColor: "#ffffff"
  };
  function _0x4a46f0() {
    const _0x1faaa4 = [document.querySelector("#optScreenshotMode"), document.querySelector("#optNoPointy"), document.querySelector("#savesettingstext"), document.querySelector("#chk3d"), document.querySelector("#forceapply"), document.querySelector("#optFancy"), document.querySelector("#coloredHealthbars"), document.querySelector("#seperatedHealthbars"), document.querySelector("#centerTank"), document.querySelector("#betterperformance"), document.querySelector("#high")];
    const _0x68746c = _0x1faaa4.map(_0x36fa91 => _0x36fa91.checked);
    setTimeout(() => {
      _0x1faaa4.forEach(_0x2699ce => {
        _0x2699ce.checked = false;
        _0x2699ce.dataset.prevChecked = _0x68746c[_0x1faaa4.indexOf(_0x2699ce)];
      });
    }, 100);
    setTimeout(() => {
      _0x1faaa4.forEach(_0xbde086 => {
        if (_0xbde086.dataset.prevChecked === "true") {
          _0xbde086.checked = true;
          _0x2c1aed.graphical.screenshotMode = document.querySelector("#optScreenshotMode").checked;
          _0x2c1aed.graphical.pointy = !document.querySelector("#optNoPointy").checked;
          document.querySelector("#forceapply").checked = true;
          _0x2c1aed.graphical.fancyAnimations = !document.querySelector("#chk3d").checked;
          _0x5bae59.optFancy = document.querySelector("#optFancy").checked;
          _0x2c1aed.graphical.coloredHealthbars = document.querySelector("#coloredHealthbars").checked;
          _0x2c1aed.graphical.seperatedHealthbars = document.querySelector("#seperatedHealthbars").checked;
          _0x2c1aed.graphical.centerTank = document.querySelector("#centerTank").checked;
          _0x5bae59.betternofcway = document.querySelector("#betterperformance").checked;
          _0x2c1aed.graphical.highResolution = document.querySelector("#high").checked;
          document.getElementById("applyButton").click();
        }
      });
    }, 200);
    _0x8e966f.submitToLocalStorage("centerTank");
    _0x8e966f.submitToLocalStorage("optBorders");
    _0x8e966f.submitToLocalStorage("optNoPointy");
    _0x8e966f.submitToLocalStorage("chk3d");
    _0x8e966f.submitToLocalStorage("optCustom");
    _0x8e966f.submitToLocalStorage("optScreenshotMode");
    _0x8e966f.submitToLocalStorage("coloredHealthbars");
    _0x8e966f.submitToLocalStorage("seperatedHealthbars");
    _0x8e966f.submitToLocalStorage("high");
    _0x2c1aed.graphical.centerTank = document.getElementById("centerTank").checked;
    _0x2c1aed.graphical.pointy = !document.getElementById("optNoPointy").checked;
    _0x2c1aed.graphical.screenshotMode = document.getElementById("optScreenshotMode").checked;
    _0x2c1aed.graphical.coloredHealthbars = document.getElementById("coloredHealthbars").checked;
    _0x2c1aed.graphical.seperatedHealthbars = document.getElementById("seperatedHealthbars").checked;
    switch (document.getElementById("optBorders").value) {
      case "normal":
        _0x2c1aed.graphical.darkBorders = _0x2c1aed.graphical.neon = false;
        break;
      case "high":
        _0x2c1aed.graphical.highResolution = true;
        break;
      case "dark":
        _0x2c1aed.graphical.darkBorders = true;
        _0x2c1aed.graphical.neon = false;
        break;
      case "glass":
        _0x2c1aed.graphical.darkBorders = false;
        _0x2c1aed.graphical.neon = true;
        break;
      case "neon":
        _0x2c1aed.graphical.darkBorders = _0x2c1aed.graphical.neon = true;
        break;
    }
    _0x8e966f.submitToLocalStorage("optColors");
    _0x8e966f.submitToLocalStorage("optColorsChange");
    _0x8e966f.submitToLocalStorage("optBordersChange");
    let _0x2ead54 = document.getElementById("optColors").value;
    _0x53f6d6 = _0x24df39[_0x2ead54 === "" ? "DiepIO" : _0x2ead54];
    if (_0x2ead54 == "custom") {
      let _0x212496 = document.getElementById("optCustom").value;
      _0x53f6d6 = parseTheme(_0x212496).content;
      _0x8e966f.submitToLocalStorage("optCustom");
    }
    const _0x405bb3 = document.querySelector("#applyButton");
    _0x405bb3.addEventListener("click", () => {
      const _0x52094c = document.querySelector("#optScreenshotMode");
      const _0x17494b = document.querySelector("#optNoPointy");
      const _0x32c389 = document.querySelector("#savesettingstext");
      const _0x42d105 = document.querySelector("#chk3d");
      const _0x30d026 = document.querySelector("#forceapply");
      _0x30d026.checked;
      const _0x241696 = document.querySelector("#optFancy");
      const _0x41a202 = document.querySelector("#coloredHealthbars");
      const _0x396702 = document.querySelector("#seperatedHealthbars");
      const _0x2f985e = document.querySelector("#centerTank");
      const _0x128cbd = document.querySelector("#betterperformance");
      const _0x5d5bce = document.querySelector("#high");
      let _0x1ef76d = document.getElementById("optColorsChange").value;
      _0x53f6d6 = _0x24df39[_0x1ef76d === "" ? "DiepIO" : _0x1ef76d];
      _0x289a34.color = _0x53f6d6;
      _0x289a34.colorCache = {};
      switch (document.getElementById("optBordersChange").value) {
        case "normal":
          _0x2c1aed.graphical.darkBorders = _0x2c1aed.graphical.neon = false;
          break;
        case "dark":
          _0x2c1aed.graphical.darkBorders = true;
          _0x2c1aed.graphical.neon = false;
          break;
        case "glass":
          _0x2c1aed.graphical.darkBorders = false;
          _0x2c1aed.graphical.neon = true;
          break;
        case "neon":
          _0x2c1aed.graphical.darkBorders = _0x2c1aed.graphical.neon = true;
          break;
      }
      _0x52094c.addEventListener("change", () => {
        _0x2c1aed.graphical.screenshotMode = _0x52094c.checked;
      });
      _0x17494b.addEventListener("change", () => {
        _0x2c1aed.graphical.pointy = !_0x17494b.checked;
      });
      _0x241696.addEventListener("change", () => {
        _0x5bae59.optFancy = _0x241696.checked;
      });
      _0x42d105.addEventListener("change", () => {
        _0x2c1aed.graphical.fancyAnimations = !_0x42d105.checked;
      });
      _0x41a202.addEventListener("change", () => {
        _0x2c1aed.graphical.coloredHealthbars = _0x41a202.checked;
      });
      _0x396702.addEventListener("change", () => {
        _0x2c1aed.graphical.seperatedHealthbars = _0x396702.checked;
      });
      _0x2f985e.addEventListener("change", () => {
        _0x2c1aed.graphical.centerTank = _0x2f985e.checked;
      });
      _0x128cbd.addEventListener("change", () => {
        _0x5bae59.betternofcway = _0x128cbd.checked;
      });
      _0x5d5bce.addEventListener("change", () => {
        _0x2c1aed.graphical.highResolution = _0x5d5bce.checked;
      });
      _0x8e966f.submitToLocalStorage("optScreenshotMode", _0x52094c);
      _0x8e966f.submitToLocalStorage("optNoPointy", _0x17494b);
      _0x8e966f.submitToLocalStorage("optColorsChange", _0x1ef76d);
      _0x8e966f.submitToLocalStorage("optBordersChange");
      _0x8e966f.submitToLocalStorage("optFancy", _0x241696);
      _0x8e966f.submitToLocalStorage("chk3d", _0x42d105);
      _0x8e966f.submitToLocalStorage("forceapply", _0x30d026);
      _0x8e966f.submitToLocalStorage("coloredHealthbars", _0x41a202);
      _0x8e966f.submitToLocalStorage("seperatedHealthbars", _0x396702);
      _0x8e966f.submitToLocalStorage("centerTank", _0x2f985e);
      _0x8e966f.submitToLocalStorage("betterperformance", _0x128cbd);
      _0x8e966f.submitToLocalStorage("high", _0x5d5bce);
      _0x32c389.textContent = "Options applied.";
      setTimeout(() => {
        _0x32c389.textContent = "";
      }, 2000);
      _0x1bd24d();
    });
    _0x289a34.color = _0x53f6d6;
    let _0x14014b = document.getElementById("playerNameInput");
    _0x8e966f.submitToLocalStorage("playerNameInput");
    _0x5bae59.playerName = _0x5bae59.player.name = _0x14014b.value;
    _0x5bae59.screenWidth = window.innerWidth;
    _0x5bae59.screenHeight = window.innerHeight;
    document.getElementById("startMenuWrapper").classList.add("startMenuWrapper");
    document.body.appendChild(document.createElement("style")).appendChild(document.createTextNode("#settingsButton{visibility:visible}"));
    document.getElementById("gameAreaWrapper").style.opacity = 1;
    _0x5bae59.needsReset = false;
    setTimeout(() => {
      document.getElementById("startMenuWrapper").style.display = "none";
      document.getElementById("startMenuWrapper").style.maxHeight = "0px";
    }, 500);
    if (!_0x5bae59.socket || !_0x5bae59.socket.cmd || !_0x5bae59.socket.cmd.getMotion) {
      _0x5bae59.socket = _0x7ea282(3000);
    }
    if (_0x5bae59.needsReset) {
      _0x5bae59.animLoopHandle = true;
      setInterval(() => {
        _0x4a3011();
        _0x1e44e9();
        _0x234856();
        _0x38aa31();
        _0x57237b();
      }, 500);
    } else if (_0x5bae59.tryingtoreconnect) {
      setInterval(() => {
        _0x4a3011();
        _0x1e44e9();
        _0x234856();
        _0x38aa31();
        _0x57237b();
      }, 500);
    }
    if (!_0x5bae59.animLoopHandle) {
      _0x341df3();
    }
    window.canvas.socket = _0x5bae59.socket;
    if (!_0x5bae59.needsReset) {
      setInterval(() => _0x53b24e.iterate(_0x5bae59.socket.cmd.getMotion()), 1000 / 30);
    }
    document.getElementById("gameCanvas").focus();
    window.onbeforeunload = () => true;
  }
  function _0x5ddb16(_0x2db7d1, _0x27b3da) {
    _0x36be89.fillStyle = _0x2db7d1;
    _0x36be89.globalAlpha = _0x27b3da;
    _0x36be89.fillRect(0, 0, _0x5bae59.screenWidth, _0x5bae59.screenHeight);
    _0x36be89.globalAlpha = 1;
  }
  function _0x470092(_0x16c844) {
    let _0x40f683 = _0x16c844.split();
    let _0x5ac42a = [];
    if (!(_0x40f683.length & 1)) {
      _0x40f683.unshift("");
    }
    while (_0x40f683.length) {
      let _0x120049 = _0x40f683.shift();
      if (!_0x40f683.length) {
        _0x5ac42a.push(_0x120049);
      } else if (_0x40f683[1]) {
        _0x5ac42a.push(_0x120049, _0x40f683.shift());
      } else {
        _0x40f683.shift();
      }
    }
    return _0x5ac42a;
  }
  const _0x5c2e6f = (_0x55494e, _0x1839fb, _0x52ba18 = false) => {
    _0x1839fb += _0x2c1aed.graphical.fontSizeBoost;
    _0x36be89.font = "bold " + _0x1839fb + "px Ubuntu";
    let _0x4c7037 = _0x36be89.measureText(_0x470092(_0x55494e).reduce((_0x454dcf, _0x3fd1af, _0x14d1db) => _0x14d1db & 1 ? _0x454dcf : _0x454dcf + _0x3fd1af, ""));
    if (_0x52ba18) {
      return {
        width: _0x4c7037.width,
        height: _0x1839fb
      };
    } else {
      return _0x4c7037.width;
    }
  };
  function _0x4b1590(_0x2cde80, _0x2d74bd, _0x5f2a91, _0x220bfc, _0x456781, _0x1deaed = "left", _0x966096 = false, _0x15a1e7 = 1, _0x333b5a = true, _0x38e752 = _0x36be89) {
    _0x220bfc += _0x2c1aed.graphical.fontSizeBoost;
    let _0x15ba3e = _0x220bfc / 5;
    let _0x24d3a1 = 1;
    let _0x534d7b = _0x470092(_0x2cde80);
    let _0x2e6d67 = _0x534d7b.reduce((_0x7c7797, _0x1b40d7, _0x4192eb) => _0x4192eb & 1 ? _0x7c7797 : _0x7c7797 + _0x1b40d7, "");
    if (_0x38e752.getTransform) {
      _0x24d3a1 = _0x36be89.getTransform().d;
      _0x15ba3e *= _0x24d3a1;
    }
    if (_0x24d3a1 !== 1) {
      _0x220bfc *= _0x24d3a1;
    }
    _0x38e752.font = "bold " + _0x220bfc + "px Ubuntu";
    let _0x2fc349 = _0x15ba3e;
    let _0x58d092 = (_0x220bfc + _0x15ba3e * 2) / 2;
    let _0x45090a = 0;
    switch (_0x1deaed) {
      case "center":
        _0x45090a = 0.5;
        break;
      case "right":
        _0x45090a = 1;
    }
    if (_0x45090a) {
      _0x2fc349 -= _0x36be89.measureText(_0x2e6d67).width * _0x45090a;
    }
    _0x38e752.lineWidth = (_0x220bfc + 1) / _0x2c1aed.graphical.fontStrokeRatio;
    _0x38e752.textAlign = "left";
    _0x38e752.textBaseline = "middle";
    _0x38e752.strokeStyle = _0x53f6d6.black;
    _0x38e752.fillStyle = _0x456781;
    _0x38e752.save();
    _0x38e752.lineCap = _0x2c1aed.graphical.miterText ? "miter" : "round";
    _0x38e752.lineJoin = _0x2c1aed.graphical.miterText ? "miter" : "round";
    if (_0x24d3a1 !== 1) {
      _0x38e752.scale(1 / _0x24d3a1, 1 / _0x24d3a1);
    }
    _0x2fc349 += _0x2d74bd * _0x24d3a1 - _0x220bfc / 4;
    _0x58d092 += _0x5f2a91 * _0x24d3a1 - _0x58d092 * (_0x966096 ? 1.05 : 1.5);
    if (_0x333b5a) {
      _0x38e752.strokeText(_0x2e6d67, _0x2fc349, _0x58d092);
    }
    for (let _0x427151 = 0; _0x427151 < _0x534d7b.length; _0x427151++) {
      let _0x3d0861 = _0x534d7b[_0x427151];
      if (_0x427151 & 1) {
        if (_0x3d0861 === "reset") {
          _0x38e752.fillStyle = _0x456781;
        } else {
          if (!isNaN(_0x3d0861)) {
            _0x3d0861 = parseInt(_0x3d0861);
          }
          _0x3d0861 = _0x289a34.getColor(_0x3d0861) ?? _0x3d0861;
        }
        _0x38e752.fillStyle = _0x3d0861;
      } else {
        if (_0x427151) {
          _0x2fc349 += _0x36be89.measureText(_0x534d7b[_0x427151 - 2] + _0x3d0861).width - _0x36be89.measureText(_0x3d0861).width;
        }
        _0x38e752.fillText(_0x3d0861, _0x2fc349, _0x58d092);
      }
    }
    _0x38e752.restore();
  }
  function _0x9a137e(_0x38cdd5, _0x219caa, _0x5e881d, _0x557b7d, _0x3778ad, _0x2bd16c = "left", _0x4d670f = false, _0x321b44 = 1, _0x182b42 = true, _0x2261f8 = _0x36be89) {
    const _0x25e6d2 = window.devicePixelRatio || 1;
    if (_0x2261f8.canvas.width !== _0x2261f8.canvas.clientWidth * _0x25e6d2 || _0x2261f8.canvas.height !== _0x2261f8.canvas.clientHeight * _0x25e6d2) {
      _0x2261f8.canvas.width = _0x2261f8.canvas.clientWidth * _0x25e6d2;
      _0x2261f8.canvas.height = _0x2261f8.canvas.clientHeight * _0x25e6d2;
      _0x2261f8.scale(_0x25e6d2, _0x25e6d2);
    }
    _0x557b7d += _0x2c1aed.graphical.fontSizeBoost;
    let _0x3d02bb = _0x557b7d / 5;
    let _0x565192 = 1;
    let _0x180003 = _0x470092(_0x38cdd5);
    let _0x2d8e29 = _0x180003.reduce((_0x43793a, _0x1e1c79, _0x41386e) => _0x41386e & 1 ? _0x43793a : _0x43793a + _0x1e1c79, "");
    if (_0x2261f8.getTransform) {
      _0x565192 = _0x2261f8.getTransform().d;
      _0x3d02bb *= _0x565192;
    }
    if (_0x565192 !== 1) {
      _0x557b7d *= _0x565192;
    }
    _0x2261f8.font = "bold " + _0x557b7d + "px Ubuntu";
    let _0x13247b = _0x3d02bb;
    let _0x431f06 = (_0x557b7d + _0x3d02bb * 2) / 2;
    let _0x4a7818 = 0;
    switch (_0x2bd16c) {
      case "center":
        _0x4a7818 = 0.5;
        break;
      case "right":
        _0x4a7818 = 1;
    }
    if (_0x4a7818) {
      _0x13247b -= _0x2261f8.measureText(_0x2d8e29).width * _0x4a7818;
    }
    _0x2261f8.lineWidth = (_0x557b7d - 1.5) / _0x2c1aed.graphical.fontStrokeRatio;
    _0x2261f8.textAlign = "left";
    _0x2261f8.textBaseline = "middle";
    _0x2261f8.strokeStyle = _0x53f6d6.black;
    _0x2261f8.fillStyle = _0x3778ad;
    _0x2261f8.save();
    _0x2261f8.lineCap = _0x2c1aed.graphical.miterText ? "miter" : "round";
    _0x2261f8.lineJoin = _0x2c1aed.graphical.miterText ? "miter" : "round";
    if (_0x565192 !== 1) {
      _0x2261f8.scale(1 / _0x565192, 1 / _0x565192);
    }
    _0x13247b += _0x219caa * _0x565192 - _0x557b7d / 4;
    _0x431f06 += _0x5e881d * _0x565192 - _0x431f06 * (_0x4d670f ? 1.05 : 1.5);
    if (_0x182b42) {
      _0x2261f8.strokeText(_0x2d8e29, _0x13247b, _0x431f06);
    }
    for (let _0x33d0b3 = 0; _0x33d0b3 < _0x180003.length; _0x33d0b3++) {
      let _0x31cd20 = _0x180003[_0x33d0b3];
      if (_0x33d0b3 & 1) {
        if (_0x31cd20 === "reset") {
          _0x2261f8.fillStyle = _0x3778ad;
        } else {
          if (!isNaN(_0x31cd20)) {
            _0x31cd20 = parseInt(_0x31cd20);
          }
          _0x31cd20 = _0x289a34.getColor(_0x31cd20) ?? _0x31cd20;
        }
        _0x2261f8.fillStyle = _0x31cd20;
      } else {
        if (_0x33d0b3) {
          _0x13247b += _0x2261f8.measureText(_0x180003[_0x33d0b3 - 2] + _0x31cd20).width - _0x2261f8.measureText(_0x31cd20).width;
        }
        _0x2261f8.fillText(_0x31cd20, _0x13247b, _0x431f06);
      }
    }
    _0x2261f8.restore();
  }
  function _0x1409fe(_0x153936, _0x469fab, _0x517c04, _0x2f54e7, _0x537a01 = false) {
    switch (_0x537a01) {
      case true:
        _0x36be89.strokeRect(_0x153936, _0x469fab, _0x517c04, _0x2f54e7);
        break;
      case false:
        _0x36be89.fillRect(_0x153936, _0x469fab, _0x517c04, _0x2f54e7);
        break;
    }
  }
  function _0x5c1bb9(_0x53a70b, _0x13810c, _0x12c984, _0x445013 = false) {
    _0x36be89.beginPath();
    _0x36be89.arc(_0x53a70b, _0x13810c, _0x12c984, 0, Math.PI * 2);
    if (_0x445013) {
      _0x36be89.stroke();
    } else {
      _0x36be89.fill();
    }
  }
  function _0x50de1d(_0x2a57a0, _0x2fa75d, _0x1f70c3, _0x21eb76) {
    _0x36be89.beginPath();
    _0x36be89.lineTo(Math.round(_0x2a57a0) + 0.5, Math.round(_0x2fa75d) + 0.5);
    _0x36be89.lineTo(Math.round(_0x1f70c3) + 0.5, Math.round(_0x21eb76) + 0.5);
    _0x36be89.closePath();
    _0x36be89.stroke();
  }
  function _0xb9db3(_0x59f246, _0x36f4d6, _0x204888, _0xcaec46, _0x142eaf) {
    _0x36be89.beginPath();
    _0x36be89.lineTo(_0x59f246, _0x204888);
    _0x36be89.lineTo(_0x36f4d6, _0x204888);
    _0x36be89.lineWidth = _0xcaec46;
    _0x36be89.strokeStyle = _0x142eaf;
    _0x36be89.closePath();
    _0x36be89.stroke();
  }
  function _0x4fbb54(_0xcd536a) {
    try {
      const _0x5045fb = new URL(_0xcd536a);
      const _0x34c018 = _0x5045fb.pathname;
      const _0x4659e4 = _0x34c018.split(".").pop().toLowerCase();
      const _0x4e6bd2 = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg"];
      return _0x4e6bd2.includes(_0x4659e4);
    } catch (_0x19d61c) {
      return false;
    }
  }
  const _0x3ae194 = [];
  function _0x63589b(_0x2f1e14, _0xff744b, _0x43d388, _0x5ad501, _0x1d0992, _0x43bef3 = 0, _0xd07e7b, _0x398c8c) {
    _0x2f1e14.beginPath();
    if (_0x1d0992 instanceof Array) {
      let _0x2f9d4a = Math.cos(_0x43bef3);
      let _0x5824dc = Math.sin(_0x43bef3);
      for (let [_0x20edb3, _0x4cefa3] of _0x1d0992) {
        _0x2f1e14.lineTo(_0xff744b + _0x5ad501 * (_0x20edb3 * _0x2f9d4a - _0x4cefa3 * _0x5824dc), _0x43d388 + _0x5ad501 * (_0x4cefa3 * _0x2f9d4a + _0x20edb3 * _0x5824dc));
      }
    } else {
      if (typeof _0x1d0992 === "string") {
        if (_0x4fbb54(_0x1d0992)) {
          if (!_0x3ae194[_0x1d0992]) {
            _0x3ae194[_0x1d0992] = new Image();
            _0x3ae194[_0x1d0992].src = _0x1d0992;
            _0x3ae194[_0x1d0992].isBroken = false;
            _0x3ae194[_0x1d0992].onerror = function () {
              console.log("Failed to load image!\nURL:", _0x1d0992);
              this.isBroken = true;
            };
          }
          let _0x223c78 = _0x3ae194[_0x1d0992];
          if (_0x223c78.isBroken || !_0x223c78.complete) {
            _0x2f1e14.translate(_0xff744b, _0x43d388);
            _0x2f1e14.rotate(_0x43bef3);
            _0x2f1e14.beginPath();
            _0x2f1e14.fillStyle = "#ff00ff";
            _0x2f1e14.lineTo(-_0x5ad501, -_0x5ad501);
            _0x2f1e14.lineTo(_0x5ad501, -_0x5ad501);
            _0x2f1e14.lineTo(_0x5ad501, _0x5ad501);
            _0x2f1e14.lineTo(-_0x5ad501, _0x5ad501);
            _0x2f1e14.lineTo(-_0x5ad501, -_0x5ad501);
            _0x2f1e14.fill();
            _0x2f1e14.closePath();
            _0x2f1e14.beginPath();
            _0x2f1e14.fillStyle = "#000000";
            _0x2f1e14.lineTo(-_0x5ad501, -_0x5ad501);
            _0x2f1e14.lineTo(0, -_0x5ad501);
            _0x2f1e14.lineTo(0, 0);
            _0x2f1e14.lineTo(0, _0x5ad501);
            _0x2f1e14.lineTo(_0x5ad501, _0x5ad501);
            _0x2f1e14.lineTo(_0x5ad501, 0);
            _0x2f1e14.lineTo(0, 0);
            _0x2f1e14.lineTo(-_0x5ad501, 0);
            _0x2f1e14.lineTo(-_0x5ad501, -_0x5ad501);
            _0x2f1e14.fill();
            _0x2f1e14.closePath();
            _0x2f1e14.rotate(-_0x43bef3);
            _0x2f1e14.translate(-_0xff744b, -_0x43d388);
            return;
          }
          _0x2f1e14.translate(_0xff744b, _0x43d388);
          _0x2f1e14.rotate(_0x43bef3);
          _0x2f1e14.drawImage(_0x223c78, -_0x5ad501, -_0x5ad501, _0x5ad501 * 2, _0x5ad501 * 2);
          _0x2f1e14.rotate(-_0x43bef3);
          _0x2f1e14.translate(-_0xff744b, -_0x43d388);
          return;
        } else {
          let _0x27b0c9 = new Path2D(_0x1d0992);
          _0x2f1e14.save();
          _0x2f1e14.translate(_0xff744b, _0x43d388);
          _0x2f1e14.scale(_0x5ad501, _0x5ad501);
          _0x2f1e14.lineWidth /= _0x5ad501;
          _0x2f1e14.rotate(_0x43bef3);
          _0x2f1e14.lineWidth *= _0x398c8c ? 1 : 0.5;
          if (!_0xd07e7b) {
            _0x2f1e14.stroke(_0x27b0c9);
          }
          if (_0x398c8c) {
            _0x2f1e14.fill(_0x27b0c9);
          }
          _0x2f1e14.restore();
          return;
        }
      }
      _0x43bef3 += _0x1d0992 % 2 ? 0 : Math.PI / _0x1d0992;
    }
    if (!_0x1d0992) {
      let _0x72fb0c = _0x2f1e14.fillStyle;
      let _0x5640c2 = _0x2f1e14.strokeStyle;
      _0x2f1e14.arc(_0xff744b, _0x43d388, _0x5ad501, 0, Math.PI * 2);
      _0x2f1e14.fillStyle = _0x5640c2;
      _0x2f1e14.lineWidth *= _0x398c8c ? 1 : 0.5;
      if (!_0xd07e7b) {
        _0x2f1e14.stroke();
      }
      _0x2f1e14.closePath();
      _0x2f1e14.beginPath();
      _0x2f1e14.fillStyle = _0x72fb0c;
      _0x2f1e14.arc(_0xff744b, _0x43d388, _0x5ad501 * _0x398c8c, 0, Math.PI * 2);
      if (_0x398c8c) {
        _0x2f1e14.fill();
      }
      _0x2f1e14.closePath();
      return;
    } else if (_0x1d0992 < 0) {
      _0x2f1e14.lineJoin = "miter";
      _0x1d0992 = -_0x1d0992;
      _0x43bef3 += _0x1d0992 % 1 * Math.PI * 2;
      _0x1d0992 = Math.floor(_0x1d0992);
      let _0x56144f = 1 - 6 / _0x1d0992 ** 2;
      _0x2f1e14.moveTo(_0xff744b + _0x5ad501 * Math.cos(_0x43bef3), _0x43d388 + _0x5ad501 * Math.sin(_0x43bef3));
      _0x2f1e14.lineWidth *= _0x398c8c ? 1 : 0.5;
      for (let _0x12d7f5 = 0; _0x12d7f5 < _0x1d0992; _0x12d7f5++) {
        let _0x1d971b = (_0x12d7f5 + 0.5) / _0x1d0992 * 2 * Math.PI + _0x43bef3;
        let _0x61c5f5 = (_0x12d7f5 + 1) / _0x1d0992 * 2 * Math.PI + _0x43bef3;
        let _0x93845f = _0xff744b + _0x5ad501 * _0x56144f * Math.cos(_0x1d971b);
        let _0xb640bb = _0x43d388 + _0x5ad501 * _0x56144f * Math.sin(_0x1d971b);
        let _0x12a189 = _0xff744b + _0x5ad501 * Math.cos(_0x61c5f5);
        let _0x433535 = _0x43d388 + _0x5ad501 * Math.sin(_0x61c5f5);
        _0x2f1e14.quadraticCurveTo(_0x93845f, _0xb640bb, _0x12a189, _0x433535);
      }
    } else if (_0x1d0992 > 0) {
      _0x43bef3 += _0x1d0992 % 1 * Math.PI * 2;
      _0x1d0992 = Math.floor(_0x1d0992);
      _0x2f1e14.lineWidth *= _0x398c8c ? 1 : 0.5;
      for (let _0x2808e8 = 0; _0x2808e8 < _0x1d0992; _0x2808e8++) {
        let _0x17c8b6 = _0x2808e8 / _0x1d0992 * 2 * Math.PI + _0x43bef3;
        _0x2f1e14.lineTo(_0xff744b + _0x5ad501 * Math.cos(_0x17c8b6), _0x43d388 + _0x5ad501 * Math.sin(_0x17c8b6));
      }
    }
    _0x2f1e14.closePath();
    if (!_0xd07e7b) {
      _0x2f1e14.stroke();
    }
    if (_0x398c8c) {
      _0x2f1e14.fill();
    }
    _0x2f1e14.lineJoin = "round";
  }
  function _0x46d461(_0x43ebc3, _0x5ab53e, _0x480b0e, _0x25df3a, _0x24a39b, _0x1705b6, _0x48650c, _0x11e02b, _0x42990e) {
    let _0x46420a = [];
    _0x46420a = _0x1705b6 > 0 ? [_0x24a39b * _0x1705b6, _0x24a39b] : [_0x24a39b, -_0x24a39b * _0x1705b6];
    let _0x380952 = [];
    let _0x275f7c = Math.sin(_0x48650c);
    let _0x1c8a2e = Math.cos(_0x48650c);
    _0x380952.push([0, _0x46420a[1]]);
    _0x380952.push([_0x25df3a * 2, _0x46420a[0]]);
    _0x380952.push([_0x25df3a * 2, -_0x46420a[0]]);
    _0x380952.push([0, -_0x46420a[1]]);
    _0x43ebc3.beginPath();
    for (let _0x345a85 of _0x380952) {
      let _0x5e4bd7 = _0x345a85[0] * _0x1c8a2e - _0x345a85[1] * _0x275f7c + _0x5ab53e;
      let _0x20f225 = _0x345a85[0] * _0x275f7c + _0x345a85[1] * _0x1c8a2e + _0x480b0e;
      _0x43ebc3.lineTo(_0x5e4bd7, _0x20f225);
    }
    _0x43ebc3.closePath();
    if (!_0x11e02b) {
      _0x43ebc3.stroke();
    }
    if (_0x42990e) {
      _0x43ebc3.fill();
    }
  }
  const _0x3d9edd = (_0x470cc0, _0x309a49, _0x3b889f, _0x2ab108, _0x418024, _0x3052fe = 1, _0x1224e9 = 1, _0x438fd0 = 0, _0x38a2e3 = false, _0x20d513 = false, _0x41f709 = false, _0x409796 = _0x2ab108.render) => {
    let _0x4d0b10 = _0x20d513 ? _0x20d513 : _0x36be89;
    let _0x1da562 = _0x41f709 ? 1 : _0x409796.status.getFade();
    let _0x4aa7e3 = _0x1224e9 * _0x418024 * _0x2ab108.size;
    let _0x3fa52a = _0x2ab108.index.split("-");
    let _0x46385c = _0x5bae59.mockups[parseInt(_0x3fa52a[0])];
    let _0x4703de = _0x309a49;
    let _0x23641e = _0x3b889f;
    let _0x5d77fe = _0x41f709 === false ? _0x2ab108 : _0x41f709;
    let _0x1f2ac0 = _0x38a2e3 ? 0 : _0x409796.status.getBlend();
    _0x5d77fe.guns.update();
    if (_0x1da562 === 0 || _0x3052fe === 0) {
      return;
    }
    if (_0x409796.expandsWithDeath) {
      _0x4aa7e3 *= 1 + (1 - _0x1da562) * 0.5;
    }
    if (_0x2c1aed.graphical.fancyAnimations && _0x20d513 != _0x19776f && (_0x1da562 !== 1 || _0x3052fe !== 1)) {
      _0x4d0b10 = _0x19776f;
      _0x4d0b10.canvas.width = _0x4d0b10.canvas.height = _0x4aa7e3 * _0x46385c.position.axis + _0x418024 * 20;
      _0x4703de = _0x4d0b10.canvas.width / 2 - _0x4aa7e3 * _0x46385c.position.axis * _0x46385c.position.middle.x * Math.cos(_0x438fd0) / 4;
      _0x23641e = _0x4d0b10.canvas.height / 2 - _0x4aa7e3 * _0x46385c.position.axis * _0x46385c.position.middle.x * Math.sin(_0x438fd0) / 4;
      _0x4d0b10.translate(0.5, 0.5);
    } else if (_0x1da562 * _0x3052fe < 0.5) {
      return;
    }
    _0x4d0b10.lineCap = "round";
    _0x4d0b10.lineJoin = "round";
    for (let _0x4eb9dd = 0; _0x4eb9dd < _0x5d77fe.turrets.length; _0x4eb9dd++) {
      let _0x3eb130 = _0x5d77fe.turrets[_0x4eb9dd];
      if (_0x5d77fe.turrets[_0x4eb9dd].lerpedFacing == undefined) {
        _0x5d77fe.turrets[_0x4eb9dd].lerpedFacing = _0x5d77fe.turrets[_0x4eb9dd].facing;
      } else {
        _0x5d77fe.turrets[_0x4eb9dd].lerpedFacing = _0x8e966f.lerpAngle(_0x5d77fe.turrets[_0x4eb9dd].lerpedFacing, _0x5d77fe.turrets[_0x4eb9dd].facing, 0.1, true);
      }
      if (!_0x3eb130.layer) {
        let _0xf8a9e3 = _0x3eb130.direction + _0x3eb130.angle + _0x438fd0;
        let _0x219785 = _0x3eb130.offset * _0x4aa7e3;
        let _0x42639f = 0;
        if (_0x3eb130.mirrorMasterAngle || _0x38a2e3) {
          _0x42639f = _0x438fd0 + _0x3eb130.angle;
        } else {
          _0x42639f = _0x5d77fe.turrets[_0x4eb9dd].lerpedFacing;
        }
        _0x3d9edd(_0x470cc0, _0x4703de + _0x219785 * Math.cos(_0xf8a9e3), _0x23641e + _0x219785 * Math.sin(_0xf8a9e3), _0x3eb130, _0x418024, 1, _0x4aa7e3 / _0x418024 / _0x3eb130.size * _0x3eb130.sizeFactor, _0x42639f, _0x38a2e3, _0x4d0b10, _0x5d77fe.turrets[_0x4eb9dd], _0x409796);
      }
    }
    _0x4d0b10.lineJoin = "miter";
    _0x4d0b10.lineWidth = Math.max(_0x2c1aed.graphical.mininumBorderChunk, _0x418024 * _0x2c1aed.graphical.borderChunk);
    let _0x5874bb = _0x5d77fe.guns.getPositions();
    let _0xce7ce8 = _0x5d77fe.guns.getConfig();
    for (let _0x53c741 = 0; _0x53c741 < _0x5d77fe.guns.length; _0x53c741++) {
      let _0x4fb468 = _0xce7ce8[_0x53c741];
      if (!_0x4fb468.drawAbove) {
        let _0x448da3 = (_0x38a2e3 ? 0 : _0x5874bb[_0x53c741]) / (_0x4fb468.aspect === 1 ? 2 : 1);
        let _0x1fb1ab = _0x4fb468.offset * Math.cos(_0x4fb468.direction + _0x4fb468.angle + _0x438fd0);
        let _0x173f93 = _0x4fb468.offset * Math.sin(_0x4fb468.direction + _0x4fb468.angle + _0x438fd0);
        let _0x40f20f = _0x4fb468.color == null ? _0x53f6d6.grey : _0x289a34.modifyColor(_0x4fb468.color, _0x470cc0);
        let _0x12d6ab = _0x4fb468.borderless;
        let _0xc10cb8 = _0x4fb468.drawFill;
        _0x289a34.setColor(_0x4d0b10, _0x289a34.mixColors(_0x40f20f, _0x409796.status.getColor(), _0x1f2ac0));
        _0x46d461(_0x4d0b10, _0x4703de + _0x4aa7e3 * _0x1fb1ab, _0x23641e + _0x4aa7e3 * _0x173f93, _0x4aa7e3 * (_0x4fb468.length / 1.8 - (_0x4fb468.aspect === 1 ? _0x448da3 : _0x448da3 / 2)), _0x4aa7e3 * _0x4fb468.width / 2, _0x4fb468.aspect, _0x4fb468.angle + _0x438fd0, _0x12d6ab, _0xc10cb8);
      }
    }
    _0x4d0b10.lineJoin = "round";
    _0x4d0b10.globalAlpha = 1;
    _0x289a34.setColor(_0x4d0b10, _0x289a34.mixColors(_0x289a34.modifyColor(_0x2ab108.color, _0x470cc0), _0x409796.status.getColor(), _0x38a2e3 ? 0 : _0x1f2ac0));
    _0x4d0b10.shadowColor = _0x46385c.glow.color != null ? _0x289a34.modifyColor(_0x46385c.glow.color) : _0x289a34.mixColors(_0x289a34.modifyColor(_0x2ab108.color), _0x409796.status.getColor(), _0x409796.status.getBlend());
    if (_0x46385c.glow.radius && _0x46385c.glow.radius > 0) {
      _0x4d0b10.shadowBlur = _0x46385c.glow.radius * (_0x4aa7e3 / _0x46385c.size * _0x46385c.realSize);
      _0x4d0b10.shadowOffsetX = 0;
      _0x4d0b10.shadowOffsetY = 0;
      _0x4d0b10.globalAlpha = _0x46385c.glow.alpha;
      for (var _0x427c1f = 0; _0x427c1f < _0x46385c.glow.recursion; _0x427c1f++) {
        _0x63589b(_0x4d0b10, _0x4703de, _0x23641e, _0x4aa7e3 / _0x46385c.size * _0x46385c.realSize, _0x46385c.shape, _0x438fd0, true, _0x46385c.drawFill);
      }
      _0x4d0b10.globalAlpha = 1;
    }
    _0x4d0b10.shadowBlur = 0;
    _0x4d0b10.shadowOffsetX = 0;
    _0x4d0b10.shadowOffsetY = 0;
    _0x63589b(_0x4d0b10, _0x4703de, _0x23641e, _0x4aa7e3 / _0x46385c.size * _0x46385c.realSize, _0x46385c.shape, _0x438fd0, _0x46385c.borderless, _0x46385c.drawFill);
    _0x4d0b10.lineJoin = "miter";
    for (let _0x4c9884 = 0; _0x4c9884 < _0x5d77fe.guns.length; _0x4c9884++) {
      let _0x4ad5eb = _0xce7ce8[_0x4c9884];
      if (_0x4ad5eb.drawAbove) {
        let _0x4afba8 = (_0x38a2e3 ? 0 : _0x5874bb[_0x4c9884]) / (_0x4ad5eb.aspect === 1 ? 2 : 1);
        let _0x5fb619 = _0x4ad5eb.offset * Math.cos(_0x4ad5eb.direction + _0x4ad5eb.angle + _0x438fd0);
        let _0x992b4d = _0x4ad5eb.offset * Math.sin(_0x4ad5eb.direction + _0x4ad5eb.angle + _0x438fd0);
        let _0x4bb081 = _0x4ad5eb.color == null ? _0x53f6d6.grey : _0x289a34.modifyColor(_0x4ad5eb.color, _0x470cc0);
        let _0x108530 = _0x4ad5eb.borderless;
        let _0xc2a7aa = _0x4ad5eb.drawFill;
        _0x289a34.setColor(_0x4d0b10, _0x289a34.mixColors(_0x4bb081, _0x409796.status.getColor(), _0x1f2ac0));
        _0x46d461(_0x4d0b10, _0x4703de + _0x4aa7e3 * _0x5fb619, _0x23641e + _0x4aa7e3 * _0x992b4d, _0x4aa7e3 * (_0x4ad5eb.length / 2 - (_0x4ad5eb.aspect === 1 ? _0x4afba8 * 2 : _0x4afba8)), _0x4aa7e3 * _0x4ad5eb.width / 2, _0x4ad5eb.aspect, _0x4ad5eb.angle + _0x438fd0, _0x108530, _0xc2a7aa);
      }
    }
    _0x4d0b10.lineJoin = "round";
    for (let _0x23e19a = 0; _0x23e19a < _0x5d77fe.turrets.length; _0x23e19a++) {
      let _0xd079b4 = _0x5d77fe.turrets[_0x23e19a];
      if (_0xd079b4.layer) {
        let _0x10d3c6 = _0xd079b4.direction + _0xd079b4.angle + _0x438fd0;
        let _0xc2067b = _0xd079b4.offset * _0x4aa7e3;
        let _0x19c14c = 0;
        if (_0xd079b4.mirrorMasterAngle || _0x38a2e3) {
          _0x19c14c = _0x438fd0 + _0xd079b4.angle;
        } else {
          _0x19c14c = _0x5d77fe.turrets[_0x23e19a].lerpedFacing;
        }
        _0x3d9edd(_0x470cc0, _0x4703de + _0xc2067b * Math.cos(_0x10d3c6), _0x23641e + _0xc2067b * Math.sin(_0x10d3c6), _0xd079b4, _0x418024, 1, _0x4aa7e3 / _0x418024 / _0xd079b4.size * _0xd079b4.sizeFactor, _0x19c14c, _0x38a2e3, _0x4d0b10, _0x5d77fe.turrets[_0x23e19a], _0x409796);
      }
    }
    if (_0x20d513 == false && _0x4d0b10 != _0x36be89 && _0x4d0b10.canvas.width > 0 && _0x4d0b10.canvas.height > 0) {
      _0x36be89.save();
      _0x36be89.globalAlpha = _0x3052fe * _0x1da562;
      _0x36be89.imageSmoothingEnabled = false;
      _0x36be89.drawImage(_0x4d0b10.canvas, _0x309a49 - _0x4703de, _0x3b889f - _0x23641e);
      _0x36be89.restore();
    }
  };
  var _0x4851fc = document.querySelector("#betterperformance");
  function _0x451e28() {
    _0x4851fc.checked = true;
    _0x8e966f.submitToLocalStorage("betterperformance");
    window.addEventListener("load", () => {
      const _0x106840 = localStorage.getItem("betterperformance");
      if (_0x106840 === "false") {
        _0x4851fc.checked = false;
      }
    });
  }
  _0x451e28();
  function _0x4805e0(_0x261d0d, _0x4d9e6c, _0x3f9edf, _0x16ea14, _0x281c4d) {
    let _0x3b2092 = _0x3f9edf.render.status.getFade();
    _0x36be89.globalAlpha = _0x3b2092 * _0x3b2092;
    let _0x502b7a = _0x3f9edf.size * _0x16ea14;
    let _0x2cad2e = _0x3f9edf.index.split("-");
    let _0x38453c = _0x5bae59.mockups[parseInt(_0x2cad2e[0])];
    let _0x1abd17 = _0x502b7a / _0x38453c.size * _0x38453c.realSize;
    if (_0x3f9edf.drawsHealth) {
      let _0x16f0eb = _0x3f9edf.render.health.get();
      let _0x494f1a = _0x3f9edf.render.shield.get();
      if (_0x3f9edf.hpLoss) {
        const _0x20560e = 1;
        const _0x2b95ae = 500;
        const _0x179617 = 500;
        const _0x1260a5 = 500;
        const _0x334fb7 = 10;
        const _0xe8f9b5 = _0x261d0d - _0x502b7a - _0x16ea14 * 5;
        const _0x24fe01 = _0x4d9e6c + _0x1abd17 + _0x16ea14 * 10 + _0x334fb7;
        const _0x196b35 = new Date().getTime();
        const _0xc09c11 = _0x196b35 - _0x1260a5;
        const _0x17fc5b = _0x196b35 - _0xc09c11 < _0x179617 ? 1 - (_0x196b35 - _0xc09c11) / _0x179617 : _0x196b35 - _0xc09c11 < _0x2b95ae ? (_0x196b35 - _0xc09c11) / _0x2b95ae : 1;
        if (_0x17fc5b > 0) {
          _0x36be89.globalAlpha = _0x20560e * _0x17fc5b;
          _0x4b1590("-" + _0x3f9edf.hpLoss, _0xe8f9b5, _0x24fe01, _0x16ea14 * 16, "black", "left", "top", "Arial");
          _0x36be89.globalAlpha = 1;
        }
        _0x3f9edf.hpLoss = null;
      }
      if (_0x16f0eb < 0.9999 || _0x494f1a < 0.9999) {
        let _0x328b78 = null;
        let _0x21cb47 = true;
        if (typeof _0x3f9edf.color == "string") {
          _0x328b78 = _0x3f9edf.color.split(" ")[0];
          if (_0x328b78[0] == "#") {
            _0x21cb47 = false;
          } else if (!isNaN(parseInt(_0x328b78))) {
            _0x328b78 = parseInt(_0x328b78);
          }
        } else {
          _0x328b78 = _0x3f9edf.color;
        }
        function _0x2fd194(_0x4488c7, _0x539784, _0x13954c) {
          const _0x154f98 = parseInt(_0x4488c7.substring(1, 3), 16);
          const _0x1a2e64 = parseInt(_0x4488c7.substring(3, 5), 16);
          const _0x3ea1c9 = parseInt(_0x4488c7.substring(5, 7), 16);
          const _0x1cb6f5 = parseInt(_0x539784.substring(1, 3), 16);
          const _0x454484 = parseInt(_0x539784.substring(3, 5), 16);
          const _0x2229c9 = parseInt(_0x539784.substring(5, 7), 16);
          const _0x4de6be = Math.floor(_0x154f98 + _0x13954c * (_0x1cb6f5 - _0x154f98));
          const _0x553c83 = Math.floor(_0x1a2e64 + _0x13954c * (_0x454484 - _0x1a2e64));
          const _0x13c161 = Math.floor(_0x3ea1c9 + _0x13954c * (_0x2229c9 - _0x3ea1c9));
          return "#" + _0x4de6be.toString(16).padStart(2, "0") + _0x553c83.toString(16).padStart(2, "0") + _0x13c161.toString(16).padStart(2, "0");
        }
        let _0x5c3528 = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : _0x53f6d6.lgreen;
        let _0x515a7b = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : _0x53f6d6.orange;
        let _0x14b3fe = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : "#d10000";
        let _0x29be0a = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : "#d10e00";
        let _0x130bb3 = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : "#e5ff00";
        let _0x2ea5e0 = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : "#e7e300";
        let _0x22677f = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : "#ffae00";
        let _0x3f7f4a = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : "#ff9100";
        let _0x5ac691 = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : "#ff7300";
        let _0x6198bc = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : "#db2100";
        let _0x38b97c = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : "#5ae200";
        let _0x24e8d4 = _0x2c1aed.graphical.coloredHealthbars ? _0x289a34.mixColors(_0x21cb47 ? _0x289a34.getColor(_0x328b78) : _0x328b78, _0x53f6d6.guiwhite, 0.5) : "#7edf00";
        let _0x411a88 = _0x2fd194(_0x5c3528, _0x6198bc, 1 - _0x16f0eb);
        let _0x556b1a = _0x2fd194(_0x5c3528, _0x29be0a, 1 - _0x16f0eb);
        let _0x11d7da = _0x2fd194(_0x5c3528, _0x130bb3, 1 - _0x16f0eb);
        let _0x5605f4 = _0x2fd194(_0x5c3528, _0x2ea5e0, 1 - _0x16f0eb);
        let _0x2d4abd = _0x2fd194(_0x5c3528, _0x22677f, 1 - _0x16f0eb);
        let _0x1fa6d9 = _0x2fd194(_0x5c3528, _0x3f7f4a, 1 - _0x16f0eb);
        let _0x452575 = _0x2fd194(_0x5c3528, _0x5ac691, 1 - _0x16f0eb);
        let _0x190e4f = _0x2fd194(_0x5c3528, _0x6198bc, 1 - _0x16f0eb);
        let _0x21c4bf = _0x2fd194(_0x5c3528, _0x38b97c, 1 - _0x16f0eb);
        let _0x1be672 = _0x2fd194(_0x5c3528, _0x24e8d4, 1 - _0x16f0eb);
        let _0x5f083b = _0x4d9e6c + _0x1abd17 + _0x16ea14 * 15;
        let _0x3eb1be = _0x16ea14 * 3;
        _0x36be89.globalAlpha = _0x3b2092 * _0x281c4d ** 2;
        _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d + _0x502b7a, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars / 2, _0x3eb1be * (1 + _0x2c1aed.graphical.seperatedHealthbars) + _0x2c1aed.graphical.barChunk, _0x53f6d6.black);
        _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x5c3528);
        if (_0x494f1a || _0x2c1aed.graphical.seperatedHealthbars) {
          if (_0x16f0eb < 0.95) {
            _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x21c4bf);
          }
          if (_0x16f0eb < 0.85) {
            _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x1be672);
          }
          if (_0x16f0eb < 0.75) {
            _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x11d7da);
          }
          if (_0x16f0eb < 0.25) {
            _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x452575);
          }
          if (_0x16f0eb < 0.5) {
            _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x556b1a);
          }
          if (_0x16f0eb < 0.65) {
            _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x5605f4);
          }
          if (_0x16f0eb < 0.55) {
            _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x2d4abd);
          }
          if (_0x16f0eb < 0.45) {
            _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x1fa6d9);
          }
          if (_0x16f0eb < 0.35) {
            _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x452575);
          }
          if (_0x16f0eb < 0.15) {
            _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x190e4f);
          }
          if (_0x16f0eb < 0.05) {
            _0xb9db3(_0x261d0d - _0x502b7a, _0x261d0d - _0x502b7a + _0x502b7a * 2 * _0x16f0eb, _0x5f083b + _0x3eb1be * _0x2c1aed.graphical.seperatedHealthbars, _0x3eb1be, _0x411a88);
          }
          if (!_0x2c1aed.graphical.seperatedHealthbars) {
            _0x36be89.globalAlpha = (1 + _0x494f1a) * 0.3 * _0x281c4d ** 2 * _0x3b2092;
          }
          _0x36be89.globalAlpha = 1;
          if (!_0x2c1aed.graphical.seperatedHealthbars) {
            _0x36be89.globalAlpha = (1 + _0x494f1a) * 0.3 * _0x281c4d ** 2 * _0x3b2092;
          }
          _0x36be89.globalAlpha = 1;
        }
      }
    }
    function _0x5328ab(_0x4881dc, _0x3babbd) {
      return _0x3babbd * _0x4881dc.size / 20;
    }
    if (_0x3f9edf.id !== _0x71195b.playerid && _0x3f9edf.nameplate) {
      var _0x55d27d = _0x3f9edf.name.substring(7, _0x3f9edf.name.length + 1);
      var _0x5eb299 = _0x3f9edf.name.substring(0, 7);
      let _0x52ab2a = _0x16ea14 * _0x3f9edf.size / 18;
      let _0x19f1a0 = _0x16ea14 * _0x3f9edf.size / 48;
      _0x36be89.globalAlpha = _0x281c4d;
      let _0x38bc3f = _0x5328ab(_0x3f9edf, _0x16ea14);
      if (_0x5bae59.showInvisible) {
        _0x36be89.globalAlpha = _0x281c4d + 0.28;
      } else {
        _0x36be89.globalAlpha = _0x3b2092 * _0x281c4d ** 2;
      }
      _0x4b1590(_0x55d27d, _0x261d0d, _0x4d9e6c - _0x1abd17 - _0x38bc3f * 20, _0x52ab2a * 16, _0x5eb299, "center");
      _0x4b1590(_0x8e966f.handleLargeNumber(_0x3f9edf.score, 1), _0x261d0d, _0x4d9e6c - _0x1abd17 - _0x38bc3f * 8, _0x19f1a0 * 16, _0x5eb299, "center");
      _0x36be89.globalAlpha = 1;
    }
  }
  window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || (_0x1f695a => setTimeout(_0x1f695a, 1000 / 60));
  window.cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
  const _0x169e4d = _0x59cf04(0, 0.7, 1.5, 0.1);
  const _0x4afde8 = _0x59cf04(0, 2, 3, 0.05);
  const _0x85f61d = _0x59cf04(0, 2, 3, 0.05);
  const _0x2ebf3f = _0x59cf04(-1, 2, 3, 0.05);
  function _0x3ad2d0() {
    var _0x4e2217 = [];
    return (_0x2b0bc0, _0x364559, _0x3908e3, _0x21b83b, _0x3a8f21, _0x260bb0) => {
      _0x4e2217.push(_0x2b0bc0);
      while (_0x4e2217.length > _0x21b83b) {
        _0x4e2217.splice(0, 1);
      }
      let _0xc939dd = Math.min(..._0x4e2217);
      let _0x38978b = Math.max(..._0x4e2217);
      let _0x1428d1 = _0x38978b - _0xc939dd;
      if (_0x38978b > 0 && _0xc939dd < 0) {
        _0xb9db3(_0x364559, _0x364559 + _0x21b83b, _0x3908e3 + _0x3a8f21 * _0x38978b / _0x1428d1, 2, _0x53f6d6.guiwhite);
      }
      _0x36be89.beginPath();
      let _0x4fcfe7 = -1;
      for (let _0x4fcba4 of _0x4e2217) {
        if (!++_0x4fcfe7) {
          _0x36be89.moveTo(_0x364559, _0x3908e3 + _0x3a8f21 * (_0x38978b - _0x4fcba4) / _0x1428d1);
        } else {
          _0x36be89.lineTo(_0x364559 + _0x4fcfe7, _0x3908e3 + _0x3a8f21 * (_0x38978b - _0x4fcba4) / _0x1428d1);
        }
      }
      _0x36be89.lineWidth = 1;
      _0x36be89.strokeStyle = _0x260bb0;
      _0x36be89.stroke();
    };
  }
  function _0x526b97(_0x2c245c, _0x386e75, _0x4cc0d6, _0x1ece8b, _0x35d08e, _0x579321) {
    let _0x45ae4d = Math.cos((1 + _0x579321) * Math.PI);
    return (((1 + _0x579321) * _0x4cc0d6 + _0x2c245c) * (_0x45ae4d + 1) + (-_0x579321 * _0x1ece8b + _0x386e75) * (1 - _0x45ae4d)) * 0.5;
  }
  function _0xcb716c(_0x3002df, _0x3c3d82, _0x238b13, _0x183dba, _0x33becb, _0x79bec0) {
    return _0x3c3d82 + (_0x3c3d82 - _0x3002df) * _0x79bec0;
  }
  let _0x3d9b7a = function (_0x404437, _0x5f5d61) {
    return (_0x404437 % _0x5f5d61 + _0x5f5d61) % _0x5f5d61;
  };
  function _0xcf4a98(_0x2df124, _0x478ca3) {
    let _0x515f6d = _0x478ca3 - _0x2df124;
    return _0x3d9b7a(_0x515f6d + Math.PI, Math.PI * 2) - Math.PI;
  }
  const _0x209daa = () => {
    let _0x62d222 = 0;
    let _0x3827a0 = 0;
    let _0x9ffac4 = 0;
    return {
      set: (_0x21d691 = _0x5bae59.player.time, _0x436309 = _0x5bae59.metrics.rendergap) => {
        _0x62d222 = Math.max(_0x18517a() - _0x21d691 - 80, -_0x436309);
        if (_0x62d222 > 150 && _0x62d222 < 1000) {
          _0x62d222 = 150;
        }
        if (_0x62d222 > 1000) {
          _0x62d222 = Math.sin(_0x62d222 / 1000 - 1) * 1000000 / _0x62d222 + 1000;
        }
        _0x3827a0 = _0x62d222 / _0x436309;
        _0x9ffac4 = _0x2c1aed.roomSpeed * 30 * _0x62d222 / 1000;
      },
      predict: (_0x512869, _0x3a78e9, _0x45b63e, _0x2f3d98) => {
        if (_0x62d222 >= 0) {
          return _0xcb716c(_0x512869, _0x3a78e9, _0x45b63e, _0x2f3d98, _0x9ffac4, _0x3827a0);
        } else {
          return _0x526b97(_0x512869, _0x3a78e9, _0x45b63e, _0x2f3d98, _0x9ffac4, _0x3827a0);
        }
      },
      predictFacing: (_0x33f5f9, _0x5e2a5f) => {
        return _0x33f5f9 + (1 + _0x3827a0) * _0xcf4a98(_0x33f5f9, _0x5e2a5f);
      },
      getPrediction: () => {
        return _0x62d222;
      }
    };
  };
  const _0x208b43 = _0x3ad2d0();
  const _0x9756fd = _0x3ad2d0();
  const _0x5433ff = _0x3ad2d0();
  let _0x4ad3eb = [];
  for (let _0x55e4e1 = 1; _0x55e4e1 <= 256; _0x55e4e1++) {
    _0x4ad3eb.push((_0x55e4e1 - 2) * 0.01 + Math.log(_0x55e4e1 / 9 * 4 + 1) / 1.6);
  }
  const _0xbd3506 = _0x5b3718 => _0x4ad3eb[_0x5b3718];
  let _0x44cf89 = (_0x1253cb, _0x8aa406) => {
    _0x5bae59.screenWidth /= _0x1253cb;
    _0x5bae59.screenHeight /= _0x1253cb;
    _0x36be89.scale(_0x1253cb, _0x1253cb);
    if (!_0x8aa406) {
      ratio *= _0x1253cb;
    }
  };
  function _0x1d1444(_0x433a82) {
    switch (_0x433a82) {
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
  }
  let _0x2cec5a;
  let _0x484663;
  let _0x96c457;
  let _0x1cf818 = (_0x31090a, _0x5af8c6, _0x12b55a, {
    index: _0xf068fd,
    tier = 0
  }) => {
    _0x2cec5a.push({
      x: _0x31090a,
      y: _0x5af8c6,
      colorIndex: _0x12b55a,
      index: _0xf068fd
    });
    let {
      upgrades: _0x39ff2d
    } = _0x5bae59.mockups[parseInt(_0xf068fd)];
    let _0x5526a = _0x31090a;
    let _0x146070 = 1;
    let _0x4c32c1 = 1;
    let _0x56df00 = [];
    let _0x44d2d8 = [];
    for (let _0x38d48d = 0; _0x38d48d < _0x39ff2d.length; _0x38d48d++) {
      let _0xc999f1 = _0x39ff2d[_0x38d48d];
      if (_0x5bae59.mockups[_0xc999f1.index].upgrades.length) {
        _0x56df00.push(_0xc999f1);
      } else {
        _0x44d2d8.push(_0xc999f1);
      }
    }
    for (let _0x4ca928 = 0; _0x4ca928 < _0x56df00.length; _0x4ca928++) {
      let _0x45e793 = _0x56df00[_0x4ca928];
      let _0x16f9b2 = Math.max(1, _0x45e793.tier - tier) * 2;
      let _0xde4632 = _0x1cf818(_0x31090a, _0x5af8c6 + _0x16f9b2, 10 + _0x4ca928, _0x45e793);
      _0x484663.push([{
        x: _0x31090a,
        y: _0x5af8c6 + Math.sign(_0x4ca928)
      }, {
        x: _0x31090a,
        y: _0x5af8c6 + _0x16f9b2 + 1
      }]);
      if (_0x4ca928 === _0x56df00.length - 1 && !_0x44d2d8.length) {
        _0x484663.push([{
          x: _0x5526a,
          y: _0x5af8c6 + 1
        }, {
          x: _0x31090a,
          y: _0x5af8c6 + 1
        }]);
      }
      _0x31090a += _0xde4632.width;
      _0x146070 += _0xde4632.width;
      if (_0x4c32c1 < _0xde4632.height) {
        _0x4c32c1 = _0xde4632.height;
      }
    }
    _0x5af8c6++;
    for (let _0x4c2ee1 = 0; _0x4c2ee1 < _0x44d2d8.length; _0x4c2ee1++) {
      let _0x27d46a = _0x44d2d8[_0x4c2ee1];
      let _0x336fdf = 2 + _0x39ff2d.length;
      _0x1cf818(_0x31090a, _0x5af8c6 + 1 + _0x4c2ee1 + Math.sign(_0x56df00.length) * 2, 10 + _0x4c2ee1, _0x27d46a);
      if (_0x4c2ee1 === _0x44d2d8.length - 1) {
        if (_0x56df00.length > 1) {
          _0x146070++;
        }
        _0x484663.push([{
          x: _0x5526a,
          y: _0x5af8c6
        }, {
          x: _0x31090a,
          y: _0x5af8c6
        }]);
        _0x484663.push([{
          x: _0x31090a,
          y: _0x5af8c6
        }, {
          x: _0x31090a,
          y: _0x5af8c6 + _0x44d2d8.length + Math.sign(_0x56df00.length) * 2
        }]);
      }
      if (_0x4c32c1 < _0x336fdf) {
        _0x4c32c1 = _0x336fdf;
      }
    }
    return {
      width: _0x146070,
      height: 2 + _0x4c32c1
    };
  };
  function _0x255225(_0x8e98fe) {
    _0x2cec5a = [];
    _0x484663 = [];
    let _0x3de479 = 0;
    let _0x5cae1 = 0;
    if (!Array.isArray(_0x8e98fe)) {
      _0x8e98fe = [_0x8e98fe];
    }
    for (let _0x2f8cc8 of _0x8e98fe) {
      _0x96c457 = _0x1cf818(_0x3de479, 0, 10, {
        index: _0x2f8cc8
      });
      _0x96c457.width += _0x3de479;
      _0x5cae1 = Math.max(_0x5cae1, _0x96c457.height);
      _0x3de479 = _0x96c457.width + 3;
    }
    _0x96c457.height = _0x5cae1;
  }
  function _0x367fae(_0x197224, _0x36dc9c, _0x4465e5) {
    _0x5ddb16(_0x53f6d6.white, 1);
    _0x5ddb16(_0x53f6d6.guiblack, 0.1);
    let _0x5cc861 = _0x5bae59.roomSetup[0].length;
    let _0x422783 = _0x5bae59.roomSetup.length;
    for (let _0x32dda2 = 0; _0x32dda2 < _0x422783; _0x32dda2++) {
      let _0x424971 = Math.max(0, _0x4465e5 * _0x32dda2 * _0x5bae59.gameHeight / _0x422783 - _0x36dc9c + _0x5bae59.screenHeight / 2);
      let _0x44a367 = Math.min(_0x5bae59.screenHeight, _0x4465e5 * (_0x32dda2 + 1) * _0x5bae59.gameHeight / _0x422783 - _0x36dc9c + _0x5bae59.screenHeight / 2);
      if (_0x424971 > _0x5bae59.screenHeight || _0x44a367 < 0) {
        continue;
      }
      let _0x4c89e7 = _0x5bae59.roomSetup[_0x32dda2];
      for (let _0x34df41 = 0; _0x34df41 < _0x5cc861; _0x34df41++) {
        let _0x229857 = Math.max(0, _0x4465e5 * _0x34df41 * _0x5bae59.gameWidth / _0x5cc861 - _0x197224 + _0x5bae59.screenWidth / 2);
        let _0x24639d = Math.min(_0x5bae59.screenWidth, _0x4465e5 * (_0x34df41 + 1) * _0x5bae59.gameWidth / _0x5cc861 - _0x197224 + _0x5bae59.screenWidth / 2);
        if (_0x229857 > _0x5bae59.screenWidth || _0x24639d < 0) {
          continue;
        }
        let _0x5c6a5f = _0x4c89e7[_0x34df41];
        _0x36be89.globalAlpha = 1;
        _0x36be89.fillStyle = _0x2c1aed.graphical.screenshotMode ? _0x53f6d6.guiwhite : _0x53f6d6.white;
        _0x36be89.fillRect(_0x229857, _0x424971, _0x24639d - _0x229857, _0x44a367 - _0x424971);
        _0x36be89.globalAlpha = 0.3;
        _0x36be89.fillStyle = _0x2c1aed.graphical.screenshotMode ? _0x53f6d6.guiwhite : _0x289a34.getZoneColor(_0x5c6a5f, true);
        _0x36be89.fillRect(_0x229857, _0x424971, _0x24639d - _0x229857, _0x44a367 - _0x424971);
      }
    }
    _0x36be89.lineWidth = 1;
    _0x36be89.strokeStyle = _0x2c1aed.graphical.screenshotMode ? _0x53f6d6.guiwhite : _0x53f6d6.guiblack;
    _0x36be89.globalAlpha = 0.04;
    _0x36be89.beginPath();
    let _0x11d069 = [];
    if (_0x2c1aed.graphical.highResolution) {
      _0x11d069 = _0x4465e5 * 50;
    } else {
      _0x11d069 = _0x4465e5 * 15;
    }
    for (let _0x1e0bff = (_0x5bae59.screenWidth / 2 - _0x197224) % _0x11d069; _0x1e0bff < _0x5bae59.screenWidth; _0x1e0bff += _0x11d069) {
      _0x36be89.moveTo(_0x1e0bff, 0);
      _0x36be89.lineTo(_0x1e0bff, _0x5bae59.screenHeight);
    }
    for (let _0x5275cb = (_0x5bae59.screenHeight / 2 - _0x36dc9c) % _0x11d069; _0x5275cb < _0x5bae59.screenHeight; _0x5275cb += _0x11d069) {
      _0x36be89.moveTo(0, _0x5275cb);
      _0x36be89.lineTo(_0x5bae59.screenWidth, _0x5275cb);
    }
    _0x36be89.stroke();
    _0x36be89.globalAlpha = 1;
  }
  function _0x464447(_0x653dce, _0x571dde, _0x36ac24) {
    for (let _0x369728 of _0x5bae59.entities) {
      let _0x4c27b7 = _0x209daa();
      if (_0x369728.render.status.getFade() === 1) {
        _0x4c27b7.set();
      } else {
        _0x4c27b7.set(_0x369728.render.lastRender, _0x369728.render.interval);
      }
      _0x369728.render.x = _0x8e966f.lerp(_0x369728.render.x, Math.round(_0x369728.x + _0x369728.vx), 0.15, true);
      _0x369728.render.y = _0x8e966f.lerp(_0x369728.render.y, Math.round(_0x369728.y + _0x369728.vy), 0.15, true);
      _0x369728.render.f = _0x369728.id === _0x71195b.playerid && !_0x5bae59.autoSpin && !_0x5bae59.realTime && !_0x5bae59.freezebody && !_0x5bae59.botplay && !_0x369728.twiggle && !_0x5bae59.died ? Math.atan2(_0x5bae59.target.y, _0x5bae59.target.x) : _0x8e966f.lerpAngle(_0x369728.render.f, _0x369728.facing, 0.15, true);
      let _0x4d8d2f = _0x36ac24 * _0x369728.render.x - _0x653dce;
      let _0x32dd30 = _0x36ac24 * _0x369728.render.y - _0x571dde;
      let _0x434431 = _0x369728.color;
      if (_0x369728.id === _0x71195b.playerid) {
        _0x4d8d2f = _0x2c1aed.graphical.centerTank && !_0x5bae59.player.isScoping ? 0 : _0x4d8d2f;
        _0x32dd30 = _0x2c1aed.graphical.centerTank && !_0x5bae59.player.isScoping ? 0 : _0x32dd30;
        _0x5bae59.player.screenx = _0x4d8d2f;
        _0x5bae59.player.screeny = _0x32dd30;
      }
      _0x4d8d2f += _0x5bae59.screenWidth / 2;
      _0x32dd30 += _0x5bae59.screenHeight / 2;
      _0x3d9edd(_0x434431, _0x4d8d2f, _0x32dd30, _0x369728, _0x36ac24, _0x369728.id === _0x71195b.playerid || _0x5bae59.showInvisible ? _0x369728.alpha ? _0x369728.alpha * 0.75 + 0.25 : 0.25 : _0x369728.alpha, 1.1, _0x369728.render.f);
    }
    for (let _0x3a6b60 of _0x5bae59.entities) {
      let _0x4cc58a = _0x3a6b60.id === _0x71195b.playerid ? _0x5bae59.player.screenx : _0x36ac24 * _0x3a6b60.render.x - _0x653dce;
      let _0xe37830 = _0x3a6b60.id === _0x71195b.playerid ? _0x5bae59.player.screeny : _0x36ac24 * _0x3a6b60.render.y - _0x571dde;
      _0x4cc58a += _0x5bae59.screenWidth / 2;
      _0xe37830 += _0x5bae59.screenHeight / 2;
      _0x4805e0(_0x4cc58a, _0xe37830, _0x3a6b60, _0x36ac24, _0x3a6b60.alpha);
    }
    let _0x31aa4b = Date.now();
    let _0x409e60 = (1 + _0x36ac24) / 2;
    for (let _0x3ba5c7 of _0x5bae59.entities) {
      if (_0x3ba5c7.id !== _0x71195b.playerid && !_0x5bae59.showInvisible && _0x3ba5c7.alpha < 0.25) {
        continue;
      }
      let _0x4ceb7b = _0x3ba5c7.size * _0x36ac24;
      let _0x112893 = _0x3ba5c7.index.split("-");
      let _0x29ef19 = _0x5bae59.mockups[parseInt(_0x112893[0])];
      let _0x1cd692 = _0x4ceb7b / _0x29ef19.size * _0x29ef19.realSize;
      let _0x22a742 = _0x3ba5c7.id === _0x71195b.playerid ? _0x5bae59.player.screenx : _0x36ac24 * _0x3ba5c7.render.x - _0x653dce;
      let _0x218648 = _0x3ba5c7.id === _0x71195b.playerid ? _0x5bae59.player.screeny : _0x36ac24 * _0x3ba5c7.render.y - _0x571dde;
      _0x22a742 += _0x5bae59.screenWidth / 2;
      _0x218648 += _0x5bae59.screenHeight / 2 - _0x1cd692 - _0x36ac24 * 46;
      if (_0x3ba5c7.id !== _0x71195b.playerid && _0x3ba5c7.nameplate) {
        _0x218648 -= _0x36ac24 * 8;
      }
      for (let _0x41a635 in _0x5bae59.chats[_0x3ba5c7.id]) {
        let _0x368572 = _0x5bae59.chats[_0x3ba5c7.id][_0x41a635];
        let _0x413612 = _0x368572.text;
        let _0x3a5982 = _0x5c2e6f(_0x413612, _0x409e60 * 15) / 2;
        let _0x35c9f3 = Math.max(0, Math.min(200, _0x368572.expires - _0x31aa4b) / 200);
        _0x36be89.globalAlpha = _0x35c9f3 * 0.5;
        _0xb9db3(_0x22a742 - _0x3a5982, _0x22a742 + _0x3a5982, _0x218648, _0x409e60 * 30, _0x289a34.modifyColor(_0x3ba5c7.color));
        _0x36be89.globalAlpha = _0x35c9f3;
        _0x2c1aed.graphical.fontStrokeRatio *= 1.2;
        _0x4b1590(_0x413612, _0x22a742, _0x218648 + _0x409e60 * 7, _0x409e60 * 15, _0x53f6d6.guiwhite, "center");
        _0x2c1aed.graphical.fontStrokeRatio /= 1.2;
        _0x218648 -= _0x409e60 * 35;
      }
    }
  }
  _0x5bae59.showTree = false;
  _0x5bae59.scrollX = _0x5bae59.scrollY = _0x5bae59.fixedScrollX = _0x5bae59.fixedScrollY = -1;
  _0x5bae59.shouldScrollY = _0x5bae59.shouldScrollX = 0;
  let _0x4d0866 = null;
  function _0x1cca1d(_0x575042, _0x4cff85) {
    if (_0x4d0866 != _0x71195b.type) {
      let _0x33016f = _0x8e966f.getEntityImageFromMockup(_0x71195b.type);
      let _0x39316e = _0x33016f.rerootUpgradeTree;
      let _0x4a0362 = [];
      for (let _0x521bc1 of _0x39316e) {
        let _0x396a46 = _0x521bc1 == undefined ? -1 : _0x5bae59.mockups.find(_0x4551a7 => _0x4551a7.className == _0x521bc1).index;
        _0x4a0362.push(_0x396a46);
      }
      if (!_0x4a0362.includes(-1)) {
        _0x255225(_0x4a0362);
      }
      _0x4d0866 = _0x71195b.type;
    }
    if (!_0x96c457) {
      console.log("No tank tree rendered yet.");
      return;
    }
    let _0xa937fe = _0x4cff85 / 2;
    let _0x3eea10 = _0xa937fe - 4;
    let _0x41453b = 8;
    let _0x25a37e = 0.5 + _0x41453b / _0xa937fe;
    if (_0x5bae59.died || _0x5bae59.diedbruh || _0x5bae59.diedseekbruh) {
      _0x5bae59.showTree = false;
      _0x5bae59.scrollX = _0x5bae59.scrollY = _0x5bae59.fixedScrollX = _0x5bae59.fixedScrollY = -1;
      _0x5bae59.shouldScrollY = _0x5bae59.shouldScrollX = 0;
    }
    _0x5bae59.fixedScrollX = Math.max(-_0x25a37e, Math.min(_0x96c457.width + _0x25a37e, _0x5bae59.fixedScrollX + _0x5bae59.shouldScrollX));
    _0x5bae59.fixedScrollY = Math.max(-_0x25a37e, Math.min(_0x96c457.height + _0x25a37e, _0x5bae59.fixedScrollY + _0x5bae59.shouldScrollY));
    _0x5bae59.scrollX = _0x8e966f.lerp(_0x5bae59.scrollX, _0x5bae59.fixedScrollX, 0.1);
    _0x5bae59.scrollY = _0x8e966f.lerp(_0x5bae59.scrollY, _0x5bae59.fixedScrollY, 0.1);
    for (let [_0xb42f72, _0x11b6f7] of _0x484663) {
      let _0x10d451 = _0xb42f72.x * _0x41453b + (_0xb42f72.x - _0x5bae59.scrollX) * _0xa937fe + 1 + _0x3eea10 * 0.5;
      let _0x51410c = _0xb42f72.y * _0x41453b + (_0xb42f72.y - _0x5bae59.scrollY) * _0xa937fe + 1 + _0x3eea10 * 0.5;
      let _0x268dfb = _0x11b6f7.x * _0x41453b + (_0x11b6f7.x - _0x5bae59.scrollX) * _0xa937fe + 1 + _0x3eea10 * 0.5;
      let _0x4ffdf3 = _0x11b6f7.y * _0x41453b + (_0x11b6f7.y - _0x5bae59.scrollY) * _0xa937fe + 1 + _0x3eea10 * 0.5;
      if (_0x268dfb < 0 || _0x10d451 > _0x5bae59.screenWidth || _0x4ffdf3 < 0 || _0x51410c > _0x5bae59.screenHeight) {
        continue;
      }
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 2;
      _0x50de1d(_0x10d451, _0x51410c, _0x268dfb, _0x4ffdf3);
    }
    _0x36be89.globalAlpha = 0.5;
    for (let {
      x: _0x350821,
      y: _0x5ecdda,
      colorIndex: _0x597d31,
      index: _0x4bbeb2
    } of _0x2cec5a) {
      let _0x52a7d3 = _0x350821 * _0x41453b + (_0x350821 - _0x5bae59.scrollX) * _0xa937fe;
      let _0x4fba2f = _0x5ecdda * _0x41453b + (_0x5ecdda - _0x5bae59.scrollY) * _0xa937fe;
      let _0x9d2b41 = _0xa937fe;
      if (_0x52a7d3 < -_0x9d2b41 || _0x52a7d3 > _0x5bae59.screenWidth + _0x9d2b41 || _0x4fba2f < -_0x9d2b41 || _0x4fba2f > _0x5bae59.screenHeight + _0x9d2b41) {
        continue;
      }
      let _0x4eb1df = -Math.PI / 4;
      let _0x49f275 = _0x5bae59.mockups[_0x4bbeb2].position;
      let _0x51ddf7 = _0x9d2b41 * 0.6 / _0x49f275.axis;
      let _0x4a599b = _0x52a7d3 + _0x9d2b41 * 0.5 - _0x51ddf7 * _0x49f275.middle.x * Math.cos(_0x4eb1df);
      let _0x87e824 = _0x4fba2f + _0x9d2b41 * 0.5 - _0x51ddf7 * _0x49f275.middle.x * Math.sin(_0x4eb1df);
      let _0x2993e0 = _0x8e966f.getEntityImageFromMockup(_0x4bbeb2.toString(), _0x71195b.color);
      let _0x1dbc95 = _0x2993e0.color;
      _0x36be89.globalAlpha = 0.5;
      _0x36be89.fillStyle = _0x289a34.getColor(_0x597d31 > 18 ? _0x597d31 - 19 : _0x597d31);
      _0x3be30b(_0x52a7d3, _0x4fba2f, _0x9d2b41, _0x9d2b41);
      _0x36be89.globalAlpha = 0.25;
      _0x36be89.fillStyle = _0x289a34.getColor(-10 + _0x597d31++);
      _0x3be30b(_0x52a7d3, _0x4fba2f, _0x9d2b41, _0x9d2b41 * 0.6);
      _0x36be89.fillStyle = _0x53f6d6.black;
      _0x3be30b(_0x52a7d3, _0x4fba2f + _0x9d2b41 * 0.6, _0x9d2b41, _0x9d2b41 * 0.4);
      _0x36be89.globalAlpha = 1;
      _0x3d9edd(_0x1dbc95, _0x4a599b, _0x87e824, _0x2993e0, 1, 1, _0x51ddf7 / _0x2993e0.size, _0x4eb1df, true);
      _0x4b1590(_0x2993e0.upgradeName ?? _0x2993e0.name, _0x52a7d3 + _0x9d2b41 / 2, _0x4fba2f + _0x9d2b41 - 5, _0x9d2b41 / 8 - 3, _0x53f6d6.guiwhite, "center");
      _0x36be89.lineWidth = 5;
      _0x3be30b(_0x52a7d3, _0x4fba2f, _0x9d2b41, _0x9d2b41, 10);
    }
    let _0x348e55 = "Use the arrow keys to navigate the class tree. Hold Shift to navigate faster. Press T again to close it.";
    let _0x4be71f = _0x5c2e6f(_0x348e55, 16);
    _0x36be89.globalAlpha = 1;
    _0x36be89.lineWidth = 1;
    _0x36be89.fillStyle = _0x53f6d6.black;
    _0x36be89.strokeStyle = _0x53f6d6.black;
    _0x36be89.fillText(_0x348e55, innerWidth / 2 - _0x4be71f / 2, innerHeight * 0.04);
    _0x36be89.strokeText(_0x348e55, innerWidth / 2 - _0x4be71f / 2, innerHeight * 0.04);
  }
  function _0x3be30b(_0x1db8bb, _0x5a50e3, _0x3b077a, _0x3ff8dd, _0x16bced) {
    _0x36be89.beginPath();
    _0x36be89.moveTo(_0x1db8bb + _0x16bced, _0x5a50e3);
    _0x36be89.lineTo(_0x1db8bb + _0x3b077a - _0x16bced, _0x5a50e3);
    _0x36be89.quadraticCurveTo(_0x1db8bb + _0x3b077a, _0x5a50e3, _0x1db8bb + _0x3b077a, _0x5a50e3 + _0x16bced);
    _0x36be89.lineTo(_0x1db8bb + _0x3b077a, _0x5a50e3 + _0x3ff8dd - _0x16bced);
    _0x36be89.quadraticCurveTo(_0x1db8bb + _0x3b077a, _0x5a50e3 + _0x3ff8dd, _0x1db8bb + _0x3b077a - _0x16bced, _0x5a50e3 + _0x3ff8dd);
    _0x36be89.lineTo(_0x1db8bb + _0x16bced, _0x5a50e3 + _0x3ff8dd);
    _0x36be89.quadraticCurveTo(_0x1db8bb, _0x5a50e3 + _0x3ff8dd, _0x1db8bb, _0x5a50e3 + _0x3ff8dd - _0x16bced);
    _0x36be89.lineTo(_0x1db8bb, _0x5a50e3 + _0x16bced);
    _0x36be89.quadraticCurveTo(_0x1db8bb, _0x5a50e3, _0x1db8bb + _0x16bced, _0x5a50e3);
    _0x36be89.closePath();
    _0x36be89.stroke();
  }
  let _0x5dc2e2 = Date.now();
  function _0x2a82b5(_0x5d1014) {
    if (_0x5bae59.tryingtoreconnect) {
      return;
    }
    const _0xd706b6 = 4;
    const _0x410f0e = 20;
    const _0x4fc6dd = _0x5bae59.screenWidth / 2;
    const _0x25db50 = 0;
    const _0x48f1dc = Date.now();
    const _0x3a1a0d = _0x48f1dc - _0x5dc2e2;
    _0x5dc2e2 = _0x48f1dc;
    const _0x169455 = _0x5bae59.messages1.length * (_0xd706b6 + _0x410f0e);
    const _0x1f6e03 = _0x5bae59.messages2.length * (_0xd706b6 + _0x410f0e);
    const _0x35b7d1 = _0x5bae59.messages3.length * (_0xd706b6 + _0x410f0e);
    const _0x57aa3e = _0x5bae59.messagesblue.length * (_0xd706b6 + _0x410f0e);
    const _0x22a2aa = _0x5bae59.messagesbaba.length * (_0xd706b6 + _0x410f0e);
    const _0x317512 = _0x5bae59.messages4.length * (_0xd706b6 + _0x410f0e);
    const _0x8b13b6 = _0x5bae59.messages5.length * (_0xd706b6 + _0x410f0e);
    let _0x28e7c6 = _0x5d1014 + _0x169455 + _0x1f6e03 + _0x35b7d1 + _0x57aa3e + _0x22a2aa + _0x317512 + _0x8b13b6;
    for (let _0xabee29 = 0; _0xabee29 < _0x5bae59.messages.length; _0xabee29++) {
      const _0x9f16c2 = _0x5bae59.messages[_0xabee29];
      const _0x170901 = _0x9f16c2.text;
      if (_0x9f16c2.len == null) {
        _0x9f16c2.len = _0x5c2e6f(_0x170901, _0x410f0e - 4);
      }
      if (_0x9f16c2.scale == null) {
        _0x9f16c2.scale = 0;
      }
      const _0x5ac61e = 10;
      if (_0x9f16c2.status > 1) {
        _0x9f16c2.status -= _0x3a1a0d * 0.045 / _0x5ac61e;
        _0x9f16c2.alpha = Math.min(1, _0x9f16c2.alpha + _0x3a1a0d * 0.045 / _0x5ac61e);
        _0x9f16c2.scale = Math.min(1, _0x9f16c2.scale + _0x3a1a0d * 0.045 / _0x5ac61e);
      } else if (_0xabee29 === 0 && (_0x5bae59.messages.length > 7 || Date.now() - _0x9f16c2.time > 10000)) {
        _0x9f16c2.alpha -= _0x3a1a0d * 0.045 / _0x5ac61e;
        _0x9f16c2.scale -= _0x3a1a0d * 0.045 / _0x5ac61e;
        if (_0x9f16c2.alpha <= 0) {
          _0x5bae59.messages.splice(0, 1);
          _0xabee29--;
          continue;
        }
      }
      if (_0xabee29 === 0 && _0x5bae59.messages.length > 15) {
        _0x9f16c2.alpha = 0;
        _0x5bae59.messages.splice(0, 1);
      }
      const _0x43e6e5 = _0x410f0e * _0x9f16c2.scale;
      const _0x214f59 = _0x9f16c2.len * _0x9f16c2.scale;
      _0x36be89.globalAlpha = _0x9f16c2.alpha * 0.5;
      _0x2f05ff(_0x4fc6dd - _0x214f59 / 2, _0x28e7c6, _0x214f59, _0x43e6e5, _0x53f6d6.black);
      _0x36be89.globalAlpha = _0x9f16c2.alpha;
      _0xa777d1(_0x170901, _0x4fc6dd, _0x28e7c6 + _0x43e6e5 / 2, _0x43e6e5 - 4, "white", "center", true);
      _0x28e7c6 += _0xd706b6 + _0x43e6e5;
    }
    _0x36be89.globalAlpha = 1;
  }
  function _0xa777d1(_0x3e5c37, _0x2532e8, _0xf2abef, _0x292c9a, _0x2912d7, _0x27a899 = "center", _0x5e83a7 = false) {
    _0x36be89.fillStyle = _0x2912d7;
    _0x36be89.font = (_0x5e83a7 ? "bold " : "") + _0x292c9a + "px Arial";
    _0x36be89.textAlign = _0x27a899;
    _0x36be89.textBaseline = "middle";
    _0x36be89.fillText(_0x3e5c37, _0x2532e8, _0xf2abef);
  }
  function _0x2f05ff(_0x1dcfc4, _0x1ae262, _0x28c6f0, _0xb4ab29, _0x397cc0) {
    _0x36be89.fillStyle = _0x397cc0;
    _0x36be89.fillRect(_0x1dcfc4, _0x1ae262, _0x28c6f0, _0xb4ab29);
  }
  let _0x125cf0 = Date.now();
  function _0x201b7d(_0x2f439d) {
    const _0x2cfb6a = 4;
    const _0x31d89a = 22;
    const _0x54c41f = _0x5bae59.screenWidth / 2;
    const _0x2f1a5f = Date.now();
    const _0x5977eb = _0x2f1a5f - _0x125cf0;
    _0x125cf0 = _0x2f1a5f;
    const _0x33b408 = _0x5bae59.messages1.length * (_0x2cfb6a + _0x31d89a);
    const _0x3b2951 = _0x5bae59.messages2.length * (_0x2cfb6a + _0x31d89a);
    const _0x1c6d79 = _0x5bae59.messages3.length * (_0x2cfb6a + _0x31d89a);
    const _0x274565 = _0x5bae59.messagesbaba.length * (_0x2cfb6a + _0x31d89a);
    const _0x13c79e = _0x5bae59.messages4.length * (_0x2cfb6a + _0x31d89a);
    const _0x3003da = _0x5bae59.messages5.length * (_0x2cfb6a + _0x31d89a);
    let _0x41dede = _0x2f439d + _0x33b408 + _0x3b2951 + _0x1c6d79 + _0x274565 + _0x13c79e + _0x3003da;
    for (let _0x55d6f0 = 0; _0x55d6f0 < _0x5bae59.messagesblue.length; _0x55d6f0++) {
      const _0x124a72 = _0x5bae59.messagesblue[_0x55d6f0];
      const _0x2e5996 = _0x124a72.text;
      if (_0x124a72.len == null) {
        _0x124a72.len = _0x5c2e6f(_0x2e5996, _0x31d89a - 4);
      }
      if (_0x124a72.scale == null) {
        _0x124a72.scale = 0;
      }
      const _0x2ea219 = 10;
      if (_0x124a72.status > 1) {
        _0x124a72.status -= _0x5977eb * 0.045 / _0x2ea219;
        _0x124a72.alpha = Math.min(1, _0x124a72.alpha + _0x5977eb * 0.045 / _0x2ea219);
        _0x124a72.scale = Math.min(1, _0x124a72.scale + _0x5977eb * 0.045 / _0x2ea219);
      } else if (_0x55d6f0 === 0 && (_0x5bae59.messagesblue.length > 1 || Date.now() - _0x124a72.time > 10000)) {
        _0x124a72.alpha -= _0x5977eb * 0.045 / _0x2ea219;
        _0x124a72.scale -= _0x5977eb * 0.045 / _0x2ea219;
        if (_0x124a72.alpha <= 0) {
          _0x5bae59.messagesblue.splice(0, 1);
          _0x55d6f0--;
          continue;
        }
      }
      const _0xf6b36e = _0x31d89a * _0x124a72.scale;
      const _0x5ca45f = _0x124a72.len * _0x124a72.scale;
      _0x36be89.globalAlpha = _0x124a72.alpha * 0.5;
      _0x2f05ff(_0x54c41f - _0x5ca45f / 2, _0x41dede, _0x5ca45f, _0xf6b36e, "#2e3eea");
      _0x36be89.globalAlpha = _0x124a72.alpha;
      _0xa777d1(_0x2e5996, _0x54c41f, _0x41dede + _0xf6b36e / 2, _0xf6b36e - 4, "white", "center", true);
      _0x41dede += _0x2cfb6a + _0xf6b36e;
    }
    _0x36be89.globalAlpha = 1;
  }
  let _0x311951 = Date.now();
  function _0x3f48b9(_0x184180) {
    if (_0x5bae59.tryingtoreconnect) {
      return;
    }
    const _0x14939d = 4;
    const _0x2e2688 = 20;
    const _0x46ab3d = _0x5bae59.screenWidth / 2;
    const _0x2c9739 = Date.now();
    const _0x5401ec = _0x2c9739 - _0x311951;
    _0x311951 = _0x2c9739;
    const _0x5396bd = _0x5bae59.messages2.length * (_0x14939d + _0x2e2688);
    const _0x36fea3 = _0x5bae59.messages3.length * (_0x14939d + _0x2e2688);
    const _0x3efccb = _0x5bae59.messagesbaba.length * (_0x14939d + _0x2e2688);
    const _0x390f3d = _0x5bae59.messages4.length * (_0x14939d + _0x2e2688);
    const _0x560a06 = _0x5bae59.messages5.length * (_0x14939d + _0x2e2688);
    let _0x3a910b = _0x184180 + _0x5396bd + _0x36fea3 + _0x3efccb + _0x390f3d + _0x560a06;
    for (let _0x22a455 = 0; _0x22a455 < _0x5bae59.messages1.length; _0x22a455++) {
      const _0x420c07 = _0x5bae59.messages1[_0x22a455];
      const _0x427504 = _0x420c07.text;
      if (_0x420c07.len == null) {
        _0x420c07.len = _0x5c2e6f(_0x427504, _0x2e2688 - 4);
      }
      if (_0x420c07.scale == null) {
        _0x420c07.scale = 0;
      }
      const _0x20487f = 10;
      if (_0x420c07.status > 1) {
        _0x420c07.status -= _0x5401ec * 0.045 / _0x20487f;
        _0x420c07.alpha = Math.min(1, _0x420c07.alpha + _0x5401ec * 0.045 / _0x20487f);
        _0x420c07.scale = Math.min(1, _0x420c07.scale + _0x5401ec * 0.045 / _0x20487f);
      } else if (_0x22a455 === 0 && (_0x5bae59.messages1.length > 5 || Date.now() - _0x420c07.time > 9e+99)) {
        _0x420c07.alpha -= _0x5401ec * 0.045 / _0x20487f;
        _0x420c07.scale -= _0x5401ec * 0.045 / _0x20487f;
        if (_0x420c07.alpha <= 0) {
          _0x5bae59.messages1.splice(0, 1);
          _0x22a455--;
          continue;
        }
      }
      const _0x27da8c = _0x2e2688 * _0x420c07.scale;
      const _0xafd1b5 = _0x420c07.len * _0x420c07.scale;
      _0x36be89.globalAlpha = _0x420c07.alpha * 0.5;
      _0x2f05ff(_0x46ab3d - _0xafd1b5 / 2, _0x3a910b, _0xafd1b5, _0x27da8c, "#FF0000");
      _0x36be89.globalAlpha = _0x420c07.alpha;
      _0xa777d1(_0x427504, _0x46ab3d, _0x3a910b + _0x27da8c / 2, _0x27da8c - 4, "white", "center", true);
      _0x3a910b += _0x14939d + _0x27da8c;
    }
    _0x36be89.globalAlpha = 1;
  }
  function _0x2f05ff(_0x35cabb, _0x313965, _0x35fec7, _0x4b1ba2, _0x231403) {
    _0x36be89.fillStyle = _0x231403;
    _0x36be89.fillRect(_0x35cabb, _0x313965, _0x35fec7, _0x4b1ba2);
  }
  let _0x597624 = Date.now();
  function _0x1deceb(_0x7d658c) {
    if (_0x5bae59.tryingtoreconnect) {
      return;
    }
    const _0x295a96 = 4;
    const _0x30fa5e = 20;
    const _0x1ac75d = _0x5bae59.screenWidth / 2;
    const _0x5856ec = Date.now();
    const _0x25db01 = _0x5856ec - _0x597624;
    _0x597624 = _0x5856ec;
    let _0x355246 = _0x7d658c;
    for (let _0x17eece = 0; _0x17eece < _0x5bae59.messages2.length; _0x17eece++) {
      const _0x1e0417 = _0x5bae59.messages2[_0x17eece];
      const _0x29010f = _0x1e0417.text;
      if (_0x1e0417.len == null) {
        _0x1e0417.len = _0x5c2e6f(_0x29010f, _0x30fa5e - 4);
      }
      if (_0x1e0417.scale == null) {
        _0x1e0417.scale = 0;
      }
      const _0x538b8a = 10;
      if (_0x1e0417.status > 1) {
        _0x1e0417.status -= _0x25db01 * 0.045 / _0x538b8a;
        _0x1e0417.alpha = Math.min(1, _0x1e0417.alpha + _0x25db01 * 0.045 / _0x538b8a);
        _0x1e0417.scale = Math.min(1, _0x1e0417.scale + _0x25db01 * 0.045 / _0x538b8a);
      } else if (_0x17eece === 0 && (_0x5bae59.messages2.length > 1 || Date.now() - _0x1e0417.time > 9e+99)) {
        _0x1e0417.alpha -= _0x25db01 * 0.045 / _0x538b8a;
        _0x1e0417.scale -= _0x25db01 * 0.045 / _0x538b8a;
        if (_0x1e0417.alpha <= 0) {
          _0x5bae59.messages2.splice(0, 1);
          _0x17eece--;
          continue;
        }
      }
      if (_0x5bae59.messages2.length > 1) {
        _0x5bae59.messages2.splice(1);
      }
      const _0x2b8e97 = _0x30fa5e * _0x1e0417.scale;
      const _0x485b99 = _0x1e0417.len * _0x1e0417.scale;
      _0x36be89.globalAlpha = _0x1e0417.alpha * 0.5;
      _0x2f05ff(_0x1ac75d - _0x485b99 / 2, _0x355246, _0x485b99, _0x2b8e97, "#00B0E1");
      _0x36be89.globalAlpha = _0x1e0417.alpha;
      _0xa777d1(_0x29010f, _0x1ac75d, _0x355246 + _0x2b8e97 / 2, _0x2b8e97 - 4, "white", "center", true);
      _0x355246 += _0x295a96 + _0x2b8e97;
    }
    _0x36be89.globalAlpha = 1;
  }
  let _0x482762 = Date.now();
  function _0x39aa53(_0x9e0d8e) {
    if (_0x5bae59.tryingtoreconnect) {
      return;
    }
    const _0x193d4b = 4;
    const _0x5c6c87 = 20;
    const _0x4d74be = _0x5bae59.screenWidth / 2;
    const _0x1b8ebe = Date.now();
    const _0x5ac8d5 = _0x1b8ebe - _0x482762;
    _0x482762 = _0x1b8ebe;
    let _0x30ed2c = _0x9e0d8e;
    for (let _0xdb4bae = 0; _0xdb4bae < _0x5bae59.messages3.length; _0xdb4bae++) {
      const _0x1b89c4 = _0x5bae59.messages3[_0xdb4bae];
      const _0x193a0c = _0x1b89c4.text;
      if (_0x1b89c4.len == null) {
        _0x1b89c4.len = _0x5c2e6f(_0x193a0c, _0x5c6c87 - 4);
      }
      if (_0x1b89c4.scale == null) {
        _0x1b89c4.scale = 0;
      }
      const _0x46951b = 10;
      if (_0x1b89c4.status > 1) {
        _0x1b89c4.status -= _0x5ac8d5 * 0.045 / _0x46951b;
        _0x1b89c4.alpha = Math.min(1, _0x1b89c4.alpha + _0x5ac8d5 * 0.045 / _0x46951b);
        _0x1b89c4.scale = Math.min(1, _0x1b89c4.scale + _0x5ac8d5 * 0.045 / _0x46951b);
      } else if (_0xdb4bae === 0 && (_0x5bae59.messages3.length > 1 || Date.now() - _0x1b89c4.time > 9e+99)) {
        _0x1b89c4.alpha -= _0x5ac8d5 * 0.045 / _0x46951b;
        _0x1b89c4.scale -= _0x5ac8d5 * 0.045 / _0x46951b;
        if (_0x1b89c4.alpha <= 0) {
          _0x5bae59.messages3.splice(0, 1);
          _0xdb4bae--;
          continue;
        }
      }
      if (_0x5bae59.messages3.length > 1) {
        _0x5bae59.messages3.splice(1);
      }
      const _0x5ecbfc = _0x5c6c87 * _0x1b89c4.scale;
      const _0x48f2cc = _0x1b89c4.len * _0x1b89c4.scale;
      _0x36be89.globalAlpha = _0x1b89c4.alpha * 0.5;
      _0x2f05ff(_0x4d74be - _0x48f2cc / 2, _0x30ed2c, _0x48f2cc, _0x5ecbfc, "#FF5E65");
      _0x36be89.globalAlpha = _0x1b89c4.alpha;
      _0xa777d1(_0x193a0c, _0x4d74be, _0x30ed2c + _0x5ecbfc / 2, _0x5ecbfc - 4, "white", "center", true);
      _0x30ed2c += _0x193d4b + _0x5ecbfc;
    }
    _0x36be89.globalAlpha = 1;
  }
  let _0x1ba34b = Date.now();
  function _0x2c1e94(_0x53e136) {
    const _0xb38ba4 = 4;
    const _0x35f18b = 20;
    const _0x2e6e7e = _0x5bae59.screenWidth / 2;
    const _0x4ad0fc = Date.now();
    const _0x1cde97 = _0x4ad0fc - _0x1ba34b;
    _0x1ba34b = _0x4ad0fc;
    let _0x17d3d2 = _0x53e136;
    for (let _0x4158d6 = 0; _0x4158d6 < _0x5bae59.messagesbaba.length; _0x4158d6++) {
      const _0x2de494 = _0x5bae59.messagesbaba[_0x4158d6];
      const _0x1429c4 = _0x2de494.text;
      if (_0x2de494.len == null) {
        _0x2de494.len = _0x5c2e6f(_0x1429c4, _0x35f18b - 4);
      }
      if (_0x2de494.scale == null) {
        _0x2de494.scale = 0;
      }
      const _0x5e8a14 = 10;
      if (_0x2de494.status > 1) {
        _0x2de494.status -= _0x1cde97 * 0.045 / _0x5e8a14;
        _0x2de494.alpha = Math.min(1, _0x2de494.alpha + _0x1cde97 * 0.045 / _0x5e8a14);
        _0x2de494.scale = Math.min(1, _0x2de494.scale + _0x1cde97 * 0.045 / _0x5e8a14);
      } else if (_0x4158d6 === 0 && (_0x5bae59.messagesbaba.length > 1 || Date.now() - _0x2de494.time > 9e+99)) {
        _0x2de494.alpha -= _0x1cde97 * 0.045 / _0x5e8a14;
        _0x2de494.scale -= _0x1cde97 * 0.045 / _0x5e8a14;
        if (_0x2de494.alpha <= 0) {
          _0x5bae59.messagesbaba.splice(0, 1);
          _0x4158d6--;
          continue;
        }
      }
      if (_0x5bae59.messagesbaba.length > 1) {
        _0x5bae59.messagesbaba.splice(1);
      }
      const _0x215a30 = _0x35f18b * _0x2de494.scale;
      const _0x18f65a = _0x2de494.len * _0x2de494.scale;
      _0x36be89.globalAlpha = _0x2de494.alpha * 0.5;
      _0x2f05ff(_0x2e6e7e - _0x18f65a / 2, _0x17d3d2, _0x18f65a, _0x215a30, "#5FFF64");
      _0x36be89.globalAlpha = _0x2de494.alpha;
      _0xa777d1(_0x1429c4, _0x2e6e7e, _0x17d3d2 + _0x215a30 / 2, _0x215a30 - 4, "white", "center", true);
      _0x17d3d2 += _0xb38ba4 + _0x215a30;
    }
    _0x36be89.globalAlpha = 1;
  }
  let _0x7b1e45 = Date.now();
  function _0x5c3c25(_0xc5c037) {
    if (_0x5bae59.tryingtoreconnect) {
      return;
    }
    const _0x207400 = 4;
    const _0x8a48a0 = 20;
    const _0x73bbcb = _0x5bae59.screenWidth / 2;
    const _0xef206d = Date.now();
    const _0x1589dd = _0xef206d - _0x7b1e45;
    _0x7b1e45 = _0xef206d;
    let _0x338bd7 = _0xc5c037;
    for (let _0x2c5f97 = 0; _0x2c5f97 < _0x5bae59.messages4.length; _0x2c5f97++) {
      const _0x6c2aab = _0x5bae59.messages4[_0x2c5f97];
      const _0xeb2618 = _0x6c2aab.text;
      if (_0x6c2aab.len == null) {
        _0x6c2aab.len = _0x5c2e6f(_0xeb2618, _0x8a48a0 - 4);
      }
      if (_0x6c2aab.scale == null) {
        _0x6c2aab.scale = 0;
      }
      const _0x329ab5 = 10;
      if (_0x6c2aab.status > 1) {
        _0x6c2aab.status -= _0x1589dd * 0.045 / _0x329ab5;
        _0x6c2aab.alpha = Math.min(1, _0x6c2aab.alpha + _0x1589dd * 0.045 / _0x329ab5);
        _0x6c2aab.scale = Math.min(1, _0x6c2aab.scale + _0x1589dd * 0.045 / _0x329ab5);
      } else if (_0x2c5f97 === 0 && (_0x5bae59.messages4.length > 1 || Date.now() - _0x6c2aab.time > 9e+99)) {
        _0x6c2aab.alpha -= _0x1589dd * 0.045 / _0x329ab5;
        _0x6c2aab.scale -= _0x1589dd * 0.045 / _0x329ab5;
        if (_0x6c2aab.alpha <= 0) {
          _0x5bae59.messages4.splice(0, 1);
          _0x2c5f97--;
          continue;
        }
      }
      if (_0x5bae59.messages4.length > 1) {
        _0x5bae59.messages4.splice(1);
      }
      const _0x4795f5 = _0x8a48a0 * _0x6c2aab.scale;
      const _0x2b20a0 = _0x6c2aab.len * _0x6c2aab.scale;
      _0x36be89.globalAlpha = _0x6c2aab.alpha * 0.5;
      _0x2f05ff(_0x73bbcb - _0x2b20a0 / 2, _0x338bd7, _0x2b20a0, _0x4795f5, "#FFF83B");
      _0x36be89.globalAlpha = _0x6c2aab.alpha;
      _0xa777d1(_0xeb2618, _0x73bbcb, _0x338bd7 + _0x4795f5 / 2, _0x4795f5 - 4, "white", "center", true);
      _0x338bd7 += _0x207400 + _0x4795f5;
    }
    _0x36be89.globalAlpha = 1;
  }
  let _0x578271 = Date.now();
  function _0x345117(_0x26b2d1) {
    if (_0x5bae59.tryingtoreconnect) {
      return;
    }
    const _0x16cf1b = 4;
    const _0x49d7aa = 20;
    const _0x55e8b1 = _0x5bae59.screenWidth / 2;
    const _0x509dc5 = Date.now();
    const _0x388a11 = _0x509dc5 - _0x578271;
    _0x578271 = _0x509dc5;
    let _0x205e43 = _0x26b2d1;
    for (let _0x149e3d = 0; _0x149e3d < _0x5bae59.messages5.length; _0x149e3d++) {
      const _0x2b3c7c = _0x5bae59.messages5[_0x149e3d];
      const _0x16c904 = _0x2b3c7c.text;
      if (_0x2b3c7c.len == null) {
        _0x2b3c7c.len = _0x5c2e6f(_0x16c904, _0x49d7aa - 4);
      }
      if (_0x2b3c7c.scale == null) {
        _0x2b3c7c.scale = 0;
      }
      const _0x49edd5 = 10;
      if (_0x2b3c7c.status > 1) {
        _0x2b3c7c.status -= _0x388a11 * 0.045 / _0x49edd5;
        _0x2b3c7c.alpha = Math.min(1, _0x2b3c7c.alpha + _0x388a11 * 0.045 / _0x49edd5);
        _0x2b3c7c.scale = Math.min(1, _0x2b3c7c.scale + _0x388a11 * 0.045 / _0x49edd5);
      } else if (_0x149e3d === 0 && (_0x5bae59.messages5.length > 1 || Date.now() - _0x2b3c7c.time > 9e+99)) {
        _0x2b3c7c.alpha -= _0x388a11 * 0.045 / _0x49edd5;
        _0x2b3c7c.scale -= _0x388a11 * 0.045 / _0x49edd5;
        if (_0x2b3c7c.alpha <= 0) {
          _0x5bae59.messages5.splice(0, 1);
          _0x149e3d--;
          continue;
        }
      }
      if (_0x5bae59.messages5.length > 1) {
        _0x5bae59.messages5.splice(1);
      }
      const _0x104287 = _0x49d7aa * _0x2b3c7c.scale;
      const _0xf09fd = _0x2b3c7c.len * _0x2b3c7c.scale;
      _0x36be89.globalAlpha = _0x2b3c7c.alpha * 0.5;
      _0x2f05ff(_0x55e8b1 - _0xf09fd / 2, _0x205e43, _0xf09fd, _0x104287, "#5C6BC0");
      _0x36be89.globalAlpha = _0x2b3c7c.alpha;
      _0xa777d1(_0x16c904, _0x55e8b1, _0x205e43 + _0x104287 / 2, _0x104287 - 4, "white", "center", true);
      _0x205e43 += _0x16cf1b + _0x104287;
    }
    _0x36be89.globalAlpha = 1;
  }
  function _0x2af555(_0x39fba7, _0x43e43e) {
    if (_0x5bae59.mobile) {
      return _0x283888(_0x39fba7, _0x43e43e);
    }
    _0x5bae59.canSkill = !!_0x71195b.points;
    _0x169e4d.set(0 + (_0x5bae59.died || _0x5bae59.disconnected || _0x5bae59.statHover || _0x5bae59.canSkill && !_0x71195b.skills.every(_0x13c4d3 => _0x13c4d3.cap === _0x13c4d3.amount)));
    _0x5bae59.clickables.stat.hide();
    let _0xd7fad5 = 4;
    let _0x58897f = 18;
    let _0x5cae60 = 40;
    let _0x1876f1 = 15;
    let _0x2c5d43 = _0x43e43e;
    let _0x2b8b80 = _0x2c5d43;
    let _0x552818 = _0x39fba7 + (_0x169e4d.get() - 1) * (_0x58897f + 50 + _0x2c5d43 * _0xbd3506(_0x71195b.skills.reduce((_0x13eac2, _0x44a464) => Math.max(_0x13eac2, _0x44a464.cap), 0)));
    let _0x1c953e = _0x5bae59.screenHeight - _0x39fba7 - _0x58897f;
    let _0x25bd96 = 11;
    let _0x5e538b = _0x71195b.getStatNames(_0x5bae59.mockups[parseInt(_0x71195b.type.split("-")[0])].statnames);
    let _0x48501a = canvas.height / _0x5bae59.screenHeight / _0x5bae59.ratio;
    let _0x37f43f = _0x5bae59.mouse.x * _0x48501a;
    let _0x30ddf7 = _0x5bae59.mouse.y * _0x48501a;
    for (let _0x2958ac = 0; _0x2958ac < _0x71195b.skills.length; _0x2958ac++) {
      _0x25bd96--;
      let _0x243c43 = _0x71195b.skills[_0x2958ac];
      let _0x5d1b88 = _0x5e538b[_0x25bd96 - 1];
      let _0x3f08c1 = _0x243c43.amount;
      let _0x6bc408 = _0x53f6d6[_0x243c43.color];
      let _0x171d48 = _0x243c43.softcap;
      let _0x2b92e1 = _0x243c43.cap;
      if (!_0x171d48) {
        continue;
      }
      _0x2c5d43 = _0x2b8b80;
      let _0x238e42 = 0;
      let _0x5b8b40 = _0x171d48 > _0x238e42;
      let _0x5a9050 = _0x171d48 < _0x2b92e1;
      if (_0x5b8b40) {
        _0x238e42 = _0x171d48;
      }
      _0xb9db3(_0x552818 + _0x58897f / 2, _0x552818 + _0x58897f / 2 + _0x2c5d43 * _0xbd3506(_0x171d48) - _0x1876f1, _0x1c953e + _0x58897f / 2, _0x58897f - 4, _0x53f6d6.black);
      _0xb9db3(_0x552818 + _0x58897f / 2, _0x552818 - _0x58897f / 2 + _0x2c5d43 * _0xbd3506(_0x171d48), _0x1c953e + _0x58897f / 2, _0x58897f - 6.5, _0x6bc408);
      _0xb9db3(_0x552818 + _0x58897f / 2, _0x552818 + _0x58897f / 2 + _0x2c5d43 * _0xbd3506(_0x171d48) - _0x5cae60, _0x1c953e + _0x58897f / 2, _0x58897f - 3, _0x53f6d6.black);
      _0xb9db3(_0x552818 + _0x58897f / 2, _0x552818 + _0x58897f / 2 + _0x2c5d43 * _0xbd3506(_0x3f08c1) - _0x5cae60, _0x1c953e + _0x58897f / 2, _0x58897f - 7.5, _0x6bc408);
      if (_0x5a9050) {
        _0x36be89.lineWidth = 1;
        _0x36be89.strokeStyle = _0x53f6d6.grey;
        for (let _0x682435 = _0x171d48 + 1; _0x682435 < _0x238e42; _0x682435++) {
          _0x50de1d(_0x552818 + _0x2c5d43 * _0xbd3506(_0x682435) - _0x5cae60, _0x1c953e + 1.5, _0x552818 + _0x2c5d43 * _0xbd3506(_0x682435) - _0x5cae60, _0x1c953e - 3 + _0x58897f);
        }
      }
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 1;
      for (let _0x594be6 = 1; _0x594be6 < _0x3f08c1 + 1; _0x594be6++) {
        _0x50de1d(_0x552818 + _0x2c5d43 * _0xbd3506(_0x594be6) - _0x5cae60, _0x1c953e + 1.5, _0x552818 + _0x2c5d43 * _0xbd3506(_0x594be6) - _0x5cae60, _0x1c953e - 3 + _0x58897f);
      }
      _0x2c5d43 = _0x2b8b80 * _0xbd3506(_0x238e42);
      let _0x4a64c5 = _0x3f08c1 == _0x2b92e1 ? _0x6bc408 : !_0x71195b.points || _0x171d48 !== _0x2b92e1 && _0x3f08c1 == _0x171d48 ? _0x53f6d6.grey : _0x53f6d6.guiwhite;
      _0x4b1590(_0x5d1b88, Math.round(_0x552818 + _0x2c5d43 / 2) + 0.5, _0x1c953e + _0x58897f / 2, _0x58897f - 8, _0x4a64c5, "center", true);
      _0x4b1590("+", Math.round(_0x552818 + _0x2c5d43 - _0x58897f * 0.3) - 3.5, _0x1c953e + _0x58897f / 2 + 0.5, _0x58897f - 5, _0x53f6d6.black, "right", true);
      _0x4b1590("[" + _0x25bd96 % 10 + "]", Math.round(_0x552818 + _0x2c5d43 - _0x58897f * 2) - 1.5, _0x1c953e + _0x58897f / 2, _0x58897f - 8, _0x4a64c5, "right", true);
      if (_0x4a64c5 === _0x53f6d6.guiwhite) {
        _0x5bae59.clickables.stat.place(_0x25bd96 - 1, _0x552818 * _0x48501a, _0x1c953e * _0x48501a, _0x2c5d43 * _0x48501a, _0x58897f * _0x48501a);
      }
      if (_0x3f08c1) {
        _0x4b1590(_0x4a64c5 === _0x6bc408 ? "MAX" : "+" + _0x3f08c1, Math.round(_0x552818 + _0x2c5d43 + 4) + 0.5, _0x1c953e + _0x58897f / 2, _0x58897f - 5, _0x6bc408, "left", true);
      }
      _0x1c953e -= _0x58897f + _0xd7fad5;
    }
    _0x5bae59.clickables.hover.place(0, 0, _0x1c953e * _0x48501a, _0x2c5d43 * 0.8 * _0x48501a, (_0x5bae59.screenHeight - _0x1c953e) * _0x48501a);
    if (_0x71195b.points !== 0) {
      _0x4b1590("x" + _0x71195b.points, Math.round(_0x552818 + _0x2c5d43 - 2) + 0.5, Math.round(_0x1c953e + _0x58897f - 4) + 0.5, 20, _0x53f6d6.guiwhite, "right");
    }
  }
  function _0x283888(_0x2334b, _0x2cbda9) {
    _0x2334b += 800;
    _0x5bae59.canSkill = _0x71195b.points > 0 && _0x71195b.skills.some(_0x4e4088 => _0x4e4088.amount < _0x4e4088.cap);
    _0x169e4d.set(_0x5bae59.canSkill || _0x5bae59.died || _0x5bae59.disconnected ? 1 : 0);
    let _0x45be60 = _0x169e4d.get();
    _0x5bae59.clickables.stat.hide();
    let _0x5c5662 = _0x2cbda9 / 2;
    let _0x1b7ee8 = _0x2cbda9 / 3;
    let _0x16df98 = _0x45be60 * 2 * _0x2334b - _0x2334b;
    let _0x2daf5c = _0x71195b.getStatNames(_0x5bae59.mockups[parseInt(_0x71195b.type.split("-")[0])].statnames);
    let _0x110f86 = canvas.height / _0x5bae59.screenHeight / _0x5bae59.ratio;
    if (_0x5bae59.canSkill) {
      for (let _0x1508a9 = 0; _0x1508a9 < _0x71195b.skills.length; _0x1508a9++) {
        let _0x296238 = _0x71195b.skills[_0x1508a9];
        let _0x4f9e61 = _0x296238.softcap;
        if (_0x4f9e61 <= 0) {
          continue;
        }
        let _0x5734ac = _0x296238.amount;
        let _0x2839c4 = _0x53f6d6[_0x296238.color];
        let _0x399b48 = _0x296238.cap;
        let _0x5609c6 = _0x2daf5c[9 - _0x1508a9].split(/\s+/);
        let _0x4886f9 = Math.floor(_0x5609c6.length / 2);
        let [_0x5a769a, _0x5717e2] = _0x5609c6.length === 1 ? [_0x5609c6[0], null] : [_0x5609c6.slice(0, _0x4886f9).join(" "), _0x5609c6.slice(_0x4886f9).join(" ")];
        _0x36be89.globalAlpha = 0.5;
        _0x36be89.fillStyle = _0x2839c4;
        _0x1409fe(_0x16df98, _0x2334b, _0x5c5662, _0x1b7ee8 * 2 / 3);
        _0x36be89.globalAlpha = 0.1;
        _0x36be89.fillStyle = _0x53f6d6.black;
        _0x1409fe(_0x16df98, _0x2334b + _0x1b7ee8 * 2 / 3 * 2 / 3, _0x5c5662, _0x1b7ee8 * 2 / 3 / 3);
        _0x36be89.globalAlpha = 1;
        _0x36be89.fillStyle = _0x53f6d6.guiwhite;
        _0x1409fe(_0x16df98, _0x2334b + _0x1b7ee8 * 2 / 3, _0x5c5662, _0x1b7ee8 / 3);
        _0x36be89.fillStyle = _0x2839c4;
        _0x1409fe(_0x16df98, _0x2334b + _0x1b7ee8 * 2 / 3, _0x5c5662 * _0x5734ac / _0x4f9e61, _0x1b7ee8 / 3);
        _0x36be89.strokeStyle = _0x53f6d6.black;
        _0x36be89.lineWidth = 1;
        for (let _0x52af0c = 1; _0x52af0c < _0x399b48; _0x52af0c++) {
          let _0x539c4b = _0x16df98 + _0x52af0c / _0x4f9e61 * _0x5c5662;
          _0x50de1d(_0x539c4b, _0x2334b + _0x1b7ee8 * 2 / 3, _0x539c4b, _0x2334b + _0x1b7ee8);
        }
        if (_0x399b48 !== 0 && !!_0x71195b.points && (_0x4f9e61 === _0x399b48 || _0x5734ac !== _0x4f9e61)) {
          _0x5bae59.clickables.stat.place(9 - _0x1508a9, _0x16df98 * _0x110f86, _0x2334b * _0x110f86, _0x5c5662 * _0x110f86, _0x1b7ee8 * _0x110f86);
        }
        if (_0x5717e2) {
          _0x4b1590(_0x5717e2, _0x16df98 + _0x5c5662 / 2, _0x2334b + _0x1b7ee8 * 0.55, _0x1b7ee8 / 5, _0x53f6d6.guiwhite, "center");
          _0x4b1590(_0x5a769a, _0x16df98 + _0x5c5662 / 2, _0x2334b + _0x1b7ee8 * 0.3, _0x1b7ee8 / 5, _0x53f6d6.guiwhite, "center");
        } else {
          _0x4b1590(_0x5a769a, _0x16df98 + _0x5c5662 / 2, _0x2334b + _0x1b7ee8 * 0.425, _0x1b7ee8 / 5, _0x53f6d6.guiwhite, "center");
        }
        if (_0x5734ac > 0) {
          _0x4b1590(_0x5734ac < _0x4f9e61 ? "+" + _0x5734ac : "MAX", _0x16df98 + _0x5c5662 / 2, _0x2334b + _0x1b7ee8 * 1.3, _0x1b7ee8 / 4, _0x2839c4, "center");
        }
        _0x36be89.strokeStyle = _0x53f6d6.black;
        _0x36be89.globalAlpha = 1;
        _0x36be89.lineWidth = 3;
        _0x50de1d(_0x16df98, _0x2334b + _0x1b7ee8 * 2 / 3, _0x16df98 + _0x5c5662, _0x2334b + _0x1b7ee8 * 2 / 3);
        _0x1409fe(_0x16df98, _0x2334b, _0x5c5662, _0x1b7ee8, true);
        _0x16df98 += _0x45be60 * (_0x5c5662 + 14);
      }
      if (_0x71195b.points > 1) {
        _0x4b1590("x " + _0x71195b.points, _0x16df98, _0x2334b + 20, 20, _0x53f6d6.guiwhite, "left");
      }
    }
  }
  function _0x19a05b(_0x11077a, _0x561afc, _0x49017b) {
    let _0x260820 = 4;
    let _0x2a5a20 = _0x561afc * 1.65;
    let _0x9bc5a3 = 20;
    let _0xbbfc11 = (_0x5bae59.screenWidth - _0x2a5a20) / 2;
    let _0x37bc2d = _0x5bae59.screenHeight - _0x11077a - _0x9bc5a3;
    _0x36be89.lineWidth = 1;
    _0xb9db3(_0xbbfc11, _0xbbfc11 + _0x2a5a20, _0x37bc2d + _0x9bc5a3 / 2, _0x9bc5a3 - 3 + _0x2c1aed.graphical.barChunk, _0x53f6d6.black);
    _0xb9db3(_0xbbfc11, _0xbbfc11 + _0x2a5a20, _0x37bc2d + _0x9bc5a3 / 2, _0x9bc5a3 - 3, "#3c3c3c");
    _0xb9db3(_0xbbfc11, _0xbbfc11 + _0x2a5a20 * _0x71195b.__s.getProgress(), _0x37bc2d + _0x9bc5a3 / 2, _0x9bc5a3 - 3.5, _0x53f6d6.gold);
    _0x4b1590("Level " + _0x71195b.__s.getLevel() + " " + _0x71195b.class, _0xbbfc11 + _0x2a5a20 / 2, _0x37bc2d + _0x9bc5a3 / 2, _0x9bc5a3 - 4, _0x53f6d6.guiwhite, "center", true);
    _0x9bc5a3 = 14;
    _0x37bc2d -= _0x9bc5a3 + _0x260820;
    _0xb9db3(_0xbbfc11 + _0x2a5a20 * 0.1, _0xbbfc11 + _0x2a5a20 * 0.9, _0x37bc2d + _0x9bc5a3 / 2, _0x9bc5a3 - 3 + _0x2c1aed.graphical.barChunk, _0x53f6d6.black);
    _0xb9db3(_0xbbfc11 + _0x2a5a20 * 0.1, _0xbbfc11 + _0x2a5a20 * 0.9, _0x37bc2d + _0x9bc5a3 / 2, _0x9bc5a3 - 3, "#3c3c3c");
    _0xb9db3(_0xbbfc11 + _0x2a5a20 * 0.1, _0xbbfc11 + _0x2a5a20 * (0.1 + (_0x49017b ? Math.min(1, _0x71195b.__s.getScore() / _0x49017b) : 1) * 0.8), _0x37bc2d + _0x9bc5a3 / 2, _0x9bc5a3 - 3.5, _0x53f6d6.green);
    _0x4b1590("Score: " + _0x8e966f.handleLargeNumber(_0x71195b.__s.getScore()), _0xbbfc11 + _0x2a5a20 / 2, _0x37bc2d + _0x9bc5a3 / 2, _0x9bc5a3 - 2, _0x53f6d6.guiwhite, "center", true);
    _0x36be89.lineWidth = 4;
    _0x4b1590(_0x5bae59.player.name, Math.round(_0xbbfc11 + _0x2a5a20 / 2) + 0.5, Math.round(_0x37bc2d - 10 - _0x260820) + 0.5, 32, _0x5bae59.nameColor, "center");
  }
  function _0x394225(_0x4ff17c, _0x77ea5b, _0x439201, _0x5ad597 = "up") {
    _0x36be89.beginPath();
    switch (_0x5ad597) {
      case "up":
        _0x36be89.moveTo(_0x4ff17c, _0x77ea5b - _0x439201);
        _0x36be89.lineTo(_0x4ff17c - _0x439201, _0x77ea5b + _0x439201);
        _0x36be89.lineTo(_0x4ff17c + _0x439201, _0x77ea5b + _0x439201);
        break;
      case "down":
        _0x36be89.moveTo(_0x4ff17c, _0x77ea5b + _0x439201);
        _0x36be89.lineTo(_0x4ff17c - _0x439201, _0x77ea5b - _0x439201);
        _0x36be89.lineTo(_0x4ff17c + _0x439201, _0x77ea5b - _0x439201);
        break;
      case "left":
        _0x36be89.moveTo(_0x4ff17c - _0x439201, _0x77ea5b);
        _0x36be89.lineTo(_0x4ff17c + _0x439201, _0x77ea5b - _0x439201);
        _0x36be89.lineTo(_0x4ff17c + _0x439201, _0x77ea5b + _0x439201);
        break;
      case "right":
        _0x36be89.moveTo(_0x4ff17c + _0x439201, _0x77ea5b);
        _0x36be89.lineTo(_0x4ff17c - _0x439201, _0x77ea5b - _0x439201);
        _0x36be89.lineTo(_0x4ff17c - _0x439201, _0x77ea5b + _0x439201);
        break;
    }
    _0x36be89.closePath();
    _0x36be89.fill();
    _0x36be89.stroke();
  }
  function _0x1cbbbc(_0x908741, _0x14ba4c) {
    let _0x35e8de = 0.85;
    let _0x103137 = _0x14ba4c * _0x35e8de;
    let _0x14196e = _0x103137 / _0x5bae59.gameWidth * _0x5bae59.gameHeight;
    if (_0x5bae59.mobile) {
      _0x14196e = _0x103137 / _0x5bae59.gameWidth / 1.9 * _0x5bae59.gameHeight;
      _0x103137 = _0x14ba4c * 0.6;
    }
    if (_0x5bae59.gameHeight > _0x5bae59.gameWidth || _0x5bae59.gameHeight < _0x5bae59.gameWidth) {
      let _0x2bb318 = [_0x5bae59.gameWidth / _0x5bae59.gameHeight, _0x5bae59.gameHeight / _0x5bae59.gameWidth];
      _0x103137 /= _0x2bb318[1] * 1.5;
      _0x14196e /= _0x2bb318[1] * 1.5;
      if (_0x103137 > _0x14ba4c * 2) {
        _0x2bb318 = _0x103137 / (_0x14ba4c * 2);
      } else if (_0x14196e > _0x14ba4c * 2) {
        _0x2bb318 = _0x14196e / (_0x14ba4c * 2);
      } else {
        _0x2bb318 = 1;
      }
      _0x103137 /= _0x2bb318;
      _0x14196e /= _0x2bb318;
    }
    let _0x9ac0d1 = _0x5bae59.screenWidth - _0x908741 - _0x103137;
    let _0x242564 = _0x5bae59.screenHeight - _0x14196e - _0x908741;
    _0x36be89.globalAlpha = 0.4;
    let _0x51bea7 = _0x5bae59.roomSetup[0].length;
    let _0x132006 = _0x5bae59.roomSetup.length;
    let _0x93ff6b = 0;
    for (let _0x4581f4 = 0; _0x4581f4 < _0x132006; _0x4581f4++) {
      let _0x25a812 = _0x5bae59.roomSetup[_0x4581f4];
      let _0x4ce266 = 0;
      for (let _0x62a4fe = 0; _0x62a4fe < _0x51bea7; _0x62a4fe++) {
        let _0x350c30 = _0x5bae59.roomSetup[_0x4581f4][_0x62a4fe];
        _0x36be89.fillStyle = _0x289a34.getZoneColor(_0x350c30);
        if (_0x289a34.getZoneColor(_0x350c30) !== _0x53f6d6.white) {
          _0x1409fe(_0x9ac0d1 + _0x4ce266 * _0x103137 / _0x51bea7, _0x242564 + _0x93ff6b * _0x14196e / _0x132006, _0x103137 / _0x51bea7, _0x14196e / _0x132006);
        }
        _0x4ce266++;
      }
      _0x93ff6b++;
    }
    _0x36be89.fillStyle = _0x53f6d6.white;
    _0x1409fe(_0x9ac0d1, _0x242564, _0x103137, _0x14196e);
    _0x36be89.globalAlpha = 1;
    _0x36be89.lineWidth = 5;
    _0x36be89.fillStyle = "#D5D5D5";
    _0x1409fe(_0x9ac0d1, _0x242564, _0x103137, _0x14196e, true);
    for (let _0x1b6b6c of _0x39b95e.get()) {
      _0x36be89.fillStyle = _0x289a34.mixColors(_0x289a34.modifyColor(_0x1b6b6c.color), _0x53f6d6.black, 0.3);
      _0x36be89.globalAlpha = _0x1b6b6c.alpha;
      switch (_0x1b6b6c.type) {
        case 2:
          _0x1409fe(_0x9ac0d1 + (_0x1b6b6c.x - _0x1b6b6c.size) / _0x5bae59.gameWidth * _0x103137 - 0.4, _0x242564 + (_0x1b6b6c.y - _0x1b6b6c.size) / _0x5bae59.gameHeight * _0x14196e - 1, _0x1b6b6c.size * 2 / _0x5bae59.gameWidth * _0x103137 + 0.2, _0x1b6b6c.size * 2 / _0x5bae59.gameWidth * _0x103137 + 0.2);
          break;
        case 1:
          _0x5c1bb9(_0x9ac0d1 + _0x1b6b6c.x / _0x5bae59.gameWidth * _0x103137, _0x242564 + _0x1b6b6c.y / _0x5bae59.gameHeight * _0x14196e, _0x1b6b6c.size / _0x5bae59.gameWidth * _0x103137 + 0.2);
          break;
        case 0:
          if (_0x1b6b6c.id !== _0x71195b.playerid) {
            _0x5c1bb9(_0x9ac0d1 + _0x1b6b6c.x / _0x5bae59.gameWidth * _0x103137, _0x242564 + _0x1b6b6c.y / _0x5bae59.gameHeight * _0x14196e, 2);
          }
          break;
      }
    }
    _0x36be89.globalAlpha = 1;
    _0x36be89.lineWidth = 1;
    _0x36be89.strokeStyle = _0x53f6d6.black;
    _0x36be89.fillStyle = _0x53f6d6.black;
    _0x5c1bb9(_0x9ac0d1 + _0x5bae59.player.cx / _0x5bae59.gameWidth * _0x103137 - 1, _0x242564 + _0x5bae59.player.cy / _0x5bae59.gameHeight * _0x14196e - 1, 2, false);
    if (_0x5bae59.showDebug) {
      _0x1409fe(_0x9ac0d1, _0x242564 - 40, _0x103137, 30);
      _0x9756fd(_0x1184fe.get(), _0x9ac0d1, _0x242564 - 40, _0x103137, 30, _0x53f6d6.teal);
      _0x5433ff(_0x5bae59.metrics.rendergap, _0x9ac0d1, _0x242564 - 40, _0x103137, 30, _0x53f6d6.pink);
      _0x208b43(GRAPHDATA, _0x9ac0d1, _0x242564 - 40, _0x103137, 30, _0x53f6d6.yellow);
    }
    if (!_0x5bae59.showDebug) {
      _0x242564 += 42;
    }
    function _0x561a95(_0x327f90, _0x287672, _0x348a4d) {
      const _0x2e21e3 = _0x327f90.map((_0x55ddd1, _0x3517d9) => {
        const _0x37353e = Math.round(_0x55ddd1 + _0x348a4d * (_0x287672[_0x3517d9] - _0x55ddd1));
        return Math.min(255, Math.max(0, _0x37353e));
      });
      return "rgb(" + _0x2e21e3.join(",") + ")";
    }
    const _0x1c91b7 = [0, 255, 0];
    const _0x18cfa9 = [169, 169, 169];
    const _0x1f068f = [185, 232, 126];
    const _0x3c6e16 = Date.now();
    const _0xa74536 = 1200;
    const _0x224523 = _0x3c6e16 % _0xa74536 / _0xa74536;
    let _0x161011;
    if (_0x224523 < 0.5) {
      _0x161011 = _0x561a95(_0x1c91b7, _0x1f068f, _0x224523 * 2);
    } else {
      _0x161011 = _0x561a95(_0x1f068f, _0x18cfa9, (_0x224523 - 0.5) * 2);
    }
    if (_0x5bae59.showDebug) {
      _0x4b1590("Arras2.io", _0x9ac0d1 + _0x103137, _0x242564 - 50 - 84 - 2, 15, _0x161011, "right");
      let _0x4a6e1e = Object.values(_0x4acbef).reduce((_0x41effa, _0x1dc98f) => _0x41effa + _0x1dc98f, 0);
      _0x4b1590(_0x4a6e1e + " players", _0x9ac0d1 + _0x103137, _0x242564 - 50 - 70, 10, _0x53f6d6.guiwhite, "right");
      _0x4b1590("Prediction: " + Math.round(GRAPHDATA) + "ms", _0x9ac0d1 + _0x103137, _0x242564 - 50 - 56, 10, _0x53f6d6.guiwhite, "right");
      _0x4b1590("Bandwidth: " + _0x71195b.bandwidth.in + " in, " + _0x71195b.bandwidth.out + " out", _0x9ac0d1 + _0x103137, _0x242564 - 50 - 42, 10, _0x53f6d6.guiwhite, "right");
      _0x4b1590("Update Rate: " + _0x5bae59.metrics.updatetime + "Hz", _0x9ac0d1 + _0x103137, _0x242564 - 50 - 28, 10, _0x53f6d6.guiwhite, "right");
      _0x4b1590((_0x71195b.fps * 100).toFixed(2) + "% : " + _0x5bae59.metrics.rendertime + " FPS", _0x9ac0d1 + _0x103137, _0x242564 - 50 - 14, 10, _0x5bae59.metrics.rendertime > 10 ? _0x53f6d6.guiwhite : _0x53f6d6.orange, "right");
      _0x4b1590(_0x5bae59.metrics.latency + " ms - " + _0x5bae59.serverName, _0x9ac0d1 + _0x103137, _0x242564 - 50, 10, _0x53f6d6.guiwhite, "right");
    } else {
      _0x4b1590("Arras2.io", _0x9ac0d1 + _0x103137, _0x242564 - 50 - 42 - 2, 15, _0x161011, "right");
      let _0x531647 = Object.values(_0x4acbef).reduce((_0x4c5704, _0x4b0510) => _0x4c5704 + _0x4b0510, 0);
      _0x4b1590(_0x531647 + " players", _0x9ac0d1 + _0x103137, _0x242564 - 50 - 28, 10, _0x53f6d6.guiwhite, "right");
      _0x4b1590((_0x71195b.fps * 100).toFixed(2) + "% : " + _0x5bae59.metrics.rendertime + " FPS", _0x9ac0d1 + _0x103137, _0x242564 - 50 - 14, 10, _0x5bae59.metrics.rendertime > 10 ? _0x53f6d6.guiwhite : _0x53f6d6.orange, "right");
      _0x4b1590(_0x5bae59.metrics.latency + " ms : " + _0x5bae59.metrics.updatetime + "Hz", _0x9ac0d1 + _0x103137, _0x242564 - 50, 10, _0x53f6d6.guiwhite, "right");
    }
    _0x5bae59.fps = _0x5bae59.metrics.rendertime;
  }
  function _0x465018(_0x3c25b8, _0x5e661f, _0x288422) {
    let _0x3f9e81 = _0x2c4e9e.get();
    let _0x52d071 = 6;
    let _0x576380 = _0x5e661f;
    let _0x32812d = 14;
    let _0x1d7ebe = 12;
    let _0x3948cf = _0x5bae59.screenWidth - _0x576380 - _0x3c25b8;
    let _0xb29f02 = _0x3c25b8 + _0x32812d + 15;
    _0x4b1590("Scoreboard", Math.round(_0x3948cf + _0x576380 / 2) + 0.5, Math.round(_0xb29f02 - 10) + 0.5, _0x1d7ebe + 8, _0x53f6d6.guiwhite, "center");
    for (let _0x305fe7 = 0; _0x305fe7 < _0x3f9e81.data.length; _0x305fe7++) {
      let _0x2cd75c = _0x3f9e81.data[_0x305fe7];
      _0xb9db3(_0x3948cf, _0x3948cf + _0x576380, _0xb29f02 + _0x32812d / 2, _0x32812d - 1 + _0x2c1aed.graphical.barChunk, _0x53f6d6.black);
      _0xb9db3(_0x3948cf, _0x3948cf + _0x576380, _0xb29f02 + _0x32812d / 2, _0x32812d - 1, "#3c3c3c");
      let _0x1d21c0 = Math.min(1, _0x2cd75c.score / _0x288422);
      _0xb9db3(_0x3948cf, _0x3948cf + _0x576380 * _0x1d21c0, _0xb29f02 + _0x32812d / 2, _0x32812d - 1.5, _0x289a34.modifyColor(_0x2cd75c.barColor));
      let _0x56d8ed = _0x2cd75c.nameColor || "#FFFFFF";
      _0x4b1590(_0x2cd75c.label + (": " + _0x8e966f.handleLargeNumber(Math.round(_0x2cd75c.score))), _0x3948cf + _0x576380 / 2, _0xb29f02 + _0x32812d / 2, _0x1d7ebe - 3, _0x56d8ed, "center", true, 1);
      let _0x2210fe = _0x32812d / (_0x2cd75c.position.axis / 1);
      let _0x1b202c = _0x3948cf - _0x32812d * 1.5 - _0x2210fe * _0x2cd75c.position.middle.x * 0.707;
      let _0x2906e4 = _0xb29f02 + _0x32812d * 0.5 + _0x2210fe * _0x2cd75c.position.middle.x * 0.707;
      let _0x269ff0 = _0x2cd75c.image.color;
      _0x3d9edd(_0x269ff0, _0x1b202c, _0x2906e4, _0x2cd75c.image, 1 / _0x2210fe, 1, _0x2210fe * _0x2210fe / _0x2cd75c.image.size, -Math.PI / 4, true);
      _0xb29f02 += _0x52d071 + _0x32812d;
    }
  }
  function _0x597bac(_0x55bbe3, _0x281282) {
    _0x5bae59.upgradeMenuVisible = _0x71195b.upgrades.length > 0;
    _0x4afde8.set(0 + (_0x5bae59.canUpgrade || _0x5bae59.upgradeHover));
    let _0x57e799 = _0x4afde8.get();
    _0x5bae59.clickables.upgrade.hide();
    if (_0x71195b.upgrades.length > 0) {
      _0x5bae59.canUpgrade = true;
      let _0xde81e1 = 20;
      let _0x125f65 = 8;
      let _0x1b0932 = _0x281282 / 2;
      let _0x111d39 = _0x1b0932;
      let _0x5773b3 = _0x57e799 * 2 * _0x55bbe3 - _0x55bbe3;
      let _0x142e7c = _0x55bbe3 - -15 + _0xde81e1;
      let _0x315c82 = _0x55bbe3 - -12 + _0x125f65;
      let _0x549082 = _0x5773b3;
      let _0x69b25 = _0x5773b3;
      let _0x586eeb = 0;
      let _0x31415f = 0;
      let _0x46e0f2 = 0;
      let _0xe17f75 = 10;
      let _0x5e0e6e = _0x5bae59.clickables.upgrade.check({
        x: _0x5bae59.mouse.x,
        y: _0x5bae59.mouse.y
      });
      let _0x378bd2 = Math.max(3, Math.ceil(_0x71195b.upgrades.length / 4));
      let _0x17c361 = _0x5bae59.canvas.height / _0x5bae59.screenHeight / _0x5bae59.ratio;
      let _0x2260eb = -1;
      let _0x58360b;
      _0xbc2643 += 0.01;
      let _0x536819 = "Upgrades";
      let _0x15d797 = _0x5c2e6f(_0x536819, _0xde81e1 * 2.3);
      _0x4b1590(_0x536819, _0x549082 + (_0x586eeb - _0x15d797) / 90, _0x315c82 - _0x125f65, _0x125f65 * 2.75, _0x53f6d6.guiwhite, "left", false);
      let _0x25ad08 = (_0x5bae59.target.x + _0x5bae59.canvas.width / 2) / _0x17c361;
      let _0x5aa55e = (_0x5bae59.target.y + _0x5bae59.canvas.height / 2) / _0x17c361;
      for (let _0xf153d0 = 0; _0xf153d0 < _0x71195b.upgrades.length; _0xf153d0++) {
        let _0x313c9c = _0x71195b.upgrades[_0xf153d0];
        let _0x53af2c = _0x313c9c[0];
        let _0x515699 = _0x313c9c[1] == "undefined" ? "" : _0x313c9c[1];
        let _0xedd5b6 = _0x313c9c[2];
        if (_0x31415f === _0x378bd2 || _0x53af2c != _0x2260eb) {
          _0x5773b3 = _0x549082;
          _0x58360b += _0x111d39 + _0xde81e1;
          if (_0x53af2c != _0x2260eb) {
            if (_0x515699.length > 0) {
              _0x4b1590(" " + _0x515699, _0x549082, _0x58360b + _0xde81e1 * 2, _0xde81e1 * 2.3, _0x53f6d6.guiwhite, "left", false);
              _0x58360b += _0xde81e1 * 3;
            }
          }
          _0x2260eb = _0x53af2c;
          _0x31415f = 0;
        } else {
          _0x5773b3 += _0x57e799 * (_0x1b0932 + _0xde81e1);
        }
        if (!_0x58360b) {
          _0x58360b = _0x142e7c;
        }
        _0x586eeb = _0x5773b3;
        let _0x2738ae = _0x5773b3;
        let _0x1b390e = _0x58360b;
        let _0x48a2f6 = _0x5773b3 + _0x1b0932;
        let _0x385aaf = _0x58360b + _0x111d39;
        let _0x1dd607 = _0x2738ae * _0x17c361;
        let _0x255294 = _0x1b390e * _0x17c361;
        let _0xd7cef = _0x48a2f6 * _0x17c361;
        let _0x55c7b1 = _0x385aaf * _0x17c361;
        _0x5bae59.clickables.upgrade.place(_0xf153d0, _0x1dd607, _0x255294, _0x1b0932 * _0x17c361, _0x111d39 * _0x17c361);
        let _0x28e789 = _0x8e966f.getEntityImageFromMockup(_0xedd5b6, _0x71195b.color);
        let _0x57ec2e = _0x28e789.position;
        let _0x30704e = _0x1b0932 * 0.6 / _0x57ec2e.axis;
        let _0x4ce0c9 = _0x5773b3 + _0x1b0932 * 0.5 - _0x30704e * _0x57ec2e.middle.x * Math.cos(_0xbc2643);
        let _0x26b02c = _0x58360b + _0x111d39 * 0.5 - _0x30704e * _0x57ec2e.middle.x * Math.sin(_0xbc2643);
        let _0x37d4a1 = _0x28e789.color;
        if (_0x25ad08 > _0x1dd607 && _0x25ad08 < _0xd7cef && _0x5aa55e > _0x255294 && _0x5aa55e < _0x55c7b1 && !_0x5bae59.disconnected) {
          _0x36be89.globalAlpha = 0.1;
        } else {
          _0x36be89.globalAlpha = 0.5;
        }
        _0x36be89.fillStyle = _0x289a34.getColor(_0xe17f75 > 18 ? _0xe17f75 - 19 : _0xe17f75);
        _0x1409fe(_0x2738ae, _0x1b390e, _0x1b0932, _0x111d39);
        _0x36be89.globalAlpha = 0.1;
        _0x36be89.fillStyle = _0x289a34.getColor(-10 + _0xe17f75++);
        _0x1409fe(_0x2738ae, _0x1b390e, _0x1b0932, _0x111d39 * 0.6);
        _0x36be89.fillStyle = _0x53f6d6.black;
        _0x1409fe(_0x2738ae, _0x1b390e + _0x111d39 * 0.6, _0x1b0932, _0x111d39 * 0.4);
        _0x36be89.globalAlpha = 1;
        _0x3d9edd(_0x37d4a1, _0x4ce0c9, _0x26b02c, _0x28e789, 1, 1, _0x30704e / _0x28e789.size, _0xbc2643, true);
        let _0x2cea83 = _0x1d1444(_0x46e0f2);
        _0x4b1590(_0x28e789.upgradeName ?? _0x28e789.name, _0x5773b3 + (_0x2cea83 ? 0.9 : 1) * _0x1b0932 / 2, _0x58360b + _0x111d39 - 6, _0x111d39 / 8 - 3, _0x53f6d6.guiwhite, "center");
        if (_0x2cea83) {
          _0x4b1590("[" + _0x2cea83 + "]", _0x5773b3 + _0x1b0932 - 4, _0x58360b + _0x111d39 - 6, _0x111d39 / 8 - 3, _0x53f6d6.guiwhite, "right");
        }
        _0x36be89.strokeStyle = _0x53f6d6.black;
        _0x36be89.globalAlpha = 1;
        _0x36be89.lineWidth = 5;
        _0x1409fe(_0x5773b3, _0x58360b, _0x1b0932, _0x111d39, true);
        _0x31415f++;
        _0x46e0f2++;
      }
      let _0x1a376d = 14;
      let _0x51fba8 = "Ignore";
      let _0x38dea3 = _0x5c2e6f(_0x51fba8, _0x1a376d - 3) + 40;
      let _0x3fb4bd = _0x69b25 + (_0x586eeb + _0x1b0932 + _0xde81e1 - _0x69b25) / 2;
      let _0x17a5f7 = _0x58360b + _0x111d39 + _0xde81e1;
      if (_0x5bae59.skipClicked && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#9B9B9B";
      } else if (_0x5bae59.skipbox && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#C7C3C3";
      } else {
        _0x36be89.fillStyle = "#AFAEAE";
      }
      _0x36be89.fillRect(_0x3fb4bd - _0x38dea3 / 2, _0x17a5f7 - 5, _0x38dea3, (_0x1a376d + 10) / 2);
      _0x36be89.fillStyle = "#8F8E8E";
      _0x36be89.fillRect(_0x3fb4bd - _0x38dea3 / 2, _0x17a5f7 - 5 + (_0x1a376d + 10) / 2, _0x38dea3, (_0x1a376d + 10) / 2);
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 4;
      _0x36be89.strokeRect(_0x3fb4bd - _0x38dea3 / 2, _0x17a5f7 - 5, _0x38dea3, _0x1a376d + 10);
      _0x4b1590(_0x51fba8, _0x3fb4bd, _0x17a5f7 + _0x1a376d / 2, _0x1a376d - 2, _0x53f6d6.guiwhite, "center", true);
      _0x5bae59.clickables.skipUpgrades.place(0, (_0x3fb4bd - _0x38dea3 / 2) * _0x17c361, (_0x17a5f7 - 5) * _0x17c361, _0x38dea3 * _0x17c361, (_0x1a376d + 10) * _0x17c361);
    } else {
      _0x5bae59.canUpgrade = false;
      _0x5bae59.clickables.upgrade.hide();
      _0x5bae59.clickables.skipUpgrades.hide();
    }
  }
  function _0x1ae7a3() {
    if (_0x5bae59.upgradeMenuVisible) {
      return;
    }
    let _0x5dd575 = canvas.height / _0x5bae59.screenHeight / _0x5bae59.ratio;
    let _0x30004d = 30;
    let _0x7ff71d = _0x5bae59.closesettings ? "Close" : "Exit";
    let _0x43f118 = _0x5c2e6f(_0x7ff71d, _0x30004d - 3) + 20;
    let _0x4c1e81 = _0x5bae59.screenWidth / 22;
    let _0x25396c = _0x5bae59.screenHeight / 26;
    if (_0x5bae59.SettingsClicked && !_0x5bae59.disconnected) {
      _0x36be89.fillStyle = "#9B9B9B";
    } else if (_0x5bae59.Settingsbox && !_0x5bae59.disconnected) {
      _0x36be89.fillStyle = "#C7C3C3";
    } else {
      _0x36be89.fillStyle = "#AFAEAE";
    }
    _0x36be89.fillRect(_0x4c1e81 - _0x43f118 / 2, _0x25396c - 5, _0x43f118, (_0x30004d + 10) / 2);
    _0x36be89.fillStyle = "#8F8E8E";
    _0x36be89.fillRect(_0x4c1e81 - _0x43f118 / 2, _0x25396c - 5 + (_0x30004d + 10) / 2, _0x43f118, (_0x30004d + 10) / 2);
    _0x36be89.strokeStyle = _0x53f6d6.black;
    _0x36be89.lineWidth = 4;
    _0x36be89.strokeRect(_0x4c1e81 - _0x43f118 / 2, _0x25396c - 5, _0x43f118, _0x30004d + 10);
    _0x4b1590(_0x7ff71d, _0x4c1e81, _0x25396c + _0x30004d / 2 + 3, 16, _0x53f6d6.guiwhite, "center", true);
    _0x5bae59.clickables.settingsbutton.place(0, (_0x4c1e81 - _0x43f118 / 2) * _0x5dd575, (_0x25396c - 5) * _0x5dd575, _0x43f118 * _0x5dd575, (_0x30004d + 10) * _0x5dd575);
    if (_0x5bae59.hasclickedsettings && _0x5bae59.closesettings || _0x5bae59.discardexit) {
      _0x85f61d.set();
      let _0x351777 = _0x5bae59.screenWidth / 14;
      let _0x295001 = _0x5bae59.screenHeight / 5;
      let _0x17a20c = 120;
      let _0x56ca04 = 100;
      let _0x42183a = -30;
      let _0x17bd6f = 30;
      _0x36be89.fillStyle = "#9B9B9B";
      _0x36be89.fillRect(_0x351777 - _0x17a20c / 2, _0x295001 - _0x56ca04 / 2, _0x17a20c, _0x56ca04);
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 4;
      _0x36be89.strokeRect(_0x351777 - _0x17a20c / 2, _0x295001 - _0x56ca04 / 2, _0x17a20c, _0x56ca04);
      let _0x33323f = _0x351777;
      let _0x393f37 = _0x295001 - _0x56ca04 / 1.8 + _0x42183a + _0x17bd6f * 3;
      _0x4b1590("Exit", _0x33323f, _0x393f37, 23, _0x53f6d6.guiwhite, "center", true);
      _0x5bae59.clickables.exit.place(0, (_0x351777 - _0x17a20c / 2) * _0x5dd575, (_0x393f37 - _0x17bd6f / 2) * _0x5dd575, _0x17a20c * _0x5dd575, _0x17bd6f * _0x5dd575);
    }
    if (_0x5bae59.choosenexit && !_0x5bae59.discardexit) {
      let _0x2a5f2a = _0x5bae59.screenWidth / 14;
      let _0x25e38d = _0x5bae59.screenHeight / 5;
      let _0x4591bf = 250;
      let _0x163102 = 100;
      let _0x1b4091 = 10;
      let _0x461b8f = 30;
      _0x36be89.fillStyle = "#9B9B9B";
      _0x36be89.fillRect(_0x2a5f2a - _0x4591bf / 2, _0x25e38d - _0x163102 / 2, _0x4591bf, _0x163102);
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 4;
      _0x36be89.strokeRect(_0x2a5f2a - _0x4591bf / 2, _0x25e38d - _0x163102 / 2, _0x4591bf, _0x163102);
      _0x36be89.fillStyle = _0x53f6d6.guiwhite;
      let _0x1a6b4d = _0x2a5f2a;
      let _0x753e7b = _0x25e38d - _0x163102 / 2 + _0x1b4091 + _0x461b8f * 0;
      _0x4b1590("Are you sure you want to exit?", _0x1a6b4d, _0x753e7b, 15, _0x53f6d6.guiwhite, "center", true);
      let _0x891d2f = 80;
      let _0x206eb1 = 40;
      let _0x410b47 = 20;
      let _0x27bbe6 = _0x2a5f2a - _0x891d2f / 2 - _0x410b47;
      let _0x5725d0 = _0x25e38d;
      let _0x22f2eb = _0x206eb1 / 2;
      if (_0x5bae59.yesClicked && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#0079EE";
      } else if (_0x5bae59.yesbox && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#3D9FFF";
      } else {
        _0x36be89.fillStyle = "#1E90FF";
      }
      _0x36be89.fillRect(_0x27bbe6 - _0x891d2f / 2, _0x5725d0 - _0x206eb1 / 2, _0x891d2f, _0x22f2eb);
      _0x36be89.fillStyle = "#0174d7";
      _0x36be89.fillRect(_0x27bbe6 - _0x891d2f / 2, _0x5725d0 - _0x206eb1 / 2 + _0x22f2eb, _0x891d2f, _0x22f2eb);
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 4;
      _0x36be89.strokeRect(_0x27bbe6 - _0x891d2f / 2, _0x5725d0 - _0x206eb1 / 2, _0x891d2f, _0x206eb1);
      _0x4b1590("Yes", _0x27bbe6, _0x5725d0, 16, _0x53f6d6.guiwhite, "center", true);
      _0x5bae59.clickables.yes.place(0, (_0x27bbe6 - _0x891d2f / 2) * _0x5dd575, (_0x5725d0 - _0x206eb1 / 2) * _0x5dd575, _0x891d2f * _0x5dd575, _0x206eb1 * _0x5dd575);
      let _0x2c1203 = _0x2a5f2a + _0x891d2f / 3 + _0x410b47;
      if (_0x5bae59.noClicked && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#ff1313";
      } else if (_0x5bae59.nobox && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#ff6969";
      } else {
        _0x36be89.fillStyle = "#ff4747";
      }
      _0x36be89.fillRect(_0x2c1203 - _0x891d2f / 2, _0x5725d0 - _0x206eb1 / 2, _0x891d2f, _0x22f2eb);
      _0x36be89.fillStyle = "#d80000";
      _0x36be89.fillRect(_0x2c1203 - _0x891d2f / 2, _0x5725d0 - _0x206eb1 / 2 + _0x22f2eb, _0x891d2f, _0x22f2eb);
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 4;
      _0x36be89.strokeRect(_0x2c1203 - _0x891d2f / 2, _0x5725d0 - _0x206eb1 / 2, _0x891d2f, _0x206eb1);
      _0x4b1590("No", _0x2c1203, _0x5725d0, 16, _0x53f6d6.guiwhite, "center", true);
      _0x5bae59.clickables.no.place(0, (_0x2c1203 - _0x891d2f / 2) * _0x5dd575, (_0x5725d0 - _0x206eb1 / 2) * _0x5dd575, _0x891d2f * _0x5dd575, _0x206eb1 * _0x5dd575);
    }
  }
  function _0x70946a(_0x339e63, _0x529940) {
    if (!_0x5bae59.mobile) {
      return;
    }
    if (_0x5bae59.clickables.mobileButtons.active == null) {
      _0x5bae59.clickables.mobileButtons.active = false;
    }
    if (_0x5bae59.clickables.mobileButtons.altFire == null) {
      _0x5bae59.clickables.mobileButtons.altFire = false;
    }
    _0x5bae59.clickables.mobileButtons.hide();
    let _0x373b4e = _0x5bae59.canvas.height / _0x5bae59.screenHeight / _0x5bae59.ratio;
    let _0x359c61 = Math.ceil(_0x71195b.upgrades.length / 9);
    let _0x4035fb = _0x5bae59.canUpgrade ? _0x529940 / 2 * _0x4afde8.get() * _0x359c61 / 1.5 + _0x339e63 * (_0x359c61 + 1.6) + 7 : 0 + _0x5bae59.canSkill ? _0x529940 / 3 + _0x339e63 : 0;
    let _0x1b4fc9 = (_0x529940 - _0x339e63 * 2) / 3;
    function _0xef908d(_0x50f75b, _0x579352, _0x1caee9, _0x5dab2d, _0x510f11, _0x54841f) {
      _0x5bae59.clickables.mobileButtons.place(_0x50f75b, _0x579352 * _0x373b4e, _0x1caee9 * _0x373b4e, _0x5dab2d * _0x373b4e, _0x510f11 * _0x373b4e);
      _0x36be89.globalAlpha = 0.5;
      _0x36be89.fillStyle = _0x53f6d6.grey;
      _0x1409fe(_0x579352, _0x1caee9, _0x5dab2d, _0x510f11);
      _0x36be89.globalAlpha = 0.1;
      _0x36be89.fillStyle = _0x53f6d6.black;
      _0x1409fe(_0x579352, _0x1caee9 + _0x510f11 * 0.6, _0x5dab2d, _0x510f11 * 0.4);
      _0x36be89.globalAlpha = 1;
      _0x4b1590(_0x54841f, _0x579352 + _0x5dab2d / 2, _0x1caee9 + _0x510f11 * 0.5, _0x510f11 * 0.6, _0x53f6d6.guiwhite, "center", true);
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 3;
      _0x1409fe(_0x579352, _0x1caee9, _0x5dab2d, _0x510f11, true);
    }
    function _0xb02a2a(_0x534e0e, _0x2735ae, _0x233bf6, _0x26e218) {
      let _0x16f862;
      let _0x5986ec;
      let _0x10332a = 0;
      let _0x2d8917 = () => _0x16f862 = _0x2735ae;
      let _0x2cf696 = () => _0x5986ec = _0x233bf6;
      _0x2d8917();
      _0x2cf696();
      for (let _0x295901 = 0; _0x295901 < _0x534e0e.length; _0x295901++) {
        for (let _0x250360 = 0; _0x250360 < _0x534e0e[_0x295901].length; _0x250360++) {
          _0xef908d(_0x534e0e[_0x295901][_0x250360][3] ?? _0x10332a, _0x16f862, _0x5986ec, _0x26e218 * (_0x534e0e[_0x295901][_0x250360][1] ?? 1), _0x26e218 * (_0x534e0e[_0x295901][_0x250360][2] ?? 1), _0x534e0e[_0x295901][_0x250360][0]);
          _0x16f862 += _0x26e218 * (_0x534e0e[_0x295901][_0x250360][1] ?? 1) + _0x339e63;
          _0x10332a++;
        }
        _0x2d8917();
        _0x5986ec += Math.max(..._0x534e0e[_0x295901].map(_0x15f016 => _0x26e218 * (_0x15f016[2] ?? 1))) + _0x339e63;
      }
    }
    let _0x26fd82 = _0x5bae59.clickables.mobileButtons.active ? [[[_0x5bae59.clickables.mobileButtons.active ? "-" : "+"], ["Alt " + (_0x5bae59.clickables.mobileButtons.altFire ? "Manual" : "Disabled"), 6], ["Fullscreen", 5]], [["Autofire", 3.5], ["Reverse", 3.5], ["Self-Destruct", 5]], [["Autospin", 3.5], ["Override", 3.5], ["Level Up", 5]], [["Action", 3.5], ["Special", 3.5], ["Chat", 5]]] : [[[_0x5bae59.clickables.mobileButtons.active ? "-" : "+"]]];
    if (_0x5bae59.clickables.mobileButtons.altFire) {
      _0x26fd82.push([["❖", 2, 2, 12]]);
    }
    _0xb02a2a(_0x26fd82, _0x339e63 * 2, _0x4035fb + _0x339e63, _0x1b4fc9);
  }
  let _0x43165d = _0x5bae59.player.cx;
  let _0x635149 = _0x5bae59.player.cy;
  let _0x311656 = 2000;
  let _0x2db478 = null;
  const _0x11bd4 = _0xdaf44c => _0xdaf44c < 0.5 ? _0xdaf44c * 2 * _0xdaf44c : -1 + (4 - _0xdaf44c * 2) * _0xdaf44c;
  const _0x44e0f3 = (_0x59ba39, _0x45c48e) => {
    let _0x3e37fe = 0;
    _0x30e370++;
    if (_0x5bae59.ab) {
      const _0x54bbc2 = 1000;
      const _0x35ca7b = _0x18517a() / 1000 * _0x54bbc2;
      _0x5bae59.player.renderx = _0x5bae59.player.cx + Math.cos(_0x35ca7b) * 500;
      _0x5bae59.player.rendery = _0x5bae59.player.cy + Math.sin(_0x35ca7b) * 500;
    }
    if (_0x5bae59.aa && !_0x5bae59.aaaa) {
      const _0x3afdc5 = 0.1;
      const _0x3126ce = _0x18517a() / 1000 * _0x3afdc5;
      _0x5bae59.player.renderx = _0x5bae59.player.cx + Math.cos(_0x3126ce) * 500;
      _0x5bae59.player.rendery = _0x5bae59.player.cy + Math.sin(_0x3126ce) * 500;
    } else if (_0x5bae59.disconnected) {
      const _0x32375e = 0.1;
      const _0x4acd09 = _0x18517a() / 1000 * _0x32375e;
      _0x5bae59.player.renderx = _0x5bae59.player.cx + Math.cos(_0x4acd09) * 500;
      _0x5bae59.player.rendery = _0x5bae59.player.cy + Math.sin(_0x4acd09) * 500;
    } else if (_0x5bae59.aaaa) {
      _0x5bae59.aaaa = true;
      let _0x28016 = _0x18517a();
      if (!_0x2db478) {
        _0x2db478 = _0x28016;
      }
      let _0x5eb886 = _0x28016 - _0x2db478;
      if (_0x5eb886 < _0x311656) {
        let _0x2173d4 = _0x5eb886 / _0x311656;
        let _0x5e4616 = _0x11bd4(_0x2173d4);
        let _0x79dcee = _0x8e966f.lerp(_0x43165d, _0x5bae59.player.cx, _0x5e4616);
        let _0x52bfe8 = _0x8e966f.lerp(_0x635149, _0x5bae59.player.cy, _0x5e4616);
        _0x5bae59.player.renderx = _0x79dcee;
        _0x5bae59.player.rendery = _0x52bfe8;
      } else {
        _0x5bae59.player.renderx = _0x8e966f.lerp(_0x5bae59.player.renderx, _0x5bae59.player.cx, 0.1, true);
        _0x5bae59.player.rendery = _0x8e966f.lerp(_0x5bae59.player.rendery, _0x5bae59.player.cy, 0.1, true);
      }
    }
    let _0xd92e6a = _0x59ba39 * _0x5bae59.player.renderx;
    let _0x2b925e = _0x59ba39 * _0x5bae59.player.rendery;
    _0x367fae(_0xd92e6a, _0x2b925e, _0x59ba39);
    _0x464447(_0xd92e6a, _0x2b925e, _0x59ba39);
    _0x59ba39 = _0x8e966f.getScreenRatio();
    _0x44cf89(_0x59ba39, true);
    let _0x56d5aa = 200 / _0x59ba39;
    let _0x17ef82 = 20;
    _0x71195b.__s.update();
    let _0x4d057f = _0x2c4e9e.get();
    let _0xe68f5 = _0x4d057f.max;
    if (_0x5bae59.isspectating) {} else if (_0x5bae59.showTree) {
      _0x1cca1d(_0x17ef82, _0x56d5aa);
    } else if (_0x5bae59.mobile) {
      if (_0x5bae59.mobile) {
        let _0x56b899 = Math.min(_0x5bae59.screenWidth * 0.6, _0x5bae59.screenHeight * 0.12);
        _0x36be89.globalAlpha = 0.3;
        _0x36be89.fillStyle = "#ffffff";
        _0x36be89.beginPath();
        _0x36be89.arc(_0x5bae59.screenWidth * 1 / 6, _0x5bae59.screenHeight * 2 / 3, _0x56b899, 0, Math.PI * 2);
        _0x36be89.arc(_0x5bae59.screenWidth * 5 / 6, _0x5bae59.screenHeight * 2 / 3, _0x56b899, 0, Math.PI * 2);
        _0x36be89.fill();
      }
      _0x2a82b5(_0x17ef82);
      _0x3f48b9(_0x17ef82);
      _0x1deceb(_0x17ef82);
      _0x39aa53(_0x17ef82);
      _0x201b7d(_0x17ef82);
      _0x5c3c25(_0x17ef82);
      _0x345117(_0x17ef82);
      _0x2c1e94(_0x17ef82);
      _0x2af555(_0x17ef82, _0x56d5aa);
      _0x19a05b(_0x17ef82, _0x56d5aa, _0xe68f5);
      _0x1cbbbc(_0x17ef82, _0x56d5aa);
      _0x465018(_0x17ef82, _0x56d5aa, _0xe68f5, _0x4d057f);
      _0x597bac(_0x17ef82, _0x56d5aa);
    } else if (_0x5bae59.died) {
      _0x2a82b5(_0x17ef82);
      _0x3f48b9(_0x17ef82);
      _0x1deceb(_0x17ef82);
      _0x201b7d(_0x17ef82);
      _0x39aa53(_0x17ef82);
      _0x5c3c25(_0x17ef82);
      _0x345117(_0x17ef82);
      _0x2c1e94(_0x17ef82);
      _0x2af555(_0x17ef82, _0x56d5aa);
      _0x1cbbbc(_0x17ef82, _0x56d5aa);
      _0x465018(_0x17ef82, _0x56d5aa, _0xe68f5, _0x4d057f);
    } else if (_0x5bae59.diedbruh) {
      _0x2a82b5(_0x17ef82);
      _0x3f48b9(_0x17ef82);
      _0x1deceb(_0x17ef82);
      _0x201b7d(_0x17ef82);
      _0x39aa53(_0x17ef82);
      _0x5c3c25(_0x17ef82);
      _0x345117(_0x17ef82);
      _0x2c1e94(_0x17ef82);
      _0x2af555(_0x17ef82, _0x56d5aa);
      _0x1cbbbc(_0x17ef82, _0x56d5aa);
      _0x465018(_0x17ef82, _0x56d5aa, _0xe68f5, _0x4d057f);
    } else if (_0x5bae59.diedseekbruh) {
      _0x2a82b5(_0x17ef82);
      _0x3f48b9(_0x17ef82);
      _0x1deceb(_0x17ef82);
      _0x201b7d(_0x17ef82);
      _0x39aa53(_0x17ef82);
      _0x5c3c25(_0x17ef82);
      _0x345117(_0x17ef82);
      _0x2c1e94(_0x17ef82);
      _0x2af555(_0x17ef82, _0x56d5aa);
      _0x1cbbbc(_0x17ef82, _0x56d5aa);
      _0x465018(_0x17ef82, _0x56d5aa, _0xe68f5, _0x4d057f);
    } else if (!_0x5bae59.aa) {
      _0x2a82b5(_0x17ef82);
      _0x3f48b9(_0x17ef82);
      _0x1deceb(_0x17ef82);
      _0x39aa53(_0x17ef82);
      _0x201b7d(_0x17ef82);
      _0x5c3c25(_0x17ef82);
      _0x345117(_0x17ef82);
      _0x2c1e94(_0x17ef82);
      _0x2af555(_0x17ef82, _0x56d5aa);
      _0x19a05b(_0x17ef82, _0x56d5aa, _0xe68f5);
      _0x1cbbbc(_0x17ef82, _0x56d5aa);
      _0x465018(_0x17ef82, _0x56d5aa, _0xe68f5, _0x4d057f);
      _0x597bac(_0x17ef82, _0x56d5aa);
    }
    _0x5bae59.metrics.lastrender = _0x18517a();
  };
  let _0x3949a6 = () => {
    let _0x51511c = {
      " kills": [Math.round(_0x5bae59.finalKills[0].get()), 1],
      " assists": [Math.round(_0x5bae59.finalKills[1].get()), 0.5],
      " visitors defeated": [Math.round(_0x5bae59.finalKills[2].get()), 3],
      " polygons destroyed": [Math.round(_0x5bae59.finalKills[3].get()), 0.05]
    };
    let _0x519a73 = [];
    let _0x4fae20 = 0;
    for (let _0x38433c in _0x51511c) {
      if (_0x51511c[_0x38433c][0]) {
        _0x4fae20 += _0x51511c[_0x38433c][0] * _0x51511c[_0x38433c][1];
        _0x519a73.push(_0x51511c[_0x38433c][0] + _0x38433c);
      }
    }
    return (_0x4fae20 < 4 ? "🎯" : _0x4fae20 < 8 ? "💥" : _0x4fae20 < 15 ? "💢" : _0x4fae20 < 25 ? "🔥" : _0x4fae20 < 50 ? "💣" : _0x4fae20 < 75 ? "👺" : _0x4fae20 < 100 ? "🌶️" : "💯") + " " + (!_0x519a73.length ? "You haven't killed any entity" : _0x519a73.length == 1 ? _0x519a73.join(" and ") : _0x519a73.slice(0, -1).join(", ") + " and " + _0x519a73[_0x519a73.length - 1]);
  };
  let _0x57b0c7 = () => {
    let _0x3e31a1 = "";
    if (_0x5bae59.finalKillers.length) {
      _0x3e31a1 = "";
      for (let _0x3a7c02 of _0x5bae59.finalKillers) {
        _0x3e31a1 += "" + _0x8e966f.addArticle(_0x8e966f.getEntityImageFromMockup(_0x3a7c02).name) + " and ";
      }
      _0x3e31a1 = _0x3e31a1.slice(0, -4);
    } else {
      _0x3e31a1 += "An unknown entity";
    }
    return _0x3e31a1;
  };
  const _0x529db4 = (_0xeb4284, _0x1f94c5 = {
    x: 0,
    y: 0
  }) => {
    if (_0x5bae59.diedseekbruh && _0x5bae59.gameStart) {
      _0x5ddb16(_0x53f6d6.black, 0.5);
      let _0x1cdfcc = _0x8e966f.getScreenRatio();
      let _0xc8db0e = (_0x13de0e, _0x41635d) => {
        _0x5bae59.screenWidth /= _0x13de0e;
        _0x5bae59.screenHeight /= _0x13de0e;
        _0x36be89.scale(_0x13de0e, _0x13de0e);
        if (!_0x41635d) {
          _0x1cdfcc *= _0x13de0e;
        }
      };
      _0xc8db0e(_0x1cdfcc, true);
      let _0x222982 = _0x17aebb.deathScreen.get();
      _0x36be89.translate(0, -_0x222982 * _0x5bae59.screenHeight);
      let _0xb74997 = _0x5bae59.screenWidth / 2;
      let _0x2a8497 = _0x5bae59.screenHeight / 2;
      let _0x2d8f39 = 140;
      let _0x3a677d = _0x5bae59.mockups[parseInt(_0x71195b.type.split("-")[0])].position;
      let _0x2eb1a1 = _0x2d8f39 / _0x3a677d.axis;
      let _0x2ae52f = _0x5bae59.screenWidth / 2 + 70 + _0x2eb1a1 * _0x3a677d.middle.x * 0.707;
      let _0x20d277 = _0x5bae59.screenHeight / 2 - 70 + _0x2eb1a1 * _0x3a677d.middle.x * 0.707;
      let _0x1bbcb7 = _0x8e966f.getEntityImageFromMockup(_0x71195b.type, _0x71195b.color);
      let _0x284b68 = _0x1bbcb7.color;
      let _0x318650 = " " + _0x1bbcb7.name;
      let _0x3ff783 = _0x36be89.measureText(_0x318650).width;
      let _0x344886 = 1 + _0x3ff783 / 500;
      _0x3d9edd(_0x284b68, _0x2ae52f, _0x20d277, _0x1bbcb7, _0x344886 * 1.5, _0x344886 * 1, _0x2eb1a1 * 0.5 / _0x1bbcb7.realSize, -Math.PI / 4, true);
      _0x4b1590("You were killed by: ", _0xb74997, _0x2a8497 - 170, 18, _0x53f6d6.guiwhite, "center");
      _0x4b1590(_0x57b0c7(), _0xb74997, _0x2a8497 - 140, 24, _0x53f6d6.guiwhite, "center");
      _0x4b1590(_0x318650, _0xb74997 + 82, _0x2a8497 + 20, 20, _0x53f6d6.guiwhite, "center");
      _0x4b1590("Level: " + _0x71195b.__s.getLevel(), _0xb74997 - 177, _0x2a8497 - 40, 20, _0x53f6d6.guiwhite, "center");
      _0x4b1590("Score: " + _0x8e966f.formatLargeNumber(Math.round(_0x5bae59.finalScore.get())), _0xb74997 - 150, _0x2a8497 - 70, 20, _0x53f6d6.guiwhite, "center");
      _0x4b1590("Time alive: " + _0x8e966f.timeForHumans(Math.round(_0x5bae59.finalLifetime.get())), _0xb74997 - 150, _0x2a8497 - 10, 20, _0x53f6d6.guiwhite, "center");
      _0x4b1590("Game already started! Cannot join", _0xb74997, _0x2a8497 + 70, 24, _0x53f6d6.red, "center");
      _0x36be89.translate(0, _0x222982 * _0x5bae59.screenHeight);
    } else if (_0x5bae59.diedbruh && _0x5bae59.gameStart) {
      _0x5ddb16(_0x53f6d6.black, 0.5);
      let _0x173929 = _0x8e966f.getScreenRatio();
      let _0x176851 = (_0x39102b, _0x5114bc) => {
        _0x5bae59.screenWidth /= _0x39102b;
        _0x5bae59.screenHeight /= _0x39102b;
        _0x36be89.scale(_0x39102b, _0x39102b);
        if (!_0x5114bc) {
          _0x173929 *= _0x39102b;
        }
      };
      _0x176851(_0x173929, true);
      let _0x1e78f8 = _0x17aebb.deathScreen.get();
      _0x36be89.translate(0, -_0x1e78f8 * _0x5bae59.screenHeight);
      let _0x2ecee8 = _0x5bae59.screenWidth / 2;
      let _0x215909 = _0x5bae59.screenHeight / 2;
      let _0x3f5c25 = 140;
      let _0x17dd0c = _0x5bae59.mockups[parseInt(_0x71195b.type.split("-")[0])].position;
      let _0x5ab020 = _0x3f5c25 / _0x17dd0c.axis;
      let _0x1e09bd = _0x5bae59.screenWidth / 2 + 70 + _0x5ab020 * _0x17dd0c.middle.x * 0.707;
      let _0x36d1cf = _0x5bae59.screenHeight / 2 - 70 + _0x5ab020 * _0x17dd0c.middle.x * 0.707;
      let _0x496ae9 = _0x8e966f.getEntityImageFromMockup(_0x71195b.type, _0x71195b.color);
      let _0x5e51fd = _0x496ae9.color;
      let _0x12f1dd = " " + _0x496ae9.name;
      let _0x38184a = _0x36be89.measureText(_0x12f1dd).width;
      let _0x266cdf = 1 + _0x38184a / 500;
      _0x3d9edd(_0x5e51fd, _0x1e09bd, _0x36d1cf, _0x496ae9, _0x266cdf * 1.5, _0x266cdf * 1, _0x5ab020 * 0.5 / _0x496ae9.realSize, -Math.PI / 4, true);
      _0x4b1590("You were killed by: ", _0x2ecee8, _0x215909 - 170, 18, _0x53f6d6.guiwhite, "center");
      _0x4b1590(_0x57b0c7(), _0x2ecee8, _0x215909 - 140, 24, _0x53f6d6.guiwhite, "center");
      _0x4b1590(_0x12f1dd, _0x2ecee8 + 82, _0x215909 + 20, 20, _0x53f6d6.guiwhite, "center");
      _0x4b1590("Level: " + _0x71195b.__s.getLevel(), _0x2ecee8 - 177, _0x215909 - 40, 20, _0x53f6d6.guiwhite, "center");
      _0x4b1590("Score: " + _0x8e966f.formatLargeNumber(Math.round(_0x5bae59.finalScore.get())), _0x2ecee8 - 150, _0x215909 - 70, 20, _0x53f6d6.guiwhite, "center");
      _0x4b1590("Time alive: " + _0x8e966f.timeForHumans(Math.round(_0x5bae59.finalLifetime.get())), _0x2ecee8 - 150, _0x215909 - 10, 20, _0x53f6d6.guiwhite, "center");
      _0x4b1590("Arena closed! Cannot join", _0x2ecee8, _0x215909 + 70, 24, _0x53f6d6.red, "center");
      _0x36be89.translate(0, _0x1e78f8 * _0x5bae59.screenHeight);
    } else if (_0x5bae59.isspectating) {
      let _0x2981b6 = canvas.height / _0x5bae59.screenHeight / _0x5bae59.ratio;
      let _0x191a15 = 30;
      let _0x59da13 = "X Stop spectating";
      let _0x39d8f9 = _0x5c2e6f(_0x59da13, _0x191a15 - 3) + 20;
      let _0x13588b = _0x5bae59.screenWidth / 12;
      let _0x478afc = _0x5bae59.screenHeight / 16;
      if (_0x5bae59.cancelspectateClicked && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#D10202";
      } else if (_0x5bae59.cancelspectatebox && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#FD8989";
      } else {
        _0x36be89.fillStyle = "#FF5F5F";
      }
      _0x36be89.fillRect(_0x13588b - _0x39d8f9 / 2, _0x478afc - 5, _0x39d8f9, (_0x191a15 + 10) / 2);
      _0x36be89.fillStyle = "#CC4C4C";
      _0x36be89.fillRect(_0x13588b - _0x39d8f9 / 2, _0x478afc - 5 + (_0x191a15 + 10) / 2, _0x39d8f9, (_0x191a15 + 10) / 2);
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 4;
      _0x36be89.strokeRect(_0x13588b - _0x39d8f9 / 2, _0x478afc - 5, _0x39d8f9, _0x191a15 + 10);
      _0x4b1590(_0x59da13, _0x13588b, _0x478afc + _0x191a15 / 2 + 3, 16, _0x53f6d6.guiwhite, "center", true);
      _0x5bae59.clickables.cancelspectate.place(0, (_0x13588b - _0x39d8f9 / 2) * _0x2981b6, (_0x478afc - 5) * _0x2981b6, _0x39d8f9 * _0x2981b6, (_0x191a15 + 10) * _0x2981b6);
    } else if (_0x5bae59.gameStart || _0x5bae59.showdeathscreen) {
      _0x5ddb16(_0x53f6d6.black, 0.5);
      let _0x3aa96d = _0x8e966f.getScreenRatio();
      let _0x14955f = (_0x27326f, _0x82dffe) => {
        _0x5bae59.screenWidth /= _0x27326f;
        _0x5bae59.screenHeight /= _0x27326f;
        _0x36be89.scale(_0x27326f, _0x27326f);
        if (!_0x82dffe) {
          _0x3aa96d *= _0x27326f;
        }
      };
      _0x14955f(_0x3aa96d, true);
      let _0x27c090 = _0x17aebb.deathScreen.get();
      _0x36be89.translate(0, -_0x27c090 * _0x5bae59.screenHeight);
      let _0x53cfc6 = _0x5bae59.screenWidth / 2;
      let _0x5c3684 = _0x5bae59.screenHeight / 2;
      let _0x4621c8 = 140;
      let _0x4dc86a = _0x5bae59.mockups[parseInt(_0x71195b.type.split("-")[0])].position;
      let _0x235318 = _0x4621c8 / _0x4dc86a.axis;
      let _0x26ee18 = _0x5bae59.screenWidth / 2 + 70 + _0x235318 * _0x4dc86a.middle.x * 0.707;
      let _0x248031 = _0x5bae59.screenHeight / 2 - 70 + _0x235318 * _0x4dc86a.middle.x * 0.707;
      let _0x1a5f9a = _0x8e966f.getEntityImageFromMockup(_0x71195b.type, _0x71195b.color);
      let _0x53635a = _0x1a5f9a.color;
      let _0x53cf52 = " " + _0x1a5f9a.name;
      let _0x3e06aa = _0x36be89.measureText(_0x53cf52).width;
      let _0x2b4d3e = 1 + _0x3e06aa / 500;
      _0x3d9edd(_0x53635a, _0x26ee18, _0x248031, _0x1a5f9a, _0x2b4d3e * 1.5, _0x2b4d3e * 1, _0x235318 * 0.5 / _0x1a5f9a.realSize, -Math.PI / 4, true);
      _0x4b1590("You were killed by: ", _0x53cfc6, _0x5c3684 - 170, 18, _0x53f6d6.guiwhite, "center");
      _0x4b1590(_0x57b0c7(), _0x53cfc6, _0x5c3684 - 140, 24, _0x53f6d6.guiwhite, "center");
      _0x4b1590(_0x53cf52, _0x53cfc6 + 82, _0x5c3684 + 20, 20, _0x53f6d6.guiwhite, "center");
      _0x4b1590("Level: " + _0x71195b.__s.getLevel(), _0x53cfc6 - 177, _0x5c3684 - 40, 20, _0x53f6d6.guiwhite, "center");
      _0x4b1590("Score: " + _0x8e966f.formatLargeNumber(Math.round(_0x5bae59.finalScore.get())), _0x53cfc6 - 150, _0x5c3684 - 70, 20, _0x53f6d6.guiwhite, "center");
      _0x4b1590("Time alive: " + _0x8e966f.timeForHumans(Math.round(_0x5bae59.finalLifetime.get())), _0x53cfc6 - 150, _0x5c3684 - 10, 20, _0x53f6d6.guiwhite, "center");
      let _0x4a83c5 = canvas.height / _0x5bae59.screenHeight / _0x5bae59.ratio;
      let _0x1ab890 = 30;
      let _0x20ffd0 = "Spectate";
      let _0xda931 = _0x5c2e6f(_0x20ffd0, _0x1ab890 - 3) + 20;
      let _0x280a9f = _0x5bae59.screenWidth / 2.25;
      let _0x42b0a5 = _0x5bae59.screenHeight / 1.75;
      if (_0x5bae59.spectateClicked && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#00D1C2";
      } else if (_0x5bae59.spectatebox && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#88fcf4";
      } else {
        _0x36be89.fillStyle = "#5CFFF4";
      }
      _0x36be89.fillRect(_0x280a9f - _0xda931 / 2, _0x42b0a5 - 5, _0xda931, (_0x1ab890 + 10) / 2);
      _0x36be89.fillStyle = "#4BCCC4";
      _0x36be89.fillRect(_0x280a9f - _0xda931 / 2, _0x42b0a5 - 5 + (_0x1ab890 + 10) / 2, _0xda931, (_0x1ab890 + 10) / 2);
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 4;
      _0x36be89.strokeRect(_0x280a9f - _0xda931 / 2, _0x42b0a5 - 5, _0xda931, _0x1ab890 + 10);
      _0x4b1590(_0x20ffd0, _0x280a9f, _0x42b0a5 + _0x1ab890 / 2 + 3, 16, _0x53f6d6.guiwhite, "center", true);
      _0x5bae59.clickables.spectate.place(0, (_0x280a9f - _0xda931 / 2) * _0x4a83c5, (_0x42b0a5 - 5) * _0x4a83c5, _0xda931 * _0x4a83c5, (_0x1ab890 + 10) * _0x4a83c5);
      let _0x420ba6 = 125;
      let _0x1ed5b0 = 39;
      let _0x43fc1a = _0x5bae59.screenWidth / 1.85 - _0x420ba6 / 2;
      let _0x3a7fa5 = _0x5bae59.screenHeight / 1.765;
      if (_0x5bae59.enterClicked && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#00DC08";
      } else if (_0x5bae59.enterbox && !_0x5bae59.disconnected) {
        _0x36be89.fillStyle = "#89FD8D";
      } else {
        _0x36be89.fillStyle = "#65FF5F";
      }
      _0x36be89.fillRect(_0x43fc1a, _0x3a7fa5, _0x420ba6, _0x1ed5b0 / 2);
      _0x36be89.fillStyle = "#52CC4C";
      _0x36be89.fillRect(_0x43fc1a, _0x3a7fa5 + _0x1ed5b0 / 2, _0x420ba6, _0x1ed5b0 / 2);
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 4;
      _0x36be89.strokeRect(_0x43fc1a, _0x3a7fa5, _0x420ba6, _0x1ed5b0);
      let _0x5e4fb3 = "Enter";
      _0x4b1590(_0x5e4fb3, _0x43fc1a + _0x420ba6 / 2, _0x3a7fa5 + _0x1ed5b0 / 2 + 3, 16, _0x53f6d6.guiwhite, "center", true);
      _0x5bae59.clickables.enterButton.place(0, _0x43fc1a * _0x4a83c5, _0x3a7fa5 * _0x4a83c5, _0x420ba6 * _0x4a83c5, _0x1ed5b0 * _0x4a83c5);
      _0x36be89.translate(0, _0x27c090 * _0x5bae59.screenHeight);
    }
  };
  const _0x2d32df = _0x135e46 => {
    _0x5bae59.errordetected = true;
    let _0x43d30a = _0x8e966f.getScreenRatio();
    let _0x12d573 = (_0x1c9ee5, _0x489771) => {
      _0x5bae59.screenWidth /= _0x1c9ee5;
      _0x5bae59.screenHeight /= _0x1c9ee5;
      _0x36be89.scale(_0x1c9ee5, _0x1c9ee5);
      if (!_0x489771) {
        _0x43d30a *= _0x1c9ee5;
      }
    };
    _0x12d573(_0x43d30a, true);
    _0x36be89.fillStyle = "#5AFF47";
    _0x36be89.fillRect(0, 0, _0x5bae59.screenWidth, _0x5bae59.screenHeight);
    let _0x38536d = _0x17aebb.disconnected1.get();
    _0x36be89.translate(0, -_0x38536d * _0x5bae59.screenHeight);
    _0x58bf50("A weird error has been detected.", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 - 100, 70, _0x53f6d6.guiwhite, "center", 1);
    _0x58bf50("You may need to reload the page if the screen doesn't disappear", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 - 10, 22, _0x53f6d6.guiwhite, "center");
    _0x58bf50("Here is the following error code:", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 + 20, 22, _0x53f6d6.guiwhite, "center");
    _0x58bf50("" + _0x135e46, _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 + 50, 22, "#FF0000", "center");
    _0x58bf50("Please send this error code to the developer in order to fix it.", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 + 80, 22, _0x53f6d6.guiwhite, "center");
    if (_0x5bae59.allthesanctuarieskilled) {
      _0x4b1590(_0x5bae59.sancdiedripforyouanyways || "", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 + 30, 15, _0x53f6d6.orange, "center");
    }
    _0x36be89.translate(0, _0x38536d * _0x5bae59.screenHeight);
  };
  _0x5bae59.introTextAlpha = 0;
  _0x5bae59.introTextState = "fadeIn";
  _0x5bae59.introTextStartTime = null;
  _0x5bae59.introShown = false;
  const _0xceeceb = () => {
    if (_0x5bae59.gameStart && _0x5bae59.showintroduction && !_0x5bae59.introShown) {
      setTimeout(() => {
        _0x5bae59.showintroduction = false;
      }, 10000);
      if (!_0x5bae59.introTextStartTime) {
        _0x5bae59.introTextStartTime = Date.now();
      }
      const _0x15f883 = Date.now() - _0x5bae59.introTextStartTime;
      if (_0x5bae59.introTextState === "fadeIn") {
        if (_0x15f883 < 2500) {
          _0x5bae59.introTextAlpha = _0x15f883 / 2500;
        } else {
          _0x5bae59.introTextAlpha = 1;
          _0x5bae59.introTextState = "display";
          _0x5bae59.introTextStartTime = Date.now();
        }
      } else if (_0x5bae59.introTextState === "display") {
        if (_0x15f883 < 5000) {
          _0x5bae59.introTextAlpha = 1;
        } else {
          _0x5bae59.introTextState = "fadeOut";
          _0x5bae59.introTextStartTime = Date.now();
        }
      } else if (_0x5bae59.introTextState === "fadeOut") {
        if (_0x15f883 < 2500) {
          _0x5bae59.introTextAlpha = 1 - _0x15f883 / 2500;
        } else {
          _0x5bae59.introTextAlpha = 0;
          _0x5bae59.showintroduction = false;
          _0x5bae59.introShown = true;
          _0x5bae59.introTextState = "fadeIn";
          _0x5bae59.introTextStartTime = null;
        }
      }
      _0x36be89.save();
      _0x36be89.globalAlpha = _0x5bae59.introTextAlpha;
      if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30004.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30004.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30004.app.github.dev") {
        _0x58bf50("D-Day", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("For blue team, destroy red dominators. For red team, protect your dominators and destroy blue dominators.", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30002.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30002.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30002.app.github.dev") {
        _0x58bf50("Boss Rush", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Destroy all the bosses till wave 150 to win", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30000.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30000.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30000.app.github.dev") {
        _0x58bf50("Domination", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Destroy all dominators to win!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30003.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30003.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30003.app.github.dev") {
        _0x58bf50("Mothership", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Kill your opponent's mothership to win!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30008.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30008.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30008.app.github.dev") {
        _0x58bf50("Kill Race", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Escape from the dangerous killer without being killed!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30009.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30009.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30009.app.github.dev") {
        _0x58bf50("Core", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Stay in the center of the map to win!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "automatic-space-rotary-phone-57444pjr7vq3vx57-3007.app.github.dev") {
        _0x58bf50("Closed Beta", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("A private server with developer powers.", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30005.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30005.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30005.app.github.dev") {
        _0x58bf50("FFA", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Fight each other and gain highest score!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30010.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30010.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30010.app.github.dev") {
        _0x58bf50("Growth", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Attack tanks and shapes to grow up your body and make you even more powerful!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30011.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30011.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30011.app.github.dev") {
        _0x58bf50("Hide and Seek", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Hide yourselves from seekers for 3 minutes to win!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30012.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30012.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30012.app.github.dev") {
        _0x58bf50("Train Wars", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Fight against other tanks with your train!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30013.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30013.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30013.app.github.dev") {
        _0x58bf50("Nexus", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Just a gamemode where you can chill out and chat. Press ENTER to chat!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30014.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30014.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30014.app.github.dev") {
        _0x58bf50("Manhunt", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Be the first in the scoreboard to be more powerful!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30001.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30001.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30001.app.github.dev") {
        _0x58bf50("2TDM", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Fight with your teammates against your opponent's team!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30007.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30007.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30007.app.github.dev") {
        _0x58bf50("4TDM", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Attack with your teammates 3 other teams!", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      } else if (window.serverAdd === "super-duper-space-happiness-97jgjjj4gjq72xwqx-30006.app.github.dev" || window.serverAdd === "sturdy-guide-jjqpq7qxj4vjf54j9-30006.app.github.dev" || window.serverAdd === "cautious-invention-v6q79rq9xr57hwqww-30006.app.github.dev") {
        _0x58bf50("Maze", _0x5bae59.screenWidth / 2, 40, 30, _0x53f6d6.guiwhite, "center");
        _0x58bf50("Attack everyone in a labyrinth.", _0x5bae59.screenWidth / 2, 70, 20, _0x53f6d6.guiwhite, "center");
      }
      _0x36be89.restore();
    }
  };
  const _0x1008ff = () => {
    if (_0x5bae59.smasherreward) {
      setTimeout(() => {
        _0x5bae59.smasherreward = false;
      }, 5000);
      let _0x422994 = "Achievement complete:";
      _0x4b1590(_0x422994, 20, _0x5bae59.screenHeight / 2, 24, _0x53f6d6.guiwhite, "left");
      let _0x47886d = "What is this new world of diep.io???";
      _0x4b1590(_0x47886d, 20, _0x5bae59.screenHeight / 2 + 30, 16, _0x53f6d6.guiwhite, "left");
      let _0x41ba81 = "Join the game for the first time.";
      _0x4b1590(_0x41ba81, 20, _0x5bae59.screenHeight / 2 + 60, 16, _0x53f6d6.guiwhite, "left");
    }
  };
  let _0x1a79eb = 0;
  const _0xf2c6b5 = Math.sqrt(_0x5bae59.screenWidth ** 2 + _0x5bae59.screenHeight ** 2);
  const _0x9928c2 = () => {
    _0x5bae59.connecting = true;
    let _0x31cde2 = true;
    let _0x483881 = _0x8e966f.getScreenRatio();
    let _0x1c80dc = (_0x36a8cc, _0x198d9f) => {
      _0x5bae59.screenWidth /= _0x36a8cc;
      _0x5bae59.screenHeight /= _0x36a8cc;
      _0x36be89.scale(_0x36a8cc, _0x36a8cc);
      if (!_0x198d9f) {
        _0x483881 *= _0x36a8cc;
      }
    };
    _0x1c80dc(_0x483881, true);
    _0x36be89.fillStyle = "#000";
    _0x36be89.fillRect(0, 0, _0x5bae59.screenWidth, _0x5bae59.screenHeight);
    let _0x218c26 = _0x17aebb.connecting.get();
    _0x36be89.translate(0, -_0x218c26 * _0x5bae59.screenHeight);
    const _0x492095 = _0x5bae59.screenWidth / 2;
    const _0x2deb04 = _0x5bae59.screenHeight / 2;
    if (_0x5bae59.gameStart1) {
      _0x1a79eb = Math.max(0, _0x1a79eb - 15);
      _0x31cde2 = false;
    } else if (_0x1a79eb < _0xf2c6b5) {
      _0x1a79eb += 15;
    }
    _0x36be89.save();
    _0x36be89.beginPath();
    _0x36be89.arc(_0x492095, _0x2deb04, _0x1a79eb, 0, Math.PI * 2);
    _0x36be89.clip();
    _0x3ab9bd();
    _0x36be89.restore();
    _0x36be89.translate(0, _0x218c26 * _0x5bae59.screenHeight);
  };
  const _0x3ab9bd = () => {
    let _0x18708d = _0x36be89.createLinearGradient(0, 0, _0x5bae59.screenWidth, _0x5bae59.screenHeight);
    _0x36be89.fillStyle = _0x18708d;
    _0x36be89.fillRect(0, 0, _0x5bae59.screenWidth, _0x5bae59.screenHeight);
    const _0x4aabca = () => {
      const _0x123e4d = [".", "..", "..."];
      const _0xeda4a5 = 250;
      const _0x5ceccb = Math.floor(Date.now() / _0xeda4a5) % _0x123e4d.length;
      return _0x123e4d[_0x5ceccb];
    };
    let _0x1e6c3e = _0x4aabca();
    _0x58bf50(_0x5bae59.daconnectingmsg + _0x1e6c3e, _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2, 50, "#FFFFFF", "center", "Arial", "black");
    _0x58bf50(_0x5bae59.mesage, _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 + 30, 15, "#FFFFFF", "center", "Arial", "black");
    _0x58bf50(_0x5bae59.message, _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 + 60, 15, "#FFFFFF", "center", "Arial", "black");
    _0x58bf50(_0x5bae59.tips, _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 + 90, 25, "#FFFFFF", "center", "Arial", "black");
    _0x4ebc8d(_0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 - 100, 30, _0x53f6d6.guiwhite);
  };
  const _0x4ebc8d = (_0xc89d04, _0x2e4191, _0x5d04b5) => {
    _0x36be89.save();
    _0x36be89.translate(_0xc89d04, _0x2e4191);
    const _0x8d5836 = Date.now() / 400 % (Math.PI * 2);
    const _0x4c05ea = 0.8;
    _0x36be89.save();
    _0x36be89.rotate(_0x8d5836);
    const _0xb1dada = 25;
    const _0x1873f1 = _0x5d04b5 * _0x4c05ea;
    const _0x5c6d1a = _0x5d04b5 + _0xb1dada / 2;
    _0x36be89.beginPath();
    _0x36be89.rect(-_0xb1dada / 2, -_0x5c6d1a - _0x1873f1 / 2, _0xb1dada, _0x1873f1);
    _0x36be89.fillStyle = "gray";
    _0x36be89.lineWidth = 2;
    _0x36be89.strokeStyle = "#696969";
    _0x36be89.fill();
    _0x36be89.stroke();
    _0x36be89.restore();
    _0x36be89.lineCap = "miter";
    _0x36be89.lineJoin = "miter";
    _0x36be89.beginPath();
    _0x36be89.arc(0, 0, _0x5d04b5, 0, Math.PI * 2);
    _0x36be89.fillStyle = _0x53f6d6.blue;
    _0x36be89.strokeStyle = "#006699";
    _0x36be89.fill();
    _0x36be89.stroke();
    _0x36be89.restore();
  };
  const _0x58bf50 = (_0xa39cd9, _0x1fa556, _0x471e3d, _0x1cd2bb, _0xd9ec5c, _0x5dc4a2, _0x30b244 = "black") => {
    _0x36be89.font = "bold " + _0x1cd2bb + "px Ubuntu1";
    _0x36be89.textAlign = _0x5dc4a2;
    _0x36be89.fillStyle = _0xd9ec5c;
    _0x36be89.strokeStyle = _0x30b244;
    _0x36be89.lineWidth = 2;
    _0x36be89.strokeText(_0xa39cd9, _0x1fa556, _0x471e3d);
    _0x36be89.fillText(_0xa39cd9, _0x1fa556, _0x471e3d);
  };
  const _0x2dcb8c = (_0x453ebd, _0x11062e, _0x3c2542, _0x2eaabb, _0x591728, _0x5c67ba, _0x23154d = "black") => {
    _0x36be89.font = "bold " + _0x2eaabb + "px Ubuntu1";
    _0x36be89.textAlign = _0x5c67ba;
    _0x36be89.fillStyle = _0x591728;
    _0x36be89.strokeStyle = _0x23154d;
    _0x36be89.lineWidth = 2;
    _0x36be89.strokeText(_0x453ebd, _0x11062e, _0x3c2542);
    _0x36be89.fillText(_0x453ebd, _0x11062e, _0x3c2542);
  };
  const _0x3fade3 = () => {
    if (_0x5bae59.waitingloop && _0x5bae59.gameStart && !_0x5bae59.waitingloop1) {
      _0x4b1590("Waiting for players...", _0x5bae59.screenWidth / 2, 20, 20, _0x53f6d6.guiwhite, "center");
    }
  };
  const _0x3006d2 = () => {
    _0x5bae59.disconnected = true;
    let _0x3df495 = _0x8e966f.getScreenRatio();
    let _0x43551e = (_0x5c2950, _0x21d5db) => {
      _0x5bae59.screenWidth /= _0x5c2950;
      _0x5bae59.screenHeight /= _0x5c2950;
      _0x36be89.scale(_0x5c2950, _0x5c2950);
      if (!_0x21d5db) {
        _0x3df495 *= _0x5c2950;
      }
    };
    _0x43551e(_0x3df495, true);
    if (_0x5bae59.piracy) {
      _0x36be89.fillStyle = "#FF0000";
      _0x36be89.fillRect(0, 0, _0x5bae59.screenWidth, _0x5bae59.screenHeight);
    } else if (_0x5bae59.kicked || _0x5bae59.banned || _0x5bae59.banned1) {
      _0x5ddb16(_0x289a34.mixColors("#FF6D6D", _0x53f6d6.guiblack, 0.3), 1);
    } else if (_0x5bae59.connecting && !_0x5bae59.gameStart && _0x5bae59.disconnected) {
      _0x36be89.fillStyle = "#000000";
      _0x36be89.fillRect(0, 0, _0x5bae59.screenWidth, _0x5bae59.screenHeight);
    } else {
      _0x36be89.globalAlpha = 0.6;
      _0x36be89.fillStyle = "#000000";
      _0x36be89.fillRect(0, 0, _0x5bae59.screenWidth, _0x5bae59.screenHeight);
      _0x36be89.globalAlpha = 1;
      _0x36be89.filter = "blur(10px)";
      _0x36be89.drawImage(_0x36be89.canvas, 0, 0, _0x5bae59.screenWidth, _0x5bae59.screenHeight);
      _0x36be89.filter = "none";
    }
    if (_0x5bae59.kicked) {
      let _0x3d1f5b = _0x17aebb.disconnected1.get();
      _0x36be89.translate(0, -_0x3d1f5b * _0x5bae59.screenHeight);
      const _0x20a63e = _0x5bae59.screenWidth * 0.3;
      const _0x441038 = 200;
      const _0x538459 = (_0x5bae59.screenWidth - _0x20a63e) / 2;
      const _0xe38d75 = (_0x5bae59.screenHeight - _0x441038) / 2 - 10;
      _0x36be89.fillStyle = "#0080FF";
      _0x36be89.strokeStyle = "#033568";
      _0x36be89.lineWidth = 15;
      _0x36be89.strokeRect(_0x538459, _0xe38d75, _0x20a63e, _0x441038);
      _0x36be89.fillRect(_0x538459, _0xe38d75, _0x20a63e, _0x441038);
      _0x4b1590("KICKED", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2.25, 45, _0x53f6d6.guiwhite, "center", 1);
      _0x4b1590("Reason: " + (_0x5bae59.messagekick || "None."), _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 - 10, 22, _0x53f6d6.guiwhite, "center", 1);
      let _0x5c86bb = canvas.height / _0x5bae59.screenHeight / _0x5bae59.ratio;
      let _0x284167 = 30;
      let _0x5b3655 = "Reload";
      let _0x1aa6c5 = _0x5c2e6f(_0x5b3655, _0x284167 - 3) + 20;
      let _0x443e6a = _0x5bae59.screenWidth / 2;
      let _0x100071 = _0x5bae59.screenHeight / 1.9;
      if (_0x5bae59.reloadClicked) {
        _0x36be89.fillStyle = "#9B9B9B";
      } else if (_0x5bae59.reloadbox) {
        _0x36be89.fillStyle = "#C7C3C3";
      } else {
        _0x36be89.fillStyle = "#AFAEAE";
      }
      _0x36be89.fillRect(_0x443e6a - _0x1aa6c5 / 2, _0x100071 - 5, _0x1aa6c5, (_0x284167 + 10) / 2);
      _0x36be89.fillStyle = "#8F8E8E";
      _0x36be89.fillRect(_0x443e6a - _0x1aa6c5 / 2, _0x100071 - 5 + (_0x284167 + 10) / 2, _0x1aa6c5, (_0x284167 + 10) / 2);
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 4;
      _0x36be89.strokeRect(_0x443e6a - _0x1aa6c5 / 2, _0x100071 - 5, _0x1aa6c5, _0x284167 + 10);
      _0x4b1590(_0x5b3655, _0x443e6a, _0x100071 + _0x284167 / 2 + 3, 16, _0x53f6d6.guiwhite, "center", true);
      _0x5bae59.clickables.refreshButton.place(0, (_0x443e6a - _0x1aa6c5 / 2) * _0x5c86bb, (_0x100071 - 5) * _0x5c86bb, _0x1aa6c5 * _0x5c86bb, (_0x284167 + 10) * _0x5c86bb);
      _0x36be89.translate(0, _0x3d1f5b * _0x5bae59.screenHeight);
    } else if (_0x5bae59.banned) {
      let _0x4d691d = _0x17aebb.disconnected1.get();
      _0x36be89.translate(0, -_0x4d691d * _0x5bae59.screenHeight);
      const _0x25c15a = _0x5bae59.screenWidth * 0.3;
      const _0x2e545a = 200;
      const _0x5531e4 = (_0x5bae59.screenWidth - _0x25c15a) / 2;
      const _0x4380c2 = (_0x5bae59.screenHeight - _0x2e545a) / 2 - 10;
      _0x36be89.fillStyle = "#FF0000";
      _0x36be89.strokeStyle = "#8B0000";
      _0x36be89.lineWidth = 15;
      _0x36be89.strokeRect(_0x5531e4, _0x4380c2, _0x25c15a, _0x2e545a);
      _0x36be89.fillRect(_0x5531e4, _0x4380c2, _0x25c15a, _0x2e545a);
      _0x4b1590("BANNED", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2.25, 45, _0x53f6d6.guiwhite, "center", 1);
      _0x4b1590("This decision is final.", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 - 10, 22, _0x53f6d6.guiwhite, "center", 1);
      _0x4b1590("Please contact the developer.", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 + 50, 22, _0x53f6d6.guiwhite, "center", 1);
      _0x36be89.translate(0, _0x4d691d * _0x5bae59.screenHeight);
    } else if (_0x5bae59.piracy) {
      let _0x21be1d = _0x17aebb.disconnected1.get();
      _0x36be89.translate(0, -_0x21be1d * _0x5bae59.screenHeight);
      const _0x3b8056 = _0x5bae59.screenWidth * 0.4;
      const _0x34d438 = 200;
      const _0x2e38d5 = (_0x5bae59.screenWidth - _0x3b8056) / 2;
      const _0x4f891a = (_0x5bae59.screenHeight - _0x34d438) / 2 - 10;
      _0x36be89.fillStyle = "#ffdd00";
      _0x36be89.strokeStyle = "#8b8900";
      _0x36be89.lineWidth = 15;
      _0x36be89.strokeRect(_0x2e38d5, _0x4f891a, _0x3b8056, _0x34d438);
      _0x36be89.fillRect(_0x2e38d5, _0x4f891a, _0x3b8056, _0x34d438);
      _0x4b1590("PIRACY IS NO FUN", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2.25, 45, _0x53f6d6.guiwhite, "center", 1);
      _0x4b1590("You're using a modifed game client", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 - 10, 22, _0x53f6d6.guiwhite, "center", 1);
      _0x4b1590("Please remove your client and report this to LA3T#4868", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 + 50, 22, _0x53f6d6.guiwhite, "center", 1);
      _0x36be89.translate(0, _0x21be1d * _0x5bae59.screenHeight);
    } else if (_0x5bae59.banned1) {
      let _0x29f2ba = _0x17aebb.disconnected1.get();
      _0x36be89.translate(0, -_0x29f2ba * _0x5bae59.screenHeight);
      const _0x370352 = _0x5bae59.screenWidth * 0.3;
      const _0x4fd9ee = 200;
      const _0x5355e2 = (_0x5bae59.screenWidth - _0x370352) / 2;
      const _0x46f8ed = (_0x5bae59.screenHeight - _0x4fd9ee) / 2 - 10;
      _0x36be89.fillStyle = "#FF0000";
      _0x36be89.strokeStyle = "#8B0000";
      _0x36be89.lineWidth = 15;
      _0x36be89.strokeRect(_0x5355e2, _0x46f8ed, _0x370352, _0x4fd9ee);
      _0x36be89.fillRect(_0x5355e2, _0x46f8ed, _0x370352, _0x4fd9ee);
      _0x4b1590("BANNED", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2.25, 45, _0x53f6d6.guiwhite, "center", 1);
      const _0x1277f6 = _0x5bae59.messageban1 || "Temporarily banned.";
      _0x4b1590(_0x1277f6, _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 - 10, 22, _0x53f6d6.guiwhite, "center", 1);
      _0x4b1590("Please wait until the next server restart.", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 + 50, 22, _0x53f6d6.guiwhite, "center", 1);
      _0x36be89.translate(0, _0x29f2ba * _0x5bae59.screenHeight);
    } else {
      let _0xa2e135 = _0x17aebb.disconnected1.get();
      _0x36be89.translate(0, -_0xa2e135 * _0x5bae59.screenHeight);
      const _0x346761 = _0x5bae59.screenWidth * 0.3;
      const _0x303fb2 = 200;
      const _0x45d5c0 = (_0x5bae59.screenWidth - _0x346761) / 2;
      const _0x6b4344 = (_0x5bae59.screenHeight - _0x303fb2) / 2 - 10;
      _0x36be89.fillStyle = "#a0a0a0";
      _0x36be89.strokeStyle = "#000000";
      _0x36be89.lineWidth = 15;
      _0x36be89.strokeRect(_0x45d5c0, _0x6b4344, _0x346761, _0x303fb2);
      _0x36be89.fillRect(_0x45d5c0, _0x6b4344, _0x346761, _0x303fb2);
      _0x4b1590("DISCONNECTED", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2.25, 45, _0x53f6d6.guiwhite, "center", 1);
      _0x4b1590(_0x5bae59.messageerrorsocket || "The connection has closed.", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 - 10, 22, _0x53f6d6.guiwhite, "center", 1);
      let _0x54bd97 = canvas.height / _0x5bae59.screenHeight / _0x5bae59.ratio;
      let _0xec0fc = 30;
      let _0x3592a0 = "Reload";
      let _0x168105 = _0x5c2e6f(_0x3592a0, _0xec0fc - 3) + 20;
      let _0x39b7e5 = _0x5bae59.screenWidth / 2;
      let _0x20d29d = _0x5bae59.screenHeight / 1.9;
      if (_0x5bae59.reloadClicked) {
        _0x36be89.fillStyle = "#9B9B9B";
      } else if (_0x5bae59.reloadbox) {
        _0x36be89.fillStyle = "#C7C3C3";
      } else {
        _0x36be89.fillStyle = "#AFAEAE";
      }
      _0x36be89.fillRect(_0x39b7e5 - _0x168105 / 2, _0x20d29d - 5, _0x168105, (_0xec0fc + 10) / 2);
      _0x36be89.fillStyle = "#8F8E8E";
      _0x36be89.fillRect(_0x39b7e5 - _0x168105 / 2, _0x20d29d - 5 + (_0xec0fc + 10) / 2, _0x168105, (_0xec0fc + 10) / 2);
      _0x36be89.strokeStyle = _0x53f6d6.black;
      _0x36be89.lineWidth = 4;
      _0x36be89.strokeRect(_0x39b7e5 - _0x168105 / 2, _0x20d29d - 5, _0x168105, _0xec0fc + 10);
      _0x4b1590(_0x3592a0, _0x39b7e5, _0x20d29d + _0xec0fc / 2 + 3, 16, _0x53f6d6.guiwhite, "center", true);
      _0x5bae59.clickables.refreshButton.place(0, (_0x39b7e5 - _0x168105 / 2) * _0x54bd97, (_0x20d29d - 5) * _0x54bd97, _0x168105 * _0x54bd97, (_0xec0fc + 10) * _0x54bd97);
      _0x36be89.translate(0, _0xa2e135 * _0x5bae59.screenHeight);
    }
    if (_0x5bae59.allthesanctuarieskilled) {
      _0x4b1590(_0x5bae59.sancdiedripforyouanyways || "", _0x5bae59.screenWidth / 2, _0x5bae59.screenHeight / 2 + 30, 15, _0x53f6d6.orange, "center");
    }
  };
  const _0xa2baf = () => {
    const _0x45bd6c = new Date();
    const _0x176e72 = _0x45bd6c.getFullYear();
    const _0x2f0ac7 = (_0x45bd6c.getMonth() + 1 < 10 ? "0" : "") + (_0x45bd6c.getMonth() + 1);
    const _0x32b816 = (_0x45bd6c.getDate() < 10 ? "0" : "") + _0x45bd6c.getDate();
    return _0x176e72 + "-" + _0x2f0ac7 + "-" + _0x32b816;
  };
  console.log(_0xa2baf());
  const _0x1aacc2 = () => {
    const _0x365767 = new Date();
    const _0x4f7d2a = _0x365767.getFullYear();
    const _0x51480a = (_0x365767.getMonth() + 1 < 10 ? "0" : "") + (_0x365767.getMonth() + 1);
    const _0x4896e4 = (_0x365767.getDate() < 10 ? "0" : "") + _0x365767.getDate();
    const _0x21dbb2 = (_0x365767.getHours() < 10 ? "0" : "") + _0x365767.getHours();
    const _0x3c83b9 = (_0x365767.getMinutes() < 10 ? "0" : "") + _0x365767.getMinutes();
    const _0x39370a = (_0x365767.getSeconds() < 10 ? "0" : "") + _0x365767.getSeconds();
    const _0x443ddf = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return {
      dateID: _0x4f7d2a + "-" + _0x51480a + "-" + _0x4896e4,
      time: _0x21dbb2 + ":" + _0x3c83b9 + ":" + _0x39370a,
      timeZone: _0x443ddf
    };
  };
  console.log(_0x1aacc2());
  function _0x4e2b2d() {
    let _0x46bd16 = document.createElement("canvas");
    _0x46bd16.id = "snowCanvas";
    _0x46bd16.style.position = "fixed";
    _0x46bd16.style.top = "0";
    _0x46bd16.style.left = "0";
    _0x46bd16.style.width = "100vw";
    _0x46bd16.style.height = "100vh";
    document.body.insertBefore(_0x46bd16, document.body.firstChild);
    let _0x4a83c6 = _0x46bd16.getContext("2d");
    let _0x166667 = [];
    function _0x244b6b() {
      if (_0x46bd16.width !== window.innerWidth) {
        _0x46bd16.width = window.innerWidth;
      }
      if (_0x46bd16.height !== window.innerHeight) {
        _0x46bd16.height = window.innerHeight;
      }
      _0x4a83c6.clearRect(0, 0, _0x46bd16.width, _0x46bd16.height);
      for (let _0x1d6183 of _0x166667) {
        _0x1d6183.y += _0x1d6183.vel;
        if (_0x1d6183.y > _0x46bd16.height) {
          _0x1d6183.y = -_0x1d6183.r;
          _0x1d6183.x = Math.random() * _0x46bd16.width;
        }
        _0x4a83c6.globalAlpha = _0x1d6183.alpha;
        _0x4a83c6.beginPath();
        _0x4a83c6.arc(_0x1d6183.x, _0x1d6183.y, _0x1d6183.r, 0, Math.PI * 2);
        _0x4a83c6.fillStyle = "#ffffff";
        _0x4a83c6.fill();
      }
      if (_0x166667.length < 100) {
        let _0x4f1ad6 = Math.random() * _0x46bd16.width;
        let _0x236eab = Math.random() * _0x46bd16.height;
        let _0x5d2525 = 2 + Math.random() * 5;
        let _0x3a625d = 0.5 + Math.random() * 1;
        let _0x234d77 = Math.random();
        _0x166667.push({
          x: _0x4f1ad6,
          y: _0x236eab,
          r: _0x5d2525,
          vel: _0x3a625d,
          alpha: _0x234d77
        });
      }
      if (_0x5bae59.gameStart) {
        _0x46bd16.remove();
      } else {
        requestAnimationFrame(_0x244b6b);
      }
    }
    _0x244b6b();
  }
  function _0x341df3() {
    _0x5bae59.animLoopHandle = window.requestAnimationFrame(_0x341df3);
    _0x289a34.reanimateColors();
    _0x5bae59.player.renderv += (_0x5bae59.player.view - _0x5bae59.player.renderv) / 15;
    var _0x234e4d = _0x2c1aed.graphical.screenshotMode ? 2 : _0x8e966f.getRatio();
    _0x36be89.lineCap = "round";
    _0x36be89.lineJoin = "round";
    if (_0x5bae59.gameStart && !_0x5bae59.disconnected && !_0x5bae59.tryingtoreconnect) {
      _0x5bae59.time = _0x18517a();
      if (document.getElementById("optFancy").checked || _0x5bae59.optFancy) {
        if (_0x5bae59.time - _0x12abc2 > 0) {
          _0x5bae59.sendmessagefps = true;
          let _0x3a1be5 = Date.now();
          _0x5dc2e2 = _0x3a1be5;
          _0x5bae59.socket.ping(_0x5bae59.time);
          _0x12abc2 = _0x5bae59.time;
          _0x5bae59.metrics.rendertime = _0x30e370;
          _0x30e370 = 0;
          _0x5bae59.metrics.updatetime = _0x5bae59.updateTimes;
          _0x5bae59.updateTimes = 0;
          _0x5bae59.currentFps = Math.round(1000 / (_0x5bae59.time - _0x5dc2e2));
          _0x5bae59.currentFps = _0x27e2a3;
        }
      } else if (document.getElementById("betterperformance").checked || _0x5bae59.betternofcway) {
        if (_0x5bae59.time - _0x12abc2 > 3000) {
          _0x5bae59.sendmessagefps = false;
          let _0x26b8ba = Date.now();
          _0x5dc2e2 = _0x26b8ba;
          _0x5bae59.socket.ping(_0x5bae59.time);
          _0x12abc2 = _0x5bae59.time;
          _0x5bae59.metrics.rendertime = _0x30e370;
          _0x30e370 = 0;
          _0x5bae59.metrics.updatetime = _0x5bae59.updateTimes;
          _0x5bae59.updateTimes = 0;
          _0x5bae59.currentFps = Math.round(1000 / (_0x5bae59.time - _0x5dc2e2));
          _0x5bae59.currentFps = _0x27e2a3;
        }
      } else if (_0x5bae59.time - _0x12abc2 > 1000) {
        _0x5bae59.sendmessagefps = true;
        let _0x564ba6 = Date.now();
        _0x5dc2e2 = _0x564ba6;
        _0x5bae59.socket.ping(_0x5bae59.time);
        _0x12abc2 = _0x5bae59.time;
        _0x5bae59.metrics.rendertime = _0x30e370;
        _0x30e370 = 0;
        _0x5bae59.metrics.updatetime = _0x5bae59.updateTimes;
        _0x5bae59.updateTimes = 0;
        _0x5bae59.currentFps = Math.round(1000 / (_0x5bae59.time - _0x5dc2e2));
        _0x5bae59.currentFps = _0x27e2a3;
      }
      _0x5bae59.metrics.lag = _0x5bae59.time - _0x5bae59.player.time;
    }
    _0x36be89.translate(0.5, 0.5);
    try {
      if (_0x5bae59.gameStart) {
        _0x44e0f3(_0x234e4d, _0x8e966f.getScreenRatio());
      } else if (!_0x5bae59.disconnected) {
        _0x9928c2();
      }
      if (_0x5bae59.died || _0x5bae59.diedbruh || _0x5bae59.diedseekbruh || _0x5bae59.showdeathscreen) {
        _0x529db4();
      }
      if (_0x5bae59.arenaClosed) {
        arenaClosed();
      } else if (_0x5bae59.disconnected) {
        _0x3006d2();
      } else if (_0x5bae59.waitingloop && _0x5bae59.gameStart && !_0x5bae59.waitingloop1) {
        _0x3fade3();
      } else if (_0x5bae59.smasherreward) {
        _0x1008ff();
      } else if (_0x5bae59.showintroduction) {
        _0xceeceb();
      }
      _0x36be89.translate(-0.5, -0.5);
      if (_0x5bae59.reconnected) {
        console.log("Reconnected and updating game state...");
        _0x5bae59.reconnected = false;
        _0x12abc2 = _0x5bae59.time;
      }
      if (!document.getElementById("snowCanvas")) {
        _0x4e2b2d();
      }
    } catch (_0x2b6669) {
      _0x2d32df(_0x2b6669);
      console.error(_0x2b6669);
      _0x36be89.translate(-0.5, -0.5);
    }
  }
  let _0x17cb38 = 0.3;
  let _0x5d9869 = 1;
  let _0x2ccaab = 0;
  let _0x5b8f13 = 0;
  let _0x137673 = 0;
  let _0x2ffe5d = 2;
  let _0x10535b = 0.05;
  if (_0x17cb38) {
    let _0x247929 = document.createElement("canvas");
    _0x247929.style.position = "absolute";
    _0x247929.style.top = "0";
    document.body.insertBefore(_0x247929, document.body.firstChild);
    let _0x489f78 = _0x247929.getContext("2d");
    let _0x49ba67 = [];
    const _0x2a8003 = (_0x281265, _0x2f29db, _0x1a77ee, _0x33cbab, _0x188587) => {
      _0x489f78.save();
      _0x489f78.translate(_0x281265, _0x2f29db);
      _0x489f78.rotate(_0x188587);
      _0x489f78.beginPath();
      if (_0x33cbab === "circle") {
        _0x489f78.arc(0, 0, _0x1a77ee, 0, Math.PI * 2);
      } else if (_0x33cbab === "square") {
        _0x489f78.rect(-_0x1a77ee, -_0x1a77ee, _0x1a77ee * 2, _0x1a77ee * 2);
      } else if (_0x33cbab === "triangle") {
        _0x489f78.moveTo(0, -_0x1a77ee);
        _0x489f78.lineTo(-_0x1a77ee, _0x1a77ee);
        _0x489f78.lineTo(_0x1a77ee, _0x1a77ee);
        _0x489f78.closePath();
      } else if (_0x33cbab === "pentagon") {
        for (let _0x18c0ac = 0; _0x18c0ac < 5; _0x18c0ac++) {
          _0x489f78.lineTo(_0x1a77ee * Math.cos(_0x18c0ac * 2 * Math.PI / 5), _0x1a77ee * Math.sin(_0x18c0ac * 2 * Math.PI / 5));
        }
        _0x489f78.closePath();
      }
      _0x489f78.strokeStyle = "#ffffff";
      _0x489f78.lineWidth = 5;
      _0x489f78.stroke();
      _0x489f78.restore();
    };
    let _0x370aa9 = () => {
      if (_0x247929.width !== window.innerWidth) {
        _0x247929.width = window.innerWidth;
      }
      if (_0x247929.height !== window.innerHeight) {
        _0x247929.height = window.innerHeight;
      }
      _0x489f78.clearRect(0, 0, _0x247929.width, _0x247929.height);
      for (let _0x12c16d of _0x49ba67) {
        _0x12c16d.vel2++;
        _0x12c16d.x += _0x12c16d.vel * Math.cos(_0x12c16d.dir);
        _0x12c16d.y += _0x12c16d.vel * Math.sin(_0x12c16d.dir);
        let _0xc89335 = Math.min(0.4, 1 - _0x12c16d.y / _0x247929.height) * 2;
        if (_0xc89335 > 0) {
          _0x489f78.globalAlpha = _0xc89335;
          _0x2a8003(_0x12c16d.x, _0x12c16d.y, _0x12c16d.r, _0x12c16d.shape, _0x12c16d.rotation);
          _0x12c16d.rotation += _0x10535b;
        } else if (_0x12c16d.x < 20 || _0x12c16d.x > window.innerWidth + 20 || _0x12c16d.y < -25 || _0xc89335 < 0 || _0x5bae59.gameStart) {
          _0x12c16d.gone = true;
        }
      }
      if (Math.random() < _0x17cb38) {
        if (!_0x5bae59.gameStart) {
          let _0x5cde4d = -10;
          let _0x46dd55 = _0x247929.width * (1 - Math.random() * 2);
          if (_0x5b8f13 % 43) {
            _0x137673++;
          }
          _0x5b8f13++;
          _0x2ccaab += _0x5d9869;
          if (_0x5b8f13 % 1440 == 0) {
            _0x5d9869 *= -1;
          }
          if (_0x5b8f13 % 1 == 0) {
            for (let _0x284f71 = 0; _0x284f71 < 360; _0x284f71 += 360) {
              let _0x137781 = _0x247929.width / 2 + _0x46dd55;
              let _0x243acc = ["circle", "square", "triangle", "pentagon"][Math.floor(Math.random() * 4)];
              let _0x101c4f;
              if (_0x243acc === "circle") {
                _0x101c4f = 10;
              } else {
                _0x101c4f = 20;
              }
              let _0x5e56bd = Math.PI / 2 + (1 - Math.random() * 2) * 10 * Math.PI / 180 + Math.sin(_0x5b8f13 * 0.3 * Math.PI / 180) * 30 * Math.PI / 180;
              let _0x3194d = _0x2ffe5d + Math.random() * 2;
              _0x49ba67.push({
                x: _0x137781,
                y: _0x5cde4d,
                r: _0x101c4f,
                dir: _0x5e56bd,
                vel: _0x3194d,
                shape: _0x243acc,
                rotation: 0
              });
            }
          }
        }
      }
      if (_0x5bae59.gameStart) {
        _0x247929.remove();
      } else {
        requestAnimationFrame(_0x370aa9);
      }
    };
    setInterval(() => {
      _0x49ba67 = _0x49ba67.filter(_0x45ecdb => !_0x45ecdb.gone);
    }, 2000);
    _0x370aa9();
  }
})(util, global, config, Canvas, _0x24df39, gameDraw, _0x12fff9);
