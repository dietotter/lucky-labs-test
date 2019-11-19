import { Graphics } from 'pixi.js'
import { CONFIG } from '../constants'

const { BULLET_SPEED } = CONFIG

export class Bullet extends Graphics {
    constructor(x, y, stage, bullets) {
        super()

        // reference stage and bullet list
        this.stage = stage
        this.bullets = bullets

        // set position
        this.beginFill(0x66ff00)
        this.drawCircle(0, 0, 16)
        this.endFill()
        this.x = x
        this.y = y
        this.vy = -BULLET_SPEED
    }

    update() {
        this.y += this.vy
        // if bullet went off the screen, destroy it
        if (this.y < -15) {
            this.destroy()
        }
    }

    destroy(stage) {
        // remove bullets from array to dereference them
        this.bullets.forEach((bullet, i) => {
            if (bullet === this) {
                this.bullets.splice(i, 1)
            }
        })

        // remove child from stage
        this.stage.removeChild(this)
    }
}