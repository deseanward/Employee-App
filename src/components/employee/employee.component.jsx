import React from 'react';
import EmployeeInfoHero from '../employee-info-hero/employee-info-hero.component';
import EmployeeInfo from '../employee-info/employee-info.component';
import Header from '../header/header.component';
import { EmployeeContainer } from './employee.styles';

const Employee = () => {
	return (
		<EmployeeContainer>
			<Header heading='Employee' />
			<EmployeeInfoHero />
			<EmployeeInfo />
		</EmployeeContainer>
	);
};

export default Employee;
