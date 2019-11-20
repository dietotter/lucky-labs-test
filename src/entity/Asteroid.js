import { Sprite } from 'pixi.js'
import { CONFIG } from '../constants'

const { APP_WIDTH } = CONFIG

export class Asteroid extends Sprite {
    constructor(texture, playerZone, asteroids) {
        super(texture)

        // reference asteroid list
        this.asteroids = asteroids
        // set the right and lower boundary
        this.rightBound = APP_WIDTH - this.width
        this.lowerBound = playerZone - this.height

        // randomly generate available position and velocity
        this.x = Math.floor(Math.random() * this.rightBound)
        this.y = Math.floor(Math.random() * this.lowerBound)
        this.vx = Math.random() - 0.5
        this.vy = Math.random() - 0.5
    }

    update() {
        // movement
        this.x += this.vx
        this.y += this.vy

        // canvas bounds collision checking
        this.checkForBoundsCollision()
    }

    // change movement direction on hitting the boundary
    checkForBoundsCollision() {

        if (this.y <= 0 || this.y >= this.lowerBound) {
            this.vy = -this.vy
        }

        if (this.x <= 0 || this.x >= this.rightBound) {
            this.vx = -this.vx
        }
    }

    removeItself() {
        // remove asteroid from array to dereference it
        this.asteroids.forEach((asteroid, i) => {
            if (asteroid === this) {
                this.asteroids.splice(i, 1)
            }
        })

        // remove child from stage
        this.destroy()
    }
}