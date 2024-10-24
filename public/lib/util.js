import { global } from "./global.js";
import { config } from "./config.js";
const util = {
  stripHashFromHex: function () {
    return function (_0x3889c0, _0x39b600) {
      function _0x4e79c8(_0x3baaa1) {
        if (_0x3baaa1.length === 1) {
          return "0" + _0x3baaa1;
        } else {
          return _0x3baaa1;
        }
      }
      const _0x1ec96c = document.createElement("canvas");
      const _0x17c2e0 = _0x1ec96c.getContext("2d");
      _0x1ec96c.width = _0x1ec96c.height = 1;
      if (_0x39b600) {
        _0x17c2e0.fillStyle = _0x39b600;
        _0x17c2e0.fillRect(0, 0, 1, 1);
      }
      _0x17c2e0.fillStyle = _0x3889c0;
      _0x17c2e0.fillRect(0, 0, 1, 1);
      const _0x31892b = _0x17c2e0.getImageData(0, 0, 1, 1).data;
      const _0x5ba998 = _0x31892b[0];
      const _0x1d0d5f = _0x31892b[1];
      const _0x179073 = _0x31892b[2];
      const _0x3a8052 = _0x31892b[3];
      return "#" + _0x4e79c8(_0x5ba998.toString(16)) + _0x4e79c8(_0x1d0d5f.toString(16)) + _0x4e79c8(_0x179073.toString(16)) + _0x4e79c8(_0x3a8052.toString(16));
    };
  }(),
  submitToLocalStorage: _0x347b6d => {
    localStorage.setItem(_0x347b6d + "Value", document.getElementById(_0x347b6d).value);
    localStorage.setItem(_0x347b6d + "Checked", document.getElementById(_0x347b6d).checked);
    return false;
  },
  retrieveFromLocalStorage: _0x2b3fb3 => {
    document.getElementById(_0x2b3fb3).value = localStorage.getItem(_0x2b3fb3 + "Value");
    document.getElementById(_0x2b3fb3).checked = localStorage.getItem(_0x2b3fb3 + "Checked") === "true";
    return false;
  },
  handleLargeNumber: (_0x1e0c72, _0x9e337d = false) => {
    if (_0x9e337d && _0x1e0c72 == 0) {
      return "";
    }
    if (_0x1e0c72 < Math.pow(10, 3)) {
      return "" + _0x1e0c72.toFixed(0);
    }
    if (_0x1e0c72 < Math.pow(10, 6)) {
      return (_0x1e0c72 / Math.pow(10, 3)).toFixed(2) + "k";
    }
    if (_0x1e0c72 < Math.pow(10, 9)) {
      return (_0x1e0c72 / Math.pow(10, 6)).toFixed(2) + "m";
    }
    if (_0x1e0c72 < Math.pow(10, 12)) {
      return (_0x1e0c72 / Math.pow(10, 9)).toFixed(2) + "b";
    }
    if (_0x1e0c72 < Math.pow(10, 15)) {
      return (_0x1e0c72 / Math.pow(10, 12)).toFixed(2) + "t";
    }
    return (_0x1e0c72 / Math.pow(10, 15)).toFixed(2) + "q";
  },
  timeForHumans: _0x1ed254 => {
    let _0x3a0c8b = _0x1ed254 % 60;
    _0x1ed254 /= 60;
    _0x1ed254 = Math.floor(_0x1ed254);
    let _0x3b2539 = _0x1ed254 % 60;
    _0x1ed254 /= 60;
    _0x1ed254 = Math.floor(_0x1ed254);
    let _0x2a3a8c = _0x1ed254 % 24;
    _0x1ed254 /= 24;
    _0x1ed254 = Math.floor(_0x1ed254);
    let _0xb6bfb7 = _0x1ed254;
    let _0x34489d = "";
    function _0xb8c4bd(_0xd313fe, _0x4f4c98) {
      if (_0xd313fe) {
        _0x34489d = _0x34489d + (_0x34489d === "" ? "" : ", ") + _0xd313fe + " " + _0x4f4c98 + (_0xd313fe > 1 ? "s" : "");
      }
    }
    _0xb8c4bd(_0xb6bfb7, "day");
    _0xb8c4bd(_0x2a3a8c, "hour");
    _0xb8c4bd(_0x3b2539, "minute");
    _0xb8c4bd(_0x3a0c8b, "second");
    if (_0x34489d === "") {
      _0x34489d = "less than a second";
    }
    return _0x34489d;
  },
  addArticle: _0x273254 => {
    if (/[aeiouAEIOU]/.test(_0x273254[0])) {
      return "an " + _0x273254;
    } else {
      return "a " + _0x273254;
    }
  },
  formatLargeNumber: _0x4d047f => {
    return _0x4d047f.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  pullJSON: _0x534847 => {
    return new Promise((_0x15782e, _0x16f2dc) => {
      const _0x4fd796 = location.protocol + "//" + window.serverAdd + "/lib/json/" + _0x534847 + ".json";
      console.log("Loading JSON");
      fetch(_0x4fd796).then(_0x44733a => _0x44733a.json()).then(_0x5cefea => {
        console.log("JSON load complete");
        _0x15782e(_0x5cefea);
      }).catch(_0x3429d8 => {
        console.log("JSON load error");
        _0x16f2dc(_0x3429d8);
      });
    });
  },
  lerp: (_0x5504d0, _0xb13734, _0x273715, _0x2ad7bf = false) => {
    if (_0x2ad7bf) {
      if (global.fps < 20) {
        global.fps = 20;
      }
      _0x273715 /= global.fps / 120;
    }
    return _0x5504d0 + _0x273715 * (_0xb13734 - _0x5504d0);
  },
  lerpAngle: (_0x2f2e97, _0x17f1cc, _0x586e69, _0x1649c4) => {
    var _0x5158d6 = {
      x: Math.cos(_0x2f2e97),
      y: Math.sin(_0x2f2e97)
    };
    var _0x269927 = {
      x: Math.cos(_0x17f1cc),
      y: Math.sin(_0x17f1cc)
    };
    var _0x14a84c = {
      x: util.lerp(_0x5158d6.x, _0x269927.x, _0x586e69, _0x1649c4),
      y: util.lerp(_0x5158d6.y, _0x269927.y, _0x586e69, _0x1649c4)
    };
    return Math.atan2(_0x14a84c.y, _0x14a84c.x);
  },
  getRatio: () => Math.max(global.screenWidth, global.screenHeight * 16 / 9) / global.player.renderv,
  getScreenRatio: () => Math.max(global.screenWidth, global.screenHeight * 16 / 9) / global.screenSize,
  Smoothbar: (_0x561ae8, _0x4047da, _0x1ccfb3 = 3, _0x169ee7 = 0.025) => {
    let _0x55cabe = Date.now();
    let _0x32c386 = _0x561ae8;
    let _0x121089 = _0x561ae8;
    return {
      set: _0x3516c5 => {
        if (_0x561ae8 !== _0x3516c5) {
          _0x121089 = _0x32c386;
          _0x561ae8 = _0x3516c5;
          _0x55cabe = Date.now();
        }
      },
      get: (_0x300dcd = false) => {
        _0x32c386 = util.lerp(_0x32c386, _0x561ae8, _0x169ee7);
        if (Math.abs(_0x561ae8 - _0x32c386) < 0.1 && _0x300dcd) {
          _0x32c386 = _0x561ae8;
        }
        return _0x32c386;
      }
    };
  },
  isInView: (_0x36f9f0, _0x108e89, _0x4ac207, _0x394ac4 = false) => {
    let _0x133eab = util.getRatio();
    _0x4ac207 += config.graphical.borderChunk;
    if (_0x394ac4) {
      _0x133eab *= 2;
      return _0x36f9f0 > -global.screenWidth / _0x133eab - _0x4ac207 && _0x36f9f0 < global.screenWidth / _0x133eab + _0x4ac207 && _0x108e89 > -global.screenHeight / _0x133eab - _0x4ac207 && _0x108e89 < global.screenHeight / _0x133eab + _0x4ac207;
    }
    return _0x36f9f0 > -_0x4ac207 && _0x36f9f0 < global.screenWidth / _0x133eab + _0x4ac207 && _0x108e89 > -_0x4ac207 && _0x108e89 < global.screenHeight / _0x133eab + _0x4ac207;
  },
  getEntityImageFromMockup: (_0x486dda, _0x5f384f) => {
    let _0x23b60a = parseInt(_0x486dda.split("-")[0]);
    let _0x272ce2 = global.mockups[_0x23b60a];
    let _0xbc5dff = [];
    let _0x103a04 = [];
    let _0xafaf6a = "";
    let _0xc61cdf = "";
    let _0x29e0d4 = [];
    let _0x36f0ec = [];
    let _0x34339c = _0x272ce2.color;
    if (_0x34339c == "16 0 1 0 false" && _0x5f384f) {
      _0x34339c = _0x5f384f;
    }
    for (let _0x1b410a of _0x486dda.split("-")) {
      let _0x7b97ec = global.mockups[parseInt(_0x1b410a)];
      _0xbc5dff.push(..._0x7b97ec.guns);
      _0x103a04.push(..._0x7b97ec.turrets);
      _0xafaf6a += _0x7b97ec.name.length > 0 ? "-" + _0x7b97ec.name : "";
      _0xc61cdf += _0x7b97ec.upgradeTooltip ? "\n" + _0x7b97ec.upgradeTooltip : "";
      if (_0x7b97ec.rerootUpgradeTree) {
        _0x36f0ec.push(..._0x7b97ec.rerootUpgradeTree.split("\\/"));
      }
    }
    for (let _0x41cd6a of _0x36f0ec) {
      if (!_0x29e0d4.includes(_0x41cd6a)) {
        _0x29e0d4.push(_0x41cd6a);
      }
    }
    return {
      time: 0,
      index: _0x486dda,
      x: _0x272ce2.x,
      y: _0x272ce2.y,
      vx: 0,
      vy: 0,
      size: _0x272ce2.size,
      realSize: _0x272ce2.realSize,
      color: _0x34339c,
      upgradeColor: _0x272ce2.upgradeColor,
      glow: _0x272ce2.glow,
      render: {
        status: {
          getFade: () => {
            return 1;
          },
          getColor: () => {
            return "#FFFFFF";
          },
          getBlend: () => {
            return 0;
          },
          health: {
            get: () => {
              return 1;
            }
          },
          shield: {
            get: () => {
              return 1;
            }
          }
        }
      },
      facing: _0x272ce2.facing,
      shape: _0x272ce2.shape,
      name: _0xafaf6a.substring(1),
      upgradeTooltip: _0xc61cdf.substring(1),
      upgradeName: _0x272ce2.upgradeName,
      score: 0,
      tiggle: 0,
      layer: _0x272ce2.layer,
      position: _0x272ce2.position,
      rerootUpgradeTree: _0x29e0d4,
      guns: {
        length: _0xbc5dff.length,
        getPositions: () => Array(_0xbc5dff.length).fill(0),
        getConfig: () => _0xbc5dff.map(_0xd0bc7c => {
          return {
            color: _0xd0bc7c.color,
            borderless: _0xd0bc7c.borderless,
            drawFill: _0xd0bc7c.drawFill,
            drawAbove: _0xd0bc7c.drawAbove,
            length: _0xd0bc7c.length,
            width: _0xd0bc7c.width,
            aspect: _0xd0bc7c.aspect,
            angle: _0xd0bc7c.angle,
            direction: _0xd0bc7c.direction,
            offset: _0xd0bc7c.offset
          };
        }),
        update: () => {}
      },
      turrets: _0x103a04.map(_0x546727 => {
        let _0x4d839b = util.getEntityImageFromMockup(_0x546727.index);
        _0x4d839b.color = _0x546727.color;
        _0x4d839b.realSize = _0x4d839b.realSize / _0x4d839b.size * _0x272ce2.size * _0x546727.sizeFactor;
        _0x4d839b.size = _0x272ce2.size * _0x546727.sizeFactor;
        _0x4d839b.sizeFactor = _0x546727.sizeFactor;
        _0x4d839b.angle = _0x546727.angle;
        _0x4d839b.offset = _0x546727.offset;
        _0x4d839b.direction = _0x546727.direction;
        _0x4d839b.facing = _0x546727.direction + _0x546727.angle;
        _0x4d839b.render.f = _0x4d839b.facing;
        _0x4d839b.layer = _0x546727.layer;
        _0x4d839b.mirrorMasterAngle = _0x546727.mirrorMasterAngle;
        return _0x4d839b;
      })
    };
  }
};
export { util };