import React from 'react';
import EmployeeDirectory from '../employee-directory/employee-directory.component';
import Header from '../header/header.component';
import Search from '../search/search.component';
import { HomeContainer } from './home.styles';

const Home = () => {
	return (
		<HomeContainer>
			<Header heading='Employee Directory' />
			<Search />
			<EmployeeDirectory />
		</HomeContainer>
	);
};

export default Home;
