input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    startwert += 1
    basic.showNumber(startwert)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    while (startwert != 0) {
        basic.pause(100)
        startwert += -1
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showNumber(startwert)
    }
    music.playTone(494, music.beat(BeatFraction.Double))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    startwert += -1
    basic.showNumber(startwert)
})
let startwert = 0
startwert = 1
basic.showNumber(startwert)
