input.onButtonPressed(Button.AB, function () {
    カウント = 0
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showString("" + (カウント))
})
input.onGesture(Gesture.Shake, function () {
    カウント += 1
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.showString("" + (カウント))
})
let カウント = 0
カウント = 0
