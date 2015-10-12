## Getting familiar with the libraries

All the devices shares a common library **devices-core**. The library consist of two wrappers to make your life easier.
One wrapper for Firebase and one wrapper for Johnny-Five.

All the libraries and examples are written in Ecmascript 6 and uses the babel transpiler.

### Firebase

[Firebase](https://www.firebase.com/docs/) is a realtime database which allows your data to be stored as JSON and synchronized in realtime to every connected client.

NB: Firebase will only send events when the value is a new value. So when two people sending a light on value, only one event will be sendt!

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

