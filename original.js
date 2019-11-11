original file by building the circuit of 3 LEDs 

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Butterfly)
})
led.enable(true)
pins.analogWritePin(AnalogPin.P6, 0)
pins.analogWritePin(AnalogPin.P7, 0)
pins.analogWritePin(AnalogPin.P9, 0)
basic.forever(function () {
    for (let index = 0; index <= 3071; index++) {
        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P6, index)
            } else {
                pins.analogWritePin(AnalogPin.P6, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P6, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P7, index - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P7, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P7, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P9, 1022 - index)
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P9, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P9, 0)
        }
        basic.showLeds(`
            # # # . #
            . . # . #
            # # # # #
            # . # . .
            # . # # #
            `)
        control.waitMicros(1000)
    }
})
