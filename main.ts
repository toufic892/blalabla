music.playMelody("- D E D A - F E ", 292)
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    radio.sendValue("toufic", 1)
})
