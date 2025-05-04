import Star from '../game/Star.js';
import FancyPlatform from '../game/Platform.js'
import ColorScene from './ColorScene.js';
import Enemy from "../game/Enemy.js";


// Create scene (derived from ColorScene)
export default class LevelTwoScene extends ColorScene {

    constructor() {
        super("LevelTwoScene"); // unique id
    }


    create() {
        this.fancyPlatforms.push(new FancyPlatform(this, 500, 425, 25));
        this.fancyPlatforms.push(new FancyPlatform(this, 90, 425, 25));
        this.fancyPlatforms.push(new FancyPlatform(this, 290, 260, 20));
        this.fancyPlatforms.push(new FancyPlatform(this, 80, 100, 20));
        this.fancyPlatforms.push(new FancyPlatform(this, 500, 100, 20));

        // enemies
        this.enemies.push(new Enemy(this, 400, 300));

        // stars
        this.stars = this.physics.add.group({
            classType: Star,
            key: 'star',
            repeat: 14,
            setXY: {x: 30, y: 0, stepX: 55}
        }); // bounce
        this.stars.children.iterate(child => {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            child.setCollideWorldBounds(true);
        });

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

        // spawn bomb at star #__
        if (this.localStarCount === 3) {
            this.spawnBomb();
        }
        // spawn bomb at star #__s
        if ([3, 8].includes(this.localStarCount)) {
            this.spawnBomb();
        }
    }

    spawnBomb() {
        let bombX = Phaser.Math.Between(100, 700);
        let bomb = this.bombs.create(bombX, 0, 'bomb');

        bomb.setCollideWorldBounds(true);
        bomb.setBounce(0);
        bomb.setVelocity(Phaser.Math.Between(-100, 100), 20);
    }
}

