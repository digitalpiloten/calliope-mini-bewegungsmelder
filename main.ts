let licht_1 = 0
let licht_2 = 0
basic.forever(function () {
    licht_1 = input.lightLevel()
    basic.pause(100)
    licht_2 = input.lightLevel()
    if (licht_1 - licht_2 > 10) {
        basic.setLedColor(0xff0000)
        basic.showIcon(IconNames.No)
        basic.pause(500)
    } else {
        basic.setLedColor(0x00ff00)
        basic.showIcon(IconNames.Yes)
    }
})
