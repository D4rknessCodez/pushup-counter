input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    Counter = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
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
basic.forever(function () {
	
})
