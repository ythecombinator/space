const { createServer } = require('http');
const { parse } = require('url');
const { join } = require('path');
const moduleAlias = require('module-alias');
const next = require('next');
const routes = require('./routes');

const isDev = process.env.NODE_ENV !== 'production';

if (!isDev) {
	moduleAlias.addAlias('react', 'preact-compat');
	moduleAlias.addAlias('react-dom', 'preact-compat');
}

const app = next({ dir: 'src', dev: isDev });
const pagesHandler = routes.getRequestHandler(app);
const PORT = process.env.PORT || 3000;

const staticHandler = (req, res) => {

	const parsedUrl = parse(req.url, true);

	const rootStaticFiles = ['/sw.js'];

	if (rootStaticFiles.includes(parsedUrl.pathname)) {
		const filePath = join(__dirname, 'build', parsedUrl.pathname);
		app.serveStatic(req, res, filePath);
	} else {
		pagesHandler(req, res, parsedUrl);
	}

};

app.prepare().then(() => {
	createServer(staticHandler).listen(PORT, err => {
		if (err) throw err;
		console.log(`🚀 App running on port ${PORT}`);
	});
});
