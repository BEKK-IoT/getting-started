const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	arduino : {
    		name: 'Arduino',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'https://github.com/BEKK-IoT/arduino-uno.git',
    		tasks: [
				{
					path: 'arduino/task1',
					name: 'Arduino 1: Guide - Blinking LEDs'
				},
				{
					path: 'arduino/task2',
					name: 'Arduino 2: Guide - Controlling the lamp'
				},
				{
					path: 'arduino/task3',
					name: 'Arduino 3: Turn on a LED with a button'
				},
				{
					path: 'arduino/task4',
					name: 'Arduino 4: Intro - Light sensor'
				},
				{
					path: 'arduino/task5',
					name: 'Arduino 5: Intro - Read from Firebase'
				},
				{
					path: 'arduino/task6',
					name: 'Arduino 6: Control a LED with the Light sensor'
				},
				{
					path: 'arduino/neopixel',
					name: 'Arduino 7: Neopixels, multi colored LEDs'
				},
				{
					path: 'arduino/game',
					name: 'Arduino 8: Win the game'
				},
				{
					path: 'arduino/task9',
					name: 'Arduino 9: Challenge - Laser Tag'
				}]

    	},
    	photon : {
    		name: 'Photon',
    		url: 'https://github.com/BEKK-IoT/photon',
    		git: 'https://github.com/BEKK-IoT/photon.git',
    		tasks: [
				{
					path: 'photon/task1',
					name: 'Photon 1: Guide - Blinking LEDs'
				},
				{
					path: 'photon/task2',
					name: 'Photon 2: Guide - Controlling the lamp'
				},
				{
					path: 'photon/task3',
					name: 'Photon 3: Turn on a LED with a button'
				},
				{
					path: 'photon/task4',
					name: 'Photon 4: Intro - Light sensor'
				},
				{
					path: 'photon/task5',
					name: 'Photon 5: Intro - Read from Firebase'
				},
				{
					path: 'photon/task6',
					name: 'Photon 6: Control a LED with the Light sensor'
				},
				{
					path: 'photon/neopixel',
					name: 'Photon 7: Neopixels, multi colored LEDs'
				},
				{
					path: 'photon/game',
					name: 'Photon 8: Win the game'
				},
				{
					path: 'photon/task9',
					name: 'Photon 9: Challenge - Laser Tag'
				},
				{
					path: 'sphero',
					name: 'Photon 9: Sphero'
				}
			]

    	}
    },
    GENERAL_TASKS: []
};

module.exports = AppConstants;
