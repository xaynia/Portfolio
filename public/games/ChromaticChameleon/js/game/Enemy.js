export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture = 'enemy') {
        super(scene, x, y, texture);


        this.sceneRef = scene;

        // add physics
        scene.physics.world.enable(this);
        scene.add.existing(this);

        // horizontal velocity
        this.setVelocityX(50);
        this.setCollideWorldBounds(true);
        this.setBounceX(1);

    }

    preUpdate(time, delta) { // ms
        super.preUpdate(time, delta);

        // if collide
        if (this.body.blocked.left) {
            this.setVelocityX(50);
            this.flipX = false;
        } else if (this.body.blocked.right) {
            this.setVelocityX(-50);
            this.flipX = true;


        }
        // check for tile
        this.checkEdge();
    }

    checkEdge() {
        if (!this.body) return;

        let frontOffset = this.flipX ? -10 : 10;
        let frontX = this.x + frontOffset;
        let frontY = this.y + 16;


        let hits = this.sceneRef.physics.overlapRect(frontX, frontY, 2, 2, true, true);

        // if empty array ahead (dead end), turn around
        if (hits.length === 0) {
            this.reverse();
        }
    }

    reverse() {
        this.setVelocityX(-this.body.velocity.x);
        // change direction
        this.flipX = (this.body.velocity.x < 0);
    }
}