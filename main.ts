// x=0, y=0, toggle x y, plot 0,0
// x=0, y=1 toggle x y, plot 0,1
// x=0, y=2 toggle x y, plot 0,2
// x=0, y=3 toggle x y, plot 0,3
// x=0, y=4 toggle x y, plot 0,4
input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.toggle(x, y)
            basic.pause(50)
        }
    }
})
basic.forever(function () {
	
})
