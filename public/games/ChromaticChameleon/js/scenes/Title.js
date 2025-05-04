import {pastelColors, gameLevels, SKIP_TITLE_SCREEN} from "../main.js";
import ColorScene from "./ColorScene.js";

export default class Title extends Phaser.Scene {
    constructor() {
        super('Title'); //unique key -> must be defined in all scenes
    }

    preload() {
        this.load.audio('gameStartSound', 'assets/audio/game_start.mp3');
    }

    //hook that gets triggered by Phaser
    // only assets loaded can be called in create()
    create() {
        this.gameStartSFX = this.sound.add('gameStartSound');
        this.gameStartSFX.play();

        if (SKIP_TITLE_SCREEN) {
            this.scene.start(gameLevels[0], {level: 0});
            return
        }


        this.pastelColors = pastelColors;

        //using the Game object to access config props
        console.log(this.game.renderer.config.backgroundColor);

        // using the ScaleManager to get the width and height of the game
        const width = this.scale.width;
        const height = this.scale.height;

        const headingString = "Reclaim the pastel world!";
        this.headingLetters = [];
        let letterSpacing = 31;
        let totalWidth = headingString.length * letterSpacing;

        let startX = (width * 0.5) - (totalWidth / 2);
        let yPos = height * 0.4; // near top

        for (let i = 0; i < headingString.length; i++) {
            let char = headingString[i];
            let letterX = startX + i * letterSpacing;
            let letterText = this.add.text(letterX, yPos, char, {
                font: "48px",
                fill: "#ffffff"
            });

            letterText.setOrigin(-.5, 0.0);

            // store in array
            this.headingLetters.push(letterText);
        }

        // timer
        this.time.addEvent({
            delay: 300,          // every 300 ms
            loop: true,
            callback: () => {
                this.headingLetters.forEach(letter => {
                    let randIndex = Phaser.Math.Between(0, pastelColors.length - 1);
                    let pastelHex = pastelColors[randIndex];
                    // 0xffffff -> #RRGGBB string
                    let colorStr = "#" + pastelHex.toString(16).padStart(6, "0");
                    letter.setStyle({fill: colorStr});
                });
            }
        });

        // "click to begin" text
        let playButton = this.add.text(width * 0.5, height * 0.5, "Click To Begin", {
            font: "24px",
            fill: "#ffffff"
        }).setOrigin(0.5, -.5);

        playButton.setInteractive();
        playButton.on("pointerdown", () => {
            this.scene.start(gameLevels[0], {level: 0});
        });
    }

}