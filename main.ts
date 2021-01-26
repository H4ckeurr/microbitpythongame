// Variables
let sprite = game.createSprite(2, 2)
let life = 5
let isDead = false
let ennemy = game.createSprite(randint(0, 4), randint(0, 4))
game.setLife(5)
let shouldMove = true
let paused = game.isPaused()
basic.forever(function on_forever() {
    /** When an ennemy is touched, reset everything, remove a life and show remaining life, play a note and show a X */
    if (sprite.isTouching(ennemy)) {
        basic.showNumber(game.life())
        music.playTone(Note.B3, music.beat())
        sprite.setX(2)
        sprite.setY(2)
        game.removeLife(1)
        basic.showAnimation(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    }
    
    if (game.isGameOver()) {
        basic.clearScreen()
        basic.showString("A+B to restart")
    }
    
})
/** Turn when the micro:bit is shaken and show the direction */
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    if (isDead == true) {
        return
    }
    
    sprite.turn(Direction.Right, 90)
    if (sprite.get(LedSpriteProperty.Direction) == Direction.Right) {
        basic.showArrow(ArrowNames.North)
    } else if (sprite.get(LedSpriteProperty.Direction) == Direction.Right + 180) {
        basic.showArrow(ArrowNames.South)
    } else if (sprite.get(LedSpriteProperty.Direction) == Direction.Right + 90) {
        basic.showArrow(ArrowNames.East)
    } else if (sprite.get(LedSpriteProperty.Direction) == Direction.Right - 90) {
        basic.showArrow(ArrowNames.West)
    }
    
})
/** When the B button is pressed, pause the game */
input.onButtonPressed(Button.B, function pressedB() {
    let shouldMove: boolean;
    let paused = !game.isPaused()
    if (paused) {
        shouldMove = false
    } else {
        shouldMove = true
    }
    
})
/** 
When the A button is pressed, check if the game is paused, if it's not then move
Creates an ennemy at a random location between 0 and 4 (row and colums)

Everytime the player moves, the ennemy do the same in a random direction

 */
input.onButtonPressed(Button.A, function pressedA() {
    if (!shouldMove) {
        sprite.move(0)
    } else {
        sprite.move(1)
        ennemy.setDirection(randint(0, 360))
        ennemy.move(1)
    }
    
})
/** If the game is over, restart another one */
input.onButtonPressed(Button.AB, function pressedAandB() {
    if (game.isGameOver()) {
        game.setLife(5)
    }
    
})
