import { config } from "./config.js";
import { color } from "./color.js";
var gameDraw = {
  color: null,
  decimal2hex: _0x4f794d => {
    return _0x4f794d.toString(16);
  },
  hex2decimal: _0x2e2c9f => {
    return parseInt(_0x2e2c9f, 16);
  },
  mixColors: (_0x3df05d, _0x4f49f6, _0x4ac4f4 = 0.5) => {
    if (_0x4ac4f4 === 1) {
      return _0x4f49f6;
    }
    if (_0x4ac4f4 === 0) {
      return _0x3df05d;
    }
    var _0x2541f0 = "#";
    for (var _0x2e57e2 = 1; _0x2e57e2 <= 6; _0x2e57e2 += 2) {
      var _0x2eda70 = gameDraw.hex2decimal(_0x4f49f6.substr(_0x2e57e2, 2));
      var _0xa44ea6 = gameDraw.hex2decimal(_0x3df05d.substr(_0x2e57e2, 2));
      var _0x4871b0 = gameDraw.decimal2hex(Math.floor(_0xa44ea6 + (_0x2eda70 - _0xa44ea6) * _0x4ac4f4));
      while (_0x4871b0.length < 2) {
        _0x4871b0 = "0" + _0x4871b0;
      }
      _0x2541f0 += _0x4871b0;
    }
    return _0x2541f0;
  },
  hslToRgb: (_0x630b6c, _0x468dbf, _0x4f5836) => {
    let _0x5729d3;
    let _0x31f5f8;
    let _0x393cff;
    if (_0x468dbf === 0) {
      _0x5729d3 = _0x31f5f8 = _0x393cff = _0x4f5836;
    } else {
      const _0x19d74f = _0x4f5836 < 0.5 ? _0x4f5836 * (1 + _0x468dbf) : _0x4f5836 + _0x468dbf - _0x4f5836 * _0x468dbf;
      const _0x5a5b1f = _0x4f5836 * 2 - _0x19d74f;
      _0x5729d3 = gameDraw.hueToRgb(_0x5a5b1f, _0x19d74f, _0x630b6c + 1 / 3);
      _0x31f5f8 = gameDraw.hueToRgb(_0x5a5b1f, _0x19d74f, _0x630b6c);
      _0x393cff = gameDraw.hueToRgb(_0x5a5b1f, _0x19d74f, _0x630b6c - 1 / 3);
    }
    return "#" + Math.round(_0x5729d3 * 255).toString(16).padStart(2, "0") + Math.round(_0x31f5f8 * 255).toString(16).padStart(2, "0") + Math.round(_0x393cff * 255).toString(16).padStart(2, "0");
  },
  rgbToHsl: _0x169dc4 => {
    let _0x5743f6;
    let _0x6ca0b0;
    let _0x334d3c;
    let _0x527c64;
    let _0x3e1be5;
    let _0x369d46;
    _0x5743f6 = parseInt(_0x169dc4.substring(1, 3), 16) / 255;
    _0x6ca0b0 = parseInt(_0x169dc4.substring(3, 5), 16) / 255;
    _0x334d3c = parseInt(_0x169dc4.substring(5, 7), 16) / 255;
    let _0x3b851f = Math.max(_0x5743f6, _0x6ca0b0, _0x334d3c);
    let _0x3ce841 = Math.min(_0x5743f6, _0x6ca0b0, _0x334d3c);
    let _0x236899 = _0x3b851f - _0x3ce841;
    switch (true) {
      case _0x236899 == 0:
        _0x527c64 = 0;
        break;
      case _0x3b851f == _0x5743f6:
        _0x527c64 = 1 / 6 * ((_0x6ca0b0 - _0x334d3c) / _0x236899 % 6);
        break;
      case _0x3b851f == _0x6ca0b0:
        _0x527c64 = 1 / 6 * ((_0x334d3c - _0x5743f6) / _0x236899 + 2);
        break;
      case _0x3b851f == _0x334d3c:
        _0x527c64 = 1 / 6 * ((_0x5743f6 - _0x6ca0b0) / _0x236899 + 4);
        break;
    }
    _0x369d46 = (_0x3b851f + _0x3ce841) / 2;
    if (_0x236899 == 0) {
      _0x3e1be5 = 0;
    } else {
      _0x3e1be5 = _0x236899 / (1 - Math.abs(_0x369d46 * 2 - 1));
    }
    return [_0x527c64, _0x3e1be5, _0x369d46];
  },
  hueToRgb: (_0x53e49a, _0x5897ea, _0x576b27) => {
    if (_0x576b27 < 0) {
      _0x576b27 += 1;
    }
    if (_0x576b27 > 1) {
      _0x576b27 -= 1;
    }
    if (_0x576b27 < 0.166) {
      return _0x53e49a + (_0x5897ea - _0x53e49a) * 6 * _0x576b27;
    }
    if (_0x576b27 < 0.5) {
      return _0x5897ea;
    }
    if (_0x576b27 < 0.666) {
      return _0x53e49a + (_0x5897ea - _0x53e49a) * (2 / 3 - _0x576b27) * 6;
    }
    return _0x53e49a;
  },
  clamp: (_0x433a1d, _0x4b1fd1, _0x40be52) => {
    return Math.min(_0x40be52, Math.max(_0x4b1fd1, _0x433a1d));
  },
  colorCache: {},
  modifyColor: (_0xb1e33a, _0x4bad18 = "16 0 1 0 false") => {
    if (typeof _0xb1e33a == "number") {
      _0xb1e33a = _0xb1e33a + " 0 1 0 false";
    }
    if (typeof _0x4bad18 == "number") {
      _0x4bad18 = _0x4bad18 + " 0 1 0 false";
    }
    let _0x5d64ee = _0xb1e33a.split(" ");
    let _0xf2a74a = _0x4bad18.split(" ");
    if (_0x5d64ee[0] == "-1") {
      _0x5d64ee[0] = _0xf2a74a[0];
    }
    if (_0x5d64ee[0] == "-1") {
      _0x5d64ee[0] = gui.color;
    }
    let _0x592d07 = "";
    for (let _0x344251 in _0x5d64ee) {
      _0x592d07 += _0x5d64ee[_0x344251] + " ";
    }
    let _0x19fc0e = gameDraw.colorCache[_0x592d07];
    if (_0x19fc0e != undefined) {
      return _0x19fc0e;
    }
    let _0x12aed4 = _0x5d64ee[0];
    if (!isNaN(_0x12aed4)) {
      _0x12aed4 = parseInt(_0x12aed4);
    }
    _0x12aed4 = gameDraw.rgbToHsl(gameDraw.getColor(_0x12aed4) ?? _0x12aed4);
    let _0x56a62c = parseFloat(_0x5d64ee[1]) / 360;
    let _0x3301d4 = parseFloat(_0x5d64ee[2]);
    let _0x252a06 = parseFloat(_0x5d64ee[3]) / 100;
    let _0x1e51d5 = _0x5d64ee[4] == "true";
    let _0x459769 = (_0x12aed4[0] + _0x56a62c) % 1;
    let _0x36b8b = gameDraw.clamp(_0x12aed4[1] * _0x3301d4, 0, 1);
    let _0x1b0f8e = _0x12aed4[2] + _0x252a06;
    if (_0x1e51d5 && (_0x1b0f8e > 1 || _0x1b0f8e < 0)) {
      _0x1b0f8e -= _0x252a06 * 2;
    }
    _0x1b0f8e = gameDraw.clamp(_0x1b0f8e, 0, 1);
    let _0x2e8398 = gameDraw.hslToRgb(_0x459769, _0x36b8b, _0x1b0f8e);
    if (!gameDraw.animatedColors[_0x5d64ee[0]]) {
      gameDraw.colorCache[_0x592d07] = _0x2e8398;
    }
    return _0x2e8398;
  },
  getRainbow: (_0x13b025, _0x81ab48, _0xd887d9 = 0.5) => {
    if (_0xd887d9 <= 0) {
      return _0x13b025;
    }
    if (_0xd887d9 >= 1) {
      return _0x81ab48;
    }
    let _0x114da9 = 1 - _0xd887d9;
    _0x13b025 = parseInt(_0x13b025.slice(1, 7), 16);
    _0x81ab48 = parseInt(_0x81ab48.slice(1, 7), 16);
    return "#" + ((_0x13b025 & 16711680) * _0x114da9 + (_0x81ab48 & 16711680) * _0xd887d9 & 16711680 | (_0x13b025 & 65280) * _0x114da9 + (_0x81ab48 & 65280) * _0xd887d9 & 65280 | (_0x13b025 & 255) * _0x114da9 + (_0x81ab48 & 255) * _0xd887d9 & 255).toString(16).padStart(6, "0");
  },
  animatedColor: {
    lesbian: "",
    gay: "",
 star: "",
    gay1: "",
    bi: "",
    trans: "",
    blue_red: "",
    blue_grey: "",
    grey_blue: "",
    red_grey: "",
    grey_red: ""
  },
  reanimateColors: () => {
    let _0x546fa1 = Date.now();
    let _0x3628e2 = Math.floor(_0x546fa1 % 2000 / 400);
    let _0x431e05 = Math.floor(_0x546fa1 % 2000 * 3 / 2000);
    let _0x1c6337 = _0x546fa1 % 300 < 150;
    let _0x2ab644 = "#a50062";
    let _0x38b603 = "#d62900";
    let _0x3c442d = "#ffffff";
    let _0x5f5b9c = _0x3628e2 < 2;
    let _0x4bc969 = _0x546fa1 / 2000 % 1;
    let _0xcbf76c = _0x546fa1 / 6000 % 1;
    let _0x135f43 = "#D70071";
    let _0x143d48 = "#9C4E97";
    let _0x24a195 = "#0035AA";
    let _0x2594b6 = "#f7a8b8";
    let _0x337003 = "#55cdfc";
    let _0x40040d = "#ffffff";
    gameDraw.animatedColor.lesbian = gameDraw.getRainbow(_0x5f5b9c ? _0x38b603 : _0x3c442d, _0x5f5b9c ? _0x3c442d : _0x2ab644, (_0x5f5b9c ? _0x3628e2 : _0x3628e2 - 3) / 2);
    gameDraw.animatedColor.gay = gameDraw.hslToRgb(_0x4bc969, 0.75, 0.5);
      // Define the colors you want to transition between
      let colorStart = "#f2ff00";  // Starting color
      let colorEnd = "#ffd500";    // Ending color
      
      // Animate the transition for case 45
      gameDraw.animatedColor.star = gameDraw.mixColors(colorStart, _0x546fa1 % 4000 < 2000 ? colorEnd : colorStart, Math.max(Math.min(Math.sin(_0x546fa1 % 1000 / 1000 * Math.PI) * 5 - 2, 1), 0));



    gameDraw.animatedColor.gay1 = gameDraw.hslToRgb(_0xcbf76c, 0.75, 0.5);
    gameDraw.animatedColor.bi = [_0x135f43, _0x143d48, _0x24a195][_0x431e05];
    gameDraw.animatedColor.trans = gameDraw.mixColors(_0x40040d, _0x546fa1 % 4000 < 2000 ? _0x337003 : _0x2594b6, Math.max(Math.min(Math.sin(_0x546fa1 % 2000 / 2000 * Math.PI) * 5 - 2, 1), 0));
    gameDraw.animatedColor.blue_red = _0x1c6337 ? gameDraw.color.blue : gameDraw.color.red;
    gameDraw.animatedColor.blue_grey = _0x1c6337 ? gameDraw.color.blue : gameDraw.color.grey;
    gameDraw.animatedColor.grey_blue = _0x1c6337 ? gameDraw.color.grey : gameDraw.color.blue;
    gameDraw.animatedColor.red_grey = _0x1c6337 ? gameDraw.color.red : gameDraw.color.grey;
    gameDraw.animatedColor.grey_red = _0x1c6337 ? gameDraw.color.grey : gameDraw.color.red;
  },
  animatedColors: {
    20: true,
    animatedBlueRed: true,
    21: true,
    animatedBlueGrey: true,
    animatedBlueGray: true,
    22: true,
    animatedGreyBlue: true,
    animatedGrayBlue: true,
    23: true,
    animatedRedGrey: true,
    animatedRedGray: true,
    24: true,
    animatedGreyRed: true,
    animatedGrayRed: true,
    29: true,
    animatedLesbian: true,
    36: true,
    rainbow: true,
    37: true,
    animatedTrans: true,
    38: true,
    animatedBi: true,
    45: true,
    animatedStar: true,
  },
  getColor: _0x30a80d => {
    switch (_0x30a80d) {
      case 0:
      case "teal":
      case "aqua":
        return gameDraw.color.teal;
      case 1:
      case "lightGreen":
        return gameDraw.color.lgreen;
      case 2:
      case "orange":
        return gameDraw.color.orange;
      case 3:
      case "yellow":
        return gameDraw.color.yellow;
      case 4:
      case "lavender":
        return gameDraw.color.lavender;
      case 5:
      case "pink":
        return gameDraw.color.pink;
      case 6:
      case "veryLightGrey":
      case "veryLightGray":
        return gameDraw.color.vlgrey;
      case 7:
      case "lightGrey":
      case "lightGray":
        return gameDraw.color.lgrey;
      case 8:
      case "pureWhite":
        return gameDraw.color.guiwhite;
      case 9:
      case "black":
        return gameDraw.color.black;
      case 10:
      case "blue":
        return gameDraw.color.blue;
      case 11:
      case "green":
        return gameDraw.color.green;
      case 12:
      case "red":
        return gameDraw.color.red;
      case 13:
      case "gold":
        return gameDraw.color.gold;
      case 14:
      case "purple":
        return gameDraw.color.purple;
      case 15:
      case "magenta":
        return gameDraw.color.magenta;
      case 16:
      case "grey":
      case "gray":
        return gameDraw.color.grey;
      case 17:
      case "darkGrey":
      case "darkGray":
        return gameDraw.color.dgrey;
      case 18:
      case "white":
        return gameDraw.color.white;
      case 19:
      case "pureBlack":
        return gameDraw.color.guiblack;
      case 20:
      case "animatedBlueRed":
        return gameDraw.animatedColor.blue_red;
      case 21:
      case "animatedBlueGrey":
      case "animatedBlueGray":
        return gameDraw.animatedColor.blue_grey;
      case 22:
      case "animatedGreyBlue":
      case "animatedGrayBlue":
        return gameDraw.animatedColor.grey_blue;
      case 23:
      case "animatedRedGrey":
      case "animatedRedGray":
        return gameDraw.animatedColor.red_grey;
      case 24:
      case "animatedGreyRed":
      case "animatedGrayRed":
        return gameDraw.animatedColor.grey_red;
      case 25:
      case "mustard":
        return "#C49608";
      case 26:
      case "darkOrange":
        return "#EC7B0F";
      case 27:
      case "brown":
        return "#895918";
      case 28:
      case "cyan":
      case "turquoise":
        return "#13808E";
      case 29:
      case "animatedLesbian":
        return gameDraw.animatedColor.lesbian;
      case 30:
      case "powerGem":
      case "powerStone":
        return "#a913cf";
      case 31:
      case "spaceGem":
      case "spaceStone":
        return "#226ef6";
      case 32:
      case "realityGem":
      case "realityStone":
        return "#ff1000";
      case 33:
      case "soulGem":
      case "soulStone":
        return "#ff9000";
      case 34:
      case "timeGem":
      case "timeStone":
        return "#00e00b";
      case 35:
      case "mindGem":
      case "mindStone":
        return "#ffd300";
      case 36:
      case "rainbow":
        return gameDraw.animatedColor.gay;
      case "rainbow1":
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
      case 37:
      case "animatedTrans":
        return gameDraw.animatedColor.trans;
      case 38:
      case "animatedBi":
        return gameDraw.animatedColor.bi;
      case 39:
      case "pumpkinStem":
        return "#654321";
      case 40:
      case "pumpkinBody":
        return "#e58100";
      case 41:
      case "tree":
        return "#267524";
      case 42:
        return "#842626";
      case 43:
        return gameDraw.animatedColor.gay1;
      case 44:
        return "#BBB6FF";
        case 45:
          case "animatedStar":
            return gameDraw.animatedColor.star;
    }
  },
  getColorDark: _0x4256a7 => {
    let _0x462b58 = config.graphical.neon ? gameDraw.color.white : gameDraw.color.black;
    if (config.graphical.darkBorders) {
      return _0x462b58;
    }
    return gameDraw.mixColors(_0x4256a7, _0x462b58, gameDraw.color.border);
  },
  getZoneColor: (_0x35dcdd, _0x2aaaae) => {
    switch (_0x35dcdd) {
      case "win":
        return "#00ff40";
      case "bas1":
      case "bai1":
      case "bap1":
      case "dom1":
        return gameDraw.color.blue;
      case "bas3":
      case "bap2":
      case "bai3":
      case "dom2":
        return gameDraw.color.green;
      case "bas2":
      case "bap3":
      case "bai2":
      case "dom3":
      case "boss":
        return gameDraw.color.red;
      case "bas4":
      case "bap4":
        case "bai4":
      case "dom4":
        return gameDraw.color.magenta;
      case "bas5":
      case "bap5":
      case "dom5":
        return "#C49608";
      case "bas6":
      case "bap6":
      case "dom6":
        return "#EC7B0F";
      case "bas7":
      case "bap7":
      case "dom7":
        return "#895918";
      case "bas8":
      case "bap8":
      case "dom8":
        return "#13808E";
      case "port":
        return gameDraw.color.black;
      case "nest":
        if (_0x2aaaae) {
          return gameDraw.color.purple;
        } else {
          return gameDraw.color.lavender;
        }
      case "dom0":
        return gameDraw.color.gold;
      default:
        if (_0x2aaaae) {
          return gameDraw.color.white;
        } else {
          return gameDraw.color.lgrey;
        }
    }
  },
  setColor: (_0x21d787, _0xfd99d5) => {
    if (config.graphical.neon) {
      _0x21d787.fillStyle = gameDraw.getColorDark(_0xfd99d5);
      _0x21d787.strokeStyle = _0xfd99d5;
    } else {
      _0x21d787.fillStyle = _0xfd99d5;
      _0x21d787.strokeStyle = gameDraw.getColorDark(_0xfd99d5);
    }
  }
};
export { gameDraw };