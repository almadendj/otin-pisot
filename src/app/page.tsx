import Image from 'next/image';
import jonne from '../../public/jonne.jpg';
import CreateUserForm from '@/components/CreateUserForm';
import MainWrapper from '@/components/MainWrapper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
	return (
		<main className='flex h-screen flex-col items-center justify-center overflow-hidden'>
			<ToastContainer
				position='bottom-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
			<MainWrapper>
				<CreateUserForm />
			</MainWrapper>
			{/* <Image className="w-full h-full object-cover" src={jonne} alt="jonne" /> */}
		</main>
	);
}
