const MainWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <div className='w-full md:w-1/2'>{children}</div>;
};

export default MainWrapper;
