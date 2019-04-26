/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var phaser_ui_comps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser-ui-comps */ \"phaser-ui-comps\");\n/* harmony import */ var phaser_ui_comps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser_ui_comps__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scenes_BootScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/BootScene */ \"./src/scenes/BootScene.js\");\n/* harmony import */ var _scenes_PreloaderScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/PreloaderScene */ \"./src/scenes/PreloaderScene.js\");\n/* harmony import */ var _scenes_MenuScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/MenuScene */ \"./src/scenes/MenuScene.js\");\n/* harmony import */ var _scenes_GameScene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/GameScene */ \"./src/scenes/GameScene.js\");\n/* harmony import */ var _scenes_HUDScene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/HUDScene */ \"./src/scenes/HUDScene.js\");\n\n\n\n\n\n\n\nvar phaserConfig = {\n  type: Phaser.AUTO,\n  parent: \"phaser-canvas\",\n  backgroundColor: \"#000000\",\n  width: 800,\n  // window.innerWidth,\n  height: 600,\n  //window.innerHeight,\n  scene: [_scenes_BootScene__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_PreloaderScene__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _scenes_MenuScene__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _scenes_GameScene__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _scenes_HUDScene__WEBPACK_IMPORTED_MODULE_6__[\"default\"]],\n  plugins: {\n    global: [PhaserComps.Plugin.DefaultCfg]\n  },\n  physics: {\n    default: 'matter',\n    matter: {\n      gravity: {\n        y: 1\n      },\n      debug: true,\n      debugBodyColor: 0xffffff\n    }\n  }\n};\nwindow.game = new Phaser.Game(phaserConfig);\n/*window.addEventListener(\"resize\", function (event) {\r\n\tgame.scale.resize(window.innerWidth, window.innerHeight);\r\n}, false);*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/Models.js":
/*!******************************!*\
  !*** ./src/models/Models.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Models; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\nlet _events = null;\nclass Models {\n  /**\r\n   * @return Phaser.Events.EventEmitter;\r\n   */\n  static get events() {\n    if (_events === null) {\n      _events = new Phaser.Events.EventEmitter();\n    }\n\n    return _events;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/models/Models.js?");

/***/ }),

/***/ "./src/scenes/BaseScene.js":
/*!*********************************!*\
  !*** ./src/scenes/BaseScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseScene; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Models */ \"./src/models/Models.js\");\n\n\nclass BaseScene extends Phaser.Scene {\n  constructor(config) {\n    super(config);\n  }\n\n  preload() {\n    this.load.on(Phaser.Loader.Events.PROGRESS, value => {\n      _models_Models__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.emit(\"scene_progress\", this.sys.config.key, value);\n    }, this);\n  }\n\n  create() {\n    /// call this only after overriding code body\n    _models_Models__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.emit(\"scene_created\", this.sys.config.key);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scenes/BaseScene.js?");

/***/ }),

/***/ "./src/scenes/BootScene.js":
/*!*********************************!*\
  !*** ./src/scenes/BootScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BootScene; });\n/* harmony import */ var _BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseScene */ \"./src/scenes/BaseScene.js\");\n\nclass BootScene extends _BaseScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super({\n      key: \"boot\"\n    });\n  }\n\n  preload() {\n    console.log(\"boot loading\");\n    super.preload();\n  }\n\n  create() {\n    super.create();\n    console.log(\"boot creating\");\n    game.scene.start(\"preloader\");\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scenes/BootScene.js?");

/***/ }),

/***/ "./src/scenes/GameScene.js":
/*!*********************************!*\
  !*** ./src/scenes/GameScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameScene; });\n/* harmony import */ var _BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseScene */ \"./src/scenes/BaseScene.js\");\n\nclass GameScene extends _BaseScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super({\n      key: \"game\"\n    });\n  }\n\n  preload() {\n    super.preload();\n  }\n\n  create() {\n    super.create(); //this.matter.world.setBounds(0, 0, 800, 600);\n\n    this.matter.add.rectangle(500, 600, 1000, 20, {\n      isStatic: true\n    }); //this.matter.add.poly\n\n    this.player = this.matter.add.image(300, 300, 'player', null, {\n      //shape: \"circle\",\n      mass: 10\n    });\n    this.player.setFrictionAir(0.0005);\n    this.cameras.main.startFollow(this.player);\n    this.cameras.main.followOffset.set(-300, 0);\n    this.cameras.main.setBounds(0, 0, 0, 800);\n    game.scale.on(Phaser.Scale.Events.RESIZE, this.onResize, this);\n    this.cursors = this.input.keyboard.createCursorKeys();\n  }\n\n  update() {\n    if (this.cursors.left.isDown) {\n      this.player.setVelocityX(-5); //console.log(this.player)\n    } else if (this.cursors.right.isDown) {\n      this.player.setVelocityX(5);\n    } else {\n      this.player.setVelocityX(0);\n    }\n\n    if (this.cursors.up.isDown && this.player.body.velocity.y >= 0) {\n      this.player.setVelocityY(-15);\n    }\n  }\n\n  onResize(gameSize) {\n    let width = gameSize.width;\n    let height = gameSize.height;\n    this.cameras.resize(width, height);\n    this.shield.width = width;\n    this.shield.height = height;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scenes/GameScene.js?");

/***/ }),

