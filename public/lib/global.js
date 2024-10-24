function Clickable() {
    let _0x5be030 = {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    };
    let _0x4f62cd = false;
    return {
      set: (_0x2ab770, _0x1a65e1, _0x2f2ef3, _0x56bbe8) => {
        _0x5be030.x = _0x2ab770 * global.ratio;
        _0x5be030.y = _0x1a65e1 * global.ratio;
        _0x5be030.w = _0x2f2ef3 * global.ratio;
        _0x5be030.h = _0x56bbe8 * global.ratio;
        _0x4f62cd = true;
      },
      check: _0x14fcb5 => {
        let _0x38fef6 = Math.round(_0x14fcb5.x - _0x5be030.x);
        let _0x3c16bc = Math.round(_0x14fcb5.y - _0x5be030.y);
        return _0x4f62cd && _0x38fef6 >= 0 && _0x3c16bc >= 0 && _0x38fef6 <= _0x5be030.w && _0x3c16bc <= _0x5be030.h;
      },
      hide: () => {
        _0x4f62cd = false;
      }
    };
  }
  let Region = _0x1f62fa => {
    let _0xf3b35c = [];
    for (let _0x1389a9 = 0; _0x1389a9 < _0x1f62fa; _0x1389a9++) {
      _0xf3b35c.push(Clickable());
    }
    return {
      place: (_0x3ac407, ..._0x37df55) => {
        if (_0x3ac407 >= _0xf3b35c.length) {
          console.log(_0x3ac407);
          console.log(_0xf3b35c);
          throw new Error("Trying to reference a clickable outside a region!");
        }
        _0xf3b35c[_0x3ac407].set(..._0x37df55);
      },
      hide: () => {
        for (let _0x4d1240 of _0xf3b35c) {
          _0x4d1240.hide();
        }
      },
      check: _0x48723e => _0xf3b35c.findIndex(_0x52f52d => _0x52f52d.check(_0x48723e))
    };
  };
  const global = {
    KEY_ESC: 27,
    KEY_ENTER: 13,
    KEY_SHIFT: 16,
    KEY_BECOME: 72,
    KEY_CHAT: 13,
    KEY_FIREFOOD: 119,
    KEY_SPLIT: 32,
    KEY_KILL_WITH_MOUSE: 71,
    KEY_LEFT: 65,
    KEY_UP: 87,
    KEY_RIGHT: 68,
    KEY_DOWN: 83,
    KEY_LEFT_ARROW: 37,
    KEY_UP_ARROW: 38,
    KEY_RIGHT_ARROW: 39,
    KEY_DOWN_ARROW: 40,
    KEY_SCREENSHOT: 81,
    KEY_SPECTATE: 76,
    KEY_BASIC_TANK: 80,
    KEY_KICK_PLAYER: 220,
    KEY_AUTO_SPIN: 67,
    KEY_AUTO_FIRE: 69,
    KEY_VANISH: 74,
    KEY_OVER_RIDE: 82,
    KEY_REVERSE_TANK: 86,
    KEY_REVERSE_MOUSE: 66,
    KEY_SPIN_LOCK: 88,
    KEY_DRAG: 70,
    KEY_BAN_PLAYER: 190,
    KEY_RECORD: 90,
    KEY_MAKE_BIGGER: 85,
    KEY_GIVE_TESTBED: 48,
    KEY_HEAL_PLAYER: 8,
    KEY_CONTROL: 56,
     KEY_CONTROL_TRUE: 49,
    KEY_LEVEL_UP: 78,
    KEY_FUCK_YOU: 192,
    KEY_GODMODE: 186,
    KEY_TELEPORT: 221,
    KEY_CLASS_TREE: 84,
    KEY_SPAWN_WALL: 89,
    KEY_MAX_STAT: 77,
    KEY_SUICIDE: 75,
    KEY_RAINBOW: 79,
    KEY_ZOOM_IN: 187,
    KEY_ZOOM_OUT: 189,
    KEY_ZOOM_CLEAR: 222,
    KEY_MAKE_SMALLER: 73,
    KEY_SMALLER: 188,
    KEY_SPAWN_ENTITY: 57,
    KEY_BIGGER: 191,
    KEY_HELP_KEY: 113,
    KEY_NAME_KEY: 44,
    KEY_STRONGER: 219,
    KEY_UPGRADE_ATK: 49,
    KEY_UPGRADE_HTL: 50,
    KEY_UPGRADE_SPD: 51,
    KEY_UPGRADE_STR: 52,
    KEY_UPGRADE_PEN: 53,
    KEY_UPGRADE_DAM: 54,
    KEY_UPGRADE_RLD: 55,
    KEY_UPGRADE_MOB: 56,
    KEY_UPGRADE_RGN: 57,
    KEY_UPGRADE_SHI: 48,
    KEY_MOUSE_0: 32,
    KEY_MOUSE_1: 86,
    KEY_MOUSE_2: 16,
    KEY_CHOOSE_1: 89,
    KEY_CHOOSE_2: 85,
    KEY_CHOOSE_3: 73,
    KEY_CHOOSE_4: 72,
    KEY_CHOOSE_5: 74,
    KEY_CHOOSE_6: 75,
    KEY_MULTIBOX: 120,
    KEY_SHOWINVISIBLE: 20,
    KEY_PASSIVE: 119,
    mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
    showTree: false,
    scrollX: 0,
    realScrollX: 0,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    gameWidth: 0,
    gameHeight: 0,
    oldGameWidth: 0,
    oldGameHeight: 0,
    realGameWidth: 0,
    realGameHeight: 0,
    xoffset: -0,
    yoffset: -0,
    gameStart: false,
    connecting: false,
    banned1: false,
    blackcircledisappear: false,
    diedbruh: false,
    diedseekbruh: false,
    disconnected: false,
    autoSpin: false,
    died: false,
    kicked: false,
    continuity: false,
    aa: false,
    showintroduction: false,
    startPingTime: 0,
    toggleMassState: 0,
    backgroundColor: "#f2fbff",
    lineColor: "#000000",
    nameColor: "#FFFFFF",
    player: {},
    messages: [],
    messages1: [],
    messages2: [],
    messages3: [],
    messages4: [],
    mesages: [],
    messages5: [],
    messages8: [],
    messagesbaba: [],
    isHoveringUpgradeBox: false,
    reloadbox: false,
    scoree: false,
    reloadClicked: false,
    movescreen: false,
    skipbox: false,
    skipClicked: false,
    Settingsbox: false,
    SettingsClicked: false,
    reloadbox1: false,
    spectatebox: false,
    spectateClicked: false,
    ab: false,
    reloadClicked1: false,
    isspectating: false,
    hasupgrade: false,
    disappearu: false,
    cancelspectatebox: false,
    cancelspectateClicked: false,
    yesClicked: false,
    yesbox: false,
    showdeathscreen: false,
    updeath: false,
    enterbox: false,
    enterClicked: false,
    isrespawning: false,
    hidemenu: false,
    closesettings: false,
    upgradeMenuVisible: false,
    nobox: false,
    noClicked: false,
    notdied: false,
    windowunload: false,
    choosenexit: false,
    discardexit: false,
    hasclickedsettings: false,
    rewardState: [],
    messagesblue: [],
    mockups: [],
    roomSetup: [],
    entities: [],
    updateTimes: 0,
    clickables: {
      stat: Region(10),
      upgrade: Region(100),
      hover: Region(1),
      skipUpgrades: Region(1),
      refreshButton: Region(1),
      scoree: Region(1),
      spectate: Region(1),
      cancelspectate: Region(1),
      enterButton: Region(1),
      mobileButtons: Region(20),
      settingsbutton: Region(1),
      mobileSettings: Region(1),
      closesettingsbutton: Region(1),
      dday: Region(1),
      bossrush: Region(1),
      mothership: Region(1),
      domination: Region(1),
      killrace: Region(1),
      exit: Region(1),
      yes: Region(1),
      no: Region(1)
    },
    statHover: false,
    upgradeHover: false,
    statMaxing: false,
    metrics: {
      latency: 0,
      lag: 0,
      rendertime: 0,
      updatetime: 0,
      lastlag: 0,
      lastrender: 0,
      rendergap: 0,
      lastuplink: 0
    },
    mouse: {
      x: 0,
      y: 0
    },
    target: {
      x: 0,
      y: 0
    },
    guiMouse: {
      x: 0,
      y: 0
    },
    target1: {
      x: 0,
      y: 0,
      down: false
    },
    fps: 60,
    mockupLoading: {
      then: _0xaed2b5 => _0xaed2b5()
    },
    screenSize: Math.min(1920, Math.max(window.innerWidth, 1280)),
    ratio: window.devicePixelRatio,
    chats: {}
  };
  export { global };