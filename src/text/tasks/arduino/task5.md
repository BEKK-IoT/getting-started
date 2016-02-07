# Let there be ligh - 2

Read values from other groups data through firebase

```js
import { firebase, five } from 'devices-core';
import { five } from 'devices-core';

const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on("ready", function() {

  // Listen to an event from another group from firebase.
  // lightvalue = eventname, see graph or task 4
  // users/other-group-team-name, change to an actual teamname 
  fb.on('lightvalue', `users/other-group-team-name`, function(value){
  //write value to terminal
    console.log(value));
  });

});
```