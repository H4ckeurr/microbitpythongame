#Variables
sprite = game.create_sprite(2, 2)
life = 5
isDead = False
ennemy = game.create_sprite(randint(0, 4), randint(0, 4))
game.set_life(5)
shouldMove = True
paused = game.is_paused()

def on_forever():    
    """
    When an ennemy is touched, reset everything, remove a life and show remaining life, play a note and show a X
    """
    if sprite.is_touching(ennemy):
        basic.show_number(game.life())
        music.play_tone(Note.B3, music.beat())
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
When the B button is pressed, pause the game
"""
def pressedB():
    paused = not game.is_paused()

    if paused:
        shouldMove = False
    else:
        shouldMove = True
input.on_button_pressed(Button.B, pressedB)

"""
When the A button is pressed, check if the game is paused, if it's not then move
Creates an ennemy at a random location between 0 and 4 (row and colums)

Everytime the player moves, the ennemy do the same in a random direction
"""
def pressedA():
    if not shouldMove:
        sprite.move(0)
    else:
        sprite.move(1)
        ennemy.set_direction(randint(0, 360))
        ennemy.move(1)
input.on_button_pressed(Button.A, pressedA)

"""
If the game is over, restart another one
"""
def pressedAandB():
    if game.is_game_over():
        game.set_life(5)
input.on_button_pressed(Button.AB, pressedAandB)
