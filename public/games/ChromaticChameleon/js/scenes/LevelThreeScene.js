import Star from '../game/Star.js';
import FancyPlatform from '../game/Platform.js'
import ColorScene from './ColorScene.js';
import Enemy from "../game/Enemy.js";

// Create scene (derived from ColorScene)
export default class LevelThreeScene extends ColorScene {

    constructor() {
        super("LevelThreeScene"); // unique id
    }


    create() {


        // platforms
        this.fancyPlatforms.push(new FancyPlatform(this, 30, 450, 10));
        this.fancyPlatforms.push(new FancyPlatform(this, 305, 300, 10));
        this.fancyPlatforms.push(new FancyPlatform(this, 550, 150, 15));

        // enemies
        this.enemies.push(new Enemy(this, 300, 100));
        this.enemies.push(new Enemy(this, 600, 100));


        //  stars - bouncing
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

        this.stars.children.iterate((star) => {
            // random velocity
            const vx = Phaser.Math.Between(-100, 100); // horizontal
            const vy = Phaser.Math.Between(-50, 50); // vertical
            star.setVelocity(vx, vy);
            star.setCollideWorldBounds(true);
            star.setBounce(1);
        });


        super.create();

        for (let i = 0; i < this.fancyPlatforms.length; i++) {
            this.fancyPlatforms[i].setupStarCollision(this.stars);
        }

    }


    collectStar(player, star) {
        super.collectStar(player, star);
        // track stars collected in level
        if (!this.localStarCount) {
            this.localStarCount = 0;
        }
        this.localStarCount++;

        console.log(`LevelTwoScene: star #${this.localStarCount} collected.`);

        // spawn bomb at star #__s
        if ([1, 5, 9].includes(this.localStarCount)) {
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