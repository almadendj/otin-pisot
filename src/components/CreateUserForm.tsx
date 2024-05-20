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
import { toast } from 'react-toastify';
import { useState } from 'react';
import { AuthActions } from '@/app/actions/AuthActions';

interface CreateUserFormType extends UserType {
	confirm_password: string;
}

const CreateUserForm = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<CreateUserFormType>();

	const onSubmit = async (data: UserType) => {
		console.log(data);

		setLoading(true);

		toast
			.promise(() => AuthActions.register(data), {
				pending: 'Creating user...',
				success: 'User created successfully',
			})
			.then(() => {})
			.catch((e) => {
				console.log(e);
			})
			.finally(() => setLoading(false));
	};

	return (
		<Card className='w-full'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CardHeader>Create User</CardHeader>
				<CardBody className='space-y-9'>
					<Input
						{...register('name', {
							required: 'This field is required',
						})}
						label='Name'
						labelPlacement='outside'
						placeholder='Enter your name'
						isInvalid={!!errors.name}
						errorMessage={errors.name ? errors.name.message : ''}
					/>
					<Input
						{...register('email', {
							required: 'This field is required',
						})}
						type='email'
						label='Email'
						labelPlacement='outside'
						placeholder='Enter your email'
						color={errors.email ? 'danger' : 'default'}
						isClearable
						isInvalid={!!errors.email}
						errorMessage={errors.email ? errors.email.message : ''}
					/>
					<Input
						{...register('password', {
							required: 'This field is required',
							validate: (value) =>
								value.length >= 6 ||
								'Password must be at least 6 characters',
						})}
						type='password'
						label='Password'
						labelPlacement='outside'
						placeholder='Enter your password'
						isClearable
						isInvalid={!!errors.password}
						errorMessage={
							errors.password ? errors.password.message : ''
						}
					/>
					<Input
						{...register('confirm_password', {
							required: 'This field is required',
							validate: (value) =>
								value === watch('password') ||
								'Passwords do not match',
						})}
						type='password'
						label='Confirm Password'
						isClearable
						labelPlacement='outside'
						placeholder='Confirm your password'
						isInvalid={!!errors.confirm_password}
						errorMessage={
							errors.confirm_password
								? errors.confirm_password.message
								: ''
						}
					/>
				</CardBody>
				<CardFooter>
					<Button
						type='submit'
						fullWidth
						isLoading={loading}
					>
						Create User
					</Button>
				</CardFooter>
			</form>
		</Card>
	);
};

export default CreateUserForm;
