const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	arduino : {
    		name: 'Arduino',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'git@github.com:BEKK-IoT/arduino-uno.git',
    		tasks: ['arduino/led']
    	},
    	photon: {
    		name: 'Photon',
    		url: 'https://github.com/BEKK-IoT/photon',
    		git: 'git@github.com:BEKK-IoT/photon.git',
    		tasks: []
    	}
    },
    GENERAL_TASKS: ['game/play']
};

module.exports = AppConstants;
