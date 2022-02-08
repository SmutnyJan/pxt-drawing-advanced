input.onButtonPressed(Button.A, function () {
    x += 0 - 1
    if (x < 0) {
        x = 4
    }
    Malovani.Pohyb(x, y)
})
input.onPinPressed(TouchPin.P2, function () {
    Malovani.Vymazat()
})
input.onButtonPressed(Button.AB, function () {
    Malovani.PrepnoutKurzor(0, 0)
})
input.onButtonPressed(Button.B, function () {
    x += 1
    if (x > 4) {
        x = 0
    }
    Malovani.Pohyb(x, y)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Malovani.Prekreslit()
})
let x = 0
let y = 0
y = 1
x = 3
basic.forever(function () {
    Malovani.BlikaniKurzoru(x, y)
})
