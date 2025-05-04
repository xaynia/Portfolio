import FancyPlatform from '../game/Platform.js';
import Player from '../game/Player.js';
import {pastelColors, gameLevels} from '../main.js';
import Enemy from "../game/Enemy.js";

// Create scene (derived from phaser scene)
export default class ColorScene extends Phaser.Scene {
    // variables of the ColorScene object
    //      player;
    //      cursors;
    //      platforms;
    //      level;
    //      stars;
    //      bomb;
    //      sceneName;

    constructor(sceneName) {
        super(sceneName); // unique id
        this.sceneName = sceneName;
    }

    //  for passing data between scenes
    init(data) {
        this.level = data.level;
        console.log("ColorScene[" + this.sceneName + "] INIT CALLED: passed level data:: " + this.level);
    }

    preload() {
        console.log("ColorScene[" + this.sceneName + "] preload called");


        // Loads:
        this.load.image('skyBW', 'assets/sky-bw.png'); // asset('assetkey')
        this.load.image('skyRNBO', 'assets/sky-rnbo.png');
        this.load.image('groundBW', 'assets/platform-bw.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('door', 'assets/door.png');
        this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight: 48});
        this.load.image('whiteStripe', 'assets/bg_stripe.png');
        this.load.image('platformPart', 'assets/platform_part.png');
        this.load.image('enemy', 'assets/enemy.png');
        // audio
        this.load.audio('jumpSound', 'assets/audio/jump_c.mp3');
        this.load.audio('doorSound', 'assets/audio/new-level.mp3');
        this.load.audio('sakuraSound', 'assets/audio/bubble-pop.mp3'); // jump_c -> bubble-pop
        this.load.audio('bombSound', 'assets/audio/retro-explode-3.mp3');
        this.load.audio('damageSound', 'assets/audio/pow.mp3');
        this.load.audio('backgroundStripeSound', 'assets/audio/bubble-pop.mp3');
        this.load.audio('finalSound', 'assets/audio/magic.mp3');
        this.load.audio('newStarSound', 'assets/audio/fantasy_ui.mp3');
        this.load.audio('dropStarSound', 'assets/audio/magic-ascend.mp3');

