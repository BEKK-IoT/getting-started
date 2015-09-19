const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	arduino : {
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'git@github.com:BEKK-IoT/arduino-uno.git',
    		tasks: ['setup', 'arduino/task/led']
    	},
    	rpi: {
    		url: 'undefined',
    		git: 'undefined'
    	},
    	photon: {
    		url: 'https://github.com/BEKK-IoT/photon',
    		git: 'git@github.com:BEKK-IoT/photon.git'
    	}
    }
};

module.exports = AppConstants;