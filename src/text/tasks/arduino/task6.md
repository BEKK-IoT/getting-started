# Let there be ligh - 3

![Photoresistor](http://johnny-five.io/img/breadboard/photoresistor.png)
![Led](https://www.arduino.cc/en/uploads/Tutorial/ExampleCircuit_bb.png)


Read values from photoresistor(lyssensor) or get data from another group.
Then turn led off when the light is bright and on when the light is dim.

```js
import { firebase, five } from 'devices-core';
import { five } from 'devices-core';

const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on("ready", function() {

    //TODO: Create a photoresitor
    //TODO: Create a led

    // "data" get the current reading from the photoresistor
    photoresistor.on("data", function() {
       //TODO: Turn led 'on', on low values and 'off' on high values
    });

    //TODO: Use data from another group through firebase to control your led. 
});
```