        this.fancyPlatforms = [];   // create an empty array to store fancy platforms (required)
        this.enemies = [];   // create an empty array to store enemies (required)
    }

    create() {
        console.log("ColorScene[" + this.sceneName + "] create called");

        // Ground
        this.fancyPlatforms.push(new FancyPlatform(this, 0, 585, this.scale.width / 10 + 1));

        // audio
        this.jumpSFX = this.sound.add('jumpSound');
        this.doorSFX = this.sound.add('doorSound');
        this.sakuraSFX = this.sound.add('sakuraSound');
        this.bombSFX = this.sound.add('bombSound');
        this.damageSFX = this.sound.add('damageSound');
        // this.gameStartSFX = this.sound.add('gameStartSound');
        this.backgroundSFX = this.sound.add('backgroundStripeSound');  // , { volume: 0.5 });
        this.finalSFX = this.sound.add('finalSound');
        this.newStarSFX = this.sound.add('newStarSound');
        this.dropStarSFX = this.sound.add('dropStarSound');

        // Player:
        this.player = new Player(this, 1, 450);
        // keyboard Manager (built-in): control player
        this.cursors = this.input.keyboard.createCursorKeys();


        /**
         * Color Meter
         */
        this.colorMeter = 0; // 0 - 100%
        // background stripes
        this.backgroundStripes = []; // create array to store stripes
        for (let i = 0; i < 15; i++) { // create 15 stripes
            let yPos = 560 - (i * 40); // bottom up, 40px tall
            let stripe = this.add.image(400, yPos, 'whiteStripe');
            stripe.setAlpha(0); // hide initially
            stripe.setDepth(-1);
            this.backgroundStripes.push(stripe);
        }
        this.pastelColors = pastelColors;
        // color meter UI
        this.colorBarBG = this.add.rectangle(400, 20, 200, 16, 0x444444);
        this.colorBarChunks = []; // UI rainbow fill
        let chunkWidth = 200 / 15;
        let startX = 400 - 100;
        let yPos = 20;
        for (let i = 0; i < 15; i++) {
            let xPos = startX + i * chunkWidth;
            let chunkRect = this.add.rectangle(xPos, yPos, chunkWidth, 16, 0x000000)
                .setOrigin(0, 0.5)
                .setDepth(9999);
            chunkRect.setAlpha(0);
            this.colorBarChunks.push(chunkRect);
        }

        // bombs
        this.bombs = this.physics.add.group();

        /**
         * Platform Colliders
         */
        for (let platformIndex = 0; platformIndex < this.fancyPlatforms.length; platformIndex++) {
            this.fancyPlatforms[platformIndex].setupStarCollision(this.stars)
            this.fancyPlatforms[platformIndex].setupPlayerCollision(this, this.player);
            this.fancyPlatforms[platformIndex].setupPlayerCollision(this, this.player.feet);
            // bombs
            this.fancyPlatforms[platformIndex].setupBombCollision(this, this.bombs);
            // enemy
            this.fancyPlatforms[platformIndex].setupEnemyCollision(this, this.enemies);
        }

        // enemy damage
        for (let enemyIndex = 0; enemyIndex < this.enemies.length; enemyIndex++) {
            this.physics.add.collider(this.player, this.enemies[enemyIndex], this.hitEnemy, null, this);
        }

        // Collect ability:
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this); // collect stars
        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this); // hit bombs
    }

    update() {
        this.player.update();

        // Movement:
        if (this.cursors.left.isDown) {          // press left arrow key -> move player to the left and play left animation
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {  // right
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        } else {                                 // turn
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
            // jump sound
            this.jumpSFX.play();
            // this.sound.play('jumpTwo');
        }
    }

    /**
     * FUNCTIONS:
     * collectStar, hitBomb, enterDoor, updateColorState, updatePlayerColor
     * @param player
     * @param star
     */

    // COLLECT STAR -> Color meter
    collectStar(player, star) {
        this.sakuraSFX.play(); // pickup sakura sound
        star.disableBody(true, true);
        // each star increments (+1) to colorMeter for background stripes
        this.colorMeter = Math.min(this.colorMeter + 1, 15);
        this.updateColorState();

        // // if no stars remain, spawn door
        // if (this.stars.countActive(true) === 0) {
        //     this.door = this.physics.add.staticImage(100, 510, 'door');
        //     this.door.refreshBody();
        //     this.physics.add.overlap(this.player, this.door, this.enterDoor, null, this);
        // }
    }

    hitBomb(player, bomb) {
        this.bombSFX.play(); // bomb sound
        this.colorMeter = Math.max(this.colorMeter - 1, 0); // reduce color meter
        // bomb dissapears - maybe remove
        bomb.disableBody(true, true);

        // spawn a new star
        this.spawnExtraStar();
        this.newStarSFX.play(); // new star sound
        this.updateColorState(); //  so the player refill color meter (proceed)
    }

    hitEnemy(player, enemy) {
        this.damageSFX.play();
    }

    spawnExtraStar() {
        console.log("Spawning an extra star after bomb hit!");
        let starX = Phaser.Math.Between(50, 750);
        let starY = 0;
        let star = this.stars.create(starX, starY, 'star');
        star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        star.setCollideWorldBounds(true);
    }

    enterDoor(_player, _door) {
        console.log("You can now move to the next level!");
        this.doorSFX.play(); // door sound
        var nextLevel = this.level + 1;
        this.scene.start(gameLevels[nextLevel], {level: nextLevel});
        this.door.disableBody(true, true);
    }


    // UPDATE: Color State - background + player
    updateColorState() {
        // show/hide background stripes
        for (let i = 0; i < 15; i++) {
            if (i < this.colorMeter) {
                this.backgroundStripes[i].setAlpha(1);
                this.backgroundStripes[i].setTint(pastelColors[i]);
            } else {
                this.backgroundStripes[i].setAlpha(0);
            }
        }
        // update player alpha
        this.updatePlayerColor();
        // update color meter UI bar
        for (let i = 0; i < 15; i++) {
            if (i < this.colorMeter) {
                this.colorBarChunks[i].setAlpha(1);
                let colorVal = this.pastelColors[i];
                this.colorBarChunks[i].fillColor = colorVal;
            } else {
                this.colorBarChunks[i].setAlpha(0);
            }
        }
        // door
        if (this.colorMeter >= 15) { // if colorMeter = 15 (full) -> show door
            if (!this.door) {
                this.door = this.physics.add.staticImage(400, 543, 'door');
                this.door.refreshBody();
                this.physics.add.overlap(this.player, this.door, this.enterDoor, null, this);
            }
        } else {
            // if color meter < 15 and a door exists, remove it
            if (this.door) {
                this.door.destroy();
                this.door = null;
            }
        }
    }

    // UPDATE: Player Color
    updatePlayerColor() {
        if (this.colorMeter === 0) {
            this.player.clearTint();
        } else {  // uses a pastel color based on the current meter
            let cIndex = this.colorMeter - 1;
            let colorValue = pastelColors[cIndex];
            this.player.setTint(colorValue);
            // alpha (.01from ~0.1 to 1 as colorMeter goes from 1..15
            let alphaValue = 0.1 + (this.colorMeter / 15) * 0.9;
            this.player.setAlpha(alphaValue);
        }
    }


}