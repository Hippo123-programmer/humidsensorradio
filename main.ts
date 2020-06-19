radio.onReceivedValue(function (name, value) {
    basic.showString("" + name + " " + value)
})
radio.setGroup(20)
radio.sendString("getdetails")
