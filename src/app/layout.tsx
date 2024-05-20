import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'OTIN PISOT',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<link
				rel='icon'
				href='/favicon.ico?v=1'
				sizes='any'
			/>
			<body className={inter.className + ' dark'}>
				<NextUIProvider>{children}</NextUIProvider>
			</body>
		</html>
	);
}
