import { NextResponse } from 'next/server';
import db from '../../../../drizzle/db';
import { UsersTable } from '../../../../drizzle/schema';
import { getTableColumns } from 'drizzle-orm';

export async function GET() {
	const { password, ...rest } = getTableColumns(UsersTable);
	const users = await db.select({ ...rest }).from(UsersTable);

	return NextResponse.json(users);
}
