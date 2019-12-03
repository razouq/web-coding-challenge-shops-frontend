const proxy = require('http-proxy-middleware');
module.exports = function(app) {
	app.use(
		'/api',
		proxy({
			target: 'https://shops-back.herokuapp.com',
			changeOrigin: true,
		})
	);
};