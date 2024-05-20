import { NextResponse } from 'next/server';
import * as bcrypt from 'bcryptjs';
import db from '../../../../drizzle/db';
import { UsersTable } from '../../../../drizzle/schema';

export async function POST(request: Request) {
	const body = await request.json();

	try {
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(body.password, saltRounds);

		await db
			.insert(UsersTable)
			.values({ ...body, password: hashedPassword });

		return NextResponse.json('Successfully created user', { status: 201 });
	} catch (error) {
		console.log('something went wrong: ', error);
		return NextResponse.json({ error }, { status: 500 });
	}
}
