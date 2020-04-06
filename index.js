const DEFAULT_VIBRANCY = "dark";
const DEFAULT_BACKGROUND = "rgba(0,0,0,0)";

exports.decorateConfig = (config) => {

	const vibrance = config.setVibrancy || DEFAULT_VIBRANCY;
	const background = config.backgroundColor || DEFAULT_BACKGROUND;

	exports.onWindow = (browserWindow) => {
		browserWindow.setVibrancy(vibrance);
	}

	return Object.assign({}, config, {
		//force reassign background colour
		css: `
			${config.css || ''}

			.hyper_main {
				background-color: ${background} !important;
			}
	    `
	});
}
