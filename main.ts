let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    x += -1
    if (x < 0) {
        x = 4
    }
    drawing.moveAt(x, y)
})
input.onPinPressed(TouchPin.P2, function () {
    y += 1
    if (y > 4) {
        y = 0
    }
    drawing.moveAt(x, y)
})
input.onButtonPressed(Button.AB, function () {
    drawing.toogleCursor(x, y)
})
input.onButtonPressed(Button.B, function () {
    x += 1
    if (x > 4) {
        x = 0
    }
    drawing.moveAt(x, y)
})
input.onPinPressed(TouchPin.P1, function () {
    drawing.redraw()
})
input.onGesture(Gesture.Shake, function () {
    drawing.clear()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    y += -1
    if (y < 0) {
        y = 4
    }
    drawing.moveAt(x, y)
})
basic.forever(function () {
    drawing.blinkCursor(x, y)
})
