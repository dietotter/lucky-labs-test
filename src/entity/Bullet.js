import { Graphics } from 'pixi.js'
import { CONFIG } from '../constants'

const { BULLET_SPEED } = CONFIG

export class Bullet extends Graphics {
    constructor(x, y, bullets) {
        super()

        // reference bullet list
        this.bullets = bullets
        // set radius
        this.radius = 16

        // set position
        this.beginFill(0x66ff00)
        this.drawCircle(0, 0, this.radius)
        this.endFill()
        this.x = x
        this.y = y
        this.vy = -BULLET_SPEED
    }

    update() {
        // movement
        this.y += this.vy

        // if bullet went off the screen, destroy it
        if (this.y < -15) {
            this.removeItself()
            return true
        }

        return false
    }

    removeItself() {
        // remove bullets from array to dereference them
        this.bullets.forEach((bullet, i) => {
            if (bullet === this) {
                this.bullets.splice(i, 1)
            }
        })

        // destroy sprite
        this.destroy()
    }
}