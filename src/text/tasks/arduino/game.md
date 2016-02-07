# Control the game

In this task you are going to control the player on the dashboard game.
You can choose to use the potentiometer and a button or a joystick.

Potentiometer + button:

![Potentiometer](http://johnny-five.io/img/breadboard/potentiometer.png)
![Button](http://johnny-five.io/img/breadboard/button.png)

```js
  let potentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });
```

Joystick:

![Joystick](https://raw.githubusercontent.com/rwaldron/johnny-five/master/docs/breadboard/joystick-sparkfun.png)

```js
let joystick = new five.Joystick({
  pins: ["A0", "A1"], 
  invertY: true
});
```

Task:


```js
import { firebase, five } from 'devices-core';
import { five } from 'devices-core';

const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on("ready", function() {

    //TODO: Create potentiomet + button / joystick (input)

    //TODO: Read data from input

    //TODO: Send input data to game
});
```