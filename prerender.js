import fs from 'node:fs';
import path from 'node:path';
import {glob} from 'glob';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { render } = await import('./dist/server/entry-server.js');

const toAbsolute = (p) => path.resolve(__dirname, `dist/static/${p}`);

const template = fs.readFileSync(toAbsolute('index.html'), 'utf-8')

const pages = glob.sync('src/pages/**/*.tsx');

for (const path of pages) {
	let dirPath = path.replace('src/pages/', '').replace('.tsx', '');
	const routerLocation = dirPath === 'index' ? '' : dirPath.replace('/index', '');

	const appHtml = render(`/${routerLocation}`);
	const html = template.replace(`<!--app-html-->`, appHtml);

	dirPath += dirPath === 'index' || dirPath.endsWith('index') ? '.html' : '/index.html';

	const dirs = dirPath.replace('index.html', '');
	const indexPath = toAbsolute(dirs);

	if (!!dirs.length && !fs.existsSync(indexPath)) {
		fs.mkdirSync(indexPath, { recursive: true })
	}

	fs.writeFileSync(toAbsolute(dirPath), html);
}