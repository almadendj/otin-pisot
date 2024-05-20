/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		POSTGRES_URL: process.env.POSTGRES_URL,
		POSTGRES_USER: process.env.POSTGRES_USER,
		POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
		POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
		POSTGRES_HOST: process.env.POSTGRES_HOST,
	},
};

export default nextConfig;
