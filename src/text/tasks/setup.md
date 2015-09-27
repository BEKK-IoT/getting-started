## Registrer enheten

Åpen `app.js`, og skift variablen `TEAM` til ønsket lagnavn.
For å sende en beskjed brukes `firebase.send(...)` og for å lytte på beskjeder brukes `firebase.on(...)`


``` js
import { firebase } from 'devices-core';
const TEAM = 'my-team-name';
const fb = new firebase(TEAM);

firebase.send('greet', {name: 'world'});
firebase.on('greet', event => console.log(`Hello, ${event.msg}!`));
```


For å interagere med den fysiske enhenten brukes `johnnyFive` fra `devices-core`. Eksempel:

```
import { firebase, johnnyFive } from 'devices-core';
const TEAM = 'team-ponies-and-unicorns';
const fb = new firebase(TEAM);
const board = johnnyFive.Board();

board.on("ready", function() {
    const led = new five.Led(11);
	firebase.send('greet', {name: 'world'});
	firebase.on('greet', () => led.on());
});

```

For å starte applikasjonen kjøres `npm run app`.

