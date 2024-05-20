import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	console.log('middlware is running');

	const response = NextResponse.next();

	// Set CORS headers
	response.headers.set('Access-Control-Allow-Origin', '*'); // Adjust this to match your client's domain in production
	response.headers.set(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, DELETE',
	);
	response.headers.set(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization',
	);

	// Optionally check for OPTIONS method and return early
	if (request.method === 'OPTIONS') {
		return new Response(null, { status: 204 }); // 204 No Content
	}

	return response;
}
