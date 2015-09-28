## Getting familier with the libraries

All the devices shares a common library **devices-core**, the library consist of two wrappers to make your life easy.
One wrapper for Firebase and one wrapper for johnny-Five.

All the libraries and examples are written in Ecmascript 6 and uses the babel transpiler.

### Firebase

[Firebase](https://www.firebase.com/docs/) is a realtime database which allows your data to be stored as JSON and synchronized in realtime to every connected client.

To utilize our firebase wrapper include the **firebase** module from the **devices-core**. The following code shows how to use the wrapper to register, send, and receive events:

``` js
import { firebase } from 'devices-core';
const TEAM = 'my-team-name';

//register your team name on firebase
const fb = new firebase(TEAM);

//send an event from your team to firebase
fb.send('greet', {msg: 'world'});

//listen for your teams greet event and log the msg
fb.on('greet', `users/${TEAM}`, events => {
  console.log(`Hello, ${event.msg}!`))
}
```


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
