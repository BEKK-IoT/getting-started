const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	arduino : {
    		name: 'Arduino',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'git@github.com:BEKK-IoT/arduino-uno.git',
    		tasks: ['setup', 'arduino/led']
    	},
    	rpi: {
    		name: 'Raspberry Pi',
    		url: 'undefined',
    		git: 'undefined',
    		tasks: ['setup']
    	},
    	photon: {
    		name: 'Photon',
    		url: 'https://github.com/BEKK-IoT/photon',
    		git: 'git@github.com:BEKK-IoT/photon.git',
    		tasks: ['setup']
    	}
    }
};

module.exports = AppConstants;