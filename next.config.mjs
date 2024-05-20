/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		POSTGRES_URL: process.env.POSTGRES_URL,
		POSTGRES_USER: process.env.POSTGRES_USER,
		POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
		POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
		POSTGRES_HOST: process.env.POSTGRES_HOST,
	},
	async headers() {
		return [
			{
				source: '/src/app/actions/:path*',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
				],
			},
		];
	},
};

export default nextConfig;
