# Let there be ligh - 1

![Photoresistor](http://johnny-five.io/img/breadboard/photoresistor.png)


Read values from photoresistor(lyssensor) and send them to firebase.

```js
import { firebase, five } from 'devices-core';
import { five } from 'devices-core';

const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on("ready", function() {
    // Create a new `photoresistor` 
  let photoresistor = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  // "data" get the current reading from the photoresistor
  photoresistor.on("data", function() {
    console.log(this.value);
    // Send a value as an event to firebase
  	fb.send('lightvalue', this.value);
  });
});
```
