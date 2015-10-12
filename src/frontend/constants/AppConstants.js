const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	arduino : {
    		name: 'Arduino',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'https://github.com/BEKK-IoT/arduino-uno.git',
    		tasks: ['arduino/led', 'arduino/button', 'arduino/potentiometer']
    	},
    	photon: {
    		name: 'Photon',
    		url: 'https://github.com/BEKK-IoT/photon',
    		git: 'https://github.com/BEKK-IoT/photon.git',
    		tasks: ['photon/led', 'photon/button']
    	}
    },
    GENERAL_TASKS: ['game/play', 'lamp/controll', 'sphero']
};

module.exports = AppConstants;
