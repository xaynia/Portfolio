import PlatformPart from './PlatformPart.js';

/**
 * This class represents a platform that is composed of many smaller blocks.
 * We automatically add the physics collider to the player to set its color.
 */
export default class FancyPlatform {

    //variables of the Platform class itself:
    //      parts (array of PlatformParts)

    constructor(scene, startX, startY, numberBlocks, texture = 'platformPart') {
        this.parts = scene.physics.add.staticGroup({
            classType: PlatformPart
        });
        this.scene = scene;

        // add a platformMadeUpOfBlocks
        for (let i = 0; i < numberBlocks; i++) {
            const partX = startX + (i * 10);
            let part = new PlatformPart(scene, partX, startY, texture);
            this.parts.add(part);
        }
    }

    // to set up collision between the platform + stars
    setupStarCollision(stars) {
        this.parts.children.iterate(function (part) {
            part.setStarCollision(stars);
        });
    }

    setupPlayerCollision(scene, player) {
        this.parts.children.iterate(function (part) {
            scene.physics.add.collider(player, part, (pl, p) => {
                p.setColor();
            });
        });
    }

    setupEnemyCollision(scene, enemy) {
        this.parts.children.iterate(function (part) {
            scene.physics.add.collider(enemy, part, (en, p) => {
                p.setDark();
            });
        });
    }

    // setupBombCollision(scene, bombs) {
    //     this.parts.children.iterate(function (part) {
    //         scene.physics.add.collider(bombs, part);
    //     });
    // }

    setupBombCollision(scene, bombs) {
        this.parts.children.iterate(part => {
            scene.physics.add.collider(bombs, part);
        });
    }


}
