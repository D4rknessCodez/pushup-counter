def on_button_pressed_b():
    global Counter
    Counter += 1
    basic.show_number(Counter)
input.on_button_pressed(Button.B, on_button_pressed_b)

Counter = 0
basic.show_number(0)
Counter = 0

def on_forever():
    pass
basic.forever(on_forever)
