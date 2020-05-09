module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: ['@svgr/webpack'],
		});

		return config;
	},
	experimental: {
		modern: true,
		async rewrites() {
			return [
				{ source: '/sitemap.xml', destination: '/api/sitemap' },
			];
		},
		catchAllRouting: true
	},
};
