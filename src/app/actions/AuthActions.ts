import db from '../../../drizzle/db';
import { UsersTable } from '../../../drizzle/schema';
import { UserType } from '../types/user';
import * as bcrypt from 'bcryptjs';

export class AuthActions {
	static async register(newUser: UserType) {
		console.log(process.env.POSTGRES_URL);

		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);

		return db
			.insert(UsersTable)
			.values({ ...newUser, password: hashedPassword });
	}
}
