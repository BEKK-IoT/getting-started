# Read from firebase

In this task we are going to use values other groups read from their photoresistor, through firebase. The point of this task is to send and recieve data thought the cloud, connecting multiple devices. We are still going to use the code written in part 1, so that the other groups can read your values.


We continue with the code from part1. Let the fb object listen to the event 'lightvalue'. Change 'other-group-team-name' with the name of the group you want to get your data from. Lastly, we print out the value to the terminal.


```js
import { firebase, five } from 'devices-core';

const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on("ready", function() {

  // From task 4 
  let photoresistor = new five.Sensor({
    pin: "A2", //Read from pin 'A2' at a 250 ms frequency 
    freq: 250
  });

  //From task4
  photoresistor.on("data", function() {
    // Send a value as an event to firebase
    fb.send('lightvalue', this.value);
  });

  // Listen to an event from another group from firebase.
  // lightvalue = eventname, see graph or task 4
  // users/other-group-team-name, change to an actual teamname 
  fb.on('lightvalue',  'users/other-group-team-name', function(value){
    //write value to terminal
    console.log(value);
  });

});
```


If there is no other groups emitting their data, you can use 'test' 

Example with 'test' group.

```js

fb.on('lightvalue', `users/test`, function(value){
  //write value to terminal
  console.log(value));
});

```