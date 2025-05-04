import { pastelColors } from "../main.js";

/**
 * Represents a single piece of a multi-piece platform
 */
export default class PlatformPart extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        //enable physics (allow elements to have rigid bodies)
        this.setTint(0x181818)  // set platforms to initial dark gray
        scene.physics.world.enable(this);
        //disable gravity...
        this.body.setAllowGravity(false);
        //and not affected by anothers gravity
        this.body.setImmovable(true);
        // keep a ref to the scene
        this.scene = scene;
        //new to add object to the scene
        this.scene.add.existing(this);

    }


    /**
     * Color logic
     */
    // player saturates tiles
    setColor() {
        if (!this.isColored) {
            this.isColored = true;

            // assign colorMeter to pick the pastel color index
            let index = this.scene.colorMeter - 1;
            if (index < 0) {    // if color meter is 0, use first pastel color
                index = 0;
            }
            let colorValue = pastelColors[index];
            this.setTint(colorValue);
        }
    }
    // enemy desaturate tiles
    setDark() {
        // revert to dark if it was colored
        if (this.isColored) {
            this.isColored = false;
            this.setTint(0x181818);

        }
    }

    setStarCollision(stars) {
        this.scene.physics.add.collider(this, stars);
    }
}
