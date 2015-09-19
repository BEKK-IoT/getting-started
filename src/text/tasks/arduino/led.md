## Magic led!

![Led](https://www.arduino.cc/en/uploads/Tutorial/ExampleCircuit_bb.png)

```javascript

board.on("ready", function() {
    let led = new five.Led(11);
    led.on();
    led.brightness(2);
    firebase.send('boot', {'name': 'arduino1', 'message': 'hello!'});

    firebase.on('light', function(v) {
        v = v*(100.0/1023.0);
        led.brightness(v);
    });
});

```