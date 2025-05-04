// No import statement needed since Phaser is loaded globally in index.html
export default class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture = 'dude') {
        super(scene, x, y, texture);

        // add physics 
        scene.physics.world.enable(this);
        scene.add.existing(this);

        this.setBounce(0.2);
        this.setCollideWorldBounds(true);
        this.setAlpha(0.1);

        this.body.setGravityY(1);

        // create a "feet" sprite that is invisible but WIDER
        this.feet = scene.physics.add.sprite(x, y, null); // no texture
        this.feet.setVisible(false);  // invisible

        // set the feet body to be "static" or "immovable"
        this.feet.body.setAllowGravity(false);
        this.feet.body.setImmovable(true);

        // make the feet’s bounding box wider or offset
        this.feet.body.setSize(40, 10);   // e.g., 40 wide, 10 tall
        this.feet.body.setOffset(0, 32);  // position near bottom of the player's sprite

        // animation
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(texture, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: texture, frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(texture, { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }

    update() {
        this.feet.x = this.x;
        this.feet.y = this.y;
    }
}