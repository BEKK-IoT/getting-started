const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	arduino : {
    		name: 'Arduino',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'git@github.com:BEKK-IoT/arduino-uno.git',
    		tasks: ['arduino/led']
    	},
    	rpi: {
    		name: 'Raspberry Pi',
    		url: 'undefined',
    		git: 'undefined',
    		tasks: []
    	},
    	photon: {
    		name: 'Photon',
    		url: 'https://github.com/BEKK-IoT/photon',
    		git: 'git@github.com:BEKK-IoT/photon.git',
    		tasks: []
    	}
    }
};

module.exports = AppConstants;
