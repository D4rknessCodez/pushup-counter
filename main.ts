input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    Counter = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    Counter += 1
    basic.showNumber(Counter)
    if (Counter == 10) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                `)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
        }
    }
    
})
let Counter = 0
basic.showNumber(0)
Counter = 0
basic.forever(function on_forever() {
    
})
