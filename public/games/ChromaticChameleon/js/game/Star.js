export default class Star extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture = 'star') {
        super(scene, x, y, texture);


        // enable physics
        scene.physics.world.enable(this);
        // add to the display list
        scene.add.existing(this);

        // default behaviors for stars
        this.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        this.setCollideWorldBounds(true);
    }
}