import './drizzle/envConfig';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql',
	schema: './drizzle/schema.ts',
	out: './src/drizzle',
	dbCredentials: {
		url: process.env.POSTGRES_URL,
		database: process.env.POSTGRES_DATABASE!,
		user: process.env.POSTGRES_USER!,
		password: process.env.POSTGRES_PASSWORD!,
		host: process.env.POSTGRES_HOST!,
	},
});
