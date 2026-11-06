import type { APIRoute } from 'astro';
import { products } from '../data/products';
import { legalPages } from '../data/legal';
import { site } from '../data/site';

const paths = [
	'/',
	'/plakalar/',
	...products.map((product) => `/plakalar/${product.slug}/`),
	'/hakkimizda/',
	'/iletisim/',
	'/sss/',
	...legalPages.map((page) => `/bilgi/${page.slug}/`),
];

export const GET: APIRoute = () => {
	const urls = paths
		.map((path) => `\t<url><loc>${new URL(path, site.url).href}</loc></url>`)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
