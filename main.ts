input.onButtonPressed(Button.A, function () {
    music.playMelody("A G E B C C5 F D ", 120)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.stopMelody(MelodyStopOptions.All)
})
