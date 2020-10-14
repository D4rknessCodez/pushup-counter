def on_button_pressed_a():
    basic.show_number(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Counter
    Counter = 0
    basic.show_number(0)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Counter
    Counter += 1
    basic.show_number(Counter)
    if Counter == 10:
        for index in range(3):
            basic.show_leds("""
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                """)
            basic.show_leds("""
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                """)
input.on_button_pressed(Button.B, on_button_pressed_b)

Counter = 0
basic.show_number(0)
Counter = 0

def on_forever():
    pass
basic.forever(on_forever)
