# Multi-colored LED light

![Button](https://learn.adafruit.com/system/assets/assets/000/013/714/medium640/leds_Ring12.jpg)



```
import { firebase, five } from 'devices-core';
const TEAM = 'team-unicorns';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on('ready', function() {
    fb.send('light', {'1': [233,100,100]}, 'gadgets/neopixel');
});
```
