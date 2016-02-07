const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	arduino : {
    		name: 'Arduino',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'https://github.com/BEKK-IoT/arduino-uno.git',
    		tasks: ['arduino/blinking_led', 'arduino/button', 'arduino/potentiometer', 'arduino/task4', 'arduino/task5', 'arduino/task6']

    	}
    },
    GENERAL_TASKS: []
};

module.exports = AppConstants;
