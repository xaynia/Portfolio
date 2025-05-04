import Title from './scenes/Title.js';
import LevelOneScene from './scenes/LevelOneScene.js';
import FinalScene from './scenes/FinalScene.js';
import IntroScene from './scenes/IntroScene.js';
import LevelTwoScene from "./scenes/LevelTwoScene.js";
import LevelThreeScene from "./scenes/LevelThreeScene.js";
import LevelFourScene from "./scenes/LevelFourScene.js";

const config = {
    type: Phaser.AUTO,

    // tell Phaser where to inject the canvas
    parent: 'game',

    // logical resolution
    width: 800,
    height: 600,

    // \make the canvas resize automatically
    scale: {
        mode: Phaser.Scale.FIT,          // letter-box fit
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene: [Title, IntroScene, LevelOneScene, LevelTwoScene, LevelThreeScene, LevelFourScene, FinalScene]
};

// FOR DEBUGGING
export const SKIP_TITLE_SCREEN = false;

// Pastel color array:
export const pastelColors = [
    0xf4abab,
    0xf4bbab,
    0xf4c8ab,
    0xeef4ab,
    0xd2f4ab,
    0xb8f4ab,
    0xabf4bb,
    0xabf4da,
    0xabf4ed,
    0xabecf4,
    0xabd7f4,
    0xabc2f4,
    0xabadf4,
    0xbbabf4,
    0xe2abf4
];

/**
 * This is the core level loop which the game progresses the scenes through.
 * Level of orders specified here.
 */
export const gameLevels = [
    //""Title"

    "IntroScene",
    "LevelOneScene",
    "LevelTwoScene",
    "LevelThreeScene",
    "LevelFourScene",
    "FinalScene",
    "Title"
]

new Phaser.Game(config);