### Johnny-Five
[Johnny-Five](http://johnny-five.io/api/) is a JavaScript Robotics programming framework. It allows users to control a bunch of different microcontrollers through JavaScript from their own computers.

To utilize our Johnny-Five wrapper include the **five** module from the **devices-core**. The following code shows how to use the wrapper to blink a LED on the Arduino boards:

```js
import { five } from 'devices-core';
const board = new five.Board();

board.on("ready", function() {
  const led = new five.Led(11);
  led.blink(500);
});

```
