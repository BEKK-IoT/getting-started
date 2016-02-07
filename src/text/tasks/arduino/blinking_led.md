# Blinking LED a led with Johnny-Five

In this example we will make a LED blink with Johnny-Five on an Arduino. First we will need to properly connect the LED to the Arduino. See the connection diagram bellow to see how this should be done.

The LED has a + side and a - side to it. The electricity must go to the + side of the LED to the - side. If the LED light doesn't work, you probably has connected it the wrong way.  The Arduino has multiple pins that can give electricity and take electricity. In this example we will use the digital pin 13 and the GND pin. The digital pin 13 allows us to send electricity out, or stop it as we wish. The GND pin is a ground pin. It will always take electricity in.

![Led](http://johnny-five.io/img/led-scene-0.gif)

When everything is connected as shown its time to start coding:


```js
// First we will need to import the Jhonny-Five library
import { five } from 'devices-core';

//Then setup our prototype board so we can start doing stuff with it
const board = new five.Board();

//Wait for the board to the ready
board.on("ready", function() {
  //This function will be called when the board is ready to be used

  //Setup a variable to the LED on pin 13
  const led = new five.Led(13);

  //Make the led blink each 500ms
  led.blink(500);
});

```

Lastly its time to run the code:

```sh
npm run app
```

If it didn't work as expected, maybe something went wrong along the way? Double check your code and Arduino connection, maybe the LED is connected the wrong way? If you are stuck, let us know!
