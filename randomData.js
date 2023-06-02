const functions = require('./functions');
const endpoints = require('./random_api/urls_api.js');

const leerUrl = async () => {
	const urls = endpoints.endpoints.urls;
	// const jsonUrls = JSON.parse(urls);
	urls.forEach((url) => functions.leerData(url));
};
leerUrl();
