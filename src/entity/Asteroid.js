import { Sprite } from 'pixi.js'
import { CONFIG } from '../constants'

const { APP_WIDTH, APP_HEIGHT, } = CONFIG

export class Asteroid extends Sprite {
    constructor(texture, playerZone) {
        super(texture)

        // randomly generate position and velocity
        this.x = Math.floor(Math.random() * (APP_WIDTH - this.width))
        this.y = Math.floor(Math.random() * (APP_HEIGHT - this.height - playerZone))
        this.vx = Math.random() - 0.5
        this.vy = Math.random() - 0.5
    }
}