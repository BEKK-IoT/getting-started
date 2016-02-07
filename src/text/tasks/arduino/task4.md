# Let there be ligh - 1

In this example we are going to read values from a photoresistor.
A photoresistor messures light intensity. It reads values between 0 and 1024,
where 0 is darkness and 1024 is very bight light.
See how to conncect the photoresistor sensor on the diagram bellow.

![Photoresistor](http://johnny-five.io/img/breadboard/photoresistor.png)


First, set up board and firebase as in the other tasks.
Then create a new `photoresistor. 

```js
import { firebase, five } from 'devices-core';
import { five } from 'devices-core';

const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on("ready", function() {
  // Create a new `photoresistor` 
  let photoresistor = new five.Sensor({
    pin: "A2", //Read from pin 'A2' at a 250 ms frequency 
    freq: 250
  });

  // "data" get the current reading from the photoresistor
  photoresistor.on("data", function() {
    //Write sensor values to the terminal
    console.log(this.value);
    // Send a value as an event to firebase
  	fb.send('lightvalue', this.value);
  });
});
```
