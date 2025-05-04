import Star from '../game/Star.js';
import FancyPlatform from '../game/Platform.js'
import ColorScene from './ColorScene.js';
import Enemy from "../game/Enemy.js";


// Create scene (derived from ColorScene)
export default class LevelFourScene extends ColorScene {

    constructor() {
        super("LevelFourScene"); // unique id
    }

    create() {
        // platforms
        this.fancyPlatforms.push(new FancyPlatform(this, 450, 420, 14));
        this.fancyPlatforms.push(new FancyPlatform(this, 40, 270, 20));
        this.fancyPlatforms.push(new FancyPlatform(this, 550, 170, 15));

        // enemies
        this.enemies.push(new Enemy(this, 500, 300));
        this.enemies.push(new Enemy(this, 580, 100));
        this.enemies.push(new Enemy(this, 190, 100));
        this.enemies.push(new Enemy(this, 190, 100));

        //  stars - floating
        this.stars = this.physics.add.group({
            classType: Star,
            key: 'star',
            repeat: 14,
        });

        this.stars.children.iterate((star, index) => {
            // place star at some position
            star.x = Phaser.Math.Between(100, 700);
            star.y = Phaser.Math.Between(50, 300);

            star.body.setAllowGravity(false);

            // animation
            this.tweens.add({
                targets: star,
                y: star.y + 150, // vertical
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
        });

        super.create();
    }


    collectStar(player, star) {
        super.collectStar(player, star);
        if (!this.localStarCount) {
            this.localStarCount = 0;
        }
        this.localStarCount++;

        console.log(`LevelTwoScene: star #${this.localStarCount} collected.`);

        // spawn bomb at star #__s
        if ([5, 8, 10].includes(this.localStarCount)) {
            this.spawnBomb();
        }
    }

    spawnBomb() {
        let bombX = Phaser.Math.Between(100, 700);
        let bomb = this.bombs.create(bombX, 0, 'bomb');

        bomb.setCollideWorldBounds(true);
        bomb.setBounce(1);
        bomb.setVelocity(Phaser.Math.Between(-100, 100), 20);
    }
}