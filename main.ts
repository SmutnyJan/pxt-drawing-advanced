input.onButtonPressed(Button.A, function () {
    x += 0 - 1
    if (x < 0) {
        x = 4
    }
    Malovani.Pohyb(x, y)
})
input.onPinPressed(TouchPin.P2, function () {
    y += 0 - 1
    if (y < 0) {
        y = 4
    }
    Malovani.Pohyb(x, y)
})
input.onButtonPressed(Button.AB, function () {
    Malovani.PrepnoutKurzor(x, y)
})
input.onButtonPressed(Button.B, function () {
    x += 1
    if (x > 4) {
        x = 0
    }
    Malovani.Pohyb(x, y)
})
input.onPinPressed(TouchPin.P1, function () {
    Malovani.Prekreslit()
})
input.onGesture(Gesture.Shake, function () {
    Malovani.Vymazat()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    y += 1
    if (y > 4) {
        y = 0
    }
    Malovani.Pohyb(x, y)
})
let x = 0
let y = 0
y = 0
x = 0
basic.forever(function () {
    Malovani.BlikaniKurzoru(x, y)
})
