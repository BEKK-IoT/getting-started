# Controlling the lamp

It's now time to do something exciting. We are going to use our
device to control something in the real world.
We are now going to use a button with the Arduino to control a lamp.

The diagram below shows how we can connect a button to the Arduino.

![Button](http://johnny-five.io/img/breadboard/button.png)



```
import { firebase, five } from 'devices-core';
const TEAM = 'team-unicorns';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on('ready', function() {
  // Create a representation of a button
  const button = new five.Button(2);

  // The button is pressed
  button.on('down', function() {
    // Turn the lamp on through Firebase
    fb.send('switch', true, 'gadgets/lamp');
  });

  // The button is released
  button.on('up', function() {
    // Turn the lamp off through Firebase
    fb.send('switch', false, 'gadgets/lamp');
  });
});
```
