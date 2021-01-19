// //Variables
let sprite = game.createSprite(2, 2)
let life = 5
let isDead = false
let ennemyLocation = randint(0, 4)
game.setLife(5)
basic.forever(function on_forever() {
    if (sprite.isTouchingEdge()) {
        basic.showNumber(game.life())
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
/** When the A button is pressed, check if the game is paused, if it's not then move */
input.onButtonPressed(Button.A, function pressedA() {
    if (game.isPaused()) {
        sprite.move(0)
    } else {
        sprite.move(1)
    }
    
})
/** When the B button is pressed, pause the game */
input.onButtonPressed(Button.B, function pressedB() {
    game.pause()
})
input.onButtonPressed(Button.AB, function pressedAandB() {
    let isDead: boolean;
    if (game.isGameOver()) {
        game.setLife(5)
        isDead = false
    }
    
})
