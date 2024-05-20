import { UserType } from '../types/user';
import axios from 'axios';

export class AuthService {
	static async register(newUser: UserType) {
		const registerResponse = await axios.post('/api/create-user', newUser);

		return registerResponse.data;
	}
}
