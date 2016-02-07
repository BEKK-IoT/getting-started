## Running

Find the JavaScript file `app.js` in the project folder, this file should contain some boiler-plate code.

```
// Import the Firebase and Johnny-five libraries
import { firebase, five } from 'devices-core';
// Your team-name
const TEAM = 'my-awsome-team-name';
// Create a connection to Firebase
const fb = new firebase(TEAM);
// Create a representation of your Arduino board
const board = new five.Board();

board.on("ready", function() {
  // Your code here
});
```

` `

Before starting the application we want to change our team name. To do this we simply change the content of `TEAM`-variable.

After we have changed our team we are ready to start the application.
To start the application open a terminal window and navigate to the project folder, then type:

```sh
npm run app
```

` `

The application doesn't do much at the moment, but your team name should now show up on the wallboard.
To stop the application hit `ctrl+c` a few times.

In the following tasks we are going to expand on this boiler-plate code, and we will place our application
logic inside the following function:

```
board.on("ready", function() {
  // Your code here
});
```