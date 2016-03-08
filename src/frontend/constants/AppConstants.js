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
					name: '1: Guide - Blinking LEDs'
				},
				{
					path: 'arduino/task2',
					name: '2: Guide - Controlling the lamp'
				},
				{
					path: 'arduino/task3',
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
					path: 'arduino/task9',
					name: '9: Challenge - Laser Tag'
				}]

    	},
    	photon : {
    		name: 'Photon',
    		url: 'https://github.com/BEKK-IoT/photon',
    		git: 'https://github.com/BEKK-IoT/photon.git',
    		tasks: [
				{
					path: 'photon/task1',
					name: '1: Guide - Blinking LEDs'
				},
				{
					path: 'photon/task2',
					name: '2: Guide - Controlling the lamp'
				},
				{
					path: 'photon/task3',
					name: '3: Turn on a LED with a button'
				},
				{
					path: 'photon/task4',
					name: '4: Intro - Light sensor'
				},
				{
					path: 'photon/task5',
					name: '5: Intro - Read from Firebase'
				},
				{
					path: 'photon/task6',
					name: '6: Control a LED with the Light sensor'
				},
				{
					path: 'photon/neopixel',
					name: '7: Neopixels, multi colored LEDs'
				},
				{
					path: 'photon/game',
					name: '8: Win the game'
				},
				{
					path: 'photon/task9',
					name: '9: Challenge - Laser Tag'
				}
			]

    	}
    },
    GENERAL_TASKS: [
		{
			path: 'lamp/controll',
			name: 'Control the lamp'
		}
    ]
};

module.exports = AppConstants;