/***/ "./src/scenes/HUDScene.js":
/*!********************************!*\
  !*** ./src/scenes/HUDScene.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HUDScene; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BaseScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseScene */ \"./src/scenes/BaseScene.js\");\n\n\nclass HUDScene extends _BaseScene__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super({\n      key: \"hud\"\n    });\n  }\n\n  preload() {\n    super.preload();\n  }\n\n  create() {\n    game.scale.on(Phaser.Scale.Events.RESIZE, this.onResize, this);\n    this.onResize(game.scale.gameSize);\n    super.create();\n  }\n\n  onResize(gameSize) {\n    let width = gameSize.width;\n    let height = gameSize.height;\n    this.cameras.resize(width, height); //this.menu_clip.groupX = Math.floor(width / 2);\n    //this.menu_clip.groupY = Math.floor(height / 2);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scenes/HUDScene.js?");

/***/ }),

/***/ "./src/scenes/MenuScene.js":
/*!*********************************!*\
  !*** ./src/scenes/MenuScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuScene; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BaseScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseScene */ \"./src/scenes/BaseScene.js\");\n/* harmony import */ var _ui_UIMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/UIMenu */ \"./src/scenes/ui/UIMenu.js\");\n\n\n\nclass MenuScene extends _BaseScene__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super({\n      key: \"menu\"\n    });\n  }\n\n  preload() {\n    console.log(\"menu loading\");\n    this.load.json(\"ui_menu\", \"assets/ui/menu.json\");\n    super.create();\n  }\n\n  create() {\n    console.log(\"menu creating\");\n    let menu_clip = this.add.ui_component(this.cache.get(\"ui_menu\"), [\"ui\"]);\n    let menu_proto = new _ui_UIMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    menu_proto.appendClip(menu_clip);\n    this.menu_clip = menu_clip;\n    this.menu = menu_proto;\n    game.scale.on(Phaser.Scale.Events.RESIZE, this.onResize, this);\n    this.onResize(game.scale.gameSize);\n    super.create();\n  }\n\n  onResize(gameSize) {\n    let width = gameSize.width;\n    let height = gameSize.height;\n    this.cameras.resize(width, height);\n    this.menu_clip.groupX = Math.floor(width / 2);\n    this.menu_clip.groupY = Math.floor(height / 2);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scenes/MenuScene.js?");

/***/ }),

/***/ "./src/scenes/PreloaderScene.js":
/*!**************************************!*\
  !*** ./src/scenes/PreloaderScene.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PreloaderScene; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BaseScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseScene */ \"./src/scenes/BaseScene.js\");\n\n\nclass PreloaderScene extends _BaseScene__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super({\n      key: \"preloader\"\n    });\n  }\n\n  preload() {\n    console.log(\"preloader loading\"); // TODO preload preloader assets\n\n    this.load.image('player', 'assets/ico_wizard.png');\n    this.shield = this.add.rectangle(0, 0, 100, 100, 0x0).setOrigin(0); //.setAlpha(.5);\n    // listen to scale\n\n    game.scale.on(Phaser.Scale.Events.RESIZE, this.onResize, this);\n    this.onResize(game.scale.gameSize);\n    super.preload();\n  }\n\n  create() {\n    console.log(\"preloader creating\"); // TODO init scenes\n\n    game.scene.start(\"game\"); //game.scene.start(\"\");\n\n    super.create();\n  }\n\n  onResize(gameSize) {\n    let width = gameSize.width;\n    let height = gameSize.height;\n    this.cameras.resize(width, height);\n    this.shield.width = width;\n    this.shield.height = height;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scenes/PreloaderScene.js?");

/***/ }),

/***/ "./src/scenes/ui/UIMenu.js":
/*!*********************************!*\
  !*** ./src/scenes/ui/UIMenu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UIMenu; });\n/* harmony import */ var phaser_ui_comps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser-ui-comps */ \"phaser-ui-comps\");\n/* harmony import */ var phaser_ui_comps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser_ui_comps__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Models */ \"./src/models/Models.js\");\n\n\nclass UIMenu extends PhaserComps.UIComponents.UIComponentPrototype {\n  constructor() {\n    super();\n    this.btnPlay = new PhaserComps.UIComponents.UIButton(this, \"btn_play\", \"Play\");\n    this.btnPlay.on(PhaserComps.UIComponents.UIButton.EVENT_CLICK, this.onBtnPlay, this);\n  }\n\n  onBtnPlay() {\n    console.log(\"play\");\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scenes/ui/UIMenu.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\WORK\\GameJam\\GJ-04-19\\src\\index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),

/***/ "phaser":
/*!*********************************************************************************************************!*\
  !*** external {"umd":"phaser","commonjs2":"phaser","commonjs":"phaser","amd":"phaser","root":"Phaser"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = undefined;\n\n//# sourceURL=webpack:///external_%7B%22umd%22:%22phaser%22,%22commonjs2%22:%22phaser%22,%22commonjs%22:%22phaser%22,%22amd%22:%22phaser%22,%22root%22:%22Phaser%22%7D?");

/***/ }),

/***/ "phaser-ui-comps":
/*!**************************************************************************************************************************************************!*\
  !*** external {"umd":"phaser-ui-comps","commonjs2":"phaser-ui-comps","commonjs":"phaser-ui-comps","amd":"phaser-ui-comps","root":"PhaserComps"} ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = undefined;\n\n//# sourceURL=webpack:///external_%7B%22umd%22:%22phaser-ui-comps%22,%22commonjs2%22:%22phaser-ui-comps%22,%22commonjs%22:%22phaser-ui-comps%22,%22amd%22:%22phaser-ui-comps%22,%22root%22:%22PhaserComps%22%7D?");

/***/ })

/******/ });