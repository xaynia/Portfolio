import Star from '../game/Star.js';
import ColorScene from './ColorScene.js';

export default class IntroScene extends ColorScene {

    constructor() {
        super("IntroScene"); // unique id
    }
    
    create() {

        const width = this.scale.width;
        const height = this.scale.height;

        // instructions text
        this.add.text(width * 0.5, height * 0.1,
            "The world is drained of color!\nCollect sakura to restore it.\nAvoid obstacles that drain your progress\n\n\nUse '◄' '►' arrow keys to move.",
            {
                font: "20px",
                fill: "#ffffff",
                align: "center"
            }
        ).setOrigin(0.5, -1);


        // stars 
        this.stars = this.physics.add.group({
            classType: Star,
            key: 'star',
            repeat: 0,
            setXY: {x: 450, y: 0, stepX: 10}
        }); // bounce
        this.stars.children.iterate(child => {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            child.setCollideWorldBounds(true);
        });

        super.create();
    }

    //
    collectStar(player, star) {
        super.collectStar(player, star);
        // star fills
        this.colorMeter = 15;
        // spawn door
        if (!this.door) {
            this.door = this.physics.add.staticImage(780, 542, 'door');
            this.door.refreshBody();
            this.physics.add.overlap(this.player, this.door, this.enterDoor, null, this);
            this.updateColorState();
        }
    }
}