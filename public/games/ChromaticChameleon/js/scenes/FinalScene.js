import Star from '../game/Star.js';
import ColorScene from './ColorScene.js';
import {pastelColors} from "../main.js";

// Create scene (derived from ColorScene)
export default class FinalScene extends ColorScene {

    constructor() {
        super("FinalScene"); // unique id
    }

    preload() {
        this.load.image('star', 'assets/star.png');
        this.load.audio('finalSound', 'assets/audio/magic.mp3');
        this.load.image('skyRNBO', 'assets/sky-rnbo.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('door', 'assets/door.png');
        this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight: 48});
        this.load.image('whiteStripe', 'assets/bg_stripe.png');
        this.load.image('platformPart', 'assets/platform_part.png');
        this.load.image('enemy', 'assets/enemy.png');
        super.preload();
    }


    create() {
        this.finalSFX = this.sound.add('finalSound');
        this.finalSFX.play();

        this.stars = this.physics.add.group({
            classType: Star,
            key: 'star',
            repeat: 1000,
        });

        this.stars.children.iterate((star, index) => {
            // place star at some position
            star.x = Phaser.Math.Between(0, 800);
            star.y = Phaser.Math.Between(0, 580);

            star.body.setAllowGravity(true);

            // animation
            this.tweens.add({
                targets: star,
                x: star.x + 100, // horizontal
                duration: 2000,
                ease: 'Sine.inOut',
                yoyo: true,
                repeat: -1,  // infinite
                delay: index * 100,
                onUpdate: (tween, target) => {
                    target.body.x = target.x;
                    target.body.y = target.y;
                }
            });

            star.setBounce(1);
        });

        const width = this.scale.width;
        const height = this.scale.height;

        const headingString =
            "Legends whisper of the\n" +
            "chameleon who gathered lost sakura\n" +
            "painting the realm with pastel splendor!";
        const fontSize = 18;
        const letterSpacing = 10;
        const lineHeight = fontSize + 10;
        const startX = this.scale.width * 0.5;
        const startY = this.scale.height * 0.4;

        const lines = headingString.split('\n');

        this.headingLetters = [];
        let currentY = startY;

        for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            const lineText = lines[lineIndex];
            const lineWidth = lineText.length * letterSpacing;
            let currentX = startX - lineWidth * 0.5;

            for (let i = 0; i < lineText.length; i++) {
                const char = lineText[i];

                const letterText = this.add.text(
                    currentX,
                    currentY,
                    char,
                    {font: `${fontSize}px`, fill: "#000000"}
                );
                letterText.setOrigin(0, 0);

                this.headingLetters.push(letterText);
                currentX += letterSpacing;
            }
            currentY += lineHeight;
        }


        super.create();
    }
}