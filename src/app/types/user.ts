import { UsersTable } from '../../../drizzle/schema';

export type UserType = typeof UsersTable.$inferInsert;
