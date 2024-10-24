import { global } from "./global.js";
import { config } from "./config.js";
class Canvas {
  constructor() {
    this.directionLock = false;
    this.target = global.target;
    this.mouse = global.mouse;
    global.target1 = this.target;
    this.socket = global.socket;
    this.directions = [];
    this.chatInput = document.getElementById("chatInput");
    this.chatInput.addEventListener("keydown", _0x1926fe => {
      if (![global.KEY_ENTER, global.KEY_ESC].includes(_0x1926fe.keyCode)) {
        return;
      }
      this.chatInput.blur();
      this.cv.focus();
      this.chatInput.hidden = true;
      if (!this.chatInput.value) {
        return;
      }
      if (_0x1926fe.keyCode === global.KEY_ENTER) {
        this.socket.talk("M", this.chatInput.value);
      }
      this.chatInput.value = "";
    });
    if (global.disconnected) {
      this.chatInput.hidden = true;
    }
    this.mouse = {
      x: 0,
      y: 0,
      down: false
    };
    this.guiMouse = {
      x: 0,
      y: 0
    };
    this.cv = document.getElementById("gameCanvas");
    this.cv.addEventListener("mousemove", _0x4cf7b3 => this.mouseMove(_0x4cf7b3), false);
    this.cv.addEventListener("mousedown", _0x5c8b3e => this.mouseDown(_0x5c8b3e), false);
    this.cv.addEventListener("mouseup", _0x41f067 => this.mouseUp(_0x41f067), false);
    this.cv.addEventListener("keypress", _0x395afc => this.keyPress(_0x395afc), false);
    this.cv.addEventListener("keydown", _0x399a79 => this.keyDown(_0x399a79), false);
    this.cv.addEventListener("keyup", _0x98121e => this.keyUp(_0x98121e), false);
    this.cv.addEventListener("wheel", _0x136b25 => this.wheel(_0x136b25), false);
    this.cv.resize = (_0x2b5626, _0x18a61e) => {
      this.cv.width = this.width = _0x2b5626;
      this.cv.height = this.height = _0x18a61e;
    };
    this.cv.resize(innerWidth, innerHeight);
    this.reverseDirection = false;
    this.inverseMouse = false;
    this.spinLock = true;
    this.treeScrollSpeed = 0.5;
    this.treeScrollSpeedMultiplier = 1;
    global.canvas = this;
  }
  wheel(_0x7f8419) {
    if (!global.died && global.showTree && !global.disconnected) {
      if (_0x7f8419.deltaY > 1) {
        global.treeScale /= 1.1;
      } else {
        global.treeScale *= 1.1;
      }
    }
  }
  gameInput(_0x2bce84) {
    let _0x234320 = global.screenWidth / innerWidth;
    let _0x116bf6 = global.screenHeight / innerHeight;
    this.mouse.x = _0x2bce84.clientX;
    this.mouse.y = _0x2bce84.clientY;
    if (player.cx != null && player.cy != null) {
      global.target.x = (this.mouse.x - innerWidth / 2) * _0x234320;
      global.target.y = (this.mouse.y - innerHeight / 2) * _0x116bf6;
    }
    global.statHover = global.clickables.hover.check({
      x: _0x2bce84.clientX * global.ratio,
      y: _0x2bce84.clientY * global.ratio
    }) === 0;
    global.guiMouse = {
      x: _0x2bce84.clientX * _0x116bf6,
      y: _0x2bce84.clientY * _0x234320
    };
  }
  keyPress(_0xbf671c) {
    if (global.aa) return;  // Disable mouse movement if global.aaaa is false
    if (!global.gameStart && (!global.kicked || !global.disconnected || !global.isspectating || !global.diedbruh || !global.diedseekbruh)) {
      return;
    }
    switch (_0xbf671c.keyCode) {
      case global.KEY_ZOOM_OUT:
        if (!global.died && global.showTree && !global.disconnected) {
          global.treeScale /= 1.1;
        }
        break;
      case global.KEY_ZOOM_IN:
        if (!global.died && global.showTree && !global.disconnected) {
          global.treeScale *= 1.1;
        }
        break;
    }
  }
  keyDown(_0x2209ee) {
    if (global.aa) return;  // Disable mouse movement if global.aaaa is false
    if (!_0x2209ee.repeat || _0x2209ee.keyCode === global.KEY_LEVEL_UP) {
      if (!global.gameStart && (!global.kicked || !global.disconnected || !global.isspectating || !global.diedbruh || !global.diedseekbruh)) {
        return;
      }
      switch (_0x2209ee.keyCode) {
        case global.KEY_SHIFT:
          this.treeScrollSpeedMultiplier = 5;
          break;
        case global.KEY_ENTER:
          if (global.diedTime) {
            return;
          }
          if (global.isspectating) {
            return 1;
          }
          if (global.diedbruh) {
            return 1;
          }
          if (global.diedseekbruh) {
            return 1;
          }
          if (global.keynotwork) {
            return 1;
          }
          if (global.arenaClosed) {
            return 1;
          }
          if (!global.gameStart) {
            return 1;
          }
          if (global.aa) return;  // Disable mouse movement if global.aaaa is false
          if (global.disconnected) {
            break;
          } else if (global.disconnected || global.notworkkey) {
            return 1;
          }
          if (global.died) {
            global.enterClicked = true;
            global.movetop = true;
            global.updeath = true;
            setTimeout(() => {
              global.ab = true;
              global.updeath = false;
              global.enterClicked = false;
              this.socket.talk("s", global.playerName, 0, config.game.autoLevelUp * 1);
              global.died = false;
              global.notdied = true;
              global.hidemenu = true;
              global.closesettings = false;
            }, 100);
            setTimeout(() => {
              global.ab = false;
            }, 200);
            break;
          }
          if (!global.disconnected || !global.notworkkey) {
            if (this.chatInput.hidden) {
              this.chatInput.hidden = false;
              this.chatInput.focus();
              break;
            }
          }
          if (!global.connecting) {
            if (this.chatInput.hidden) {
              this.chatInput.hidden = false;
              this.chatInput.focus();
              break;
            }
          }
          break;
        case global.KEY_ESC:
          if (global.died && global.isspectating) {
            global.cancelspectateClicked = true;
            setTimeout(() => {
              global.cancelspectateClicked = false;
              global.isspectating = false;
              global.died = true;
            }, 100);
          }
          break;
        case global.KEY_UP_ARROW:
          if (!global.died && global.showTree && !global.disconnected) {
            return global.shouldScrollY = -this.treeScrollSpeed * this.treeScrollSpeedMultiplier;
          }
        case global.KEY_UP:
          this.socket.cmd.set(0, true);
          break;
        case global.KEY_DOWN_ARROW:
          if (!global.died && global.showTree && !global.disconnected) {
            return global.shouldScrollY = +this.treeScrollSpeed * this.treeScrollSpeedMultiplier;
          }
        case global.KEY_DOWN:
          this.socket.cmd.set(1, true);
          break;
        case global.KEY_LEFT_ARROW:
          if (!global.died && global.showTree && !global.disconnected) {
            return global.shouldScrollX = -this.treeScrollSpeed * this.treeScrollSpeedMultiplier;
          }
        case global.KEY_LEFT:
          this.socket.cmd.set(2, true);
          break;
        case global.KEY_RIGHT_ARROW:
          if (!global.died && global.showTree && !global.disconnected) {
            return global.shouldScrollX = +this.treeScrollSpeed * this.treeScrollSpeedMultiplier;
          }
        case global.KEY_RIGHT:
          this.socket.cmd.set(3, true);
          break;
        case global.KEY_MOUSE_0:
          this.socket.cmd.set(4, true);
          break;
        case global.KEY_MOUSE_1:
          this.socket.cmd.set(5, true);
          break;
        case global.KEY_MOUSE_2:
          this.socket.cmd.set(6, true);
          break;
        case global.KEY_LEVEL_UP:
          this.socket.talk("L");
          break;
        case global.KEY_FUCK_YOU:
          this.socket.talk("0");
          break;
        case global.KEY_GIVE_TESTBED:
          this.socket.talk("maketestbed");
          break;
        case global.KEY_SHOWINVISIBLE:
          this.socket.talk("showplayer");
          break;
        case global.KEY_HEAL_PLAYER:
          this.socket.talk("healplayer");
          break;
        case global.KEY_CONTROL:
          this.socket.talk("controlentity");
          break;
        case global.KEY_SPAWN_ENTITY:
          this.socket.talk("spawnentity");
          break;
        case global.KEY_MULTIBOX:
          this.socket.talk("Multibox");
          break;
          case global.KEY_CONTROL:
            this.socket.talk("dacontrolentity");
            break;
        case global.KEY_PASSIVE:
          this.socket.talk("passive");
          break;
        case global.KEY_BAN_PLAYER:
          this.socket.talk("ban");
          break;
        case global.KEY_MAKE_BIGGER:
          this.socket.talk("makebigger");
          break;
        case global.KEY_MAKE_SMALLER:
          this.socket.talk("makesmaller");
          break;
        case global.KEY_HELP_KEY:
          this.socket.talk("setcolorentity");
          break;
        case global.KEY_NAME_KEY:
          this.socket.talk("setnamecolor");
          break;
        case global.KEY_SPAWN_WALL:
          this.socket.talk("spawnwall");
          break;
        case global.KEY_BASIC_TANK:
          this.socket.talk("mamaistoobasic");
          break;
        case global.KEY_KICK_PLAYER:
          this.socket.talk("-/");
          break;
        case global.KEY_VANISH:
          this.socket.talk("V");
          break;
        case global.KEY_GODMODE:
          this.socket.talk(";");
          break;
        case global.KEY_TELEPORT:
          this.socket.talk(">");
          break;
        case global.KEY_RAINBOW:
          this.socket.talk("=", 5);
          break;
        case global.KEY_ZOOM_IN:
          this.socket.talk("zoominwow");
          break;
        case global.KEY_ZOOM_OUT:
          this.socket.talk("zoomoutwow");
          break;
        case global.KEY_BIGGER:
          this.socket.talk("biginwow");
          break;
        case global.KEY_SMALLER:
          this.socket.talk("bigoutwow");
          break;
        case global.KEY_ZOOM_CLEAR:
          this.socket.talk("zoomclearwow");
          break;
        case global.KEY_DRAG:
          this.socket.talk("blalb");
          break;
        case global.KEY_BECOME:
          this.socket.talk("H");
          break;
        case global.KEY_KILL_WITH_MOUSE:
          this.socket.talk("j");
          break;
        case global.KEY_MAX_STAT:
          global.statMaxing = true;
          break;
        case global.KEY_SUICIDE:
          this.socket.talk("1");
          break;
        case global.KEY_RECORD:
          this.record();
          break;
        case global.KEY_STRONGER:
          this.socket.talk("Y");
          break;
      }
    }
    if (!_0x2209ee.repeat) {
      if (global.aa) return;  // Disable mouse movement if global.aaaa is false
      if (!global.gameStart && (!global.kicked || !global.disconnected || !global.isspectating || !global.diedbruh || !global.diedseekbruh)) {
        return;
      }
      switch (_0x2209ee.keyCode) {
        case global.KEY_AUTO_SPIN:
          if (global.disconnected) {
            global.autoSpin = false;
          } else {
            global.autoSpin = !global.autoSpin;
            this.socket.talk("t", 0);
            break;
          }
        case global.KEY_AUTO_FIRE:
          this.socket.talk("t", 1);
          break;
        case global.KEY_OVER_RIDE:
          this.socket.talk("t", 2);
          break;
        case global.KEY_REVERSE_MOUSE:
          if (global.disconnected) {
            this.inverseMouse = false;
          } else {
            this.inverseMouse = !this.inverseMouse;
            this.socket.talk("t", 3);
            break;
          }
        case global.KEY_REVERSE_TANK:
          if (global.disconnected) {
            this.reverseDirection = false;
          } else {
            this.reverseDirection = !this.reverseDirection;
            this.target.x *= -1;
            this.target.y *= -1;
            this.socket.talk("t", 4);
            break;
          }
        case global.KEY_MULTIBOX:
          this.socket.talk("{", 5);
          break;
        case global.KEY_SPIN_LOCK:
          if (global.disconnected) {
            this.spinLock = true;
          } else {
          this.spinLock = !this.spinLock;
          this.socket.talk("t", 6);
          }
          break;
        case global.KEY_CLASS_TREE:
          if (global.died || global.diedbruh && !global.disconnected && global.diedseekbruh) {
            global.showTree = false;
          } else {
            global.showTree = !global.showTree;
          }
          break;
        case global.KEY_SCREENSHOT:
          this.screenshot();
          break;
      }
      if (global.canSkill) {
        let _0x33a422 = [global.KEY_UPGRADE_ATK, global.KEY_UPGRADE_HTL, global.KEY_UPGRADE_SPD, global.KEY_UPGRADE_STR, global.KEY_UPGRADE_PEN, global.KEY_UPGRADE_DAM, global.KEY_UPGRADE_RLD, global.KEY_UPGRADE_MOB, global.KEY_UPGRADE_RGN, global.KEY_UPGRADE_SHI].indexOf(_0x2209ee.keyCode);
        if (_0x33a422 >= 0) {
          this.socket.talk("x", _0x33a422, global.statMaxing * 1);
        }
      }
      if (global.canUpgrade) {
        switch (_0x2209ee.keyCode) {
          case global.KEY_CHOOSE_1:
            this.socket.talk("U", 0);
            break;
          case global.KEY_CHOOSE_2:
            this.socket.talk("U", 1);
            break;
          case global.KEY_CHOOSE_3:
            this.socket.talk("U", 2);
            break;
          case global.KEY_CHOOSE_4:
            this.socket.talk("U", 3);
            break;
          case global.KEY_CHOOSE_5:
            this.socket.talk("U", 4);
            break;
          case global.KEY_CHOOSE_6:
            this.socket.talk("U", 5);
            break;
        }
      }
    }
  }
  keyUp(_0xd72315) {
    if (global.aa) return;  // Disable mouse movement if global.aaaa is false
    if (!global.gameStart && (!global.kicked || !global.disconnected || !global.isspectating || !global.diedbruh || !global.diedseekbruh)) {
      return;
    }
    switch (_0xd72315.keyCode) {
      case global.KEY_SHIFT:
        this.treeScrollSpeedMultiplier = 1;
        break;
      case global.KEY_UP_ARROW:
        global.shouldScrollY = 0;
      case global.KEY_UP:
        this.socket.cmd.set(0, false);
        break;
      case global.KEY_DOWN_ARROW:
        global.shouldScrollY = 0;
      case global.KEY_DOWN:
        this.socket.cmd.set(1, false);
        break;
      case global.KEY_LEFT_ARROW:
        global.shouldScrollX = 0;
      case global.KEY_LEFT:
        this.socket.cmd.set(2, false);
        break;
      case global.KEY_RIGHT_ARROW:
        global.shouldScrollX = 0;
      case global.KEY_RIGHT:
        this.socket.cmd.set(3, false);
        break;
      case global.KEY_MOUSE_0:
        this.socket.cmd.set(4, false);
        break;
      case global.KEY_MOUSE_1:
        this.socket.cmd.set(5, false);
        break;
      case global.KEY_MOUSE_2:
        this.socket.cmd.set(6, false);
        break;
      case global.KEY_MAX_STAT:
        global.statMaxing = false;
        break;
    }
  }
  mouseDown(_0x1e9498) {
    if (!global.gameStart && !global.disconnected) return;  // Add this line to return if game hasn't started
    if (global.aa && !global.disconnected) return;  // Disable mouse movement if global.aaaa is false
    if (!global.gameStart && !global.connecting) {
      return;
    }
    let _0x5d3fea = 4;
    let _0x5c8e69 = 6;
    if (this.inverseMouse) {
      [_0x5d3fea, _0x5c8e69] = [_0x5c8e69, _0x5d3fea];
    }
    switch (_0x1e9498.button) {
      case 0:
        let _0x47e16f = {
          x: _0x1e9498.clientX * global.ratio,
          y: _0x1e9498.clientY * global.ratio
        };
        if (global.died && global.clickables.spectate.check(_0x47e16f) !== -1 && !global.disconnected) {
          global.spectateClicked = true;
          setTimeout(() => {
            global.spectateClicked = false;
            global.isspectating = true;
          }, 100);
          break;
        }
        if (global.died && global.clickables.cancelspectate.check(_0x47e16f) !== -1 && !global.disconnected) {
          global.cancelspectateClicked = true;
          setTimeout(() => {
            global.cancelspectateClicked = false;
            global.isspectating = false;
            global.died = true;
          }, 100);
          break;
        }
        if (global.died && global.clickables.enterButton.check(_0x47e16f) !== -1 && !global.disconnected) {
          global.enterClicked = true;
          global.updeath = true;
            global.movetop = true;
            setTimeout(() => {
              global.ab = true;
              global.updeath = false;
              global.enterClicked = false;
              this.socket.talk("s", global.playerName, 0, config.game.autoLevelUp * 1);
              global.died = false;
              global.notdied = true;
              global.hidemenu = true;
              global.closesettings = false;
            }, 100);
            setTimeout(() => {
              global.ab = false;
            }, 200);
          break;
        }
        if (global.clickables.dday.check(_0x47e16f) !== -1 && !global.choosenexit && !global.upgradeMenuVisible && global.closesettings) {
          document.getElementById("optScreenshotMode").checked = true;
          global.hasclickedscreenshot = true;
          global.messages.push({
            text: "Screenshot Mode enabled.",
            status: 2,
            alpha: 0,
            time: Date.now()
          });
          if (global.hasclickedscreenshot) {
            global.messages.push({
              text: "Screenshot Mode disabled.",
              status: 2,
              alpha: 0,
              time: Date.now()
            });
            global.hasclickedscreenshot = false;
          }
          break;
        }
        if (global.clickables.bossrush.check(_0x47e16f) !== -1 && !global.choosenexit && !global.upgradeMenuVisible && global.closesettings) {
          document.getElementById("optNoPointy").checked = true;
          global.hasclickedclassictraps = true;
          global.messages.push({
            text: "Classic Traps enabled.",
            status: 2,
            alpha: 0,
            time: Date.now()
          });
          if (global.hasclickedclassictraps) {
            global.messages.push({
              text: "Classic Traps: disabled.",
              status: 2,
              alpha: 0,
              time: Date.now()
            });
            global.hasclickedclassictraps = false;
          }
          break;
        }
        if (global.clickables.mothership.check(_0x47e16f) !== -1 && !global.choosenexit && !global.upgradeMenuVisible && global.closesettings) {
          window.onbeforeunload = null;
          window.location.replace("https://mothership.arras2.io/play.html");
          break;
        }
        if (global.clickables.domination.check(_0x47e16f) !== -1 && !global.choosenexit && !global.upgradeMenuVisible && global.closesettings) {
          window.onbeforeunload = null;
          window.location.replace("https://domination.arras2.io/play.html");
          break;
        }
        if (global.clickables.killrace.check(_0x47e16f) !== -1 && !global.choosenexit && !global.upgradeMenuVisible && global.closesettings) {
          window.onbeforeunload = null;
          window.location.replace("https://killrace.arras2.io/play.html");
          break;
        }
if (global.clickables.refreshButton.check(_0x47e16f) !== -1) {
    global.reloadClicked = true;
    global.reloadClicked1 = true;
    setTimeout(() => {
        global.reloadClicked = false;
        global.reloadClicked1 = false;
      window.top.location.replace("https://arras2glitchfix.vercel.app/");

    }, 100);


    window.onbeforeunload = null;
    break;
}


        if (global.clickables.yes.check(_0x47e16f) !== -1 && !global.disconnected && !global.upgradeMenuVisible && global.closesettings) {
          global.yesClicked = true;
          setTimeout(() => {
            window.onbeforeunload = null;
            global.yesClicked = false;
              window.top.location.replace("https://arras2glitchfix.vercel.app/");
          }, 100);
          break;
        }
        if (global.clickables.no.check(_0x47e16f) !== -1 && !global.disconnected && !global.upgradeMenuVisible && global.closesettings) {
          global.noClicked = true;
          setTimeout(() => {
            global.choosenexit = false;
            global.noClicked = false;
          }, 100);
          break;
        }
        if (global.clickables.exit.check(_0x47e16f) !== -1 && !global.disconnected && !global.upgradeMenuVisible && global.closesettings) {
          global.choosenexit = true;
          break;
        }
        if (global.clickables.settingsbutton.check(_0x47e16f) !== -1 && !global.disconnected && !global.upgradeMenuVisible) {
          global.SettingsClicked = true;
          setTimeout(() => {
            global.closesettings = !global.closesettings;
            global.hasclickedsettings = true;
            global.SettingsClicked = false;
          }, 100);
          break;
        }
        let _0x152dfd = global.clickables.stat.check(_0x47e16f);
        if (_0x152dfd !== -1) {
          this.socket.talk("x", _0x152dfd, 0);
        } else if (global.clickables.skipUpgrades.check(_0x47e16f) !== -1 && !global.disconnected) {
          global.skipClicked = true;
          setTimeout(() => {
            global.clearUpgrades();
          }, 100);
          setTimeout(() => {
            global.skipClicked = false;
          }, 100);
        } else if (!global.disconnected) {
          global.hoverUpgrade = true;
          let _0x408d41 = global.clickables.upgrade.check(_0x47e16f);
          if (_0x408d41 !== -1) {
            this.socket.talk("U", _0x408d41);
          } else {
            this.socket.cmd.set(_0x5d3fea, true);
          }
        }
        break;
      case 1:
        this.socket.cmd.set(5, true);
        break;
      case 2:
        this.socket.cmd.set(_0x5c8e69, true);
        break;
    }
  }
  mouseUp(_0x4bc081) {
    if (global.aa && !global.disconnected) return;  // Disable mouse movement if global.aaaa is false
    if (!global.gameStart && (!global.kicked || !global.disconnected)) {
      return;
    }
    let _0x32c427 = 4;
    let _0x686df2 = 6;
    if (this.inverseMouse) {
      [_0x32c427, _0x686df2] = [_0x686df2, _0x32c427];
    }
    switch (_0x4bc081.button) {
      case 0:
        this.socket.cmd.set(_0x32c427, false);
        break;
      case 1:
        this.socket.cmd.set(5, false);
        break;
      case 2:
        this.socket.cmd.set(_0x686df2, false);
        break;
    }
  }
  record() {
    if (!global.gameStart && (!global.kicked || !global.disconnected || !global.isspectating || !global.diedbruh || !global.diedseekbruh || !global.diedseekbruh)) {
      return;
    }
    if (this.cv.captureStream && window.MediaRecorder) {
      if (this.videoRecorder) {
        switch (this.videoRecorder.state) {
          case "inactive":
            global.messages.push({
              text: "Recorder started! Press Z to stop the recorder",
              status: 2,
              alpha: 0,
              time: Date.now()
            });
            this.videoRecorder.start();
            break;
          case "recording":
            global.messages.push({
              text: "Recorder stopped! Saving the video...",
              status: 2,
              alpha: 0,
              time: Date.now()
            });
            this.videoRecorder.stop();
        }
      } else {
        let _0x3c5e69 = [];
        this.videoRecorder = new MediaRecorder(this.cv.captureStream(60));
        this.videoRecorder.ondataavailable = _0x3a90e0 => _0x3c5e69.push(_0x3a90e0.data);
        this.videoRecorder.onstop = () => {
          let _0x54f989 = new Blob(_0x3c5e69, {
            type: this.videoRecorder.mimeType
          });
          _0x3c5e69.length = 0;
          let _0x20189c = URL.createObjectURL(_0x54f989);
          let _0x27954b = document.createElement("a");
          _0x27954b.style.display = "none";
          _0x27954b.setAttribute("download", "arras2.io.mp4");
          _0x27954b.setAttribute("href", _0x20189c);
          document.body.appendChild(_0x27954b);
          setTimeout(() => {
            URL.revokeObjectURL(_0x20189c);
            document.body.removeChild(_0x27954b);
          }, 100);
          _0x27954b.click();
        };
        global.messages.push({
          text: "Recorder started! Press Z to stop the recorder",
          status: 2,
          alpha: 0,
          time: Date.now()
        });
        this.videoRecorder.start();
      }
    } else {
      setTimeout(alert("Recorder cannot start! (reason: Unsupported browser)."), 30000);
    }
  }
  screenshot() {
    if (!global.gameStart && (!global.kicked || !global.disconnected || !global.isspectating || !global.diedbruh || !global.diedseekbruh)) {
      return;
    }
    global.messages.push({
      text: "Saving the screenshot...",
      status: 2,
      alpha: 0,
      time: Date.now()
    });
    var _0x349d0b = this.cv.toDataURL();
    var _0x1d96ab = atob(_0x349d0b.split(",")[1]);
    _0x349d0b = _0x349d0b.split(",")[0].split(":")[1].split(";")[0];
    let _0x3d7219 = new Uint8Array(_0x1d96ab.length);
    for (let _0x24de01 = 0; _0x24de01 < _0x1d96ab.length; _0x24de01++) {
      _0x3d7219[_0x24de01] = _0x1d96ab.charCodeAt(_0x24de01);
    }
    let _0x5aa78b = URL.createObjectURL(new Blob([_0x3d7219], {
      type: _0x349d0b
    }));
    let _0x6555b1 = document.createElement("a");
    _0x6555b1.style.display = "none";
    _0x6555b1.setAttribute("download", "arras2.io.png");
    _0x6555b1.setAttribute("href", _0x5aa78b);
    document.body.appendChild(_0x6555b1);
    setTimeout(() => {
      URL.revokeObjectURL(_0x5aa78b);
      document.body.removeChild(_0x6555b1);
    }, 100);
    _0x6555b1.click();
  }
  mouseMove(_0x57c7ef) {
    if (!global.gameStart && !global.disconnected) return;  // Add this line to return if game hasn't started
    if (global.aa && !global.disconnected ) return;  // Disable mouse movement if global.aaaa is false


    global.statHover = global.clickables.hover.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) === 0;
    if (global.clickables.refreshButton.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.died && !global.diedbruh && !global.diedseekbruh && !global.disconnected && global.clickables.skipUpgrades.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.disconnected && !global.upgradeMenuVisible && global.clickables.settingsbutton.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.choosenexit && !global.disconnected && global.closesettings && global.clickables.dday.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.discardexit && !global.disconnected && global.closesettings && global.clickables.no.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.discardexit && !global.disconnected && global.closesettings && global.clickables.yes.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.choosenexit && !global.disconnected && global.closesettings && global.clickables.exit.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.choosenexit && !global.disconnected && global.closesettings && global.clickables.bossrush.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.choosenexit && !global.disconnected && global.closesettings && global.clickables.mothership.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.choosenexit && !global.disconnected && global.closesettings && global.clickables.domination.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.choosenexit && !global.disconnected && global.closesettings && global.clickables.killrace.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.died && !global.disconnected && !global.diedbruh && !global.diedseekbruh && global.clickables.upgrade.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.died && !global.disconnected && !global.diedbruh && !global.diedseekbruh && global.clickables.scoree.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.isspectating && global.died && !global.disconnected && global.clickables.spectate.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || global.isspectating && global.clickables.cancelspectate.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1 || !global.isspectating && global.died && !global.disconnected && global.clickables.enterButton.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1) {
      this.cv.style.cursor = "pointer";
    } else {
      this.cv.style.cursor = "default";
    }

   
    this.target.x = _0x57c7ef.clientX * global.ratio - this.width / 2;
    this.target.y = _0x57c7ef.clientY * global.ratio - this.height / 2;
    if (this.reverseDirection) {
      this.target.x *= -1;
      this.target.y *= -1;
    }
    this.target.x *= global.screenWidth / this.width;
    this.target.y *= global.screenHeight / this.height;
    global.reloadbox = global.clickables.refreshButton.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1;
    global.scoree = global.clickables.scoree.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1;
    global.reloadbox1 = global.clickables.refreshButton.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1;
    global.skipbox = global.clickables.skipUpgrades.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1;
    global.isHoveringUpgradeBox = global.clickables.upgrade.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1;
    global.spectatebox = global.clickables.spectate.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1;
    global.cancelspectatebox = global.clickables.cancelspectate.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1;
    global.enterbox = global.clickables.enterButton.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1;
    global.Settingsbox = global.clickables.settingsbutton.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1;
    global.yesbox = global.clickables.yes.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1;
    global.nobox = global.clickables.no.check({
      x: _0x57c7ef.clientX * global.ratio,
      y: _0x57c7ef.clientY * global.ratio
    }) !== -1;
  }
}

export { Canvas };
