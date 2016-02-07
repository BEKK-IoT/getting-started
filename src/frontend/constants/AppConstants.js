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
					name: '1: Guide - Blinking leds'
				},
				{
					path: 'arduino/firebase-lamp',
					name: '2: Guide - Controlling the lamp'
				},
				{
					path: 'arduino/potentiometer',
					name: '3: Intro - Potentiometer'
				},
				{
					path: 'arduino/task4',
					name: '4: Something'
				},
				{
					path: 'arduino/task5',
					name: '5: Something else'
				},
				{
					path: 'arduino/task6',
					name: '6: Good news'
				}]

    	}
    },
    GENERAL_TASKS: []
};

module.exports = AppConstants;
