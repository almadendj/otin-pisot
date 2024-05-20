'use client';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Input,
} from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { UserType } from '@/app/types/user';

const CreateUserForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserType>();

	const onSubmit = async (data: UserType) => {
		console.log(data);
	};

	return (
		<Card className='w-full'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CardHeader>Create User</CardHeader>
				<CardBody className='space-y-9'>
					<Input
						{...register('name', { required: true })}
						label='Name'
						labelPlacement='outside'
						placeholder='Enter your name'
					/>
					<Input
						{...register('email', { required: true })}
						type='email'
						label='Email'
						labelPlacement='outside'
						placeholder='Enter your email'
					/>
					<Input
						{...register('password', { required: true })}
						type='password'
						label='Password'
						labelPlacement='outside'
						placeholder='Enter your password'
					/>
				</CardBody>
				<CardFooter>
					<Button
						type='submit'
						fullWidth
					>
						Create User
					</Button>
				</CardFooter>
			</form>
		</Card>
	);
};

export default CreateUserForm;
