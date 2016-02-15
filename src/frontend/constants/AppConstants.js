const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	arduino : {
    		name: 'Arduino',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'https://github.com/BEKK-IoT/arduino-uno.git',
    		tasks: [
				{
					path: 'arduino/blinking_led',
					name: '1: Guide - Blinking LEDs'
				},
				{
					path: 'arduino/firebase-lamp',
					name: '2: Guide - Controlling the lamp'
				},
				{
					path: 'arduino/firebase-x',
					name: '3: Turn on a LED with a button'
				},
				{
					path: 'arduino/task4',
					name: '4: Intro - Light sensor'
				},
				{
					path: 'arduino/task5',
					name: '5: Intro - Read from Firebase'
				},
				{
					path: 'arduino/task6',
					name: '6: Control a LED with the Light sensor'
				},
				{
					path: 'arduino/neopixel',
					name: '7: Neopixels, multi colored LEDs'
				},
				{
					path: 'arduino/game',
					name: '8: Win the game'
				},
				{
					path: 'arduino/firebase-e',
					name: '9: Challenge - Aim for the blink'
				}]

    	}
    },
    GENERAL_TASKS: []
};

module.exports = AppConstants;
