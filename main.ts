// // Sans utiliser Internet
// // "//" car c'est une habitude :D
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
* Tourner lorsque le micro:bit est secoué et indiquer la direction
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
* Lorsque le bouton A est appuyé, bouger de 1
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
* Lorsque le bouton B est appuyé
/*

 */
input.onButtonPressed(Button.B, function pressedB() {
    game.pause()
    game.resume()
})
