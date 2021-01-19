#// Sans utiliser Internet
#// "//" car c'est une habitude :D

#//Variables
sprite = game.create_sprite(2, 2)
life = 5
ennemyLocation = randint(0, 4)
isDead = False

def on_forever():
    game.set_life(life)
    """
    if sprite.is_touching_edge():
        basic.show_number(life)
        sprite.set_x(2)
        sprite.set_y(2)
        --life
    """
    if life <= 0:
        isDead = True

    if isDead == True:
        basic.show_string("Game Over!")
        basic.clear_screen()
        
basic.forever(on_forever)

"""
/*
* Tourner lorsque le micro:bit est secoué et indiquer la direction
/*
"""
def on_gesture_shake():
    sprite.turn(Direction.RIGHT, 90)
    if sprite.get(LedSpriteProperty.DIRECTION) == Direction.RIGHT:
        basic.show_arrow(ArrowNames.EAST)
    if sprite.get(LedSpriteProperty.DIRECTION) == Direction.LEFT:
        basic.show_arrow(ArrowNames.WEST)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def goLeft():
    sprite.set_direction(Direction.LEFT)
input.on_gesture(Gesture.TILT_LEFT, goLeft)

def goRight():
    sprite.set_direction(Direction.RIGHT)
input.on_gesture(Gesture.TILT_RIGHT, goRight)

"""
/*
* Lorsque le bouton A est appuyé, bouger de 1
/*
"""
def pressedA():
    if game.is_paused():
        sprite.move(0)
    else:
        sprite.move(1)
input.on_button_pressed(Button.A, pressedA)

"""
/*
* Lorsque le bouton B est appuyé
/*
"""
def pressedB():
    game.pause()
    game.resume()
input.on_button_pressed(Button.B, pressedB)
