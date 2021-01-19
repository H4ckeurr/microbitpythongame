#//Variables
sprite = game.create_sprite(2, 2)
life = 5
isDead = False
ennemyLocation = randint(0, 4)
game.set_life(5)

def on_forever():    
    
    if sprite.is_touching_edge():
        basic.show_number(game.life())
        sprite.set_x(2)
        sprite.set_y(2)
        game.remove_life(1)
        basic.show_animation("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)

    if game.is_game_over():
        basic.clear_screen()
        basic.show_string("A+B to restart")
        
basic.forever(on_forever)

"""
Turn when the micro:bit is shaken and show the direction
"""
def on_gesture_shake():
    if isDead == True:
        return

    sprite.turn(Direction.RIGHT, 90)

    if sprite.get(LedSpriteProperty.DIRECTION) == Direction.RIGHT:
        basic.show_arrow(ArrowNames.NORTH)
    elif sprite.get(LedSpriteProperty.DIRECTION) == Direction.RIGHT + 180:
        basic.show_arrow(ArrowNames.SOUTH)
    elif sprite.get(LedSpriteProperty.DIRECTION) == Direction.RIGHT + 90:
        basic.show_arrow(ArrowNames.EAST)
    elif sprite.get(LedSpriteProperty.DIRECTION) == Direction.RIGHT - 90:
        basic.show_arrow(ArrowNames.WEST)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

"""
When the A button is pressed, check if the game is paused, if it's not then move
"""
def pressedA():
    if game.is_paused():
        sprite.move(0)
    else:
        sprite.move(1)
input.on_button_pressed(Button.A, pressedA)

"""
When the B button is pressed, pause the game
"""
def pressedB():
    game.pause()
input.on_button_pressed(Button.B, pressedB)

def pressedAandB():
    if game.is_game_over():
        game.set_life(5)
        isDead = False
input.on_button_pressed(Button.AB, pressedAandB)
