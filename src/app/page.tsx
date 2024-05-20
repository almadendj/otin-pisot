import Image from 'next/image';
import jonne from '../../public/jonne.jpg';
import CreateUserForm from '@/components/CreateUserForm';
import MainWrapper from '@/components/MainWrapper';

export default function Home() {
	return (
		<main className='flex h-screen flex-col items-center justify-center overflow-hidden'>
			<MainWrapper>
				<CreateUserForm />
			</MainWrapper>
			{/* <Image className="w-full h-full object-cover" src={jonne} alt="jonne" /> */}
		</main>
	);
}
