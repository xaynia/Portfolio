import Star from '../game/Star.js';
import FancyPlatform from '../game/Platform.js'
import ColorScene from './ColorScene.js';
import Enemy from "../game/Enemy.js";

// Create scene (derived from ColorScene)
export default class LevelOneScene extends ColorScene {

    constructor() {
        super("LevelOneScene"); // unique id
    }

    preload() {

        this.load.audio('dropStarSound', 'assets/audio/magic-ascend.mp3');
        super.preload();
    }

    create() {
        this.dropStarSFX = this.sound.add('dropStarSound');

        // platforms
        this.fancyPlatforms.push(new FancyPlatform(this, 455, 450, 35));
        this.fancyPlatforms.push(new FancyPlatform(this, 0, 330, 35));
        this.fancyPlatforms.push(new FancyPlatform(this, 350, 200, 30));
        this.fancyPlatforms.push(new FancyPlatform(this, 770, 320, 10));


        // stars
        this.stars = this.physics.add.group({
            classType: Star,
            key: 'star',
            repeat: 14,
            setXY: {x: 30, y: 0, stepX: 55}
        }); // star bounce
        this.stars.children.iterate(child => {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            child.setCollideWorldBounds(true);
        });

        this.dropStarSFX.play();

        super.create();
    }


    collectStar(player, star) {
        super.collectStar(player, star);
        // track stars collected in level
        if (!this.localStarCount) {
            this.localStarCount = 0;
        }
        this.localStarCount++;

        console.log(`LevelOneScene: star #${this.localStarCount} collected.`);
    }

}