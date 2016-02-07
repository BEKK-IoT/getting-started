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
					name: 'Blinking leds'
				}, {
					path: 'arduino/button',
					name: 'Button'
				}, {
					path: 'arduino/potentiometer',
					name: 'Potentiometer'
				}, {
					path: 'arduino/task4',
					name: 'Task 4 - '
				}, {
					path: 'arduino/task5',
					name: 'Task 5 - '
				}, {
					path: 'arduino/task6',
					name: 'Task 6'
				}]

    	}
    },
    GENERAL_TASKS: []
};

module.exports = AppConstants;
