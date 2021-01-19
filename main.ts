// //Variables
let sprite = game.createSprite(2, 2)
let life = 5
let ennemyLocation = randint(0, 4)
let isDead = false
basic.forever(function on_forever() {
    let isDead: boolean;
    game.setLife(life)
    /** 
    if sprite.is_touching_edge():
        basic.show_number(life)
        sprite.set_x(2)
        sprite.set_y(2)
        --life
    
 */
    if (life <= 0) {
        isDead = true
    }
    
    if (isDead == true) {
        basic.showString("Game Over!")
        basic.clearScreen()
    }
    
})
/** 
/*
* Turn when the micro:bit is shaken and show the direction
/*

 */
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    sprite.turn(Direction.Right, 90)
    if (sprite.get(LedSpriteProperty.Direction) == Direction.Right) {
        basic.showArrow(ArrowNames.East)
    }
    
    if (sprite.get(LedSpriteProperty.Direction) == Direction.Left) {
        basic.showArrow(ArrowNames.West)
    }
    
})
input.onGesture(Gesture.TiltLeft, function goLeft() {
    sprite.setDirection(Direction.Left)
})
input.onGesture(Gesture.TiltRight, function goRight() {
    sprite.setDirection(Direction.Right)
})
/** 
/*
* When the A button is pressed, check if the game is paused, if it's not then move
/*

 */
input.onButtonPressed(Button.A, function pressedA() {
    if (game.isPaused()) {
        sprite.move(0)
    } else {
        sprite.move(1)
    }
    
})
/** 
/*
* When the B button is pressed, pause the game
/*

 */
input.onButtonPressed(Button.B, function pressedB() {
    game.pause()
})
