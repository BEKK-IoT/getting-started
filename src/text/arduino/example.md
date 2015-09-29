## Example: Blinking LED

Example usage of libraries to make a blinking LED.

```js
import { firebase, five } from 'devices-core';
const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on("ready", function() {
  const led = new five.Led(13);

  // Send a greet event to firebase
  fb.send('greet', {name: 'world'});

  // Wait for a greet event from firebase to turn the led on
  fb.on('greet', `users/${TEAM}`, () => led.on());

});
```