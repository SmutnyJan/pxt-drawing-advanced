input.onButtonPressed(Button.A, function () {
    x += -1
    if (x < 0) {
        x = 4
    }
    Malovani.pohyb(x, y)
})
input.onPinPressed(TouchPin.P2, function () {
    y += -1
    if (y < 0) {
        y = 4
    }
    Malovani.pohyb(x, y)
})
input.onButtonPressed(Button.AB, function () {
    Malovani.prepnoutKurzor(0, 0)
})
input.onButtonPressed(Button.B, function () {
    x += 1
    if (x > 4) {
        x = 0
    }
    Malovani.pohyb(x, y)
})
input.onPinPressed(TouchPin.P1, function () {
    Malovani.prekreslit()
})
input.onGesture(Gesture.Shake, function () {
    Malovani.vymazat()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    y += 1
    if (y > 4) {
        y = 0
    }
    Malovani.pohyb(x, y)
})
let x = 0
let y = 0
y = 0
x = 0
basic.forever(function () {
    Malovani.blikaniKurzoru(0, 0)
})
