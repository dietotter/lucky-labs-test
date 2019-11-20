import { Sprite } from 'pixi.js'
import { CONFIG } from '../constants'

const { APP_WIDTH, APP_HEIGHT } = CONFIG

export class Player extends Sprite {
    constructor(texture) {
        super(texture)

        // set cooldown for bullet shooting to 0
        this.bulletCooldown = 0
        // how many shots left to try and defeat asteroids
        this.bulletsLeft = 10

        // spawn player at the bottom
        this.position.set(APP_WIDTH / 2 - this.width / 2, APP_HEIGHT - this.height - 20)
        this.vx = 0
    }

    update(deltaMS) {
        // check if player doesn't go outside of the canvas
        let nextX = this.x + this.vx
        if (nextX < 0 || (nextX + this.width) > APP_WIDTH){
            this.vx = 0
        }
        // player movement
        this.x += this.vx

        // bullet cooldown ticking
        this.bulletCooldown -= deltaMS
    }
}