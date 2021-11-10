let direction = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("links", 80 * direction)
    } else {
        radio.sendValue("links", 0)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("rechts", 80 * direction)
    } else {
        radio.sendValue("rechts", 0)
    }
})
loops.everyInterval(200, function () {
    if (input.acceleration(Dimension.Y) < 0) {
        direction = 1
    } else {
        direction = -1
    }
})
