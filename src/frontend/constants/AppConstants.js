const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	arduino : {
    		name: 'Arduino',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'https://github.com/BEKK-IoT/arduino-uno.git',
    		tasks: ['arduino/led', 'arduino/button', 'arduino/potentiometer']
    	}
    },
    GENERAL_TASKS: ['game/play', 'lamp/controll', 'sphero']
};

module.exports = AppConstants;
