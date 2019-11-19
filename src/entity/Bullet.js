import { Graphics } from 'pixi.js'
import { CONFIG } from '../constants'

const { BULLET_SPEED } = CONFIG

export class Bullet extends Graphics {
    constructor(x, y) {
        super()

        // randomly generate position and velocity
        this.beginFill(0x66ff00)
        this.drawCircle(x, y, 16)
        this.endFill()
        this.vy = -BULLET_SPEED
    }

    destroy(stage) {
        stage.removeChild(this) // ???
    }
}