import "phaser";
import "phaser-ui-comps";
import BootScene from "./scenes/BootScene";
import PreloaderScene from "./scenes/PreloaderScene";
import MenuScene from "./scenes/MenuScene";
import GameScene from "./scenes/GameScene";
import HUDScene from "./scenes/HUDScene";

var phaserConfig = {
	type: Phaser.AUTO,
	parent: "phaser-canvas",
	backgroundColor: "#000000",
	width: 800,// window.innerWidth,
	height: 600, //window.innerHeight,
	scene: [
		BootScene,
		PreloaderScene,
		MenuScene,
		GameScene,
		HUDScene
	],
	plugins: {
		global: [
			PhaserComps.Plugin.DefaultCfg
		]
	},
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: { y: 800 }
		}
	},
};

window.game = new Phaser.Game(phaserConfig);

/*window.addEventListener("resize", function (event) {
	game.scale.resize(window.innerWidth, window.innerHeight);
}, false);*/

